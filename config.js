/**
 * ============================================================
 *  REMINISCENCE 3.0 — Central Configuration File
 * ============================================================
 *  Edit ONLY this file to update:
 *    • Google Form registration link
 *    • Contact details & social media
 *    • Brochure file path
 *    • Google Maps embed URL
 *
 *  Changes here apply automatically across the entire website.
 * ============================================================
 */

const CONFIG = {

  /* ── REGISTRATION ─────────────────────────────────────────────
     Paste your Google Form URL below.
     Example: 'https://forms.gle/xxxxxxxxxxxxxxxx'
  ──────────────────────────────────────────────────────────── */
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfq4LTR2d8TI7j-PiW7_mezcSNWmrmLvbup3rCiN3vgQIe6Hg/viewform?usp=publish-editor',

  /* ── BROCHURE ─────────────────────────────────────────────────
     Set brochureReady: true once the PDF is placed in
     assets/brochure/ and update brochureFile path.
  ──────────────────────────────────────────────────────────── */
  brochureFile:  'assets/brochure.pdf',
  brochureReady: true,

  /* ── CONTACT ──────────────────────────────────────────────── */
  contact: {
    email:           'respiratory.therapy.msh@narayanahealth.org',
    phone:           '+91 8050028125',
    whatsapp:        '+91 9843942824',
    instagram:       'https://www.instagram.com/nh_respiratorytherapy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    youtube:        'https://www.youtube.com/@nhrespiratory',
    instagramHandle: '@nh_respiratorytherapy',
  },

  /* ── VENUE & MAPS ─────────────────────────────────────────── */
  venue: {
    name:        'Harold Varmus Auditorium',
    floor:       '7th Floor, MSMC',
    building:    'Narayana Health City',
    address:     'Bommasandra, Hosur Road',
    city:        'Bengaluru, Karnataka 560099',
    mapsEmbed:   'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0107885823504!2d77.6354!3d12.8338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b4948b7b7d5%3A0x75c7e4929b6f6f0!2sNarayana%20Health%20City!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin',
    directionsUrl: 'https://maps.google.com/?q=Narayana+Health+City+Bengaluru',
  },

  /* ── CONFERENCE INFO ──────────────────────────────────────── */
  conference: {
    name:    'REMINISCENCE 3.0',
    edition: '3.0',
    theme:   'Exploring the Future of Interventional Pulmonology',
    date:    '29 August 2026',
    dateISO: '2026-08-29T09:00:00',
  },

};
