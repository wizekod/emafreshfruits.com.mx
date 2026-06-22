/* ============================================================
   EMA Fresh Fruits — Main JavaScript
   Parallax + Scroll animations + Navigation
   ============================================================ */

(function () {
  'use strict';

  /* ── Nav scroll ──────────────────────────────────────────── */
  const nav   = document.getElementById('nav');
  const bar   = document.getElementById('scrollProgress');
  const burger = document.getElementById('navBurger');
  const links  = document.getElementById('navLinks');

  function onScroll() {
    const y   = window.scrollY;
    const max = document.body.scrollHeight - window.innerHeight;

    if (nav)  nav.classList.toggle('scrolled', y > 60);
    if (bar)  bar.style.width = max > 0 ? (y / max * 100) + '%' : '0%';

    /* ── Parallax for hero floating berries ──────────────────── */
    const berries = document.querySelectorAll('[data-parallax]');
    berries.forEach(el => {
      const speed  = parseFloat(el.dataset.parallax) || 0.3;
      el.style.transform = `translateY(${y * speed}px)`;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Mobile nav ───────────────────────────────────────────── */
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

  /* ── IntersectionObserver – reveal elements ───────────────── */
  const revealClasses = ['.reveal', '.reveal-left', '.reveal-right'];
  const revealEls = document.querySelectorAll(revealClasses.join(','));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(el => observer.observe(el));

  /* ── Counting numbers ─────────────────────────────────────── */
  function animateCount(el, target, suffix, duration) {
    const start = performance.now();
    const isDecimal = String(target).includes('.');

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      const val      = isDecimal
        ? (eased * target).toFixed(1)
        : Math.round(eased * target);
      el.textContent = val + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el     = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        animateCount(el, target, suffix, 1800);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

  /* ── Contact form ─────────────────────────────────────────── */
  const form    = document.getElementById('contactForm');
  const fields  = document.querySelector('.form-fields');
  const success = document.querySelector('.form-success');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (fields)  fields.classList.add('hidden');
      if (success) success.classList.add('active');
    });
  }

  /* ── Active nav link highlight ────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function highlightNav() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 200) current = sec.id;
    });
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });

  /* ── Stagger children animations ─────────────────────────── */
  document.querySelectorAll('[data-stagger]').forEach(parent => {
    Array.from(parent.children).forEach((child, i) => {
      child.style.transitionDelay = (i * 0.1) + 's';
      child.classList.add('reveal');
      observer.observe(child);
    });
  });

  /* ── Smooth-scroll for anchor links ──────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id  = a.getAttribute('href').slice(1);
      const el  = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ── Tilt effect on berry chapter art ────────────────────── */
  document.querySelectorAll('.berry-chapter__art').forEach(art => {
    art.addEventListener('mousemove', e => {
      const rect  = art.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      const dx    = (e.clientX - cx) / (rect.width  / 2);
      const dy    = (e.clientY - cy) / (rect.height / 2);
      const svg   = art.querySelector('svg, .berry-svg-wrap');
      if (svg) svg.style.transform = `rotateY(${dx * 12}deg) rotateX(${-dy * 10}deg) scale(1.04)`;
    });
    art.addEventListener('mouseleave', () => {
      const svg = art.querySelector('svg, .berry-svg-wrap');
      if (svg) svg.style.transform = '';
    });
  });

  /* ── Init ─────────────────────────────────────────────────── */
  onScroll();
  highlightNav();

})();
