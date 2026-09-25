import {
  logoUrl, esc, honorsOf, accessibleAccent, readableOn, parseRgb, rgbCss,
  initials, wireImages, MAP_COORD_SPACE,
} from './clubHelpers.js';

// Region -> accent colour, shared by the map fill (css/map.css) and the
// details panel's accent bar, so both always agree.
const REGION_COLOR = {
  'central-velmora': '#f8be36',
  'northern-highlands': '#e6eff0',
  'southern-lakes': '#519ecc',
  'eastern-reaches': '#6e9844',
  'western-plateau': '#9d714c',
  'northern-bay': '#94a3b8',
};

const DEFAULT_DESCRIPTION = 'Click a region on the map (or pick one below) to read what happened there, and which clubs came out of it.';

export function setupRegionInteractivity({
  regionData,
  regionSelector,
  nameElId,
  descElId,
  svgRoot,
}) {
  const mapRegions = svgRoot.querySelectorAll(regionSelector);
  const regionNameEl = document.getElementById(nameElId);
  const regionDescriptionEl = document.getElementById(descElId);
  const accentEl = document.getElementById('region-accent');
  const eyebrowEl = document.getElementById('region-eyebrow');
  const citiesSectionEl = document.getElementById('region-extra');
  const citiesDetailedEl = document.getElementById('cities-detailed');
  const emptyStateEl = document.getElementById('region-empty-state');
  const legendEl = document.getElementById('region-legend');
  const clearBtn = document.getElementById('region-clear');

  let selectedRegionId = null;
  let activeMarkers = [];

  // Marker size in the map's original ~500-wide coordinate space. Kept small
  // so crests read as pins, not as the dominant thing on the map.
  const MARKER_BASE_SIZE = 20;

  function createClubMarker(club, svgRoot) {
    const svgEl = svgRoot.querySelector('svg');
    if (!svgEl) return null;
    const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
    image.setAttribute("href", logoUrl(club.name));
    const vbWidth = svgEl.viewBox && svgEl.viewBox.baseVal ? svgEl.viewBox.baseVal.width : MAP_COORD_SPACE;
    const k = (vbWidth || MAP_COORD_SPACE) / MAP_COORD_SPACE;
    const size = MARKER_BASE_SIZE * k;
    image.setAttribute("x", club.coord[0] * k - size / 2);
    image.setAttribute("y", club.coord[1] * k - size / 2);
    image.setAttribute("width", size);
    image.setAttribute("height", size);
    image.setAttribute("class", "club-marker");

    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.textContent = club.name;
    image.appendChild(title);

    image.style.opacity = 0;
    svgEl.appendChild(image);

    requestAnimationFrame(() => {
      image.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      image.style.opacity = 1;
      image.style.transform = "scale(1.2)";
    });

    return image;
  }

  function clearMarkers() {
    const toRemove = activeMarkers;
    activeMarkers = [];
    toRemove.forEach((m) => {
      m.style.opacity = 0;
      setTimeout(() => m.remove(), 350);
    });
  }

  // Same club-colour theming clubPage.js applies to document.body, but scoped
  // per card (via inline custom properties) since many clubs render at once.
  function clubTheme(club) {
    const colors = club.colors || [];
    const primary = parseRgb(colors[0]);
    const secondary = parseRgb(colors[1] || colors[0]);
    const accent = accessibleAccent(colors);
    const onPrimary = readableOn(primary);
    return `--club-primary:${rgbCss(primary)};--club-secondary:${rgbCss(secondary)};`
      + `--club-accent:${rgbCss(accent)};--on-primary:${rgbCss(onPrimary)}`;
  }

  // Rival crests fall back to an initials badge if the logo is missing.
  function renderRivalBadges(rivals) {
    return `
    <div>
      <h4 class="cp-group-title rp-subhead">Rivals</h4>
      <div class="rp-rivals">
        ${rivals.map(r => {
          let ringColor = '#60a5fa';
          if (r.level > 75) ringColor = '#ef4444';
          else if (r.level > 50) ringColor = '#fb923c';
          return `<span class="rp-rival-ring" style="box-shadow:0 0 0 2px ${ringColor}" title="${esc(r.club)}: ${esc(r.reason)} (${r.level}%)">
            <img loading="lazy" src="${logoUrl(r.club)}" alt="" data-monogram="${esc(initials(r.club))}" />
          </span>`;
        }).join('')}
      </div>
    </div>
    `;
  }

  function renderHonors(club) {
    const honors = honorsOf(club);
    if (!honors.length) return '';
    return `
      <div class="rp-club-honors">
        ${honors.map((h) => `<span class="rp-honor" title="${esc(h.years.join(', '))}">🏆 ${esc(h.code)} × ${h.years.length}</span>`).join('')}
      </div>
    `;
  }

  function renderClubCard(club) {
    const hasHomeKit = !!club.kits?.home;
    const hasAwayKit = !!club.kits?.away;
    return `
      <div class="rp-club" style="${clubTheme(club)}">
        <div class="rp-club-top">
          <img loading="lazy" src="${logoUrl(club.name)}" class="rp-club-crest" alt="${esc(club.name)} crest" data-hide-on-error />
          <div>
            <a href="club.html?club=${encodeURIComponent(club.name)}" target="_blank" class="rp-club-name">
              ${esc(club.name)}
            </a>
            ${club.nickname ? `<p class="rp-club-nick">${esc(club.nickname)}</p>` : ''}
          </div>
          <div class="rp-club-facts">
            ${club.stadium ? `<span>🏟️ ${esc(club.stadium)}</span>` : ''}
            ${club.founded != null ? `<span>📅 Founded ${club.founded}</span>` : '<span>📅 Founding unrecorded</span>'}
            ${club.hashtag ? `<span class="rp-hashtag">${esc(club.hashtag)}</span>` : ''}
          </div>
        </div>
        ${hasHomeKit || hasAwayKit ? `
        <div class="rp-kits">
          ${hasHomeKit ? `<img loading="lazy" src="${club.kits.home}" alt="${esc(club.name)} home kit" title="Home kit" data-hide-on-error />` : ''}
          ${hasAwayKit ? `<img loading="lazy" src="${club.kits.away}" alt="${esc(club.name)} away kit" title="Away kit" data-hide-on-error />` : ''}
        </div>` : ''}
        ${renderHonors(club)}
        ${club.rivals?.length ? renderRivalBadges(club.rivals) : ''}
      </div>
    `;
  }

  function weatherIcon(text) {
    const t = (text || '').toLowerCase();
    if (/fog|mist/.test(t)) return '🌫️';
    if (/snow|frost|frozen|ice|cold/.test(t)) return '❄️';
    if (/rain|damp|wet|drizzle/.test(t)) return '🌧️';
    if (/wind|gale/.test(t)) return '💨';
    if (/sun|clear|mild|warm/.test(t)) return '🌤️';
    return '🌡️';
  }

  function renderCitiesAndClubs(cities) {
    citiesDetailedEl.innerHTML = '';
    Object.entries(cities).forEach(([cityName, cityData], i) => {
      const citySection = document.createElement('div');
      citySection.innerHTML = `
        <details class="rp-city" ${i === 0 ? 'open' : ''}>
          <summary>
            <span class="rp-city-name">🏙️ ${esc(cityName)}</span>
            <span class="rp-city-weather"><span class="ico">${weatherIcon(cityData.climate)}</span>${esc(cityData.climate)}</span>
            <svg class="rp-city-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
          </summary>
          <div class="rp-city-body">
            ${cityData.clubs.map(renderClubCard).join('')}
          </div>
        </details>`;
      citiesDetailedEl.appendChild(citySection);
    });
    wireImages(citiesDetailedEl);
  }

  function extractAllClubs(region) {
    return Object.values(region.cities || {}).flatMap(city => city.clubs || []);
  }

  function setLegendPressed(id) {
    if (!legendEl) return;
    legendEl.querySelectorAll('.map-legend-btn').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.region === id));
    });
  }

  function updatePanel(id) {
    const data = regionData[id];
    if (!data) return;

    regionNameEl.textContent = data.name;
    regionDescriptionEl.textContent = data.description;
    if (eyebrowEl) eyebrowEl.textContent = id === 'northern-bay' ? 'Not on any map' : 'Region of Velmora';
    if (accentEl) accentEl.style.background = REGION_COLOR[id] || '#fbbf24';

    renderCitiesAndClubs(data.cities || {});

    if (emptyStateEl) emptyStateEl.classList.add('hidden');
    if (clearBtn) clearBtn.classList.remove('hidden');
    citiesSectionEl.classList.remove('hidden');
    setTimeout(() => citiesSectionEl.classList.remove('opacity-0'), 10);

    clearMarkers();
    extractAllClubs(data).forEach(club => {
      if (club.coord) {
        const marker = createClubMarker(club, svgRoot);
        if (marker) activeMarkers.push(marker);
      }
    });

    regionNameEl.setAttribute('tabindex', '-1');
    regionNameEl.focus({ preventScroll: true });
  }

  function updateMapStyles(activeId) {
    mapRegions.forEach(region => {
      const isActive = region.id === activeId;
      region.classList.toggle('active', isActive);
      region.classList.toggle('dimmed', !isActive);
      region.setAttribute('aria-pressed', String(isActive));
    });
  }

  function clearSelection() {
    selectedRegionId = null;
    mapRegions.forEach(region => {
      region.classList.remove('dimmed', 'active');
      region.setAttribute('aria-pressed', 'false');
    });
    setLegendPressed(null);
    regionNameEl.textContent = "Select a Region";
    regionDescriptionEl.textContent = DEFAULT_DESCRIPTION;
    if (eyebrowEl) eyebrowEl.textContent = 'The Republic of Velmora';
    if (accentEl) accentEl.style.background = '#fbbf24';
    if (emptyStateEl) emptyStateEl.classList.remove('hidden');
    if (clearBtn) clearBtn.classList.add('hidden');
    citiesSectionEl.classList.add('opacity-0');
    setTimeout(() => citiesSectionEl.classList.add('hidden'), 500);
    clearMarkers();
  }

  function selectRegion(id) {
    if (selectedRegionId === id) {
      clearSelection();
      return;
    }
    selectedRegionId = id;
    updatePanel(id);
    updateMapStyles(id);
    setLegendPressed(id);
    if (history.replaceState) history.replaceState(null, '', `#${id}`);
  }

  mapRegions.forEach(region => {
    region.setAttribute('tabindex', '0');
    region.setAttribute('role', 'button');
    region.setAttribute('aria-pressed', 'false');
    region.setAttribute('aria-label', `${regionData[region.id]?.name || region.id} region`);

    // Click also focuses the <path> by default, which used to flash the
    // browser's default rectangular focus box around it; blur immediately
    // after a pointer click so only real keyboard focus shows the ring.
    region.addEventListener('click', () => { selectRegion(region.id); region.blur(); });
    region.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ' || ev.key === 'Spacebar') {
        ev.preventDefault();
        selectRegion(region.id);
      }
    });
  });

  if (legendEl) {
    legendEl.querySelectorAll('.map-legend-btn').forEach((btn) => {
      btn.addEventListener('click', () => selectRegion(btn.dataset.region));
    });
  }

  if (clearBtn) clearBtn.addEventListener('click', () => { clearSelection(); if (history.replaceState) history.replaceState(null, '', location.pathname); });

  // Deep-linking: #eastern-reaches opens straight to that region.
  const initial = decodeURIComponent(location.hash.replace('#', ''));
  if (initial && regionData[initial]) {
    selectRegion(initial);
  }
}

export { REGION_COLOR };
