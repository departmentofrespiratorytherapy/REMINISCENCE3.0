/**
 * ============================================================
 *  REMINISCENCE 3.0 — Committee & Patron Data
 * ============================================================
 *  HOW TO EDIT:
 *    • Update name, designation, role, department fields
 *    • For photos: place images in assets/images/committee/
 *      and set photo: 'assets/images/committee/filename.jpg'
 *    • Leave photo: '' to use a generated initial avatar
 * ============================================================
 */

/* ── PATRONS DATA (2 patrons) ───────────────────────────────
   HOW TO EDIT:
     • Place patron photos in:  assets/images/patrons/
     • Set photo path e.g.:     'assets/images/patrons/patron1.jpg'
     • Leave photo: '' to use a generated initial avatar
──────────────────────────────────────────────────────────── */
const PATRONS_DATA = [
  {
    id: 1,
    name: 'Dr.ARJUN ALVA',
    photo: 'assets/images/patrons/patron1.png',
    designation: 'Senior Consultant,Director-Adult Intensive Care and Emergency Medicine,HOD-Department Of Respiratory Therapy',
    institution: 'Narayana Health City',
    city: 'Bengaluru',
    description: 'Add a short description of this patron\'s role, leadership, and contributions to the field of pulmonology and to this conference.',
  },
    {
    id: 2,
    name: 'Dr.RANGANATHA.R',
    photo: 'assets/images/patrons/patron2.png',
    designation: 'Senior Consultant,HOD&Clinical Lead - General Medicine & Pulmonology,Associate Professor-Department Of Respiratory Therapy',
    institution: 'Narayana Health City',
    city: 'Bengaluru',
    description: 'Add a short description of this patron\'s leadership role and their guidance in shaping the scientific vision of REMINISCENCE 3.0.',
  },
   {
    id:3,
    name: 'Dr.MANU VARMA',
    photo: 'assets/images/patrons/patron3.png',
    designation: 'Consultant In Adult Intensive Care,Academic Lead For Department Of Respiratory Therapy',
    institution: 'Narayana Health City',
    city: 'Bengaluru',
    description: 'Add a short description of this patron\'s leadership role and their guidance in shaping the scientific vision of REMINISCENCE 3.0.',
  },
];

