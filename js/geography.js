import { regionData } from './regionData.js';
import { esc, clubUrl, logoUrl, parseRgb, accessibleAccent, readableOn, rgbCss, honorsOf, wireImages } from './clubHelpers.js';

// Same theming used for club cards on the flat map's region panel
// (js/mapUI.js) -- reusing it (plus css/map.css's .rp-club styles) keeps
// this page's club cards visually identical, tinted from each club's own
// colours, instead of a bespoke look just for this page.
function clubTheme(club) {
  const colors = club.colors || [];
  const primary = parseRgb(colors[0]);
  const secondary = parseRgb(colors[1] || colors[0]);
  const accent = accessibleAccent(colors);
  const onPrimary = readableOn(primary);
  return `--club-primary:${rgbCss(primary)};--club-secondary:${rgbCss(secondary)};`
    + `--club-accent:${rgbCss(accent)};--on-primary:${rgbCss(onPrimary)}`;
}

// Region centroids computed from assets/velmora-map.svg itself (each
// region path rasterized at its native 1024x1024 viewBox, centroid taken
// over the filled pixels). That viewBox is the same content-only square as
// assets/3d/geo-diffuse.png / geo-heightmap.png (both built from velmora_map.png
// with its decorative frame cropped out), so svg-space / 1024 = u/v here
// directly -- no extra offset needed. Northern Bay has no path on the flat
// map either -- true to the lore, "it is not drawn on most maps" -- so its
// spot is eyeballed against the art instead.
const HOTSPOTS = [
  { id: 'northern-highlands', u: 0.372, v: 0.263, color: '#e6eff0' },
  { id: 'northern-bay',       u: 0.750, v: 0.180, color: '#94a3b8', mystery: true },
  { id: 'western-plateau',    u: 0.272, v: 0.494, color: '#9d714c' },
  { id: 'central-velmora',    u: 0.537, v: 0.520, color: '#f8be36' },
  { id: 'eastern-reaches',    u: 0.747, v: 0.563, color: '#6e9844' },
  { id: 'southern-lakes',     u: 0.385, v: 0.744, color: '#519ecc' },
];

// Every club's own coord: [x,y] (from data/regions/*.js) turned out NOT to
// match the "vbWidth/500" formula js/mapUI.js uses for the flat map -- that
// put a third of clubs outside their own region's shape entirely. Instead
// this scale+offset was fit empirically (grid search maximizing how many
// clubs land inside their own region's rasterized SVG path): svg-space
// pixel = coord*2.38 + [20,22]. That's 75/75 clubs landing correctly.
const CLUB_COORD_SCALE = 2.38;
const CLUB_COORD_OFFSET = [20, 22];

function buildClubMarkers() {
  const markers = [];
  Object.entries(regionData).forEach(([regionId, region]) => {
    const cities = region.cities || {};
    Object.entries(cities).forEach(([cityName, city]) => {
      (city.clubs || []).forEach((club) => {
        if (!club.coord) return;
        const svgX = club.coord[0] * CLUB_COORD_SCALE + CLUB_COORD_OFFSET[0];
        const svgY = club.coord[1] * CLUB_COORD_SCALE + CLUB_COORD_OFFSET[1];
        markers.push({
          regionId, cityName, club,
          u: svgX / 1024,
          v: svgY / 1024,
        });
      });
    });
  });
  return markers;
}

const MAP_SIZE = 120;
const DISPLACEMENT = 20;
const isSmallScreen = window.matchMedia('(max-width: 700px)').matches;
const SEGMENTS = isSmallScreen ? 110 : 200;

let scene, camera, renderer, controls, terrainMesh, raycaster, markerGroup, clubMarkerGroup;
let heightData = null, heightW = 0, heightH = 0;
let markerEls = [];
let bobbingMarkers = []; // { sprites, baseY, phase } -- crests that bounce each frame, like the demo's billboard.position.y sine bob
let clubClickTargets = []; // just the backing+crest sprites (not rings/pillars) -- what raycasting checks for clicks
const CLUB_MARKERS = buildClubMarkers();
const clock = new THREE.Clock();

