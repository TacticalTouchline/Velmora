// clubPage.js — builds a club page from the region data.
// The page is assembled here in one module, so the old files in components/clubPage/ are no longer used.
import {
  allClubs, findClub, clubUrl, logoUrl, stadiumUrl, esc, honorsOf, COMPETITIONS,
  parseRgb, rgbCss, accessibleAccent, readableOn, parseHistory, assignHonors,
  initials, TRAITS, wireImages, mapCoordToPercent,
} from './clubHelpers.js';
import { storyTags, PEOPLES, CHAPTERS } from '../data/storyTags.js';
import { renderNav, wireNav } from './siteNav.js';

// The fixtures come from a game save, so "today" is the save date rather than the real date.
const CURRENT_DATE = new Date(2025, 7, 22);

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const SHORT = {
  UCL: 'European Cup', VSL: 'League', TVC: 'Cup', VNN: 'National Liga', VHC: 'Heritage Cup',
  VERL: 'East League', VNRL: 'North League', VSRL: 'South League', VWRL: 'West League',
};

const container = document.getElementById('club-container');
document.getElementById('site-nav').innerHTML = renderNav('fa-clubs');
wireNav();

const clubNames = new Set(allClubs().map((e) => e.club.name));
const params = new URLSearchParams(window.location.search);
const wanted = params.get('club');

init();

function init() {
  const entry = wanted ? findClub(wanted) : null;
  if (!entry) {
    container.innerHTML = `<div class="cp-missing"><h1>No such club</h1>
      <p>${wanted ? `Nobody in Velmora has heard of “${esc(wanted)}”.` : 'No club was named.'}</p>
      <p><a href="clubs.html">Browse all clubs</a></p></div>`;
    return;
  }
  document.title = `${entry.club.name} — Velmora`;
  if (entry.club.name === 'The Vanished XI') renderFog(entry);
  else renderClub(entry);
  wireImages(container);
  wireHero(container);
}

