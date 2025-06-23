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
    'schedule',
    'hero', 
    'history-and-honors',
    'kits',
    'alumni',
    'rivals-and-derbies',
    'supporters',
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
  if (club.colors?.length >= 2) {
    const header = root.querySelector('#club-header');
    if (header) {
      header.style.setProperty('--club-color-primary', club.colors[0]);
      header.style.setProperty('--club-color-secondary', club.colors[1]);
    }
  }

  // 🏟️ Populate hero section
  const stadiumImg = root.querySelector('#club-stadium-image');
  if (stadiumImg) stadiumImg.src = club.stadium_image || 'https://via.placeholder.com/1200x800?text=Stadium+Image';

  const heroName = root.querySelector('#hero-club-name');
  if (heroName) heroName.textContent = club.name;

  const heroStadium = root.querySelector('#hero-club-stadium');
  if (heroStadium) heroStadium.textContent = `🏟️ ${club.stadium}`;

  const heroFounded = root.querySelector('#hero-club-founded span');
  if (heroFounded) heroFounded.textContent = club.founded;


  root.querySelector('#club-logo')?.setAttribute('src', `assets/logos/clubs/normal/${encodeURIComponent(club.name)}.png`);
  root.querySelector('#club-logo')?.setAttribute('alt', `${club.name} Logo`);
  root.querySelector('#club-name') && (root.querySelector('#club-name').textContent = club.name);
  root.querySelector('#club-nickname') && (root.querySelector('#club-nickname').textContent = club.nickname);

  root.querySelector('#club-stadium') && (root.querySelector('#club-stadium').textContent = club.stadium);
  root.querySelector('#club-founded') && (root.querySelector('#club-founded').textContent = club.founded);
  root.querySelector('#club-hashtag') && (root.querySelector('#club-hashtag').textContent = club.hashtag);

  root.querySelector('#kit-home')?.setAttribute('src', club.kits?.home || 'https://via.placeholder.com/140');
  root.querySelector('#kit-away')?.setAttribute('src', club.kits?.away || 'https://via.placeholder.com/140');
  if (club.kits) {
  const home = root.querySelector('#kit-home');
  if (home) {
    const front = club.kits.home || 'https://via.placeholder.com/140';
    const back = club.kits.home_back || 'https://via.placeholder.com/140';
    home.src = front;
    home.dataset.front = front;
    home.dataset.back = back;
  }

  const away = root.querySelector('#kit-away');
  if (away) {
    const front = club.kits.away || 'https://via.placeholder.com/140';
    const back = club.kits.away_back || 'https://via.placeholder.com/140';
    away.src = front;
    away.dataset.front = front;
    away.dataset.back = back;
  }

  if (club.kits.third) {
    const thirdKit = document.createElement('div');
    thirdKit.className = 'bg-white/5 rounded-lg p-4 text-center';
    const thirdFront = club.kits.third;
    const thirdBack = thirdFront.replace(/\\.svg$/, '_back.png');

    thirdKit.innerHTML = `
      <img src="${thirdFront}" alt="Third Kit"
           class="w-2/3 mx-auto object-contain mb-2 rounded shadow"
           onmouseover="this.src=this.dataset.back"
           onmouseout="this.src=this.dataset.front"
           data-front="${thirdFront}"
           data-back="${thirdBack}" />
      <p class="text-sm text-gray-300">Third Kit<br/>
        <span class='text-xs text-green-400 font-semibold'>$39.99</span><br/>
        <button class='mt-1 px-3 py-1 bg-amber-500/80 hover:bg-amber-500 text-xs text-black font-semibold rounded'>Buy Now</button>
      </p>
    `;
    root.querySelector('#kits-grid')?.appendChild(thirdKit);
  }
}

  if (club.competition_history && root.querySelector('#club-honors')) {
    const honorsEl = root.querySelector('#club-honors');
    for (const [comp, data] of Object.entries(club.competition_history)) {
      if (!data.winnerIn?.length) continue;
      const trophy = document.createElement('div');
      trophy.className = 'flex flex-col items-center';
      trophy.title = data.winnerIn.join(', ');
      trophy.innerHTML = `
        <img src="assets/competitions/${comp}.png" class="h-60 w-auto object-contain mx-auto" />
        <span class="text-xl text-gray-300 mt-1 block text-center">×${data.winnerIn.length}</span>
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

  if (club.rivals && root.querySelector('#rival-strip')) {
  const strip = root.querySelector('#rival-strip');
  const rivalMap = new Map(club.rivals.map(r => [r.club, r]));

  const derbies = (club.derbies || []).reduce((acc, derby) => {
    acc[derby.team2] = derby;
    return acc;
  }, {});

  for (const rival of club.rivals) {
    const derby = derbies[rival.club];
    const logo = `assets/logos/clubs/${encodeURIComponent(rival.club)}.png`;

    const card = document.createElement('div');
    card.className = `min-w-[180px] bg-white/10 p-4 rounded-lg border border-white/10 shadow text-center flex flex-col items-center justify-between gap-2`;

    card.innerHTML = `
      <img src="${logo}" alt="${rival.club}" class="h-12 w-12 object-contain bg-white/10 rounded-full" />
      <div>
        <h3 class="text-sm font-semibold text-white">${rival.club}</h3>
        <p class="text-xs text-gray-300 italic">${rival.reason}</p>
      </div>
      <div class="text-xs font-medium ${rival.level > 75 ? 'text-red-400' : rival.level > 50 ? 'text-orange-300' : 'text-blue-300'}">
        Rivalry Level: ${rival.level}
      </div>
${
  derby
    ? `<div class="bg-blue-800/50 text-xs text-amber-300 px-2 py-1 rounded mt-1">
         Derby: <strong>${derby.name}</strong>
       </div>`
    : ''
}
${
  (() => {
    const today = new Date();
    const nextMatch = club.schedule?.find(
      m => new Date(m.date) >= today && m.opponent === rival.club
    );
    if (!nextMatch) return '';

    const isHome = nextMatch.home;
    const homeLogo = `assets/logos/clubs/${encodeURIComponent(isHome ? club.name : nextMatch.opponent)}.png`;
    const awayLogo = `assets/logos/clubs/${encodeURIComponent(isHome ? nextMatch.opponent : club.name)}.png`;

    return `
      <h4 class="text-sm text-amber-300 mt-2">Next Match</h4>
      <div class="bg-white/10 text-xs text-gray-200 rounded px-2 py-1">
        <div class="font-semibold mb-1 text-center">${nextMatch.date}</div>
        <div class="flex justify-center items-center gap-2">
          <img src="${homeLogo}" class="h-5 w-5 rounded object-contain bg-white/10" />
          <span class="font-medium text-white text-sm">vs</span>
          <img src="${awayLogo}" class="h-5 w-5 rounded object-contain bg-white/10" />
        </div>
        <div class="text-[10px] text-center mt-1">🏟 ${nextMatch.venue}</div>
      </div>
    `;
  })()
}


    `;

    strip.appendChild(card);
  }

  // Add scroll behavior for slideshow
  setTimeout(() => {
    const leftBtn = document.getElementById('rival-left');
    const rightBtn = document.getElementById('rival-right');
    if (!leftBtn || !rightBtn) return;

    leftBtn.addEventListener('click', () => {
      strip.scrollBy({ left: -200, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
      strip.scrollBy({ left: 200, behavior: 'smooth' });
    });
  }, 0);
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
        img.className = 'h-20 w-20 rounded-full object-cover bg-white/10';
        // img.onerror = () => (img.src = 'https://via.placeholder.com/40');
        wrap.appendChild(img);
      }
    }
  }
if (club.schedule && root.querySelector('#match-strip')) {
  const strip = root.querySelector('#match-strip');
  const today = new Date();

  for (const match of club.schedule) {
    const matchDate = new Date(match.date);
    const isPast = matchDate < today;
    const hasScore = !!match.score;

    // Basic result logic from score
    let bg = 'bg-white/10';
    let scoreHTML = '';
    if (hasScore) {
    let homeScore = null, awayScore = null;
    if (typeof match.score === 'string' && match.score.includes('-')) {
      [homeScore, awayScore] = match.score.split('-').map(s => parseInt(s.trim()));
    }
      const clubIsHome = match.home;
      const win = (clubIsHome && homeScore > awayScore) || (!clubIsHome && awayScore > homeScore);
      const draw = homeScore === awayScore;
      bg = win ? 'bg-green-800/60' : draw ? 'bg-yellow-800/50' : 'bg-red-800/60';
      scoreHTML = `<div class="text-center text-lg font-bold text-white mt-1">${homeScore} - ${awayScore}</div>`;
    }

    const opponentLogo = `assets/logos/clubs/${encodeURIComponent(match.opponent)}.png`;
    const clubLogo = `assets/logos/clubs/${encodeURIComponent(club.name)}.png`;

    const card = document.createElement('div');
    card.className = `min-w-[180px] rounded-lg ${bg} p-2 shadow border border-white/10 flex flex-col items-center justify-between`;

    card.innerHTML = `
      <div class="flex items-baseline justify-between gap-2">
          <div class="text-xs text-gray-300 font-medium">${match.date}</div>
          <div class="text-xs text-gray-300 truncate text-center">🏟 ${match.venue}</div>
      </div>
      <div class="flex items-center justify-center gap-2">
        <img src="${match.home ? clubLogo : opponentLogo}" class="h-6 w-6 object-contain bg-white/10 rounded" />
        ${
          hasScore
            ? scoreHTML
            : '<span class="text-gray-400 font-semibold text-sm">vs</span>'
        }
        <img src="${match.home ? opponentLogo : clubLogo}" class="h-6 w-6 object-contain bg-white/10 rounded" />
      </div>
    `;

    strip.appendChild(card);
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
