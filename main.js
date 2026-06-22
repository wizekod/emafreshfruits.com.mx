/* ============================================================
   EMA Fresh Fruits V2 — JavaScript
   ============================================================ */
(function () {
  'use strict';

  /* ══════════════════════════════════════════════════════════
     TRANSLATIONS
  ══════════════════════════════════════════════════════════ */
  const translations = {
    en: {
      /* nav */
      'nav-home':        'Home',
      'nav-about':       'About EMA',
      'nav-products':    'Products',
      'nav-quality':     'Quality & Export',
      'nav-sustain':     'Sustainability',
      'nav-contact':     'Contact',
      'nav-cta':         'Get in Touch →',
      /* hero */
      'hero-tag':        'Premium Berries · Product of Mexico',
      'hero-headline':   'PREMIUM BERRIES.<br>PRODUCT OF MEXICO<span class="red">.</span>',
      'hero-desc':       'At EMA Fresh Fruits, we grow, select and deliver the highest quality berries from Mexico to the world.',
      'hero-btn-berries':'Our Berries →',
      'hero-btn-contact':'Get in Touch →',
      /* berries section */
      'berries-eyebrow': 'OUR BERRIES',
      'berries-sub':     'Carefully grown. Naturally delicious.',
      'berry1-title':    'Blueberries',
      'berry1-desc':     'Superior quality, great taste and full of antioxidants. Carefully packed to preserve freshness in every bite.',
      'berry2-title':    'Blackberries',
      'berry2-desc':     'Juicy, firm and full of flavor. Excellence in every bite. Our blackberries are selected at the perfect ripeness for maximum taste.',
      'berry3-title':    'Raspberries',
      'berry3-desc':     'Delicate, sweet and vibrant. Excellence in every detail. Our raspberries are the preferred choice for premium culinary experiences.',
      'learn-more':      'Learn More →',
      /* features */
      'feat1-title':     'Premium Quality',
      'feat1-desc':      'We follow the highest quality standards from the field to your hands. Every berry is carefully inspected.',
      'feat2-title':     'Cold Chain Focus',
      'feat2-desc':      'We protect freshness with a robust cold chain from harvest to destination, monitored 24/7.',
      'feat3-title':     'Export Mindset',
      'feat3-desc':      'We are ready to supply the world with consistent quality, all year round. Certified for US & EU markets.',
      /* info columns */
      'info1-label':     'Who we are',
      'info1-title':     'About EMA',
      'info1-text':      'We are a Mexican company dedicated to the production and export of premium berries. Our commitment is to offer the world the best of our land: fresh, delicious and responsibly grown fruit.',
      'info1-link':      'Learn More →',
      'info2-label':     'Certifications',
      'info2-title':     'Quality & Export',
      'info2-text':      'We have certified processes, traceability in every step and a solid logistics network to meet the highest standards required by the most demanding markets worldwide.',
      'info2-link':      'Learn More →',
      'info3-label':     'Our commitment',
      'info3-title':     'Sustainability',
      'info3-text':      'We care for our land and the environment. We work every day to build a more sustainable future for generations to come, supporting local farming communities.',
      'info3-link':      'Learn More →',
      /* cta band */
      'cta-title':       "Let's Grow Together",
      'cta-sub':         'We are ready to supply your business with the best berries from Mexico.',
      'cta-btn':         'Contact Our Team →',
      /* contact */
      'contact-eyebrow': 'Get in Touch',
      'contact-title':   'Ready to start a partnership?',
      'contact-sub':     'Contact us for quotations, availability info or to schedule a visit to our facilities.',
      /* form */
      'form-title':            'Send us a Message',
      'form-name-label':       'Name *',
      'form-name-ph':          'Your name',
      'form-company-label':    'Company',
      'form-company-ph':       'Company name',
      'form-email-label':      'Email *',
      'form-product-label':    'Product of Interest',
      'form-product-default':  'Select a product',
      'form-product-1':        'Blueberries',
      'form-product-2':        'Blackberries',
      'form-product-3':        'Raspberries',
      'form-product-4':        'All products',
      'form-msg-label':        'Message *',
      'form-msg-ph':           'Tell us about your needs, volumes, delivery frequency…',
      'form-btn':              'Send Message →',
      'form-success-title':    'Message Sent!',
      'form-success-msg':      'Thank you for contacting EMA Fresh Fruits. Our team will get back to you within 24 hours.',
      /* footer */
      'footer-tagline':         'Premium Berries, Product of Mexico. Freshness, quality and sustainability in every package.',
      'footer-links-title':     'Quick Links',
      'footer-link-home':       'Home',
      'footer-link-about':      'About EMA',
      'footer-link-products':   'Products',
      'footer-link-quality':    'Quality & Export',
      'footer-link-sustain':    'Sustainability',
      'footer-link-contact':    'Contact',
      'footer-certs-title':     'Certifications',
      'footer-newsletter-title':'Newsletter',
      'footer-newsletter-sub':  'Stay up to date with EMA. Get seasonal availability and industry news.',
      'newsletter-input-ph':    'your@email.com',
      'newsletter-success':     '✓ Subscribed! Thank you.',
      'footer-newsletter-note': 'We respect your privacy. Unsubscribe anytime.',
      'footer-copy':            '© 2025 EMA Fresh Fruits. All rights reserved.',
      'footer-privacy':         'Privacy Policy',
      'footer-terms':           'Terms & Conditions',
    },
    es: {
      /* nav */
      'nav-home':        'Inicio',
      'nav-about':       'Quiénes somos',
      'nav-products':    'Productos',
      'nav-quality':     'Calidad y Exportación',
      'nav-sustain':     'Sostenibilidad',
      'nav-contact':     'Contacto',
      'nav-cta':         'Contáctanos →',
      /* hero */
      'hero-tag':        'Berries Premium · Producto de México',
      'hero-headline':   'BERRIES PREMIUM.<br>PRODUCTO DE MÉXICO<span class="red">.</span>',
      'hero-desc':       'En EMA Fresh Fruits, cultivamos, seleccionamos y entregamos berries de la más alta calidad desde México hacia el mundo.',
      'hero-btn-berries':'Nuestras Berries →',
      'hero-btn-contact':'Contáctanos →',
      /* berries section */
      'berries-eyebrow': 'NUESTRAS BERRIES',
      'berries-sub':     'Cultivadas con cuidado. Naturalmente deliciosas.',
      'berry1-title':    'Arándanos',
      'berry1-desc':     'Calidad superior, excelente sabor y llenas de antioxidantes. Empacadas cuidadosamente para preservar la frescura en cada mordida.',
      'berry2-title':    'Zarzamoras',
      'berry2-desc':     'Jugosas, firmes y llenas de sabor. Excelencia en cada mordida. Nuestras zarzamoras se seleccionan en el punto óptimo de madurez para el máximo sabor.',
      'berry3-title':    'Frambuesas',
      'berry3-desc':     'Delicadas, dulces y vibrantes. Excelencia en cada detalle. Nuestras frambuesas son la elección preferida para experiencias culinarias premium.',
      'learn-more':      'Saber Más →',
      /* features */
      'feat1-title':     'Calidad Premium',
      'feat1-desc':      'Seguimos los más altos estándares de calidad desde el campo hasta tus manos. Cada berry es cuidadosamente inspeccionada.',
      'feat2-title':     'Cadena de Frío',
      'feat2-desc':      'Protegemos la frescura con una sólida cadena de frío desde la cosecha hasta el destino, monitoreada las 24 horas.',
      'feat3-title':     'Mentalidad Exportadora',
      'feat3-desc':      'Estamos listos para abastecer al mundo con calidad consistente, todo el año. Certificados para mercados de EE.UU. y UE.',
      /* info columns */
      'info1-label':     'Quiénes somos',
      'info1-title':     'Sobre EMA',
      'info1-text':      'Somos una empresa mexicana dedicada a la producción y exportación de berries premium. Nuestro compromiso es ofrecer al mundo lo mejor de nuestra tierra: fruta fresca, deliciosa y cultivada de manera responsable.',
      'info1-link':      'Saber Más →',
      'info2-label':     'Certificaciones',
      'info2-title':     'Calidad y Exportación',
      'info2-text':      'Contamos con procesos certificados, trazabilidad en cada paso y una sólida red logística para cumplir con los más altos estándares requeridos por los mercados más exigentes del mundo.',
      'info2-link':      'Saber Más →',
      'info3-label':     'Nuestro compromiso',
      'info3-title':     'Sostenibilidad',
      'info3-text':      'Nos preocupamos por nuestra tierra y el medio ambiente. Trabajamos cada día para construir un futuro más sostenible para las generaciones venideras, apoyando a las comunidades agrícolas locales.',
      'info3-link':      'Saber Más →',
      /* cta band */
      'cta-title':       'Crezcamos Juntos',
      'cta-sub':         'Estamos listos para abastecer tu negocio con las mejores berries de México.',
      'cta-btn':         'Contactar Nuestro Equipo →',
      /* contact */
      'contact-eyebrow': 'Contáctanos',
      'contact-title':   '¿Listo para comenzar una alianza?',
      'contact-sub':     'Contáctanos para cotizaciones, información de disponibilidad o para agendar una visita a nuestras instalaciones.',
      /* form */
      'form-title':            'Envíanos un Mensaje',
      'form-name-label':       'Nombre *',
      'form-name-ph':          'Tu nombre',
      'form-company-label':    'Empresa',
      'form-company-ph':       'Nombre de empresa',
      'form-email-label':      'Correo electrónico *',
      'form-product-label':    'Producto de Interés',
      'form-product-default':  'Seleccionar un producto',
      'form-product-1':        'Arándanos',
      'form-product-2':        'Zarzamoras',
      'form-product-3':        'Frambuesas',
      'form-product-4':        'Todos los productos',
      'form-msg-label':        'Mensaje *',
      'form-msg-ph':           'Cuéntanos sobre tus necesidades, volúmenes, frecuencia de entrega…',
      'form-btn':              'Enviar Mensaje →',
      'form-success-title':    '¡Mensaje Enviado!',
      'form-success-msg':      'Gracias por contactar a EMA Fresh Fruits. Nuestro equipo te responderá en menos de 24 horas.',
      /* footer */
      'footer-tagline':         'Berries Premium, Producto de México. Frescura, calidad y sostenibilidad en cada empaque.',
      'footer-links-title':     'Enlaces Rápidos',
      'footer-link-home':       'Inicio',
      'footer-link-about':      'Quiénes somos',
      'footer-link-products':   'Productos',
      'footer-link-quality':    'Calidad y Exportación',
      'footer-link-sustain':    'Sostenibilidad',
      'footer-link-contact':    'Contacto',
      'footer-certs-title':     'Certificaciones',
      'footer-newsletter-title':'Boletín',
      'footer-newsletter-sub':  'Mantente al día con EMA. Recibe disponibilidad por temporada y noticias de la industria.',
      'newsletter-input-ph':    'tu@correo.com',
      'newsletter-success':     '✓ ¡Gracias! Te hemos registrado.',
      'footer-newsletter-note': 'Respetamos tu privacidad. Cancela cuando quieras.',
      'footer-copy':            '© 2025 EMA Fresh Fruits. Todos los derechos reservados.',
      'footer-privacy':         'Política de Privacidad',
      'footer-terms':           'Términos y Condiciones',
    }
  };

  let currentLang = localStorage.getItem('ema-lang') || 'en';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('ema-lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = translations[lang][el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const v = translations[lang][el.dataset.i18nHtml];
      if (v !== undefined) el.innerHTML = v;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const v = translations[lang][el.dataset.i18nPlaceholder];
      if (v !== undefined) el.placeholder = v;
    });

    const langBtn = document.getElementById('langBtn');
    if (langBtn) langBtn.textContent = lang.toUpperCase() + ' ▾';

    document.querySelectorAll('.lang-option').forEach(o => {
      o.classList.toggle('active', o.dataset.lang === lang);
    });
  }

  /* ── Lang dropdown ─────────────────────────────────────── */
  const langBtn      = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', e => {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
    });
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', e => {
        e.stopPropagation();
        applyLang(opt.dataset.lang);
        langDropdown.classList.remove('open');
        // close mobile nav if open
        const mobileNav = document.getElementById('navLinks');
        const burgerBtn = document.getElementById('burger');
        if (mobileNav && mobileNav.classList.contains('open')) {
          mobileNav.classList.remove('open');
          if (burgerBtn) burgerBtn.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });
    document.addEventListener('click', () => langDropdown.classList.remove('open'));
  }

  /* ── Navbar scroll shadow ──────────────────────────────── */
  const navbar = document.getElementById('navbar');
  function onScroll() {
    if (navbar) navbar.classList.toggle('shadow', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Mobile nav ────────────────────────────────────────── */
  const burger = document.getElementById('burger');
  const links  = document.getElementById('navLinks');
  if (burger && links) {
    burger.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      burger.classList.toggle('active', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        burger.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── IntersectionObserver – reveal ────────────────────── */
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }),
    { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
  );
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el));

  /* ── Count-up numbers ──────────────────────────────────── */
  const countObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const dur = 1600;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      countObs.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach(el => countObs.observe(el));

  /* ── Active nav highlight ──────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navAs    = document.querySelectorAll('.navbar-links a[href^="#"]');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 160) cur = s.id; });
    navAs.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
    });
  }, { passive: true });

  /* ── Newsletter form ───────────────────────────────────── */
  const nForm = document.getElementById('newsletterForm');
  if (nForm) {
    nForm.addEventListener('submit', e => {
      e.preventDefault();
      const input = nForm.querySelector('input');
      const note  = document.getElementById('newsletterNote');
      if (input && note) {
        note.textContent = translations[currentLang]['newsletter-success'];
        note.style.color = '#72C010';
        input.value = '';
      }
    });
  }

  /* ── Contact form ──────────────────────────────────────── */
  const cForm = document.getElementById('contactForm');
  if (cForm) {
    cForm.addEventListener('submit', e => {
      e.preventDefault();
      const fields  = cForm.querySelector('.form-fields');
      const success = cForm.querySelector('.form-success');
      if (fields)  fields.style.display  = 'none';
      if (success) success.style.display = 'block';
    });
  }

  /* ── Init ──────────────────────────────────────────────── */
  applyLang(currentLang);
  onScroll();
})();