/* ---------- Small helpers ---------- */
function stripQuotes(s) { return String(s || '').replace(/^[\s“"‘']+|[\s”"’']+$/g, ''); }
function linkOrText(name, inner) { return clubNames.has(name) ? `<a href="${clubUrl(name)}">${inner}</a>` : inner; }

function applyTheme(club) {
  const colors = club.colors || [];
  const primary = parseRgb(colors[0]);
  const s = document.body.style;
  s.setProperty('--club-primary', rgbCss(primary));
  s.setProperty('--club-secondary', rgbCss(parseRgb(colors[1] || colors[0])));
  s.setProperty('--club-accent', rgbCss(accessibleAccent(colors)));
  s.setProperty('--on-primary', rgbCss(readableOn(primary)));
}

/* ---------- Page sections ---------- */
function heroHtml(e) {
  const c = e.club;
  return `<header class="cp-hero">
    <img class="cp-hero-img" src="${stadiumUrl(c.name)}" alt="" data-hide-on-error />
    <div class="cp-hero-shade"></div>
    <button type="button" class="cp-hero-toggle" aria-pressed="false" aria-label="Expand to show the full stadium image">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline>
        <line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>
      </svg>
    </button>
    <div class="cp-hero-inner">
      <img class="cp-crest" src="${logoUrl(c.name)}" alt="Crest of ${esc(c.name)}" data-hide-on-error />
      <div>
        <p class="cp-crumbs"><a href="index.html">Velmora</a> / <a href="clubs.html?region=${e.regionId}">${esc(e.regionName)}</a> / <a href="clubs.html?city=${encodeURIComponent(e.city)}">${esc(e.city)}</a></p>
        <h1>${esc(c.name)}</h1>
        ${c.nickname ? `<p class="cp-nick">${esc(c.nickname)}</p>` : ''}
        ${c.club_slogan ? `<p class="cp-slogan">“${esc(stripQuotes(c.club_slogan))}”</p>` : ''}
      </div>
    </div>
  </header>`;
}

function swatchesHtml(colors) {
  return `<div class="cp-swatches">${(colors || []).map((col) => `<span class="cp-swatch" style="background:${esc(col)}" title="${esc(col)}"></span>`).join('')}</div>`;
}

function factsHtml(e) {
  const c = e.club;
  const cap = c.stadium_details && c.stadium_details.max_attendance;
  const cells = [];
  cells.push(['Founded', c.founded != null ? esc(c.founded) : 'Unrecorded']);
  if (c.competition_tier) cells.push(['League', `${esc(c.competition_tier)}${c.status ? `<small>${esc(c.status)}</small>` : ''}`]);
  if (c.stadium) cells.push(['Ground', `${esc(c.stadium)}${cap ? `<small>Capacity ${Number(cap).toLocaleString('en-GB')}</small>` : ''}`]);
  if (c.finances && c.finances.ownership_type) cells.push(['Ownership', esc(c.finances.ownership_type)]);
  if (c.club_values && c.club_values.length) cells.push(['Creed', c.club_values.map((v) => esc(stripQuotes(v))).join('<br>')]);
  if (c.colors && c.colors.length) cells.push(['Colours', swatchesHtml(c.colors)]);
  if (c.supporter_objectives && Object.keys(c.supporter_objectives).length) {
    const top = Object.entries(c.supporter_objectives)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([label]) => esc(stripQuotes(label)));
    cells.push(['What fans want', top.join('<br>')]);
  }
  cells.push(['Home', `<a href="clubs.html?city=${encodeURIComponent(e.city)}">${esc(e.city)}</a><small>${esc(e.regionName)}</small>`]);
  return `<dl class="cp-facts">${cells.map(([k, v]) => `<div class="cp-fact"><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>`;
}

function honorChip(code, year) {
  return `<li class="cp-honor-chip" title="${esc(COMPETITIONS[code] || code)}, ${year}">
    <img src="assets/competitions/${code}.png" alt="" data-hide-on-error /><span>${esc(SHORT[code] || code)} ${year}</span></li>`;
}

function timelineHtml(c) {
  const eras = parseHistory(c.club_history);
  if (!eras.length) return '';
  const buckets = assignHonors(eras, honorsOf(c));
  const nav = eras.length > 1
    ? `<nav class="cp-era-nav" aria-label="Jump to an era">${eras.map((er, i) => `<a href="#era-${i}" title="${esc(er.title)}">${esc(er.rangeText.replace(/[()]/g, '') || er.title)}</a>`).join('')}</nav>`
    : '';
  const items = eras.map((er, i) => `<li class="cp-era" id="era-${i}">
      ${er.title ? `<div class="cp-era-head"><h3>${esc(er.title)}</h3>${er.rangeText ? `<span class="cp-era-range">${esc(er.rangeText.replace(/[()]/g, ''))}</span>` : ''}</div>` : ''}
      <div class="cp-era-body">${er.html}</div>
      ${buckets[i].length ? `<ul class="cp-era-honors" aria-label="Trophies won in this era">${buckets[i].map((h) => honorChip(h.code, h.year)).join('')}</ul>` : ''}
    </li>`).join('');
  return `<section class="cp-story" aria-labelledby="story-h"><h2 id="story-h">The story</h2>${nav}<ol class="cp-timeline">${items}</ol></section>`;
}

function cabinetHtml(c) {
  const honors = honorsOf(c);
  const body = honors.length
    ? `<ul class="cp-trophies">${honors.map((h) => `<li class="cp-trophy">
        <div><img src="assets/trophies/${h.code}.png" alt="" data-hide-on-error /><span class="code">${h.code}</span></div>
        <div><p class="name">${esc(h.name)}</p><p class="count">×${h.years.length}</p>
        ${h.years.length > 8 ? `<details><summary>Show all ${h.years.length} years</summary><p class="years">${h.years.join(', ')}</p></details>` : `<p class="years">${h.years.join(', ')}</p>`}
        </div></li>`).join('')}</ul>`
    : '<p class="cp-muted">No major trophies yet.</p>';
  return `<section class="cp-card" aria-labelledby="cab-h"><h2 id="cab-h">Trophy cabinet</h2>${body}</section>`;
}

function storyCardHtml(c) {
  const t = storyTags[c.name];
  if (!t) return '';
  const p = PEOPLES[t.people] || PEOPLES.unknown;
  const ch = CHAPTERS[t.chapter];
  return `<section class="cp-card cp-storycard" aria-labelledby="story-card-h"><h2 id="story-card-h">In the story</h2>
    <span class="cp-people-badge" style="background:${p.color}">${esc(p.label)}</span>
    <p>${esc(t.note)}</p>
    ${ch ? `<a class="cp-link" href="about.html#${t.chapter}">Read the chapter: ${esc(ch)}</a>` : ''}</section>`;
}

function mapHtml(e) {
  const c = e.club;
  if (!c.coord) return '';
  const [x, y] = mapCoordToPercent(c.coord);
  return `<section class="cp-card" aria-labelledby="map-h"><h2 id="map-h">Where in Velmora</h2>
    <div class="cp-map"><img src="assets/vemora_map.png" alt="Map of Velmora with ${esc(c.name)} marked" loading="lazy" />
    <span class="cp-pin" style="left:${x.toFixed(1)}%;top:${y.toFixed(1)}%" aria-hidden="true"></span></div>
    <p class="cp-mapnote">${esc(e.city)}, ${esc(e.regionName)}. <a href="index.html" style="color:var(--amber)">Open the map</a></p></section>`;
}

function chip(entry) {
  return `<li><a href="${clubUrl(entry.club.name)}"><img src="${logoUrl(entry.club.name)}" alt="" data-hide-on-error />${esc(entry.club.name)}</a></li>`;
}
function neighboursHtml(e) {
  const all = allClubs().filter((x) => x.club.name !== e.club.name);
  const sameCity = all.filter((x) => x.regionId === e.regionId && x.city === e.city);
  const sameRegion = all.filter((x) => x.regionId === e.regionId && x.city !== e.city);
  if (!sameCity.length && !sameRegion.length) return '';
  return `<section class="cp-card" aria-labelledby="near-h"><h2 id="near-h">Nearby clubs</h2>
    ${sameCity.length ? `<h3>Also in ${esc(e.city)}</h3><ul class="cp-chips">${sameCity.map(chip).join('')}</ul>` : ''}
    ${sameRegion.length ? `<h3>Elsewhere in ${esc(e.regionName)}</h3><ul class="cp-chips">${sameRegion.slice(0, 8).map(chip).join('')}</ul>
      <p class="cp-mapnote"><a href="clubs.html?region=${e.regionId}" style="color:var(--amber)">All ${sameRegion.length + sameCity.length + 1} clubs in the region</a></p>` : ''}
  </section>`;
}

function legendsHtml(c) {
  const a = c.players_alumni || {};
  const groups = [['Legends', a.legends], ['Icons', a.icons]].filter(([, l]) => Array.isArray(l) && l.length);
  if (!groups.length) return '';
  return `<section class="cp-section" aria-labelledby="leg-h"><h2 id="leg-h">Legends and icons</h2>
    ${groups.map(([title, list]) => `<h3 class="cp-group-title">${title}</h3><ul class="cp-legends">${list.map((p) => `<li class="cp-person">
      <img src="assets/players/${encodeURIComponent(p.name)}.png" alt="" data-monogram="${esc(initials(p.name))}" />
      <div><p class="n">${esc(p.name)}</p><p class="r">${esc(p.role || '')}</p></div></li>`).join('')}</ul>`).join('')}
  </section>`;
}

function rivalryHtml(e) {
  const c = e.club;
  const derbies = c.derbies || [];
  const rivals = c.rivals || [];
  if (!derbies.length && !rivals.length) return '';
  const derbyTeams = new Set(derbies.map((d) => d.team2));
  const derbyCards = derbies.map((d) => `<article class="cp-derby">
      <div class="cp-vs"><img src="${logoUrl(c.name)}" alt="" data-hide-on-error /><span>vs</span><img src="${logoUrl(d.team2)}" alt="" data-hide-on-error /></div>
      <h3>${esc(d.name)}</h3>
      <p>${esc(d.history || '')}</p>
      ${linkOrText(d.team2, `<span class="cp-link" style="color:var(--amber)">${esc(d.team2)}</span>`)}
    </article>`).join('');
  const rivalCards = rivals.filter((r) => !derbyTeams.has(r.club)).map((r) => {
    const inner = `<img src="${logoUrl(r.club)}" alt="" data-hide-on-error />
      <div style="flex:1;min-width:0"><p class="n">${esc(r.club)}</p><p class="r">${esc(r.reason || '')} rivalry</p>
      ${typeof r.level === 'number' ? `<span class="cp-meter" role="img" aria-label="Rivalry level ${r.level} of 100"><i style="width:${Math.max(0, Math.min(100, r.level))}%"></i></span>` : ''}</div>`;
    return clubNames.has(r.club) ? `<li><a class="cp-rival" href="${clubUrl(r.club)}">${inner}</a></li>` : `<li><div class="cp-rival">${inner}</div></li>`;
  }).join('');
  return `<section class="cp-section" aria-labelledby="riv-h"><h2 id="riv-h">Derbies and rivalries</h2>
    ${derbyCards ? `<div class="cp-derbies">${derbyCards}</div>` : ''}
    ${rivalCards ? `<ul class="cp-rivals">${rivalCards}</ul>` : ''}</section>`;
}

function chantsHtml(c) {
  const list = (c.chants || []).filter((x) => x && Array.isArray(x.lyrics) && x.lyrics.length);
  if (!list.length) return '';
  return `<section class="cp-section" aria-labelledby="ch-h"><h2 id="ch-h">From the terraces</h2>
    <div class="cp-chants">${list.map((ch) => `<figure class="cp-chant"><figcaption>${esc(ch.title || 'Untitled')}</figcaption><p>${ch.lyrics.map(esc).join('\n')}</p></figure>`).join('')}</div></section>`;
}

function quotesHtml(c) {
  const list = (c.supporter_quotes || []).filter((q) => q && q.text);
  if (!list.length) return '';
  return `<div class="cp-quotes">${list.map((q) => {
    const long = q.text.length > 300;
    const doc = /^recovered/i.test(q.author || '');
    return `<blockquote class="cp-quote${long ? ' cp-quote--long' : ''}">
      ${doc ? '<span class="cp-doc">Recovered document</span>' : ''}
      <p>“${esc(q.text)}”</p><footer>— ${esc(q.author || 'Unrecorded')}</footer></blockquote>`;
  }).join('')}</div>`;
}

function supportersHtml(c) {
  const p = c.supporter_profile;
  const traits = p ? Object.entries(p).filter(([k, v]) => TRAITS[k] && v > 0) : [];
  const total = traits.reduce((a, [, v]) => a + v, 0);
  const bar = traits.length
    ? `<div class="cp-bar" role="img" aria-label="Supporter profile: ${traits.map(([k, v]) => `${TRAITS[k][0]} ${v}`).join(', ')}">${traits.map(([k, v]) => `<span style="width:${(v / total) * 100}%;background:${TRAITS[k][1]}"></span>`).join('')}</div>
       <ul class="cp-bar-legend">${traits.map(([k, v]) => `<li><i style="background:${TRAITS[k][1]}"></i>${TRAITS[k][0]} ${v}</li>`).join('')}</ul>`
    : '';
  const fans = Array.isArray(c.fan_clubs) && c.fan_clubs.length
    ? `<div class="cp-fanclubs"><h3 class="cp-group-title" style="margin-top:0">Fan clubs</h3><ul class="cp-chips">${c.fan_clubs.map((f) => `<li><span style="display:inline-block;padding:.3rem .8rem;font-size:.85rem;background:rgba(255,255,255,.06);border:1px solid var(--line);border-radius:999px">${esc(f)}</span></li>`).join('')}</ul></div>`
    : '';
  const quotes = quotesHtml(c);
  if (!bar && !fans && !quotes) return '';
  return `<section class="cp-section" aria-labelledby="sup-h"><h2 id="sup-h">The supporters</h2>${bar}${fans}${quotes}</section>`;
}

function fixturesHtml(c) {
  const list = c.schedule || [];
  if (!list.length) return '';
  let nextMarked = false;
  const cards = list.map((m) => {
    const d = new Date(m.date);
    const played = !!m.score;
    let cls = '', mid = 'vs';
    if (played && typeof m.score === 'string' && m.score.includes('-')) {
      const [h, a] = m.score.split('-').map((s) => parseInt(s.trim(), 10));
      const won = m.home ? h > a : a > h;
      cls = h === a ? 'draw' : won ? 'win' : 'loss';
      mid = `${h} - ${a}`;
    }
    const upcoming = !played && d >= CURRENT_DATE;
    const isNext = upcoming && !nextMarked;
    if (isNext) nextMarked = true;
    const mine = `<img src="${logoUrl(c.name)}" alt="${esc(c.name)}" data-hide-on-error />`;
    const theirsImg = `<img src="${logoUrl(m.opponent)}" alt="${esc(m.opponent)}" data-hide-on-error />`;
    const theirs = clubNames.has(m.opponent) ? `<a href="${clubUrl(m.opponent)}" title="${esc(m.opponent)}">${theirsImg}</a>` : theirsImg;
    return `<li class="cp-match ${cls}${isNext ? ' next' : ''}" ${isNext ? 'data-next="true"' : ''} style="list-style:none">
      ${isNext ? '<span class="tag">Next</span>' : ''}
      <p class="date">${d.getDate()} ${MONTHS[d.getMonth()]}${m.home ? ', home' : ', away'}</p>
      <div class="teams">${m.home ? mine : theirs}<span class="mid">${mid}</span>${m.home ? theirs : mine}</div>
      ${m.tournament ? `<img class="comp" src="assets/competitions/${m.tournament}.png" alt="${esc(COMPETITIONS[m.tournament] || m.tournament)}" data-hide-on-error />` : ''}
    </li>`;
  }).join('');
  return `<section class="cp-section" aria-labelledby="fix-h"><h2 id="fix-h">Fixtures</h2>
    <p class="cp-sub">The 2025–26 season, as it stood when the save began.</p>
    <div class="cp-fixtures-wrap">
      <button type="button" class="cp-scroll-btn prev" aria-label="Earlier fixtures">‹</button>
      <ul class="cp-fixtures" tabindex="0" aria-label="Fixture list" style="margin:0">${cards}</ul>
      <button type="button" class="cp-scroll-btn next" aria-label="Later fixtures">›</button>
    </div></section>`;
}

function kitsHtml(c) {
  const k = c.kits;
  if (!k || k.home_kit_svg == null) return '';
  const types = [['home', 'Home'], ['away', 'Away']];
  if (k.third) types.push(['third', 'Third']);
  return `<section class="cp-section" aria-labelledby="kit-h"><h2 id="kit-h">Kits</h2>
    <div class="cp-kits">${types.map(([t, label]) => `<figure class="cp-kit" style="margin:0">
      <div class="cp-kit-face" id="kit-${t}" role="button" tabindex="0" aria-label="Turn the ${label.toLowerCase()} kit over">
        <div id="kit-${t}-front"></div><div id="kit-${t}-back" class="hidden"></div></div>
      <p>${label} kit</p></figure>`).join('')}</div>
    <p class="cp-hint">Hover, tap, or press Enter to turn a kit over.</p></section>`;
}

async function hydrateKits(club) {
  const k = club.kits;
  if (!k || k.home_kit_svg == null) return;
  async function loadSvg(id, path) {
    const el = document.getElementById(id);
    if (!el) return;
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error(path);
      el.innerHTML = await res.text();
    } catch (err) { console.error('Kit failed to load:', err); }
  }
  function setColors(id, colors) {
    const el = document.getElementById(id);
    if (!el || !colors) return;
    ['primary', 'secondary', 'accent', 'number'].forEach((n, i) => {
      if (colors[i]) el.style.setProperty(`--kit-${n}-color`, `rgb(${colors[i][0]}, ${colors[i][1]}, ${colors[i][2]})`);
    });
  }
  async function show(type) {
    const colors = k[type];
    await loadSvg(`kit-${type}-front`, `assets/kits/${k[`${type}_kit_svg`]}.svg`);
    setColors(`kit-${type}-front`, colors);
    const backType = k[`${type}_back`];
    if (backType === 'same_as_front') {
      const svg = document.querySelector(`#kit-${type}-front svg`);
      const back = document.getElementById(`kit-${type}-back`);
      if (svg && back) { back.innerHTML = ''; back.appendChild(svg.cloneNode(true)); }
    } else if (backType) {
      await loadSvg(`kit-${type}-back`, `assets/kits/backs/${backType}.svg`);
    }
    setColors(`kit-${type}-back`, colors);
    wireFlip(type);
  }
  function wireFlip(type) {
    const face = document.getElementById(`kit-${type}`);
    const front = document.getElementById(`kit-${type}-front`);
    const back = document.getElementById(`kit-${type}-back`);
    if (!face || !front || !back) return;
    const flip = (toBack) => { front.classList.toggle('hidden', toBack); back.classList.toggle('hidden', !toBack); };
    face.addEventListener('mouseenter', () => flip(true));
    face.addEventListener('mouseleave', () => flip(false));
    face.addEventListener('click', () => flip(front.classList.contains('hidden') ? false : true));
    face.addEventListener('keydown', (ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); flip(!front.classList.contains('hidden')); } });
  }
  await show('home');
  await show('away');
  if (k.third) {
    await loadSvg('kit-third-front', k.third);
    const back = document.getElementById('kit-third-back');
    if (back) back.remove();
  }
}

