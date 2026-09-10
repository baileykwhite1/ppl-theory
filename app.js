/* UK PPL(A) theory — study app.
   Regulatory content is quoted from the primary sources listed in SOURCES.
   Learning objectives in data/syllabus.js are parsed verbatim from the CAA CAP2090 PDFs. */
'use strict';

/* ============================ configuration ============================ */

const META = {
  '010': { c: 'blue',   book: 'APM 2' },
  '090': { c: 'teal',   book: 'APM 7' },
  '040': { c: 'pink',   book: 'APM 6' },
  '050': { c: 'indigo', book: 'APM 2' },
  '081': { c: 'purple', book: 'APM 4' },
  '020': { c: 'brown',  book: 'APM 4' },
  '060': { c: 'green',  book: 'APM 3' },
  '030': { c: 'orange', book: 'APM 3 + 4' },
  '070': { c: 'red',    book: 'APM 6' }
};

/* Exam orderings. There is no CAA-mandated order, and no sittings limit for a PPL, so this
   is purely about how you want to study. Each plan is a full ordering of the nine subjects
   plus a suggested grouping into study blocks. */
const PLANS = [
  { id: 'blocks', name: 'Study-efficient blocks', tag: 'Recommended',
    desc: 'Pairs subjects that share a book or overlap heavily, so each block is cheaper than the sum of its parts.',
    order: ['010', '090', '040', '050', '081', '020', '060', '030', '070'],
    split: [2, 2, 2, 3],
    titles: ['Ground school foundation', 'The pilot and the sky', 'The aeroplane', 'Cross-country and consolidation'],
    notes: [
      'Schools commonly want Air Law passed before first solo — check what yours requires. Communications is the same paper (subject 090) FRTOL examiners use, so a pass counts both ways.',
      'Human Performance is short and self-contained. Meteorology is long — start it early and sit it once you can read a TAF, METAR and Form 214 cold.',
      'Principles of Flight and Aircraft General Knowledge share a book and overlap heavily. The cheapest pairing in the set.',
      'Navigation and Flight Performance & Planning are what the qualifying cross-country actually tests. Operational Procedures draws on all eight others, so it goes last.'
    ] },
  { id: 'training', name: 'Follow your flight training',
    desc: 'Ordered against the milestones, so each exam lands just before the flying that needs it.',
    order: ['010', '090', '040', '050', '060', '030', '081', '020', '070'],
    split: [2, 2, 2, 2, 1],
    titles: ['Before first solo', 'Before solo navigation', 'Before the qualifying cross-country', 'Consolidation', 'Last'],
    notes: [
      'The two most schools want signed off before they send you solo.',
      'You cannot judge whether to launch without Meteorology, and Human Performance is the shortest paper in the set.',
      'Navigation and Flight Performance & Planning are exactly what the 150 NM qualifying flight tests.',
      'The technical pair, once you have the handling experience to make it concrete.',
      'Operational Procedures draws on all eight others.'
    ] },
  { id: 'quick', name: 'Quick wins first',
    desc: 'Smallest syllabus first. Three passes on the board early is worth a lot when motivation is the constraint.',
    order: ['090', '040', '070', '010', '030', '081', '050', '060', '020'],
    split: [3, 3, 3],
    titles: ['Short papers', 'Middleweight', 'The big three'],
    notes: ['The three smallest learning-objective counts in the set.',
      'Manageable, and Flight Performance & Planning starts paying off in your flight planning.',
      'The heaviest syllabuses, tackled once you have momentum and a working study habit.'] },
  { id: 'heavy', name: 'Heaviest first',
    desc: 'Biggest subjects while enthusiasm is highest, leaving short papers for when you are tired of studying.',
    order: ['020', '060', '050', '081', '030', '010', '070', '040', '090'],
    split: [3, 3, 3],
    titles: ['The big three', 'Middleweight', 'Short papers'],
    notes: ['Aircraft General Knowledge, Navigation and Meteorology are the three largest.',
      'Substantial but not enormous.',
      'Short papers to finish on, when study fatigue has set in.'] },
  { id: 'custom', name: 'My own order',
    desc: 'Arrange the nine however you like. Useful if your school runs ground school in a fixed sequence.',
    order: ['010', '090', '040', '050', '081', '020', '060', '030', '070'],
    split: [3, 3, 3],
    titles: ['First three', 'Next three', 'Last three'],
    notes: ['', '', ''] }
];

const planById = id => PLANS.find(p => p.id === id) || PLANS[0];
function activePlan() { return planById(S.planId || 'blocks'); }
/** The nine subject codes in the order this profile has chosen. */
function planOrder() {
  const p = activePlan();
  if (p.id === 'custom' && Array.isArray(S.customOrder) && S.customOrder.length === 9) return S.customOrder.slice();
  return p.order.slice();
}
/** Chunk the ordering into the plan's study blocks. */
function planBlocks() {
  const p = activePlan(), order = planOrder(), out = [];
  let i = 0;
  p.split.forEach((n, gi) => {
    out.push({ no: gi + 1, title: p.titles[gi], why: p.notes[gi], subs: order.slice(i, i + n) });
    i += n;
  });
  if (i < order.length) out.push({ no: out.length + 1, title: 'Remaining', why: '', subs: order.slice(i) });
  return out;
}
const blockOf = code => {
  const b = planBlocks().find(x => x.subs.indexOf(code) >= 0);
  return b ? b.no : 1;
};
const posOf = code => planOrder().indexOf(code) + 1;

const BOOKS = {
  '010': ['APM 2', 'Aviation Law &amp; Meteorology', '17th revised ed., Feb 2025'],
  '050': ['APM 2', 'Aviation Law &amp; Meteorology', '17th revised ed., Feb 2025'],
  '060': ['APM 3', 'Air Navigation', '9th ed., revised Jun 2025'],
  '030': ['APM 3 + 4', 'Air Navigation (flight planning); The Aeroplane Technical (mass &amp; balance, performance)', 'APM 3 9th ed. 2025; APM 4 reprint Jan 2025'],
  '020': ['APM 4', 'The Aeroplane Technical — airframe, engines, systems, airworthiness', 'Reprint Jan 2025'],
  '081': ['APM 4', 'The Aeroplane Technical — Principles of Flight', 'Reprint Jan 2025'],
  '040': ['APM 6', 'Human Performance &amp; Operational Procedures', '6th ed., Nov 2022 (reprint 2024)'],
  '070': ['APM 6', 'Human Performance &amp; Operational Procedures', '6th ed., Nov 2022 (reprint 2024)'],
  '090': ['APM 7', 'Communications', 'Current edition — check Pooleys before buying']
};

const RULES = [
  { h: 'Nine subjects', cite: 'FCL.215',
    b: 'Five common — Air Law, Human Performance, Meteorology, Communications, Navigation — plus four specific to aeroplanes: Principles of Flight, Operational Procedures, Flight Performance and Planning, Aircraft General Knowledge.' },
  { h: '75% to pass, no negative marking', cite: 'FCL.025(b)(1)',
    b: 'Wrong answers cost nothing beyond the mark. Never leave a question blank.',
    q: '“A pass in a theoretical knowledge examination paper will be awarded to an applicant achieving at least 75 % of the marks allocated to that paper. No penalty marking shall be applied.”' },
  { h: 'All nine within 18 months of your first attempt', cite: 'FCL.025(b)(2)',
    b: 'The clock starts at the <b>end of the calendar month</b> in which you first attempt any exam. Sit exam one on 20 March and you have until 30 September the following year. This is the deadline that catches people out, because it starts the moment you sit your first paper, however casually.',
    q: '“…if he or she has passed all the required theoretical knowledge examination papers within a period of 18 months counted from the end of the calendar month when the applicant first attempted an examination.”' },
  { h: 'No limit on sittings for a PPL', cite: 'FCL.025(b)(3) and (b)(4)',
    b: 'The six-sittings rule in (b)(3) is written to apply to <b>ATPL theory, CPL and IR</b> applicants only. Point (b)(4), the LAPL/PPL rule, mentions attempts and the 18-month period but <b>no sittings</b>. The CAA also removed the sittings cap from its GA exam procedures in Standards Document 11 version 14, December 2020.',
    q: '“(4) If an applicant for the issue of a light aircraft pilot licence (LAPL) or a private pilot licence (PPL) has failed to pass one of the theoretical knowledge examination papers within four attempts or has failed to pass all papers within the period mentioned in point (b)(2), he or she shall retake the complete set…”' },
  { h: 'Four attempts per paper — a fourth failure wipes everything', cite: 'FCL.025(b)(4) · Standards Doc 11 §11.1.22–36',
    b: 'This, not sittings, is the constraint worth planning around. Before a fourth attempt you must do further training as your school determines. Fail the fourth and the e-Exams system puts you in automatic stand-down, <b>every pass in every subject is void</b>, and you need fresh training plus a CAA release before starting again.',
    q: '“ALL previous examination passes, in ALL subjects currently being sat are rendered null and void by a fourth attempt failure.”' },
  { h: 'One attempt at a given paper per sitting', cite: 'GM1 FCL.025',
    b: 'A sitting is a window of up to ten consecutive days, and each paper may be attempted only once inside it. A resit of the <i>same</i> subject cannot be same-day; different subjects on the same day are fine.',
    q: '“‘Sitting’: a period of time established by the competent authority within which a candidate can take an examination. This period should not exceed 10 consecutive days. Only one attempt at each examination paper is allowed in one sitting.”' },
  { h: 'A completed set is valid for 24 months', cite: 'FCL.025(c)(1)(i)',
    b: 'Counted from the day you complete the last exam. Finishing all nine long before you have the hours is a real risk, not a head start.',
    q: '“The successful completion of the theoretical knowledge examinations will be valid: (i) for the issue of a light aircraft pilot licence or a private pilot licence, for a period of 24 months.”' },
  { h: 'Your school’s recommendation lasts 12 months', cite: 'FCL.025(a)(3)',
    b: 'You may only sit an exam when recommended by your ATO or DTO. Attempt no paper within 12 months of that recommendation and they decide what further training you need.' },
  { h: 'About 120 questions across the whole set', cite: 'AMC1 FCL.215; FCL.235',
    b: 'That is the total across all nine papers, so the papers are short — an average of about thirteen questions each.',
    q: '“The examinations should comprise a total of 120 multiple-choice questions covering all the subjects.”' },
  { h: 'Cheating means a 12-month ban', cite: 'ARA.FCL.300 · Standards Doc 11 §12',
    b: 'A confirmed case is a minimum twelve-month ban from all examinations, and all previously attempted exams are void.' }
];

const PENDING = [
  { h: 'Exam validity 24 → 36 months', cite: 'CAP3212, Jan 2026 — Decision no. 3',
    b: 'The CAA has decided to proceed but it is <b>not in force</b>. The July 2026 Part-FCL rulebook still says 24 months, and implementation needs a legislative change via the DfT plus funding to modify the e-Exam platform.',
    q: '“We will progress with the single period of 36 months for exam validity for the PPL. The timescale is subject to appropriate funding.”' },
  { h: 'A rolling 18-month window, and dropping the four-failures rule', cite: 'CAP3212 §2.1–2.2',
    b: 'Both were floated in the 2024 consultation, but the CAA judged a rolling window too complex and replaced the package with the single 36-month validity. Treat the fixed 18-month window and the four-attempt limit as fully live.' },
  { h: 'Fewer exams — for the instrument rating, not the PPL', cite: 'CAP3212 §5.1–5.7',
    b: 'The consultation talk of consolidating subjects concerns the Competency Based Instrument Rating. There is no CAA decision to reduce the PPL from nine subjects.' }
];

const UNKNOWNS = [
  { h: 'Per-subject question counts and time limits',
    b: 'The CAA does not publish these. Part-FCL gives only the ~120-question total, and Standards Document 11 tells the Ground Examiner to confirm “the time limits and number of questions” to you verbally before each paper. Figures circulating on study sites are <b>not CAA-published</b> and are deliberately omitted here. Ask your Ground Examiner.' },
  { h: 'CAP2090 learning objectives date from January 2020',
    b: 'All nine are version 1, January 2020 (Principles of Flight carries no version line). They remain the current published objectives but are six years old — where one conflicts with current law, the law wins.' },
  { h: 'This app’s articles and questions are mine, not the CAA’s',
    b: 'The learning objectives are verbatim CAA. The articles, quiz questions and flashcards were written for this app and are a study aid, not an official question bank. Regulatory figures in them were checked against the primary sources on the Reference tab.' }
];

const SOURCES = [
  { t: 'UK Regulation (EU) No. 1178/2011 Annex I Part-FCL', m: 'CAA Aviation Regulation Library · page footers dated July 2026 · FCL.025 pp. 80–82, FCL.215 p. 144, FCL.205.A/FCL.210.A p. 218, FCL.740.A pp. 963–964, MED.A.045 p. 1581', u: 'https://regulatorylibrary.caa.co.uk/1178-2011-PDF/PDF.pdf' },
  { t: 'UK Regulation (EU) No. 923/2012 — Rules of the Air (SERA)', m: 'CAA Aviation Regulation Library · page footers dated August 2024 · SERA.5001 Table S5-1, SERA.5005, SERA.13001, Appendices III and IV', u: 'https://regulatorylibrary.caa.co.uk/923-2012-PDF/PDF.pdf' },
  { t: 'CAA Standards Document 11, Revision 15 (May 2022)', m: 'Procedures and conduct for all GA Theoretical Knowledge Examinations — source for the 75% briefing, the four-attempt consequences and the Dec 2020 removal of the sittings cap', u: 'https://www.caa.co.uk/publication/download/12697' },
  { t: 'Private pilot licence for aeroplanes — CAA guidance', m: 'Lists the nine subjects and confirms the 24-month validity is still current', u: 'https://www.caa.co.uk/general-aviation/pilot-licences/aeroplanes/private-pilot-licence-for-aeroplanes/' },
  { t: 'GA Theoretical Knowledge e-Exams — CAA', m: 'Index of the nine CAP2090 learning-objective documents', u: 'https://www.caa.co.uk/general-aviation/pilot-training-organisations/ga-theoretical-knowledge-e-exams/' },
  { t: 'CAP3212 — GA Pilot Licensing Review “Wave 2” Consultation Response', m: 'Published January 2026 · 560 responses · Decision no. 3 covers exam validity', u: 'https://www.caa.co.uk/publication/download/26763' },
  { t: 'Pooleys Air Pilot’s Manual product pages', m: 'Volume and edition dates read from the publisher’s own pages, September 2026', u: 'https://www.pooleys.com/shop/pooleys-air-pilot-publishing/air-pilots-manual-volumes-1-4-6-7-for-ppl-a-books/' }
];

const STATUSES = [['none', 'Not started'], ['studying', 'Studying'], ['ready', 'Ready to sit'], ['passed', 'Passed']];
const PASS_MARK = 75;
const NEW_CARDS_PER_DAY = 20;

/* ============================ state ============================ */

/* Progress is per-profile and stored only in this browser. GitHub Pages serves the app;
   it never receives anything back. Two people on the same device get separate profiles;
   the same person on two devices gets two independent sets unless they export and import. */

const PKEY = 'ppl-profiles';
const dataKey = id => 'ppl-v2:' + id;
const blank = () => ({ lo: {}, subj: {}, read: {}, srs: {}, hist: [], d1: '', d2: '',
  newToday: {}, best: {}, stage: '', field: '', wx: '', planId: 'blocks', customOrder: null,
  wrong: {}, seen: {}, flights: [] });

let P;   // { list: [{id, name}], active: id, theme }
let S;   // the active profile's progress

function readJSON(k, dflt) {
  try { const v = JSON.parse(localStorage.getItem(k) || 'null'); return v == null ? dflt : v; }
  catch (e) { return dflt; }
}
function writeJSON(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
const newId = () => 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

let LEGACY = null;   // progress found from the single-user version, offered on the setup screen

function loadProfiles() {
  P = readJSON(PKEY, null);
  if (!P || !Array.isArray(P.list)) P = { list: [], active: '', theme: '' };
  if (!P.list.length) {
    const l = readJSON('ppl-v2', null) || readJSON('ppl-theory-v1', null);
    LEGACY = (l && typeof l === 'object' && (l.lo || l.subj || l.srs || l.read)) ? l : null;
    if (LEGACY && LEGACY.theme) P.theme = LEGACY.theme;
  }
  if (P.list.length && !P.list.some(p => p.id === P.active)) P.active = P.list[0].id;
}
/** True until at least one profile exists. */
const needsSetup = () => !P.list.length;
/** Accept either app version's shape. */
function migrate(old) {
  const s = blank();
  Object.assign(s.lo, old.lo || {});
  Object.entries(old.subj || {}).forEach(([k, v]) => s.subj[k] = Object.assign({}, v));
  Object.assign(s.read, old.read || {}); Object.assign(s.srs, old.srs || {});
  Object.assign(s.newToday, old.newToday || {}); Object.assign(s.best, old.best || {});
  Object.assign(s.wrong, old.wrong || {}); Object.assign(s.seen, old.seen || {});
  if (Array.isArray(old.flights)) s.flights = old.flights.slice();
  s.hist = old.hist || []; s.d1 = old.d1 || ''; s.d2 = old.d2 || '';
  // profile settings — these were silently dropped once, which lost the whole setup
  ['stage', 'field', 'wx', 'planId', 'learnSort', 'medical', 'medClass'].forEach(k => {
    if (old[k]) s[k] = old[k];
  });
  if (Array.isArray(old.customOrder) && old.customOrder.length === 9) s.customOrder = old.customOrder.slice();
  if (Array.isArray(old.cardSubs)) s.cardSubs = old.cardSubs.slice();
  // Anything else the file carries is copied verbatim. A whitelist silently drops new
  // fields the day they are added, which is exactly how the setup got lost before.
  Object.keys(old).forEach(k => {
    if (k in s) return;
    const v = old[k];
    if (v == null || typeof v === 'function') return;
    s[k] = (typeof v === 'object') ? JSON.parse(JSON.stringify(v)) : v;
  });
  return s;
}
function loadState() { S = P.active ? Object.assign(blank(), readJSON(dataKey(P.active), {})) : blank(); }

const activeName = () => (P.list.find(p => p.id === P.active) || { name: '?' }).name;
const initials = n => n.trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase() || '?';

let saveTimer = null;
function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(flush, 120);
}
function flush() { clearTimeout(saveTimer); if (P.active) writeJSON(dataKey(P.active), S); }
function saveProfiles() { writeJSON(PKEY, P); }

function switchProfile(id) {
  flush();
  P.active = id; saveProfiles();
  loadState();
  tab('home');
}
function uniqueName(name) {
  let n = name.trim().slice(0, 24) || 'Imported';
  if (!P.list.some(p => p.name.toLowerCase() === n.toLowerCase())) return n;
  for (let i = 2; ; i++) {
    const c = n + ' ' + i;
    if (!P.list.some(p => p.name.toLowerCase() === c.toLowerCase())) return c;
  }
}
function addProfile(name, data) {
  const first = !P.list.length;
  const id = newId();
  P.list.push({ id: id, name: uniqueName(name) });
  saveProfiles();
  writeJSON(dataKey(id), data ? migrate(data) : blank());
  if (first) LEGACY = null;
  switchProfile(id);            // flushes the outgoing profile, then loads this one
  return id;
}
function deleteProfile(id) {
  P.list = P.list.filter(p => p.id !== id);
  try { localStorage.removeItem(dataKey(id)); } catch (e) {}
  // deleting the last profile is allowed: it drops you back to first-run setup
  P.active = P.list.length ? (P.active === id ? P.list[0].id : P.active) : '';
  saveProfiles(); loadState();
}

loadProfiles();
loadState();

const sub = c => (S.subj[c] = Object.assign({ st: 'none', att: 0, score: '', date: '', booked: '' }, S.subj[c]));

/* The 18- and 24-month clocks used to depend on two dates typed by hand, which meant the
   app's most important safety feature stayed silent for anyone who recorded pass dates
   per subject instead. Both are now derived from the exam record unless overridden. */

/** Exams with a future booking, soonest first. */
function upcoming() {
  const t = today();
  return SUBJECTS.map(x => ({ s: x, b: sub(x.code).booked }))
    .filter(o => o.b && sub(o.s.code).st !== 'passed' &&
                 new Date(o.b + 'T00:00:00').getTime() >= t)
    .sort((a, b) => a.b.localeCompare(b.b));
}
const daysUntil = iso => daysTo(new Date(iso + 'T00:00:00'));

/** Every pass date recorded against a subject, sorted. */
function recordedDates() {
  return SUBJECTS.map(x => sub(x.code).date).filter(Boolean).sort();
}
/** Earliest recorded pass — a lower bound on when the clock really started. */
function autoD1() { const d = recordedDates(); return d.length ? d[0] : ''; }
/** Latest recorded pass, but only once all nine are actually passed. */
function autoD2() {
  if (passed() < 9) return '';
  const d = SUBJECTS.filter(x => sub(x.code).st === 'passed').map(x => sub(x.code).date).filter(Boolean).sort();
  return d.length === 9 ? d[8] : '';
}
const getD1 = () => S.d1 || autoD1();
const getD2 = () => S.d2 || autoD2();
const d1IsDerived = () => !S.d1 && !!autoD1();
const d2IsDerived = () => !S.d2 && !!autoD2();

/* ============================ helpers ============================ */

const $ = s => document.querySelector(s);
const APP = $('#app');
const SUBJECTS = window.SYLLABUS.slice().sort((a, b) => a.code.localeCompare(b.code));
const SC = window.SC;
const byCode = {}; SUBJECTS.forEach(s => byCode[s.code] = s);

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const allLO = s => s.groups.reduce((a, g) => a + g.items.length, 0);
const doneLO = s => s.groups.reduce((a, g) => a + g.items.filter(i => S.lo[i.c]).length, 0);
const pctLO = s => Math.round(doneLO(s) / Math.max(1, allLO(s)) * 100);
const arts = c => (SC[c] && SC[c].articles) || [];
const readCount = c => arts(c).filter(a => S.read[a.id]).length;
const passed = () => SUBJECTS.filter(s => sub(s.code).st === 'passed').length;

const DAY = 864e5;
const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime(); };
const fmt = d => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
const daysTo = d => Math.ceil((d - today()) / DAY);
const todayKey = () => new Date().toISOString().slice(0, 10);

/** 18 months counted from the END of the calendar month of the first attempt. */
function deadline18(iso) {
  if (!iso) return null;
  const d = new Date(iso + 'T00:00:00');
  return isNaN(d) ? null : new Date(d.getFullYear(), d.getMonth() + 19, 0);
}
/** 24 months from the day the last exam was passed. */
function deadline24(iso) {
  if (!iso) return null;
  const d = new Date(iso + 'T00:00:00');
  return isNaN(d) ? null : new Date(d.getFullYear(), d.getMonth() + 24, d.getDate());
}

function ring(pct, size, col, w) {
  const r = (size - (w || 5)) / 2, c = 2 * Math.PI * r;
  return `<svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke="var(--fill)" stroke-width="${w || 5}"/>
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke="var(--${col || 'blue'})"
      stroke-width="${w || 5}" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - pct / 100)}"/>
  </svg>`;
}
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; };

/* ============================ router ============================ */

const TABS = ['home', 'learn', 'quiz', 'cards', 'plan', 'profiles'];
let stack = [{ v: 'home' }];
const VIEWS = {};

function go(v, p) { stack.push({ v: v, p: p }); render(); }
function back() { if (stack.length > 1) { stack.pop(); render(); } }
function tab(v) { stack = [{ v: v }]; render(); }

const SETUP_OK = { welcome: 1, importfile: 1 };   // views allowed before any profile exists

function render() {
  if (needsSetup() && !SETUP_OK[stack[stack.length - 1].v]) stack = [{ v: 'welcome' }];
  const setup = needsSetup();
  document.getElementById('tabs').hidden = setup;
  APP.style.paddingBottom = setup ? '40px' : '';
  const top = stack[stack.length - 1];
  APP.scrollTop = 0;
  APP.innerHTML = '';
  VIEWS[top.v](top.p || {});
  const root = TABS.indexOf(stack[0].v) >= 0 ? stack[0].v : 'home';
  document.querySelectorAll('#tabs button').forEach(b =>
    b.setAttribute('aria-selected', b.dataset.v === root));
  mountMaps();
  window.scrollTo(0, 0);
}

function html(s) { APP.insertAdjacentHTML('beforeend', s); }
function navbar(title, rightHtml) {
  const root = stack.length < 2;
  html(`<div class="nav">${root ? '<div class="back" style="visibility:hidden">&#8249;</div>'
      : '<button class="back" id="nbBack">&#8249;&nbsp;Back</button>'}
    <div class="ttl">${esc(title)}</div><div class="rt">${rightHtml || ''}</div></div>`);
  if ($('#nbBack')) $('#nbBack').onclick = back;
}
function bind(sel, fn, ev) {
  document.querySelectorAll(sel).forEach(n => n.addEventListener(ev || 'click', fn));
}

/* ============================ HOME ============================ */

