// Links the first mention of each club in every chapter of about.html to that club's page.
import { allClubs, clubUrl } from './clubHelpers.js';

const names = allClubs().map((e) => e.club.name).sort((a, b) => b.length - a.length);

function textNodes(root) {
  const out = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const p = node.parentElement;
      if (!p || p.closest('a, .clipping, .voices, script, style')) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });
  while (walker.nextNode()) out.push(walker.currentNode);
  return out;
}

document.querySelectorAll('.chapter').forEach((chapter) => {
  const done = new Set();
  for (const name of names) {
    if (done.has(name)) continue;
    for (const node of textNodes(chapter)) {
      const i = node.nodeValue.indexOf(name);
      if (i < 0) continue;
      const after = node.nodeValue.slice(i + name.length, i + name.length + 1);
      if (/[A-Za-z]/.test(after)) continue;               // "Valdren Atletika" inside a longer name
      const a = document.createElement('a');
      a.className = 'club-link';
      a.href = clubUrl(name);
      a.textContent = name;
      const rest = node.splitText(i);
      rest.nodeValue = rest.nodeValue.slice(name.length);
      node.parentNode.insertBefore(a, rest);
      done.add(name);
      break;
    }
  }
});
