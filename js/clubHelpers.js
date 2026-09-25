// Shared helpers for the club page, the club directory, and the honours and derbies pages.
import { regionData } from './regionData.js';

/* ---------- Club lookup ---------- */
export function allClubs() {
  const out = [];
  for (const [regionId, region] of Object.entries(regionData)) {
    for (const [city, c] of Object.entries(region.cities)) {
      for (const club of c.clubs) out.push({ club, regionId, regionName: region.name, city });
    }
  }
  return out;
}
export function findClub(name) {
  return allClubs().find((e) => e.club.name === name) || null;
}
export const clubUrl = (name) => `club.html?club=${encodeURIComponent(name)}`;
export const logoUrl = (name) => `assets/logos/clubs/normal/${encodeURIComponent(name)}.png`;
export const stadiumUrl = (name) => `assets/stadiums/${encodeURIComponent(name)}.png`;

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* ---------- Shared map-coordinate space ----------
   Every club's `coord` is authored against a 500-unit-wide reference space,
   scaled onto a 1024x1024 canvas. Both consumers share that same canvas:
     - js/mapUI.js scales it onto the interactive SVG's viewBox.
     - js/clubPage.js's "Where in Velmora" mini-map overlays it on
       assets/vemora_map.png.
   These two are pixel-identical (verified directly: the SVG's own base-map
   layer is an embedded copy of the same 1024x1024 artwork, at x=0/y=0, no
   transform, no crop) — so both need the exact same plain ratio, with no
   extra correction. An earlier version of this function tried to correct for
   a decorative border it assumed was PNG-only; that assumption was wrong
   (the border exists identically in the SVG's own coordinate space too, so
   it's already accounted for wherever this ratio is already correct) and
   has been removed. Both files import MAP_COORD_SPACE from here rather than
   each hardcoding "500" separately, so they can't drift apart again. */
export const MAP_COORD_SPACE = 500;

export function mapCoordToPercent([cx, cy]) {
  return [(cx / MAP_COORD_SPACE) * 100, (cy / MAP_COORD_SPACE) * 100];
}

/* ---------- People, traits and broken-image handling ---------- */
// Shared by club.html (the "Legends and icons" section, the supporter-profile
// bar) and the Map page's region panel, so both read the same names/colours
// and fail the same way when an asset is missing.
export function initials(name) { return String(name).split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase(); }

export const TRAITS = {
  loyalty: ['Loyalty', '#16a34a'], passion: ['Passion', '#dc2626'], patience: ['Patience', '#fbbf24'],
  affluence: ['Affluence', '#0ea5e9'], temprament: ['Temperament', '#7c3aed'], expectations: ['Expectations', '#f472b6'],
};

// Images that fail to load (or point at an asset that was never supplied) are
// hidden, or swapped for a monogram, rather than left as a broken-image icon.
// Call this once after new markup containing img[data-hide-on-error] /
// img[data-monogram] has been inserted into the DOM.
export function wireImages(root) {
  const alreadyFailed = (img) => img.complete && img.naturalWidth === 0 && !!img.getAttribute('src');
  root.querySelectorAll('img[data-hide-on-error]').forEach((img) => {
    const hide = () => { img.style.display = 'none'; const code = img.parentElement && img.parentElement.querySelector('.code'); if (code) code.style.display = 'flex'; };
    if (alreadyFailed(img)) hide(); else img.addEventListener('error', hide, { once: true });
  });
  root.querySelectorAll('img[data-monogram]').forEach((img) => {
    const swap = () => {
      const span = document.createElement('span');
      span.className = 'cp-mono';
      span.setAttribute('aria-hidden', 'true');
      span.textContent = img.dataset.monogram;
      img.replaceWith(span);
    };
    if (alreadyFailed(img)) swap(); else img.addEventListener('error', swap, { once: true });
  });
}

/* ---------- Competitions ---------- */
export const COMPETITIONS = {
  UCL: 'European Cup',
  VSL: 'Velmoran Super League',
  TVC: 'The Velmoran Cup',
  VNN: 'Velmoran National Liga',
  VHC: 'Velmoran Heritage Cup',
  VERL: 'East Velmoran Regional League',
  VNRL: 'North Velmoran Regional League',
  VSRL: 'South Velmoran Regional League',
  VWRL: 'West Velmoran Regional League',
};
export const COMP_ORDER = ['UCL', 'VSL', 'TVC', 'VNN', 'VHC', 'VERL', 'VNRL', 'VSRL', 'VWRL'];

// [{ code, name, years: [...] }] for every competition the club has won, in display order.
export function honorsOf(club) {
  const ch = club.competition_history || {};
  const codes = [...COMP_ORDER, ...Object.keys(ch).filter((k) => !COMP_ORDER.includes(k))];
  return codes
    .filter((code) => ch[code] && ch[code].winnerIn && ch[code].winnerIn.length)
    .map((code) => ({ code, name: COMPETITIONS[code] || code, years: [...ch[code].winnerIn].sort((a, b) => a - b) }));
}

/* ---------- Colour and contrast ---------- */
export const PAGE_BG = [13, 24, 40];

export function parseRgb(s) {
  const m = String(s || '').match(/\d+/g);
  return m && m.length >= 3 ? m.slice(0, 3).map(Number) : [128, 128, 128];
}
const lin = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
export const luminance = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
export function contrast(a, b) {
  const la = luminance(a), lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

// A highlight colour that is readable on the dark page: the club's secondary if it passes,
// then its primary, then a lightened version of the secondary.
export function accessibleAccent(colors, bg = PAGE_BG, min = 4.5) {
  const cand = (colors || []).map(parseRgb);
  const ordered = cand.length > 1 ? [cand[1], cand[0], ...cand.slice(2)] : cand;
  for (const c of ordered) if (contrast(c, bg) >= min) return c;
  const base = ordered[0] || [255, 255, 255];
  for (let t = 0.1; t <= 1; t += 0.05) {
    const c = base.map((v) => Math.round(v + (255 - v) * t));
    if (contrast(c, bg) >= min) return c;
  }
  return [255, 255, 255];
}
// Dark or white text, whichever reads better on the given fill.
export function readableOn(rgb) {
  return contrast(rgb, [255, 255, 255]) >= contrast(rgb, [10, 14, 22]) ? [255, 255, 255] : [10, 14, 22];
}
export const rgbCss = (c) => `rgb(${c[0]}, ${c[1]}, ${c[2]})`;

/* ---------- History: eras, ranges, and honours placement ---------- */
// "(1903–1930s)" -> [1903, 1939]; "(2020s–)" -> [2020, 2100]; "(before 1900)" -> [0, 1899]; "(1967–68)" -> [1967, 1968]
export function parseEraRange(text) {
  const t = String(text || '').replace(/[()]/g, '').trim().toLowerCase();
  if (!t) return null;
  if (t === 'today' || t === 'present') return [2020, 2100];
  const before = t.match(/^before\s+(\d{4})/);
  if (before) return [0, +before[1] - 1];
  const parts = t.split(/[–—-]/).map((s) => s.trim());
  const first = parts[0].match(/^(\d{4})(s?)$/);
  if (!first) return null;
  const start = +first[1];
  let end;
  if (parts.length === 1) end = first[2] ? start + 9 : start;
  else {
    const p = parts[1];
    if (!p || p === 'present' || p === 'today') end = 2100;
    else if (/^\d{2}$/.test(p)) end = Math.floor(start / 100) * 100 + +p;
    else {
      const m = p.match(/^(\d{4})(s?)$/);
      if (!m) return null;
      end = m[2] ? +m[1] + 9 : +m[1];
    }
  }
  return [start, end];
}

// Splits the club_history HTML into [{ title, rangeText, range, html }] (html = the paragraphs).
export function parseHistory(html) {
  const doc = new DOMParser().parseFromString('<div id="r">' + (html || '') + '</div>', 'text/html');
  const root = doc.getElementById('r');
  const eras = [];
  let cur = null;
  for (const node of Array.from(root.childNodes)) {
    if (node.nodeType === 1 && node.tagName.toLowerCase() === 'h3') {
      const span = node.querySelector('.era-range');
      const rangeText = span ? span.textContent.trim() : '';
      if (span) span.remove();
      cur = { title: node.textContent.replace(/\s+/g, ' ').trim(), rangeText, range: parseEraRange(rangeText), html: '' };
      eras.push(cur);
    } else {
      const chunk = node.nodeType === 1 ? node.outerHTML : (node.textContent.trim() ? `<p>${esc(node.textContent.trim())}</p>` : '');
      if (!chunk) continue;
      if (!cur) { cur = { title: '', rangeText: '', range: null, html: '' }; eras.push(cur); }
      cur.html += chunk;
    }
  }
  return eras;
}

// Puts every trophy year into the narrowest era whose range contains it.
export function assignHonors(eras, honors) {
  const buckets = eras.map(() => []);
  for (const h of honors) {
    for (const y of h.years) {
      let best = -1, span = Infinity;
      eras.forEach((e, i) => {
        if (!e.range) return;
        const [a, b] = e.range;
        if (y >= a && y <= b && b - a < span) { span = b - a; best = i; }
      });
      if (best >= 0) buckets[best].push({ code: h.code, year: y });
    }
  }
  buckets.forEach((b) => b.sort((x, y) => x.year - y.year || x.code.localeCompare(y.code)));
  return buckets;
}
