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
  const styleLineEl = document.getElementById('region-style');

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
      <h4 class="text-sm font-semibold text-purple-300 mb-1">Supporter's Profile</h4>
      <div class="h-3 rounded overflow-hidden flex w-full bg-gray-700">
        ${segments}
      </div>
    </div>`;
  }

  function renderRivalBadges(rivals) {
    return `
      <h4 class="text-sm font-semibold text-purple-300 mt-1">Rivals</h4>
      <div class="flex gap-2 flex-wrap">
        ${rivals.map(r => {
          let ringColor = 'ring-blue-400';
          if (r.level > 75) ringColor = 'ring-red-500';
          else if (r.level > 50) ringColor = 'ring-orange-400';

          const logoPath = `assets/logos/clubs/${encodeURIComponent(r.club)}.png`;

          return `<img
            src="${logoPath}"
            alt="${r.club} Logo"
            title="${r.club}: ${r.reason} (${r.level}%)"
            class="h-10 w-10 rounded-full object-contain bg-white/10 p-1.5 ring-2 ${ringColor}"
          />`;
        }).join('')}
      </div>
    `;
  }

 function renderAlumni(alumni) {
  const { icons = [], legends = [] } = alumni;
  if (!icons.length && !legends.length) return '';
  return `
    <div class="grid grid-cols-2 gap-4 mt-2">
      <div>
        <h4 class="text-sm font-semibold text-purple-300 mb-1">Legends</h4>
        <div class="flex flex-wrap gap-2">
          ${legends.map(p => `<img src="assets/players/${encodeURIComponent(p)}.png" alt="${p}" title="${p}" class="h-8 w-8 rounded-full object-cover bg-white/10" onerror="this.src='https://via.placeholder.com/40'" />`).join('')}
        </div>
      </div>
      <div>
        <h4 class="text-sm font-semibold text-blue-300 mb-1">Icons</h4>
        <div class="flex flex-wrap gap-2">
          ${icons.map(p => `<img src="assets/players/${encodeURIComponent(p)}.png" alt="${p}" title="${p}" class="h-8 w-8 rounded-full object-cover bg-white/10" onerror="this.src='https://via.placeholder.com/40'" />`).join('')}
        </div>
      </div>
    </div>
        </div>
      </div>
      <div>
        <h4 class="text-sm font-semibold text-blue-300 mb-1">Icons</h4>
        <div class="flex flex-wrap gap-2">
          ${icons.map(p => `
            <img src="assets/players/${encodeURIComponent(p)}.png" alt="${p}" title="${p}" class="h-10 w-10 rounded-full object-cover bg-white/10" onerror="this.src='https://via.placeholder.com/40'" />
          `).join('')}
        </div>
      </div>
    </div>
          ${icons.length ? `<p class="text-blue-300"><strong>Icons:</strong> ${icons.map(p => `<span class='inline-flex items-center gap-1'><img src='https://via.placeholder.com/20' class='inline h-4 w-4 rounded-full'/>${p}</span>`).join(', ')}</p>` : ''}
          ${legends.length ? `<p class="text-purple-300"><strong>Legends:</strong> ${legends.map(p => `<span class='inline-flex items-center gap-1'><img src='https://via.placeholder.com/20' class='inline h-4 w-4 rounded-full'/>${p}</span>`).join(', ')}</p>` : ''}
        </div>
      </details>`;
  }


  function renderAlumni(alumni) {
    const { icons = [], legends = [] } = alumni;
    if (!icons.length && !legends.length) return '';
    return `
      <div class="grid grid-cols-2 gap-4 mt-2">
        <div>
          <h4 class="text-sm font-semibold text-purple-300 mb-1">Legends</h4>
          <div class="flex flex-wrap gap-2">
            ${legends.map(p => `<img src="assets/players/${encodeURIComponent(p)}.png" alt="${p}" title="${p}" class="h-10 w-10 rounded-full object-cover bg-white/10" />`).join('')}
          </div>
        </div>
        <div>
          <h4 class="text-sm font-semibold text-blue-300 mb-1">Icons</h4>
          <div class="flex flex-wrap gap-2">
            ${icons.map(p => `<img src="assets/players/${encodeURIComponent(p)}.png" alt="${p}" title="${p}" class="h-10 w-10 rounded-full object-cover bg-white/10" />`).join('')}
          </div>
        </div>
      </div>`
  }

  function renderClubCard(club) {
    return `
      <div class="relative bg-blue-900/30 border border-amber-600 rounded-lg p-4 shadow flex flex-col gap-3 overflow-hidden">
        <div class="absolute top-4 right-4 flex items-center gap-2">
          <img loading="lazy" src="${club.kits?.home || 'https://via.placeholder.com/40'}" class="h-6" title="Home Kit" />
          <img loading="lazy" src="${club.kits?.away || 'https://via.placeholder.com/40'}" class="h-6" title="Away Kit" />
          <div class="flex gap-1">
            ${club.colors.map(c => `<span class='w-4 h-4 rounded-full inline-block' style='background:${c}'></span>`).join('')}
          </div>
        </div>
        <div class="flex items-center gap-3">
          <img loading="lazy" src="assets/logos/clubs/${encodeURIComponent(club.name)}.png" class="w-12 h-12 object-contain bg-white/10 rounded shrink-0" alt="${club.name} Logo" />
          <div>
            <h5 class="text-base font-semibold text-amber-200">${club.name}</h5>
            <p class="text-sm text-gray-400 italic">${club.nickname}</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-3 text-sm text-gray-300">
          <span>🏟️ ${club.stadium}</span>
          <span>📅 ${club.founded}</span>
          <span class="text-sky-400">${club.hashtag}</span>
        </div>
        ${club.rivals?.length ? renderRivalBadges(club.rivals) : ''}
        ${renderAlumni(club.players_alumni || {})}
        ${club.supporter_profile ? renderSupporterProfile(club.supporter_profile) : ''}
      </div>`;
  }

  function renderCitiesAndClubs(cities) {
    citiesDetailedEl.innerHTML = '';
    for (const [cityName, cityData] of Object.entries(cities)) {
      const citySection = document.createElement('div');
      citySection.className = 'mb-6';
      citySection.innerHTML = `
        <details class="rounded border border-amber-700 bg-blue-900/40">
          <summary class="cursor-pointer px-4 py-2 text-amber-300 font-semibold text-lg border-b border-amber-700">${cityName} — ${cityData.climate}</summary>
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
    styleLineEl.textContent = `Common playing style: ${data.style || ''}`;

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
    styleLineEl.textContent = "";
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
