/**
 * REMINISCENCE 3.0 — Navigation (sticky, mobile, active links)
 */
(function () {
  'use strict';

  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const navItems  = document.querySelectorAll('a.nav-link');

  /* ── Scroll: toggle scrolled class ─────────────────────── */
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    updateActiveLink();
  }

  /* ── Active section highlight ───────────────────────────── */
  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });

    navItems.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  /* ── Mobile hamburger ──────────────────────────────────── */
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      navLinks.classList.toggle('open', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* ── Close mobile menu on link click ───────────────────── */
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.classList.remove('menu-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ── Close menu on outside click ───────────────────────── */
  document.addEventListener('click', e => {
    if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.classList.remove('menu-open');
    }
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
