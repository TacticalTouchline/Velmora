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
  const citiesListEl = document.getElementById('cities-list');
  const landmarksListEl = document.getElementById('landmarks-list');
  const clubsListEl = document.getElementById('clubs-list');
  const playersListEl = document.getElementById('players-list');
  const styleLineEl = document.getElementById('region-style');

  let selectedRegionId = null;

  function updatePanel(id) {
    const data = regionData[id];
    if (!data) return;

    regionNameEl.textContent = data.name;
    regionDescriptionEl.textContent = data.description;
    styleLineEl.textContent = `Common playing style: ${data.style}`;

    // helper to populate list
    const fillList = (element, values, formatter = x => x) => {
      element.innerHTML = '';
      values.forEach(val => {
        const li = document.createElement('li');
        li.textContent = formatter(val);
        element.appendChild(li);
      });
    };

    fillList(citiesListEl, data.cities);
    fillList(landmarksListEl, data.landmarks || []);
    fillList(playersListEl, data.notable_players || []);
    fillList(clubsListEl, data.clubs || [], club => `${club.name} (${club.founded}) — plays at ${club.stadium}`);

    citiesSectionEl.classList.remove('hidden');
    setTimeout(() => citiesSectionEl.classList.remove('opacity-0'), 10);
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