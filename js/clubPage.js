// clubPage.js
import { regionData } from './regionData.js';

function getClubDataByName(name) {
  for (const region of Object.values(regionData)) {
    for (const city of Object.values(region.cities)) {
      const match = city.clubs.find(c => c.name === name);
      if (match) return match;
    }
  }
  return null;
}

async function loadComponent(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return await res.text();
}

async function renderClubPage(club) {
  const container = document.getElementById('club-container');
  container.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.classList.add('flex', 'flex-col', 'gap-6');

  const sections = [
    'header',
    'info',
    'kits',
    'honors',
    'supporters',
    'rivals',
    'derbies',
    'history',
    'alumni',
    'schedule'
  ];

  for (const section of sections) {
    const html = await loadComponent(`components/clubPage/${section}.html`);
    const block = document.createElement('div');
    block.innerHTML = html;
    wrapper.appendChild(block);
  }

  populateData(wrapper, club);
  container.appendChild(wrapper);
}

function populateData(root, club) {
  root.querySelector('#club-logo')?.setAttribute('src', `assets/logos/clubs/${encodeURIComponent(club.name)}.png`);
  root.querySelector('#club-logo')?.setAttribute('alt', `${club.name} Logo`);
  root.querySelector('#club-name') && (root.querySelector('#club-name').textContent = club.name);
  root.querySelector('#club-nickname') && (root.querySelector('#club-nickname').textContent = club.nickname);

  root.querySelector('#club-stadium') && (root.querySelector('#club-stadium').textContent = club.stadium);
  root.querySelector('#club-founded') && (root.querySelector('#club-founded').textContent = club.founded);
  root.querySelector('#club-hashtag') && (root.querySelector('#club-hashtag').textContent = club.hashtag);

  root.querySelector('#kit-home')?.setAttribute('src', club.kits?.home || 'https://via.placeholder.com/40');
  root.querySelector('#kit-away')?.setAttribute('src', club.kits?.away || 'https://via.placeholder.com/40');

  if (club.competition_history && root.querySelector('#club-honors')) {
    const honorsEl = root.querySelector('#club-honors');
    for (const [comp, data] of Object.entries(club.competition_history)) {
      if (!data.winnerIn?.length) continue;
      const trophy = document.createElement('div');
      trophy.className = 'flex flex-col items-center';
      trophy.title = data.winnerIn.join(', ');
      trophy.innerHTML = `
        <img src="assets/competitions/${comp}.png" class="h-6 object-contain" />
        <span class="text-xs text-gray-300 mt-0.5">×${data.winnerIn.length}</span>
      `;
      honorsEl.appendChild(trophy);
    }
  }

  if (club.supporter_profile && root.querySelector('#supporter-bar')) {
    const bar = root.querySelector('#supporter-bar');
    const total = Object.values(club.supporter_profile).reduce((a, b) => a + b, 0);
    for (const [trait, value] of Object.entries(club.supporter_profile)) {
      const segment = document.createElement('div');
      segment.style.width = `${(value / total) * 100}%`;
      segment.className = 'h-full';
      segment.title = `${trait}: ${value}`;
      segment.style.backgroundColor = {
        loyalty: '#16a34a',
        passion: '#dc2626',
        patience: '#fbbf24',
        affluence: '#0ea5e9',
        temprament: '#7c3aed',
        expectations: '#f472b6'
      }[trait] || '#888';
      bar.appendChild(segment);
    }
  }

  if (club.rivals && root.querySelector('#rival-badges')) {
    const wrap = root.querySelector('#rival-badges');
    for (const r of club.rivals) {
      const badge = document.createElement('img');
      badge.src = `assets/logos/clubs/${encodeURIComponent(r.club)}.png`;
      badge.alt = r.club;
      badge.title = `${r.club} (${r.reason})`;
      badge.className = `h-6 w-6 rounded-full object-contain bg-white/10 p-0.5 ring-2 ${
        r.level > 75 ? 'ring-red-500' : r.level > 50 ? 'ring-orange-400' : 'ring-blue-400'
      }`;
      wrap.appendChild(badge);
    }
  }

  if (club.derbies && root.querySelector('#club-derbies')) {
    const list = root.querySelector('#club-derbies');
    for (const d of club.derbies) {
      const div = document.createElement('div');
      div.className = 'bg-blue-900/40 p-3 rounded border border-blue-700';
      div.innerHTML = `
        <h4 class="text-md font-semibold text-amber-200 mb-1">${d.name}</h4>
        <p class="text-sm text-gray-300">vs <strong>${d.team2}</strong></p>
        <p class="text-xs text-gray-400 mt-1">${d.history || '—'}</p>
      `;
      list.appendChild(div);
    }
  }

  if (club.club_history && root.querySelector('#club-history')) {
    root.querySelector('#club-history').textContent = club.club_history;
  }

  if (club.players_alumni && root.querySelector('#club-legends')) {
    for (const type of ['legends', 'icons']) {
      const wrap = root.querySelector(`#club-${type}`);
      for (const name of club.players_alumni[type] || []) {
        const img = document.createElement('img');
        img.src = `assets/players/${encodeURIComponent(name)}.png`;
        img.alt = name;
        img.title = name;
        img.className = 'h-10 w-10 rounded-full object-cover bg-white/10';
        // img.onerror = () => (img.src = 'https://via.placeholder.com/40');
        wrap.appendChild(img);
      }
    }
  }

  if (club.schedule && root.querySelector('#match-schedule')) {
    const list = root.querySelector('#match-schedule');
    for (const m of club.schedule) {
      const li = document.createElement('li');
      li.innerHTML = `📍 ${m.date} | ${m.home ? 'vs' : '@'} ${m.opponent} | 🏟 ${m.venue} ${m.score ? `| ${m.score}` : ''}`;
      list.appendChild(li);
    }
  }
}

const params = new URLSearchParams(window.location.search);
const clubName = params.get('club');
const club = getClubDataByName(clubName);

if (club) {
  renderClubPage(club).catch(err => {
    document.getElementById('club-container').innerHTML = `<p class="text-red-500">Error loading club page.</p>`;
    console.error(err);
  });
} else {
  document.getElementById('club-container').innerHTML = `<p class="text-red-500">Club not found.</p>`;
}
