/* nav.js: site navigation for felicia.schlinz
   Include on any page with:
     <div id="site-nav"></div>
     <script src="nav.js"></script>
   Edit the links below once and every page updates. */
(function () {
  var LINKS = [
    { label: 'Work',       href: 'index.html#work' },
    { label: 'Experience', href: 'index.html#experience' },
    { label: 'Contact',    href: 'index.html#contact' }
  ];

  var css = [
    '.site-header{position:fixed;inset:0 0 auto 0;z-index:30;display:flex;justify-content:space-between;align-items:center;',
    'height:calc(52px + env(safe-area-inset-top,0px));padding:env(safe-area-inset-top,0px) clamp(20px,3.5vw,48px) 0;',
    'transition:background .3s,color .3s;font-family:inherit}',
    '.site-header.solid{background:var(--o,#e43c13);color:var(--ot,#14100c)}',
    '.site-header a{color:inherit;text-decoration:none}',
    '.site-logo{font-size:22px;font-weight:700;letter-spacing:-.02em}',
    '.site-nav{display:flex;gap:28px;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:.01em}',
    '.site-nav a{position:relative}',
    '.site-nav a::after{content:"";position:absolute;left:0;right:0;bottom:-3px;height:2px;background:currentColor;transform:scaleX(0);transform-origin:left;transition:transform .25s}',
    '.site-nav a:hover::after{transform:scaleX(1)}',
    '@media(max-width:600px){.site-nav{gap:14px;font-size:12px}}'
  ].join('\n');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var mount = document.getElementById('site-nav');
  if (!mount) return;

  var links = LINKS.map(function (l) {
    return '<a href="' + l.href + '">' + l.label + '</a>';
  }).join('');

  mount.innerHTML =
    '<header class="site-header" id="hdr">' +
      '<a class="site-logo" href="index.html#top">felicia.schlinz</a>' +
      '<nav class="site-nav" aria-label="Main">' + links + '</nav>' +
    '</header>';

  var hdr = document.getElementById('hdr');
  function onScroll() { hdr.classList.toggle('solid', window.scrollY > 40); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
