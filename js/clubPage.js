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
  wrapper.classList.add('flex', 'flex-col', 'gap-4');

  const sections = [
    'header',
    'schedule',
    'hero', 
    'history-and-honors',
    'kits',
    'alumni',
    'rivals-and-derbies',
    'supporters',
    'footer',
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

async function populateData(root, club) {
  if (club.colors?.length >= 2) {
    const header = root.querySelector('#club-header');
    if (header) {
      header.style.setProperty('--club-color-primary', club.colors[0]);
      header.style.setProperty('--club-color-secondary', club.colors[1]);
    }
  }


  // 🏟️ Populate hero section
  const stadiumImg = root.querySelector('#club-stadium-image');
  if (stadiumImg) stadiumImg.src = `assets/stadiums/${encodeURIComponent(club.name)}.png` || 'https://via.placeholder.com/1200x800?text=Stadium+Image';

  const heroClubLogo = root.querySelector('#hero-club-logo');
  if (heroClubLogo) heroClubLogo.src = club.club_logo || 'https://via.placeholder.com/800x800?text=club+logo';

  const heroName = root.querySelector('#hero-club-name');
  if (heroName) heroName.textContent = club.name;

  const heroStadium = root.querySelector('#hero-club-stadium');
  if (heroStadium) heroStadium.textContent = `🏟️ ${club.stadium}`;

  const heroFounded = root.querySelector('#hero-club-founded span');
  if (heroFounded) heroFounded.textContent = club.founded;

  const heroClubSlogan = root.querySelector('#hero-club-slogan');
  if (heroClubSlogan) heroClubSlogan.textContent = club.club_slogan;


  root.querySelector('#club-logo')?.setAttribute('src', `assets/logos/clubs/normal/${encodeURIComponent(club.name)}.png`);
  root.querySelector('#club-logo')?.setAttribute('alt', `${club.name} Logo`);
  root.querySelector('#club-name') && (root.querySelector('#club-name').textContent = club.name);
  root.querySelector('#club-nickname') && (root.querySelector('#club-nickname').textContent = club.nickname);
  if (club.chants) {root.querySelector('#club-chant') && (root.querySelector('#club-chant').textContent = club.chants[0].lyrics.join('\n'));}

  root.querySelector('#club-stadium') && (root.querySelector('#club-stadium').textContent = club.stadium);
  root.querySelector('#club-founded') && (root.querySelector('#club-founded').textContent = club.founded);
  root.querySelector('#club-hashtag') && (root.querySelector('#club-hashtag').textContent = club.hashtag);

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  if (club.schedule && root.querySelector('#match-strip')) {
    const strip = root.querySelector('#match-strip');
    const today = new Date(2025, 7, 22);

    let nextMatchMarked = false;
    for (const match of club.schedule) {
      const matchDate = new Date(match.date);
      const isPast = matchDate < today;
      const isUpcoming = !match.score && !isPast;
      const hasScore = !!match.score;

      // Background color based on result
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
        scoreHTML = `<div class="text-center text-md font-bold text-gray-200 pt-1">${homeScore} - ${awayScore}</div>`;
      }

      const opponentLogo = `assets/logos/clubs/${encodeURIComponent(match.opponent)}.png`;
      const clubLogo = `assets/logos/clubs/${encodeURIComponent(club.name)}.png`;

      const card = document.createElement('div');
      card.className = `relative min-w-[180px] rounded-lg ${bg} p-1 shadow border border-white/10 flex flex-col items-center justify-between`;
      if (isUpcoming && !nextMatchMarked) {
        card.classList.add('ring-2', 'ring-amber-400', 'ring-offset-2');
        card.dataset.upcoming = 'true';
        card.dataset.showNextLabel = 'true';
        nextMatchMarked = true;
      }

      card.innerHTML = `
        ${card.dataset.showNextLabel === 'true' ? 
          '<div class="absolute -top-2 -right-2 bg-amber-500 text-black text-[10px] px-2 py-0.5 rounded-full font-bold uppercase z-10">Next</div>' 
          : ''
        } 
        <div class="flex gap-2 justify-between">  
          <div class="absolute ${(match.tournament==='TVC')? '-left-6' : '-left-3'} top-1/2 transform -translate-y-1/2 z-10">
            <img src="assets/competitions/${match.tournament}.png" alt="${match.tournament}" class="h-12 w-auto shadow-lg rounded-lg" />
          </div>         
        <div class="grid grid-cols-[15%_85%] gap-2 w-full rounded pl-2 pr-2">
          <div class="relative text-gray-200 text-center -left-1">
            <div class="relative z-5 font-semibold">
              <p class="text-xs text-shadow-lg/30">${months[matchDate.getMonth()-1]}</p>
              <p class="text-base text-shadow-lg/30">${matchDate.getDate()}</p>
            </div>
          </div>

          <div class="relative text-white">
            <!-- Stadium background image -->
            <div class="absolute inset-0 bg-cover bg-center z-0" style="background-image: url('assets/stadiums/${match.home ? club.name : match.opponent}.png');"></div>
            <!-- Overlay (Black) -->
            <div class="absolute inset-0 bg-black/60 backdrop-blur-[1px] z-1"></div>
            <!-- Score Details on top of the background and overlay -->
            <div class="relative z-5 flex items-center justify-center gap-2 h-full">
              <img src="${match.home ? clubLogo : opponentLogo}" class="h-8 w-8 object-contain bg-white/15 p-0.5 rounded" />
              ${hasScore ? scoreHTML : '<span class="text-gray-200 font-semibold text-sm">vs</span>'}
              <img src="${match.home ? opponentLogo : clubLogo}" class="h-8 w-8 object-contain bg-white/15 p-0.5 rounded" />
            </div>
          </div>
        </div>
        </div>
        </div>
      `;

      strip.appendChild(card);
    }

    // Scroll to upcoming match
    setTimeout(() => {
      const upcomingCard = strip.querySelector('[data-upcoming="true"]');
      if (upcomingCard) {
        const offset = upcomingCard.offsetLeft - strip.offsetWidth / 2 + upcomingCard.offsetWidth / 2;
        strip.scrollTo({ left: offset, behavior: 'smooth' });
      }

      const leftBtn = document.getElementById('match-left');
      const rightBtn = document.getElementById('match-right');
      if (!leftBtn || !rightBtn) return;

      leftBtn.addEventListener('click', () => {
        strip.scrollBy({ left: -200, behavior: 'smooth' });
      });

      rightBtn.addEventListener('click', () => {
        strip.scrollBy({ left: 200, behavior: 'smooth' });
      });
    }, 100);
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

  if (club.club_history && root.querySelector('#club-history')) {
    root.querySelector('#club-history').innerHTML = club.club_history;
  }

  // if (club.kits) {
  // const home = root.querySelector('#kit-home');
  // if (home) {
  //   const front = `assets/kits/${club.kits.home_kit_svg}.svg` || 'https://via.placeholder.com/140';
  //   const back = `assets/kits/${club.kits.away_kit_svg}.svg` || 'https://via.placeholder.com/140';
  //   home.src = front;
  //   home.dataset.front = front;
  //   home.dataset.back = back;
  // }

  // const away = root.querySelector('#kit-away');
  // if (away) {
  //   const front = `assets/kits/${club.kits.away_kit_svg}.svg`  || 'https://via.placeholder.com/140';
  //   const back = `assets/kits/${club.kits.home_kit_svg}.svg`  || 'https://via.placeholder.com/140';
  //   away.src = front;
  //   away.dataset.front = front;
  //   away.dataset.back = back;
  // }

  // if (club.kits.third) {
  //   const thirdKit = document.createElement('div');
  //   thirdKit.className = 'bg-white/5 rounded-lg p-4 text-center';
  //   const thirdFront = club.kits.third;
  //   const thirdBack = thirdFront.replace(/\\.svg$/, '_back.png');

  //   thirdKit.innerHTML = `
  //     <img src="${thirdFront}" alt="Third Kit"
  //          class="w-2/3 mx-auto object-contain mb-2 rounded shadow"
  //          onmouseover="this.src=this.dataset.back"
  //          onmouseout="this.src=this.dataset.front"
  //          data-front="${thirdFront}"
  //          data-back="${thirdBack}" />
  //     <p class="text-sm text-gray-300">Third Kit<br/>
  //       <span class='text-xs text-green-400 font-semibold'>$39.99</span><br/>
  //       <button class='mt-1 px-3 py-1 bg-amber-500/80 hover:bg-amber-500 text-xs text-black font-semibold rounded'>Buy Now</button>
  //     </p>
  //   `;
  //   root.querySelector('#kits-grid')?.appendChild(thirdKit);
  // }
  // }

  if (club.kits) {
    // Nested helper function to load and inject SVG content
    async function loadSvg(containerId, svgPath) {
      const container = root.querySelector(`#${containerId}`);
      if (!container) return;

      try {
        const response = await fetch(svgPath);
        if (!response.ok) throw new Error(`Failed to load SVG from ${svgPath}`);
        const svgText = await response.text();
        container.innerHTML = svgText;
      } catch (error) {
        console.error(`Error loading SVG for container ${containerId}:`, error);
      }
    }

    // Nested helper function to set CSS variables
    function setKitColors(containerId, colors) {
      const container = root.querySelector(`#${containerId}`);
      if (!container) return;
      container.style.setProperty('--kit-primary-color', `rgb(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]})`);
      container.style.setProperty('--kit-secondary-color', `rgb(${colors[1][0]}, ${colors[1][1]}, ${colors[1][2]})`);
      container.style.setProperty('--kit-accent-color', `rgb(${colors[2][0]}, ${colors[2][1]}, ${colors[2][2]})`);
      container.style.setProperty('--kit-number-color', `rgb(${colors[3][0]}, ${colors[3][1]}, ${colors[3][2]})`);
    }

    // Function to handle a single kit display
    async function displayKit(kitType) {
      const kitData = club.kits;
      const colors = kitData[kitType];
      const svgNumber = kitData[`${kitType}_kit_svg`];
      const frontContainerId = `kit-${kitType}-front`;
      const backContainerId = `kit-${kitType}-back`;

      // Load and style the front of the kit
      const frontSvgPath = `assets/kits/${svgNumber}.svg`;
      await loadSvg(frontContainerId, frontSvgPath);
      setKitColors(frontContainerId, colors);

      // Handle the back of the kit
      const backType = kitData[`${kitType}_back`];

      if (backType === 'same_as_front') {
        const frontSvg = root.querySelector(`#${frontContainerId} svg`);
        if (frontSvg) {
          const backSvg = frontSvg.cloneNode(true);
          const backContainer = root.querySelector(`#${backContainerId}`);
          if (backContainer) {
            backContainer.innerHTML = '';
            backContainer.appendChild(backSvg);
            setKitColors(backContainerId, colors);
          }
        }
      } else {
        const backSvgPath = `assets/kits/backs/${backType}.svg`;
        await loadSvg(backContainerId, backSvgPath);
        setKitColors(backContainerId, colors);
      }

      // Add mouseover/mouseout functionality
      const mainContainer = root.querySelector(`#kit-${kitType}-container`);
      const frontContainer = root.querySelector(`#${frontContainerId}`);
      const backContainer = root.querySelector(`#${backContainerId}`);

      if (mainContainer && frontContainer && backContainer) {
        mainContainer.addEventListener('mouseover', () => {
          frontContainer.classList.add('hidden');
          backContainer.classList.remove('hidden');
        });
        mainContainer.addEventListener('mouseout', () => {
          backContainer.classList.add('hidden');
          frontContainer.classList.remove('hidden');
        });
      }
    }

    // Call the display function for each kit type
    await displayKit('home');
    await displayKit('away');

    if (club.kits.third) {
      const thirdKit = document.createElement('div');
      thirdKit.className = 'bg-white/5 rounded-lg p-4 text-center';
      thirdKit.innerHTML = `
        <div id="third-kit-container" class="w-2/3 mx-auto object-contain mb-2 rounded shadow">
          <div id="third-kit-front"></div>
        </div>
        <p class="text-sm text-gray-300">Third Kit<br/>
          <span class='text-xs text-green-400 font-semibold'>$39.99</span><br/>
          <button class='mt-1 px-3 py-1 bg-amber-500/80 hover:bg-amber-500 text-xs text-black font-semibold rounded'>Buy Now</button>
        </p>
      `;
      root.querySelector('#kits-grid')?.appendChild(thirdKit);
      await loadSvg('third-kit-front', club.kits.third);
      // Optional: set third kit colors if you have the data
      // setKitColors('third-kit-front', club.kits.third_colors);
    }
  }

  if (club.players_alumni && root.querySelector('#club-legends')) {
    for (const type of ['legends', 'icons']) {
      const wrap = root.querySelector(`#club-${type}`);
      for (const player of club.players_alumni[type] || []) {
        const img = document.createElement('img');
        img.src = `assets/players/${player["name"]}.png`;
        img.alt = `${player["name"]} - ${player["role"]}`;
        img.title = `${player["name"]} - ${player["role"]}`;
        img.className = 'h-20 w-20 rounded-full object-cover bg-white/10';
        img.onerror = () => {
          // Fetch a random user from RandomUser.me
          fetch('https://randomuser.me/api/?gender=male')
            .then(response => response.json())
            .then(data => {
              // Get the user's picture (default is large, you can adjust the size)
              img.src = data.results[0].picture.large;
            })
            .catch(() => {
              // In case the API request fails, set a fallback image
              img.src = 'https://randomuser.me/api/portraits/lego/1.jpg'; // Lego placeholder
            });
        };        
        wrap.appendChild(img);
      }
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
    const logo = `assets/logos/clubs/${rival.club}.png`;

    const card = document.createElement('div');
    card.className = `min-w-[224px] bg-white/10 p-4 rounded-lg border border-white/10 shadow text-center flex flex-col items-center justify-between gap-2`;

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
          const nextMatch = club.schedule?.find(m => new Date(m.date) >= today && m.opponent === rival.club);
          if (!nextMatch) {
            return `
            <h4 class="text-sm text-amber-300 mt-2">Next Match</h4>
            <div class="flex justify-center items-center bg-white/10 text-xl text-gray-200 rounded px-2 py-1 min-h-[72px] w-[80%]">
              <p>- </p>
            </div>
            `;
          }
          const matchDate = new Date(nextMatch.date);
          const isHome = nextMatch.home;
          const homeLogo = `assets/logos/clubs/${encodeURIComponent(isHome ? club.name : nextMatch.opponent)}.png`;
          const awayLogo = `assets/logos/clubs/${encodeURIComponent(isHome ? nextMatch.opponent : club.name)}.png`;

          return `
            <h4 class="text-sm text-amber-300 mt-2">Next Match</h4>

            <div class="bg-white/10 text-xs text-gray-200 rounded px-2 py-1 relative"> 
              <!-- Badge/logo -->
              <div class="absolute ${(nextMatch.tournament==='TVC')? '-left-6' : '-left-3'} top-1/2 transform -translate-y-1/2 z-10">
                <img src="assets/competitions/${nextMatch.tournament}.png" alt="${nextMatch.tournament}" class="h-12 w-auto shadow-lg rounded-lg" />
              </div>

              <!-- Group wrapper for hover behavior -->
              <div class="group relative">
                <div class="default-view">
                  <div class="grid grid-cols-[15%_10%_75%] gap-2 w-full rounded pl-2 pr-2">
                    <div class="relative text-gray-200 text-center">
                      <div class="relative z-5 font-semibold">
                        <p class="text-xs text-shadow-lg/30">${months[matchDate.getMonth()-1]}</p>
                        <p class="text-base text-shadow-lg/30">${matchDate.getDate()}</p>
                      </div>
                    </div>
                    <div class="w-px bg-gray-300 h-full opacity-30"></div>
                    <div class="relative text-white -left-3">
                      <div class="relative z-5 flex items-center justify-center gap-2 h-full">
                        <img src="${nextMatch.home ? homeLogo : awayLogo}" class="h-8 w-8 object-contain bg-white/15 p-0.5 rounded" />
                        <span class="text-gray-200 font-semibold text-sm">vs</span>
                        <img src="${nextMatch.home ? awayLogo : homeLogo}" class="h-8 w-8 object-contain bg-white/15 p-0.5 rounded" />
                      </div>
                    </div>
                  </div>
                  <hr class="opacity-30 mt-1 mb-1"/>
                  <div class="text-xs text-center mt-1">🏟 ${nextMatch.venue}</div>
                </div>

                <!-- Hover content: hidden by default, shown on group hover -->
                <div class="z-5 gap-2 hidden group-hover:flex absolute inset-0 items-center justify-center bg-blue-700 hover:bg-blue-600 text-white text-md font-bold border border-blue-700 rounded transition duration-300 cursor-pointer">
                  Book Tickets <span class="text-lg">➚</span>
                </div>
              </div>
            </div>
            `;
          })
        ()
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

  if (club.supporter_profile && root.querySelector('#supporter-bar')) {
    const bar = root.querySelector('#supporter-bar');
    const total = Object.values(club.supporter_profile).reduce((a, b) => a + b, 0);
    for (const [trait, value] of Object.entries(club.supporter_profile)) {
      const segment = document.createElement('div');
      segment.style.width = `${(value / total) * 100}%`;
      segment.className = 'h-full relative flex items-center justify-center';
      segment.innerHTML = `<span class="hidden md:block text-[10px] text-white font-semibold">
        ${trait.charAt(0).toUpperCase() + trait.slice(1)}
      </span>`;

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
    
// 🎉 Fan Clubs
if (Array.isArray(club.fan_clubs)) {
  const list = root.querySelector('#fan-clubs');
  list.innerHTML = ''; // Clear existing content

  for (const fanClub of club.fan_clubs) {
    // Create the outer card container
    const card = document.createElement('div');
    card.className = 'text-sm shadow-md rounded-lg p-2 bg-white/10 border border-white/10 shadow divide-y divide-gray-300 divide-opacity-30';

    const banner = document.createElement('img');
    banner.src = `assets/fanClubs/${fanClub}.png` || 'https://via.placeholder.com/140';
    banner.className = "h-12 w-auto rounded-full object-cover bg-white/10 mb-4"

    // Fan club name
    const name = document.createElement('p');
    name.className = 'text-md text-center font-bold pt-2 mb-2';
    name.textContent = fanClub || 'Unnamed Fan Club';

    const iconRow = document.createElement('div');
    iconRow.className = 'flex items-center justify-center pt-2 text-md divide-x divide-gray-300 divide-opacity-30';

    // Helper function to wrap each icon in a span with padding
    const createIcon = (emoji) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'w-full text-center'; // horizontal padding for space around dividers
      wrapper.textContent = emoji;
      return wrapper;
    };

    iconRow.appendChild(createIcon('📍'));
    iconRow.appendChild(createIcon('📅'));
    iconRow.appendChild(createIcon('📰'));

    // Append elements to card
    card.appendChild(banner);
    card.appendChild(name);
    card.appendChild(iconRow);

    // Append card to the list container
    list.appendChild(card);
  }
}


  // 💬 Fan Quotes
  if (Array.isArray(club.supporter_quotes)) {
    const quoteWrap = root.querySelector('#fan-quotes');
    quoteWrap.innerHTML = ''; // clear defaults
    for (const q of club.supporter_quotes) {
      const block = document.createElement('div');
      block.className =
        'bg-gradient-to-br from-amber-500/10 to-blue-800/10 border border-blue-700 p-4 rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300 backdrop-blur-sm';

      block.innerHTML = `
        <p class="italic">“${q.text}”</p>
        <p class="text-xs text-right text-amber-400">— ${q.author}</p>
      `;
      quoteWrap.appendChild(block);
    }
  }
  }

  if (club.club_slogan && root.querySelector('#supporter-chant')) {
    root.querySelector('#supporter-chant').textContent = `“${club.club_slogan}”`;
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
