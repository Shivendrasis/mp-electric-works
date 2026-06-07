/* ============================================================
   MP ELECTRIC WORKS — shared site script
   Injects header, footer, WhatsApp + scroll-to-top, and wires
   reveal-on-scroll, counters, mobile menu, lightbox, forms.
   ============================================================ */
(function(){
  // ---- CONFIG ---------------------------------------------
  var WA_NUMBER = '919826000000';   // TODO: replace with real WhatsApp number
  var WA_TEXT   = encodeURIComponent("Hello MPEW, I'd like to enquire about your services.");
  var EMAIL     = 'mp.elect.w@gmail.com';

  var NAV = [
    ['Home','index.html','home'],
    ['About Us','about.html','about'],
    ['Services','services.html','services'],
    ['Industries','industries.html','industries'],
    ['Infrastructure','infrastructure.html','infrastructure'],
    ['Clients','clients.html','clients'],
    ['Gallery','gallery.html','gallery'],
    ['Contact Us','contact.html','contact']
  ];

  var BOLT = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>';
  function icon(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';}

  var page = document.body.getAttribute('data-page') || 'home';
  var isHome = page === 'home';

  // ---- HEADER ---------------------------------------------
  var header = document.createElement('header');
  header.className = 'site-header ' + (isHome ? 'transparent' : 'solid');
  var links = NAV.map(function(n){
    return '<a class="nav-link'+(n[2]===page?' active':'')+'" href="'+n[1]+'">'+n[0]+'</a>';
  }).join('');
  header.innerHTML =
    '<div class="wrap">'+
      '<a class="brand" href="index.html"><span class="mark">'+BOLT+'</span>'+
        '<span><b>MPEW</b><small>M.P. ELECTRIC WORKS</small></span></a>'+
      '<nav class="nav-links">'+links+'</nav>'+
      '<a class="btn btn-primary nav-cta" href="contact.html#quote" style="padding:11px 20px">Get Quote</a>'+
      '<button class="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>'+
    '</div>';
  document.body.insertBefore(header, document.body.firstChild);

  // mobile drawer
  var drawer = document.createElement('div');
  drawer.className = 'mobile-drawer';
  drawer.innerHTML =
    '<div class="md-top"><a class="brand" href="index.html"><span class="mark">'+BOLT+'</span>'+
      '<span><b style="color:#fff">MPEW</b><small style="color:#7c8a98">M.P. ELECTRIC WORKS</small></span></a>'+
      '<button class="md-close" aria-label="Close">&times;</button></div>'+
    NAV.map(function(n){return '<a class="m-link'+(n[2]===page?' active':'')+'" href="'+n[1]+'">'+n[0]+'<span style="opacity:.4">&rsaquo;</span></a>';}).join('')+
    '<a class="btn btn-primary btn-lg md-cta" href="contact.html#quote">Get a Quote</a>';
  document.body.appendChild(drawer);

  header.querySelector('.hamburger').addEventListener('click', function(){drawer.classList.add('open');});
  drawer.querySelector('.md-close').addEventListener('click', function(){drawer.classList.remove('open');});
  drawer.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){drawer.classList.remove('open');});});

  // header scroll state (home: transparent -> solid)
  function onScroll(){
    var y = window.scrollY;
    if(isHome){
      if(y > 60){ header.classList.remove('transparent'); header.classList.add('solid'); }
      else { header.classList.add('transparent'); header.classList.remove('solid'); }
    }
    var tt = document.querySelector('.to-top');
    if(tt){ tt.classList.toggle('show', y > 600); }
  }
  window.addEventListener('scroll', onScroll, {passive:true});

  // ---- FOOTER ---------------------------------------------
  var SERVICES_LINKS = ['CNC Machining','Heavy Fabrication','Motor &amp; Stator Winding','Electrical Panels','HT &amp; LT Works','Special Purpose Machines'];
  var footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML =
    '<div class="wrap">'+
      '<div class="cols">'+
        '<div>'+
          '<a class="brand" href="index.html"><span class="mark">'+BOLT+'</span>'+
            '<span><b style="color:#fff">MPEW</b><small style="color:#7c8a98">M.P. ELECTRIC WORKS</small></span></a>'+
          '<p class="fdesc">Engineering excellence in electrical &amp; mechanical solutions since 2008. Your trusted manufacturing, machining, fabrication and winding partner in Dewas, M.P.</p>'+
          '<div class="socials">'+
            '<a href="#" aria-label="LinkedIn">'+icon('<rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 11v6"/>')+'</a>'+
            '<a href="#" aria-label="Facebook">'+icon('<path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>')+'</a>'+
            '<a href="mailto:'+EMAIL+'" aria-label="Email">'+icon('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>')+'</a>'+
            '<a href="https://wa.me/'+WA_NUMBER+'" aria-label="WhatsApp">'+icon('<path d="M21 11.5a8.38 8.38 0 0 1-11.7 7.7L3 21l1.9-6.1A8.5 8.5 0 1 1 21 11.5z"/>')+'</a>'+
          '</div>'+
        '</div>'+
        '<div><h4>Quick Links</h4><ul>'+
          NAV.map(function(n){return '<li><a href="'+n[1]+'">'+n[0]+'</a></li>';}).join('')+
        '</ul></div>'+
        '<div><h4>Services</h4><ul>'+
          SERVICES_LINKS.map(function(s){return '<li><a href="services.html">'+s+'</a></li>';}).join('')+
        '</ul></div>'+
        '<div><h4>Get in Touch</h4>'+
          '<div class="contact-row">'+icon('<path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>')+'<span>5-1/B, Industrial Area No. 1,<br>A.B. Road, Dewas &ndash; 455001,<br>Madhya Pradesh, India</span></div>'+
          '<div class="contact-row">'+icon('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>')+'<span><a href="mailto:'+EMAIL+'">'+EMAIL+'</a></span></div>'+
          '<div class="contact-row">'+icon('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>')+'<span>Mon&ndash;Sat, 9:30 AM &ndash; 6:30 PM</span></div>'+
          '<a class="btn btn-primary" href="contact.html#quote" style="margin-top:8px">Request a Quote</a>'+
        '</div>'+
      '</div>'+
      '<div class="legal"><span>&copy; '+new Date().getFullYear()+' M.P. Electric Works. All rights reserved.</span>'+
        '<span style="font-family:var(--mono);font-size:11.5px;letter-spacing:.06em">EST. 2008 &middot; DEWAS &middot; MADHYA PRADESH</span></div>'+
    '</div>';
  document.body.appendChild(footer);

  // ---- WHATSAPP + TO-TOP ----------------------------------
  var wa = document.createElement('div');
  wa.className = 'wa-float';
  wa.innerHTML = '<span class="pulse"></span>'+
    '<a href="https://wa.me/'+WA_NUMBER+'?text='+WA_TEXT+'" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">'+
      '<span class="wa-txt">Chat with us</span>'+
      '<svg viewBox="0 0 32 32" fill="#fff"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4.3.8.8-4.2-.2-.4C5.6 18.6 5.1 16.8 5.1 15 5.1 9.5 9.9 5.1 16 5.1S26.9 9.5 26.9 15 22.1 24.8 16 24.8zm5.8-7.2c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.7.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z"/></svg>'+
    '</a>';
  document.body.appendChild(wa);

  var top = document.createElement('button');
  top.className = 'to-top';
  top.setAttribute('aria-label','Back to top');
  top.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>';
  top.addEventListener('click', function(){window.scrollTo({top:0,behavior:'smooth'});});
  document.body.appendChild(top);

  // ---- REVEAL ON SCROLL -----------------------------------
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  }, {threshold:.12, rootMargin:'0px 0px -8% 0px'});
  function observeReveals(){ document.querySelectorAll('.reveal:not(.in)').forEach(function(el){io.observe(el);}); }

  // ---- COUNTERS -------------------------------------------
  function animateCounter(el){
    var target = parseFloat(el.getAttribute('data-count'));
    var dur = 1500, start = null;
    var suffix = el.getAttribute('data-suffix') || '';
    function step(ts){
      if(!start) start = ts;
      var p = Math.min((ts-start)/dur, 1);
      var eased = 1 - Math.pow(1-p, 3);
      var val = Math.round(target * eased);
      el.firstChild ? el.childNodes[0].nodeValue = val.toLocaleString('en-IN') : el.textContent = val;
      if(p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var cio = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ animateCounter(e.target); cio.unobserve(e.target);} });
  }, {threshold:.6});
  document.querySelectorAll('[data-count]').forEach(function(el){cio.observe(el);});

  // ---- LIGHTBOX (gallery) ---------------------------------
  var galleryImgs = [].slice.call(document.querySelectorAll('[data-lightbox]'));
  if(galleryImgs.length){
    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<button class="lb-close" aria-label="Close">&times;</button>'+
      '<button class="lb-nav lb-prev" aria-label="Previous">&lsaquo;</button>'+
      '<img src="" alt="">'+
      '<button class="lb-nav lb-next" aria-label="Next">&rsaquo;</button>';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector('img'), idx = 0;
    function show(i){ idx = (i+galleryImgs.length)%galleryImgs.length; lbImg.src = galleryImgs[idx].getAttribute('data-full') || galleryImgs[idx].querySelector('img').src; }
    galleryImgs.forEach(function(g,i){ g.addEventListener('click', function(){ show(i); lb.classList.add('open'); }); });
    lb.querySelector('.lb-close').addEventListener('click', function(){lb.classList.remove('open');});
    lb.querySelector('.lb-prev').addEventListener('click', function(){show(idx-1);});
    lb.querySelector('.lb-next').addEventListener('click', function(){show(idx+1);});
    lb.addEventListener('click', function(e){ if(e.target===lb) lb.classList.remove('open'); });
    document.addEventListener('keydown', function(e){
      if(!lb.classList.contains('open')) return;
      if(e.key==='Escape') lb.classList.remove('open');
      if(e.key==='ArrowLeft') show(idx-1);
      if(e.key==='ArrowRight') show(idx+1);
    });
  }

  // ---- INIT -----------------------------------------------
  document.addEventListener('DOMContentLoaded', observeReveals);
  observeReveals();
  onScroll();

  // expose for inline use
  window.MPEW = { observeReveals: observeReveals, WA_NUMBER: WA_NUMBER, EMAIL: EMAIL };
})();
