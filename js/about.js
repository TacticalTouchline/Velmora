// about.js — interactive behavior for about.html only:
//   - the Velmar/Kovarai/Both tab switcher on the "two tellings" of 1891
//   - highlighting the current chapter in the desktop sidebar rail
//   - the horizontal swipeable chapter strip on small screens
//
// The tiny `document.documentElement.classList.add('js')` call that gates
// several CSS rules (see about.css) is intentionally NOT here — it lives
// inline in about.html's <head> instead, because it has to run before
// first paint to avoid a flash of the no-JS layout. Moving it to this
// external file would reintroduce that flash, since external scripts don't
// block rendering the same way.

(function () {
  // The two tellings of 1891
  document.querySelectorAll('[data-voices]').forEach(function (box) {
    var grid = box.querySelector('.voices-grid');
    var buttons = box.querySelectorAll('.voices-tabs button');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        grid.setAttribute('data-show', btn.getAttribute('data-view'));
        buttons.forEach(function (b) {
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
      });
    });
  });

  // Highlight the current chapter in the rail
  var links = document.querySelectorAll('.rail a');
  var sections = document.querySelectorAll('.chapter[id]');
  if ('IntersectionObserver' in window && links.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.setAttribute('aria-current', a.getAttribute('href') === '#' + entry.target.id ? 'true' : 'false');
        });
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    sections.forEach(function (s) { observer.observe(s); });
  }

  // Small screens: chapters become a horizontal swipe strip
  var story = document.querySelector('.story');
  var chapters = [].slice.call(document.querySelectorAll('.chapter[id]'));
  var strip = document.querySelector('.chapter-strip');
  var stripLinks = strip ? [].slice.call(strip.querySelectorAll('a')) : [];
  var small = window.matchMedia('(max-width: 1023px)');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var current = 0, settleTimer = null, moved = false;

  function stepWidth() {
    return chapters.length > 1 ? chapters[1].offsetLeft - chapters[0].offsetLeft : story.clientWidth;
  }
  function fit() {
    if (!small.matches) { story.style.height = ''; return; }
    story.style.height = chapters[current].offsetHeight + 'px';
  }
  function mark(i) {
    current = i;
    stripLinks.forEach(function (a, n) { a.setAttribute('aria-current', n === i ? 'true' : 'false'); });
    var a = stripLinks[i];
    if (a && strip) {
      strip.scrollTo({ left: a.offsetLeft - (strip.clientWidth - a.offsetWidth) / 2, behavior: reduce ? 'auto' : 'smooth' });
    }
  }
  function toTopOfChapter() {
    var bar = strip ? strip.offsetHeight : 0;
    var y = story.getBoundingClientRect().top + window.scrollY - bar - 8;
    if (window.scrollY > y) window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
  }
  function go(i, instant) {
    i = Math.max(0, Math.min(chapters.length - 1, i));
    moved = !instant;
    mark(i);
    story.scrollTo({ left: chapters[i].offsetLeft, behavior: (instant || reduce) ? 'auto' : 'smooth' });
    if (instant) fit();
  }

  if (story && chapters.length) {
    stripLinks.forEach(function (a, i) {
      a.addEventListener('click', function (e) {
        if (!small.matches) return;
        e.preventDefault();
        go(i);
      });
    });

    // Previous and next buttons at the end of each chapter
    chapters.forEach(function (ch, i) {
      var pager = document.createElement('div');
      pager.className = 'pager';
      [[i - 1, 'prev', 'Previous: '], [i + 1, 'next', 'Next: ']].forEach(function (d) {
        if (d[0] < 0 || d[0] >= chapters.length) return;
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'pager-btn';
        btn.setAttribute('data-dir', d[1]);
        btn.textContent = d[2] + chapters[d[0]].querySelector('h2').textContent;
        btn.addEventListener('click', function () { go(d[0]); });
        pager.appendChild(btn);
      });
      ch.appendChild(pager);
    });

    story.addEventListener('scroll', function () {
      if (!small.matches) return;
      var i = Math.round(story.scrollLeft / stepWidth());
      if (i !== current && i >= 0 && i < chapters.length) { mark(i); moved = true; }
      clearTimeout(settleTimer);
      settleTimer = setTimeout(function () {
        fit();
        if (moved) { moved = false; toTopOfChapter(); }
      }, 160);
    }, { passive: true });

    if ('ResizeObserver' in window) {
      var ro = new ResizeObserver(fit);
      chapters.forEach(function (c) { ro.observe(c); });
    }
    window.addEventListener('load', fit);
    window.addEventListener('resize', function () { fit(); if (small.matches) go(current, true); });
    (small.addEventListener ? small.addEventListener('change', function () { fit(); if (small.matches) go(current, true); }) : null);

    // Open on the chapter named in the address, if any
    var start = 0;
    chapters.forEach(function (c, i) { if ('#' + c.id === location.hash) start = i; });
    mark(start);
    if (small.matches) go(start, true);
    fit();
  }
})();