VIEWS.home = function () {
  const totLO = SUBJECTS.reduce((a, s) => a + allLO(s), 0);
  const dnLO = SUBJECTS.reduce((a, s) => a + doneLO(s), 0);
  const totArt = SUBJECTS.reduce((a, s) => a + arts(s.code).length, 0);
  const dnArt = SUBJECTS.reduce((a, s) => a + readCount(s.code), 0);
  const p = passed();
  const due = dueCards().length;
  const newAvail = Math.max(0, NEW_CARDS_PER_DAY - (S.newToday[todayKey()] || 0));
  const greet = greeting(activeName().split(' ')[0]);

  html(`<div class="hd" style="display:flex;align-items:flex-start;gap:12px">
    <div style="flex:1;min-width:0">
      <h1>${greet}</h1>
      <div class="sub">${p === 9 ? 'All nine exams passed.' : (9 - p) + ' exam' + (p === 8 ? '' : 's') + ' to go · ' + dnArt + '/' + totArt + ' articles read'}</div>
    </div>
    <button id="srch" aria-label="Search" style="flex:none;width:40px;height:40px;border-radius:50%;
      background:var(--fill);margin-top:4px;display:grid;place-items:center">
      <svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:none;stroke:var(--tx2);stroke-width:2;
        stroke-linecap:round"><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5 21 21"/></svg></button>
    <button id="avat" title="Switch profile" style="flex:none;width:40px;height:40px;border-radius:50%;
      background:var(--blue);color:#fff;font-size:15px;font-weight:600;margin-top:4px">${esc(initials(activeName()))}</button>
  </div>`);
  $('#srch').onclick = () => { SEARCH_Q = ''; go('search'); };
  $('#avat').onclick = () => go('profiles');

  const strip = wxStrip();
  if (strip) { html(strip); $('#wxb').onclick = () => go('wx'); }

  // --- overall progress
  const overall = Math.round((dnLO / Math.max(1, totLO) * 0.6 + dnArt / Math.max(1, totArt) * 0.4) * 100);
  html(`<div class="hero" style="display:flex;align-items:center;gap:16px">
    <div style="position:relative;flex:none">${ring(overall, 68, 'blue', 6)}
      <div style="position:absolute;inset:0;display:grid;place-items:center;font-size:17px;font-weight:700">${overall}%</div></div>
    <div style="flex:1;min-width:0">
      <div class="ch" style="margin:0">Course progress</div>
      <div class="p" style="font-size:13.5px;margin-top:3px">${dnLO} of ${totLO} learning objectives · ${dnArt} of ${totArt} articles</div>
      <div class="pbar" style="margin-top:9px"><i style="width:${overall}%"></i></div>
    </div></div>`);

  // --- next up
  const next = nextUp();
  if (next) {
    const m = META[next.code];
    html(`<h2 class="sec">Pick up where you left off</h2>
      <button class="grp row" id="nextUp">
        <div class="ic" style="--c:var(--${m.c})">${next.code}</div>
        <div class="tx"><b>${esc(next.label)}</b><i>${esc(byCode[next.code].name)}</i></div>
        <div class="chev">&#8250;</div></button>`);
    $('#nextUp').onclick = () => next.go();
  }

  // --- daily actions
  html(`<h2 class="sec">Today</h2><div class="tiles">
    <button class="tile" id="tCards">
      <div class="k">Flashcards</div>
      <div class="n" style="color:var(--${due ? 'orange' : newAvail ? 'blue' : 'green'})">${due || Math.min(newAvail, newCards().length)}</div>
      <div class="s">${due ? 'due for review'
        : Math.min(newAvail, newCards().length) ? 'new cards to learn'
        : 'caught up for today'}</div>
    </button>
    <button class="tile" id="tQuiz">
      <div class="k">Quick quiz</div>
      <div class="n" style="color:var(--blue)">10</div>
      <div class="s">mixed questions</div>
    </button></div>`);
  $('#tCards').onclick = () => tab('cards');
  $('#tQuiz').onclick = () => startQuiz({ codes: SUBJECTS.map(s => s.code), n: 10, mode: 'practice', title: 'Quick quiz' });

  // --- what is booked next
  const up = upcoming();
  if (up.length) {
    html('<h2 class="sec">Booked</h2><div class="grp">' + up.slice(0, 3).map(o => {
      const n = daysUntil(o.b);
      return `<button class="row" data-bk="${o.s.code}">
        <div class="ic" style="--c:var(--${META[o.s.code].c})">${o.s.code}</div>
        <div class="tx"><b>${esc(o.s.name)}</b><i>${fmt(new Date(o.b + 'T00:00:00'))} · ${pctLO(o.s)}% of the syllabus studied</i></div>
        <span class="bdg ${n <= 3 ? 'r' : n <= 10 ? 'o' : 'b'}">${n === 0 ? 'today' : n === 1 ? 'tomorrow' : n + ' days'}</span>
        <div class="chev">&#8250;</div></button>`;
    }).join('') + '</div>');
    bind('[data-bk]', e => go('subject', { code: e.currentTarget.dataset.bk, tab: 'ex' }));
  }

  // --- flying
  const lg = logStats();
  html(`<h2 class="sec">Flying</h2>
    <button class="grp row" id="hLog">
      <div class="ic" style="--c:var(--teal)">&#9992;</div>
      <div class="tx"><b>Flight log</b><i>${lg.n ? lg.total.toFixed(1) + ' hours · ' + lg.n + ' flight' + (lg.n === 1 ? '' : 's') + ' · ' + lg.solo.toFixed(1) + ' solo'
        : 'Log your hours and track them against the PPL requirements'}</i></div>
      <div class="chev">&#8250;</div></button>`);
  $('#hLog').onclick = () => go('log');

  // --- home airfield
  if (S.field) {
    const links = [];
    if (S.field) links.push(`<a class="row" href="https://metar-taf.com/${esc(S.field)}" target="_blank" rel="noopener">
      <div class="ic" style="--c:var(--indigo)">&#9788;</div>
      <div class="tx"><b>METAR &amp; TAF</b><i>${esc(S.field)} — if the field reports one</i></div><div class="chev">&#8599;</div></a>`);
    const af = S.field && afByCode(S.field);
    html(`<h2 class="sec">${af ? esc(af[1]) : (S.field ? esc(S.field) : 'My airfield')}</h2>
      <div class="grp">${links.join('')}</div>`);
    if (S.field) {
      html(`<button class="btn sec sm" style="margin-top:10px" id="wxMore">Conditions at ${esc(S.field)}</button>`);
      $('#wxMore').onclick = () => go('wx');
    }
  }

  // --- deadline strip, only once relevant
  const dl = deadline18(getD1()), vd = deadline24(getD2());
  if (dl || vd) {
    const rows = [];
    if (dl && p < 9) {
      const n = daysTo(dl);
      rows.push(`<button class="row" data-goplan="1"><div class="ic" style="--c:var(--${n < 90 ? 'red' : n < 180 ? 'orange' : 'green'})">18</div>
        <div class="tx"><b>${n < 0 ? 'Window expired' : n + ' days left'}</b><i>All nine by ${fmt(dl)}</i></div><div class="chev">&#8250;</div></button>`);
    }
    if (vd) {
      const n = daysTo(vd);
      rows.push(`<button class="row" data-goplan="1"><div class="ic" style="--c:var(--${n < 90 ? 'red' : n < 180 ? 'orange' : 'green'})">24</div>
        <div class="tx"><b>${n < 0 ? 'Theory expired' : n + ' days left'}</b><i>Apply for the licence by ${fmt(vd)}</i></div><div class="chev">&#8250;</div></button>`);
    }
    if (rows.length) { html(`<h2 class="sec">Clock</h2><div class="grp">${rows.join('')}</div>`); }
    bind('[data-goplan]', () => tab('plan'));
  }

  // --- exam blocks at a glance
  html('<h2 class="sec">Exam blocks</h2><div class="grp">' + planBlocks().map(b => {
    const done = b.subs.filter(c => sub(c).st === 'passed').length;
    const pc = Math.round(b.subs.reduce((a, c) => a + pctLO(byCode[c]), 0) / b.subs.length);
    return `<button class="row" data-blk="${b.no}">
      <div class="ic" style="--c:var(--${done === b.subs.length ? 'green' : 'blue'})">${b.no}</div>
      <div class="tx"><b>${esc(b.title)}</b><i>${b.subs.map(c => byCode[c].name).join(' · ')}</i>
        <div class="pbar" style="margin-top:7px"><i style="width:${pc}%"></i></div></div>
      <div class="val">${done}/${b.subs.length}</div></button>`;
  }).join('') + '</div>');
  bind('[data-blk]', e => tab('plan'));

  html(`<h2 class="sec">Reference</h2><div class="grp">
    <button class="row" id="rRules"><div class="ic" style="--c:var(--indigo)">&#167;</div>
      <div class="tx"><b>The rules that bind you</b><i>Quoted from Part-FCL, July 2026</i></div><div class="chev">&#8250;</div></button>
    <button class="row" id="rBooks"><div class="ic" style="--c:var(--brown)">&#128214;</div>
      <div class="tx"><b>Books</b><i>Pooleys volume for each exam</i></div><div class="chev">&#8250;</div></button>
    <button class="row" id="rTrn"><div class="ic" style="--c:var(--teal)">&#9992;</div>
      <div class="tx"><b>My training</b><i>${S.stage ? esc(stageLabel(S.stage)) : 'Stage not set'}${S.field ? ' · ' + esc(S.field) : ''}</i></div><div class="chev">&#8250;</div></button>
    <button class="row" id="rSrc"><div class="ic" style="--c:var(--tx3)">&#8599;</div>
      <div class="tx"><b>Sources &amp; settings</b><i>Every source, plus export</i></div><div class="chev">&#8250;</div></button>
    </div>`);
  $('#rTrn').onclick = () => go('training');
  $('#rRules').onclick = () => go('rules');
  $('#rBooks').onclick = () => go('books');
  $('#rSrc').onclick = () => go('sources');

  html(`<div class="foot">Personal revision aid — not a CAA publication.<br>
    Confirm anything that matters with your ATO/DTO, Ground Examiner or the CAA.</div>`);
};

/* A few phrasings per time of day, so opening the app twice does not feel scripted.
   The small hours belong to the night before, not to the morning. */
const GREETINGS = [
  [5,  ['Still up, {n}?', 'Burning the midnight oil, {n}', 'Late one, {n}',
        'Can\u2019t sleep, {n}?', 'Night flying, {n}?']],
  [12, ['Good morning, {n}', 'Morning, {n}', 'Morning, {n}', 'Up early, {n}?']],
  [18, ['Good afternoon, {n}', 'Afternoon, {n}', 'Afternoon, {n}']],
  [24, ['Good evening, {n}', 'Evening, {n}', 'Evening, {n}']]
];

/**
 * Stable for the whole of one day in one band: a greeting that changed on every
 * render would flicker every time you switched tab.
 */
function greeting(name) {
  const d = new Date(), h = d.getHours();
  const pool = (GREETINGS.find(g => h < g[0]) || GREETINGS[3])[1];
  const seed = d.getFullYear() * 372 + d.getMonth() * 31 + d.getDate() + (h < 5 ? 7 : h < 12 ? 1 : h < 18 ? 3 : 5);
  return esc(pool[seed % pool.length].replace('{n}', name));
}

/** The single most useful next action: an unread article, else an unstudied subject. */
function nextUp() {
  const order = SUBJECTS.slice().sort((a, b) => posOf(a.code) - posOf(b.code) || a.code.localeCompare(b.code));
  for (const s of order) {
    if (sub(s.code).st === 'passed') continue;
    const a = arts(s.code).find(x => !S.read[x.id]);
    if (a) return { code: s.code, label: 'Read: ' + a.title, go: () => go('article', { code: s.code, id: a.id }) };
  }
  for (const s of order) {
    if (sub(s.code).st === 'passed') continue;
    if (pctLO(s) < 100) return { code: s.code, label: 'Objectives: ' + s.name, go: () => go('subject', { code: s.code, tab: 'obj' }) };
  }
  return null;
}

/* ============================ LEARN ============================ */

VIEWS.learn = function () {
  html(`<div class="hd"><h1>Learn</h1><div class="sub">37 articles and 551 learning objectives across nine subjects</div></div>`);
  const order = (S.learnSort === 'block')
    ? SUBJECTS.slice().sort((a, b) => posOf(a.code) - posOf(b.code) || a.code.localeCompare(b.code))
    : SUBJECTS;
  html(`<button class="grp row" id="lsearch" style="margin-bottom:14px">
    <div class="ic" style="--c:var(--tx3)">&#9906;</div>
    <div class="tx"><b>Search everything</b><i>Articles, objectives, questions and cards</i></div>
    <div class="chev">&#8250;</div></button>`);
  $('#lsearch').onclick = () => { SEARCH_Q = ''; go('search'); };

  html(`<div class="seg" id="lsort">
    <button data-s="code" aria-selected="${S.learnSort !== 'block'}">By subject number</button>
    <button data-s="block" aria-selected="${S.learnSort === 'block'}">By exam block</button></div>`);
  bind('#lsort button', e => { S.learnSort = e.currentTarget.dataset.s; save(); render(); });

  html('<div class="grp">' + order.map(s => {
    const m = META[s.code], st = sub(s.code), pc = pctLO(s);
    const ra = readCount(s.code), ta = arts(s.code).length;
    return `<button class="row" data-sub="${s.code}">
      <div class="ic" style="--c:var(--${m.c})">${s.code}</div>
      <div class="tx"><b>${esc(s.name)}</b>
        <i>${ra}/${ta} articles · ${doneLO(s)}/${allLO(s)} objectives · ${m.book}</i>
        <div class="pbar" style="margin-top:7px"><i style="width:${pc}%;background:var(--${m.c})"></i></div></div>
      ${st.st === 'passed' ? '<span class="bdg g">Passed</span>' : `<div class="val">${pc}%</div>`}
      <div class="chev">&#8250;</div></button>`;
  }).join('') + '</div>');
  bind('[data-sub]', e => go('subject', { code: e.currentTarget.dataset.sub }));
};

VIEWS.subject = function (p) {
  const s = byCode[p.code], m = META[p.code], st = sub(p.code);
  const which = p.tab || 'art';
  navbar(s.name, '');
  const pc0 = pctLO(s);
  html(`<div class="banner" style="--c:var(--${m.c})">
    <div class="code">${s.code}</div>
    <h1>${esc(s.name)}</h1>
    <div class="m">Block ${blockOf(s.code)} of your plan · ${m.book} · CAA ${s.cap}</div>
    <div class="pb"><i style="width:${pc0}%"></i></div>
    <div class="m" style="margin-top:8px">${readCount(s.code)}/${arts(s.code).length} articles ·
      ${doneLO(s)}/${allLO(s)} objectives${st.st === 'passed' ? ' · exam passed' : ''}</div>
  </div>`);

  html(`<div class="seg" id="stab">
    <button data-x="art" aria-selected="${which === 'art'}">Articles</button>
    <button data-x="obj" aria-selected="${which === 'obj'}">Objectives</button>
    <button data-x="ex" aria-selected="${which === 'ex'}">Exam</button></div>`);
  bind('#stab button', e => { stack[stack.length - 1].p = { code: p.code, tab: e.currentTarget.dataset.x }; render(); });

  if (which === 'art') {
    html(`<button class="btn" id="qz" style="margin-bottom:16px">Test me on ${esc(s.name)}</button>`);
    $('#qz').onclick = () => startQuiz({ codes: [s.code], n: 20, mode: 'exam', title: s.name });
    html('<div class="grp">' + arts(s.code).map(a => `
      <button class="row" data-art="${a.id}">
        <div class="ic" style="--c:var(--${S.read[a.id] ? 'green' : m.c})">${S.read[a.id] ? '&#10003;' : '&#9679;'}</div>
        <div class="tx"><b>${esc(a.title)}</b><i>${a.mins} min read</i></div>
        <div class="chev">&#8250;</div></button>`).join('') + '</div>');
    bind('[data-art]', e => go('article', { code: s.code, id: e.currentTarget.dataset.art }));

  } else if (which === 'obj') {
    const done = doneLO(s), tot = allLO(s);
    html(`<div class="card" style="margin-bottom:14px"><div style="display:flex;justify-content:space-between;font-size:15px;font-weight:600">
      <span>${done} of ${tot} studied</span><span>${pctLO(s)}%</span></div>
      <div class="pbar" style="margin-top:9px"><i style="width:${pctLO(s)}%;background:var(--${m.c})"></i></div>
      <div class="brow" style="margin-top:12px">
        <button class="btn sec sm" id="allOn">Mark all</button>
        <button class="btn grey sm" id="allOff">Clear all</button></div></div>`);
    $('#allOn').onclick = () => { s.groups.forEach(g => g.items.forEach(i => S.lo[i.c] = 1)); save(); render(); };
    $('#allOff').onclick = () => { s.groups.forEach(g => g.items.forEach(i => delete S.lo[i.c])); save(); render(); };

    s.groups.forEach(g => {
      html(`<div class="gtitle"><span>${g.code}</span><div>${esc(g.title)}</div></div><div class="grp">` +
        g.items.map(i => `<button class="lo${S.lo[i.c] ? ' on' : ''}" data-lo="${i.c}">
          <span class="bx"><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg></span>
          <span class="t">${i.t}${i.a ? '' : '<span class="ctx" title="printed in CAP2090 but not ticked in the PPL Aeroplane column">CTX</span>'}<em>${i.c}</em></span>
        </button>`).join('') + '</div>');
    });
    bind('[data-lo]', e => {
      const k = e.currentTarget.dataset.lo;
      if (S.lo[k]) delete S.lo[k]; else S.lo[k] = 1;
      e.currentTarget.classList.toggle('on', !!S.lo[k]);
      save();
    });
    html(`<div class="foot">Learning objectives verbatim from CAA ${s.cap}.
      <span class="ctx" style="position:static">CTX</span> marks one printed in the document but not
      ticked in its PPL Aeroplane column.</div>`);

  } else {
    const best = S.best[s.code];
    html(`<div class="card"><div class="ch">Exam record</div>
      <div class="fld"><label class="f">Status</label>
        <select id="fSt">${STATUSES.map(([v, l]) => `<option value="${v}"${v === st.st ? ' selected' : ''}>${l}</option>`).join('')}</select></div>
      <div class="fld"><label class="f">Attempts used (max 4)</label>
        <select id="fAt">${[0, 1, 2, 3, 4].map(v => `<option value="${v}"${v === st.att ? ' selected' : ''}>${v} of 4</option>`).join('')}</select></div>
      <div class="fld"><label class="f">Score achieved</label><input type="number" id="fSc" min="0" max="100" placeholder="%" value="${st.score}"></div>
      <div class="fld"><label class="f">Date passed</label><input type="date" id="fDt" value="${st.date}"></div>
      <div class="fld"><label class="f">Booked for</label><input type="date" id="fBk" value="${st.booked || ''}">
        <div class="tiny" style="margin-top:5px">Shows a countdown on Home and the Exams tab.</div></div>
    </div>`);
    $('#fSt').onchange = e => { st.st = e.target.value; save(); };
    $('#fAt').onchange = e => { st.att = +e.target.value; save(); render(); };
    $('#fSc').oninput = e => { st.score = e.target.value; save(); };
    $('#fDt').onchange = e => { st.date = e.target.value; save(); };
    $('#fBk').onchange = e => { st.booked = e.target.value; save(); };

    if (st.att >= 3 && st.st !== 'passed')
      html(`<div class="note r" style="margin-top:12px"><b>Three attempts used</b>
        A fourth failure voids every pass you hold, in every subject. Do the further training your
        school requires, and do not book until you are comfortably above 75% on practice papers.</div>`);

    html(`<div class="card" style="margin-top:12px">
      <div class="ch">Practice</div>
      <div style="color:var(--tx2);font-size:14px;margin-bottom:12px">
        ${SC[s.code].quiz.length} questions in the bank${best ? ' · best score ' + best + '%' : ''}</div>
      <div class="brow">
        <button class="btn sm" id="mock">Mock (20)</button>
        <button class="btn sec sm" id="prac">Practice</button></div></div>`);
    $('#mock').onclick = () => startQuiz({ codes: [s.code], n: 20, mode: 'exam', title: s.name });
    $('#prac').onclick = () => startQuiz({ codes: [s.code], n: 15, mode: 'practice', title: s.name });
  }
};

VIEWS.article = function (p) {
  const s = byCode[p.code];
  const a = arts(p.code).find(x => x.id === p.id);
  const list = arts(p.code), idx = list.indexOf(a);
  navbar(s.name, '');
  html(`<div class="banner" style="--c:var(--${META[p.code].c})">
    <div class="code">${s.code}</div>
    <div class="m" style="margin:0 0 6px">${esc(s.name)} · ${a.mins} min read</div>
    <h1>${esc(a.title)}</h1></div>`);
  html(`<div class="article">${a.body}</div>`);
  expandDiagrams();

  const done = !!S.read[a.id];
  html(`<button class="btn ${done ? 'grey' : 'grn'}" id="mk">${done ? '&#10003; Read' : 'Mark as read'}</button>`);
  $('#mk').onclick = () => { if (S.read[a.id]) delete S.read[a.id]; else S.read[a.id] = 1; save(); render(); };

  const nav = [];
  if (idx > 0) nav.push(`<button class="btn sec" data-nav="${list[idx - 1].id}">&#8249; Previous</button>`);
  if (idx < list.length - 1) nav.push(`<button class="btn sec" data-nav="${list[idx + 1].id}">Next &#8250;</button>`);
  if (nav.length) html(`<div class="brow" style="margin-top:10px">${nav.join('')}</div>`);
  bind('[data-nav]', e => { stack[stack.length - 1].p = { code: p.code, id: e.currentTarget.dataset.nav }; render(); });

  html(`<button class="btn sec" style="margin-top:10px" id="tq">Test me on ${esc(s.name)}</button>`);
  $('#tq').onclick = () => startQuiz({ codes: [s.code], n: 15, mode: 'practice', title: s.name });
};

/** Replace <figure data-d="id"> placeholders with the drawing, caption and a11y label. */
function expandDiagrams() {
  document.querySelectorAll('figure[data-d]').forEach(f => {
    const d = window.DIAG && window.DIAG[f.dataset.d];
    if (!d) { f.remove(); return; }        // never leave an empty box behind
    f.innerHTML = '<div class="dgwrap">' + d.svg + '</div>' +
      '<div class="swipe">Swipe the diagram sideways to see all of it</div>' +
      '<figcaption>' + d.cap + '</figcaption>';
    const svg = f.querySelector('svg');
    if (svg && d.alt) svg.setAttribute('aria-label', d.alt);
  });
}

/* ============================ QUIZ ============================ */

let Q = null;

function bank(codes) {
  const out = [];
  codes.forEach(c => (SC[c] ? SC[c].quiz : []).forEach((q, i) => out.push(Object.assign({ code: c, i: i }, q))));
  return out;
}

const qKey = q => q.code + ':' + q.i;

/** Present a bank question with its options shuffled, keeping its identity. */
function prep(q) {
  const pairs = q.a.map((t, i) => ({ t: t, ok: i === q.c }));
  shuffle(pairs);
  return { code: q.code, i: q.i, q: q.q, opts: pairs.map(x => x.t),
           c: pairs.findIndex(x => x.ok), why: q.why, ref: q.ref };
}

/** Prefer questions you have seen least, so a small bank does not just repeat. */
function pickLeastSeen(pool, n) {
  return shuffle(pool)
    .map(q => ({ q: q, s: S.seen[qKey(q)] || 0 }))
    .sort((a, b) => a.s - b.s)
    .slice(0, n).map(x => x.q);
}

function startQuiz(opt) {
  const pool = opt.pool || bank(opt.codes);
  const qs = pickLeastSeen(pool, Math.min(opt.n, pool.length)).map(prep);
  Q = { qs: qs, at: 0, ans: new Array(qs.length).fill(-1), mode: opt.mode, title: opt.title,
        t0: Date.now(), codes: opt.codes, drill: !!opt.drill };
  go('quizrun');
}

VIEWS.quiz = function () {
  html(`<div class="hd"><h1>Quiz</h1><div class="sub">385 questions across the nine subjects</div></div>`);

  const mp = mistakePool();
  if (mp.length) {
    html(`<h2 class="sec">Your weak spots</h2><div class="grp">
      <button class="row" id="drill"><div class="ic" style="--c:var(--red)">${mp.length}</div>
        <div class="tx"><b>Drill my mistakes</b><i>Questions you have got wrong, worst first.
          Get one right and it leaves the pile</i></div><div class="chev">&#8250;</div></button></div>`);
    $('#drill').onclick = () => startQuiz({
      codes: [...new Set(mp.map(q => q.code))], pool: mp,
      n: Math.min(20, mp.length), mode: 'practice', title: 'My mistakes', drill: true });
    const bySub = {};
    mp.forEach(q => bySub[q.code] = (bySub[q.code] || 0) + 1);
    const worst = Object.entries(bySub).sort((a, b) => b[1] - a[1]).slice(0, 3);
    if (worst.length) html(`<div class="tiny" style="margin:8px 0 0 4px">Most mistakes in
      ${worst.map(([c, k]) => esc(byCode[c].name) + ' (' + k + ')').join(', ')}.</div>`);
  }

  html(`<h2 class="sec">Full mock</h2><div class="grp">
    <button class="row" id="m45"><div class="ic" style="--c:var(--blue)">45</div>
      <div class="tx"><b>All-subject mock</b><i>45 questions, 5 per subject, exam mode</i></div><div class="chev">&#8250;</div></button>
    <button class="row" id="m30"><div class="ic" style="--c:var(--indigo)">30</div>
      <div class="tx"><b>Mixed practice</b><i>30 questions with instant explanations</i></div><div class="chev">&#8250;</div></button>
    <button class="row" id="m10"><div class="ic" style="--c:var(--teal)">10</div>
      <div class="tx"><b>Quick ten</b><i>A short mixed set</i></div><div class="chev">&#8250;</div></button>
  </div>`);
  $('#m45').onclick = () => startBalanced(5, 'exam', 'All-subject mock');
  $('#m30').onclick = () => startQuiz({ codes: SUBJECTS.map(s => s.code), n: 30, mode: 'practice', title: 'Mixed practice' });
  $('#m10').onclick = () => startQuiz({ codes: SUBJECTS.map(s => s.code), n: 10, mode: 'practice', title: 'Quick ten' });

  html('<h2 class="sec">Single-subject mock</h2><div class="grp">' + SUBJECTS.map(s => {
    const m = META[s.code], b = S.best[s.code];
    return `<button class="row" data-mk="${s.code}">
      <div class="ic" style="--c:var(--${m.c})">${s.code}</div>
      <div class="tx"><b>${esc(s.name)}</b><i>${SC[s.code].quiz.length} questions · ${
        bank([s.code]).filter(q => !S.seen[qKey(q)]).length} not yet seen</i></div>
      ${b != null ? `<span class="bdg ${b >= PASS_MARK ? 'g' : 'o'}">${b}%</span>` : '<span class="bdg">—</span>'}
      <div class="chev">&#8250;</div></button>`;
  }).join('') + '</div>');
  bind('[data-mk]', e => {
    const c = e.currentTarget.dataset.mk;
    startQuiz({ codes: [c], n: 20, mode: 'exam', title: byCode[c].name });
  });

  if (S.hist.length) {
    html('<h2 class="sec">Recent attempts</h2><div class="grp">' + S.hist.slice(0, 10).map(h =>
      `<div class="row"><div class="ic" style="--c:var(--${h.p >= PASS_MARK ? 'green' : 'red'})">${h.p}</div>
        <div class="tx"><b>${esc(h.t)}</b><i>${h.c}/${h.n} correct · ${new Date(h.d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</i></div>
        <span class="bdg ${h.p >= PASS_MARK ? 'g' : 'r'}">${h.p >= PASS_MARK ? 'Pass' : 'Fail'}</span></div>`).join('') + '</div>');
    html(`<button class="btn grey sm" style="margin-top:12px" id="clrH">Clear history</button>`);
    $('#clrH').onclick = () => { S.hist = []; save(); render(); };
  }

  html(`<div class="foot">Pass mark 75%, no negative marking — so never leave a question blank.<br>
    These questions were written for this app; they are not the CAA question bank.</div>`);
};

