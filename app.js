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
  newToday: {}, best: {}, stage: '', field: '', wx: '', planId: 'blocks', customOrder: null });

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
  s.hist = old.hist || []; s.d1 = old.d1 || ''; s.d2 = old.d2 || '';
  // profile settings — these were silently dropped before, which lost the whole setup
  ['stage', 'field', 'wx', 'planId', 'learnSort'].forEach(k => { if (old[k]) s[k] = old[k]; });
  if (Array.isArray(old.customOrder) && old.customOrder.length === 9) s.customOrder = old.customOrder.slice();
  if (Array.isArray(old.cardSubs)) s.cardSubs = old.cardSubs.slice();
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
  if (P.list.length < 2) return;
  P.list = P.list.filter(p => p.id !== id);
  try { localStorage.removeItem(dataKey(id)); } catch (e) {}
  if (P.active === id) P.active = P.list[0].id;
  saveProfiles(); loadState();
}

loadProfiles();
loadState();

const sub = c => (S.subj[c] = Object.assign({ st: 'none', att: 0, score: '', date: '' }, S.subj[c]));

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

const TABS = ['home', 'learn', 'quiz', 'cards', 'plan'];
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
  window.scrollTo(0, 0);
}

function html(s) { APP.insertAdjacentHTML('beforeend', s); }
function navbar(title, rightHtml) {
  html(`<div class="nav"><button class="back" id="nbBack">&#8249;&nbsp;Back</button>
    <div class="ttl">${esc(title)}</div><div class="rt">${rightHtml || ''}</div></div>`);
  $('#nbBack').onclick = back;
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
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  html(`<div class="hd" style="display:flex;align-items:flex-start;gap:12px">
    <div style="flex:1;min-width:0">
      <h1>${greet}, ${esc(activeName().split(' ')[0])}</h1>
      <div class="sub">${p === 9 ? 'All nine exams passed.' : (9 - p) + ' exam' + (p === 8 ? '' : 's') + ' to go · ' + dnArt + '/' + totArt + ' articles read'}</div>
    </div>
    <button id="avat" title="Switch profile" style="flex:none;width:40px;height:40px;border-radius:50%;
      background:var(--blue);color:#fff;font-size:15px;font-weight:600;margin-top:4px">${esc(initials(activeName()))}</button>
  </div>`);
  $('#avat').onclick = () => go('profiles');

  const strip = wxStrip();
  if (strip) { html(strip); $('#wxb').onclick = () => go('wx'); }

  // --- overall progress
  const overall = Math.round((dnLO / Math.max(1, totLO) * 0.6 + dnArt / Math.max(1, totArt) * 0.4) * 100);
  html(`<div class="hero" style="display:flex;align-items:center;gap:16px">
    <div style="position:relative;flex:none">${ring(overall, 68, 'blue', 6)}
      <div style="position:absolute;inset:0;display:grid;place-items:center;font-size:17px;font-weight:700">${overall}%</div></div>
    <div style="flex:1;min-width:0">
      <div style="font-weight:600;font-size:17px">Course progress</div>
      <div style="color:var(--tx2);font-size:14px;margin-top:3px">${dnLO} of ${totLO} learning objectives · ${dnArt} of ${totArt} articles</div>
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

  // --- home airfield
  if (S.field || S.wx || CLUB_WX[S.field]) {
    const links = [];
    const cw = clubWx(S.field);
    if (cw) links.push(`<a class="row" href="${esc(cw.url)}" target="_blank" rel="noopener">
      <div class="ic" style="--c:var(--teal)">&#9925;</div>
      <div class="tx"><b>${esc(cw.name)}</b><i>Live observation at the field</i></div><div class="chev">&#8599;</div></a>`);
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
  const dl = deadline18(S.d1), vd = deadline24(S.d2);
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
    html(`<div class="card"><div style="font-size:15px;font-weight:600;margin-bottom:10px">Exam record</div>
      <div class="fld"><label class="f">Status</label>
        <select id="fSt">${STATUSES.map(([v, l]) => `<option value="${v}"${v === st.st ? ' selected' : ''}>${l}</option>`).join('')}</select></div>
      <div class="fld"><label class="f">Attempts used (max 4)</label>
        <select id="fAt">${[0, 1, 2, 3, 4].map(v => `<option value="${v}"${v === st.att ? ' selected' : ''}>${v} of 4</option>`).join('')}</select></div>
      <div class="fld"><label class="f">Score achieved</label><input type="number" id="fSc" min="0" max="100" placeholder="%" value="${st.score}"></div>
      <div class="fld"><label class="f">Date passed</label><input type="date" id="fDt" value="${st.date}"></div>
    </div>`);
    $('#fSt').onchange = e => { st.st = e.target.value; save(); };
    $('#fAt').onchange = e => { st.att = +e.target.value; save(); render(); };
    $('#fSc').oninput = e => { st.score = e.target.value; save(); };
    $('#fDt').onchange = e => { st.date = e.target.value; save(); };

    if (st.att >= 3 && st.st !== 'passed')
      html(`<div class="note r" style="margin-top:12px"><b>Three attempts used</b>
        A fourth failure voids every pass you hold, in every subject. Do the further training your
        school requires, and do not book until you are comfortably above 75% on practice papers.</div>`);

    html(`<div class="card" style="margin-top:12px">
      <div style="font-size:15px;font-weight:600;margin-bottom:4px">Practice</div>
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

function startQuiz(opt) {
  const pool = shuffle(bank(opt.codes));
  const qs = pool.slice(0, Math.min(opt.n, pool.length)).map(q => {
    // shuffle the options, tracking where the correct one lands
    const pairs = q.a.map((t, i) => ({ t: t, ok: i === q.c }));
    shuffle(pairs);
    return { code: q.code, q: q.q, opts: pairs.map(x => x.t), c: pairs.findIndex(x => x.ok), why: q.why, ref: q.ref };
  });
  Q = { qs: qs, at: 0, ans: new Array(qs.length).fill(-1), mode: opt.mode, title: opt.title, t0: Date.now(), codes: opt.codes };
  go('quizrun');
}

VIEWS.quiz = function () {
  html(`<div class="hd"><h1>Quiz</h1><div class="sub">385 questions across the nine subjects</div></div>`);

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
      <div class="tx"><b>${esc(s.name)}</b><i>${SC[s.code].quiz.length} questions available</i></div>
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
  SUBJECTS.forEach(s => { qs = qs.concat(shuffle(bank([s.code])).slice(0, per)); });
  shuffle(qs);
  Q = {
    qs: qs.map(q => {
      const pairs = q.a.map((t, i) => ({ t: t, ok: i === q.c }));
      shuffle(pairs);
      return { code: q.code, q: q.q, opts: pairs.map(x => x.t), c: pairs.findIndex(x => x.ok), why: q.why, ref: q.ref };
    }),
    at: 0, ans: new Array(qs.length).fill(-1), mode: mode, title: title, t0: Date.now(),
    codes: SUBJECTS.map(s => s.code)
  };
  go('quizrun');
}

VIEWS.quizrun = function () {
  const q = Q.qs[Q.at], n = Q.qs.length;
  const chosen = Q.ans[Q.at];
  const reveal = Q.mode === 'practice' && chosen >= 0;
  navbar(Q.title, `<button id="qQuit" style="color:var(--blue)">End</button>`);
  $('#qQuit').onclick = () => { if (confirm('End this quiz? Your answers so far will be scored.')) finishQuiz(); };

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
      <div class="qtext" style="font-size:18px;margin:6px 0 12px">${esc(q.q)}</div>
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
    if (confirm('Reset spaced repetition for every card? Your article and objective progress is not affected.')) {
      S.srs = {}; S.newToday = {}; save(); render();
    }
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
  html(`<div class="hd"><h1>Exams</h1><div class="sub">The clock, your attempts, and the order to sit them in</div></div>`);

  const dateField = (id, label, val, hint) => `<div class="fld">
    <div class="flabel"><label class="f" for="${id}">${label}</label>
      ${val ? `<button class="clr" data-clr="${id}">Clear</button>` : ''}</div>
    <input type="date" id="${id}" value="${val}">
    <div class="tiny" style="margin-top:6px">${hint}</div></div>`;
  html(`<div class="card">
    ${dateField('d1', 'Date of your first exam attempt', S.d1,
      'Starts the 18-month window. Any attempt counts, pass or fail.')}
    ${dateField('d2', 'Date your ninth exam was passed', S.d2,
      'Starts the 24 months you have to apply for the licence.')}
  </div>`);
  $('#d1').onchange = e => { S.d1 = e.target.value; save(); render(); };
  $('#d2').onchange = e => { S.d2 = e.target.value; save(); render(); };
  bind('[data-clr]', e => {
    if (e.currentTarget.dataset.clr === 'd1') S.d1 = ''; else S.d2 = '';
    save(); render();
  });

  const dl = deadline18(S.d1), vd = deadline24(S.d2);
  html(`<div class="tiles" style="margin-top:12px">
    <div class="tile"><div class="k">Exams passed</div><div class="n">${p}<span style="font-size:18px;color:var(--tx2)">/9</span></div>
      <div class="s">${p === 9 ? 'complete set' : (9 - p) + ' to go'}</div></div>
    ${dl ? tileFor('18-month deadline', dl, p >= 9, 'm18') : `<div class="tile">${infoBtn('m18')}
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
      <div class="row plain"><div style="font-size:13.5px;color:var(--tx2);line-height:1.45">${b.why}</div></div>
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

  const dl = deadline18(S.d1);
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
  if (!S.d1 && p === 0) out.push(['b', 'Nothing at risk yet',
    'Your 18-month clock has not started. It starts at the end of the calendar month in which you ' +
    'first sit any paper — so sit exam one when you are genuinely into ground school, not as a way ' +
    'of feeling started.']);

  const vd = deadline24(S.d2);
  if (vd && daysTo(vd) >= 0 && daysTo(vd) < 180) out.push(['o', 'Theory validity running down',
    'Your completed set expires ' + fmt(vd) + '. The licence application must be in by then.']);
  if (p === 9 && !S.d2) out.push(['o', 'Add your final pass date',
    'All nine are marked passed but the completion date is blank, so the 24-month clock is not being tracked.']);

  if (!out.length) out.push(['g', 'Nothing flagged', 'No attempt or deadline risks detected.']);
  return out;
}

/* ============================ AIRFIELD LOOKUP ============================ */

/* Club weather stations we know about, so the link is there without anyone configuring it.
   Small GA fields rarely publish a METAR, so the club's own station is the real source. */
const CLUB_WX = {
  EGLM: { url: 'https://www.wlac.co.uk/weather/index.html', name: 'West London Aero Club' }
};
/** The best live-observation link for a field: the profile's own, else one we know. */
function clubWx(code) {
  if (S.wx) return { url: S.wx, name: 'Club weather station' };
  const k = CLUB_WX[code];
  return k ? { url: k.url, name: k.name } : null;
}

const AF = () => window.AIRFIELDS || [];
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
function wireAirfield(inputSel, listSel, foundSel, onPick) {
  const inp = $(inputSel), list = $(listSel), found = $(foundSel);
  if (!inp || !list || !found) return;
  let lastExact = '';
  const paint = () => {
    const v = inp.value.trim().toUpperCase();
    const exact = v.length === 4 ? afByCode(v) : null;
    // typing a code in full counts as picking it, so callers still get their callback
    if (exact && exact[0] !== lastExact) { lastExact = exact[0]; if (onPick) onPick(exact); }
    if (!exact) lastExact = '';
    found.innerHTML = exact ? esc(exact[1]) + (exact[2] ? '<i>' + esc(exact[2]) + '</i>' : '') : '';
    found.style.display = exact ? 'block' : 'none';
    const hits = exact ? [] : afSearch(v, 6);
    list.innerHTML = hits.map(a => '<button data-af="' + a[0] + '"><span class="cd">' + a[0] +
      '</span><span class="nm">' + esc(a[1]) + (a[2] ? '<i>' + esc(a[2]) + '</i>' : '') +
      '</span></button>').join('');
    list.style.display = hits.length ? 'block' : 'none';
    list.querySelectorAll('[data-af]').forEach(b => b.onclick = () => {
      inp.value = b.dataset.af;
      const row = afByCode(b.dataset.af);
      if (onPick && row) onPick(row);
      paint();
    });
  };
  // Allow a longer string so places can be searched by name, not just by code.
  inp.addEventListener('input', () => {
    inp.value = inp.value.toUpperCase().replace(/[^A-Z0-9 '-]/g, '').slice(0, 28);
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
  if (cc === 'NCD' || cc == null) bits.push('NCD');
  else bits.push(cc + pad(Math.round(d.ceilFt / 100), 3));
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
  const cc = cloudCode(d.lowCloud);
  out.push(['Cloud', (cc === 'NCD' || cc == null) ? 'no significant cloud detected'
    : ({ FEW: 'few (1–2 oktas)', SCT: 'scattered (3–4)', BKN: 'broken (5–7)', OVC: 'overcast (8)' }[cc]) +
      ' at about ' + (Math.round(d.ceilFt / 100) * 100) + ' ft']);
  if (d.temp != null) out.push(['Temperature / dew point', d.temp + '°C / ' + d.dew + '°C' +
    (d.spread != null ? ' — spread ' + d.spread.toFixed(1) + '°C' : '')]);
  if (d.qnh) out.push(['QNH', d.qnh + ' hPa']);
  return out;
}

/** Parse a CheckWX decoded METAR into the same shape as the model estimate. */
function wxFromMetar(m) {
  const w = m.wind || {}, v = m.visibility || {}, c = (m.clouds || []);
  const ceilLayer = c.find(x => x.code === 'BKN' || x.code === 'OVC');
  const cat = (m.flight_category || '').toUpperCase();
  const col = cat === 'VFR' ? 'green' : cat === 'MVFR' ? 'orange' : cat ? 'red' : 'blue';
  return {
    source: 'metar', raw: m.raw_text || '', observed: m.observed || '',
    visM: v.meters_float != null ? Math.round(v.meters_float) : (v.meters ? parseInt(v.meters, 10) : 20000),
    ceilFt: ceilLayer && ceilLayer.base_feet_agl != null ? ceilLayer.base_feet_agl : 99999,
    lowCloud: c.length ? null : 0, spread: null,
    wdir: w.degrees == null ? 0 : Math.round(w.degrees),
    wspd: w.speed_kts == null ? 0 : Math.round(w.speed_kts),
    gust: w.gust_kts == null ? null : Math.round(w.gust_kts),
    temp: m.temperature && m.temperature.celsius != null ? Math.round(m.temperature.celsius) : null,
    dew: m.dewpoint && m.dewpoint.celsius != null ? Math.round(m.dewpoint.celsius) : null,
    clouds: c.map(x => (x.code || '') + (x.base_feet_agl != null ? ' ' + x.base_feet_agl + ' ft' : '')).join(', '),
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

  // Real observation first, if a CheckWX key has been added on this device.
  if (P.cwKey) {
    fetch('https://api.checkwx.com/metar/' + encodeURIComponent(code) + '/decoded',
      { headers: { 'X-API-Key': P.cwKey } })
      .then(r => r.json())
      .then(j => {
        if (j && j.data && j.data.length && typeof j.data[0] === 'object') settle(wxFromMetar(j.data[0]));
        else model(code + ' does not publish a METAR, so this is model data.');
      })
      .catch(() => model('CheckWX could not be reached from the browser, so this is model data.'));
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
  const cloudTxt = (cc === 'NCD' || cc == null) ? 'NCD' : cc + pad(Math.round(d.ceilFt / 100), 3);
  const stat = (k, v) => `<div class="wxst"><div class="k">${k}</div><div class="v">${v}</div></div>`;
  return `<button class="wxcard" id="wxb">
    <div class="wxtop">
      <span class="wxid">${esc(code)}</span>
      <span class="wxplace">${esc(place)}</span>
      <span class="wxcat" style="--c:var(--${d.col})">${esc(d.cat)}</span>
    </div>
    <div class="wxraw">${esc(metarString(d, '').trim())}</div>
    <div class="wxstats">
      ${stat('Wind', dir10 + '/' + d.wspd + (d.gust ? 'G' + d.gust : ''))}
      ${stat('Vis', d.visM >= 9999 ? '10km+' : visLabel(d.visM))}
      ${stat('Cloud', cloudTxt)}
      ${stat('QNH', d.qnh || '—')}
    </div>
    <div class="wxfoot"><span class="wxsrc">${d.source === 'metar' ? 'METAR' : 'MODEL'}</span>
      <span>${d.source === 'metar' ? 'Official observation' : 'Forecast model — not an observation'}</span>
      <span class="wxgo">&#8250;</span></div>
  </button>`;
}

VIEWS.wx = function () {
  const code = S.field, af = afByCode(code);
  navbar(af ? af[1] : (code || 'Weather'), '');
  if (WX.code !== code) wxLoad(code, () => {});
  const d = WX.state === 'ok' ? WX.data : null;

  html(`<div class="hd" style="padding-top:14px"><h1 style="font-size:30px">${esc(code || '')}</h1>
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

  if (d && d.source === 'metar') {
    html(`<div class="note o" style="margin-top:12px"><b>A real observation, but still check it yourself</b>
      This is the published METAR for ${esc(code)} via CheckWX${d.observed ? ', observed ' + esc(String(d.observed).replace('T', ' ').slice(0, 16)) + 'Z' : ''}.
      It can still be stale or unrepresentative of conditions on your route. Never treat one number
      as a go/no-go decision.</div>`);
  } else {
    html(`<div class="note r" style="margin-top:12px"><b>Not for flight planning</b>
      This is <b>Open-Meteo forecast model</b> output, not a METAR.${d && d.note ? ' ' + esc(d.note) : ''}
      Add a free CheckWX key in Sources &amp; settings to get the real observation where the field
      publishes one. Treat this as a rough look out of the window and use the links below before
      you fly.</div>`);
  }

  const links = [];
  const cw = clubWx(code);
  if (cw) links.push(`<a class="row" href="${esc(cw.url)}" target="_blank" rel="noopener">
    <div class="ic" style="--c:var(--teal)">&#9925;</div>
    <div class="tx"><b>${esc(cw.name)}</b><i>Live observation at the field</i></div><div class="chev">&#8599;</div></a>`);
  if (code) links.push(`<a class="row" href="https://metar-taf.com/${esc(code)}" target="_blank" rel="noopener">
    <div class="ic" style="--c:var(--indigo)">&#9788;</div>
    <div class="tx"><b>METAR &amp; TAF</b><i>Official observation, if ${esc(code)} reports one</i></div><div class="chev">&#8599;</div></a>`);
  links.push(`<a class="row" href="https://www.metoffice.gov.uk/services/transport/aviation/general-aviation" target="_blank" rel="noopener">
    <div class="ic" style="--c:var(--blue)">&#128506;</div>
    <div class="tx"><b>Met Office GA</b><i>Form 214 and 215</i></div><div class="chev">&#8599;</div></a>`);
  html(`<h2 class="sec">Real sources</h2><div class="grp">${links.join('')}</div>`);

  if (WX.at) html(`<div class="foot">Model data fetched ${new Date(WX.at).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}, cached for 20 minutes.</div>`);
};

/* ============================ CLOCK EXPLAINERS ============================ */

VIEWS.clockinfo = function (p) {
  if (p.id === 'att') return attemptsInfo();
  const is18 = p.id === 'm18';
  navbar(is18 ? '18-month window' : '24-month validity', '');

  const dl = deadline18(S.d1), vd = deadline24(S.d2);
  const d = is18 ? dl : vd;

  html(`<div class="hd" style="padding-top:14px">
    <h1 style="font-size:30px">${is18 ? 'All nine within 18 months' : 'Valid for 24 months'}</h1>
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
      <div class="card"><div style="font-size:15.5px;line-height:1.55;color:var(--tx2)">
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
      <div class="card"><div style="font-size:14.5px;line-height:1.55">
        “Unless otherwise determined in this Part, an applicant has successfully completed the
        required theoretical knowledge examination for the appropriate pilot licence or rating if he
        or she has passed all the required theoretical knowledge examination papers <b>within a
        period of 18 months counted from the end of the calendar month when the applicant first
        attempted an examination</b>.”</div>
        <div class="mono" style="margin-top:9px;font-size:12px;color:var(--tx3)">FCL.025(b)(2)</div></div>`);

    html(`<h2 class="sec">What this means in practice</h2>
      <div class="grp">
        <div class="row plain"><div style="font-size:14.5px;line-height:1.5">Do not sit one paper early
          just to feel started. That single attempt commits you to finishing the other eight inside
          18 months.</div></div>
        <div class="row plain"><div style="font-size:14.5px;line-height:1.5">Leave room for a resit.
          A failed paper cannot be re-sat inside the same sitting window, so budget more than the
          bare minimum per exam.</div></div>
        <div class="row plain"><div style="font-size:14.5px;line-height:1.5">There is <b>no limit on
          sittings</b> for a PPL, so the 18 months and the four attempts per paper are the only
          things rationing you.</div></div>
      </div>`);

  } else {
    html(`<h2 class="sec">Apply for what, exactly</h2>
      <div class="card"><div style="font-size:15.5px;line-height:1.55;color:var(--tx2)">
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
      <div class="card"><div style="font-size:15.5px;line-height:1.55;color:var(--tx2)">
        The <b>completed set</b>, not each exam individually — 24 months counted from the day you
        passed the last one. It is not 24 months per paper.</div></div>`);

    html(`<h2 class="sec">If you miss it</h2>
      <div class="note r"><b>The theory expires</b>
        The completed set is no longer valid towards licence issue, and you are back to sitting
        exams. This is why finishing all nine long before you have the hours is a risk rather than
        being ahead.</div>`);

    html(`<h2 class="sec">The regulation</h2>
      <div class="card"><div style="font-size:14.5px;line-height:1.55">
        “The successful completion of the theoretical knowledge examinations will be valid: (i) for
        the issue of a light aircraft pilot licence or a private pilot licence, <b>for a period of
        24 months</b>… counted from the day when the pilot successfully completes the theoretical
        knowledge examination.”</div>
        <div class="mono" style="margin-top:9px;font-size:12px;color:var(--tx3)">FCL.025(c)(1)(i) and (iii)</div></div>
    <div class="card" style="margin-top:12px"><div style="font-size:14.5px;line-height:1.55">
      “For the issue of a licence, rating or certificate the applicant shall apply <b>not later than
      6 months after having succeeded at the skill test</b> or assessment of competence.”</div>
      <div class="mono" style="margin-top:9px;font-size:12px;color:var(--tx3)">FCL.015(f)</div></div>`);

    html(`<h2 class="sec">A change is coming — but is not here</h2>
      <div class="note o"><b>36 months has been agreed, not implemented</b>
        The CAA decided in January 2026 to extend PPL exam validity from 24 to 36 months
        (CAP3212, Decision no. 3). It is <b>not in force</b>: the July 2026 Part-FCL rulebook still
        says 24 months, and it needs a legislative change through the DfT plus funding to modify the
        e-Exam platform. Plan on 24 until the CAA says otherwise.</div>`);

    html(`<h2 class="sec">It is a skill test, not a checkride</h2>
      <div class="card"><div style="font-size:15.5px;line-height:1.55;color:var(--tx2)">
        <b>Checkride</b> is American — FAA terminology. Under UK Part-FCL the flight test for
        licence issue is the <b>skill test</b> (FCL.030 and FCL.235), conducted by a
        <b>Flight Examiner</b>. Older UK pilots and some clubs still call it the
        <b>GFT</b> — General Flying Test — which is the pre-JAR name and no longer the legal term.
        <br><br>Do not confuse it with a <b>proficiency check</b>: that is the later, recurring
        test used to revalidate or renew a rating, such as an SEP, not to get the licence in the
        first place.</div></div>`);

    html(`<h2 class="sec">Do not confuse it with</h2>
      <div class="grp">
        <div class="row"><div class="tx"><b>The 18-month window</b><i>Time to pass all nine, from your first attempt</i></div>
          <button class="btn sec sm" style="width:auto;padding:8px 12px" id="to18">Open</button></div>
        <div class="row"><div class="tx"><b>The 6-month rule</b><i>Apply within 6 months of the skill test — FCL.015(f)</i></div></div>
        <div class="row"><div class="tx"><b>DTO/ATO recommendation</b><i>Valid 12 months — FCL.025(a)(3)</i></div></div>
        <div class="row"><div class="tx"><b>Class 2 medical</b><i>60, 24 or 12 months depending on age</i></div></div>
      </div>`);
    if ($('#to18')) $('#to18').onclick = () => { stack[stack.length - 1] = { v: 'clockinfo', p: { id: 'm18' } }; render(); };
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
    <h1 style="font-size:30px">Four attempts per paper</h1>
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
    <div class="card" style="margin-top:12px"><div style="font-size:14.5px;line-height:1.55">
      “ALL previous examination passes, in ALL subjects currently being sat are rendered null and
      void by a fourth attempt failure.”</div>
      <div class="mono" style="margin-top:9px;font-size:12px;color:var(--tx3)">Standards Document 11 §11.1.33</div></div>`);

  html(`<h2 class="sec">The regulation</h2>
    <div class="card"><div style="font-size:14.5px;line-height:1.55">
      “If an applicant for the issue of a light aircraft pilot licence (LAPL) or a private pilot
      licence (PPL) has failed to pass one of the theoretical knowledge examination papers
      <b>within four attempts</b> or has failed to pass all papers within the period mentioned in
      point (b)(2), he or she shall retake the complete set of theoretical knowledge examination
      papers in order to obtain the licence.”</div>
      <div class="mono" style="margin-top:9px;font-size:12px;color:var(--tx3)">FCL.025(b)(4)</div></div>`);

  html(`<h2 class="sec">Practical consequences</h2>
    <div class="grp">
      <div class="row plain"><div style="font-size:14.5px;line-height:1.5">It is <b>per paper</b>, not
        across the set. Four attempts at Meteorology, four at Air Law, and so on.</div></div>
      <div class="row plain"><div style="font-size:14.5px;line-height:1.5">You cannot re-sit the
        <b>same</b> paper twice inside one sitting — a sitting being up to ten consecutive days
        (GM1 FCL.025). Different subjects on the same day are fine.</div></div>
      <div class="row plain"><div style="font-size:14.5px;line-height:1.5">Because sittings are not
        rationed for a PPL, there is no reason to sit a paper you are not confident on. Use the mock
        exams in this app until you are comfortably above 75%.</div></div>
      <div class="row plain"><div style="font-size:14.5px;line-height:1.5">A confirmed case of
        cheating is separate and worse: a minimum twelve-month ban, and all previously attempted
        exams void (ARA.FCL.300).</div></div>
    </div>`);

  html(`<button class="btn sec" style="margin-top:16px" id="attMock">Take a mock exam instead</button>`);
  $('#attMock').onclick = () => { stack.pop(); tab('quiz'); };

  html(`<div class="foot">Quoted from the CAA consolidated Part-FCL rulebook (July 2026) and
    Standards Document 11, Revision 15. See Sources.</div>`);
}

/* ============================ MY TRAINING ============================ */

VIEWS.training = function () {
  navbar('My training', '');
  html(`<div class="hd" style="padding-top:14px"><h1 style="font-size:30px">My training</h1>
    <div class="sub">Used to personalise the app and suggest an exam order. Nothing here is sent
    anywhere.</div></div>`);

  html('<h2 class="sec">Stage</h2><div class="grp">' + STAGES.map(([k, t, d]) => `
    <button class="row" data-st2="${k}">
      <div class="ic" style="--c:var(--${S.stage === k ? 'blue' : 'tx3'})">${S.stage === k ? '&#10003;' : '&#8226;'}</div>
      <div class="tx"><b>${t}</b><i>${d}</i></div></button>`).join('') + '</div>');
  bind('[data-st2]', e => { S.stage = e.currentTarget.dataset.st2; save(); render(); });

  html(`<h2 class="sec">Home airfield</h2>
    <div class="card">
      <label class="f" for="tIcao">Airfield</label>
      <input type="text" id="tIcao" maxlength="28" autocapitalize="characters" spellcheck="false"
        placeholder="Code or name — EGLM, Waltham…" value="${esc(S.field || '')}" class="ti"
        style="text-transform:uppercase;letter-spacing:.04em">
      <div id="tFound" class="acfound" style="display:none"></div>
      <div id="tList" class="aclist" style="display:none"></div>
    </div>
    <div class="card" style="margin-top:12px">
      <label class="f" for="tWx">Club weather page</label>
      <input type="url" id="tWx" inputmode="url" autocapitalize="none" spellcheck="false"
        placeholder="https://…" value="${esc(S.wx || '')}" class="ti" style="font-size:15px">
      <div class="tiny" style="margin-top:9px">Most small GA fields issue no METAR, so a club page
        is often the only live source. The METAR link on Home uses your ICAO code and will simply
        show nothing if your field does not report.</div>
    </div>
    <button class="btn" style="margin-top:14px" id="tSave">Save</button>`);
  wireAirfield('#tIcao', '#tList', '#tFound', row => {
    const k = CLUB_WX[row[0]];
    if (k && !$('#tWx').value) $('#tWx').value = k.url;
  });
  $('#tSave').onclick = () => {
    const v = $('#tIcao').value.trim().toUpperCase();
    if (v && !afByCode(v)) { alertish('Pick an airfield from the list, or clear the box.'); return; }
    if (v !== (S.field || '')) { try { localStorage.removeItem(wxCacheKey(v)); } catch (e) {} WX = { state: 'idle' }; }
    const wx = $('#tWx').value.trim();
    S.field = v; S.wx = /^https?:\/\//i.test(wx) ? wx : '';
    save(); back();
  };
};

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
  html(`<div class="hd" style="padding-top:14px"><h1 style="font-size:30px">How do you want to order them?</h1>
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
      ${b.why ? `<div class="row plain"><div style="font-size:13.5px;color:var(--tx2);line-height:1.45">${b.why}</div></div>` : ''}
    </div>`);
  });
};

VIEWS.reorder = function () {
  navbar('My order', '');
  const order = planOrder();
  html(`<div class="hd" style="padding-top:14px"><h1 style="font-size:30px">Your order</h1>
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
    <div style="font-size:17px;font-weight:600;margin-bottom:2px">${r.h}</div>
    ${r.cite ? `<div class="mono" style="font-size:12px;color:var(--tx3);margin-bottom:8px">${esc(r.cite)}</div>` : ''}
    <div style="font-size:15.5px;line-height:1.5;color:var(--tx2)">${r.b}</div>
    ${r.q ? `<div style="margin-top:11px;padding:11px 13px;background:var(--card2);border-radius:10px;
      font-size:14.5px;line-height:1.5">${r.q}</div>` : ''}</div>`).join('');
}

VIEWS.rules = function () {
  navbar('Rules', '');
  html(`<div class="hd" style="padding-top:14px"><h1 style="font-size:30px">The rules that bind you</h1>
    <div class="sub">Quoted from the CAA’s consolidated Part-FCL rulebook, page footers dated July 2026,
    and Standards Document 11. Nothing here is from memory or a study site.</div></div>`);
  html('<h2 class="sec">In force</h2>' + ruleList(RULES));
  html('<h2 class="sec">Decided, not yet in force</h2>' + ruleList(PENDING));
  html('<h2 class="sec">Not published by the CAA</h2>' + ruleList(UNKNOWNS));
};

VIEWS.books = function () {
  navbar('Books', '');
  html(`<div class="hd" style="padding-top:14px"><h1 style="font-size:30px">Books</h1>
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
  html(`<div class="hd" style="padding-top:14px"><h1 style="font-size:30px">Sources</h1>
    <div class="sub">Every regulatory statement in this app was read from these primary documents on
    10 September 2026 — not from memory and not from study sites.</div></div>`);
  html('<div class="grp">' + SOURCES.map(s => `<a class="row" href="${s.u}" target="_blank" rel="noopener">
    <div class="tx"><b>${s.t}</b><i>${s.m}</i></div><div class="chev">&#8599;</div></a>`).join('') + '</div>');

  const tot = SUBJECTS.reduce((a, s) => a + allLO(s), 0);
  const tick = SUBJECTS.reduce((a, s) => a + s.groups.reduce((b, g) => b + g.items.filter(i => i.a).length, 0), 0);
  html(`<h2 class="sec">How the syllabus data was made</h2>
    <div class="card"><div style="font-size:15px;line-height:1.5;color:var(--tx2)">
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
      <div class="tiny" style="margin-top:9px">Without a key the app shows an <b>Open-Meteo forecast
        model</b> estimate. With one it shows the <b>real METAR</b> and its official flight category,
        where the field publishes one.
        <a href="https://www.checkwxapi.com" target="_blank" rel="noopener">Free keys at checkwxapi.com</a>.</div>
      <div class="tiny" style="margin-top:8px;color:var(--orange)"><b>Your key stays on this device.</b>
        It is saved in this browser only, never committed to the repository, and sent nowhere but
        CheckWX. Anyone who can read a public repo can read a key committed into it — so keep it here.</div>
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

  $('#exp').onclick = () => download(
    { app: 'ppl-theory', kind: 'profile', name: activeName(), exported: new Date().toISOString(), data: (flush(), S) },
    'ppl-' + slug(activeName()) + '.json');

  if ($('#expAll')) $('#expAll').onclick = () => {
    flush();
    download({
      app: 'ppl-theory', kind: 'backup', exported: new Date().toISOString(), theme: P.theme,
      profiles: P.list.map(pr => ({ name: pr.name, data: readJSON(dataKey(pr.id), blank()) }))
    }, 'ppl-backup-' + new Date().toISOString().slice(0, 10) + '.json');
  };

  $('#imp').onclick = pickImportFile;
  $('#wipe').onclick = () => {
    if (confirm('Erase all of ' + activeName() + '\u2019s progress? This cannot be undone.')) {
      S = blank(); flush(); tab('home');
    }
  };

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
          ? { kind: 'profile', name: j.name || 'Imported', data: d, exported: j.exported }
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
  ['none',  'Not started yet',        'Booking the first lesson'],
  ['trial', 'Had a trial lesson',     'One or two flights in the logbook'],
  ['early', 'Flying regularly',       'Circuits and general handling, pre-solo'],
  ['solo',  'Gone solo',              'First solo done'],
  ['nav',   'Navigation phase',       'Cross-country and the qualifying flight'],
  ['test',  'Preparing for the test', 'Close to the skill test']
];
const stageLabel = k => (STAGES.find(x => x[0] === k) || ['', 'Not set'])[1];
/** The plan that suits where someone is in their flying. */
const suggestPlan = stage => (stage === 'solo' || stage === 'nav' || stage === 'test') ? 'training' : 'blocks';

let SETUP = null;

function startSetup(mode) {
  SETUP = { step: 1, mode: mode || 'first', name: '', stage: '', field: '', wx: '' };
  go('welcome');
}

VIEWS.welcome = function () {
  if (!SETUP) SETUP = { step: 1, mode: 'first', name: '', stage: '', field: '', wx: '' };
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
      <div class="sub" style="font-size:17px;margin-top:10px">Articles, mock exams and
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
      html(`<div class="hd" style="padding-top:18px"><h1 style="font-size:30px">Add someone</h1>
        <div class="sub">They get their own articles, objectives, exam record, quiz history and
        flashcards — completely separate from ${esc(activeName())}'s.</div></div>`);
    }
    html(`<h2 class="sec">${adding ? 'Their name' : 'First, who are you?'}</h2>
      <div class="card">
        <label class="f" for="wName">Your name</label>
        <input type="text" id="wName" maxlength="24" autocomplete="given-name" autocapitalize="words"
          placeholder="e.g. Bailey" value="${esc(SETUP.name)}" class="ti">
        <div id="wErr" class="tiny" style="color:var(--red);margin-top:8px;display:none"></div>
        <div class="tiny" style="margin-top:9px">${adding ? 'Anything already on this device is untouched.'
          : 'You can add more people later — everyone gets their own progress, kept separately on this device.'}</div>
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
      'This only sets a sensible starting exam order — it can be changed any time.');
    html('<div class="grp">' + STAGES.map(([k, t, d]) => `
      <button class="row" data-stage="${k}">
        <div class="ic" style="--c:var(--${SETUP.stage === k ? 'blue' : 'tx3'})">${SETUP.stage === k ? '&#10003;' : '&#8226;'}</div>
        <div class="tx"><b>${t}</b><i>${d}</i></div></button>`).join('') + '</div>');
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

  // step 3 — home airfield
  setupHead(3, adding ? 'Where do they fly from?' : 'Where do you fly from?',
    'Optional. It personalises the app and gives a one-tap weather link.');
  html(`<div class="card">
    <label class="f" for="wIcao">Home airfield</label>
    <input type="text" id="wIcao" maxlength="28" autocapitalize="characters" autocomplete="off"
      spellcheck="false" placeholder="Code or name — EGLM, Waltham…" value="${esc(SETUP.field)}" class="ti"
      style="text-transform:uppercase;letter-spacing:.04em">
    <div id="wFound" class="acfound" style="display:none"></div>
    <div id="wList" class="aclist" style="display:none"></div>
    <div id="wIcaoErr" class="tiny" style="color:var(--red);margin-top:8px;display:none"></div>
  </div>
  <div class="card" style="margin-top:12px">
    <label class="f" for="wWx">Club weather page (optional)</label>
    <input type="url" id="wWx" inputmode="url" autocapitalize="none" autocomplete="off" spellcheck="false"
      placeholder="https://…" value="${esc(SETUP.wx)}" class="ti" style="font-size:15px">
    <div class="tiny" style="margin-top:9px">Most small GA fields do not issue a METAR, so a club
      weather page is often the only live source. If your field does report, the app links to its
      METAR and TAF automatically.</div>
  </div>
  <button class="btn" style="margin-top:14px" id="s3done">Start studying</button>
  <button class="btn grey" style="margin-top:10px" id="s3back">Back</button>`);

  const ic = $('#wIcao');
  wireAirfield('#wIcao', '#wList', '#wFound', row => {
    const k = CLUB_WX[row[0]];
    if (k && !$('#wWx').value) $('#wWx').value = k.url;
  });
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
    const wx = $('#wWx').value.trim();
    const data = blank();
    data.stage = SETUP.stage; data.field = v; data.wx = /^https?:\/\//i.test(wx) ? wx : '';
    data.planId = suggestPlan(SETUP.stage);
    if (LEGACY && !adding) Object.assign(data, migrate(LEGACY),
      { stage: data.stage, field: data.field, wx: data.wx, planId: data.planId });
    const n = SETUP.name; SETUP = null;
    addProfile(n, data);
  };
};

function setupHead(n, title, sub) {
  html(`<div class="hd" style="padding-top:26px">
    <div style="display:flex;gap:6px;margin-bottom:14px">
      ${[1, 2, 3].map(i => `<div style="flex:1;height:4px;border-radius:99px;background:var(--${i <= n ? 'blue' : 'fill'})"></div>`).join('')}
    </div>
    <div class="sub" style="margin-bottom:4px">Step ${n} of 3</div>
    <h1 style="font-size:30px">${esc(title)}</h1>
    <div class="sub" style="margin-top:8px">${esc(sub)}</div></div>`);
}

/** prompt() is blocked in some embedded browsers, so names are entered in-app. */
VIEWS.nameentry = function (p) {
  const renaming = p.mode === 'rename';
  const pr = renaming ? P.list.find(x => x.id === p.id) : null;
  if (renaming && !pr) { back(); return; }
  navbar(renaming ? 'Rename' : 'Add someone', '');
  html(`<div class="hd" style="padding-top:14px">
    <h1 style="font-size:30px">${renaming ? 'Rename profile' : 'Who else is studying?'}</h1>
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
    html(`<div class="hd" style="padding-top:14px"><h1 style="font-size:30px">Whole-device backup</h1>
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
      if (!confirm('Replace all profiles on this device? This cannot be undone.')) return;
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
    };
    $('#cancelImp').onclick = () => { IMPORTING = null; back(); };
    return;
  }

  const t = summarise(IMPORTING.data);
  const clash = P.list.some(p => p.name.toLowerCase() === IMPORTING.name.toLowerCase());
  html(`<div class="hd" style="padding-top:14px"><h1 style="font-size:30px">${esc(IMPORTING.name)}</h1>
    <div class="sub">${esc(dateLine)}</div></div>`);
  html(`<div class="grp"><div class="row">
      <div class="ic" style="--c:var(--blue)">${esc(initials(IMPORTING.name))}</div>
      <div class="tx"><b>In this file</b><i>${t.pass}/9 exams passed · ${t.read} article${t.read === 1 ? '' : 's'} read ·
        ${t.lo} objective${t.lo === 1 ? '' : 's'} ticked · ${t.srs} card${t.srs === 1 ? '' : 's'} scheduled</i></div></div></div>`);

  const first = needsSetup();
  html(`<h2 class="sec">${first ? 'Ready to go' : 'Bring it in as'}</h2>
    <button class="btn" id="asNew">${first ? 'Use this progress'
      : 'A new profile' + (clash ? ' (name will be numbered)' : ': ' + esc(IMPORTING.name))}</button>
    <div class="note b" style="margin-top:10px">${first
      ? 'This becomes your profile on this device. You can rename it or add other people afterwards.'
      : 'Nothing already on this device is touched. Use this to move a profile from another phone or laptop, or to restore a backup alongside what you have.'}</div>

    ${first ? '' : `<button class="btn dgr" style="margin-top:18px" id="asOver">Overwrite ${esc(activeName())}</button>
    <div class="note r" style="margin-top:10px">Replaces ${esc(activeName())}’s articles, objectives,
    exam record, quiz history and flashcard schedule. Cannot be undone.</div>`}

    <button class="btn grey" style="margin-top:18px" id="cancelImp">Cancel</button>`);

  $('#asNew').onclick = () => { const d = IMPORTING.data, n = IMPORTING.name; IMPORTING = null; addProfile(n, d); };
  if ($('#asOver')) $('#asOver').onclick = () => {
    if (!confirm('Overwrite ' + activeName() + '\u2019s progress with ' + IMPORTING.name + '? This cannot be undone.')) return;
    S = migrate(IMPORTING.data); flush(); IMPORTING = null; tab('home');
  };
  $('#cancelImp').onclick = () => { IMPORTING = null; back(); };
};

/* ============================ PROFILES ============================ */

VIEWS.profiles = function () {
  navbar('Profiles', '');
  html(`<div class="hd" style="padding-top:14px"><h1 style="font-size:30px">Who is studying?</h1>
    <div class="sub">Each profile keeps its own articles, objectives, exam record, quiz history
    and flashcard schedule. Everything is stored in this browser on this device.</div></div>`);

  html('<div class="grp">' + P.list.map(pr => {
    const d = readJSON(dataKey(pr.id), {});
    const nLO = Object.keys(d.lo || {}).length;
    const nRead = Object.keys(d.read || {}).length;
    const nPass = Object.values(d.subj || {}).filter(v => v.st === 'passed').length;
    const on = pr.id === P.active;
    return `<button class="row" data-pick="${pr.id}">
      <div class="ic" style="--c:var(--${on ? 'blue' : 'tx3'})">${esc(initials(pr.name))}</div>
      <div class="tx"><b>${esc(pr.name)}</b><i>${nPass}/9 exams · ${nRead} article${nRead === 1 ? '' : 's'} · ${nLO} objective${nLO === 1 ? '' : 's'}</i></div>
      ${on ? '<span class="bdg b">Active</span>' : ''}
      <div class="chev">&#8250;</div></button>`;
  }).join('') + '</div>');
  bind('[data-pick]', e => {
    const id = e.currentTarget.dataset.pick;
    if (id === P.active) go('profedit', { id: id }); else switchProfile(id);
  });

  html(`<button class="btn sec" style="margin-top:14px" id="addP">Add someone</button>
    <button class="btn sec" style="margin-top:10px" id="impP">Import someone from a file</button>`);
  $('#impP').onclick = pickImportFile;
  $('#addP').onclick = () => startSetup('add');


  html(`<div class="foot">Tap a profile to switch to it. Tap the active one to rename or remove it.<br>
    Switching profiles does not upload anything — it just points the app at a different set of
    saved progress in this browser.</div>`);
};

VIEWS.profedit = function (p) {
  const pr = P.list.find(x => x.id === p.id);
  if (!pr) { back(); return; }
  navbar(pr.name, '');
  html(`<div class="hd" style="padding-top:14px"><h1 style="font-size:30px">${esc(pr.name)}</h1>
    <div class="sub">Active profile</div></div>`);
  html(`<div class="grp">
    <button class="row" id="ren"><div class="tx"><b>Rename</b></div><div class="chev">&#8250;</div></button>
    ${P.list.length > 1 ? `<button class="row" id="del"><div class="tx"><b style="color:var(--red)">Delete this profile</b>
      <i>Erases its progress on this device</i></div></button>` : ''}
  </div>`);
  $('#ren').onclick = () => go('nameentry', { mode: 'rename', id: pr.id });
  if ($('#del')) $('#del').onclick = () => {
    if (!confirm('Delete ' + pr.name + ' and all of their progress on this device? This cannot be undone.')) return;
    deleteProfile(pr.id);
    stack.pop(); render();
  };
  html(`<div class="foot">Export from Sources &amp; settings before deleting if you might want it back.</div>`);
};

/* ============================ init ============================ */

if (P.theme) document.documentElement.dataset.t = P.theme;
document.querySelectorAll('#tabs button').forEach(b => b.onclick = () => tab(b.dataset.v));
render();
