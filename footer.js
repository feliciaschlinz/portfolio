/* footer.js: site footer for felicia.schlinz
   Include on any page, right after </main>, with:
     <div id="site-footer"></div>
     <script src="footer.js"></script>
   Edit the markup below once and every page updates.
   (Styling comes from styles.css: .contact, .hire, .links and footer.) */
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
    '        <span class="hl">Hire me to</span>',
    '        <span class="hl"><span class="rot">' + words + '</span></span>',
    '        <span class="hl">your next chapter.</span>',
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