/** A mock that draws an equal number from every subject. */
function startBalanced(per, mode, title) {
  let qs = [];
  SUBJECTS.forEach(s => { qs = qs.concat(pickLeastSeen(bank([s.code]), per)); });
  shuffle(qs);
  Q = { qs: qs.map(prep), at: 0, ans: new Array(qs.length).fill(-1), mode: mode, title: title,
        t0: Date.now(), codes: SUBJECTS.map(s => s.code), drill: false };
  go('quizrun');
}

/** Questions previously answered wrong, worst first. */
function mistakePool() {
  const all = bank(SUBJECTS.map(x => x.code));
  return all.filter(q => (S.wrong[qKey(q)] || 0) > 0)
            .sort((a, b) => (S.wrong[qKey(b)] || 0) - (S.wrong[qKey(a)] || 0));
}

VIEWS.quizrun = function () {
  const q = Q.qs[Q.at], n = Q.qs.length;
  const chosen = Q.ans[Q.at];
  const reveal = Q.mode === 'practice' && chosen >= 0;
  navbar(Q.title, `<button id="qQuit" style="color:var(--blue)">End</button>`);
  $('#qQuit').onclick = () => askConfirm({
    title: 'End this quiz?', body: 'Your answers so far will be scored, and any you have not reached count as blank.',
    yes: 'End and score' }, finishQuiz);

  html(`<div class="qwrap">
    <div class="qmeta"><span>Question ${Q.at + 1} of ${n}</span>
      <span style="color:var(--${META[q.code].c})">${esc(byCode[q.code].name)}</span></div>
    <div class="pbar"><i style="width:${(Q.at + 1) / n * 100}%"></i></div>
    <div class="qtext">${esc(q.q)}</div>
    <div id="opts">${q.opts.map((o, i) => {
      let cls = '';
      if (reveal) cls = i === q.c ? ' ok' : (i === chosen ? ' no' : '');
      else if (i === chosen) cls = ' sel';
      return `<button class="opt${cls}" data-o="${i}"${reveal ? ' disabled' : ''}>
        <span class="lt">${'ABCD'[i]}</span><span>${esc(o)}</span></button>`;
    }).join('')}</div>
    ${reveal ? `<div class="why"><b>${chosen === q.c ? 'Correct.' : 'Not quite.'}</b> ${q.why}
      ${q.ref ? `<span class="ref">${esc(q.ref)}</span>` : ''}</div>` : ''}
  </div>`);

  bind('[data-o]', e => {
    Q.ans[Q.at] = +e.currentTarget.dataset.o;
    if (Q.mode === 'practice') render();
    else { if (Q.at < n - 1) { Q.at++; render(); } else render(); }
  });

  const answeredAll = Q.ans.every(a => a >= 0);
  const btns = [];
  if (Q.at > 0) btns.push('<button class="btn grey" id="qPrev">&#8249; Back</button>');
  if (Q.at < n - 1) btns.push(`<button class="btn${chosen < 0 ? ' sec' : ''}" id="qNext">Next &#8250;</button>`);
  else btns.push(`<button class="btn grn" id="qDone">Finish${answeredAll ? '' : ' (' + Q.ans.filter(a => a < 0).length + ' blank)'}</button>`);
  html(`<div class="qfoot"><div class="brow">${btns.join('')}</div></div>`);
  if ($('#qPrev')) $('#qPrev').onclick = () => { Q.at--; render(); };
  if ($('#qNext')) $('#qNext').onclick = () => { Q.at++; render(); };
  if ($('#qDone')) $('#qDone').onclick = finishQuiz;
};

function finishQuiz() {
  // remember what was got wrong, so it can be drilled later
  Q.qs.forEach((q, i) => {
    const k = qKey(q);
    S.seen[k] = (S.seen[k] || 0) + 1;
    if (Q.ans[i] === q.c) { if (S.wrong[k]) { S.wrong[k]--; if (!S.wrong[k]) delete S.wrong[k]; } }
    else S.wrong[k] = (S.wrong[k] || 0) + 1;
  });
  const correct = Q.qs.reduce((a, q, i) => a + (Q.ans[i] === q.c ? 1 : 0), 0);
  Q.correct = correct;
  Q.pct = Math.round(correct / Q.qs.length * 100);
  Q.secs = Math.round((Date.now() - Q.t0) / 1000);
  S.hist.unshift({ t: Q.title, n: Q.qs.length, c: correct, p: Q.pct, d: Date.now() });
  S.hist = S.hist.slice(0, 40);
  if (Q.codes.length === 1) {
    const c = Q.codes[0];
    if (S.best[c] == null || Q.pct > S.best[c]) S.best[c] = Q.pct;
  }
  save();
  stack.pop();            // drop quizrun so Back from results lands sensibly
  go('quizres');
}

VIEWS.quizres = function () {
  const pass = Q.pct >= PASS_MARK;
  navbar('Result', '');
  html(`<div class="score">
    <div style="position:relative">${ring(Q.pct, 150, pass ? 'green' : 'red', 11)}
      <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center">
        <div class="big" style="color:var(--${pass ? 'green' : 'red'})">${Q.pct}<span style="font-size:26px">%</span></div>
      </div></div>
    <div class="lbl" style="color:var(--${pass ? 'green' : 'red'})">${pass ? 'Pass' : 'Below the pass mark'}</div>
    <div class="sub">${Q.correct} of ${Q.qs.length} correct · pass mark ${PASS_MARK}% ·
      ${Math.floor(Q.secs / 60)}m ${Q.secs % 60}s</div></div>`);

  // per-subject breakdown when the quiz spanned more than one
  if (Q.codes.length > 1) {
    const by = {};
    Q.qs.forEach((q, i) => {
      by[q.code] = by[q.code] || { n: 0, c: 0 };
      by[q.code].n++; if (Q.ans[i] === q.c) by[q.code].c++;
    });
    html('<h2 class="sec">By subject</h2><div class="grp">' + Object.keys(by).sort().map(c => {
      const b = by[c], p = Math.round(b.c / b.n * 100);
      return `<div class="row"><div class="ic" style="--c:var(--${META[c].c})">${c}</div>
        <div class="tx"><b>${esc(byCode[c].name)}</b><i>${b.c} of ${b.n} correct</i>
        <div class="pbar" style="margin-top:7px"><i style="width:${p}%;background:var(--${p >= PASS_MARK ? 'green' : 'orange'})"></i></div></div>
        <div class="val">${p}%</div></div>`;
    }).join('') + '</div>');
  }

  const wrong = Q.qs.map((q, i) => i).filter(i => Q.ans[i] !== Q.qs[i].c);
  html(`<div class="brow" style="margin-top:18px">
    <button class="btn" id="rv">Review ${wrong.length ? 'mistakes' : 'answers'}</button>
    <button class="btn sec" id="ag">Try again</button></div>`);
  $('#rv').onclick = () => go('quizreview', { only: wrong.length ? 'wrong' : 'all' });
  $('#ag').onclick = () => {
    stack.pop();
    startQuiz({ codes: Q.codes, n: Q.qs.length, mode: Q.mode, title: Q.title });
  };
  html(`<button class="btn grey" style="margin-top:10px" id="dn">Done</button>`);
  $('#dn').onclick = () => tab('quiz');
};

VIEWS.quizreview = function (p) {
  const only = p.only;
  navbar('Review', '');
  const idxs = Q.qs.map((q, i) => i).filter(i => only !== 'wrong' || Q.ans[i] !== Q.qs[i].c);
  html(`<div class="seg" id="rvseg">
    <button data-x="wrong" aria-selected="${only === 'wrong'}">Mistakes (${Q.qs.length - Q.correct})</button>
    <button data-x="all" aria-selected="${only === 'all'}">All (${Q.qs.length})</button></div>`);
  bind('#rvseg button', e => { stack[stack.length - 1].p = { only: e.currentTarget.dataset.x }; render(); });

  if (!idxs.length) { html(`<div class="empty"><div class="em">&#127881;</div><h3>Nothing wrong</h3><p>Every question correct.</p></div>`); return; }

  idxs.forEach(i => {
    const q = Q.qs[i], a = Q.ans[i];
    html(`<div style="margin:20px 0 0">
      <div class="qmeta"><span>Question ${i + 1}</span><span class="mono">${q.code}</span></div>
      <div class="qtext" style="font-size:18.5px;margin:6px 0 12px">${esc(q.q)}</div>
      ${q.opts.map((o, j) => `<div class="opt${j === q.c ? ' ok' : (j === a ? ' no' : '')}">
        <span class="lt">${'ABCD'[j]}</span><span>${esc(o)}</span></div>`).join('')}
      <div class="why"><b>${a === q.c ? 'You were right.' : (a < 0 ? 'Left blank.' : 'You chose ' + 'ABCD'[a] + '.')}</b>
        ${q.why}${q.ref ? `<span class="ref">${esc(q.ref)}</span>` : ''}</div></div>`);
  });
  html(`<button class="btn grey" style="margin-top:22px" id="dn2">Done</button>`);
  $('#dn2').onclick = () => tab('quiz');
};

/* ============================ FLASHCARDS (SM-2 style) ============================ */

function allCards() {
  const out = [];
  SUBJECTS.forEach(s => (SC[s.code].cards || []).forEach((c, i) =>
    out.push({ key: s.code + ':' + i, code: s.code, f: c.f, b: c.b, ref: c.ref })));
  return out;
}
function dueCards(codes) {
  const now = Date.now();
  return allCards().filter(c => {
    if (codes && codes.indexOf(c.code) < 0) return false;
    const r = S.srs[c.key];
    return r && r.due <= now;
  });
}
function newCards(codes) {
  return allCards().filter(c => !S.srs[c.key] && (!codes || codes.indexOf(c.code) >= 0));
}

/** Grade 1 Again, 2 Hard, 3 Good, 4 Easy. Intervals in days. */
function grade(key, g) {
  const r = S.srs[key] || { ease: 2.5, iv: 0, reps: 0 };
  if (g === 1) { r.ease = Math.max(1.3, r.ease - 0.2); r.iv = 0; r.reps = 0; }
  else if (g === 2) { r.ease = Math.max(1.3, r.ease - 0.15); r.iv = r.iv ? Math.max(1, r.iv * 1.2) : 1; r.reps++; }
  else if (g === 3) { r.iv = r.iv ? r.iv * r.ease : 1; r.reps++; }
  else { r.ease = Math.min(3.0, r.ease + 0.15); r.iv = r.iv ? r.iv * r.ease * 1.3 : 4; r.reps++; }
  r.iv = Math.min(r.iv, 365);
  // "Again" comes back in ten minutes rather than tomorrow, so the session teaches it
  r.due = g === 1 ? Date.now() + 6e5 : Date.now() + r.iv * DAY;
  r.last = Date.now();
  S.srs[key] = r;
  save();
  return r;
}
function ivLabel(key, g) {
  const r = S.srs[key] || { ease: 2.5, iv: 0 };
  let iv;
  if (g === 1) return '10m';
  if (g === 2) iv = r.iv ? Math.max(1, r.iv * 1.2) : 1;
  else if (g === 3) iv = r.iv ? r.iv * r.ease : 1;
  else iv = r.iv ? r.iv * r.ease * 1.3 : 4;
  iv = Math.min(iv, 365);
  if (iv < 1) return '1d';
  if (iv < 10) return (Math.round(iv * 10) / 10) + 'd';
  if (iv < 60) return Math.round(iv) + 'd';
  return Math.round(iv / 30) + 'mo';
}

let CARD = null;

VIEWS.cards = function () {
  const codes = S.cardSubs && S.cardSubs.length ? S.cardSubs : null;
  const due = dueCards(codes), fresh = newCards(codes);
  const usedToday = S.newToday[todayKey()] || 0;
  const newAvail = Math.max(0, NEW_CARDS_PER_DAY - usedToday);
  const learned = allCards().filter(c => S.srs[c.key]).length;
  const total = allCards().length;

  html(`<div class="hd"><h1>Flashcards</h1>
    <div class="sub">Spaced repetition across ${total} cards</div></div>`);

  html(`<div class="tiles">
    <div class="tile"><div class="k">Due now</div>
      <div class="n" style="color:var(--${due.length ? 'orange' : 'green'})">${due.length}</div>
      <div class="s">${due.length ? 'ready to review' : 'all caught up'}</div></div>
    <div class="tile"><div class="k">New today</div>
      <div class="n" style="color:var(--blue)">${Math.min(newAvail, fresh.length)}</div>
      <div class="s">${fresh.length} never seen</div></div></div>`);

  html(`<div class="card" style="margin-top:12px">
    <div style="display:flex;justify-content:space-between;font-size:14px;color:var(--tx2);margin-bottom:8px">
      <span>${learned} of ${total} cards started</span><span>${Math.round(learned / total * 100)}%</span></div>
    <div class="pbar"><i style="width:${learned / total * 100}%;background:var(--green)"></i></div></div>`);

  const n = due.length + Math.min(newAvail, fresh.length);
  html(`<button class="btn ${n ? '' : 'grey'}" style="margin-top:16px" id="startS"${n ? '' : ' disabled'}>
    ${n ? 'Start session · ' + n + ' card' + (n === 1 ? '' : 's') : 'Nothing due right now'}</button>`);
  if (n) $('#startS').onclick = () => startCards(codes);

  if (!n && fresh.length) html(`<div class="note b" style="margin-top:12px"><b>Daily new-card limit reached</b>
    You have introduced ${usedToday} new cards today. That cap keeps tomorrow's review pile manageable —
    come back tomorrow, or lift it below.</div>
    <button class="btn sec" style="margin-top:10px" id="more">Add 10 more today</button>`);
  if ($('#more')) $('#more').onclick = () => { S.newToday[todayKey()] = Math.max(0, usedToday - 10); save(); render(); };

  html('<h2 class="sec">Filter by subject</h2><div class="grp">' + SUBJECTS.map(s => {
    const on = !codes || codes.indexOf(s.code) >= 0;
    const d = dueCards([s.code]).length, tot = SC[s.code].cards.length;
    return `<button class="row" data-cs="${s.code}">
      <div class="ic" style="--c:var(--${on ? META[s.code].c : 'tx3'})">${s.code}</div>
      <div class="tx"><b>${esc(s.name)}</b><i>${tot} cards${d ? ' · ' + d + ' due' : ''}</i></div>
      <div class="val" style="color:var(--${on ? 'blue' : 'tx3'})">${on ? '&#10003;' : ''}</div></button>`;
  }).join('') + '</div>');
  bind('[data-cs]', e => {
    const c = e.currentTarget.dataset.cs;
    let cur = S.cardSubs && S.cardSubs.length ? S.cardSubs.slice() : SUBJECTS.map(s => s.code);
    cur = cur.indexOf(c) >= 0 ? cur.filter(x => x !== c) : cur.concat([c]);
    if (!cur.length) cur = SUBJECTS.map(s => s.code);
    S.cardSubs = cur.length === SUBJECTS.length ? null : cur;
    save(); render();
  });

  html(`<button class="btn grey sm" style="margin-top:14px" id="rst">Reset all card scheduling</button>`);
  $('#rst').onclick = () => {
    askConfirm({ title: 'Reset all card scheduling?',
      body: 'Every card goes back to new. Your articles, objectives and exam record are not affected.',
      yes: 'Reset scheduling', danger: true }, () => {
      S.srs = {}; S.newToday = {}; save(); render();
      alertish('Card scheduling reset.');
    });
  };
  html(`<div class="foot">Again returns the card in ten minutes. Hard, Good and Easy space it out
    using an SM-2 style interval that grows each time you get it right.</div>`);
};

function startCards(codes) {
  const usedToday = S.newToday[todayKey()] || 0;
  const newAvail = Math.max(0, NEW_CARDS_PER_DAY - usedToday);
  const q = shuffle(dueCards(codes)).concat(shuffle(newCards(codes)).slice(0, newAvail));
  CARD = { q: q, done: 0, total: q.length, show: false, again: 0 };
  go('cardrun');
}

VIEWS.cardrun = function () {
  if (!CARD || !CARD.q.length) {
    navbar('Flashcards', '');
    html(`<div class="empty"><div class="em">&#9989;</div><h3>Session complete</h3>
      <p>${CARD ? CARD.done : 0} cards reviewed.${CARD && CARD.again ? ' ' + CARD.again + ' marked Again will come back in ten minutes.' : ''}</p></div>`);
    html(`<button class="btn" id="cd">Done</button>`);
    $('#cd').onclick = () => tab('cards');
    return;
  }
  const c = CARD.q[0];
  navbar('Flashcards', `<span style="color:var(--tx2);font-size:15px">${CARD.done}/${CARD.total}</span>`);
  html(`<div class="pbar" style="margin-top:12px"><i style="width:${CARD.done / CARD.total * 100}%"></i></div>
    <div style="margin-top:10px"><span class="bdg" style="background:var(--${META[c.code].c});color:#fff">${c.code} ${esc(byCode[c.code].name)}</span>
    ${S.srs[c.key] ? '' : '<span class="bdg b" style="margin-left:6px">New</span>'}</div>`);

  html(`<div class="fc">
    <div class="q">${esc(c.f)}</div>
    ${CARD.show ? `<div class="hr"></div><div class="a">${esc(c.b)}</div>
      ${c.ref ? `<div class="rf">${esc(c.ref)}</div>` : ''}` : ''}
  </div>`);

  if (!CARD.show) {
    html(`<button class="btn" style="margin-top:14px" id="rev">Show answer</button>`);
    $('#rev').onclick = () => { CARD.show = true; render(); };
  } else {
    html(`<div class="grades">
      <button class="g1" data-g="1">Again<small>${ivLabel(c.key, 1)}</small></button>
      <button class="g2" data-g="2">Hard<small>${ivLabel(c.key, 2)}</small></button>
      <button class="g3" data-g="3">Good<small>${ivLabel(c.key, 3)}</small></button>
      <button class="g4" data-g="4">Easy<small>${ivLabel(c.key, 4)}</small></button></div>`);
    bind('[data-g]', e => {
      const g = +e.currentTarget.dataset.g;
      const isNew = !S.srs[c.key];
      grade(c.key, g);
      if (isNew) { const k = todayKey(); S.newToday[k] = (S.newToday[k] || 0) + 1; }
      CARD.q.shift();
      if (g === 1) { CARD.q.push(c); CARD.again++; CARD.total++; }
      CARD.done++; CARD.show = false;
      save(); render();
    });
  }
};

/* ============================ PLAN ============================ */

VIEWS.plan = function () {
  const p = passed();
  html(`<div class="hd"><h1>Exams</h1><div class="sub">Your clocks, attempts and exam order</div></div>`);

  const dateField = (id, label, val, derived, hint) => `<div class="fld">
    <div class="flabel"><label class="f" for="${id}">${label}</label>
      ${val ? `<button class="clr" data-clr="${id}">Clear</button>` : ''}</div>
    <input type="date" id="${id}" value="${val || derived}">
    <div class="tiny" style="margin-top:6px">${!val && derived
      ? '<b style="color:var(--green)">Taken from your exam record.</b> Set a date here to override it.'
      : hint}</div></div>`;
  html(`<div class="card">
    ${dateField('d1', 'First exam attempt', S.d1, autoD1(),
      'Starts the 18-month window. Any attempt counts, pass or fail.')}
    ${dateField('d2', 'Ninth exam passed', S.d2, autoD2(),
      'Starts the 24 months you have to apply for the licence.')}
  </div>`);
  if (d1IsDerived()) html(`<div class="note o" style="margin-top:10px"><b>Check this date</b>
    It is your earliest recorded <b>pass</b>. The 18-month clock legally starts at your first
    <b>attempt</b>, so if you sat and failed a paper before ${fmt(new Date(autoD1() + 'T00:00:00'))},
    your real deadline is earlier. Enter that date above if so.</div>`);
  $('#d1').onchange = e => { S.d1 = e.target.value; save(); render(); };
  $('#d2').onchange = e => { S.d2 = e.target.value; save(); render(); };
  bind('[data-clr]', e => {
    if (e.currentTarget.dataset.clr === 'd1') S.d1 = ''; else S.d2 = '';
    save(); render();
  });

  const dl = deadline18(getD1()), vd = deadline24(getD2());
  html(`<div class="tiles" style="margin-top:12px">
    <div class="tile"><div class="k">Exams passed</div><div class="n">${p}<span class="of">of 9</span></div>
      <div class="s">${p === 9 ? 'complete set' : (9 - p) + ' to go'}</div></div>
    ${dl ? tileFor('18-month window', dl, p >= 9, 'm18') : `<div class="tile">${infoBtn('m18')}
      <div class="k">18-month window</div>
      <div class="n" style="color:var(--tx3)">—</div><div class="s">Not started</div></div>`}
    ${vd ? tileFor('Theory expires', vd, false, 'm24') : `<div class="tile">${infoBtn('m24')}
      <div class="k">24-month validity</div>
      <div class="n" style="color:var(--tx3)">—</div><div class="s">Set once all nine pass</div></div>`}
    <div class="tile">${infoBtn('att')}<div class="k">Attempts at risk</div>
      <div class="n" style="color:var(--${SUBJECTS.some(s => sub(s.code).att >= 3 && sub(s.code).st !== 'passed') ? 'red' : 'green'})">
        ${SUBJECTS.filter(s => sub(s.code).att >= 3 && sub(s.code).st !== 'passed').length}</div>
      <div class="s">subjects on 3 of 4</div></div>
  </div>`);

  bind('[data-info]', e => { e.stopPropagation(); go('clockinfo', { id: e.currentTarget.dataset.info }); });

  // --- booked
  const upc = upcoming();
  if (upc.length) {
    html('<h2 class="sec">Booked</h2><div class="grp">' + upc.map(o => {
      const n = daysUntil(o.b);
      return `<button class="row" data-bk2="${o.s.code}">
        <div class="ic" style="--c:var(--${META[o.s.code].c})">${o.s.code}</div>
        <div class="tx"><b>${esc(o.s.name)}</b><i>${fmt(new Date(o.b + 'T00:00:00'))} · ${sub(o.s.code).att} of 4 attempts used</i></div>
        <span class="bdg ${n <= 3 ? 'r' : n <= 10 ? 'o' : 'b'}">${n === 0 ? 'today' : n === 1 ? 'tomorrow' : n + ' days'}</span>
        <div class="chev">&#8250;</div></button>`;
    }).join('') + '</div>');
    bind('[data-bk2]', e => go('subject', { code: e.currentTarget.dataset.bk2, tab: 'ex' }));
  }

  // --- risk watch
  html('<h2 class="sec">Risk watch</h2>');
  risks().forEach(r => html(`<div class="note ${r[0]}"><b>${esc(r[1])}</b>${r[2]}</div>`));

  // --- order
  const pl = activePlan();
  html(`<h2 class="sec">Exam order</h2>
    <button class="grp row" id="pickPlan">
      <div class="ic" style="--c:var(--indigo)">&#8645;</div>
      <div class="tx"><b>${esc(pl.name)}</b><i>${esc(pl.desc)}</i></div>
      <div class="chev">&#8250;</div></button>
    <div class="note b" style="margin-top:12px"><b>There is no required order</b>
      The CAA sets no sequence and no sittings limit for a PPL, so this is entirely your choice.
      Pick whichever suits how you study.</div>`);
  $('#pickPlan').onclick = () => go('plans');
  planBlocks().forEach(b => {
    const done = b.subs.filter(c => sub(c).st === 'passed').length;
    html(`<div class="grp" style="margin-top:12px">
      <div class="row" style="background:var(--card2)">
        <div class="ic" style="--c:var(--${done === b.subs.length ? 'green' : 'blue'})">${b.no}</div>
        <div class="tx"><b style="font-weight:600">${esc(b.title)}</b></div>
        <span class="bdg ${done === b.subs.length ? 'g' : ''}">${done}/${b.subs.length}</span></div>
      ${b.subs.map(c => {
        const s = byCode[c], st = sub(c), m = META[c];
        const lbl = STATUSES.find(x => x[0] === st.st)[1];
        return `<button class="row" data-ps="${c}">
          <div class="ic" style="--c:var(--${m.c})">${c}</div>
          <div class="tx"><b>${esc(s.name)}</b><i>${pctLO(s)}% studied · ${st.att} of 4 attempts · ${m.book}</i></div>
          <span class="bdg ${st.st === 'passed' ? 'g' : st.st === 'ready' ? 'o' : ''}">${lbl}</span>
          <div class="chev">&#8250;</div></button>`;
      }).join('')}
      <div class="row plain"><div class="p" style="font-size:13.5px">${b.why}</div></div>
    </div>`);
  });
  bind('[data-ps]', e => go('subject', { code: e.currentTarget.dataset.ps, tab: 'ex' }));

  html(`<h2 class="sec">Reference</h2><div class="grp">
    <button class="row" id="pr1"><div class="ic" style="--c:var(--indigo)">&#167;</div>
      <div class="tx"><b>The rules that bind you</b></div><div class="chev">&#8250;</div></button>
    <button class="row" id="pr2"><div class="ic" style="--c:var(--brown)">&#128214;</div>
      <div class="tx"><b>Books</b></div><div class="chev">&#8250;</div></button>
    <button class="row" id="pr3"><div class="ic" style="--c:var(--tx3)">&#8599;</div>
      <div class="tx"><b>Sources &amp; settings</b></div><div class="chev">&#8250;</div></button></div>`);
  $('#pr1').onclick = () => go('rules');
  $('#pr2').onclick = () => go('books');
  $('#pr3').onclick = () => go('sources');
};

