// The club directory: search and filter every club in Velmora.
import { allClubs, clubUrl, logoUrl, honorsOf, esc } from './clubHelpers.js';
import { storyTags, PEOPLES } from '../data/storyTags.js';
import { renderNav, wireNav } from './siteNav.js';

document.getElementById('site-nav').innerHTML = renderNav('fa-clubs');
wireNav();
const content = document.getElementById('content');
const entries = allClubs().filter((e) => e.club.name !== 'The Vanished XI').concat(allClubs().filter((e) => e.club.name === 'The Vanished XI'));

const params = new URLSearchParams(window.location.search);
const state = {
  q: params.get('q') || '',
  region: params.get('region') || '',
  city: params.get('city') || '',
  league: params.get('league') || '',
  people: params.get('people') || '',
  sort: params.get('sort') || 'name',
};

const regions = [...new Map(entries.map((e) => [e.regionId, e.regionName])).entries()];
const leagues = [...new Set(entries.map((e) => e.club.competition_tier).filter(Boolean))].sort();
const SHORT = { UCL: 'Europe', VSL: 'League', TVC: 'Cup', VNN: 'National Liga' };

content.innerHTML = `
  <div class="cd-controls" role="search">
    <div><label for="f-q">Search</label><input id="f-q" type="search" placeholder="Name, nickname or town" value="${esc(state.q)}" /></div>
    <div><label for="f-region">Region</label><select id="f-region"><option value="">All regions</option>${regions.map(([id, n]) => `<option value="${id}">${esc(n)}</option>`).join('')}</select></div>
    <div><label for="f-league">League</label><select id="f-league"><option value="">All leagues</option>${leagues.map((l) => `<option>${esc(l)}</option>`).join('')}</select></div>
    <div><label for="f-people">Founding story</label><select id="f-people"><option value="">Any</option>${Object.entries(PEOPLES).map(([k, p]) => `<option value="${k}">${esc(p.label)}</option>`).join('')}<option value="untagged">Not yet tagged</option></select></div>
    <div><label for="f-sort">Sort by</label><select id="f-sort"><option value="name">Name</option><option value="founded">Oldest first</option><option value="honors">Most honors</option></select></div>
  </div>
  <div id="chips"></div>
  <p class="cd-count" id="count" aria-live="polite"></p>
  <ul class="cd-grid" id="grid"></ul>`;

const $ = (id) => document.getElementById(id);
$('f-region').value = state.region; $('f-league').value = state.league; $('f-people').value = state.people; $('f-sort').value = state.sort;

function total(club) { return honorsOf(club).filter((h) => ['UCL', 'VSL', 'TVC'].includes(h.code)).reduce((a, h) => a + h.years.length, 0); }

function matches(e) {
  const c = e.club;
  if (state.region && e.regionId !== state.region) return false;
  if (state.city && e.city !== state.city) return false;
  if (state.league && c.competition_tier !== state.league) return false;
  if (state.people) {
    const t = storyTags[c.name];
    if (state.people === 'untagged' ? !!t : !t || t.people !== state.people) return false;
  }
  if (state.q) {
    const hay = `${c.name} ${c.nickname || ''} ${e.city}`.toLowerCase();
    if (!hay.includes(state.q.toLowerCase())) return false;
  }
  return true;
}

function card(e) {
  const c = e.club;
  const t = storyTags[c.name];
  const p = t && PEOPLES[t.people];
  const honors = honorsOf(c).filter((h) => SHORT[h.code]).map((h) => `${SHORT[h.code]} ${h.years.length}`).join(' · ');
  return `<li><a class="cd-card" href="${clubUrl(c.name)}">
    <img src="${logoUrl(c.name)}" alt="" loading="lazy" />
    <div>
      <h3>${esc(c.name)}</h3>
      ${c.nickname ? `<p class="nick">${esc(c.nickname)}</p>` : ''}
      <p>${esc(e.city === 'Unknown' ? 'Northern Bay' : e.city)}, ${esc(e.regionName)}</p>
      <p>${c.founded != null ? `Founded ${c.founded}` : 'Founding unrecorded'}${c.competition_tier ? ` · ${esc(c.competition_tier)}` : ''}</p>
      ${honors ? `<p class="honors">${esc(honors)}</p>` : ''}
      ${p ? `<span class="cd-badge" style="background:${p.color}">${esc(p.label)}</span>` : ''}
    </div></a></li>`;
}

function render() {
  const list = entries.filter(matches);
  if (state.sort === 'founded') list.sort((a, b) => (a.club.founded ?? 9999) - (b.club.founded ?? 9999) || a.club.name.localeCompare(b.club.name));
  else if (state.sort === 'honors') list.sort((a, b) => total(b.club) - total(a.club) || a.club.name.localeCompare(b.club.name));
  else list.sort((a, b) => a.club.name.localeCompare(b.club.name));
  $('count').textContent = `Showing ${list.length} of ${entries.length} clubs`;
  $('grid').innerHTML = list.length ? list.map(card).join('') : '<li class="cd-empty">No club matches those filters.</li>';
  $('chips').innerHTML = state.city ? `<span class="cd-filter-chip">Town: ${esc(state.city)} <button type="button" id="clear-city" aria-label="Clear the town filter">×</button></span>` : '';
  const clear = $('clear-city');
  if (clear) clear.addEventListener('click', () => { state.city = ''; sync(); render(); });
  sync();
}
function sync() {
  const p = new URLSearchParams();
  Object.entries(state).forEach(([k, v]) => { if (v && !(k === 'sort' && v === 'name')) p.set(k, v); });
  history.replaceState(null, '', p.toString() ? `?${p}` : window.location.pathname);
}

$('f-q').addEventListener('input', (ev) => { state.q = ev.target.value.trim(); render(); });
[['f-region', 'region'], ['f-league', 'league'], ['f-people', 'people'], ['f-sort', 'sort']].forEach(([id, key]) => {
  $(id).addEventListener('change', (ev) => { state[key] = ev.target.value; if (key === 'region') state.city = ''; render(); });
});
render();