/* ── COMMITTEE DATA (21 members) ────────────────────────── */
const COMMITTEE_DATA = [
  { id: 1,  name: 'Ms. Meenu Mary Paul', role:'Senior Respiratory Therapist',department: 'Adult Critical Care',   photo:'assets/images/committee/meenu.jpg' },
  { id: 2,  name: 'Mr. Sreedhar', role: 'Senior Respiratory Therapist', department: 'Interventional Pulmonology', photo: 'assets/images/committee/sreedhar.jpg' },
  { id: 3,  name: 'Mr. Hafiz', role: 'Senior Respiratory Therapist',department: 'Adult Critical Care',photo: 'assets/images/committee/hafiz.jpg' },
  { id: 4,  name: 'Ms. Dilsha', role: 'Senior Respiratory Therapist', department: 'Adult Critical Care',photo: 'assets/images/committee/dilsha.jpg' },
  { id: 5,  name: 'Mr. Shafin', role: 'Senior Respiratory Therapist',department: 'Adult Critical Care', photo: 'assets/images/committee/shafin.jpg' },
  { id: 6,  name: 'Mr. Mohamed Arshid K', role: 'Senior Respiratory Therapist',department: 'Adult Critical Care',photo: 'assets/images/committee/arshid.png' },
  { id: 7,  name: 'Ms. Chaitra', role: 'Senior Respiratory Therapist',department: 'Adult Critical Care',photo: 'assets/images/committee/chaitra.jpeg' },
  { id: 8,  name: 'Ms. Aline',   role: 'Senior Respiratory Therapist',department: 'Interventional Pulmonology', photo: 'assets/images/committee/aline.jpg' },
  { id: 9,  name: 'Mr. Roshan', role: 'Senior Respiratory Therapist',department: 'Adult Critical Care', photo: 'assets/images/committee/roshan.jpeg' },
  { id: 10, name: 'Ms. Jalin', role: 'Senior Respiratory Therapist', department: 'Interventional Pulmonology', photo: 'assets/images/committee/jalin.jpg' },
  { id: 11, name: 'Ms. Ann Mary', role: 'Senior  Respiratory Therapist', department: 'Adult Critical Care',photo: 'assets/images/committee/annmary.jpeg' },
  { id: 12, name: 'Mr. Ajmal Khan', role: 'Senior Respiratory Therapist',department: 'Adult Critical Care',photo: 'assets/images/committee/ajmalkhan.jpg' },
  { id: 13, name: 'Mr. Sreenath', role: 'Junior Respiratory Therapist', department: 'Adult Critical Care',photo: 'assets/images/committee/sreenath.jpg' },
  { id: 14, name: 'Mr. Abin', role: 'Junior Respiratory Therapist',department: 'Adult Critical Care',  photo: 'assets/images/committee/abin.jpg' },
  { id: 15, name: 'Mr. Gunalan', role: 'Junior Respiratory Therapist',department: 'Adult Critical Care',photo: 'assets/images/committee/gunalan.jpeg' },
  { id: 16, name: 'Ms. Kavya', role: 'Junior Respiratory Therapist',department: 'Adult Critical Care', photo: 'assets/images/committee/kavya.png' },
  { id: 17, name: 'Ms. Soundraya', role: 'Junior Respiratory Therapist',department: 'Adult Critical Care',photo: 'assets/images/committee/soundraya.jpg' },
  { id: 18, name: 'Ms. Blessy', role: 'Junior Respiratory Therapist',department: 'Adult Critical Care',photo: 'assets/images/committee/blessy.jpg' },
  { id: 19, name: 'Ms. Aparna', role: 'Junior Respiratory Therapist', department: 'Adult Critical Care', photo: 'assets/images/committee/aparna.jpg' },
  { id: 20, name: 'Ms. Sreelakshmi', role: 'Junior Respiratory Therapist', department: 'Adult Critical Care', photo: 'assets/images/committee/sreelakshmi.png' },
  { id: 21, name: 'Ms. Joushna', role: 'Junior Respiratory Therapist', department: 'Adult Critical Care', photo: 'assets/images/committee/joushna.jpeg' }
];
 /* ── Avatar Helpers ────────────────────────────────────────── */
const AVATAR_GRADIENTS = [
  'linear-gradient(135deg, #1a3a6e 0%, #2563eb 100%)',
  'linear-gradient(135deg, #1e3a5f 0%, #0ea5e9 100%)',
  'linear-gradient(135deg, #1f2937 0%, #4b5563 100%)',
  'linear-gradient(135deg, #134e4a 0%, #0d9488 100%)',
  'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)',
  'linear-gradient(135deg, #7c2d12 0%, #c2410c 100%)',
  'linear-gradient(135deg, #064e3b 0%, #059669 100%)',
  'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
];

function getGradient(id) {
  return AVATAR_GRADIENTS[(id - 1) % AVATAR_GRADIENTS.length];
}

