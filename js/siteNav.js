const FA_ITEMS = [
  ["national-team.html", "Overview", "fa-overview"],
  ["clubs.html", "Clubs", "fa-clubs"],
  ["derbies.html", "Derbies and Rivalries", "fa-derbies"],
  ["honours.html", "Roll of Honour", "fa-honours"],
];

export function renderNav(current) {
  const faActive = typeof current === "string" && current.startsWith("fa");
  return `<nav class="site-nav" aria-label="Site">
    <a class="brand" href="index.html">VELMORA</a>
    <ul>
      <li><a href="index.html"${current === "map" ? ' aria-current="page"' : ""}>Map</a></li>
      <li><a href="geography.html"${current === "geography" ? ' aria-current="page"' : ""}>Geography</a></li>
      <li><a href="about.html"${current === "about" ? ' aria-current="page"' : ""}>About</a></li>
      <li class="nav-dropdown">
        <button type="button" class="nav-dropdown-btn" aria-haspopup="true" aria-expanded="false"${faActive ? ' aria-current="page"' : ""}>Velmoran FA</button>
        <ul class="nav-dropdown-menu">
          ${FA_ITEMS.map(([href, label, key]) => `<li><a href="${href}"${key === current ? ' aria-current="page"' : ""}>${label}</a></li>`).join("")}
        </ul>
      </li>
      <li><a href="glossary.html"${current === "glossary" ? ' aria-current="page"' : ""}>Glossary</a></li>
      <!-- <li><a href="download.html"${current === "download" ? ' aria-current="page"' : ""}>Download</a></li>-->
    </ul>
  </nav>`;
}


export function wireNav() {
  const item = document.querySelector(".nav-dropdown");
  const btn = document.querySelector(".nav-dropdown-btn");
  const menu = document.querySelector(".nav-dropdown-menu");
  if (!item || !btn || !menu) return;

  const isOpen = () => item.classList.contains("is-open");
  const close = () => {
    item.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
  };
  const open = () => {
    item.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");
  };

  // Touch devices don't hover, so a tap toggles it instead.
  btn.addEventListener("click", (ev) => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    ev.stopPropagation();
    if (isOpen()) close();
    else open();
  });
  document.addEventListener("click", (ev) => {
    if (isOpen() && !ev.target.closest(".nav-dropdown")) close();
  });
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape" && isOpen()) {
      close();
      btn.focus();
    }
  });
}