const infoBtn = id => `<button class="info" data-info="${id}" aria-label="More about this">i</button>`;

function tileFor(k, d, muted, info) {
  const n = daysTo(d);
  const col = muted ? 'tx3' : n < 0 ? 'red' : n < 90 ? 'red' : n < 180 ? 'orange' : 'green';
  return `<div class="tile">${info ? infoBtn(info) : ''}<div class="k">${k}</div>
    <div class="n" style="color:var(--${col})">${n < 0 ? 'over' : n}</div>
    <div class="s">${n < 0 ? 'expired ' + fmt(d) : 'days · ' + fmt(d)}</div></div>`;
}

function risks() {
  const out = [], p = passed();
  const three = SUBJECTS.filter(s => sub(s.code).att >= 3 && sub(s.code).st !== 'passed');
  if (three.length) out.push(['r', 'Fourth attempt territory',
    three.map(s => s.name).join(', ') + ' — three attempts used. A fourth failure voids every pass ' +
    'you hold, in every subject. Do the further training your school requires, and do not book ' +
    'until you are comfortably above 75% on practice papers.']);

  const two = SUBJECTS.filter(s => sub(s.code).att === 2 && sub(s.code).st !== 'passed');
  if (two.length) out.push(['o', 'Two attempts used',
    two.map(s => s.name).join(', ') + ' — one more failure and you are into the further-training ' +
    'requirement before a fourth and final attempt.']);

  const dl = deadline18(getD1());
  if (dl && p < 9) {
    const n = daysTo(dl), left = 9 - p, per = Math.floor(n / left), s = left > 1 ? 's' : '';
    if (n < 0) out.push(['r', '18-month window has expired',
      'Under FCL.025(b)(4) the complete set must be retaken. Speak to your school and the CAA before booking anything.']);
    else if (per < 21) out.push(['r', left + ' exam' + s + ' left, ' + n + ' days, ' + per + ' days each',
      'Tighter than a single resit cycle allows — a failed paper cannot be re-sat inside the same sitting window. ' +
      'Miss ' + fmt(dl) + ' and all nine must be retaken.']);
    else if (per < 45) out.push(['o', left + ' exam' + s + ' left, ' + n + ' days, ' + per + ' days each',
      'Workable but with little slack. Sit your strongest subjects first so a resit has room before ' + fmt(dl) + '.']);
    else if (n < 180) out.push(['o', 'Deadline inside six months',
      left + ' exam' + s + ' by ' + fmt(dl) + ' — about ' + per + ' days each, room for one resit apiece.']);
  }
  if (!getD1() && p === 0) out.push(['b', 'Nothing at risk yet',
    'Your 18-month clock has not started. It starts at the end of the calendar month in which you ' +
    'first sit any paper — so sit exam one when you are genuinely into ground school, not as a way ' +
    'of feeling started.']);

  const vd = deadline24(getD2());
  if (vd && daysTo(vd) >= 0 && daysTo(vd) < 180) out.push(['o', 'Theory validity running down',
    'Your completed set expires ' + fmt(vd) + '. The licence application must be in by then.']);
  if (p === 9 && !getD2()) out.push(['o', 'Add your final pass date',
    'All nine are marked passed but no pass date is recorded against them, so the 24-month clock '
    + 'is not being tracked. Add the date to any subject on the Exams list, or type it above.']);

  if (S.medical) {
    const dm = daysTo(new Date(S.medical + 'T00:00:00'));
    if (dm < 0) out.push(['r', 'Medical certificate has expired',
      'It lapsed on ' + fmt(new Date(S.medical + 'T00:00:00')) + '. You cannot fly solo without a '
      + 'valid medical — book a renewal before your next lesson.']);
    else if (dm < 60) out.push(['o', 'Medical expires in ' + dm + ' day' + (dm === 1 ? '' : 's'),
      'Renew before ' + fmt(new Date(S.medical + 'T00:00:00')) + '. AME appointments are not always '
      + 'quick to get.']);
  }

  upcoming().forEach(o => {
    const n = daysUntil(o.b), pc = pctLO(o.s), best = S.best[o.s.code];
    if (n <= 14 && (pc < 80 || (best != null && best < PASS_MARK))) {
      out.push(['o', o.s.name + ' in ' + (n === 0 ? 'less than a day' : n + ' day' + (n === 1 ? '' : 's')),
        pc < 80 ? 'Only ' + pc + '% of the objectives are ticked'
                : 'Your best mock is ' + best + '%, below the 75% pass mark'
        + '. Sittings are not rationed for a PPL — moving the booking costs you nothing but the fee.']);
    }
  });

  if (!out.length) out.push(['g', 'Nothing flagged', 'No attempt or deadline risks detected.']);
  return out;
}

/* ============================ AIRFIELD LOOKUP ============================ */

const AF = () => window.AIRFIELDS || [];
/** Split a comma or space separated list into known ICAO codes. */
const codesOf = v => (v || '').toUpperCase().split(/[,\s]+/).map(x => x.trim())
  .filter(x => x.length === 4 && afByCode(x));
const afByCode = c => AF().find(a => a[0] === c);

/** Up to `n` airfields matching a code prefix, or a word in the name or town. */
function afSearch(q, n) {
  q = (q || '').trim().toUpperCase();
  if (q.length < 2) return [];
  const byCode = [], byName = [];
  AF().forEach(a => {
    if (a[0].indexOf(q) === 0) byCode.push(a);
    else if ((a[1] + ' ' + a[2]).toUpperCase().indexOf(q) >= 0) byName.push(a);
  });
  return byCode.concat(byName).slice(0, n || 6);
}

/** Wire an ICAO input to a suggestion list and a resolved-name line. */
function wireAirfield(inputSel, listSel, foundSel, onPick, multi) {
  const inp = $(inputSel), list = $(listSel), found = $(foundSel);
  if (!inp || !list || !found) return;
  // for a via field, only the segment after the last comma is being typed
  const head = () => multi ? inp.value.slice(0, inp.value.lastIndexOf(',') + 1) : '';
  const tail = () => (multi ? inp.value.slice(inp.value.lastIndexOf(',') + 1) : inp.value).trim();
  let lastExact = '';
  const paint = () => {
    const v = tail().toUpperCase();
    const exact = v.length === 4 ? afByCode(v) : null;
    // typing a code in full counts as picking it, so callers still get their callback
    if (exact && exact[0] !== lastExact) { lastExact = exact[0]; if (onPick) onPick(exact); }
    if (!exact) lastExact = '';
    found.innerHTML = exact
      ? (multi ? codesOf(inp.value).map(c => (afByCode(c) || [c, c])[1]).join(' → ')
               : esc(exact[1]) + (exact[2] ? '<i>' + esc(exact[2]) + '</i>' : ''))
      : '';
    found.style.display = exact ? 'block' : 'none';
    const hits = exact ? [] : afSearch(v, 6);
    list.innerHTML = hits.map(a => '<button data-af="' + a[0] + '"><span class="cd">' + a[0] +
      '</span><span class="nm">' + esc(a[1]) + (a[2] ? '<i>' + esc(a[2]) + '</i>' : '') +
      '</span></button>').join('');
    list.style.display = hits.length ? 'block' : 'none';
    list.querySelectorAll('[data-af]').forEach(b => b.onclick = () => {
      inp.value = multi ? (head() + (head() ? ' ' : '') + b.dataset.af) : b.dataset.af;
      const row = afByCode(b.dataset.af);
      if (onPick && row) onPick(row);
      inp.dispatchEvent(new Event('input'));
      paint();
    });
  };
  // Allow a longer string so places can be searched by name, not just by code.
  inp.addEventListener('input', () => {
    const ok = multi ? /[^A-Z0-9 ,'-]/g : /[^A-Z0-9 '-]/g;
    inp.value = inp.value.toUpperCase().replace(ok, '').slice(0, multi ? 60 : 28);
    paint();
  });
  paint();
}

/* ============================ AIRFIELD WEATHER ============================ */
/* Open-Meteo is a forecast MODEL, not an observation. It is the only no-key,
   CORS-enabled source a static page can reach — aviationweather.gov and AVWX both
   refuse a browser request from this origin. Everything derived from it is therefore
   labelled as a model estimate, and the UI says plainly that it is not for flight
   planning. The ceiling is estimated from the temperature/dew-point spread, the same
   rule of thumb taught in the Meteorology articles. */

/* A CheckWX key ships with the app at the owner's explicit request: it is a free tier with a
   daily cap, shared with friends and family. Anyone can read it in a public repo, so if the
   quota gets burned, clear it in Sources & settings and use your own. A key entered there
   always wins over this one. */
const DEFAULT_CW_KEY = '7875a97109c94fac9d12bb1461470397';
const cwKey = () => (P.cwKey || DEFAULT_CW_KEY);

const WX_TTL = 20 * 60 * 1000;
let WX = { state: 'idle', data: null, code: '' };

function wxCacheKey(c) { return 'ppl-wx:' + c; }

function wxCategory(visM, ceilFt) {
  // Standard flight categories, which are defined on ceiling and visibility.
  if (ceilFt < 500 || visM < 1600) return ['LIFR', 'red'];
  if (ceilFt < 1000 || visM < 5000) return ['IFR', 'red'];
  if (ceilFt <= 3000 || visM <= 8000) return ['MVFR', 'orange'];
  return ['VFR', 'green'];
}

function wxDerive(cur) {
  const visM = cur.visibility == null ? 20000 : cur.visibility;
  const spread = (cur.temperature_2m == null || cur.dew_point_2m == null)
    ? null : cur.temperature_2m - cur.dew_point_2m;
  const lowCloud = cur.cloud_cover_low == null ? cur.cloud_cover : cur.cloud_cover_low;
  // Only call it a ceiling if there is enough low cloud to form one (BKN or more).
  const ceilFt = (lowCloud >= 50 && spread != null) ? Math.max(100, Math.round(spread * 400)) : 99999;
  const [cat, col] = wxCategory(visM, ceilFt);
  return {
    visM: visM, ceilFt: ceilFt, lowCloud: lowCloud, spread: spread,
    wdir: Math.round(cur.wind_direction_10m), wspd: Math.round(cur.wind_speed_10m),
    gust: cur.wind_gusts_10m == null ? null : Math.round(cur.wind_gusts_10m),
    temp: Math.round(cur.temperature_2m), dew: Math.round(cur.dew_point_2m),
    qnh: cur.pressure_msl == null ? null : Math.round(cur.pressure_msl),
    cat: cat, col: col, time: cur.time
  };
}

/* ---- render conditions the way a pilot reads them ---- */

const pad = (v, n) => String(Math.abs(Math.round(v))).padStart(n, '0');
/** METAR temperature group: negatives are prefixed M, e.g. M03. */
const tGroup = t => (t < 0 ? 'M' : '') + pad(t, 2);

/** Cloud amount code from a percentage cover, via oktas. */
function cloudCode(pct) {
  if (pct == null) return null;
  const oktas = Math.round(pct / 12.5);
  if (oktas <= 0) return 'NCD';
  if (oktas <= 2) return 'FEW';
  if (oktas <= 4) return 'SCT';
  if (oktas <= 7) return 'BKN';
  return 'OVC';
}

/** Visibility as a METAR group: 9999 for 10 km or more. */
function visGroup(m) {
  if (m >= 9999) return '9999';
  if (m >= 5000) return String(Math.round(m / 500) * 500);
  return pad(Math.round(m / 100) * 100, 4);
}

/** The whole thing in METAR form. For model data this is a rendering, not an observation. */
function metarString(d, code) {
  if (d.source === 'metar' && d.raw) return d.raw;
  const bits = [code || ''];
  // METARs report wind direction to the nearest 10 degrees
  const dir10 = ((Math.round(d.wdir / 10) * 10) % 360) || (d.wspd ? 360 : 0);
  bits.push(pad(dir10, 3) + pad(d.wspd, 2) + (d.gust ? 'G' + pad(d.gust, 2) : '') + 'KT');
  bits.push(visGroup(d.visM));
  const cc = cloudCode(d.lowCloud);
  bits.push((cc === 'NCD' || cc == null) ? 'NCD' : cc + pad(Math.round(d.ceilFt / 100), 3));
  if (d.temp != null && d.dew != null) bits.push(tGroup(d.temp) + '/' + tGroup(d.dew));
  if (d.qnh) bits.push('Q' + pad(d.qnh, 4));
  return bits.filter(Boolean).join(' ');
}

/** Plain-English decode, so the strip doubles as METAR practice. */
function metarDecode(d) {
  const out = [];
  out.push(['Wind', d.wspd === 0 ? 'calm' :
    'from ' + pad(Math.round(d.wdir / 10) * 10 % 360 || 360, 3) + '° true at ' + d.wspd + ' kt' +
    (d.gust ? ', gusting ' + d.gust + ' kt' : '')]);
  out.push(['Visibility', d.visM >= 9999 ? '10 km or more' : visLabel(d.visM)]);
  const NAMES = { FEW: 'few (1–2 oktas)', SCT: 'scattered (3–4)', BKN: 'broken (5–7)', OVC: 'overcast (8)' };
  if (d.source === 'metar') {
    out.push(['Cloud', d.clouds || d.cloudGroup || 'no significant cloud reported']);
  } else {
    const cc = cloudCode(d.lowCloud);
    out.push(['Cloud', (cc === 'NCD' || cc == null) ? 'no significant cloud detected'
      : NAMES[cc] + ' at about ' + (Math.round(d.ceilFt / 100) * 100) + ' ft']);
  }
  if (d.temp != null) out.push(['Temperature / dew point', d.temp + '°C / ' + d.dew + '°C' +
    (d.spread != null ? ' — spread ' + d.spread.toFixed(1) + '°C' : '')]);
  if (d.qnh) out.push(['QNH', d.qnh + ' hPa']);
  return out;
}

/** Parse a CheckWX decoded METAR into the same shape as the model estimate. */
function wxFromMetar(m) {
  const w = m.wind || {}, v = m.visibility || {}, c = (m.clouds || []);
  // CheckWX reports layer height as `feet`; there is also a top-level ceiling object
  const ft = x => x ? (x.feet != null ? x.feet : x.base_feet_agl) : null;
  const ceilLayer = m.ceiling || c.find(x => x.code === 'BKN' || x.code === 'OVC');
  const cat = (m.flight_category || '').toUpperCase();
  const col = cat === 'VFR' ? 'green' : cat === 'MVFR' ? 'orange' : cat ? 'red' : 'blue';
  // the reported layers, so the card can show the real group rather than guessing from cover
  const layer = ceilLayer || c.find(x => ft(x) != null) || null;
  return {
    source: 'metar', raw: m.raw_text || '', observed: m.observed || '',
    visM: v.meters != null ? Math.round(parseFloat(v.meters)) : 20000,
    ceilFt: ft(ceilLayer) != null ? ft(ceilLayer) : 99999,
    cloudGroup: layer && ft(layer) != null
      ? (layer.code || '') + pad(Math.round(ft(layer) / 100), 3)
      : (c.length ? (c[0].code || 'NSC') : 'NCD'),
    qnh: m.barometer ? Math.round(m.barometer.hpa != null ? m.barometer.hpa : m.barometer.mb) : null,
    lowCloud: null, spread: null,
    wdir: w.degrees == null ? 0 : Math.round(w.degrees),
    wspd: w.speed_kts == null ? 0 : Math.round(w.speed_kts),
    gust: w.gust_kts == null ? null : Math.round(w.gust_kts),
    temp: m.temperature && m.temperature.celsius != null ? Math.round(m.temperature.celsius) : null,
    dew: m.dewpoint && m.dewpoint.celsius != null ? Math.round(m.dewpoint.celsius) : null,
    clouds: c.map(x => (x.text || x.code || '') + (ft(x) != null ? ' at ' + ft(x) + ' ft' : '')).join(', '),
    cat: cat || 'METAR', col: col
  };
}

function wxLoad(code, done) {
  const af = afByCode(code);
  if (!af) { WX = { state: 'none', code: code }; done && done(); return; }
  const cached = readJSON(wxCacheKey(code), null);
  if (cached && Date.now() - cached.at < WX_TTL) {
    WX = { state: 'ok', data: cached.d, code: code, at: cached.at, cached: true };
    done && done(); return;
  }
  WX = { state: 'loading', code: code };
  done && done();

  const settle = d => {
    writeJSON(wxCacheKey(code), { at: Date.now(), d: d });
    WX = { state: 'ok', data: d, code: code, at: Date.now() };
    const v = stack[stack.length - 1].v;
    if (v === 'home' || v === 'wx') render();
  };
  const fail = why => {
    WX = { state: 'fail', code: code, why: why };
    const v = stack[stack.length - 1].v;
    if (v === 'home' || v === 'wx') render();
  };

  // Model fallback — no key needed, but a forecast rather than an observation.
  const model = note => {
    const u = 'https://api.open-meteo.com/v1/forecast?latitude=' + af[3] + '&longitude=' + af[4] +
      '&current=temperature_2m,dew_point_2m,visibility,cloud_cover,cloud_cover_low,' +
      'pressure_msl,wind_speed_10m,wind_direction_10m,wind_gusts_10m&wind_speed_unit=kn';
    fetch(u).then(r => r.json()).then(j => {
      if (!j || !j.current) throw 0;
      const d = wxDerive(j.current); d.source = 'model'; d.note = note || '';
      settle(d);
    }).catch(() => fail(note));
  };

  // A real observation first: this field, then the nearest field that does report,
  // then the forecast model. Small GA strips almost never publish a METAR.
  const key = cwKey();
  if (key) {
    const hdr = { headers: { 'X-API-Key': key } };
    const one = j => (j && j.data && j.data.length && typeof j.data[0] === 'object') ? j.data[0] : null;

    fetch('https://api.checkwx.com/metar/' + encodeURIComponent(code) + '/decoded', hdr)
      .then(r => r.json())
      .then(j => {
        const m = one(j);
        if (m) return settle(wxFromMetar(m));
        // nothing here — ask for the closest reporting station instead
        return fetch('https://api.checkwx.com/metar/lat/' + af[3] + '/lon/' + af[4] +
                     '/radius/60/decoded', hdr)
          .then(r2 => r2.json())
          .then(j2 => {
            const near = one(j2);
            if (!near) return model(code + ' publishes no METAR and none was found nearby.');
            const d = wxFromMetar(near);
            const st = afByCode((near.icao || '').toUpperCase());
            d.nearest = (near.icao || '').toUpperCase();
            d.nearestName = (near.station && near.station.name) || (st && st[1]) || '';
            d.nearestNM = st ? Math.round(haversineNM([af[3], af[4]], [st[3], st[4]])) : null;
            settle(d);
          });
      })
      .catch(() => model('The weather service could not be reached, so this is model data.'));
    return;
  }
  model('');
}

const visLabel = m => m >= 20000 ? '20 km+' : m >= 10000 ? '10 km+' :
  m >= 1000 ? (Math.round(m / 100) / 10) + ' km' : m + ' m';

/** Home weather card. Reads like a flight strip: code, coded line, then the figures. */
function wxStrip() {
  const code = S.field;
  if (!code) return '';
  if (WX.code !== code || WX.state === 'idle') wxLoad(code);
  const af = afByCode(code);
  const place = af ? af[1] : '';

  if (WX.state === 'loading') return `<button class="wxcard" id="wxb">
    <div class="wxtop"><span class="wxid">${esc(code)}</span>
      <span class="wxplace">${esc(place)}</span></div>
    <div class="wxload">Checking conditions…</div></button>`;

  if (WX.state !== 'ok' || !WX.data) return `<button class="wxcard" id="wxb">
    <div class="wxtop"><span class="wxid">${esc(code)}</span>
      <span class="wxplace">${esc(place)}</span><span class="wxgo">&#8250;</span></div>
    <div class="wxload">Conditions unavailable — tap for the real sources</div></button>`;

  const d = WX.data;
  const dir10 = pad(Math.round(d.wdir / 10) * 10 % 360 || (d.wspd ? 360 : 0), 3);
  const cc = cloudCode(d.lowCloud);
  const cloudTxt = d.cloudGroup || ((cc === 'NCD' || cc == null) ? 'NCD' : cc + pad(Math.round(d.ceilFt / 100), 3));
  const stat = (k, v) => `<div class="wxst"><div class="k">${k}</div><div class="v">${v}</div></div>`;
  const shown = d.nearest || code;
  return `<button class="wxcard" id="wxb">
    <div class="wxtop">
      <span class="wxid">${esc(shown)}</span>
      <span class="wxplace">${d.nearest
        ? esc(d.nearestNM != null ? d.nearestNM + ' NM from ' + code : 'nearest to ' + code)
        : esc(place)}</span>
      <span class="wxcat" style="--c:var(--${d.col})">${esc(d.cat)}</span>
    </div>
    <div class="wxraw">${esc(metarString(d, '').trim())}</div>
    <div class="wxstats">
      ${stat('Wind', dir10 + '/' + d.wspd + (d.gust ? 'G' + d.gust : ''))}
      ${stat('Vis', d.visM >= 9999 ? '10km+' : visLabel(d.visM))}
      ${stat('Cloud', cloudTxt)}
      ${stat('QNH', d.qnh || '—')}
    </div>
    <div class="wxfoot"><span class="wxsrc">${d.source === 'metar' ? (d.nearest ? 'NEAREST' : 'METAR') : 'MODEL'}</span>
      <span>${d.source === 'metar'
        ? (d.nearest ? esc(d.nearestName || d.nearest) + ' — ' + esc(code) + ' issues none'
                     : 'Official observation')
        : 'Forecast model — not an observation'}</span>
      <span class="wxgo">&#8250;</span></div>
  </button>`;
}

VIEWS.wx = function () {
  const code = S.field, af = afByCode(code);
  navbar(af ? af[1] : (code || 'Weather'), '');
  if (WX.code !== code) wxLoad(code, () => {});
  const d = WX.state === 'ok' ? WX.data : null;

  html(`<div class="hd" style="padding-top:14px"><h1 class="vt">${esc(code || '')}</h1>
    <div class="sub">${af ? esc(af[1]) + (af[2] ? ' · ' + esc(af[2]) : '') : 'Airfield not in the list'}</div></div>`);

  if (!d) {
    html(`<div class="note o" style="margin-top:14px"><b>${WX.state === 'loading' ? 'Loading…' : 'Could not load conditions'}</b>
      ${WX.state === 'loading' ? 'Fetching the model data.' : 'You may be offline, or the service may be down. The links below always work.'}</div>`);
  } else {
    html(`<div class="card" style="margin-top:14px;text-align:center">
      <div class="wxbig" style="--c:var(--${d.col})">${d.cat}</div>
      <div class="tiny" style="margin-top:6px">${d.source === 'metar'
        ? 'from the official METAR' : 'estimated from model visibility and cloud base'}</div>
      <div class="mono" style="margin-top:12px;background:var(--card2);padding:11px 12px;
        border-radius:9px;font-size:13px;text-align:left;word-break:break-word;line-height:1.5">${esc(metarString(d, code))}</div>
      <div class="tiny" style="margin-top:7px">${d.source === 'metar'
        ? 'The published METAR.' : 'The model figures written in METAR form — useful decoding practice, but not an observation.'}</div>
    </div>
    <h2 class="sec">Decoded</h2>
    <div class="grp">${metarDecode(d).map(([k, v]) =>
      `<div class="row"><div class="tx"><b>${k}</b></div><div class="val">${esc(v)}</div></div>`).join('')}</div>
    <div class="note b" style="margin-top:12px"><b>How the cloud base is worked out</b>
      Spread of ${d.spread == null ? '—' : d.spread.toFixed(1)}°C × 400 ft — the same rule of thumb
      in the Meteorology articles — and only counted as a ceiling when low cloud is 50% or more.</div>`);
  }

  if (d && d.source === 'metar' && d.nearest) {
    html(`<div class="note o" style="margin-top:12px"><b>This is ${esc(d.nearest)}, not ${esc(code)}</b>
      ${esc(code)} issues no METAR, so this is the nearest station that does${
        d.nearestNM != null ? ' — ' + esc(d.nearestName || d.nearest) + ', about ' + d.nearestNM + ' NM away' : ''}.
      Useful for the general picture, but conditions at your field can differ, especially
      visibility and cloud base. Check the official forecast before you fly.</div>`);
  } else if (d && d.source === 'metar') {
    html(`<div class="note o" style="margin-top:12px"><b>A real observation, but still check it yourself</b>
      The published METAR for ${esc(code)}${d.observed ? ', observed ' + esc(String(d.observed).replace('T', ' ').slice(0, 16)) + 'Z' : ''}.
      It can be stale or unrepresentative of your route. Never treat one number as a go/no-go
      decision.</div>`);
  } else {
    html(`<div class="note r" style="margin-top:12px"><b>Not for flight planning</b>
      This is <b>Open-Meteo forecast model</b> output, not a METAR.${d && d.note ? ' ' + esc(d.note) : ''}
      Treat it as a rough look out of the window and use the links below before you fly.</div>`);
  }

  const links = [];
  if (code) links.push(`<a class="row" href="https://metar-taf.com/${esc(code)}" target="_blank" rel="noopener">
    <div class="ic" style="--c:var(--indigo)">&#9788;</div>
    <div class="tx"><b>METAR &amp; TAF</b><i>Official observation, if ${esc(code)} reports one</i></div><div class="chev">&#8599;</div></a>`);
  links.push(`<a class="row" href="https://www.metoffice.gov.uk/services/transport/aviation/general-aviation" target="_blank" rel="noopener">
    <div class="ic" style="--c:var(--blue)">&#128506;</div>
    <div class="tx"><b>Met Office GA</b><i>Form 214 and 215</i></div><div class="chev">&#8599;</div></a>`);
  html(`<h2 class="sec">Real sources</h2><div class="grp">${links.join('')}</div>`);

  if (WX.at) html(`<div class="foot">Model data fetched ${new Date(WX.at).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}, cached for 20 minutes.</div>`);
};

