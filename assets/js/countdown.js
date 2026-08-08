/**
 * REMINISCENCE 3.0 — Live Countdown Timer
 * Reads target date from CONFIG.conference.dateISO
 */
(function () {
  'use strict';

  function pad(n) { return String(n).padStart(2, '0'); }

  function initCountdown() {
    const target  = new Date(CONFIG.conference.dateISO).getTime();
    const daysEl  = document.getElementById('cd-days');
    const hrsEl   = document.getElementById('cd-hours');
    const minEl   = document.getElementById('cd-minutes');
    const secEl   = document.getElementById('cd-seconds');

    if (!daysEl) return;

    function update() {
      const diff = target - Date.now();

      if (diff <= 0) {
        [daysEl, hrsEl, minEl, secEl].forEach(el => { if (el) el.textContent = '00'; });
        return;
      }

      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000)  / 60000);
      const s = Math.floor((diff % 60000)    / 1000);

      if (daysEl) daysEl.textContent = pad(d);
      if (hrsEl)  hrsEl.textContent  = pad(h);
      if (minEl)  minEl.textContent  = pad(m);
      if (secEl)  secEl.textContent  = pad(s);
    }

    update();
    setInterval(update, 1000);
  }

  document.addEventListener('DOMContentLoaded', initCountdown);
})();