function sampleHeight01(u, v) {
  if (!heightData) return 0;
  const px = Math.min(heightW - 1, Math.max(0, Math.floor(u * heightW)));
  const py = Math.min(heightH - 1, Math.max(0, Math.floor(v * heightH)));
  return heightData[(py * heightW + px) * 4] / 255;
}

function uvToWorld(u, v) {
  return {
    x: (u - 0.5) * MAP_SIZE,
    z: (v - 0.5) * MAP_SIZE,
    y: sampleHeight01(u, v) * DISPLACEMENT,
  };
}

function loadImageData(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = img.width; c.height = img.height;
      const ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0);
      resolve({ data: ctx.getImageData(0, 0, img.width, img.height).data, w: img.width, h: img.height });
    };
    img.onerror = reject;
    img.src = url;
  });
}

// Small round "coin" behind each crest so it reads against any terrain
// colour underneath -- same idea as the white stroke + drop-shadow the flat
// map gives club markers in css/map.css, just baked into a canvas texture
// since sprites can't take CSS filters. One cached texture per region colour.
const CREST_BACKING_CACHE = new Map();
function getBackingTexture(colorHex) {
  if (CREST_BACKING_CACHE.has(colorHex)) return CREST_BACKING_CACHE.get(colorHex);
  const size = 64;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 3, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(13,27,42,0.94)';
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = colorHex;
  ctx.stroke();
  const tex = new THREE.CanvasTexture(c);
  CREST_BACKING_CACHE.set(colorHex, tex);
  return tex;
}