/* ============================ SEARCH ============================ */

let IDX = null;
let SEARCH_Q = '';
const strip = h => h.replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim();

/** Built once, lazily: articles, objectives, questions and cards in one flat list. */
function buildIndex() {
  if (IDX) return IDX;
  IDX = [];
  SUBJECTS.forEach(sj => {
    const c = sj.code;
    arts(c).forEach(a => IDX.push({
      t: 'article', code: c, id: a.id, title: a.title,
      sub: sj.name + ' · ' + a.mins + ' min', hay: (a.title + ' ' + strip(a.body)).toLowerCase()
    }));
    sj.groups.forEach(g => g.items.forEach(it => IDX.push({
      t: 'objective', code: c, id: it.c, title: it.t,
      sub: sj.name + ' · ' + it.c, hay: (it.t + ' ' + it.c).toLowerCase()
    })));
    (SC[c].quiz || []).forEach((q, i) => IDX.push({
      t: 'question', code: c, id: i, title: q.q, body: q.a[q.c], why: q.why,
      sub: sj.name, hay: (q.q + ' ' + q.a.join(' ') + ' ' + q.why).toLowerCase()
    }));
    (SC[c].cards || []).forEach((cd, i) => IDX.push({
      t: 'card', code: c, id: i, title: cd.f, body: cd.b,
      sub: sj.name, hay: (cd.f + ' ' + cd.b).toLowerCase()
    }));
  });
  return IDX;
}

const TYPE_ORDER = { article: 0, objective: 1, question: 2, card: 3 };

function runSearch(q) {
  q = q.trim().toLowerCase();
  if (q.length < 2) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const out = [];
  buildIndex().forEach(e => {
    if (!terms.every(t => e.hay.indexOf(t) >= 0)) return;
    // rank: a hit in the title beats one buried in the body
    const inTitle = e.title.toLowerCase().indexOf(terms[0]);
    let score = inTitle === 0 ? 0 : inTitle > 0 ? 1 : 3;
    score += TYPE_ORDER[e.t] * 0.1;
    out.push({ e: e, score: score });
  });
  return out.sort((a, b) => a.score - b.score).slice(0, 60).map(x => x.e);
}

const TYPE_LABEL = { article: 'Article', objective: 'Objective', question: 'Question', card: 'Card' };
const TYPE_COLOUR = { article: 'blue', objective: 'orange', question: 'indigo', card: 'green' };

VIEWS.search = function (p) {
  navbar('Search', '');
  const q = (p && p.q) || SEARCH_Q || '';
  html(`<div class="hd" style="padding-top:14px">
    <input type="search" id="sq" class="ti" placeholder="Carb icing, VMC, Va…" value="${esc(q)}"
      autocomplete="off" autocapitalize="none" spellcheck="false" enterkeyhint="search"
      style="font-size:17px"></div>
    <div id="sres"></div>`);
  const inp = $('#sq');
  setTimeout(() => { try { inp.focus(); } catch (e) {} }, 60);

  const paint = () => {
    SEARCH_Q = inp.value;
    const res = runSearch(inp.value);
    const box = $('#sres');
    if (inp.value.trim().length < 2) {
      box.innerHTML = `<div class="tiny" style="margin:14px 4px">Searches ${
        buildIndex().length} items: every article, learning objective, quiz question and
        flashcard.</div>`;
      return;
    }
    if (!res.length) {
      box.innerHTML = `<div class="empty"><div class="em">&#128269;</div><h3>Nothing found</h3>
        <p>No article, objective, question or card matches “${esc(inp.value)}”.</p></div>`;
      return;
    }
    const counts = {};
    res.forEach(r => counts[r.t] = (counts[r.t] || 0) + 1);
    box.innerHTML = `<div class="tiny" style="margin:10px 4px 10px">${res.length} result${res.length === 1 ? '' : 's'} — ${
      Object.keys(counts).sort((a, b) => TYPE_ORDER[a] - TYPE_ORDER[b])
        .map(k => counts[k] + ' ' + TYPE_LABEL[k].toLowerCase() + (counts[k] === 1 ? '' : 's')).join(', ')}</div>
      <div class="grp">` + res.map((r, i) => `
      <button class="row" data-r="${i}">
        <div class="ic" style="--c:var(--${TYPE_COLOUR[r.t]})">${r.code}</div>
        <div class="tx"><b>${esc(r.title.length > 110 ? r.title.slice(0, 110) + '…' : r.title)}</b>
          <i>${TYPE_LABEL[r.t]} · ${esc(r.sub)}</i>
          ${r.t === 'card' || r.t === 'question'
            ? `<i style="color:var(--tx2);margin-top:4px">${esc((r.body || '').slice(0, 130))}</i>` : ''}</div>
        ${r.t === 'article' || r.t === 'objective' ? '<div class="chev">&#8250;</div>' : ''}
      </button>`).join('') + '</div>';

    box.querySelectorAll('[data-r]').forEach(b => b.onclick = () => {
      const r = res[+b.dataset.r];
      if (r.t === 'article') go('article', { code: r.code, id: r.id });
      else if (r.t === 'objective') go('subject', { code: r.code, tab: 'obj' });
      else if (r.t === 'question') {
        const full = SC[r.code].quiz[r.id];
        askConfirm({ title: full.q, body: full.a[full.c] + '\n\n' + strip(full.why),
          yes: 'Practise ' + byCode[r.code].name },
          () => startQuiz({ codes: [r.code], n: 15, mode: 'practice', title: byCode[r.code].name }));
      } else {
        const cd = SC[r.code].cards[r.id];
        askConfirm({ title: cd.f, body: cd.b, yes: 'Review ' + byCode[r.code].name + ' cards' },
          () => { S.cardSubs = [r.code]; save(); tab('cards'); });
      }
    });
  };
  inp.addEventListener('input', paint);
  paint();
};


/* ============================ CLOCK EXPLAINERS ============================ */

VIEWS.clockinfo = function (p) {
  if (p.id === 'att') return attemptsInfo();
  const is18 = p.id === 'm18';
  navbar(is18 ? '18-month window' : '24-month validity', '');

  const dl = deadline18(getD1()), vd = deadline24(getD2());
  const d = is18 ? dl : vd;

  html(`<div class="hd" style="padding-top:14px">
    <h1 class="vt">${is18 ? 'All nine within 18 months' : 'Valid for 24 months'}</h1>
    <div class="sub">${is18 ? 'FCL.025(b)(2)' : 'FCL.025(c)(1)(i) · FCL.015(f)'}</div></div>`);

  // where this profile actually stands
  if (d) {
    const n = daysTo(d);
    html(`<div class="card" style="margin-top:14px;text-align:center">
      <div style="font:800 40px/1 -apple-system,system-ui;letter-spacing:-.03em;
        color:var(--${n < 0 ? 'red' : n < 90 ? 'red' : n < 180 ? 'orange' : 'green'});
        font-variant-numeric:tabular-nums">${n < 0 ? 'Expired' : n + ' days'}</div>
      <div class="tiny" style="margin-top:7px">${is18
        ? 'All nine must be passed by ' + fmt(d)
        : 'Your PPL application must reach the CAA by ' + fmt(d)}</div></div>`);
  } else {
    html(`<div class="note b" style="margin-top:14px"><b>Not running yet</b>
      ${is18 ? 'The clock starts when you first sit any paper. Put that date on the Exams tab and this will track it.'
             : 'This starts the day you pass your ninth exam. Add that date on the Exams tab.'}</div>`);
  }

  if (is18) {
    html(`<h2 class="sec">When the clock starts</h2>
      <div class="card"><div class="p">
        Not on the day you sit exam one — at the <b>end of the calendar month</b> in which you first
        <b>attempt</b> any paper. Attempt, not pass: sitting one and failing it starts the clock just
        the same.</div>
      <div class="mono" style="margin-top:12px;background:var(--card2);padding:12px;border-radius:9px;
        font-size:13px;line-height:1.7">First attempt&#160;&#160;20 Mar 2026<br>
        End of month&#160;&#160;31 Mar 2026<br>
        Plus 18 months&#160;<b>30 Sep 2027</b></div></div>`);

    html(`<h2 class="sec">If you miss it</h2>
      <div class="note r"><b>The whole set goes</b>
        Under FCL.025(b)(4) you retake <b>all nine</b> papers, not just the outstanding ones. Before
        retaking, FCL.025(b)(5) requires further training at your DTO or ATO, the extent of which
        they determine.</div>`);

    html(`<h2 class="sec">The regulation</h2>
      <div class="card"><div class="p" style="color:var(--tx)">
        “Unless otherwise determined in this Part, an applicant has successfully completed the
        required theoretical knowledge examination for the appropriate pilot licence or rating if he
        or she has passed all the required theoretical knowledge examination papers <b>within a
        period of 18 months counted from the end of the calendar month when the applicant first
        attempted an examination</b>.”</div>
        <div class="cite">FCL.025(b)(2)</div></div>`);

    html(`<h2 class="sec">Before you can sit anything</h2>
      <button class="grp row" id="toDto18">
        <div class="ic" style="--c:var(--teal)">&#9993;</div>
        <div class="tx"><b>Your school has to recommend you</b><i>What a DTO and an ATO are, and the 12-month rule</i></div>
        <div class="chev">&#8250;</div></button>`);
    $('#toDto18').onclick = () => go('dto');

    html(`<h2 class="sec">What this means in practice</h2>
      <div class="grp">
        <div class="row plain"><div class="p pt">Do not sit one paper early
          just to feel started. That single attempt commits you to finishing the other eight inside
          18 months.</div></div>
        <div class="row plain"><div class="p pt">Leave room for a resit.
          A failed paper cannot be re-sat inside the same sitting window, so budget more than the
          bare minimum per exam.</div></div>
        <div class="row plain"><div class="p pt">There is <b>no limit on
          sittings</b> for a PPL, so the 18 months and the four attempts per paper are the only
          things rationing you.</div></div>
      </div>`);

  } else {
    html(`<h2 class="sec">Apply for what, exactly</h2>
      <div class="card"><div class="p">
        For <b>the licence itself</b> — submitting your PPL(A) application to the CAA with evidence
        that you meet the requirements. Passing the exams and the flying does not hand you a
        licence; you have to ask for one, and there is a deadline for asking.</div></div>`);

    html(`<h2 class="sec">The order it happens in</h2>
      <div class="grp">
        <div class="row"><div class="ic" style="--c:var(--blue)">1</div>
          <div class="tx"><b>Pass all nine exams</b><i>Within 18 months of your first attempt — FCL.025(b)(2)</i></div></div>
        <div class="row"><div class="ic" style="--c:var(--purple)">2</div>
          <div class="tx"><b>Pass the skill test</b><i>The theory must already be passed before you sit it — FCL.030(a)</i></div></div>
        <div class="row"><div class="ic" style="--c:var(--green)">3</div>
          <div class="tx"><b>Apply to the CAA for the licence</b><i>Within 6 months of the skill test — FCL.015(f)</i></div></div>
      </div>
      <div class="note b" style="margin-top:12px"><b>Two clocks, and the earlier one wins</b>
        The 24 months runs from your <b>ninth exam pass</b>. A separate 6 months runs from your
        <b>skill test pass</b>. Leave the test until month 23 and it is the 24-month clock that
        stops you, not the 6-month one.</div>`);

    html(`<h2 class="sec">What the 24 months covers</h2>
      <div class="card"><div class="p">
        The <b>completed set</b>, not each exam individually — 24 months counted from the day you
        passed the last one. It is not 24 months per paper.</div></div>`);

    html(`<h2 class="sec">If you miss it</h2>
      <div class="note r"><b>The theory expires</b>
        The completed set is no longer valid towards licence issue, and you are back to sitting
        exams. This is why finishing all nine long before you have the hours is a risk rather than
        being ahead.</div>`);

    html(`<h2 class="sec">The regulation</h2>
      <div class="card"><div class="p" style="color:var(--tx)">
        “The successful completion of the theoretical knowledge examinations will be valid: (i) for
        the issue of a light aircraft pilot licence or a private pilot licence, <b>for a period of
        24 months</b>… counted from the day when the pilot successfully completes the theoretical
        knowledge examination.”</div>
        <div class="cite">FCL.025(c)(1)(i) and (iii)</div></div>
    <div class="card" style="margin-top:12px"><div class="p" style="color:var(--tx)">
      “For the issue of a licence, rating or certificate the applicant shall apply <b>not later than
      6 months after having succeeded at the skill test</b> or assessment of competence.”</div>
      <div class="cite">FCL.015(f)</div></div>`);

    html(`<h2 class="sec">A change is coming — but is not here</h2>
      <div class="note o"><b>36 months has been agreed, not implemented</b>
        The CAA decided in January 2026 to extend PPL exam validity from 24 to 36 months
        (CAP3212, Decision no. 3). It is <b>not in force</b>: the July 2026 Part-FCL rulebook still
        says 24 months, and it needs a legislative change through the DfT plus funding to modify the
        e-Exam platform. Plan on 24 until the CAA says otherwise.</div>`);

    html(`<h2 class="sec">Do not confuse it with</h2>
      <div class="grp">
        <div class="row"><div class="tx"><b>The 18-month window</b><i>Time to pass all nine, from your first attempt</i></div>
          <button class="btn sec sm" style="width:auto;padding:8px 12px" id="to18">Open</button></div>
        <div class="row"><div class="tx"><b>The 6-month rule</b><i>Apply within 6 months of the skill test — FCL.015(f)</i></div></div>
        <button class="row" id="toDto"><div class="tx"><b>DTO/ATO recommendation</b><i>Valid 12 months — FCL.025(a)(3)</i></div>
          <div class="chev">&#8250;</div></button>
        <div class="row"><div class="tx"><b>Class 2 medical</b><i>60, 24 or 12 months depending on age</i></div></div>
      </div>`);
    if ($('#to18')) $('#to18').onclick = () => { stack[stack.length - 1] = { v: 'clockinfo', p: { id: 'm18' } }; render(); };
    if ($('#toDto')) $('#toDto').onclick = () => go('dto');
  }

  html(`<div class="foot">Quoted from the CAA consolidated Part-FCL rulebook, page footers dated
    July 2026. See Sources for the document.</div>`);
};

/** The four-attempt rule, which is the one that can undo everything. */
function attemptsInfo() {
  navbar('Attempts', '');
  const risky = SUBJECTS.filter(x => sub(x.code).att >= 3 && sub(x.code).st !== 'passed');
  const used = SUBJECTS.filter(x => sub(x.code).att > 0);

  html(`<div class="hd" style="padding-top:14px">
    <h1 class="vt">Four attempts per paper</h1>
    <div class="sub">FCL.025(b)(4) · Standards Document 11 §11.1.22–36</div></div>`);

  html(`<div class="note ${risky.length ? 'r' : 'b'}" style="margin-top:14px">
    <b>${risky.length ? risky.length + ' subject' + (risky.length > 1 ? 's are' : ' is') + ' on the final attempt'
      : 'Nothing at the limit'}</b>
    ${risky.length ? risky.map(x => x.name).join(', ') + ' — the next failure voids every pass you hold.'
      : 'No subject has used three attempts. Keep it that way and this rule never bites.'}</div>`);

  if (used.length) {
    html('<h2 class="sec">Attempts used</h2><div class="grp">' + used.map(x => {
      const st = sub(x.code), left = 4 - st.att;
      return `<div class="row"><div class="ic" style="--c:var(--${META[x.code].c})">${x.code}</div>
        <div class="tx"><b>${esc(x.name)}</b><i>${st.st === 'passed' ? 'passed' : left + ' attempt' + (left === 1 ? '' : 's') + ' remaining'}</i></div>
        <span class="bdg ${st.st === 'passed' ? 'g' : st.att >= 3 ? 'r' : st.att === 2 ? 'o' : ''}">${st.att} of 4</span></div>`;
    }).join('') + '</div>');
  }

  html(`<h2 class="sec">How it works</h2>
    <div class="grp">
      <div class="row"><div class="ic" style="--c:var(--green)">1–2</div>
        <div class="tx"><b>First two attempts</b><i>Book and sit them normally</i></div></div>
      <div class="row"><div class="ic" style="--c:var(--orange)">3</div>
        <div class="tx"><b>After a third failure</b><i>Further training first, as your school determines.
          The fourth attempt is then booked normally at the organisation — there is no requirement to
          attend the CAA at Gatwick</i></div></div>
      <div class="row"><div class="ic" style="--c:var(--red)">4</div>
        <div class="tx"><b>If the fourth fails</b><i>Automatic stand-down in the e-Exams system, and
          every pass in every subject is void</i></div></div>
    </div>`);

  html(`<h2 class="sec">What a fourth failure actually costs</h2>
    <div class="note r"><b>Not just that subject — all nine</b>
      Eight passes you already hold are cancelled along with the one you failed. You then need
      further theoretical knowledge training, a fresh recommendation from your school, and the CAA
      to release you from stand-down before you can start a new series.</div>
    <div class="card" style="margin-top:12px"><div class="p" style="color:var(--tx)">
      “ALL previous examination passes, in ALL subjects currently being sat are rendered null and
      void by a fourth attempt failure.”</div>
      <div class="cite">Standards Document 11 §11.1.33</div></div>`);

  html(`<h2 class="sec">The regulation</h2>
    <div class="card"><div class="p" style="color:var(--tx)">
      “If an applicant for the issue of a light aircraft pilot licence (LAPL) or a private pilot
      licence (PPL) has failed to pass one of the theoretical knowledge examination papers
      <b>within four attempts</b> or has failed to pass all papers within the period mentioned in
      point (b)(2), he or she shall retake the complete set of theoretical knowledge examination
      papers in order to obtain the licence.”</div>
      <div class="cite">FCL.025(b)(4)</div></div>`);

  html(`<h2 class="sec">Practical consequences</h2>
    <div class="grp">
      <div class="row plain"><div class="p pt">It is <b>per paper</b>, not
        across the set. Four attempts at Meteorology, four at Air Law, and so on.</div></div>
      <div class="row plain"><div class="p pt">You cannot re-sit the
        <b>same</b> paper twice inside one sitting — a sitting being up to ten consecutive days
        (GM1 FCL.025). Different subjects on the same day are fine.</div></div>
      <div class="row plain"><div class="p pt">Because sittings are not
        rationed for a PPL, there is no reason to sit a paper you are not confident on. Use the mock
        exams in this app until you are comfortably above 75%.</div></div>
      <div class="row plain"><div class="p pt">A confirmed case of
        cheating is separate and worse: a minimum twelve-month ban, and all previously attempted
        exams void (ARA.FCL.300).</div></div>
    </div>`);

  html(`<button class="btn sec" style="margin-top:16px" id="attMock">Take a mock exam instead</button>`);
  $('#attMock').onclick = () => { stack.pop(); tab('quiz'); };

  html(`<div class="foot">Quoted from the CAA consolidated Part-FCL rulebook (July 2026) and
    Standards Document 11, Revision 15. See Sources.</div>`);
}

VIEWS.dto = function () {
  navbar('DTO and ATO', '');
  html(`<div class="hd" style="padding-top:14px">
    <h1 class="vt">Who trains you, and the sign-off</h1>
    <div class="sub">FCL.210 · FCL.025(a)(2) and (a)(3) · DTO.GEN.110</div></div>`);

  html(`<div class="card" style="margin-top:14px"><div class="p">
    Your PPL course has to be run by one of two kinds of organisation, and you cannot book a
    theory exam until that organisation says you are ready. For a PPL it makes no practical
    difference which kind you are at — most flying clubs are DTOs.</div></div>`);

  html(`<h2 class="sec">The two kinds</h2>
    <div class="grp">
      <div class="row"><div class="ic" style="--c:var(--blue)">DTO</div>
        <div class="tx"><b>Declared Training Organisation</b>
          <i>A lighter regime built for general aviation: it <b>declares</b> itself to the CAA
          rather than seeking approval. Most flying clubs. For aeroplanes a DTO may provide
          theoretical knowledge and flight instruction for the LAPL(A) and PPL(A), class rating
          training for SEP(land), SEP(sea) and TMG, and night, aerobatic, mountain and banner
          towing ratings.</i></div></div>
      <div class="row"><div class="ic" style="--c:var(--purple)">ATO</div>
        <div class="tx"><b>Approved Training Organisation</b>
          <i>Formally approved and overseen by the CAA, and able to train well beyond the PPL —
          CPL, ATPL, instrument ratings, integrated courses. An ATO can do everything a DTO can,
          and more.</i></div></div>
    </div>
    <div class="tiny" style="margin:9px 0 0 4px">DTO scope from DTO.GEN.110(a)(1).</div>`);

  html(`<h2 class="sec">The recommendation</h2>
    <div class="card"><div class="p">
      You may only sit a theory exam when the DTO or ATO responsible for your training
      <b>recommends</b> you, once you have completed the relevant theoretical knowledge
      instruction to a satisfactory standard. In practice this is your school signing you off in
      the CAA e-Exams system so that the exam can be booked. No recommendation, no booking — so
      ask early rather than the week you want to sit.</div>
    <div class="quote">
      “Applicants shall only take the theoretical knowledge examination when recommended by the
      declared training organisation (DTO) or the approved training organisation (ATO) responsible
      for their training, once they have completed the appropriate elements of the training course
      of theoretical knowledge instruction to a satisfactory standard.”
      <div class="cite">FCL.025(a)(2)</div></div></div>`);

  html(`<h2 class="sec">It lasts 12 months</h2>
    <div class="note o"><b>Use it or lose it</b>
      A recommendation is valid for <b>12 months</b>. If you have not attempted at least one paper
      in that time, your DTO or ATO decides what further training you need before you can sit
      anything — based on where you have got rusty, not a fixed syllabus.</div>
    <div class="card" style="margin-top:12px"><div class="p" style="color:var(--tx)">
      “The recommendation by a DTO or an ATO shall be valid for 12 months. If the applicant has
      failed to attempt at least one theoretical knowledge examination paper within this period of
      validity, the need for further training shall be determined by the DTO or the ATO, based on
      the needs of the applicant.”
      <div class="cite">FCL.025(a)(3)</div></div></div>`);

  html(`<h2 class="sec">If you change school</h2>
    <div class="card"><div class="p">
      You are allowed to. Theoretical knowledge instruction and flight instruction may be completed
      at a DTO or ATO <b>different from the one where you started</b> (FCL.210(c)). Ask the first
      one for a copy of your training records before you go — the new organisation needs them
      before it can recommend you.</div></div>`);

  html(`<div class="foot">Quoted from the CAA consolidated Part-FCL rulebook, page footers dated
    July 2026. See Sources for the document.</div>`);
};

/* ============================ MY TRAINING ============================ */

