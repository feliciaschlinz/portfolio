/* footer.js: site footer for felicia.schlinz
   Include on any page, right after </main>, with:
     <div id="site-footer"></div>
     <script src="footer.js"></script>
   Edit the markup below once and every page updates.
   (Styling comes from styles.css: .contact, .links and footer.) */
(function () {
  var mount = document.getElementById('site-footer');
  if (!mount) return;

  // the contact page already is the contact block, so it only gets the copyright line there
  var file = location.pathname.split('/').pop() || 'index.html';
  if (file === 'contact.html') {
    mount.innerHTML = '<footer style="padding-top:40px;margin-top:clamp(80px,10vw,140px)">© 2026 Felicia Schlinz</footer>';
    return;
  }

  mount.innerHTML = [
    '<div class="contact" id="contact">',
    '  <div class="pad">',
    '    <h2>Let\'s talk</h2>',
    '    <div class="links">',
    '      <a href="mailto:felicia.schlinz@gmail.com">felicia.schlinz@gmail.com</a>',
    '      <a href="https://www.linkedin.com/in/feliciaschlinz/" target="_blank" rel="noopener">LinkedIn ↗</a>',
    '    </div>',
    '  </div>',
    '</div>',
    '<footer>© 2026 Felicia Schlinz</footer>'
  ].join('\n');

  // Fade-in as it scrolls into view. The footer is visible by default and only hidden
  // here, once this script is sure it can show it again, so it can never get stuck invisible.
  var pad = mount.querySelector('.pad');
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