function getInitials(name) {
  return name
    .replace(/Dr\.\s*|Mr\.\s*|Ms\.\s*|Prof\.\s*/g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(w => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase() || '?';
}

function avatarHTML(member, cssClass) {
  const gradient = getGradient(member.id);
  const initials = getInitials(member.name);
  if (member.photo) {
    return `<img
      src="${member.photo}"
      alt="${member.name}"
      class="${cssClass}-photo"
      loading="lazy"
      data-gradient="${gradient}"
      data-initials="${initials}"
      data-cls="${cssClass}"
      onerror="imgFallback(this)"
    >`;
  }
  return `<div class="${cssClass}-avatar" style="background:${gradient}">${initials}</div>`;
}

/* ── Render Patrons ──────────────────────────────────────── */
function renderPatrons() {
  const grid = document.getElementById('patronsGrid');
  if (!grid) return;

  grid.innerHTML = PATRONS_DATA.map((p, idx) => `
    <div class="patron-card reveal reveal-up" style="transition-delay:${idx * 0.15}s;">
      <div class="patron-photo-wrap">
        ${avatarHTML(p, 'patron')}
        <div class="patron-accent-ring"></div>
      </div>
      <div class="patron-info">
        <div class="patron-badge">
          <i class="fa-solid fa-star"></i> Patron
        </div>
        <h3 class="patron-name">${p.name}</h3>
        <p class="patron-desig">${p.designation}</p>
        <p class="patron-inst">${p.institution}</p>
      </div>
    </div>
  `).join('');
}

/* ── Render Committee ────────────────────────────────────── */
function renderCommittee() {
  const grid = document.getElementById('committeeGrid');
  if (!grid) return;

  grid.innerHTML = COMMITTEE_DATA.map((m, idx) => `
    <div class="committee-card reveal reveal-up" style="transition-delay:${(idx % 4) * 0.08}s;">
      <div class="committee-avatar-wrap">
        ${avatarHTML(m, 'committee')}
      </div>
      <div class="committee-info">
        <h4 class="committee-name">${m.name}</h4>
        <p class="committee-role">${m.role}</p>
        <p class="committee-dept">${m.department}</p>
      </div>
    </div>
  `).join('');
}

/* ── GRATITUDE DATA (6 members) ─────────────────────────────
   HOW TO EDIT:
     • Update name, designation, institution
     • Place photo in assets/images/committee/Gratitude/person1.jpg
     • Leave photo: '' to use a generated initial avatar
──────────────────────────────────────────────────────────── */
const GRATITUDE_DATA = [
  {
    id: 101,
    name: 'Mr.Amal Joseph',
    photo: 'assets/images/committee/Gratitude/person1.jpg',
    designation: 'BSRT,MSRT,FNIV,Senior Respiratory Therapist- Critical Care & ECMO services,Burjeel Holdings,Abu Dhabi,UAE.',
  },
  {
    id: 102,
    name: 'Mr.Henry Abhram',
    photo: 'assets/images/committee/Gratitude/person2.jpg',
    designation: 'BSRT,Manager Department Of Respiraatory Therapy,RRT Head,kauvery Hospital,Bangalore',
  },
  {
    id: 103,
    name: 'Mr.Mohammed Unnais',
    photo: 'assets/images/committee/Gratitude/person3.jpg',
    designation: 'BSRT,Hamad Medical Corporation,Qatar',
  },
  {
    id: 104,
    name: 'Ms.Maria Shalian',
    photo: 'assets/images/committee/Gratitude/person4.jpg',
    designation: 'BSRT,Registered Respiratory Physiologist,Lincoln,England,UK',
  },
   {
    id: 105,
    name: 'Mr.Sherin Thomas',
    photo: 'assets/images/committee/Gratitude/person5.jpg',
    designation: 'BSRT,Respiratory Therapist,Royal Hospital',
  },
   {
    id: 106,
    name: 'Mr.Franklin Biony Jestin',
    photo: 'assets/images/committee/Gratitude/person6.jpg',
    designation: 'BSRT,MBA,Respiratory Therapist Sheikh Shakhbout Medical City,Abu Dhabi',
  },
];



/* ── Render Gratitude ────────────────────────────────────── */
 function renderGratitude() {
  const grid = document.getElementById('gratitudeGrid');

  if (!grid) return;

  grid.innerHTML = GRATITUDE_DATA.map((m, idx) => {

    const gradient = getGradient(m.id);
    const initials = getInitials(m.name);

    const photoHTML = m.photo
      ? `
        <img
          src="${m.photo}"
          alt="${m.name}"
          class="gratitude-photo"
          loading="lazy"
          data-gradient="${gradient}"
          data-initials="${initials}"
          data-cls="gratitude"
          onerror="imgFallback(this)"
        >
      `
      : `
        <div
          class="gratitude-avatar"
          style="background:${gradient}"
        >
          ${initials}
        </div>
      `;

    return `
      <div
        class="gratitude-card reveal reveal-up"
        style="transition-delay:${idx * 0.12}s;"
      >

        <div class="gratitude-photo-wrap">
          ${photoHTML}
          <div class="gratitude-ring"></div>
        </div>

        <div class="gratitude-info">
          <h4 class="gratitude-name">
            ${m.name}
          </h4>

          <p class="gratitude-desig">
            ${m.designation}
          </p>
        </div>

      </div>
    `;

  }).join('');
}


/* ── MANAGERS DATA (3 members) ───────────────────────────────
   HOW TO EDIT:
     • Place manager photos in:  assets/images/managers/
     • Set photo path e.g.:     'assets/images/managers/manager1.png'
     • Leave photo: '' to use a generated initial avatar
──────────────────────────────────────────────────────────── */
const MANAGERS_DATA = [
  {
    id: 201,
    name: 'JOSEPH MATHEW',
    photo: 'assets/images/managers/manager1.png',
    title: 'Manager &  Clinical Coordinator Adult Critical Care',
    department: 'Department Of Respiratory Therapy',
    institution: 'Narayana Health City, Bengaluru',
  },
  {
    id: 202,
    name: 'JIBIN MATHEW',
    photo: 'assets/images/managers/manager2.png',
    title: 'Manager & Staff Incharge Adult Critical Care',
    department: 'Department Of Respiratory Therapy',
    institution: 'Narayana Health City, Bengaluru',
  },
  {
    id: 203,
    name: 'PAVAN KALYAN S P',
    photo: 'assets/images/managers/manager3.png',
    title: 'Manager & Incharge,Senior Respiratory Therapist',
    department: 'Department Of Interventional Pulmonology',
    institution: 'Narayana Health City, Bengaluru',
  },
];

/* ── Render Managers ─────────────────────────────────────── */
function renderManagers() {
  const grid = document.getElementById('managersGrid');
  if (!grid) return;

  grid.innerHTML = MANAGERS_DATA.map((m, idx) => {
    const gradient = getGradient(m.id);
    const initials  = getInitials(m.name);
    const photoHTML = m.photo
      ? `<img src="${m.photo}" alt="${m.name}" class="manager-photo" loading="lazy"
             onerror="this.outerHTML='<div class=&quot;manager-avatar&quot; style=&quot;background:${gradient}&quot;>${initials}</div>'">`
      : `<div class="manager-avatar" style="background:${gradient}">${initials}</div>`;

    return `
      <div class="manager-card reveal reveal-up" style="transition-delay:${idx * 0.15}s;">

        <!-- Card Header -->
        <div class="manager-card-header">
          <div class="manager-header-bg"></div>
          <div class="manager-photo-wrap">
            ${photoHTML}
            <div class="manager-ring"></div>
          </div>
        </div>

        <!-- Card Body -->
        <div class="manager-card-body">
          <div class="manager-tag">
            <i class="fa-solid fa-id-badge"></i>
            <span>Manager</span>
          </div>
          <h4 class="manager-name">${m.name}</h4>
          <p class="manager-title">${m.title}</p>
          <p class="manager-dept">
            <i class="fa-solid fa-building-columns"></i>
            ${m.department}
          </p>
        </div>

        <!-- Card Footer -->
        <div class="manager-card-footer">
          <i class="fa-solid fa-location-dot"></i>
          <span>${m.institution}</span>
        </div>

      </div>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderPatrons();
  renderManagers();
  renderCommittee();
  renderGratitude();
});