VIEWS.training = function () {
  navbar('My training', '');
  html(`<div class="hd" style="padding-top:14px"><h1 class="vt">My training</h1>
    <div class="sub">Used to personalise the app and suggest an exam order. Nothing here is sent
    anywhere.</div></div>`);

  html('<h2 class="sec">Stage</h2>' + stageLadder(S.stage, 'data-st2'));
  bind('[data-st2]', e => { S.stage = e.currentTarget.dataset.st2; save(); render(); });

  html(`<h2 class="sec">Medical</h2>
    <div class="card">
      <div class="fld"><label class="f" for="tMedC">Certificate</label>
        <select id="tMedC">
          <option value=""${!S.medClass ? ' selected' : ''}>Not set</option>
          <option value="2"${S.medClass === '2' ? ' selected' : ''}>Class 2</option>
          <option value="lapl"${S.medClass === 'lapl' ? ' selected' : ''}>LAPL medical</option>
          <option value="1"${S.medClass === '1' ? ' selected' : ''}>Class 1</option>
        </select></div>
      <div class="fld"><label class="f" for="tMed">Valid until</label>
        <input type="date" id="tMed" value="${esc(S.medical || '')}">
        <div class="tiny" style="margin-top:5px">The expiry printed on your certificate. A Class 2
          runs 60 months under 40, 24 months from 40 to 50, and 12 months above 50 — and one issued
          before you turn 40 stops at 42 regardless (MED.A.045).</div></div>
    </div>`);
  $('#tMedC').onchange = e => { S.medClass = e.target.value; save(); };
  $('#tMed').onchange = e => { S.medical = e.target.value; save(); };

  html(`<h2 class="sec">You</h2><div class="grp">
    <button class="row" id="tRen"><div class="tx"><b>Name</b></div>
      <div class="val">${esc(activeName())}</div><div class="chev">&#8250;</div></button>
    <button class="row" id="tLog"><div class="tx"><b>Flight log</b></div>
      <div class="val">${logStats().n} flight${logStats().n === 1 ? '' : 's'}</div><div class="chev">&#8250;</div></button>
  </div>`);
  $('#tRen').onclick = () => go('nameentry', { mode: 'rename', id: P.active });
  $('#tLog').onclick = () => go('log');

  html(`<h2 class="sec">Home airfield</h2>
    <div class="card">
      <label class="f" for="tIcao">Airfield</label>
      <input type="text" id="tIcao" maxlength="28" autocapitalize="characters" spellcheck="false"
        placeholder="Code or name — EGLM, Waltham…" value="${esc(S.field || '')}" class="ti"
        style="text-transform:uppercase;letter-spacing:.04em">
      <div id="tFound" class="acfound" style="display:none"></div>
      <div id="tList" class="aclist" style="display:none"></div>
    </div>
    <div class="tiny" style="margin-top:9px;margin-left:2px">Where your field publishes no METAR,
      the app uses the nearest station that does and says which one.</div>
    <button class="btn" style="margin-top:14px" id="tSave">Save airfield</button>`);
  wireAirfield('#tIcao', '#tList', '#tFound');
  $('#tSave').onclick = () => {
    const v = $('#tIcao').value.trim().toUpperCase();
    if (v && !afByCode(v)) { alertish('Pick an airfield from the list, or clear the box.'); return; }
    if (v !== (S.field || '')) { try { localStorage.removeItem(wxCacheKey(v)); } catch (e) {} WX = { state: 'idle' }; }
    S.field = v; S.wx = '';
    save(); alertish('Airfield saved.');
  };

  html(`<h2 class="sec">Data and sources</h2><div class="grp">
    <button class="row" id="tSrc"><div class="ic" style="--c:var(--indigo)">&#9788;</div>
      <div class="tx"><b>Sources &amp; settings</b><i>Weather data, appearance, where the syllabus came from</i></div>
      <div class="chev">&#8250;</div></button></div>`);
  $('#tSrc').onclick = () => go('sources');

  html(`<h2 class="sec">Back up and move</h2>
    <div class="note b">Everything lives in this browser. Export writes one file with the lot —
    progress, exam record, flashcards, flight log, medical and settings — and import restores it
    on another device. That is also how someone else uses the app: their own device, their own
    file.</div>
    <div class="brow" style="margin-top:12px">
      <button class="btn sec" id="tExp">Export everything</button>
      <button class="btn sec" id="tImp">Import</button></div>
    <button class="btn dgr sm" style="margin-top:12px" id="tWipe">Start again</button>`);
  $('#tExp').onclick = exportProfile;
  $('#tImp').onclick = pickImportFile;
  $('#tWipe').onclick = () => askConfirm({
    title: 'Start again?',
    body: 'Everything is erased — progress, exam record, flashcards, flight log, medical and '
      + 'settings — and you go back to setup. Export first if you might want any of it.',
    yes: 'Erase and start again', danger: true
  }, () => { deleteProfile(P.active); SETUP = null; stack = [{ v: 'welcome' }]; render(); });
};

/**
 * In-app confirmation. Never use window.confirm(): in several embedded browsers it
 * returns false without showing anything, which silently swallows the action.
 */
function askConfirm(o, onYes) {
  const w = document.createElement('div');
  w.className = 'sheetwrap';
  w.innerHTML = `<div class="sheetbg"></div><div class="sheet">
    <div class="sh-t">${esc(o.title)}</div>
    <div class="sh-b">${esc(o.body || '')}</div>
    <button class="btn ${o.danger ? 'dgr' : ''}" data-yes>${esc(o.yes || 'Confirm')}</button>
    <button class="btn grey" style="margin-top:9px" data-no>Cancel</button>
  </div>`;
  document.body.appendChild(w);
  requestAnimationFrame(() => w.classList.add('in'));
  const close = () => { w.classList.remove('in'); setTimeout(() => w.remove(), 240); };
  w.querySelector('[data-no]').onclick = close;
  w.querySelector('.sheetbg').onclick = close;
  w.querySelector('[data-yes]').onclick = () => { close(); onYes(); };
}

/** A non-blocking message, since alert() is unavailable in some embedded browsers. */
function alertish(msg) {
  const n = document.createElement('div');
  n.className = 'toast'; n.textContent = msg;
  document.body.appendChild(n);
  setTimeout(() => n.classList.add('in'), 10);
  setTimeout(() => { n.classList.remove('in'); setTimeout(() => n.remove(), 300); }, 3200);
}

/* ============================ EXAM ORDER ============================ */

VIEWS.plans = function () {
  navbar('Exam order', '');
  html(`<div class="hd" style="padding-top:14px"><h1 class="vt">How do you want to order them?</h1>
    <div class="sub">The CAA sets no order and no sittings limit for a PPL. These are study
    strategies, not rules — switch whenever you like, and your progress is unaffected.</div></div>`);

  html('<div class="grp" style="margin-top:16px">' + PLANS.map(p => {
    const on = p.id === (S.planId || 'blocks');
    const codes = (p.id === 'custom' && S.customOrder) ? S.customOrder : p.order;
    return `<button class="row" data-plan="${p.id}">
      <div class="ic" style="--c:var(--${on ? 'blue' : 'tx3'})">${on ? '&#10003;' : '&#8226;'}</div>
      <div class="tx"><b>${esc(p.name)}${p.tag ? ' <span class="bdg b" style="margin-left:6px">' + p.tag + '</span>' : ''}</b>
        <i>${esc(p.desc)}</i>
        <div style="display:flex;gap:4px;margin-top:8px;flex-wrap:wrap">${codes.map((c, i) =>
          `<span class="chip" style="background:var(--${META[c].c})">${c}</span>`).join('')}</div></div>
    </button>`;
  }).join('') + '</div>');
  bind('[data-plan]', e => {
    const id = e.currentTarget.dataset.plan;
    S.planId = id;
    if (id === 'custom' && (!S.customOrder || S.customOrder.length !== 9)) S.customOrder = planById('blocks').order.slice();
    save();
    if (id === 'custom') { stack[stack.length - 1] = { v: 'reorder' }; render(); } else render();
  });

  if ((S.planId || 'blocks') === 'custom') {
    html(`<button class="btn sec" style="margin-top:14px" id="editOrder">Edit my order</button>`);
    $('#editOrder').onclick = () => go('reorder');
  }

  // preview of the chosen plan
  html('<h2 class="sec">Your blocks</h2>');
  planBlocks().forEach(b => {
    html(`<div class="grp" style="margin-top:10px">
      <div class="row" style="background:var(--card2)">
        <div class="ic" style="--c:var(--blue)">${b.no}</div>
        <div class="tx"><b style="font-weight:600">${esc(b.title || 'Block ' + b.no)}</b></div></div>
      ${b.subs.map(c => `<div class="row"><div class="ic" style="--c:var(--${META[c].c})">${c}</div>
        <div class="tx"><b>${esc(byCode[c].name)}</b><i>${allLO(byCode[c])} objectives · ${META[c].book}</i></div></div>`).join('')}
      ${b.why ? `<div class="row plain"><div class="p" style="font-size:13.5px">${b.why}</div></div>` : ''}
    </div>`);
  });
};

VIEWS.reorder = function () {
  navbar('My order', '');
  const order = planOrder();
  html(`<div class="hd" style="padding-top:14px"><h1 class="vt">Your order</h1>
    <div class="sub">Move subjects up and down. They are grouped in threes for the blocks on the
    Plan tab.</div></div>`);
  html('<div class="grp" style="margin-top:14px">' + order.map((c, i) => `
    <div class="row">
      <div class="ic" style="--c:var(--${META[c].c})">${c}</div>
      <div class="tx"><b>${i + 1}. ${esc(byCode[c].name)}</b><i>${allLO(byCode[c])} objectives</i></div>
      <button class="mv" data-up="${i}"${i === 0 ? ' disabled' : ''} aria-label="Move up">&#9650;</button>
      <button class="mv" data-dn="${i}"${i === order.length - 1 ? ' disabled' : ''} aria-label="Move down">&#9660;</button>
    </div>`).join('') + '</div>');
  const swap = (a, b) => {
    const o = planOrder();
    const t = o[a]; o[a] = o[b]; o[b] = t;
    S.planId = 'custom'; S.customOrder = o; save(); render();
  };
  bind('[data-up]', e => swap(+e.currentTarget.dataset.up, +e.currentTarget.dataset.up - 1));
  bind('[data-dn]', e => swap(+e.currentTarget.dataset.dn, +e.currentTarget.dataset.dn + 1));
  html(`<button class="btn grey" style="margin-top:14px" id="resetOrder">Reset to the recommended order</button>`);
  $('#resetOrder').onclick = () => { S.customOrder = planById('blocks').order.slice(); save(); render(); };
};

/* ============================ REFERENCE ============================ */

function ruleList(list) {
  return list.map(r => `<div class="card">
    <div class="ch">${r.h}</div>
    ${r.cite ? `<div class="cite" style="margin:0 0 8px">${esc(r.cite)}</div>` : ''}
    <div class="p">${r.b}</div>
    ${r.q ? `<div class="quote">${r.q}</div>` : ''}</div>`).join('');
}

VIEWS.rules = function () {
  navbar('Rules', '');
  html(`<div class="hd" style="padding-top:14px"><h1 class="vt">The rules that bind you</h1>
    <div class="sub">Quoted from the CAA’s consolidated Part-FCL rulebook, page footers dated July 2026,
    and Standards Document 11. Nothing here is from memory or a study site.</div></div>`);
  html('<h2 class="sec">In force</h2>' + ruleList(RULES));
  html('<h2 class="sec">Decided, not yet in force</h2>' + ruleList(PENDING));
  html('<h2 class="sec">Not published by the CAA</h2>' + ruleList(UNKNOWNS));
};

VIEWS.books = function () {
  navbar('Books', '');
  html(`<div class="hd" style="padding-top:14px"><h1 class="vt">Books</h1>
    <div class="sub">Volumes and editions confirmed on Pooleys’ own product pages, September 2026.
    The PPL(A) set is volumes 1–4, 6 and 7; volume 5 is not a PPL theory subject.</div></div>`);
  html('<div class="grp">' + SUBJECTS.map(s => {
    const [v, t, ed] = BOOKS[s.code];
    return `<div class="row"><div class="ic" style="--c:var(--${META[s.code].c})">${s.code}</div>
      <div class="tx"><b>${esc(s.name)}</b><i>${t}<br>${ed}</i></div>
      <span class="bdg b">${v}</span></div>`;
  }).join('') + '</div>');
  html(`<div class="note b" style="margin-top:16px"><b>Worth having</b>
    Pooleys publish a free <i>PPL e-Exam Learning Objectives Guide</i> that cross-references each CAA
    learning objective to the chapter covering it, linked from the Air Pilot’s Manual product pages.</div>`);
};

VIEWS.sources = function () {
  navbar('Sources', '');
  html(`<div class="hd" style="padding-top:14px"><h1 class="vt">Sources</h1>
    <div class="sub">Every regulatory statement in this app was read from these primary documents on
    10 September 2026 — not from memory and not from study sites.</div></div>`);
  html('<div class="grp">' + SOURCES.map(s => `<a class="row" href="${s.u}" target="_blank" rel="noopener">
    <div class="tx"><b>${s.t}</b><i>${s.m}</i></div><div class="chev">&#8599;</div></a>`).join('') + '</div>');

  const tot = SUBJECTS.reduce((a, s) => a + allLO(s), 0);
  const tick = SUBJECTS.reduce((a, s) => a + s.groups.reduce((b, g) => b + g.items.filter(i => i.a).length, 0), 0);
  html(`<h2 class="sec">How the syllabus data was made</h2>
    <div class="card"><div class="p">
      The nine CAP2090 PDFs were downloaded from caa.co.uk and parsed as tables; each row’s
      PPL-Aeroplane tick was read straight from the table cell. That gives <b>${tot}</b> learning
      objectives, of which <b>${tick}</b> are ticked for PPL(A). The counts were cross-checked against
      an independent pass that classified tick marks by x-coordinate; both agreed exactly. No
      objective text was paraphrased.</div></div>`);

  html(`<h2 class="sec">Appearance</h2><div class="seg" id="thsel">
    <button data-th="" aria-selected="${!P.theme}">System</button>
    <button data-th="light" aria-selected="${P.theme === 'light'}">Light</button>
    <button data-th="dark" aria-selected="${P.theme === 'dark'}">Dark</button></div>`);
  bind('#thsel button', e => {
    P.theme = e.currentTarget.dataset.th;
    if (P.theme) document.documentElement.dataset.t = P.theme;
    else document.documentElement.removeAttribute('data-t');
    saveProfiles(); render();
  });

  html(`<h2 class="sec">Profiles</h2><div class="grp">
    <button class="row" id="goProf">
      <div class="ic" style="--c:var(--blue)">${esc(initials(activeName()))}</div>
      <div class="tx"><b>${esc(activeName())}</b><i>${P.list.length} profile${P.list.length === 1 ? '' : 's'} on this device</i></div>
      <div class="chev">&#8250;</div></button></div>`);
  $('#goProf').onclick = () => go('profiles');

  html(`<h2 class="sec">Live weather</h2>
    <div class="card">
      <label class="f" for="cwKey">CheckWX API key (optional)</label>
      <input type="text" id="cwKey" autocomplete="off" spellcheck="false" placeholder="Paste your own key"
        value="${esc(P.cwKey || '')}" class="ti" style="font-size:14px;font-family:ui-monospace,Menlo,monospace">
      <div class="tiny" style="margin-top:9px">A shared key ships with the app, so real METARs work
        out of the box. It is a free tier with a daily cap across everyone using it — if it runs out,
        put your own key here and it will be used instead.
        <a href="https://www.checkwxapi.com" target="_blank" rel="noopener">Free keys at checkwxapi.com</a>.</div>
      <div class="tiny" style="margin-top:8px">Where your field issues no METAR, the app falls back to
        the nearest station that does, and says which one. Failing that, a forecast model.</div>
      <div class="brow" style="margin-top:12px">
        <button class="btn sec sm" id="cwSave">Save key</button>
        <button class="btn grey sm" id="cwClear">Remove</button></div>
    </div>`);
  const clearWxCache = () => {
    Object.keys(localStorage).filter(x => x.indexOf('ppl-wx:') === 0)
      .forEach(x => { try { localStorage.removeItem(x); } catch (e) {} });
    WX = { state: 'idle' };
  };
  $('#cwSave').onclick = () => {
    P.cwKey = $('#cwKey').value.trim(); saveProfiles(); clearWxCache();
    alertish(P.cwKey ? 'Key saved on this device. Real METARs will be used where published.' : 'Key removed.');
  };
  $('#cwClear').onclick = () => {
    P.cwKey = ''; saveProfiles(); $('#cwKey').value = ''; clearWxCache();
    alertish('Key removed. Falling back to the forecast model.');
  };

  html(`<h2 class="sec">Where your progress lives</h2>
    <div class="note o"><b>Not on GitHub</b>
      GitHub Pages only serves the app — it never receives anything back. Progress is saved in
      <b>this browser on this device</b>, separately for each profile. So a phone and a laptop
      keep two independent sets of progress even for the same person. Use Export and Import below
      to move a profile between devices.</div>
    <div class="brow" style="margin-top:12px">
      <button class="btn sec" id="exp">Export ${esc(activeName())}</button>
      <button class="btn sec" id="imp">Import a file</button></div>
    ${P.list.length > 1 ? `<button class="btn sec sm" style="margin-top:10px" id="expAll">Back up all ${P.list.length} profiles</button>` : ''}
    <button class="btn dgr sm" style="margin-top:10px" id="wipe">Erase this profile’s progress</button>`);

  $('#exp').onclick = exportProfile;

  if ($('#expAll')) $('#expAll').onclick = () => {
    flush();
    download({
      app: 'ppl-theory', kind: 'backup', exported: new Date().toISOString(), theme: P.theme,
      profiles: P.list.map(pr => ({ name: pr.name, data: readJSON(dataKey(pr.id), blank()) }))
    }, 'ppl-backup-' + new Date().toISOString().slice(0, 10) + '.json');
  };

  $('#imp').onclick = pickImportFile;
  $('#wipe').onclick = () => askConfirm({
    title: 'Erase ' + activeName() + '\u2019s progress?',
    body: 'Articles, objectives, exam record, quiz history and flashcards are all cleared. '
      + 'Your name, training stage, home airfield and exam order are kept.',
    yes: 'Erase progress', danger: true
  }, () => {
    // keep who they are and how they fly — only the study record goes
    const keep = { stage: S.stage, field: S.field, wx: S.wx, planId: S.planId,
                   customOrder: S.customOrder, cardSubs: S.cardSubs };
    S = Object.assign(blank(), keep);
    flush(); tab('home');
    alertish('Progress erased. Your airfield and settings are still here.');
  });

  html(`<div class="foot">Personal revision aid — not a CAA publication and not instruction.<br>
    Articles, quiz questions and flashcards were written for this app; the learning objectives are
    verbatim CAA. Confirm anything that matters with your ATO/DTO, Ground Examiner or the CAA.</div>`);
};

/* ============================ IMPORT / EXPORT ============================ */

const slug = n => n.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'profile';

function download(obj, filename) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([JSON.stringify(obj, null, 1)], { type: 'application/json' }));
  a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

/** Rough summary of a progress blob, for the import preview. */
function summarise(d) {
  return {
    pass: Object.values(d.subj || {}).filter(v => v && v.st === 'passed').length,
    read: Object.keys(d.read || {}).length,
    lo: Object.keys(d.lo || {}).length,
    srs: Object.keys(d.srs || {}).length
  };
}
const looksLikeProgress = d => !!(d && typeof d === 'object' && (d.lo || d.subj || d.srs || d.read));

let IMPORTING = null;

function pickImportFile() {
  const f = document.createElement('input');
  f.type = 'file'; f.accept = 'application/json,.json';
  f.onchange = () => {
    if (!f.files || !f.files[0]) return;
    const r = new FileReader();
    r.onload = () => {
      let j = null;
      try { j = JSON.parse(r.result); } catch (e) { j = null; }
      if (j === null) {
        IMPORTING = { kind: 'error', msg: 'That file is not valid JSON. Make sure you picked a file exported by this app and that it downloaded completely.' };
      } else if (Array.isArray(j.profiles) && j.profiles.length) {
        IMPORTING = { kind: 'backup', payload: j };
      } else {
        const d = j.data ? j.data : j;
        IMPORTING = looksLikeProgress(d)
          ? { kind: 'profile', name: j.name || 'Imported', data: d, exported: j.exported, settings: j.settings }
          : { kind: 'error', msg: 'That file is valid JSON but does not contain PPL Theory progress. Export a profile from this app to see the expected format.' };
      }
      go('importfile');
    };
    r.readAsText(f.files[0]);
  };
  f.click();
}

/* ============================ FIRST RUN ============================ */

const STAGES = [
  ['none',  'Not started yet',        'Booking the first lesson',                    'tx3'],
  ['trial', 'Had a trial lesson',     'One or two flights in the logbook',           'teal'],
  ['early', 'Flying regularly',       'Circuits and general handling, pre-solo',     'blue'],
  ['solo',  'Gone solo',              'First solo done',                             'indigo'],
  ['nav',   'Navigation phase',       'Cross-country and the qualifying flight',     'purple'],
  ['test',  'Preparing for the test', 'Close to the skill test',                     'green']
];
const stageLabel = k => (STAGES.find(x => x[0] === k) || ['', 'Not set'])[1];
const stageIdx = k => STAGES.findIndex(x => x[0] === k);

/**
 * Training is a ladder, so the picker is drawn as one: choosing a rung fills in
 * everything below it. Six flat radio rows read as "pick one of six unrelated
 * things", which is exactly the wrong mental model.
 */
function stageLadder(sel, attr) {
  const at = stageIdx(sel);
  return '<div class="lad">' + STAGES.map(([k, t, d, c], i) => {
    const done = at >= 0 && i <= at, here = k === sel;
    return `<button ${attr}="${k}" style="--sc:var(--${c})"
      class="${done ? 'done ' : ''}${here ? 'here' : ''}" aria-pressed="${here}">
      <span class="rail"><span class="dot"></span></span>
      <span class="ladtx"><b>${t}${here ? '<span class="ladnow">You are here</span>' : ''}</b>
        <i>${d}</i></span></button>`;
  }).join('') + '</div>';
}
/** The plan that suits where someone is in their flying. */
const suggestPlan = stage => (stage === 'solo' || stage === 'nav' || stage === 'test') ? 'training' : 'blocks';

let SETUP = null;

function startSetup(mode) {
  SETUP = { step: 1, mode: mode || 'first', name: '', stage: '', field: '', wx: '' };
  go('welcome');
}

VIEWS.welcome = function () {
  if (!SETUP) SETUP = { step: 1, mode: 'first', name: '', stage: '', field: '', wx: '',
                        med: '', medIssue: '', dob: '', medClass: '2' };
  const step = SETUP.step, adding = SETUP.mode === 'add';
  if (adding) { navbar(step === 1 ? 'Add someone' : 'New profile', ''); }

  if (step === 1) {
    if (!adding) {
    const totLO = SUBJECTS.reduce((a, x) => a + allLO(x), 0);
    const totArt = SUBJECTS.reduce((a, x) => a + arts(x.code).length, 0);
    const totQ = SUBJECTS.reduce((a, x) => a + SC[x.code].quiz.length, 0);
    const totC = SUBJECTS.reduce((a, x) => a + SC[x.code].cards.length, 0);
    html(`<div class="hd" style="padding-top:30px">
      <h1 style="font-size:38px;line-height:1.05">UK PPL(A)<br>Theory</h1>
      <div class="sub" style="font-size:16px;margin-top:10px">Articles, mock exams and
        spaced-repetition flashcards for the nine CAA theoretical knowledge exams.</div></div>`);
    html(`<div class="grp" style="margin-top:20px">
      <div class="row"><div class="ic" style="--c:var(--blue)">${totArt}</div>
        <div class="tx"><b>Articles</b><i>With diagrams and the exam traps flagged</i></div></div>
      <div class="row"><div class="ic" style="--c:var(--indigo)">${totQ}</div>
        <div class="tx"><b>Questions</b><i>Marked against the real 75% pass mark</i></div></div>
      <div class="row"><div class="ic" style="--c:var(--green)">${totC}</div>
        <div class="tx"><b>Flashcards</b><i>Reviewed just before you would forget</i></div></div>
      <div class="row"><div class="ic" style="--c:var(--orange)">${totLO}</div>
        <div class="tx"><b>Learning objectives</b><i>Verbatim from the CAA CAP2090 documents</i></div></div>
    </div>`);
    } else {
      html(`<div class="hd" style="padding-top:18px"><h1 class="vt">Add someone</h1>
        <div class="sub">They get their own articles, objectives, exam record, quiz history and
        flashcards — completely separate from ${esc(activeName())}'s.</div></div>`);
    }
    html(`<h2 class="sec">${adding ? 'Their name' : 'First, who are you?'}</h2>
      <div class="card">
        <label class="f" for="wName">Your name</label>
        <input type="text" id="wName" maxlength="24" autocomplete="given-name" autocapitalize="words"
          placeholder="e.g. Bailey" value="${esc(SETUP.name)}" class="ti">
        <div id="wErr" class="tiny" style="color:var(--red);margin-top:8px;display:none"></div>
        ${adding ? '<div class="tiny" style="margin-top:9px">Anything already on this device is untouched.</div>' : ''}
      </div>
      <button class="btn" style="margin-top:14px" id="wNext">Continue</button>
      <button class="btn sec" style="margin-top:10px" id="wImp">${adding ? 'Import them from a file' : 'I already have a progress file'}</button>
      ${adding ? '<button class="btn grey" style="margin-top:10px" id="wCancel">Cancel</button>' : ''}
      <div class="foot">Nothing is uploaded anywhere. Progress is saved in this browser on this device.</div>`);
    if ($('#wCancel')) $('#wCancel').onclick = () => { SETUP = null; back(); };
    const inp = $('#wName');
    setTimeout(() => { try { inp.focus(); } catch (e) {} }, 80);
    const go1 = () => {
      const n = inp.value.trim().slice(0, 24);
      if (!n) { $('#wErr').textContent = 'Put a name in so we know whose progress this is.'; $('#wErr').style.display = 'block'; return; }
      SETUP.name = n; SETUP.step = 2; render();
    };
    $('#wNext').onclick = go1;
    $('#wImp').onclick = pickImportFile;
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); go1(); } });
    return;
  }

  if (step === 2) {
    setupHead(2, adding ? 'Where are they up to?' : 'Where are you up to?',
      'Tap the furthest point you have reached. This only sets a sensible starting exam '
      + 'order — it can be changed any time.');
    html(stageLadder(SETUP.stage, 'data-stage'));
    bind('[data-stage]', e => { SETUP.stage = e.currentTarget.dataset.stage; render(); });
    if (SETUP.stage) {
      const pid = suggestPlan(SETUP.stage);
      html(`<div class="note b" style="margin-top:14px"><b>Suggested order: ${esc(planById(pid).name)}</b>
        ${esc(planById(pid).desc)}</div>`);
    }
    html(`<button class="btn" style="margin-top:14px" id="s2next">${SETUP.stage ? 'Continue' : 'Skip this'}</button>
      <button class="btn grey" style="margin-top:10px" id="s2back">Back</button>`);
    $('#s2next').onclick = () => { SETUP.step = 3; render(); };
    $('#s2back').onclick = () => { SETUP.step = 1; render(); };
    return;
  }

  // a stage change can make the medical step inapplicable — never strand the user on it
  if (step === 4 && !medStep()) SETUP.step = 3;
  if (SETUP.step === 4) return setupMedical(adding);

  // step 3 — home airfield
  setupHead(3, adding ? 'Where do they fly from?' : 'Where do you fly from?',
    'Optional. It personalises the app and puts conditions at your field on the home screen.');
  html(`<div class="card">
    <label class="f" for="wIcao">Home airfield</label>
    <input type="text" id="wIcao" maxlength="28" autocapitalize="characters" autocomplete="off"
      spellcheck="false" placeholder="Code or name — EGLM, Waltham…" value="${esc(SETUP.field)}" class="ti"
      style="text-transform:uppercase;letter-spacing:.04em">
    <div id="wFound" class="acfound" style="display:none"></div>
    <div id="wList" class="aclist" style="display:none"></div>
    <div id="wIcaoErr" class="tiny" style="color:var(--red);margin-top:8px;display:none"></div>
  </div>
  <div class="note b" style="margin-top:12px"><b>Conditions come with it</b>
    Home will show the METAR for your field, or the nearest station that issues one — most small
    GA strips do not. No setup needed.</div>
  <button class="btn" style="margin-top:14px" id="s3done">${medStep() ? 'Continue' : 'Start studying'}</button>
  <button class="btn grey" style="margin-top:10px" id="s3back">Back</button>`);

  const ic = $('#wIcao');
  wireAirfield('#wIcao', '#wList', '#wFound', null);
  $('#s3back').onclick = () => { SETUP.step = 2; render(); };
  $('#s3done').onclick = () => {
    if (P.list.some(x => x.name.toLowerCase() === SETUP.name.toLowerCase())) {
      alertish('There is already a profile called ' + SETUP.name + '. It will be numbered.');
    }
    const v = ic.value.trim().toUpperCase();
    if (v && !afByCode(v)) {
      $('#wIcaoErr').textContent = 'Pick an airfield from the list, or clear the box to skip.';
      $('#wIcaoErr').style.display = 'block'; return;
    }
    SETUP.field = v;
    if (medStep()) { SETUP.step = 4; render(); } else finishSetup(adding);
  };
};

