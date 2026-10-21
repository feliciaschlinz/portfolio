/* footer.js: site footer for felicia.schlinz
   Include on any page, right after </main>, with:
     <div id="site-footer"></div>
     <script src="footer.js"></script>
   Edit the markup below once and every page updates.
   (Styling comes from styles.css: .contact, .links and footer.
    The rotating "Hire me to ..." headline brings its own small style block below.) */
(function () {
  var mount = document.getElementById('site-footer');
  if (!mount) return;

  // the contact page already is the contact block, so it only gets the copyright line there
  var file = location.pathname.split('/').pop() || 'index.html';
  if (file === 'contact.html') {
    mount.innerHTML = '<footer style="padding-top:40px;margin-top:clamp(80px,10vw,140px)">© 2026 Felicia Schlinz</footer>';
    return;
  }

  // Words that rotate in the headline. Change or reorder them here.
  var WORDS = ['Lead', 'Design', 'Build'];

  // styles for the headline, added once
  if (!document.getElementById('hire-css')) {
    var css = document.createElement('style');
    css.id = 'hire-css';
    css.textContent = [
      '.hire{margin:0}',
      '.hire .ln{display:block}',
      '.hire .sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}',
      // all words sit in one grid cell, so the slot is always as wide as the longest word and nothing jumps
      '.hire .rot{display:inline-grid;overflow:hidden;color:var(--o);vertical-align:bottom;padding-bottom:.04em}',
      '.hire .rot>span{grid-area:1/1;transform:translateY(105%);opacity:0;transition:transform .6s cubic-bezier(.7,0,.2,1),opacity .6s}',
      '.hire .rot>span.on{transform:none;opacity:1}',
      '.hire .rot>span.out{transform:translateY(-105%);opacity:0}',
      '@media(prefers-reduced-motion:reduce){.hire .rot>span{transition:none}}'
    ].join('\n');
    document.head.appendChild(css);
  }

  var words = WORDS.map(function (w, i) {
    return '<span' + (i === 0 ? ' class="on"' : '') + '>' + w + '</span>';
  }).join('');

  var sentence = 'Hire me to ' +
    WORDS.slice(0, -1).join(', ').toLowerCase() + ' and ' + WORDS[WORDS.length - 1].toLowerCase() +
    ' your next chapter.';

  mount.innerHTML = [
    '<div class="contact" id="contact">',
    '  <div class="pad">',
    '    <h2 class="hire">',
    '      <span class="sr">' + sentence + '</span>',
    '      <span aria-hidden="true">',
    '        <span class="ln">Hire me to</span>',
    '        <span class="ln"><span class="rot">' + words + '</span></span>',
    '        <span class="ln">your next chapter.</span>',
    '      </span>',
    '    </h2>',
    '    <div class="links">',
    '      <a href="mailto:felicia.schlinz@gmail.com">felicia.schlinz@gmail.com</a>',
    '      <a href="https://www.linkedin.com/in/feliciaschlinz/" target="_blank" rel="noopener">LinkedIn <span class="arr" aria-hidden="true">↗</span></a>',
    '    </div>',
    '  </div>',
    '</div>',
    '<footer>© 2026 Felicia Schlinz</footer>'
  ].join('\n');

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Rotate the word every couple of seconds. Paused while the tab is hidden.
  // With reduced motion the first word just stays put.
  (function () {
    if (reduced || WORDS.length < 2) return;
    var spans = mount.querySelectorAll('.hire .rot > span'), i = 0, timer;
    function next() {
      var cur = spans[i];
      i = (i + 1) % spans.length;
      var nxt = spans[i];
      // park the incoming word below without animating, then slide both
      nxt.style.transition = 'none';
      nxt.classList.remove('out', 'on');
      void nxt.offsetWidth;
      nxt.style.transition = '';
      cur.classList.remove('on');
      cur.classList.add('out');
      nxt.classList.add('on');
    }
    function start() { if (!timer) timer = setInterval(next, 2200); }
    function stop() { clearInterval(timer); timer = null; }
    document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
    start();
  })();

  // Fade-in as it scrolls into view. The footer is visible by default and only hidden
  // here, once this script is sure it can show it again, so it can never get stuck invisible.
  var pad = mount.querySelector('.pad');
  if (reduced || !('IntersectionObserver' in window)) return;

  var shown = false;
  function show() {
    if (shown) return;
    shown = true;
    pad.style.opacity = '1';
    pad.style.transform = 'none';
    window.removeEventListener('scroll', check);
    window.removeEventListener('resize', check);
  }
  function check() {
    var r = pad.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.95) show();
  }

  pad.style.opacity = '0';
  pad.style.transform = 'translateY(26px)';
  pad.style.transition = 'opacity .8s, transform .8s';

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (x) { if (x.isIntersecting) { show(); io.disconnect(); } });
  }, { threshold: 0.05 });
  io.observe(pad);

  // backup in case the observer never fires
  window.addEventListener('scroll', check, { passive: true });
  window.addEventListener('resize', check);
  check();
})();