// The hero's stadium photo is cropped to a fixed height by default. The
// toggle button swaps the hero to the image's true aspect ratio, so the
// whole photo shows without cropping, then swaps it back.
const HERO_EXPAND_ICON = `<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>`;
const HERO_COLLAPSE_ICON = `<polyline points="9 3 3 3 3 9"></polyline><polyline points="15 21 21 21 21 15"></polyline><line x1="3" y1="3" x2="10" y2="10"></line><line x1="21" y1="21" x2="14" y2="14"></line>`;

function wireHero(root) {
  const hero = root.querySelector('.cp-hero');
  const btn = root.querySelector('.cp-hero-toggle');
  const img = root.querySelector('.cp-hero-img');
  const svgPaths = btn && btn.querySelector('svg');
  if (!hero || !btn || !img || !svgPaths) return;

  const hideBtn = () => { btn.style.display = 'none'; };
  const alreadyFailed = img.complete && img.naturalWidth === 0 && !!img.getAttribute('src');
  if (alreadyFailed) hideBtn(); else img.addEventListener('error', hideBtn, { once: true });

  function setRatio() {
    if (img.naturalWidth && img.naturalHeight) {
      hero.style.setProperty('--hero-ar', (img.naturalWidth / img.naturalHeight).toFixed(4));
    }
  }
  if (img.complete && img.naturalWidth) setRatio(); else img.addEventListener('load', setRatio, { once: true });

  btn.addEventListener('click', () => {
    const expanded = hero.classList.toggle('cp-hero--expanded');
    btn.setAttribute('aria-pressed', String(expanded));
    btn.setAttribute('aria-label', expanded ? 'Collapse the hero image' : 'Expand to show the full stadium image');
    svgPaths.innerHTML = expanded ? HERO_COLLAPSE_ICON : HERO_EXPAND_ICON;
  });
}