/** Turn the answers into a profile and open the app. */
function finishSetup(adding) {
  const data = blank();
  data.stage = SETUP.stage; data.field = SETUP.field; data.wx = '';
  data.planId = suggestPlan(SETUP.stage);
  if (SETUP.med === 'yes') {
    const r = medExpiry(SETUP.medIssue, SETUP.dob);
    data.medClass = SETUP.medClass;
    if (r) data.medical = iso(r.exp);
    if (SETUP.dob) data.dob = SETUP.dob;
  }
  if (LEGACY && !adding) Object.assign(data, migrate(LEGACY),
    { stage: data.stage, field: data.field, planId: data.planId,
      medical: data.medical, medClass: data.medClass, dob: data.dob });
  const nm = SETUP.name; SETUP = null;
  addProfile(nm, data);
}

/** Step 4 — the medical, which gates first solo. */
function setupMedical(adding) {
  const held = medHeld(), who = adding ? 'they' : 'you', Who = adding ? 'They' : 'You';
  if (held && !SETUP.med) SETUP.med = 'yes';

  setupHead(4,
    held ? (adding ? 'Their medical' : 'Your medical')
         : (adding ? 'Do they have a medical?' : 'Do you have a medical?'),
    held ? Who + ' will already hold one — nobody flies solo without it. Add the dates and the '
           + 'app will keep an eye on the expiry.'
         : 'Not needed yet, but it has to be in hand before ' + who + ' can fly solo.');

  const opts = held
    ? [['yes', 'Yes \u2014 add the dates', 'The expiry is worked out for you'],
       ['skip', 'Add it later', 'Set it in settings whenever']]
    : [['yes', 'Yes, I have one', 'Enter the dates and the expiry is worked out'],
       ['no', 'Not yet', 'We will show you what is involved'],
       ['skip', 'Skip for now', 'Add it later in settings']];
  html('<div class="grp">' + opts.map(([k, t, d]) => `
    <button class="row" data-med="${k}">
      <div class="ic" style="--c:var(--${SETUP.med === k ? 'blue' : 'tx3'})">${SETUP.med === k ? '&#10003;' : '&#8226;'}</div>
      <div class="tx"><b>${t}</b><i>${d}</i></div></button>`).join('') + '</div>');
  bind('[data-med]', e => { SETUP.med = e.currentTarget.dataset.med; render(); });

  if (SETUP.med === 'yes') {
    html(`<div class="card" style="margin-top:14px">
      <div class="fld"><label class="f" for="mCls">Certificate</label>
        <select id="mCls">
          <option value="2"${SETUP.medClass === '2' ? ' selected' : ''}>Class 2</option>
          <option value="lapl"${SETUP.medClass === 'lapl' ? ' selected' : ''}>LAPL medical</option>
          <option value="1"${SETUP.medClass === '1' ? ' selected' : ''}>Class 1</option>
        </select></div>
      <div class="fld"><label class="f" for="mIss">Date of the medical</label>
        <input type="date" id="mIss" value="${esc(SETUP.medIssue)}"></div>
      <div class="fld"><label class="f" for="mDob">Your date of birth</label>
        <input type="date" id="mDob" value="${esc(SETUP.dob)}">
        <div class="tiny" style="margin-top:5px">Only used to work out the expiry — validity depends
          on your age when it was issued.</div></div>
      <div id="mOut" class="note b" style="margin-top:12px;display:none"></div>
    </div>`);
    const recalc = () => {
      SETUP.medClass = $('#mCls').value; SETUP.medIssue = $('#mIss').value; SETUP.dob = $('#mDob').value;
      const r = medExpiry(SETUP.medIssue, SETUP.dob);
      const box = $('#mOut');
      if (!r) { box.style.display = 'none'; return; }
      box.style.display = 'block';
      box.innerHTML = `<b>Valid until ${fmt(r.exp)}</b>Issued at ${r.age}, so ${r.months} months`
        + (r.capped ? ' — capped, because a certificate issued before '
            + (r.age < 40 ? '40 stops at 42' : '50 stops at 51') + ' (MED.A.045).' : '.')
        + ' Check it against the certificate.';
    };
    ['mCls', 'mIss', 'mDob'].forEach(id => $('#' + id).addEventListener('input', recalc));
    $('#mCls').addEventListener('change', recalc);
    recalc();
  }

  if (SETUP.med === 'no') {
    html(`<div class="note o" style="margin-top:14px"><b>You need one before your first solo</b>
      Part-FCL is explicit that the appropriate medical certificate must be obtained before solo
      flying is permitted. Most PPL students get a <b>Class 2</b>. Leave it late and it becomes the
      thing holding up your training.</div>
      <h2 class="sec">What is involved</h2><div class="grp">
        <div class="row"><div class="ic" style="--c:var(--blue)">1</div>
          <div class="tx"><b>CAA Customer Portal account</b><i>The same login you will need for the
            e-Exams, so set it up once</i></div></div>
        <div class="row"><div class="ic" style="--c:var(--indigo)">2</div>
          <div class="tx"><b>Apply in Cellma</b><i>The CAA medical records system, reached through
            the portal. Complete the application <b>before</b> your appointment — it replaced the
            old paper forms and also lets you track progress</i></div></div>
        <div class="row"><div class="ic" style="--c:var(--green)">3</div>
          <div class="tx"><b>See an AME</b><i>Book an Aeromedical Examiner directly. A Class 2 can be
            done with any UK AME. They charge for the examination on top of the CAA fee</i></div></div>
      </div>
      <a class="btn sec" style="margin-top:12px;display:block;text-decoration:none"
        href="https://www.caa.co.uk/general-aviation/pilot-licences/applications/medical/apply-for-a-class-2-medical-certificate/"
        target="_blank" rel="noopener">How to apply for a Class 2 &#8599;</a>`);
  }

  html(`<button class="btn" style="margin-top:14px" id="s4done">Start studying</button>
    <button class="btn grey" style="margin-top:10px" id="s4back">Back</button>`);
  $('#s4back').onclick = () => { SETUP.step = 3; render(); };
  $('#s4done').onclick = () => finishSetup(adding);
}

/**
 * The medical only matters once someone is actually flying: before that it is a
 * question with no useful answer. From "flying regularly" on it is worth asking,
 * and from first solo on they must already hold one — so that becomes a
 * confirmation rather than a question.
 */
const medStep = () => !SETUP.stage || stageIdx(SETUP.stage) >= stageIdx('early');
const medHeld = () => stageIdx(SETUP.stage) >= stageIdx('solo');
const setupSteps = () => medStep() ? 4 : 3;

function setupHead(n, title, sub) {
  const tot = setupSteps();
  html(`<div class="hd" style="padding-top:26px">
    <div style="display:flex;gap:6px;margin-bottom:14px">
      ${Array.from({ length: tot }, (_, i) => `<div style="flex:1;height:4px;border-radius:99px;background:var(--${i < n ? 'blue' : 'fill'})"></div>`).join('')}
    </div>
    <div class="sub" style="margin-bottom:4px">Step ${n} of ${tot}</div>
    <h1 class="vt">${esc(title)}</h1>
    <div class="sub" style="margin-top:8px">${esc(sub)}</div></div>`);
}

/** prompt() is blocked in some embedded browsers, so names are entered in-app. */
VIEWS.nameentry = function (p) {
  const renaming = p.mode === 'rename';
  const pr = renaming ? P.list.find(x => x.id === p.id) : null;
  if (renaming && !pr) { back(); return; }
  navbar(renaming ? 'Rename' : 'Add someone', '');
  html(`<div class="hd" style="padding-top:14px">
    <h1 class="vt">${renaming ? 'Rename profile' : 'Who else is studying?'}</h1>
    <div class="sub">${renaming ? 'Only the name changes — progress is untouched.'
      : 'They get their own articles, objectives, exam record, quiz history and flashcards.'}</div></div>`);
  html(`<div class="card">
    <label class="f" for="nmIn">Name</label>
    <input type="text" id="nmIn" maxlength="24" autocomplete="off" autocapitalize="words"
      placeholder="e.g. Phoebe" value="${renaming ? esc(pr.name) : ''}"
      style="width:100%;background:var(--fill);color:var(--tx);border:0;border-radius:10px;
        padding:12px;font:inherit;font-size:17px">
    <div id="nmErr" class="tiny" style="color:var(--red);margin-top:8px;display:none"></div>
  </div>
  <button class="btn" style="margin-top:14px" id="nmSave">${renaming ? 'Save' : 'Create profile'}</button>
  <button class="btn grey" style="margin-top:10px" id="nmCancel">Cancel</button>`);

  const inp = $('#nmIn'), err = $('#nmErr');
  setTimeout(() => { try { inp.focus(); } catch (e) {} }, 60);
  const fail = m => { err.textContent = m; err.style.display = 'block'; };
  const submit = () => {
    const n = inp.value.trim().slice(0, 24);
    if (!n) return fail('Give them a name.');
    const taken = P.list.some(x => x.name.toLowerCase() === n.toLowerCase() && (!pr || x.id !== pr.id));
    if (taken) return fail('There is already a profile called ' + n + '.');
    if (renaming) { pr.name = n; saveProfiles(); back(); }
    else { stack.pop(); addProfile(n); }
  };
  $('#nmSave').onclick = submit;
  $('#nmCancel').onclick = back;
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); submit(); } });
};

VIEWS.importfile = function () {
  navbar('Import', '');
  if (!IMPORTING) { back(); return; }
  if (IMPORTING.kind === 'error') {
    html(`<div class="empty"><div class="em">&#128533;</div><h3>That file could not be read</h3>
      <p>${esc(IMPORTING.msg)}</p></div>
      <button class="btn" id="tryAgain">Pick another file</button>
      <button class="btn grey" style="margin-top:10px" id="cancelImp">Cancel</button>`);
    $('#tryAgain').onclick = () => { IMPORTING = null; stack.pop(); pickImportFile(); };
    $('#cancelImp').onclick = () => { IMPORTING = null; back(); };
    return;
  }
  const when = IMPORTING.exported || (IMPORTING.payload && IMPORTING.payload.exported);
  const dateLine = when ? 'Exported ' + fmt(new Date(when)) : 'No export date in the file';

  if (IMPORTING.kind === 'backup') {
    const list = IMPORTING.payload.profiles;
    html(`<div class="hd" style="padding-top:14px"><h1 class="vt">Whole-device backup</h1>
      <div class="sub">${list.length} profiles · ${esc(dateLine)}</div></div>`);
    html('<div class="grp">' + list.map(pr => {
      const t = summarise(pr.data || {});
      return `<div class="row"><div class="ic" style="--c:var(--blue)">${esc(initials(pr.name || '?'))}</div>
        <div class="tx"><b>${esc(pr.name || 'Unnamed')}</b><i>${t.pass}/9 exams · ${t.read} article${t.read === 1 ? '' : 's'} · ${t.lo} objective${t.lo === 1 ? '' : 's'}</i></div></div>`;
    }).join('') + '</div>');
    html(`<div class="note r" style="margin-top:16px"><b>This replaces everything</b>
      Every profile currently on this device, and all of their progress, will be removed and
      replaced by the ${list.length} above.</div>
      <button class="btn dgr" style="margin-top:14px" id="doRestore">Replace all profiles</button>
      <button class="btn grey" style="margin-top:10px" id="cancelImp">Cancel</button>`);
    $('#doRestore').onclick = () => {
      askConfirm({ title: 'Replace every profile?',
        body: 'All ' + P.list.length + ' profile' + (P.list.length === 1 ? '' : 's') +
          ' on this device, and all their progress, will be deleted and replaced by the ' +
          list.length + ' in this file. This cannot be undone.',
        yes: 'Replace everything', danger: true }, () => {
      P.list.forEach(pr => { try { localStorage.removeItem(dataKey(pr.id)); } catch (e) {} });
      const fresh = [];
      list.forEach(pr => {
        const id = newId();
        fresh.push({ id: id, name: (pr.name || 'Imported').slice(0, 24) });
        writeJSON(dataKey(id), migrate(pr.data || {}));
      });
        P = { list: fresh, active: fresh[0].id, theme: IMPORTING.payload.theme || P.theme };
        saveProfiles(); loadState(); IMPORTING = null;
        if (P.theme) document.documentElement.dataset.t = P.theme; else document.documentElement.removeAttribute('data-t');
        tab('home');
        alertish('Restored ' + fresh.length + ' profile' + (fresh.length === 1 ? '' : 's') + '.');
      });
    };
    $('#cancelImp').onclick = () => { IMPORTING = null; back(); };
    return;
  }

  const t = summarise(IMPORTING.data);
  const clash = P.list.some(p => p.name.toLowerCase() === IMPORTING.name.toLowerCase());
  html(`<div class="hd" style="padding-top:14px"><h1 class="vt">${esc(IMPORTING.name)}</h1>
    <div class="sub">${esc(dateLine)}</div></div>`);
  html(`<div class="grp"><div class="row">
      <div class="ic" style="--c:var(--blue)">${esc(initials(IMPORTING.name))}</div>
      <div class="tx"><b>In this file</b><i>${t.pass}/9 exams passed · ${t.read} article${t.read === 1 ? '' : 's'} read ·
        ${t.lo} objective${t.lo === 1 ? '' : 's'} ticked · ${t.srs} card${t.srs === 1 ? '' : 's'} scheduled</i></div></div></div>`);

  const first = needsSetup();
  html(`<h2 class="sec">${first ? 'Ready to go' : 'Restore this'}</h2>
    <button class="btn ${first ? '' : 'dgr'}" id="asNew">${first ? 'Use this' : 'Replace what is on this device'}</button>
    <div class="note ${first ? 'b' : 'r'}" style="margin-top:10px">${first
      ? 'This becomes your record on this device — progress, exam record, flashcards, flight log and settings.'
      : 'Everything currently here is replaced: progress, exam record, flashcards, flight log and settings. Export first if you might want it back.'}</div>
    <button class="btn grey" style="margin-top:18px" id="cancelImp">Cancel</button>`);

  $('#asNew').onclick = () => {
    const imp = IMPORTING;
    const apply = () => {
      // settings travel with the file so a new device comes up configured
      if (imp.settings) {
        if (imp.settings.theme != null) P.theme = imp.settings.theme;
        if (imp.settings.cwKey) P.cwKey = imp.settings.cwKey;
      }
      if (needsSetup()) { IMPORTING = null; addProfile(imp.name, imp.data); }
      else {
        const pr = P.list.find(x => x.id === P.active);
        if (pr && imp.name) pr.name = imp.name;
        saveProfiles();
        S = migrate(imp.data); flush(); IMPORTING = null; tab('home');
      }
      if (P.theme) document.documentElement.dataset.t = P.theme;
      else document.documentElement.removeAttribute('data-t');
      alertish('Restored ' + imp.name + '.');
    };
    if (needsSetup()) apply();
    else askConfirm({ title: 'Replace everything on this device?',
      body: 'Your current progress, exam record, flashcards, flight log and settings are '
        + 'overwritten by ' + imp.name + '\u2019s. This cannot be undone.',
      yes: 'Replace', danger: true }, apply);
  };
  $('#cancelImp').onclick = () => { IMPORTING = null; back(); };
};

/* ============================ PROFILES ============================ */

VIEWS.profiles = function (p) {
  const which = (p && p.tab) || 'flying';
  navbar('You', '');
  const t = summarise(S);
  const st = logStats();
  const F = (S.flights || []).slice().sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  html(`<div class="hd" style="padding-top:12px;display:flex;align-items:center;gap:12px">
    <div style="flex:1;min-width:0">
      <h1 class="vt">${esc(activeName())}</h1>
      <div class="sub">${S.stage ? esc(stageLabel(S.stage)) : 'Stage not set'}${
        S.field ? ' · ' + esc(S.field) : ''}</div></div>
    <button id="pSet" class="rndbtn" aria-label="Settings">
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.1"/>
        <path d="M19.4 14.5a1.6 1.6 0 0 0 .33 1.78l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.6 1.6 0 0 0-1.78-.33 1.6 1.6 0 0 0-1 1.47V21a2 2 0 1 1-4 0v-.11a1.6 1.6 0 0 0-1.05-1.47 1.6 1.6 0 0 0-1.78.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.6 1.6 0 0 0 .33-1.78 1.6 1.6 0 0 0-1.47-1H3a2 2 0 1 1 0-4h.11a1.6 1.6 0 0 0 1.47-1.05 1.6 1.6 0 0 0-.33-1.78l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.6 1.6 0 0 0 1.78.33H9a1.6 1.6 0 0 0 1-1.47V3a2 2 0 1 1 4 0v.11a1.6 1.6 0 0 0 1 1.47 1.6 1.6 0 0 0 1.78-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.6 1.6 0 0 0-.33 1.78V9a1.6 1.6 0 0 0 1.47 1H21a2 2 0 1 1 0 4h-.11a1.6 1.6 0 0 0-1.47 1z"/></svg>
    </button>
  </div>`);
  $('#pSet').onclick = () => go('training');

  // A map of one home airfield says nothing, and the empty state below already
  // covers it — so the map appears once there is a route to draw.
  if (F.length) html(mapFrame(F, S.field, 300));

  html(`<div class="big2" style="margin-top:12px">
    <div class="s"><div class="v">${st.total.toFixed(1)}</div><div class="l">Hours</div></div>
    <div class="s"><div class="v">${t.pass}</div><div class="l">of 9 exams</div></div>
    <div class="s"><div class="v">${st.nFields}</div><div class="l">Airfields</div></div>
  </div>`);

  html(`<div class="seg" id="ptab" style="margin-top:14px">
    <button data-x="flying" aria-selected="${which === 'flying'}">Flying</button>
    <button data-x="study" aria-selected="${which === 'study'}">Study</button></div>`);
  bind('#ptab button', e => { stack[stack.length - 1].p = { tab: e.currentTarget.dataset.x }; render(); });

  if (which === 'flying') {
    html(`<div class="grp">
      <button class="row" id="pLog"><div class="ic" style="--c:var(--teal)">&#9992;</div>
        <div class="tx"><b>Flight log</b><i>${st.n ? st.n + ' flight' + (st.n === 1 ? '' : 's') + ' · ' + st.solo.toFixed(1) + ' solo · ' + st.ldg + ' landings' : 'Nothing logged yet'}</i></div>
        <div class="chev">&#8250;</div></button>
      ${st.nm ? `<div class="row"><div class="tx"><b>Distance flown</b>${st.longest && routeNM(st.longest) >= 1
        ? '<i>Longest: ' + esc(legs(st.longest).join(' → ')) + ', ' + Math.round(routeNM(st.longest)) + ' NM</i>' : ''}</div>
        <div class="val">${st.nm.toLocaleString('en-GB')} NM</div></div>` : ''}
    </div>`);
    $('#pLog').onclick = () => go('log');

    const regs = Object.entries(st.regs).sort((a, b) => b[1].h - a[1].h);
    if (regs.length) {
      const max = regs[0][1].h || 1;
      html('<h2 class="sec">Time in type</h2><div class="grp">' + regs.map(([reg, r]) => `
        <div class="row"><div class="ic" style="--c:var(--teal)">&#9992;</div>
          <div class="tx"><b>${esc(reg)}</b><i>${esc(r.type || 'Type not recorded')} · ${r.n} flight${r.n === 1 ? '' : 's'}</i>
            <div class="pbar" style="margin-top:7px"><i style="width:${Math.round(r.h / max * 100)}%;background:var(--teal)"></i></div></div>
          <span class="hrs">${r.h.toFixed(1)}<small>hours</small></span></div>`).join('') + '</div>');
    }

    const flds = Object.entries(st.fields).sort((a, b) => b[1] - a[1]);
    if (flds.length) {
      html('<h2 class="sec">Airfields visited</h2><div class="grp">' + flds.slice(0, 8).map(([c, k]) => {
        const a = afByCode(c);
        return `<div class="row"><div class="ic wide" style="--c:var(--${c === S.field ? 'orange' : 'blue'})">${esc(c)}</div>
          <div class="tx"><b>${esc(a ? a[1] : c)}</b><i>${esc(a && a[2] ? a[2] : '')}</i></div>
          <div class="val">${k}</div></div>`;
      }).join('') + '</div>');
    }

    if (S.medical) {
      const md = new Date(S.medical + 'T00:00:00'), dl = daysTo(md);
      const col = dl < 0 ? 'red' : dl < 60 ? 'orange' : 'green';
      html(`<h2 class="sec">Medical</h2><div class="grp">
        <button class="row" id="pMed"><div class="ic" style="--c:var(--${col})">&#10010;</div>
          <div class="tx"><b>${S.medClass === '1' ? 'Class 1' : S.medClass === 'lapl' ? 'LAPL medical' : 'Class 2'}</b>
            <i>${dl < 0 ? 'Expired ' + fmt(md) : 'Valid until ' + fmt(md)}</i></div>
          <span class="bdg ${col === 'green' ? 'g' : col === 'orange' ? 'o' : 'r'}">${dl < 0 ? 'expired' : dl + ' days'}</span>
          <div class="chev">&#8250;</div></button></div>`);
      $('#pMed').onclick = () => go('training');
    } else {
      html(`<div class="note o" style="margin-top:14px"><b>No medical recorded</b>
        You need one before you can fly solo. Add it in settings and it will be tracked here.</div>`);
    }
    if (!F.length) html(`<div class="empty" style="padding-top:24px"><div class="em">&#9992;</div>
      <h3>No flights yet</h3><p>Log one and the map, hours and PPL progress fill in.</p></div>`);

  } else {
    html('<div class="grp">' + [
      ['Exams passed', t.pass + ' of 9'], ['Articles read', t.read + ' of 37'],
      ['Objectives studied', t.lo + ' of 551'], ['Flashcards started', t.srs + ' of 327'],
      ['Quiz attempts', String((S.hist || []).length)],
      ['Questions still wrong', String(Object.keys(S.wrong || {}).length)]
    ].map(([k, v]) => `<div class="row"><div class="tx"><b>${k}</b></div><div class="val">${v}</div></div>`).join('') + '</div>');

    const bests = SUBJECTS.filter(x => S.best[x.code] != null);
    if (bests.length) html('<h2 class="sec">Best mock scores</h2><div class="grp">' + bests.map(x => `
      <div class="row"><div class="ic" style="--c:var(--${META[x.code].c})">${x.code}</div>
        <div class="tx"><b>${esc(x.name)}</b></div>
        <span class="bdg ${S.best[x.code] >= PASS_MARK ? 'g' : 'o'}">${S.best[x.code]}%</span></div>`).join('') + '</div>');

    html(`<button class="btn sec" style="margin-top:14px" id="pExams">Open the Exams tab</button>`);
    $('#pExams').onclick = () => tab('plan');
  }

  html(`<div class="foot">Everything lives in this browser. Back it up from
    <button class="lnk" id="pSet2" style="background:none;border:0;color:var(--blue);
      font:inherit;text-decoration:underline;cursor:pointer">settings</button>.</div>`);
  $('#pSet2').onclick = () => go('training');
};

