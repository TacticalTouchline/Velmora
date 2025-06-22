// Dynamically load and inline an SVG file into a container
export async function loadInlineSVG(url, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const response = await fetch(url);
    const svgText = await response.text();

    // Inject the SVG inline so styles apply
    container.innerHTML = svgText;
  } catch (err) {
    console.error("Failed to load SVG:", err);
  }
}