async function buildScene(container) {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0d1b2a);
  scene.fog = new THREE.Fog(0x0d1b2a, 90, 230);

  camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.set(0, 78, 88);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = 25;
  controls.maxDistance = 170;
  controls.maxPolarAngle = Math.PI * 0.49;
  controls.target.set(0, 4, 0);

  scene.add(new THREE.HemisphereLight(0xbcd4ff, 0x2a2010, 0.9));
  const sun = new THREE.DirectionalLight(0xfff3d6, 1.15);
  sun.position.set(-60, 90, 40);
  scene.add(sun);

  // --- heightmap (CPU-sampled, for exact vertex + marker placement) ---
  const h = await loadImageData('assets/3d/geo-heightmap.png');
  heightData = h.data; heightW = h.w; heightH = h.h;

  // --- terrain mesh, displaced from the real map's elevation ---
  const geo = new THREE.PlaneGeometry(MAP_SIZE, MAP_SIZE, SEGMENTS, SEGMENTS);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const u = x / MAP_SIZE + 0.5, v = z / MAP_SIZE + 0.5;
    pos.setY(i, sampleHeight01(u, v) * DISPLACEMENT);
  }
  geo.computeVertexNormals();

  const diffuse = new THREE.TextureLoader().load('assets/3d/geo-diffuse.png');
  diffuse.colorSpace = THREE.SRGBColorSpace ?? diffuse.colorSpace;
  const mat = new THREE.MeshStandardMaterial({ map: diffuse, roughness: 0.92, metalness: 0.02 });
  terrainMesh = new THREE.Mesh(geo, mat);
  scene.add(terrainMesh);

  // --- water plane ---
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(MAP_SIZE * 1.6, MAP_SIZE * 1.6),
    new THREE.MeshStandardMaterial({ color: 0x1c4d73, transparent: true, opacity: 0.82, roughness: 0.3, metalness: 0.1 })
  );
  water.rotateX(-Math.PI / 2);
  water.position.y = 0.75;
  scene.add(water);

  // --- Northern Bay maelstrom: a slowly spinning dark ring over the void ---
  const bay = HOTSPOTS.find((h) => h.id === 'northern-bay');
  const bayPos = uvToWorld(bay.u, bay.v);
  const vortex = new THREE.Mesh(
    new THREE.RingGeometry(6, 15, 48),
    new THREE.MeshBasicMaterial({ color: 0x2b3a4a, transparent: true, opacity: 0.55, side: THREE.DoubleSide })
  );
  vortex.rotateX(-Math.PI / 2);
  vortex.position.set(bayPos.x, 1.1, bayPos.z);
  vortex.name = 'vortex';
  scene.add(vortex);

  // --- region hotspot markers: a small 3D beacon plus an HTML label kept in
  // screen-space sync each frame (classic project()-to-pixels technique) ---
  markerGroup = new THREE.Group();
  const labelLayer = document.getElementById('geo-markers-layer');
  markerEls = HOTSPOTS.map((h) => {
    const p = uvToWorld(h.u, h.v);
    const dot = new THREE.Mesh(
      new THREE.SphereGeometry(1.1, 16, 16),
      new THREE.MeshBasicMaterial({ color: h.color })
    );
    dot.position.set(p.x, p.y + 3.2, p.z);
    dot.userData.regionId = h.id;
    markerGroup.add(dot);

    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'geo-marker' + (h.mystery ? ' is-mystery' : '');
    const label = regionData[h.id]?.name ?? h.id;
    el.innerHTML = `<span class="geo-marker-label">${esc(label)}</span><span class="geo-marker-dot" style="background:${h.color}"></span>`;
    el.addEventListener('click', () => selectRegion(h.id));
    labelLayer?.appendChild(el);

    return { el, worldPos: new THREE.Vector3(p.x, p.y + 3.2, p.z) };
  });
  scene.add(markerGroup);

  // --- club pins: lifted up off the ground, same structure as your demo --
  // a glowing ring anchored at terrain level, a translucent light pillar
  // rising from it, and the crest (billboarded, always facing the camera)
  // floating at the top with a gentle continuous bob. ---
  clubMarkerGroup = new THREE.Group();
  const crestLoader = new THREE.TextureLoader();
  const CREST_SIZE = 2.2;
  const LIFT = 5.5;
  bobbingMarkers = [];
  clubClickTargets = [];
  CLUB_MARKERS.forEach((m, idx) => {
    const p = uvToWorld(m.u, m.v);
    const color = HOTSPOTS.find((h) => h.id === m.regionId)?.color ?? '#fbbf24';
    const crestY = p.y + LIFT;

    // ground ring anchor
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.9, 0.1, 10, 24),
      new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.6, roughness: 0.4 })
    );
    ring.rotateX(Math.PI / 2);
    ring.position.set(p.x, p.y + 0.15, p.z);
    clubMarkerGroup.add(ring);

    // translucent light pillar rising from the ring to the crest
    const pillar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.55, LIFT, 12, 1, true),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.28, side: THREE.DoubleSide, depthWrite: false })
    );
    pillar.position.set(p.x, p.y + LIFT / 2, p.z);
    clubMarkerGroup.add(pillar);

    const backing = new THREE.Sprite(new THREE.SpriteMaterial({ map: getBackingTexture(color), transparent: true, depthWrite: false }));
    backing.scale.set(CREST_SIZE * 1.35, CREST_SIZE * 1.35, 1);
    backing.position.set(p.x, crestY, p.z);
    backing.renderOrder = 1;
    backing.userData.club = m;
    clubMarkerGroup.add(backing);
    clubClickTargets.push(backing);

    const crestMat = new THREE.SpriteMaterial({ transparent: true, depthWrite: false, opacity: 0 });
    const crest = new THREE.Sprite(crestMat);
    crest.scale.set(CREST_SIZE, CREST_SIZE, 1);
    crest.position.set(p.x, crestY, p.z);
    crest.renderOrder = 2;
    crest.userData.club = m;
    clubMarkerGroup.add(crest);
    clubClickTargets.push(crest);

    // bob the crest and its backing coin together, phase-offset per marker
    // so the whole field doesn't pulse in lockstep
    bobbingMarkers.push({ sprites: [backing, crest], baseY: crestY, phase: idx });

    crestLoader.load(
      logoUrl(m.club.name),
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace ?? tex.colorSpace;
        const img = tex.image;
        if (img && img.width && img.height) {
          const ar = img.width / img.height;
          crest.scale.set(CREST_SIZE * ar, CREST_SIZE, 1);
        }
        crestMat.map = tex;
        crestMat.opacity = 1;
        crestMat.needsUpdate = true;
      },
      undefined,
      () => { /* no crest asset for this club -- the coloured backing coin still shows and is still clickable */ }
    );
  });
  scene.add(clubMarkerGroup);

  raycaster = new THREE.Raycaster();

  window.addEventListener('resize', onResize);
  renderer.domElement.addEventListener('click', onClick);

  animate();
}