/** One file with the lot. */
function exportProfile() {
  flush();
  download({ app: 'ppl-theory', kind: 'profile', name: activeName(),
             exported: new Date().toISOString(),
             settings: { theme: P.theme, cwKey: P.cwKey || '' },
             data: S },
    'ppl-' + slug(activeName()) + '.json');
}

/**
 * Class 2 validity per MED.A.045(a)(3): 60 months under 40, 24 months from 40 to 50,
 * 12 months above 50 — with the hard stops that one issued before 40 ceases at 42, and
 * one issued before 50 ceases at 51.
 */
function medExpiry(issueISO, dobISO) {
  if (!issueISO || !dobISO) return null;
  const issue = new Date(issueISO + 'T00:00:00'), dob = new Date(dobISO + 'T00:00:00');
  if (isNaN(issue) || isNaN(dob)) return null;
  let age = issue.getFullYear() - dob.getFullYear();
  const m = issue.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && issue.getDate() < dob.getDate())) age--;
  const months = age < 40 ? 60 : age < 50 ? 24 : 12;
  let exp = new Date(issue.getFullYear(), issue.getMonth() + months, issue.getDate());
  const birthday = nth => new Date(dob.getFullYear() + nth, dob.getMonth(), dob.getDate());
  if (age < 40 && exp > birthday(42)) exp = birthday(42);
  if (age >= 40 && age < 50 && exp > birthday(51)) exp = birthday(51);
  return { exp: exp, age: age, months: months,
           capped: (age < 40 && exp.getTime() === birthday(42).getTime()) ||
                   (age >= 40 && age < 50 && exp.getTime() === birthday(51).getTime()) };
}
const iso = d => d.getFullYear() + '-' + pad(d.getMonth() + 1, 2) + '-' + pad(d.getDate(), 2);

/* ============================ FLIGHT LOG ============================ */
/* A simple logbook, plus the thing that makes it worth keeping here: progress
   against the PPL(A) experience requirements in FCL.210.A, which the app already
   quotes. Distances come from the bundled airfield coordinates. */

const NM_PER_KM = 0.539957;
function haversineNM(a, b) {
  const R = 3440.065, r = Math.PI / 180;
  const dLat = (b[0] - a[0]) * r, dLon = (b[1] - a[1]) * r;
  const h = Math.sin(dLat / 2) ** 2 +
    Math.cos(a[0] * r) * Math.cos(b[0] * r) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
/** ICAO codes of a flight, in order, ignoring anything we do not know. */
function legs(f) {
  return [f.from].concat((f.via || '').split(/[,\s]+/)).concat([f.to])
    .map(x => (x || '').trim().toUpperCase()).filter(Boolean)
    .filter((v, i, a) => i === 0 || v !== a[i - 1]);
}
function routeNM(f) {
  const pts = legs(f).map(afByCode).filter(Boolean).map(a => [a[3], a[4]]);
  let d = 0;
  for (let i = 1; i < pts.length; i++) d += haversineNM(pts[i - 1], pts[i]);
  return d;
}
const hrs = v => (Math.round((+v || 0) * 10) / 10);
const fTotal = f => hrs((+f.dual || 0) + (+f.p1 || 0));
const isSolo = f => (+f.p1 || 0) > 0 && (+f.dual || 0) === 0;
const isXC = f => legs(f).length > 1;

/** Totals and PPL(A) requirement progress. */
function logStats() {
  const F = S.flights || [];
  const t = { n: F.length, total: 0, dual: 0, p1: 0, solo: 0, soloXC: 0, ldg: 0, nm: 0,
              qxc: null, longest: null, types: {}, regs: {}, fields: {} };
  F.forEach(f => {
    const h = fTotal(f), d = routeNM(f);
    t.total += h; t.dual += (+f.dual || 0); t.p1 += (+f.p1 || 0);
    t.ldg += (+f.ldg || 0); t.nm += d;
    if (isSolo(f)) { t.solo += (+f.p1 || 0); if (isXC(f)) t.soloXC += (+f.p1 || 0); }
    if (f.type) t.types[f.type] = hrs((t.types[f.type] || 0) + h);
    if (f.reg) {
      const r = t.regs[f.reg] || (t.regs[f.reg] = { h: 0, n: 0, type: f.type || '' });
      r.h = hrs(r.h + h); r.n++; if (!r.type && f.type) r.type = f.type;
    }
    legs(f).forEach(c => t.fields[c] = (t.fields[c] || 0) + 1);
    if (!t.longest || d > routeNM(t.longest)) t.longest = f;
    // the qualifying cross-country: solo, 270 km / 150 NM, landings away
    if (isSolo(f) && d >= 150 && legs(f).length >= 3) {
      if (!t.qxc || d > routeNM(t.qxc)) t.qxc = f;
    }
  });
  ['total', 'dual', 'p1', 'solo', 'soloXC'].forEach(k => t[k] = hrs(t[k]));
  t.nm = Math.round(t.nm);
  t.nFields = Object.keys(t.fields).length;
  return t;
}

/* ---- the map ---- */

function bbox(pts, pad) {
  let a = 90, b = -90, c = 180, d = -180;
  pts.forEach(p => { a = Math.min(a, p[0]); b = Math.max(b, p[0]); c = Math.min(c, p[1]); d = Math.max(d, p[1]); });
  const dy = Math.max(b - a, 0.6) * pad, dx = Math.max(d - c, 0.9) * pad;
  return [a - dy, b + dy, c - dx, d + dx];
}

/**
 * Route map. Equirectangular with an x scale of cos(mid latitude), which keeps
 * shapes honest over a country-sized area without needing a projection library.
 */
function routeMap(flights, homeCode, h) {
  const pts = [];
  flights.forEach(f => legs(f).map(afByCode).filter(Boolean).forEach(a => pts.push([a[3], a[4]])));
  const home = afByCode(homeCode);
  if (home) pts.push([home[3], home[4]]);
  if (!pts.length) return '';

  const [la0, la1, lo0, lo1] = bbox(pts, 0.35);
  const midLat = (la0 + la1) / 2, kx = Math.cos(midLat * Math.PI / 180);
  const W = 640, H = h || 380;
  const spanX = (lo1 - lo0) * kx, spanY = (la1 - la0);
  const sc = Math.min(W / spanX, H / spanY);
  const ox = (W - spanX * sc) / 2, oy = (H - spanY * sc) / 2;
  const X = lon => ox + (lon - lo0) * kx * sc;
  const Y = lat => oy + (la1 - lat) * sc;

  // detailed coastline when the whole view sits inside the British Isles
  const inUK = lo0 > -12 && lo1 < 4 && la0 > 48 && la1 < 62;
  const rings = (inUK && window.COAST_UK) ? window.COAST_UK : (window.COAST || []);
  const land = rings.map(r => {
    const inside = r.some(p => p[1] > la0 - 6 && p[1] < la1 + 6 && p[0] > lo0 - 8 && p[0] < lo1 + 8);
    if (!inside) return '';
    return '<path class="land" d="M' + r.map(p => X(p[0]).toFixed(1) + ' ' + Y(p[1]).toFixed(1)).join('L') + 'Z"/>';
  }).join('');

  const routes = flights.map(f => {
    const p = legs(f).map(afByCode).filter(Boolean);
    if (p.length < 2) return '';
    return '<path class="route" d="M' + p.map(a => X(a[4]).toFixed(1) + ' ' + Y(a[3]).toFixed(1)).join('L') + '"/>';
  }).join('');

  const visits = {};
  flights.forEach(f => legs(f).forEach(c => visits[c] = (visits[c] || 0) + 1));
  if (homeCode) visits[homeCode] = visits[homeCode] || 1;
  const dots = Object.keys(visits).map(c => {
    const a = afByCode(c); if (!a) return '';
    const r = Math.min(5.5, 2.4 + Math.log2(visits[c] + 1));
    const isHome = c === homeCode;
    return `<circle class="${isHome ? 'home' : 'fld'}" cx="${X(a[4]).toFixed(1)}" cy="${Y(a[3]).toFixed(1)}" r="${r.toFixed(1)}"/>
      <text x="${(X(a[4]) + r + 3).toFixed(1)}" y="${(Y(a[3]) + 3).toFixed(1)}">${esc(c)}</text>`;
  }).join('');

  return `<svg class="map" viewBox="0 0 ${W} ${H}" role="img"
    aria-label="Map of the aerodromes you have flown between">
    ${land}${routes}${dots}</svg>`;
}

/* ---------------- detailed map layer ----------------
   The SVG map above stays the default fallback: a few kB, themed with the app,
   and it still draws with no signal, which is the whole reason the service worker
   exists. On top of it sits a real basemap from OpenFreeMap — OpenStreetMap
   vector tiles served free, with no key, no account and no billing, drawn by
   MapLibre GL. It is a few hundred kB from a CDN and the tiles are cross-origin,
   so it needs a connection; anything that goes wrong falls straight back to the
   SVG. */

const MAPLIBRE_VER = '5.24.0';   // pinned: a style/API break should not reach the app silently
const OFM_STYLE = dark => 'https://tiles.openfreemap.org/styles/' + (dark ? 'fiord' : 'positron');

let ML = null;        // the loader promise, created once
let ML_BAD = '';      // set once loading has failed, so we stop retrying every render
const mapOn = () => !ML_BAD && navigator.onLine;

function loadMapLibre() {
  if (ML) return ML;
  ML = new Promise((ok, bad) => {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://unpkg.com/maplibre-gl@' + MAPLIBRE_VER + '/dist/maplibre-gl.css';
    document.head.appendChild(css);
    const el = document.createElement('script');
    el.src = 'https://unpkg.com/maplibre-gl@' + MAPLIBRE_VER + '/dist/maplibre-gl.js';
    el.async = true;
    el.onload = () => window.maplibregl ? ok(window.maplibregl) : bad(new Error('no maplibregl'));
    el.onerror = () => bad(new Error('map library did not load'));
    document.head.appendChild(el);
  });
  return ML;
}

const isDark = () => (P.theme === 'dark') ||
  (!P.theme && matchMedia('(prefers-color-scheme: dark)').matches);

/** Draw the same routes and airfields onto a real basemap. */
function drawDetail(el, ml, flights, homeCode) {
  const dark = isDark();
  const map = new ml.Map({
    container: el, style: OFM_STYLE(dark),
    dragRotate: false, pitchWithRotate: false, touchZoomRotate: true,
    attributionControl: { compact: true }
  });
  map.touchZoomRotate.disableRotation();
  map.addControl(new ml.NavigationControl({ showCompass: false }), 'top-left');
  // OpenStreetMap data is ODbL: the credit has to stay. Collapse it to the small
  // (i) instead, which is what compact mode is for.
  map.on('load', () => {
    const a = el.querySelector('.maplibregl-ctrl-attrib');
    if (a) a.classList.remove('maplibregl-compact-show');
  });

  const at = a => [a[4], a[3]];                       // MapLibre wants [lon, lat]
  const lines = [], seen = {}, bounds = new ml.LngLatBounds();

  flights.forEach(f => {
    const p = legs(f).map(afByCode).filter(Boolean);
    if (p.length < 2) return;
    lines.push({ type: 'Feature', geometry: { type: 'LineString', coordinates: p.map(at) } });
  });
  flights.forEach(f => legs(f).forEach(c => seen[c] = (seen[c] || 0) + 1));
  if (homeCode) seen[homeCode] = seen[homeCode] || 1;

  map.on('load', () => {
    map.addSource('routes', { type: 'geojson',
      data: { type: 'FeatureCollection', features: lines } });
    // a casing under the line, so it stays readable over any tile colour
    map.addLayer({ id: 'route-case', type: 'line', source: 'routes',
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: { 'line-color': dark ? '#000000' : '#ffffff',
               'line-opacity': .55, 'line-width': 6 } });
    map.addLayer({ id: 'route', type: 'line', source: 'routes',
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: { 'line-color': dark ? '#4da3ff' : '#007aff', 'line-width': 2.4 } });
  });

  // HTML markers rather than symbol layers: no dependency on the style's glyphs,
  // and the codes then match the app's own typography.
  Object.keys(seen).forEach(c => {
    const a = afByCode(c); if (!a) return;
    bounds.extend(at(a));
    const n = document.createElement('div');
    n.className = 'mpin' + (c === homeCode ? ' home' : '');
    n.innerHTML = '<i></i><span>' + esc(c) + '</span>';
    n.title = c + ' \u2014 ' + a[1];
    new ml.Marker({ element: n, anchor: 'center' }).setLngLat(at(a)).addTo(map);
  });

  if (bounds.isEmpty()) map.jumpTo({ center: [-2.5, 54], zoom: 4.6 });
  else if (Object.keys(seen).length === 1) map.jumpTo({ center: bounds.getCenter(), zoom: 9.5 });
  else map.fitBounds(bounds, { padding: 42, animate: false, maxZoom: 11 });
}

/**
 * Emit a map frame. The SVG renders immediately so there is never a blank box,
 * then the basemap is swapped in over it if it is switched on and actually loads.
 */
function mapFrame(flights, homeCode, h) {
  const svg = routeMap(flights, homeCode, h);
  if (!svg) return '';
  const id = 'mf' + (mapFrame.n = (mapFrame.n || 0) + 1);
  MAP_PENDING.push({ id: id, flights: flights, home: homeCode, h: h });
  return `<div class="mapwrap" id="${id}" style="margin-top:12px">${svg}</div>`;
}

const MAP_PENDING = [];

/** Run after render(): upgrade any frames that asked for Google, and wire the switch. */
function mountMaps() {
  const jobs = MAP_PENDING.splice(0);
  if (!mapOn()) {
    if (jobs.length) note(jobs[0].id, ML_BAD || 'No connection \u2014 showing the built-in map.');
    return;
  }
  jobs.forEach(j => {
    const wrap = $('#' + j.id); if (!wrap) return;
    loadMapLibre().then(ml => {
      const svg = wrap.querySelector('svg.map'); if (!svg) return;
      const el = document.createElement('div');
      el.className = 'dmap';
      el.style.height = Math.round((j.h || 300) * 0.62) + 'px';
      svg.replaceWith(el);
      drawDetail(el, ml, j.flights, j.home);
    }).catch(() => {
      // CDN blocked, tiles unreachable, or offline — the SVG is already on screen
      ML = null;
      ML_BAD = 'Detailed map could not load — showing the built-in map.';
      note(j.id, ML_BAD);
    });
  });

  function note(id, msg) {
    const w = $('#' + id);
    if (w && !w.querySelector('.mapnote')) {
      w.insertAdjacentHTML('beforeend', '<div class="mapnote">' + esc(msg) + '</div>');
    }
  }
}

/* ---- views ---- */

VIEWS.log = function () {
  navbar('Flight log', '');
  const F = (S.flights || []).slice().sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const t = logStats();

  html(`<div class="hd" style="padding-top:14px"><h1 class="vt">Flight log</h1>
    <div class="sub">${t.n} flight${t.n === 1 ? '' : 's'} · ${t.total.toFixed(1)} hours total</div></div>`);

  if (F.length) {
    html(mapFrame(F, S.field, 300));
    html(`<div class="big2" style="margin-top:12px">
      <div class="s"><div class="v">${t.total.toFixed(1)}</div><div class="l">Total hours</div></div>
      <div class="s"><div class="v">${t.p1.toFixed(1)}</div><div class="l">As P1</div></div>
      <div class="s"><div class="v">${t.ldg}</div><div class="l">Landings</div></div>
    </div>`);
  }

  html(`<button class="btn" style="margin-top:14px" id="addF">Log a flight</button>`);
  $('#addF').onclick = () => go('logedit', { id: null });

  // --- PPL(A) requirement progress
  const reqs = [
    ['Total flight time', t.total, 40, 'hours', 'FCL.210.A(a) — 35 on an approved ATO course'],
    ['Supervised solo', t.solo, 10, 'hours', 'FCL.210.A(a)(2)'],
    ['Solo cross-country', t.soloXC, 5, 'hours', 'FCL.210.A(a)(2)']
  ];
  html('<h2 class="sec">Towards the PPL(A)</h2><div class="grp">' + reqs.map(([nm, have, need, unit, cite]) => {
    const pc = Math.min(100, Math.round(have / need * 100));
    const done = have >= need;
    return `<div class="req">
      <div class="tick" style="background:var(--${done ? 'green' : 'fill'});color:var(--${done ? 'x' : 'tx3'})">${done ? '&#10003;' : ''}</div>
      <div class="rn"><b>${nm}</b><i>${cite}</i>
        <div class="pbar" style="margin-top:7px"><i style="width:${pc}%;background:var(--${done ? 'green' : 'blue'})"></i></div></div>
      <div class="logrow hrs"><span class="hrs">${have.toFixed(1)}<small>of ${need}</small></span></div>
    </div>`;
  }).join('') + `
    <div class="req">
      <div class="tick" style="background:var(--${t.qxc ? 'green' : 'fill'});color:#fff">${t.qxc ? '&#10003;' : ''}</div>
      <div class="rn"><b>Qualifying cross-country</b>
        <i>${t.qxc ? esc(legs(t.qxc).join(' → ')) + ' · ' + Math.round(routeNM(t.qxc)) + ' NM'
          : 'Solo, at least 270 km (150 NM), full-stop landings at two aerodromes other than departure'}</i></div>
    </div></div>`);
  html(`<div class="tiny" style="margin:8px 0 0 4px">Solo hours are flights logged with P1 time and
    no dual. Cross-country means the route has more than one aerodrome. Distances come from the
    bundled airfield coordinates — check them against your own planning.</div>`);

  // --- the flights
  if (!F.length) {
    html(`<div class="empty" style="padding-top:30px"><div class="em">&#9992;</div>
      <h3>No flights yet</h3><p>Log one and the map, totals and PPL progress fill in.</p></div>`);
    return;
  }
  html('<h2 class="sec">Flights</h2><div class="grp">' + F.map(f => {
    const nm = routeNM(f);
    return `<button class="row logrow" data-f="${esc(f.id)}">
      <div class="ic" style="--c:var(--${isSolo(f) ? 'green' : 'blue'})">${isSolo(f) ? 'S' : 'D'}</div>
      <div class="tx"><b>${esc(legs(f).join(' → ') || 'Local')}</b>
        <i>${f.date ? fmt(new Date(f.date + 'T00:00:00')) : 'No date'}${f.reg ? ' · ' + esc(f.reg) : ''}${f.type ? ' · ' + esc(f.type) : ''}${nm >= 1 ? ' · ' + Math.round(nm) + ' NM' : ''}</i></div>
      <span class="hrs">${fTotal(f).toFixed(1)}<small>${isSolo(f) ? 'solo' : 'dual'}</small></span>
      <div class="chev">&#8250;</div></button>`;
  }).join('') + '</div>');
  bind('[data-f]', e => go('logedit', { id: e.currentTarget.dataset.f }));
};

VIEWS.logedit = function (p) {
  const editing = !!p.id;
  const f = editing ? (S.flights || []).find(x => x.id === p.id) : null;
  if (editing && !f) { back(); return; }
  const v = f || { date: new Date().toISOString().slice(0, 10), type: '', reg: '',
                   from: S.field || '', via: '', to: S.field || '', dual: '', p1: '', ldg: 1, notes: '' };
  navbar(editing ? 'Edit flight' : 'Log a flight', '');

  const fld = (id, label, val, attrs, hint) => `<div class="fld">
    <label class="f" for="${id}">${label}</label>
    <input id="${id}" class="ti" value="${esc(val == null ? '' : String(val))}" ${attrs}>
    ${hint ? `<div class="tiny" style="margin-top:5px">${hint}</div>` : ''}</div>`;

  html(`<div class="card" style="margin-top:14px">
    ${fld('lfDate', 'Date', v.date, 'type="date"')}
    <div class="fld"><label class="f" for="lfFrom">From</label>
      <input id="lfFrom" class="ti" value="${esc(v.from)}" maxlength="28" autocapitalize="characters"
        spellcheck="false" placeholder="Code or name" style="text-transform:uppercase">
      <div id="lfFromFound" class="acfound" style="display:none"></div>
      <div id="lfFromList" class="aclist" style="display:none"></div></div>
    <div class="fld"><label class="f" for="lfVia">Via (optional)</label>
      <input id="lfVia" class="ti" value="${esc(v.via || '')}" maxlength="60" autocapitalize="characters"
        spellcheck="false" placeholder="Stops, e.g. EGBJ EGHR" style="text-transform:uppercase">
      <div id="lfViaFound" class="acfound" style="display:none"></div>
      <div id="lfViaList" class="aclist" style="display:none"></div>
      <div class="tiny" style="margin-top:5px">Search and tap to add each stop in order.</div></div>
    <div class="fld"><label class="f" for="lfTo">To</label>
      <input id="lfTo" class="ti" value="${esc(v.to)}" maxlength="28" autocapitalize="characters"
        spellcheck="false" placeholder="Code or name" style="text-transform:uppercase">
      <div id="lfToFound" class="acfound" style="display:none"></div>
      <div id="lfToList" class="aclist" style="display:none"></div></div>
  </div>
  <div class="card" style="margin-top:12px">
    ${fld('lfDual', 'Dual hours', v.dual, 'type="number" step="0.1" min="0" inputmode="decimal" placeholder="0.0"')}
    ${fld('lfP1', 'P1 hours', v.p1, 'type="number" step="0.1" min="0" inputmode="decimal" placeholder="0.0"', 'Includes supervised solo. Leave dual blank for a solo flight.')}
    ${fld('lfLdg', 'Landings', v.ldg, 'type="number" step="1" min="0" inputmode="numeric"')}
  </div>
  <div class="card" style="margin-top:12px">
    ${fld('lfType', 'Aircraft type', v.type, 'maxlength="24" placeholder="PA-28-161"')}
    ${fld('lfReg', 'Registration', v.reg, 'maxlength="10" autocapitalize="characters" spellcheck="false" placeholder="G-ABCD" style="text-transform:uppercase"')}
    ${fld('lfNotes', 'Notes', v.notes, 'maxlength="120" placeholder="Steep turns, PFLs"')}
  </div>
  <div id="lfCalc" class="note b" style="margin-top:12px"></div>
  <button class="btn" style="margin-top:12px" id="lfSave">${editing ? 'Save changes' : 'Add flight'}</button>
  ${editing ? '<button class="btn dgr sm" style="margin-top:10px" id="lfDel">Delete this flight</button>' : ''}`);

  wireAirfield('#lfFrom', '#lfFromList', '#lfFromFound', null);
  wireAirfield('#lfVia', '#lfViaList', '#lfViaFound', null, true);
  wireAirfield('#lfTo', '#lfToList', '#lfToFound', null);

  const read = () => ({
    id: v.id || ('f' + Date.now().toString(36)),
    date: $('#lfDate').value,
    from: $('#lfFrom').value.trim().toUpperCase(),
    via: $('#lfVia').value.trim().toUpperCase(),
    to: $('#lfTo').value.trim().toUpperCase(),
    dual: +$('#lfDual').value || 0, p1: +$('#lfP1').value || 0,
    ldg: +$('#lfLdg').value || 0,
    type: $('#lfType').value.trim(), reg: $('#lfReg').value.trim().toUpperCase(),
    notes: $('#lfNotes').value.trim()
  });
  const recalc = () => {
    const d = read(), nm = routeNM(d), tot = fTotal(d);
    $('#lfCalc').innerHTML = `<b>${tot.toFixed(1)} hours${isSolo(d) ? ' solo' : d.dual ? ' with an instructor' : ''}</b>`
      + (nm >= 1 ? Math.round(nm) + ' NM over ' + legs(d).length + ' aerodromes'
        + (isSolo(d) && nm >= 150 && legs(d).length >= 3 ? ' — counts as a qualifying cross-country' : '')
        : 'Add aerodromes to get a distance.');
  };
  ['lfFrom', 'lfVia', 'lfTo', 'lfDual', 'lfP1'].forEach(id =>
    $('#' + id).addEventListener('input', recalc));
  recalc();

  $('#lfSave').onclick = () => {
    const d = read();
    if (!d.date) { alertish('Give the flight a date.'); return; }
    if (!d.dual && !d.p1) { alertish('Log some dual or P1 time.'); return; }
    S.flights = S.flights || [];
    const i = S.flights.findIndex(x => x.id === d.id);
    if (i >= 0) S.flights[i] = d; else S.flights.push(d);
    save(); back();
    alertish(editing ? 'Flight updated.' : 'Flight logged.');
  };
  if ($('#lfDel')) $('#lfDel').onclick = () => askConfirm({
    title: 'Delete this flight?', body: 'It is removed from your log, totals and map.',
    yes: 'Delete', danger: true
  }, () => { S.flights = S.flights.filter(x => x.id !== v.id); save(); stack.pop(); render(); });
};

/* ============================ offline ============================ */

let SW_READY = false, SW_UPDATE = false;

function initOffline() {
  if (!('serviceWorker' in navigator)) return;
  // file:// has no service worker scope, and it is not needed there anyway
  if (location.protocol === 'file:') return;
  navigator.serviceWorker.register('sw.js').then(reg => {
    SW_READY = true;
    reg.addEventListener('updatefound', () => {
      const w = reg.installing;
      if (!w) return;
      w.addEventListener('statechange', () => {
        // a new shell is waiting and an old one is already in control
        if (w.state === 'installed' && navigator.serviceWorker.controller) {
          SW_UPDATE = true;
          alertish('An update is ready — reopen the app to use it.');
        }
      });
    });
  }).catch(() => {});
}

/* ============================ init ============================ */

if (P.theme) document.documentElement.dataset.t = P.theme;
document.querySelectorAll('#tabs button').forEach(b => b.onclick = () => tab(b.dataset.v));
render();
initOffline();