function wireFixtures(root) {
  const strip = root.querySelector('.cp-fixtures');
  if (!strip) return;
  const next = strip.querySelector('[data-next="true"]');
  if (next) strip.scrollLeft = Math.max(0, next.offsetLeft - strip.clientWidth / 2 + next.offsetWidth / 2);
  root.querySelector('.cp-scroll-btn.prev')?.addEventListener('click', () => strip.scrollBy({ left: -240, behavior: 'smooth' }));
  root.querySelector('.cp-scroll-btn.next')?.addEventListener('click', () => strip.scrollBy({ left: 240, behavior: 'smooth' }));
}

// On small screens the story becomes a horizontal swipe strip, one era per
// screen, with the existing era-nav pills doubling as a jump strip and a
// prev/next pager appended to each era. Desktop keeps the plain vertical
// timeline untouched.
function wireStoryTimeline(root) {
  const timeline = root.querySelector('.cp-timeline');
  const eras = timeline ? Array.from(timeline.querySelectorAll('.cp-era')) : [];
  const navLinks = Array.from(root.querySelectorAll('.cp-era-nav a'));
  if (!timeline || eras.length < 2) return;

  const small = window.matchMedia('(max-width: 767px)');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = 0;

  function mark(i) {
    current = i;
    navLinks.forEach((a, n) => a.classList.toggle('is-current', n === i));
    // Keep the active pill visible within the (now scrollbar-less) nav strip
    // as the reader scrolls/swipes through eras — otherwise the highlighted
    // pill can end up scrolled out of view with nothing on screen showing
    // which era is current.
    const link = navLinks[i];
    if (link) link.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', inline: 'center', block: 'nearest' });
  }
  function go(i) {
    i = Math.max(0, Math.min(eras.length - 1, i));
    mark(i);
    timeline.scrollTo({ left: eras[i].offsetLeft, behavior: reduce ? 'auto' : 'smooth' });
  }

  navLinks.forEach((a, i) => {
    a.addEventListener('click', (ev) => {
      if (!small.matches) return;
      ev.preventDefault();
      go(i);
    });
  });

  // Desktop: the timeline is a plain vertical list (not the horizontal strip
  // below), so nothing here ever fires the 'scroll' listener further down —
  // the nav pill for era 0 stayed marked "current" forever regardless of
  // where the reader had actually scrolled to. This mirrors about.js's
  // chapter-rail scroll-spy: whichever era is in the "reading band" of the
  // viewport (25% down from the top, before the bottom 65%) gets marked.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (small.matches) return;
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const i = eras.indexOf(entry.target);
        if (i !== -1) mark(i);
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    eras.forEach((era) => observer.observe(era));
  }

  eras.forEach((era, i) => {
    const pager = document.createElement('div');
    pager.className = 'cp-era-pager';
    [[i - 1, 'prev'], [i + 1, 'next']].forEach(([target, dir]) => {
      if (target < 0 || target >= eras.length) return;
      const label = eras[target].querySelector('.cp-era-head h3');
      const name = label ? label.textContent : (dir === 'prev' ? 'Previous era' : 'Next era');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cp-era-pager-btn';
      btn.dataset.dir = dir;
      btn.textContent = dir === 'prev' ? `← ${name}` : `${name} →`;
      btn.addEventListener('click', () => go(target));
      pager.appendChild(btn);
    });
    era.appendChild(pager);
  });

  timeline.addEventListener('scroll', () => {
    if (!small.matches) return;
    const step = eras.length > 1 ? eras[1].offsetLeft - eras[0].offsetLeft : timeline.clientWidth;
    if (!step) return;
    const i = Math.round(timeline.scrollLeft / step);
    if (i !== current && i >= 0 && i < eras.length) mark(i);
  }, { passive: true });

  mark(0);
}