function onResize() {
  const container = document.getElementById('geo-canvas-container');
  if (!container || !renderer) return;
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}

function onClick(ev) {
  const rect = renderer.domElement.getBoundingClientRect();
  const mouse = new THREE.Vector2(
    ((ev.clientX - rect.left) / rect.width) * 2 - 1,
    -((ev.clientY - rect.top) / rect.height) * 2 + 1
  );
  raycaster.setFromCamera(mouse, camera);
  if (clubMarkerGroup.visible) {
    const clubHit = raycaster.intersectObjects(clubClickTargets, false)[0];
    if (clubHit) { selectClub(clubHit.object.userData.club); return; }
  }
  if (markerGroup.visible) {
    const hit = raycaster.intersectObjects(markerGroup.children, false)[0];
    if (hit) selectRegion(hit.object.userData.regionId);
  }
}

function toggleRegions(btn) {
  const visible = !markerGroup.visible;
  markerGroup.visible = visible;
  document.getElementById('geo-markers-layer')?.classList.toggle('is-hidden', !visible);
  btn.setAttribute('aria-pressed', String(visible));
}

function toggleClubs(btn) {
  const visible = !clubMarkerGroup.visible;
  clubMarkerGroup.visible = visible;
  btn.setAttribute('aria-pressed', String(visible));
}

function flyTo(u, v, dist = 45) {
  const p = uvToWorld(u, v);
  gsap.to(controls.target, { x: p.x, y: p.y, z: p.z, duration: 1.1, ease: 'power2.inOut' });
  gsap.to(camera.position, {
    x: p.x + dist * 0.6, y: p.y + dist * 0.55, z: p.z + dist * 0.75,
    duration: 1.1, ease: 'power2.inOut',
  });
}

function resetView() {
  gsap.to(controls.target, { x: 0, y: 4, z: 0, duration: 1.1, ease: 'power2.inOut' });
  gsap.to(camera.position, { x: 0, y: 78, z: 88, duration: 1.1, ease: 'power2.inOut' });
}

// --- region info panel ---
function openPanel() {
  document.getElementById('geo-panel')?.classList.remove('is-hidden');
}
function closePanel() {
  document.getElementById('geo-panel')?.classList.add('is-hidden');
}

