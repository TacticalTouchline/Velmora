import { regionData } from './regionData.js';
import { setupRegionInteractivity } from './mapUI.js';
import { loadInlineSVG } from './svgLoader.js';
import { loadRegionPanel } from './injectRegionPanel.js';
import { renderNav, wireNav } from './siteNav.js';

document.getElementById('site-nav').innerHTML = renderNav('map');
wireNav();

async function init() {
  await loadInlineSVG('assets/velmora-map.svg', 'svg-container');
  await loadRegionPanel();

  setupRegionInteractivity({
    regionData,
    regionSelector: '.map-region',
    nameElId: 'region-name',
    descElId: 'region-description',
    svgRoot: document
  });
}

init();
