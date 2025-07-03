export function setupRegionInteractivity({
  regionData,
  regionSelector,
  nameElId,
  descElId,
  citiesSectionId,
  citiesListId,
  svgRoot
}) {
  const mapRegions = svgRoot.querySelectorAll(regionSelector);
  const regionNameEl = document.getElementById(nameElId);
  const regionDescriptionEl = document.getElementById(descElId);
  const citiesSectionEl = document.getElementById('region-extra');
  const citiesDetailedEl = document.getElementById('cities-detailed');

  let selectedRegionId = null;
  let activeMarkers = [];

  function createClubMarker(club, svgRoot) {
    const svgEl = svgRoot.querySelector('svg');
    const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
    image.setAttribute("href", `assets/logos/clubs/${encodeURIComponent(club.name)}.png`);
    image.setAttribute("x", club.coord[0] - 10);
    image.setAttribute("y", club.coord[1] - 10);
    image.setAttribute("width", "20");
    image.setAttribute("height", "20");
    image.setAttribute("class", "club-marker");
    image.setAttribute("title", club.name);

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

  function renderSupporterProfile(profile) {
    const keys = Object.keys(profile || {});
    if (!keys.length) return '';

    const total = keys.reduce((acc, k) => acc + (profile[k] || 0), 0);
    const segments = keys.map(k => {
      const percent = ((profile[k] / total) * 100).toFixed(2);
      const colorMap = {
        loyalty: '#4ade80',
        passion: '#f472b6',
        patience: '#facc15',
        affluence: '#60a5fa',
        temprament: '#f87171',
        expectations: '#c084fc'
      };
      return `<div class="h-full" style="width:${percent}%; background:${colorMap[k] || '#888'}" title="${k}: ${profile[k]}"></div>`;
    }).join('');

    return `<div class="mt-2">
      <h4 class="text-sm font-semibold text-green-300 mb-1">Supporter's Profile</h4>
      <div class="h-3 rounded overflow-hidden flex w-full bg-gray-700">
        ${segments}
      </div>
    </div>`;
  }

  function renderRivalBadges(rivals) {
    return `
    <div class="flex gap-2 mt-1"><div>
      <h4 class="text-sm font-semibold text-red-300 mb-1">Rivals</h4>
      <div class="flex flex-wrap  gap-2">
        ${rivals.map(r => {
          let ringColor = 'ring-blue-400';
          if (r.level > 75) ringColor = 'ring-red-500';
          else if (r.level > 50) ringColor = 'ring-orange-400';

          const logoPath = `assets/logos/clubs/${encodeURIComponent(r.club)}.png`;

          return `<img
            src="${logoPath}"
            alt="${r.club} Logo"
            title="${r.club}: ${r.reason} (${r.level}%)"
            class="h-10 w-10 rounded-full object-contain bg-white/10 p-0.5 ring-2 ${ringColor}"
          />`;
        }).join('')}
      </div></div>
    </div>
    `;
  }

  function renderAlumni(alumni) {
    const { icons = [], legends = [] } = alumni;
    if (!icons.length && !legends.length) return '';
    return `
      <div class="grid grid-cols-2 gap-4 mt-1">
        <div>
          <h4 class="text-sm font-semibold text-purple-300 mb-1">Legends</h4>
          <div class="flex flex-wrap gap-2">
            ${legends.map(p => `<img src="assets/players/${encodeURIComponent(p)}.png" alt="${p}" title="${p}" class="h-8 w-8 rounded-full object-cover bg-white/10" />`).join('')}
          </div>
        </div>
        <div>
          <h4 class="text-sm font-semibold text-blue-300 mb-1">Icons</h4>
          <div class="flex flex-wrap gap-2">
            ${icons.map(p => `<img src="assets/players/${encodeURIComponent(p)}.png" alt="${p}" title="${p}" class="h-8 w-8 rounded-full object-cover bg-white/10" />`).join('')}
          </div>
        </div>
      </div>`
  }

  function renderHonors(history) {
    const competitions = Object.entries(history || {}).filter(([, data]) => data.winnerIn?.length);
    if (!competitions.length) return '';
    return `
      <div class="flex gap-4 flex-wrap">
        ${competitions.map(([key, data]) => {
          const years = data.winnerIn.join(', ');
          return `
            <div class="flex flex-col items-center" title="${years}">
              <img src="assets/competitions/${key}.png" alt="${key}" class="h-10 object-contain" />
              <span class="text-xs text-gray-300 mt-0.5">${data.winnerIn.length}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }


  function renderClubCard(club) {
    return `
      <div class="relative bg-blue-900/30 border border-amber-600 rounded-lg p-4 shadow flex flex-col gap-3 overflow-hidden">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 flex items-center gap-3">
          <img loading="lazy" src="assets/logos/clubs/${encodeURIComponent(club.name)}.png" class="w-12 h-12 object-contain bg-white/10 rounded shrink-0" alt="${club.name} Logo" />
          <div>
            <a href="club.html?club=${encodeURIComponent(club.name)}" 
              target="_blank" 
              class="text-base font-semibold text-amber-200 hover:underline">
              ${club.name}
            </a>
            <p class="text-sm text-gray-400 italic">${club.nickname}</p>
          </div>
        </div>
        <div class="flex justify-center items-start">
          ${club.competition_history ? renderHonors(club.competition_history) : ''}
        </div>
      </div>
        <div class="grid grid-cols-3 gap-2 text-sm text-gray-300">
          <div class="flex flex-col col-span-2 gap-0.5">
            <span>🏟️ ${club.stadium}</span>
            <span>📅 ${club.founded}</span>
            <span class="text-sky-400">${club.hashtag}</span>
          </div>
          <div class="flex flex-col items-end m-auto">
            <div class="flex gap-2">
              <img loading="lazy" src="${club.kits?.home || 'https://via.placeholder.com/40'}" class="h-12" title="Home Kit" />
              <img loading="lazy" src="${club.kits?.away || 'https://via.placeholder.com/40'}" class="h-12" title="Away Kit" />
            </div>
            <!--<div class="flex gap-1">
              ${club.colors.map(c => `<span class="w-4 h-4 rounded-full" style="background:${c}"></span>`).join('')}
            </div>-->
          </div>
        </div>
        ${club.rivals?.length ? renderRivalBadges(club.rivals) : ''}
        ${renderAlumni(club.players_alumni || {})}
        ${club.supporter_profile ? renderSupporterProfile(club.supporter_profile) : ''}
      </div>
    `;
  }

  function renderCitiesAndClubs(cities) {
    citiesDetailedEl.innerHTML = '';
    for (const [cityName, cityData] of Object.entries(cities)) {
      const citySection = document.createElement('div');
      citySection.className = 'mb-6';
      citySection.innerHTML = `
        <details class="bg-blue-900/40 rounded-lg">
          <summary class="cursor-pointer px-4 py-2 text-amber-300 font-semibold text-lg">${cityName} — ${cityData.climate}</summary>
          <div class="p-4 flex flex-col gap-4">
            ${cityData.clubs.map(renderClubCard).join('')}
          </div>
        </details>`;
      citiesDetailedEl.appendChild(citySection);
    }
  }

  function extractAllClubs(region) {
    return Object.values(region.cities || {}).flatMap(city => city.clubs || []);
  }

  function updatePanel(id) {
    const data = regionData[id];
    if (!data) return;

    regionNameEl.textContent = data.name;
    regionDescriptionEl.textContent = data.description;

    renderCitiesAndClubs(data.cities || {});

    citiesSectionEl.classList.remove('hidden');
    setTimeout(() => citiesSectionEl.classList.remove('opacity-0'), 10);

    activeMarkers.forEach(m => m.remove());
    activeMarkers = [];
    extractAllClubs(data).forEach(club => {
      if (club.coord) {
        const marker = createClubMarker(club, svgRoot);
        activeMarkers.push(marker);
      }
    });
  }

  function updateMapStyles(activeId) {
    mapRegions.forEach(region => {
      if (region.id === activeId) {
        region.classList.remove('dimmed');
      } else {
        region.classList.add('dimmed');
      }
    });
  }

  function clearSelection() {
    selectedRegionId = null;
    mapRegions.forEach(region => region.classList.remove('dimmed'));
    regionNameEl.textContent = "Select a Region";
    regionDescriptionEl.textContent = "Click on any region on the map to discover its unique characteristics, footballing culture, and major cities.";
    citiesSectionEl.classList.add('opacity-0');
    setTimeout(() => citiesSectionEl.classList.add('hidden'), 500);
    activeMarkers.forEach(m => m.remove());
    activeMarkers = [];
  }

  mapRegions.forEach(region => {
    region.addEventListener('click', () => {
      const regionId = region.id;
      if (selectedRegionId === regionId) {
        clearSelection();
      } else {
        selectedRegionId = regionId;
        updatePanel(regionId);
        updateMapStyles(regionId);
      }
    });
  });
}