function selectRegion(id) {
  const hotspot = HOTSPOTS.find((h) => h.id === id);
  const region = regionData[id];
  if (!hotspot || !region) return;
  flyTo(hotspot.u, hotspot.v);

  const body = document.getElementById('geo-panel-body');
  if (!body) return;
  const cities = region.cities ? Object.keys(region.cities) : [];
  body.innerHTML = `
    <p class="rp-eyebrow">${hotspot.mystery ? 'Unmapped region' : 'Region'}</p>
    <h2 style="font-family:'Cinzel',serif;color:#fcd34d;font-size:1.4rem;">${esc(region.name)}</h2>
    <div class="rp-accent" style="background:${hotspot.color}"></div>
    <p style="color:#cbd5e1;line-height:1.6;">${esc(region.description || '')}</p>
    ${cities.length ? `<p class="rp-subhead" style="margin-top:1rem;">Cities</p>
      <ul class="geo-panel-city-list">${cities.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>` : ''}
  `;
  openPanel();
}

// --- club info panel ---
function selectClub(marker) {
  const { club, cityName, regionId } = marker;
  flyTo(marker.u, marker.v, 16);

  const body = document.getElementById('geo-panel-body');
  if (!body) return;
  const regionName = regionData[regionId]?.name ?? regionId;
  const honors = honorsOf(club);
  body.innerHTML = `
    <p class="rp-eyebrow">${esc(cityName)} · ${esc(regionName)}</p>
    <div class="rp-club" style="${clubTheme(club)}">
      <div class="rp-club-top">
        <img loading="lazy" src="${logoUrl(club.name)}" class="rp-club-crest" alt="${esc(club.name)} crest" data-hide-on-error />
        <div>
          <a href="${clubUrl(club.name)}" target="_blank" class="rp-club-name">${esc(club.name)}</a>
          ${club.nickname ? `<p class="rp-club-nick">${esc(club.nickname)}</p>` : ''}
        </div>
        <div class="rp-club-facts">
          ${club.stadium ? `<span>🏟️ ${esc(club.stadium)}</span>` : ''}
          ${club.founded != null ? `<span>📅 Founded ${club.founded}</span>` : ''}
        </div>
      </div>
      ${honors.length ? `<div class="rp-club-honors">${honors.map((h) => `<span class="rp-honor" title="${esc(h.years.join(', '))}">🏆 ${esc(h.code)} × ${h.years.length}</span>`).join('')}</div>` : ''}
    </div>
    <a href="${clubUrl(club.name)}" class="geo-btn" style="display:inline-block;margin-top:.9rem;position:static;">View club page →</a>
  `;
  wireImages(body);
  openPanel();
}

function updateMarkerLabels() {
  const container = document.getElementById('geo-canvas-container');
  const w = container.clientWidth, h = container.clientHeight;
  const v = new THREE.Vector3();
  markerEls.forEach(({ el, worldPos }) => {
    v.copy(worldPos).project(camera);
    if (v.z > 1) { el.style.display = 'none'; return; }
    el.style.display = '';
    el.style.left = `${(v.x * 0.5 + 0.5) * w}px`;
    el.style.top = `${(-v.y * 0.5 + 0.5) * h}px`;
  });
}

function animate() {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();
  const vortex = scene.getObjectByName('vortex');
  if (vortex) vortex.rotation.z = t * 0.15;
  bobbingMarkers.forEach(({ sprites, baseY, phase }) => {
    const y = baseY + Math.sin(t * 2 + phase) * 0.6;
    sprites.forEach((s) => { s.position.y = y; });
  });
  controls.update();
  renderer.render(scene, camera);
  updateMarkerLabels();
}

// --- boot ---
async function init() {
  const container = document.getElementById('geo-canvas-container');
  const loading = document.getElementById('geo-loading');
  const fallback = document.getElementById('geo-fallback');
  const stage = document.getElementById('geo-stage');

  if (typeof THREE === 'undefined' || !window.WebGLRenderingContext) {
    stage.style.display = 'none';
    fallback.style.display = 'block';
    return;
  }

  try {
    await buildScene(container);
  } catch (err) {
    console.error('Geography scene failed to load:', err);
    stage.style.display = 'none';
    fallback.style.display = 'block';
    return;
  }

  loading.classList.add('is-hidden');

  document.getElementById('geo-reset')?.addEventListener('click', resetView);
  document.getElementById('geo-panel-close')?.addEventListener('click', closePanel);
  document.getElementById('geo-toggle-regions')?.addEventListener('click', (e) => toggleRegions(e.currentTarget));
  document.getElementById('geo-toggle-clubs')?.addEventListener('click', (e) => toggleClubs(e.currentTarget));
  document.querySelectorAll('[data-fly-region]').forEach((btn) => {
    btn.addEventListener('click', () => selectRegion(btn.dataset.flyRegion));
  });
}

init();