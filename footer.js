/* footer.js: site footer for felicia.schlinz
   Include on any page, right after </main>, with:
     <div id="site-footer"></div>
     <script src="footer.js"></script>
   Edit the markup below once and every page updates.
   (Styling comes from styles.css: .contact, .links and footer.) */
(function () {
  var mount = document.getElementById('site-footer');
  if (!mount) return;

  mount.innerHTML = [
    '<div class="contact" id="contact">',
    '  <div class="pad rv">',
    '    <h2>Let\'s talk</h2>',
    '    <div class="links">',
    '      <a href="mailto:felicia.schlinz@gmail.com">felicia.schlinz@gmail.com</a>',
    '      <a href="https://www.linkedin.com/in/feliciaschlinz/" target="_blank" rel="noopener">LinkedIn ↗</a>',
    '    </div>',
    '  </div>',
    '</div>',
    '<footer>© 2026 Felicia Schlinz</footer>'
  ].join('\n');

  // The footer fades in as it scrolls into view (the .rv class). Not every page runs
  // that reveal script, so the footer does it itself and is always visible.
  var els = mount.querySelectorAll('.rv');
  function showAll() { Array.prototype.forEach.call(els, function (el) { el.classList.add('in'); }); }
  if (!('IntersectionObserver' in window)) { showAll(); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (x) {
      if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); }
    });
  }, { threshold: 0.1 });
  Array.prototype.forEach.call(els, function (el) { io.observe(el); });
})();
