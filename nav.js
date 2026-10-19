/* nav.js: site navigation for felicia.schlinz
   Include on any page with:
     <div id="site-nav"></div>
     <script src="nav.js"></script>
   Edit the links below once and every page updates.
   Wide screens show the links in the header. At tablet and phone widths
   (BREAKPOINT and below) they collapse into a Menu button that opens a
   full-screen overlay. */
(function () {
  var LINKS = [
    { label: 'Work',       href: 'work.html' },
    { label: 'Experience', href: 'experience.html' },
    { label: 'About',      href: 'about.html' },
    { label: 'Contact',    href: 'contact.html' }
  ];
  var EMAIL = 'felicia.schlinz@gmail.com';
  var LINKEDIN = 'https://www.linkedin.com/in/feliciaschlinz/';
  var NAME = 'felicia.schlinz'; // shown in the header; letters roll on hover
  var BREAKPOINT = 860; // px: at or below this width the Menu button replaces the links

  var EASE = 'cubic-bezier(.7,0,.2,1)';
  var ORIGIN = 'calc(100% - 70px) calc(26px + env(safe-area-inset-top,0px))'; // where the reveal grows from (the Menu button)

  var css = [
    '.site-header{position:fixed;inset:0 0 auto 0;z-index:30;display:flex;justify-content:space-between;align-items:center;',
    'height:calc(52px + env(safe-area-inset-top,0px));padding:env(safe-area-inset-top,0px) clamp(20px,3.5vw,48px) 0;',
    'transition:background .3s,color .3s;font-family:inherit}',
    '.site-header.solid{background:var(--o,#e43c13);color:var(--ot,#14100c)}',
    '.site-header.open{background:transparent;color:var(--ot,#14100c)}',
    '.site-header a{color:inherit;text-decoration:none}',
    '.site-logo{font-size:22px;display:inline-flex;font-weight:700;letter-spacing:-.02em}',
    /* name hover: letters roll up and are replaced by a copy sliding in from below */
    '.site-logo .ch{display:inline-block;position:relative;overflow:hidden;height:1.15em;line-height:1.15em;vertical-align:top}',
    '.site-logo .ch>i{display:block;font-style:normal;transition:transform .45s ' + EASE + ';transition-delay:calc(var(--i) * 22ms)}',
    '.site-logo .ch>i+i{position:absolute;left:0;top:100%;color:var(--o,#e43c13)}',
    '.site-header.solid .site-logo .ch>i+i,.site-header.open .site-logo .ch>i+i{color:var(--bg,#ece9e1)}',
    '@media(hover:hover){.site-logo:hover .ch>i{transform:translateY(-100%)}}',
    '.site-logo:focus-visible .ch>i{transform:translateY(-100%)}',
    '.site-nav{display:flex;gap:28px;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:.01em}',
    '.site-nav a{position:relative}',
    '.site-nav a::after{content:"";position:absolute;left:0;right:0;bottom:-3px;height:2px;background:currentColor;transform:scaleX(0);transform-origin:left;transition:transform .25s}',
    '.site-nav a:hover::after,.site-nav a[aria-current="page"]::after{transform:scaleX(1)}',

    /* menu button */
    '.site-toggle{display:none;align-items:center;gap:10px;font:inherit;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;',
    'color:inherit;background:transparent;border:1.5px solid currentColor;border-radius:99px;padding:7px 14px 7px 16px;cursor:pointer}',
    '.site-toggle .ico{position:relative;width:18px;height:10px}',
    '.site-toggle .ico i{position:absolute;left:0;right:0;height:2px;border-radius:2px;background:currentColor;transition:top .45s ' + EASE + ',transform .45s ' + EASE + '}',
    '.site-toggle .ico i:nth-child(1){top:0}',
    '.site-toggle .ico i:nth-child(2){top:8px}',
    '.site-header.open .ico i:nth-child(1){top:4px;transform:rotate(45deg)}',
    '.site-header.open .ico i:nth-child(2){top:4px;transform:rotate(-45deg)}',
    '.site-header :focus-visible,.site-menu :focus-visible{outline:3px solid currentColor;outline-offset:4px}',

    /* overlay (only exists at tablet/phone widths) */
    '.site-menu{display:none}',
    '@media(max-width:' + BREAKPOINT + 'px){',
    '  .site-nav{display:none}',
    '  .site-toggle{display:inline-flex}',
    '  .site-menu{display:flex;flex-direction:column;justify-content:space-between;position:fixed;inset:0;z-index:29;overflow-y:auto;',
    '    padding:calc(52px + env(safe-area-inset-top,0px) + 28px) clamp(20px,3.5vw,48px) calc(28px + env(safe-area-inset-bottom,0px));',
    '    background:var(--o,#e43c13);color:var(--ot,#14100c);visibility:hidden;clip-path:circle(0 at ' + ORIGIN + ');',
    '    transition:clip-path .7s ' + EASE + ',visibility 0s linear .7s}',
    '  .site-menu.open{visibility:visible;clip-path:circle(150vmax at ' + ORIGIN + ');transition:clip-path .7s ' + EASE + ',visibility 0s}',
    '}',
    '.site-menu ol{list-style:none;margin:0;padding:0}',
    '.site-menu li{overflow:hidden;border-top:1.5px solid currentColor}',
    '.site-menu li:last-child{border-bottom:1.5px solid currentColor}',
    '.site-menu li a{display:flex;align-items:baseline;gap:16px;padding:10px 0 6px;text-decoration:none;color:var(--bg,#ece9e1);',
    'font-family:var(--display,Anton,Impact,"Arial Narrow",sans-serif);text-transform:uppercase;font-size:var(--mfs,clamp(44px,11vw,150px));line-height:.95;letter-spacing:-.005em;',
    'transform:translateY(105%);transition:transform .3s ease-in,color .2s}',
    '.site-menu li a small{font-family:var(--sans,system-ui,sans-serif);font-size:14px;font-weight:700;letter-spacing:.04em;color:var(--ot,#14100c)}',
    '@media(hover:hover){.site-menu li a:hover{color:var(--ot,#14100c)}}',
    '.site-menu li a:focus-visible{color:var(--ot,#14100c)}',
    '.site-header a,.site-toggle,.site-menu a{-webkit-tap-highlight-color:transparent}',
    '.site-menu:focus{outline:none}',
    '.site-menu li a[aria-current="page"]::after{content:"";width:.13em;height:.13em;border-radius:50%;background:currentColor;align-self:center;margin-left:auto}',
    '.site-menu.open li a{transform:none;transition:transform .55s cubic-bezier(.2,.8,.2,1) calc(.3s + var(--i) * .07s),color .2s}',
    '.menu-foot{display:flex;flex-wrap:wrap;gap:8px 28px;margin-top:32px;font-size:16px;font-weight:700;opacity:0;transform:translateY(12px);transition:opacity .2s,transform .2s}',
    '.menu-foot a{color:inherit;text-decoration:none;border-bottom:2px solid currentColor}',
    '.site-menu.open .menu-foot{opacity:1;transform:none;transition:opacity .5s .65s,transform .5s .65s}',
    '@media(prefers-reduced-motion:reduce){.site-menu,.site-menu li a,.site-menu.open li a,.menu-foot,.site-menu.open .menu-foot,.site-toggle .ico i,.site-logo .ch>i{transition:none!important}}'
  ].join('\n');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var mount = document.getElementById('site-nav');
  if (!mount) return;

  // which page are we on? (project pages count as Work)
  var file = location.pathname.split('/').pop() || 'index.html';
  if (file === 'project.html') file = 'work.html';
  function current(l) { return l.href.indexOf('#') < 0 && l.href === file; }
  var cur = function (l) { return current(l) ? ' aria-current="page"' : ''; };

  var desktop = LINKS.map(function (l) {
    return '<a href="' + l.href + '"' + cur(l) + '>' + l.label + '</a>';
  }).join('');

  var items = LINKS.map(function (l, i) {
    return '<li><a href="' + l.href + '"' + cur(l) + ' style="--i:' + i + '"><small>0' + (i + 1) + '</small><span class="t">' + l.label + '</span></a></li>';
  }).join('');

  mount.innerHTML =
    '<header class="site-header" id="hdr">' +
      '<a class="site-logo" href="index.html#top" aria-label="felicia.schlinz">' + NAME.split('').map(function (c, i) { return '<span class="ch" aria-hidden="true" style="--i:' + i + '"><i>' + c + '</i><i>' + c + '</i></span>'; }).join('') + '</a>' +
      '<nav class="site-nav" aria-label="Main">' + desktop + '</nav>' +
      '<button class="site-toggle" id="site-toggle" type="button" aria-expanded="false" aria-controls="site-menu">' +
        '<span class="lbl">Menu</span><span class="ico" aria-hidden="true"><i></i><i></i></span>' +
      '</button>' +
    '</header>' +
    '<nav class="site-menu" id="site-menu" aria-label="Menu" tabindex="-1">' +
      '<ol>' + items + '</ol>' +
      '<div class="menu-foot">' +
        '<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>' +
        '<a href="' + LINKEDIN + '" target="_blank" rel="noopener">LinkedIn <span class="arr" aria-hidden="true">↗</span></a>' +
      '</div>' +
    '</nav>';

  var hdr = document.getElementById('hdr');
  var btn = document.getElementById('site-toggle');
  var lbl = btn.querySelector('.lbl');
  var menu = document.getElementById('site-menu');
  var logo = hdr.querySelector('.site-logo');
  var menuLinks = Array.prototype.slice.call(menu.querySelectorAll('a'));
  var isOpen = false;

  function onScroll() { hdr.classList.toggle('solid', window.scrollY > 40); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  function setOpen(open, returnFocus, viaKeyboard) {
    isOpen = open;
    menu.classList.toggle('open', open);
    hdr.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    lbl.textContent = open ? 'Close' : 'Menu';
    document.documentElement.style.overflow = open ? 'hidden' : '';
    if (open) (viaKeyboard ? menuLinks[0] : menu).focus({ preventScroll: true });
    else if (returnFocus) btn.focus();
  }

  btn.addEventListener('click', function (e) { setOpen(!isOpen, true, e.detail === 0); }); // detail 0 = opened with the keyboard
  logo.addEventListener('click', function () { if (isOpen) setOpen(false, false); });
  // close first so the page can scroll to the #anchor it is about to jump to
  menuLinks.forEach(function (a) { a.addEventListener('click', function () { setOpen(false, false); }); });

  document.addEventListener('keydown', function (e) {
    if (!isOpen) return;
    if (e.key === 'Escape') { setOpen(false, true); return; }
    if (e.key !== 'Tab') return;
    var f = [logo, btn].concat(menuLinks);
    var i = f.indexOf(document.activeElement);
    if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
  });

  // size the big menu words so the longest one always fits the screen, whatever the font
  var list = menu.querySelector('ol');
  function fit() {
    if (!menu.offsetWidth) return; // overlay isn't rendered at desktop widths
    menu.style.setProperty('--mfs', '100px');
    var widest = 0;
    menuLinks.forEach(function (a) {
      var t = a.querySelector('.t');
      if (t) widest = Math.max(widest, t.offsetWidth);
    });
    var small = menu.querySelector('li a small');
    var avail = list.clientWidth - (small ? small.offsetWidth : 0) - 16 - 6;
    if (!widest || avail <= 0) return;
    menu.style.setProperty('--mfs', Math.max(28, Math.min(150, Math.floor(100 * avail / widest))) + 'px');
  }
  fit();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  window.addEventListener('resize', fit);

  // growing the window back to desktop size closes the menu
  var mq = window.matchMedia('(max-width:' + BREAKPOINT + 'px)');
  function onMq() { if (!mq.matches && isOpen) setOpen(false, false); }
  if (mq.addEventListener) mq.addEventListener('change', onMq); else mq.addListener(onMq);
})();
