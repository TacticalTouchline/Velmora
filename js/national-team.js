// national-team.js — the Pyramid / National Team tab switcher on
// national-team.html. Self-contained, no dependencies on the other pages'
// scripts.

(function () {
  const root = document.querySelector('[data-tabs]');
  if (!root) return;

  const buttons = root.querySelectorAll('.tabs-nav button[data-tab]');
  const panels = root.querySelectorAll('.tab-panel');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');

      buttons.forEach((b) => b.setAttribute('aria-selected', b === btn ? 'true' : 'false'));
      panels.forEach((p) => {
        p.classList.toggle('hidden', p.id !== `tab-${target}`);
      });
    });
  });

  // Open on the tab named in the address (e.g. national-team.html#team), if any
  const requested = location.hash.replace('#', '');
  if (requested) {
    const btn = root.querySelector(`[data-tab="${requested}"]`);
    if (btn) btn.click();
  }
})();