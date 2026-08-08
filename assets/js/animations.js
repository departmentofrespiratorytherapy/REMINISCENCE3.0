/**
 * REMINISCENCE 3.0 — Scroll Animations & Canvas Particles
 */
(function () {
  'use strict';

  /* ── IntersectionObserver Scroll Reveal ────────────────── */
  function initScrollReveal() {
    const els = document.querySelectorAll('.reveal, .stagger-children');
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    els.forEach(el => observer.observe(el));
  }

  /* ── Canvas Particles (Hero) ───────────────────────────── */
  function initParticles() {
    const canvas = document.getElementById('particlesCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = canvas.closest('.hero').offsetHeight || window.innerHeight;
    }

    function rnd(min, max) { return Math.random() * (max - min) + min; }

    function createParticle(randomY) {
      const isGold = Math.random() > 0.55;
      return {
        x:       rnd(0, canvas.width),
        y:       randomY ? rnd(0, canvas.height) : canvas.height + rnd(5, 20),
        r:       rnd(0.6, 2.2),
        vy:      rnd(0.18, 0.55),
        vx:      rnd(-0.18, 0.18),
        opacity: rnd(0.15, 0.55),
        color:   isGold
          ? `rgba(201,168,76,${rnd(0.15, 0.45)})`
          : `rgba(120,180,255,${rnd(0.08, 0.28)})`,
      };
    }

    function init() {
      particles = Array.from({ length: 90 }, () => createParticle(true));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.y  -= p.vy;
        p.x  += p.vx;
        if (p.y < -10) { particles[i] = createParticle(false); return; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        cancelAnimationFrame(animId);
        resize();
        init();
        draw();
      }, 200);
    }, { passive: true });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initParticles();
  });
})();
