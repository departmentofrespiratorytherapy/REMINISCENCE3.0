/**
 * ============================================================
 *  REMINISCENCE 3.0 — Speaker Data & Modal Logic
 * ============================================================
 *  HOW TO EDIT:
 *    1. Update name, qualifications, designation, etc. below
 *    2. Place speaker photos in:  assets/images/speakers/
 *    3. Set photo: 'assets/images/speakers/your-filename.png'
 *    4. Update the expertise array with relevant keywords
 * ============================================================
 */

const SPEAKERS_DATA = [
  {
    id: 1,
    name: 'Dr.Sagar C',
    photo: 'assets/images/speakers/speaker1.png',
    qualifications: 'MBBS; DTCD (Tuberculosis & Chest Diseases); DNB (Respiratory Medicine)',
    designation: 'Senior Consultant In Pulmonology',
    department: 'Department of Pulmonology',
    institution: 'Narayana Health City',
    city: 'Bangalore, India',
    topic: 'FOB Basics',
    bio: `Dr Sagar Chandrashekaraiah is a highly experienced pulmonologist in Bangalore with over 20 years of clinical experience in diagnosing and managing a wide range of respiratory conditions. He specialises in treating chronic lung diseases, infections, and sleep-related breathing disorders, providing comprehensive and patient-focused care.Patients searching for a lung specialist in Bangalore, respiratory doctor, or expert care for asthma, COPD, and lung infections can rely on his extensive expertise.`,
  expertise: ['Pulmonology | Respiratory Medicine | Thoracic Oncology'],
  },
 {
  id: 2,
  name: 'Dr.Manjunath P.H',
  photo: 'assets/images/speakers/speaker2.png',
  qualifications: 'MBBS, DTCD, DNB',
  designation: 'Consultant Interventional Pulmonology',
  department: 'Interventional Pulmonology Division',
  institution: 'Gleneagles BGS Hospitals',
  city: 'Bangalore, India',
  topic: 'Hot & Cold Therapy',
  bio: `Dr. Manjunath P.H is a Consultant in Interventional Pulmonology at Gleneagles BGS Hospitals, Bangalore, with expertise in advanced respiratory and pulmonary care. His clinical practice focuses on the diagnosis and management of complex respiratory diseases, along with minimally invasive interventional pulmonology procedures. He is experienced in advanced bronchoscopic techniques and pleural interventions, with a particular interest in Hot & Cold Therapy and therapeutic applications in interventional pulmonology.

His areas of clinical expertise include bronchoscopy, EBUS, pleuroscopy, pleural biopsy and cryobiopsy, along with the management of bronchial asthma, COPD, interstitial lung disease, tuberculosis, pulmonary hypertension, pleural diseases, and obstructive sleep apnea. He is committed to providing precise, evidence-based and patient-centred respiratory care while advancing the role of interventional pulmonology in complex pulmonary conditions.`,
  expertise: [
    'Interventional Pulmonology | Advanced Bronchoscopy | EBUS',
    'Hot & Cold Therapy | Cryotherapy | Pleural Interventions',
    'Pleuroscopy | Pleural Biopsy | Cryobiopsy',
    'Lung Transplantation | Complex Pulmonary Diseases',
    'Asthma | COPD | ILD | Tuberculosis | Pulmonary Hypertension'
  ],
},
 
  {
    id: 3,
    name: 'Dr.Amrutha.H',
    photo: 'assets/images/speakers/speaker3.png',
    qualifications: 'MBBS-General Physician, MD-Pulmonologist',
    designation: 'Consultant pulmonology',
    department: 'Department Of Pulmonology',
    institution: 'Apollo Hospital - Bannerghatta',
    city: 'Bangalore, India',
    topic: 'E-BUS',
    bio: 'Amrita H is an expert and experienced Pulmonologist doctor with an experience of 11 years. Amrita H specializes in Pulmonologist. Currently, Amrita H is practicing at Apollo Hospital - Bannerghatta | OPD Bannerghatta Road, Bengaluru.',
    expertise: ['Pulmonology | Respiratory Medicine | Thoracic Oncology'],
  },
  {
    id: 4,
    name: 'Dr.Mallikarjun',
    photo: 'assets/images/speakers/speaker4.png',
    qualifications: 'MBBS, DTCD, DNB (Pulmonary Medicine)',
    designation: 'Consultant Pulmonology',
    department: 'Department Of Pulmonology',
    institution: 'HCG Hospital, Hebbal',
    city: 'Bangalore, India',
    topic: 'Rigid Bronchoscopy',
     bio: `Dr. Mallikarjun is a skilled Consultant in Interventional Pulmonology and Sleep Medicine with expertise in the diagnosis and management of lung cancer, thoracic cancers, and a wide range of respiratory conditions. His clinical expertise includes advanced bronchoscopic and pleural interventions such as bronchoscopy, rigid bronchoscopy, EBUS/TBNA, thoracoscopy, airway stenting, tumor debulking, indwelling pleural catheter insertion, and management of malignant pleural effusion.

He also provides comprehensive care for non-malignant respiratory conditions including bronchial asthma, allergies, chronic obstructive pulmonary disease, tuberculosis, interstitial lung disease, and pleural effusion. He has a special interest in thoracic oncology, early lung cancer screening, diagnosis and management, as well as palliative interventions and pulmonary complications associated with cancer treatment. He also has expertise in lung transplant evaluation and holds a fellowship in allergy and asthma testing.`,
  expertise: [
    'Interventional Pulmonology | Bronchoscopy | Rigid Bronchoscopy | EBUS/TBNA',
    'Thoracic Oncology | Lung Cancer Screening | Tumor Debulking',
    'Thoracoscopy | Airway Stenting | ICD & Indwelling Pleural Catheter',
    'Pleural Interventions | Malignant Pleural Effusion | Pleural Biopsy',
    'Lung Transplant Evaluation | Asthma | COPD | ILD | Tuberculosis'
  ],
  },
  {
    id: 5,
    name: 'Dr.Lekshmipriya Raj',
    photo: 'assets/images/speakers/speaker5.png',
    qualifications: 'MBBS, DTCD, DNB resident',
    designation: 'PG Resident In Pulmonology',
    department: 'Department Of Pulmonology',
    institution: 'Narayana Health',
    city: 'Bangalore, India',
    topic: 'Thoracoscopy',
  },
  {
    id: 6,
    name: 'Dr.Goutham',
    photo: 'assets/images/speakers/speaker6.png',
    qualifications: 'MBBS, DTCD, DNB resident',
    designation: 'PG Resident In Pulmonology',
    department: 'Department Of Pulmonology',
    institution: 'Narayana Health',
    city: 'Bangalore, India',
    topic: 'ICD Management',
  },
 ];

