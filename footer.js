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
})();

