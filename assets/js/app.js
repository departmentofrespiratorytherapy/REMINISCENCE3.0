/**
 * REMINISCENCE 3.0 — Main App Orchestrator
 * Wires CONFIG values to all dynamic elements:
 * register buttons, venue map, brochure, sponsors, contact, social, footer
 */

/**
 * imgFallback — Auto-tries alternate extension (png↔jpg) before showing avatar.
 * Usage on <img>: onerror="imgFallback(this)"
 * Required data attrs: data-gradient, data-initials, data-cls
 */
window.imgFallback = function (img) {
  if (!img.dataset.tried) {
    img.dataset.tried = '1';
    var s = img.src;
    img.src = /\.png$/i.test(s)
      ? s.replace(/\.png$/i, '.jpg')
      : s.replace(/\.jpe?g$/i, '.png');
  } else {
    var g = img.dataset.gradient || '#1a3a6e';
    var i = img.dataset.initials || '?';
    var c = img.dataset.cls      || 'speaker';
    img.outerHTML =
      '<div class="' + c + '-avatar" style="background:' + g + '">' + i + '</div>';
  }
};

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {

    /* ── Register Buttons (all 4) ───────────────────────── */
    const regUrl = CONFIG.googleFormUrl || '#';
    const isRealLink = regUrl !== '#' && regUrl !== 'YOUR_GOOGLE_FORM_URL_HERE';

    ['nav-register-btn', 'hero-register-btn', 'contact-register-btn', 'footer-register-btn'].forEach(id => {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.href = isRealLink ? regUrl : '#';
      if (isRealLink) {
        btn.setAttribute('target', '_blank');
        btn.setAttribute('rel', 'noopener noreferrer');
      }
    });

    /* ── Venue Map & Directions ─────────────────────────── */
    const mapFrame = document.getElementById('venueMap');
    if (mapFrame) mapFrame.src = CONFIG.venue.mapsEmbed;

    const dirBtn = document.getElementById('directionsBtn');
    if (dirBtn) dirBtn.href = CONFIG.venue.directionsUrl;

    /* ── Brochure Section ───────────────────────────────── */
    const brochureCard = document.getElementById('brochureCard');
    if (brochureCard) {
      if (CONFIG.brochureReady) {
        brochureCard.innerHTML = `
          <div class="brochure-preview-wrap">
            <iframe
              src="${CONFIG.brochureFile}"
              class="brochure-iframe"
              title="REMINISCENCE 3.0 Conference Brochure"
              loading="lazy"
            ></iframe>
          </div>
          <div class="brochure-actions">
            <a href="${CONFIG.brochureFile}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
              <i class="fa-solid fa-eye"></i><span>View Brochure</span>
            </a>
            <a href="${CONFIG.brochureFile}" download="REMINISCENCE-3.0-Brochure.pdf" class="btn btn-primary">
              <i class="fa-solid fa-download"></i><span>Download PDF</span>
            </a>
          </div>`;
      } else {
        brochureCard.innerHTML = `
          <div class="brochure-coming-soon">
            <div class="brochure-icon-wrap">
              <i class="fa-solid fa-file-pdf"></i>
            </div>
            <h3>Brochure Coming Soon</h3>
            <p>The official REMINISCENCE 3.0 brochure is currently being prepared.<br>
               Please check back soon or contact us to be notified upon release.</p>
            <a href="#contact" class="btn btn-outline">
              <i class="fa-regular fa-bell"></i><span>Notify Me</span>
            </a>
          </div>`;
      }
    }

   /* ── Sponsors Grid ───────────────────────────────────── */
const sponsorsGrid = document.getElementById('sponsorsGrid');

if (sponsorsGrid) {
  const sponsors = [
    {
      name: 'AMBU',
      image: 'assets/images/sponsors/sponsor1.png'
    },
    {
      name: 'SURGICAL BIONICS',
      image: 'assets/images/sponsors/sponsor2.png'
    }
  ];

  sponsorsGrid.innerHTML = sponsors.map((sponsor, i) => `
    <div class="sponsor-card reveal reveal-up"
         style="transition-delay:${i * 0.06}s;">

      <div class="sponsor-logo">
        <img
          src="${sponsor.image}"
          alt="${sponsor.name}"
          loading="lazy"
        >
      </div>

      <p class="sponsor-name">${sponsor.name}</p>

    </div>
  `).join('');
}

    /* ── Contact Cards ──────────────────────────────────── */
    const { email, phone, whatsapp } = CONFIG.contact;
    const contactCards = document.getElementById('contactCards');
    if (contactCards) {
      contactCards.innerHTML = `
        <a href="mailto:${email}" class="contact-card reveal reveal-left">
          <div class="contact-icon-wrap email-icon">
            <i class="fa-regular fa-envelope"></i>
          </div>
          <div class="contact-text">
            <h4>Email Us</h4>
            <p>${email}</p>
          </div>
          <i class="fa-solid fa-arrow-right contact-arrow"></i>
        </a>
        <a href="tel:${phone.replace(/\s/g,'')}" class="contact-card reveal reveal-left" style="transition-delay:0.1s;">
          <div class="contact-icon-wrap phone-icon">
            <i class="fa-solid fa-phone"></i>
          </div>
          <div class="contact-text">
            <h4>Call Us</h4>
            <p>${phone}</p>
          </div>
          <i class="fa-solid fa-arrow-right contact-arrow"></i>
        </a>
        <a href="https://wa.me/${whatsapp.replace(/[^0-9]/g,'')}" class="contact-card reveal reveal-left" style="transition-delay:0.2s;" target="_blank" rel="noopener noreferrer">
          <div class="contact-icon-wrap whatsapp-icon">
            <i class="fa-brands fa-whatsapp"></i>
          </div>
          <div class="contact-text">
            <h4>WhatsApp</h4>
            <p>${whatsapp}</p>
          </div>
          <i class="fa-solid fa-arrow-right contact-arrow"></i>
        </a>`;
    }

    /* ── Social Links (contact section) ────────────────── */
    const { instagram, youtube, instagramHandle } = CONFIG.contact;

    function buildSocialHTML() {
      return `
        <a href="${instagram}" class="social-pill instagram-pill" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-instagram"></i>
          <span>${instagramHandle}</span>
        </a>
        <a href="${youtube}" class="social-pill youtube-pill" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-youtube"></i>
          <span>@nhrespiratory</span>
        </a>`;
    }

    const socialLinks = document.getElementById('socialLinks');
    if (socialLinks) socialLinks.innerHTML = buildSocialHTML();

    /* ── Footer Social Icons ────────────────────────────── */
    const footerSocial = document.getElementById('footerSocial');
    if (footerSocial) {
      footerSocial.innerHTML = `
        <div class="footer-social-row">
          <a href="${instagram}" class="footer-soc-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="${youtube}" class="footer-soc-icon" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="https://wa.me/${whatsapp.replace(/[^0-9]/g,'')}" class="footer-soc-icon" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </div>`;
    }

    /* ── Back to Top Button ─────────────────────────────── */
    const btt = document.getElementById('backToTop');
    if (btt) {
      window.addEventListener('scroll', () => {
        btt.classList.toggle('visible', window.scrollY > 450);
      }, { passive: true });
      btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    /* ── Re-init scroll reveal after dynamic injection ──── */
    if (window.IntersectionObserver) {
      const freshEls = document.querySelectorAll('.reveal:not(.is-visible)');
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      freshEls.forEach(el => obs.observe(el));
    }

  });
})();