/* ── Render Speaker Cards ──────────────────────────────────── */
function renderSpeakers() {
  const grid = document.getElementById('speakersGrid');
  if (!grid) return;

  grid.innerHTML = SPEAKERS_DATA.map((s, idx) => `
    <div class="speaker-card hover-glow" data-speaker-id="${s.id}" style="animation-delay:${idx * 0.08}s;" tabindex="0" role="button" aria-label="View ${s.name} profile">
      <div class="speaker-photo-wrap">
        <img
          src="${s.photo}"
          alt="Photo of ${s.name}"
          class="speaker-photo"
          loading="lazy"
          onerror="this.src='assets/images/speakers/placeholder-male.jpg'"
        >
        <div class="speaker-photo-overlay">
          <i class="fa-solid fa-circle-info"></i>
          <span>View Profile</span>
        </div>
        <div class="speaker-number">${String(idx + 1).padStart(2, '0')}</div>
      </div>
      <div class="speaker-info">
        <h3 class="speaker-name">${s.name}</h3>
        <p class="speaker-qual">${s.qualifications}</p>
        <p class="speaker-desig">${s.designation}</p>
        <p class="speaker-inst"><i class="fa-solid fa-hospital-user"></i> ${s.institution}</p>
        <div class="speaker-topic-tag">
          <i class="fa-solid fa-microphone-lines"></i>
          <span>${s.topic}</span>
        </div>
      </div>
    </div>
  `).join('');

  /* Add click + keyboard listeners */
  grid.querySelectorAll('.speaker-card').forEach(card => {
    const open = () => openSpeakerModal(parseInt(card.dataset.speakerId));
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
}

/* ── Modal Logic ─────────────────────────────────────────── */
function openSpeakerModal(id) {
  const s = SPEAKERS_DATA.find(sp => sp.id === id);
  if (!s) return;

  document.getElementById('modalPhoto').src                = s.photo;
  document.getElementById('modalPhoto').alt                = s.name;
  document.getElementById('modalSpeakerName').textContent  = s.name;
  document.getElementById('modalQual').textContent         = s.qualifications;
  document.getElementById('modalDesig').textContent        = `${s.designation} — ${s.department}`;
  document.getElementById('modalInst').innerHTML           = `<i class="fa-solid fa-hospital-user"></i> ${s.institution}, ${s.city}`;
  document.getElementById('modalTopic').textContent        = s.topic;
  document.getElementById('modalBio').textContent          = s.bio;
  document.getElementById('modalExpertise').innerHTML      = s.expertise
    .map(e => `<span class="expertise-tag">${e}</span>`).join('');

  const modal = document.getElementById('speakerModal');
  modal.classList.add('open');
  document.body.classList.add('modal-open');
  document.getElementById('modalClose').focus();
}

function closeSpeakerModal() {
  document.getElementById('speakerModal').classList.remove('open');
  document.body.classList.remove('modal-open');
}

document.addEventListener('DOMContentLoaded', () => {
  renderSpeakers();

  const modal     = document.getElementById('speakerModal');
  const closeBtn  = document.getElementById('modalClose');

  closeBtn.addEventListener('click', closeSpeakerModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeSpeakerModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSpeakerModal(); });
});
