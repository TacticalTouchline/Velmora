// The roll of honour: champions by year, and the clubs that have won the most.
import { allClubs, clubUrl, logoUrl, esc } from './clubHelpers.js';
import { renderNav, wireNav } from './siteNav.js';

document.getElementById('site-nav').innerHTML = renderNav('fa-honours');
wireNav();
const content = document.getElementById('content');

// The competitions with a winners column, in display order.
const COLS = [
  ['VSL', 'Super League'],
  ['TVC', 'The Velmoran Cup'],
  ['VNN', 'National Liga'],
  ['UCL', 'European Cup'],
];

// winners[code][year] = [club names]
const winners = {};
const clubs = allClubs().map((e) => e.club);
for (const [code] of COLS) winners[code] = {};
for (const c of clubs) {
  for (const [code] of COLS) {
    for (const y of ((c.competition_history || {})[code] || {}).winnerIn || []) (winners[code][y] ||= []).push(c.name);
  }
}
const allYears = COLS.flatMap(([code]) => Object.keys(winners[code]).map(Number));
const minYear = Math.min(...allYears), maxYear = Math.max(...allYears);
const decades = [];
for (let d = Math.floor(minYear / 10) * 10; d <= maxYear; d += 10) decades.push(d);
decades.reverse();

const clubLink = (name) => `<a class="ho-club" href="${clubUrl(name)}"><img src="${logoUrl(name)}" alt="" loading="lazy" />${esc(name)}</a>`;

// Leaderboard
const boardFull = clubs.map((c) => {
  const n = (code) => (((c.competition_history || {})[code] || {}).winnerIn || []).length;
  return { name: c.name, VSL: n('VSL'), TVC: n('TVC'), VNN: n('VNN'), UCL: n('UCL') };
}).map((r) => ({ ...r, major: r.VSL + r.TVC + r.UCL })).filter((r) => r.major > 0)
  .sort((a, b) => b.major - a.major || b.VSL - a.VSL || a.name.localeCompare(b.name));

const TOP_SHOWN = 10;
const boardTop = boardFull.slice(0, TOP_SHOWN);
const boardRest = boardFull.slice(TOP_SHOWN);

function boardRow(r, hideInitially) {
  return `<tr${hideInitially ? ' class="ho-more-row" hidden' : ''}><td>${clubLink(r.name)}</td><td class="ho-num">${r.VSL || '—'}</td><td class="ho-num">${r.TVC || '—'}</td><td class="ho-num">${r.UCL || '—'}</td><td class="ho-num" style="color:#fff;font-weight:700">${r.major}</td></tr>`;
}

const leaderboard = `<section aria-labelledby="lb-h"><h2 class="ho-decade" id="lb-h" style="margin-top:0">Most decorated</h2>
  <div class="ho-table-wrap"><table class="ho-table"><caption class="sr-only">The clubs with the most league, Cup and European titles</caption>
  <thead><tr><th scope="col">Club</th><th scope="col" class="ho-num">League</th><th scope="col" class="ho-num">Cup</th><th scope="col" class="ho-num">Europe</th><th scope="col" class="ho-num">Total</th></tr></thead>
  <tbody>${boardTop.map((r) => boardRow(r, false)).join('')}${boardRest.map((r) => boardRow(r, true)).join('')}</tbody></table></div>
  ${boardRest.length ? `<button type="button" class="ho-show-more" aria-expanded="false" data-more-count="${boardRest.length}">Show ${boardRest.length} more</button>` : ''}
  <p class="ho-note">Totals count Super League, Cup and European titles. National Liga titles are promotions and are listed by year below.</p></section>`;

function cell(code, year) {
  const list = winners[code][year];
  if (!list) return '<td class="none">—</td>';
  const joint = list.length > 1 ? ' <span class="ho-tag joint" title="Two clubs are recorded as winners this year">Joint</span>' : '';
  return `<td>${list.map(clubLink).join('')}${joint}</td>`;
}
function notes(year) {
  const vsl = winners.VSL[year] || [], tvc = winners.TVC[year] || [], ucl = winners.UCL[year] || [];
  const both = vsl.filter((n) => tvc.includes(n));
  const tags = [];
  if (both.length && ucl.some((n) => both.includes(n))) tags.push('<span class="ho-tag">Treble</span>');
  else if (both.length) tags.push('<span class="ho-tag">Double</span>');
  return tags.join(' ');
}

const usedCols = COLS.filter(([code]) => Object.keys(winners[code]).length);
const decadeTables = decades.map((d) => {
  const rows = [];
  for (let y = d; y < d + 10 && y <= maxYear; y++) {
    if (y < minYear) continue;
    rows.push(`<tr><td class="y">${y}</td>${usedCols.map(([code]) => cell(code, y)).join('')}<td>${notes(y)}</td></tr>`);
  }
  return `<section aria-labelledby="d${d}"><h2 class="ho-decade" id="d${d}">${d}s</h2>
    <div class="ho-table-wrap"><table class="ho-table"><caption class="sr-only">Champions in the ${d}s</caption>
    <thead><tr><th scope="col">Year</th>${usedCols.map(([, label]) => `<th scope="col">${label}</th>`).join('')}<th scope="col"></th></tr></thead>
    <tbody>${rows.join('')}</tbody></table></div></section>`;
}).join('');

const jointYears = [];
for (const [code, label] of COLS) for (const [y, list] of Object.entries(winners[code])) if (list.length > 1) jointYears.push(`${label} ${y}`);

content.innerHTML = `
  <nav class="ho-nav" aria-label="Jump to a decade"><a href="#lb-h">Most decorated</a>${decades.map((d) => `<a href="#d${d}">${d}s</a>`).join('')}</nav>
  ${leaderboard}
  ${decadeTables}
  <p class="ho-note">A dash means no winner is recorded for that year. ${jointYears.length ? `Two clubs are recorded as champions in ${jointYears.join(', ')}, and are shown as joint winners.` : ''}</p>`;

const showMoreBtn = content.querySelector('.ho-show-more');
if (showMoreBtn) {
  showMoreBtn.addEventListener('click', () => {
    const expanded = showMoreBtn.getAttribute('aria-expanded') === 'true';
    content.querySelectorAll('.ho-more-row').forEach((row) => { row.hidden = expanded; });
    showMoreBtn.setAttribute('aria-expanded', String(!expanded));
    showMoreBtn.textContent = expanded ? `Show ${showMoreBtn.dataset.moreCount} more` : 'Show fewer';
  });
}
