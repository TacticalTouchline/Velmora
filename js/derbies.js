// Every derby, grouped by the old argument it replays.
import { allClubs, clubUrl, logoUrl, esc } from './clubHelpers.js';
import { renderNav, wireNav } from './siteNav.js';

document.getElementById('site-nav').innerHTML = renderNav('fa-derbies');
wireNav();
const content = document.getElementById('content');

const CATEGORIES = [
  { id: 'patron', title: 'Patron against labor', blurb: 'The argument of 1891, replayed on a football pitch: old money and noble patronage against organized labor.',
    names: ['The Guard and Crown Derby', 'Duel of Crowns'] },
  { id: 'reconcile', title: 'Reconciliation, and whether it worked', blurb: 'Two clubs, two answers to the same question: could the two peoples share a badge?',
    names: ['Border Steel Derby', 'Griffin-Ocean Derby', 'The Smokehouse Derby'] },
  { id: 'owners', title: 'Who owns the club', blurb: 'Class within labor: the Lord\'s club, the members\' club, and the stokers who were never invited.',
    names: ['Industrial Iron Derby', 'Furnace Derby'] },
  { id: 'families', title: 'Old families, one argument', blurb: 'The same aristocracy, arguing with itself.',
    names: ['Royal Rift', 'Radomir Rumble'] },
  { id: 'cousins', title: 'Mines, rails, and cousins', blurb: 'Neighbors from the same industry who never forgave each other.',
    names: ['Karnov Krunch', 'Gorge Derby', 'Rail City Derby'] },
  { id: 'sea', title: 'Sea and city', blurb: 'Ports, docks, and the towns that live on them.',
    names: ['Port Rivalry', 'The Drydock Derby', 'The Maritime Clash', 'Weave-Dock Derby'] },
  { id: 'heritage', title: 'Heritage against the new', blurb: 'Old institutions against upstarts, and town against country.',
    names: ['Lake-River Classic', 'Riverbend Derby', 'Drosna Derby', 'Green Derby', 'Forest Derby', 'Paper vs Plough', 'The Bay Derby'] },
  { id: 'kin', title: 'Kin and neighbors', blurb: 'Same street, same hill, same family, and the smallest arguments are the longest.',
    names: ['The Garden Derby', 'The Hive Road Derby', 'The High Road Derby'] },
];

// One card per pair and name, however many clubs list it.
const known = new Set(allClubs().map((e) => e.club.name));
const derbies = new Map();
for (const { club } of allClubs()) {
  for (const d of club.derbies || []) {
    const pair = [club.name, d.team2].sort();
    const key = `${d.name}|${pair.join('|')}`;
    if (!derbies.has(key)) derbies.set(key, { name: d.name, a: pair[0], b: pair[1], history: d.history || '' });
  }
}
const all = [...derbies.values()];
const placed = new Set();

const link = (n) => (known.has(n) ? `<a href="${clubUrl(n)}">${esc(n)}</a>` : esc(n));
function card(d) {
  return `<article class="cp-derby dv-derby">
    <div class="cp-vs"><a href="${clubUrl(d.a)}" aria-label="${esc(d.a)}"><img src="${logoUrl(d.a)}" alt="" loading="lazy" /></a><span>vs</span><a href="${clubUrl(d.b)}" aria-label="${esc(d.b)}"><img src="${logoUrl(d.b)}" alt="" loading="lazy" /></a></div>
    <h3>${esc(d.name)}</h3>
    <p>${esc(d.history)}</p>
    <div class="dv-links">${link(d.a)}${link(d.b)}</div></article>`;
}

const sections = CATEGORIES.map((cat) => {
  const list = all.filter((d) => cat.names.includes(d.name)).sort((x, y) => cat.names.indexOf(x.name) - cat.names.indexOf(y.name));
  list.forEach((d) => placed.add(d));
  if (!list.length) return '';
  return `<section class="dv-cat" aria-labelledby="c-${cat.id}"><h2 id="c-${cat.id}">${esc(cat.title)}</h2><p>${esc(cat.blurb)}</p><div class="dv-cards">${list.map(card).join('')}</div></section>`;
}).join('');

const rest = all.filter((d) => !placed.has(d));
const other = rest.length
  ? `<section class="dv-cat" aria-labelledby="c-other"><h2 id="c-other">Local rivalries</h2><p>Everything else.</p><div class="dv-cards">${rest.map(card).join('')}</div></section>`
  : '';

content.innerHTML = `${sections}${other}`;