import { regionData } from './regionData.js';
import { setupRegionInteractivity } from './mapUI.js';
import { loadInlineSVG } from './svgLoader.js';
import { loadRegionPanel } from './injectRegionPanel.js';

async function init() {
  await loadInlineSVG('assets/velmora-map.svg', 'svg-container');
  await loadRegionPanel();

  setupRegionInteractivity({
    regionData,
    regionSelector: '.map-region',
    nameElId: 'region-name',
    descElId: 'region-description',
    citiesSectionId: 'cities-section',
    citiesListId: 'cities-list',
    svgRoot: document
  });
}

init();
