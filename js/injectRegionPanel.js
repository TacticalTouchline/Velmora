export async function loadRegionPanel() {
  const panelContainer = document.getElementById('region-details-panel-placeholder');
  if (!panelContainer) return;

  try {
    const res = await fetch('components/region-panel.html');
    const html = await res.text();
    panelContainer.insertAdjacentHTML('beforeend', html);
  } catch (err) {
    console.error('Failed to load region panel:', err);
  }
}