/* ---------- The ordinary club page ---------- */
function renderClub(e) {
  const c = e.club;
  applyTheme(c);
  container.innerHTML = `
    ${heroHtml(e)}
    ${factsHtml(e)}
    <div class="cp-grid">
      <div class="cp-main">${timelineHtml(c) || '<p class="cp-muted">This club\'s story has not been written yet.</p>'}</div>
      <aside class="cp-aside" aria-label="About the club">
        ${storyCardHtml(c)}
        ${cabinetHtml(c)}
        ${mapHtml(e)}
        ${neighboursHtml(e)}
      </aside>
    </div>
    ${legendsHtml(c)}
    ${rivalryHtml(e)}
    ${chantsHtml(c)}
    ${supportersHtml(c)}
    ${fixturesHtml(c)}
    ${kitsHtml(c)}`;
  wireFixtures(container);
  wireStoryTimeline(container);
  hydrateKits(c);
}

/* ---------- The Vanished XI ---------- */
function renderFog(e) {
  const c = e.club;
  document.body.classList.add('fog-page');
  document.title = 'The Vanished XI';
  container.innerHTML = `
    <div class="fog-shell">
      <div class="fog-layer" aria-hidden="true"></div><div class="fog-layer two" aria-hidden="true"></div>
      <div class="fog-content">
        <header class="fog-hero">
          <img src="${logoUrl(c.name)}" alt="The badge of the Vanished XI, with runes nobody has translated" data-hide-on-error />
          <h1>${esc(c.name)}</h1>
          <p class="cp-nick">${esc(c.nickname || '')}</p>
          <p class="cp-slogan">${esc(stripQuotes(c.club_slogan || ''))}</p>
          <div class="eleven" aria-hidden="true">${'<span></span>'.repeat(11)}</div>
          <p class="fog-caption">Always the same, and never the same.</p>
        </header>
        <div class="fog-unrecorded"><dl class="cp-facts">
          <div class="cp-fact"><dt>Founded</dt><dd>Unrecorded</dd></div>
          <div class="cp-fact"><dt>Ground</dt><dd>None</dd></div>
          <div class="cp-fact"><dt>Fixtures</dt><dd>None</dd></div>
          <div class="cp-fact"><dt>Colours</dt><dd>${swatchesHtml(c.colors)}</dd></div>
        </dl></div>
        <div class="fog-narrow">${timelineHtml(c)}</div>
        <div class="fog-narrow"><div class="cp-aside" style="position:static">${storyCardHtml(c)}</div>
          <p class="cp-muted" style="margin-top:1rem">The tape mentioned in these reports is told from the other side on the page of <a href="${clubUrl('Valdren Atletika')}" style="color:var(--amber)">Valdren Atletika</a>.</p></div>
        <section class="fog-narrow" aria-labelledby="fog-voices"><h2 id="fog-voices" style="font-family:'Cinzel',serif;color:#e8f1f3;font-size:1.5rem;margin:0 0 1rem">Voices</h2>${quotesHtml(c)}</section>
      </div>
    </div>`;
  wireStoryTimeline(container);
}
