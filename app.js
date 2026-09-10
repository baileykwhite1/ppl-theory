/* UK PPL(A) theory revision dashboard.
   All regulatory content is quoted from the sources listed in CONFIG.sources. */
'use strict';

// ---------------------------------------------------------------- config

const BLOCKS = [
  { no: 1, title: 'Ground school foundation', subjects: ['010', '090'],
    unlocks: 'Schools commonly want Air Law passed before first solo — check what yours requires. Communications is the same paper (subject 090) that FRTOL examiners use, so a pass here counts both ways.' },
  { no: 2, title: 'The pilot and the sky', subjects: ['040', '050'],
    unlocks: 'Human Performance is short and self-contained. Meteorology is long — start it early and sit it once you can read a TAF, METAR and Form 214 cold.' },
  { no: 3, title: 'The aeroplane', subjects: ['081', '020'],
    unlocks: 'Principles of Flight and Aircraft General Knowledge share a book and overlap heavily. Sitting them together is the cheapest pairing in the whole set.' },
  { no: 4, title: 'Cross-country and consolidation', subjects: ['060', '030', '070'],
    unlocks: 'Navigation and Flight Performance & Planning are what the qualifying cross-country actually tests. Operational Procedures draws on all eight others, so it goes last.' }
];

const BOOKS = {
  '010': ['APM 2', 'Aviation Law &amp; Meteorology', '17th revised ed., Feb 2025'],
  '050': ['APM 2', 'Aviation Law &amp; Meteorology', '17th revised ed., Feb 2025'],
  '060': ['APM 3', 'Air Navigation', '9th ed., revised Jun 2025'],
  '030': ['APM 3 + 4', 'Air Navigation (flight planning) and The Aeroplane Technical (mass &amp; balance, performance)', 'APM 3 9th ed. 2025; APM 4 reprint Jan 2025'],
  '020': ['APM 4', 'The Aeroplane Technical — airframe, engines, systems, airworthiness', 'Reprint Jan 2025 (updated 2021 for e-Exams)'],
  '081': ['APM 4', 'The Aeroplane Technical — Principles of Flight', 'Reprint Jan 2025'],
  '040': ['APM 6', 'Human Performance &amp; Operational Procedures', '6th ed., Nov 2022 (reprint 2024)'],
  '070': ['APM 6', 'Human Performance &amp; Operational Procedures', '6th ed., Nov 2022 (reprint 2024)'],
  '090': ['APM 7', 'Communications', 'Current edition — check Pooleys before buying']
};

const RULES = [
  { h: 'Nine subjects', cite: 'FCL.215',
    b: 'Five common subjects — Air Law, Human Performance, Meteorology, Communications, Navigation — plus four specific to aeroplanes: Principles of Flight, Operational Procedures, Flight Performance and Planning, Aircraft General Knowledge.',
    q: '“Applicants for a PPL shall demonstrate a level of theoretical knowledge appropriate to the privileges granted through examinations in the following subjects…”' },
  { h: '75% to pass, no negative marking', cite: 'FCL.025(b)(1)',
    b: 'Wrong answers cost you nothing beyond the mark. Never leave a question blank.',
    q: '“A pass in a theoretical knowledge examination paper will be awarded to an applicant achieving at least 75 % of the marks allocated to that paper. No penalty marking shall be applied.”' },
  { h: 'All nine within 18 months of your first attempt', cite: 'FCL.025(b)(2) · AMC1 FCL.215',
    b: 'The clock starts at the <b>end of the calendar month</b> in which you first attempt any exam — not the date itself. Sit exam one on 20 March and you have until 30 September the following year. This is the deadline that catches people out, because it starts the moment you sit your first paper, however casually.',
    q: '“…if he or she has passed all the required theoretical knowledge examination papers within a period of 18 months counted from the end of the calendar month when the applicant first attempted an examination.”' },
  { h: 'No limit on sittings for a PPL', cite: 'FCL.025(b)(3) and (b)(4)',
    b: 'Point (b)(3) — the six-sittings rule — is written to apply to <b>ATPL theory, CPL and IR</b> applicants only. Point (b)(4) is the LAPL/PPL equivalent and mentions <b>attempts and the 18-month period, but no sittings</b>. The UK CAA also formally removed the sittings cap from its GA exam procedures in Standards Document 11 version 14, December 2020.',
    q: '“(3) If an applicant for the ATPL theoretical knowledge examination, or for the issue of a commercial pilot licence (CPL), or an instrument rating (IR) has failed to pass one of the theoretical knowledge examination papers within four attempts, or has failed to pass all papers within either six sittings or within the period mentioned in point (b)(2)… <br><br>(4) If an applicant for the issue of a light aircraft pilot licence (LAPL) or a private pilot licence (PPL) has failed to pass one of the theoretical knowledge examination papers within four attempts or has failed to pass all papers within the period mentioned in point (b)(2), he or she shall retake the complete set…”' },
  { h: 'Four attempts per paper — and a fourth failure wipes everything', cite: 'FCL.025(b)(4) · Standards Doc 11 §11.1.22–11.1.36',
    b: 'This, not sittings, is the constraint worth planning around. Before a fourth attempt you must do further training as your school determines. Fail the fourth and the e-Exams system puts you in automatic stand-down, <b>every pass you hold in every subject is void</b>, and you need fresh training plus a CAA release before you can start a new series.',
    q: '“ALL previous examination passes, in ALL subjects currently being sat are rendered null and void by a fourth attempt failure.” — Standards Document 11 §11.1.33' },
  { h: 'One attempt at a given paper per sitting', cite: 'GM1 FCL.025',
    b: 'A sitting is a window of up to ten consecutive days, and you may attempt each paper only once inside it. So a resit of the <i>same</i> subject cannot be same-day; different subjects on the same day are fine. Confirm how your school’s bookings map onto sitting windows.',
    q: '“‘Sitting’: a period of time established by the competent authority within which a candidate can take an examination. This period should not exceed 10 consecutive days. Only one attempt at each examination paper is allowed in one sitting.”' },
  { h: 'A completed set is valid for 24 months', cite: 'FCL.025(c)(1)(i) · CAA PPL(A) guidance',
    b: 'Counted from the day you complete the last exam. Apply for the licence inside that window or the theory expires. Finishing all nine long before you have the hours is therefore a real risk, not a head start.',
    q: '“The successful completion of the theoretical knowledge examinations will be valid: (i) for the issue of a light aircraft pilot licence or a private pilot licence, for a period of 24 months.”' },
  { h: 'Your school’s recommendation lasts 12 months', cite: 'FCL.025(a)(3)',
    b: 'You may only sit an exam when recommended by your ATO or DTO. If you attempt no paper at all within 12 months of that recommendation, they decide what further training you need.',
    q: '“The recommendation by a DTO or an ATO shall be valid for 12 months. If the applicant has failed to attempt at least one theoretical knowledge examination paper within this period of validity, the need for further training shall be determined by the DTO or the ATO…”' },
  { h: 'About 120 questions across the whole set', cite: 'AMC1 FCL.215; FCL.235',
    b: 'That is the total across all nine papers, so the individual papers are short — a rough average of thirteen questions each.',
    q: '“The examinations should comprise a total of 120 multiple-choice questions covering all the subjects.”' },
  { h: 'Cheating means a 12-month ban', cite: 'ARA.FCL.300 · Standards Doc 11 §12',
    b: 'A confirmed case is a minimum twelve-month ban from all examinations, and all previously attempted exams are void.',
    q: '“The CAA will then place the candidate in stand-down meaning no further GA e-Exams can be taken for the duration of the ban. All previously attempted exams will be null and void.”' }
];

const PENDING = [
  { h: 'Exam validity 24 → 36 months', cite: 'CAP3212, January 2026 — Decision no. 3',
    b: 'The CAA consulted on this and has decided to proceed. It is <b>not in force</b>: the July 2026 Part-FCL rulebook still states 24 months, and implementation needs both a legislative change via the DfT and funding to modify the e-Exam platform.',
    q: '“We will progress with the single period of 36 months for exam validity for the PPL. The timescale is subject to appropriate funding.” … “Implementation will require funding to amend the online eExam platform, the timeline for which is yet to be confirmed.”' },
  { h: 'A rolling 18-month window, and dropping the four-failures rule', cite: 'CAP3212 §2.1–2.2',
    b: 'Both were floated in the 2024 consultation and attracted support, but the CAA judged a rolling window too complex to implement and replaced the package with the single 36-month validity above. Treat the fixed 18-month window and the four-attempt limit as fully live until the CAA says otherwise.' },
  { h: 'Fewer exams — for the instrument rating, not the PPL', cite: 'CAP3212 §5.1–5.7',
    b: 'The consultation talk of consolidating subjects into fewer papers concerns the Competency Based Instrument Rating. There is no CAA decision to reduce the PPL from nine subjects.' }
];

const UNKNOWNS = [
  { h: 'Per-subject question counts and time limits',
    b: 'The CAA does not publish a table of these. Part-FCL gives only the ~120-question total for the whole set, and Standards Document 11 tells the Ground Examiner to confirm “the time limits and number of questions” to you verbally at the start of each exam. Figures circulating on study sites (commonly 8–24 questions and 15–40 minutes) are <b>not CAA-published</b> and are deliberately omitted here. Ask your Ground Examiner.' },
  { h: 'How your school maps bookings onto 10-day sitting windows',
    b: 'The regulation leaves the window to the competent authority, and with no sittings cap for a PPL it rarely bites — but it does govern how soon you may resit the <i>same</i> paper. Worth one question to your school before you plan a resit.' },
  { h: 'CAP2090 learning objectives are dated January 2020',
    b: 'All nine documents on the CAA e-Exams page are version 1, January 2020 (the Principles of Flight document carries no version line at all). They remain the current published learning objectives, but they are six years old, so where a document conflicts with current law — airspace, licensing, or UK-specific rules post-Brexit — trust the law.' }
];

const SOURCES = [
  { t: 'UK Regulation (EU) No. 1178/2011 Annex I Part-FCL — consolidated rulebook',
    m: 'CAA Aviation Regulation Library · page footers dated July 2026 · FCL.025 pp. 80–82, FCL.215 p. 144, AMC1 FCL.210/215 pp. 145+, AMC1 FCL.215;FCL.235 p. 209',
    u: 'https://regulatorylibrary.caa.co.uk/1178-2011-PDF/PDF.pdf',
    n: 'The primary source for every rule on the Rules tab. Retrieved 10 Sep 2026.' },
  { t: 'CAA Standards Document 11, Revision 15 (May 2022)',
    m: 'Procedures & conduct for all GA Theoretical Knowledge Examinations',
    u: 'https://www.caa.co.uk/publication/download/12697',
    n: 'Source for the 75% briefing requirement, the four-attempt consequences, and the December 2020 removal of the sittings cap (amendment record, version 14). Retrieved 10 Sep 2026.' },
  { t: 'Private pilot licence for aeroplanes — CAA guidance page',
    m: 'Lists the nine subjects and states the 24-month validity',
    u: 'https://www.caa.co.uk/general-aviation/pilot-licences/aeroplanes/private-pilot-licence-for-aeroplanes/',
    n: 'Live page confirming 24 months is still current. Retrieved 10 Sep 2026.' },
  { t: 'GA Theoretical Knowledge e-Exams — CAA',
    m: 'Index of the nine CAP2090 learning-objective documents and the e-Exam administration',
    u: 'https://www.caa.co.uk/general-aviation/pilot-training-organisations/ga-theoretical-knowledge-e-exams/',
    n: 'Source of the CAP2090 document codes used throughout. Retrieved 10 Sep 2026.' },
  { t: 'CAP2090A–J — PPL examination learning objectives (nine documents)',
    m: 'All version 1, January 2020; 081 Principles of Flight carries no version line',
    u: 'https://www.caa.co.uk/general-aviation/pilot-training-organisations/ga-theoretical-knowledge-e-exams/',
    n: 'Every learning objective in the Subjects tab is parsed verbatim from these PDFs. Retrieved 10 Sep 2026.' },
  { t: 'CAP3212 — GA Pilot Licensing Review “Wave 2” Consultation Response Document',
    m: 'Published January 2026 · 560 responses · Decision no. 3 covers exam validity',
    u: 'https://www.caa.co.uk/publication/download/26763',
    n: 'Source for everything on the “decided but not yet in force” list. Retrieved 10 Sep 2026.' },
  { t: 'CAP3132 — GA Pilot Licensing Review “Wave 2” proposals',
    m: 'Version dated 07 Jul 2025; consultation closed 8 Aug 2025',
    u: 'https://www.caa.co.uk/our-work/publications/documents/content/cap3132/',
    n: 'The consultation that CAP3212 responds to. Retrieved 10 Sep 2026.' },
  { t: 'Pooleys Air Pilot’s Manual product pages, volumes 1–7',
    m: 'Volume/edition dates read from the publisher’s own pages',
    u: 'https://www.pooleys.com/shop/pooleys-air-pilot-publishing/air-pilots-manual-volumes-1-4-6-7-for-ppl-a-books/',
    n: 'Source for the Books tab, including that the PPL(A) set is volumes 1–4, 6 and 7. Retrieved 10 Sep 2026.' }
];

const SUBJ_BLOCK = {};
BLOCKS.forEach(b => b.subjects.forEach(c => SUBJ_BLOCK[c] = b.no));

const STATUSES = [
  ['none', 'Not started'], ['studying', 'Studying'],
  ['ready', 'Ready to sit'], ['passed', 'Passed']
];

// ---------------------------------------------------------------- state

const KEY = 'ppl-theory-v1';
const blank = () => ({ lo: {}, subj: {}, d1: '', d2: '', theme: '' });
let S;
try { S = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || '{}')); }
catch (e) { S = blank(); }

const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
const sub = c => (S.subj[c] = S.subj[c] || { st: 'none', att: 0, score: '', date: '' });

// ---------------------------------------------------------------- helpers

const $ = s => document.querySelector(s);
const el = (t, cls, html) => {
  const n = document.createElement(t);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
const SUBJECTS = window.SYLLABUS;
const byCode = {};
SUBJECTS.forEach(s => byCode[s.code] = s);
const allLOs = s => s.groups.reduce((a, g) => a + g.items.length, 0);
const doneLOs = s => s.groups.reduce((a, g) =>
  a + g.items.filter(i => S.lo[i.c]).length, 0);

const DAY = 864e5;
const fmt = d => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
const daysTo = d => Math.ceil((d - new Date().setHours(0, 0, 0, 0)) / DAY);

/** 18 months counted from the END of the calendar month of the first attempt. */
function eighteenMonthDeadline(iso) {
  if (!iso) return null;
  const d = new Date(iso + 'T00:00:00');
  if (isNaN(d)) return null;
  return new Date(d.getFullYear(), d.getMonth() + 19, 0); // day 0 = last day of prev month
}
/** 24 months from the day the last exam was passed. */
function validityDeadline(iso) {
  if (!iso) return null;
  const d = new Date(iso + 'T00:00:00');
  if (isNaN(d)) return null;
  return new Date(d.getFullYear(), d.getMonth() + 24, d.getDate());
}

// ---------------------------------------------------------------- render: plan

function renderCountdown() {
  const box = $('#cd');
  box.textContent = '';
  const passed = SUBJECTS.filter(s => sub(s.code).st === 'passed').length;

  const tile = (k, n, s, cls) => {
    const d = el('div');
    d.appendChild(el('div', 'k', k));
    d.appendChild(el('div', 'n' + (cls ? ' ' + cls : ''), n));
    d.appendChild(el('div', 's', s));
    if (cls === 'bad') d.style.color = 'var(--bad)';
    if (cls === 'warn') d.style.color = 'var(--warn)';
    box.appendChild(d);
  };

  tile('Exams passed', passed + '/9',
    passed === 9 ? 'Complete set' : (9 - passed) + ' to go');

  const dl = eighteenMonthDeadline(S.d1);
  if (!dl) {
    tile('18-month window', '—', 'Not started');
  } else {
    const n = daysTo(dl);
    tile('18-month deadline', n < 0 ? 'EXPIRED' : n + 'd',
      fmt(dl), n < 0 ? 'bad' : n < 120 ? 'warn' : '');
  }

  const vd = validityDeadline(S.d2);
  if (!vd) {
    tile('24-month validity', '—', 'Set once all nine are passed');
  } else {
    const n = daysTo(vd);
    tile('Apply for licence by', n < 0 ? 'EXPIRED' : n + 'd',
      fmt(vd), n < 0 ? 'bad' : n < 120 ? 'warn' : '');
  }
}

function renderRisks() {
  const box = $('#risks');
  box.textContent = '';
  const out = [];

  const three = SUBJECTS.filter(s => sub(s.code).att >= 3 && sub(s.code).st !== 'passed');
  if (three.length) out.push(['bad', 'Fourth attempt territory',
    three.map(s => s.name).join(', ') + ' — you have used three attempts. A fourth failure voids '
    + 'every pass you hold, in every subject. Do the further training your school requires and '
    + 'do not book until you are comfortably over 75% on practice papers.']);

  const two = SUBJECTS.filter(s => sub(s.code).att === 2 && sub(s.code).st !== 'passed');
  if (two.length) out.push(['warn', 'Two attempts used',
    two.map(s => s.name).join(', ') + ' — one more failure puts you into the further-training '
    + 'requirement before a fourth and final attempt.']);

  const dl = eighteenMonthDeadline(S.d1);
  const passed = SUBJECTS.filter(s => sub(s.code).st === 'passed').length;
  if (dl && passed < 9) {
    const n = daysTo(dl);
    const left = 9 - passed;
    const per = Math.floor(n / left);            // days available per remaining exam
    const s = left > 1 ? 's' : '';
    if (n < 0) {
      out.push(['bad', '18-month window has expired',
        'Under FCL.025(b)(4) the complete set must be retaken. Speak to your school and the CAA '
        + 'before booking anything else.']);
    } else if (per < 21) {
      out.push(['bad', left + ' exam' + s + ' left, ' + n + ' days, ' + per + ' days each',
        'That is tighter than a single resit cycle allows — a failed paper cannot be re-sat inside '
        + 'the same sitting window. Miss ' + fmt(dl) + ' and all nine papers must be retaken. '
        + 'Talk to your school this week about a booking plan.']);
    } else if (per < 45) {
      out.push(['warn', left + ' exam' + s + ' left, ' + n + ' days, ' + per + ' days each',
        'Workable but with little slack. Sit the subjects you are strongest in first so that any '
        + 'resit has room before ' + fmt(dl) + '.']);
    } else if (n < 180) {
      out.push(['warn', 'Deadline inside six months',
        left + ' exam' + s + ' to pass by ' + fmt(dl) + ' — about ' + per
        + ' days per exam, which leaves room for one resit each.']);
    }
  }
  if (!S.d1 && passed === 0) out.push(['', 'Nothing at risk yet',
    'Your 18-month clock has not started. It starts at the end of the calendar month in which '
    + 'you first sit any paper — so sit exam one only when you are genuinely into ground school, '
    + 'not as a way of feeling started.']);

  const vd = validityDeadline(S.d2);
  if (vd && daysTo(vd) < 180 && daysTo(vd) >= 0)
    out.push(['warn', 'Theory validity running down',
      'Your completed set expires ' + fmt(vd) + '. The licence application must be in by then.']);

  if (passed === 9 && !S.d2) out.push(['warn', 'Add your final pass date',
    'All nine are marked passed but the completion date is blank, so the 24-month clock is not '
    + 'being tracked.']);

  if (!out.length) out.push(['ok', 'Nothing flagged', 'No attempt or deadline risks detected.']);
  out.forEach(([cls, h, b]) => box.appendChild(
    el('div', 'note' + (cls ? ' ' + cls : ''), '<b>' + h + '</b>' + b)));
}

function renderBlocks() {
  const box = $('#blocks');
  box.textContent = '';
  BLOCKS.forEach(b => {
    const subs = b.subjects.map(c => byCode[c]);
    const passed = subs.filter(s => sub(s.code).st === 'passed').length;
    const pct = Math.round(subs.reduce((a, s) =>
      a + doneLOs(s) / Math.max(1, allLOs(s)), 0) / subs.length * 100);

    const blk = el('div', 'blk');
    const h = el('div', 'h');
    h.appendChild(el('div', 'no', b.no));
    h.appendChild(el('div', 't', b.title));
    h.appendChild(el('span', 'pill' + (passed === subs.length ? ' ok' : ''),
      passed + '/' + subs.length + ' passed'));
    blk.appendChild(h);

    const body = el('div', 'b');
    subs.forEach(s => {
      const st = sub(s.code);
      const r = el('div', 'srow');
      r.appendChild(el('div', 'code', s.code));
      r.appendChild(el('div', 'nm', s.name +
        '<i>' + doneLOs(s) + ' of ' + allLOs(s) + ' objectives studied · ' +
        BOOKS[s.code][0] + '</i>'));
      const lbl = STATUSES.find(x => x[0] === st.st)[1];
      r.appendChild(el('span', 'pill' + (st.st === 'passed' ? ' ok' :
        st.st === 'ready' ? ' warn' : ''), lbl));
      body.appendChild(r);
    });
    const bar = el('div', 'bar');
    bar.style.margin = '10px 0 8px';
    bar.appendChild(el('i')).style.width = pct + '%';
    body.appendChild(bar);
    body.appendChild(el('p', 'tiny', b.unlocks));
    blk.appendChild(body);
    box.appendChild(blk);
  });
}

function renderStatusTable() {
  const t = $('#statusTable');
  t.innerHTML = '<thead><tr><th>#</th><th>Subject</th><th>Status</th>' +
    '<th>Attempts</th><th>Score</th><th>Passed</th></tr></thead>';
  const tb = el('tbody');
  SUBJECTS.slice().sort((a, b) => SUBJ_BLOCK[a.code] - SUBJ_BLOCK[b.code] ||
    a.code.localeCompare(b.code)).forEach(s => {
    const st = sub(s.code);
    const tr = el('tr');
    tr.appendChild(el('td', 'mono', s.code));
    tr.appendChild(el('td', null, s.name));
    const lbl = STATUSES.find(x => x[0] === st.st)[1];
    tr.appendChild(el('td', null, '<span class="pill' + (st.st === 'passed' ? ' ok' :
      st.st === 'ready' ? ' warn' : '') + '">' + lbl + '</span>'));
    tr.appendChild(el('td', 'mono', st.att >= 3 && st.st !== 'passed'
      ? '<span class="pill bad">' + st.att + ' of 4</span>'
      : st.att + ' of 4'));
    tr.appendChild(el('td', 'mono', st.score ? st.score + '%' : '—'));
    tr.appendChild(el('td', 'mono', st.date ? fmt(new Date(st.date + 'T00:00:00')) : '—'));
    tb.appendChild(tr);
  });
  t.appendChild(tb);
}

// ---------------------------------------------------------------- render: subjects

function sortedSubjects() {
  const m = $('#sortSel').value;
  const a = SUBJECTS.slice();
  if (m === 'block') a.sort((x, y) => SUBJ_BLOCK[x.code] - SUBJ_BLOCK[y.code] ||
    x.code.localeCompare(y.code));
  else if (m === 'progress') a.sort((x, y) =>
    doneLOs(x) / allLOs(x) - doneLOs(y) / allLOs(y));
  else a.sort((x, y) => x.code.localeCompare(y.code));
  return a;
}

function renderSubjects() {
  const box = $('#subjects');
  const open = new Set([...box.querySelectorAll('details.subj[open]')]
    .map(d => d.dataset.code));
  box.textContent = '';
  const filter = $('#filter').value;

  sortedSubjects().forEach(s => {
    const st = sub(s.code), tot = allLOs(s), done = doneLOs(s);
    const pct = Math.round(done / tot * 100);

    const d = el('details', 'subj');
    d.dataset.code = s.code;
    if (open.has(s.code)) d.open = true;

    const sum = el('summary');
    sum.appendChild(el('span', 'code', s.code));
    sum.appendChild(el('span', 'nm', s.name +
      '<i>Block ' + SUBJ_BLOCK[s.code] + ' · ' + BOOKS[s.code][0] + ' · ' +
      s.cap + ' (' + s.version + ')</i>'));
    if (st.st === 'passed') sum.appendChild(el('span', 'pill ok', 'passed'));
    sum.appendChild(el('span', 'pc', pct + '%'));
    d.appendChild(sum);

    const body = el('div', 'body');
    const bar = el('div', 'bar');
    bar.style.margin = '12px 0 0';
    bar.appendChild(el('i')).style.width = pct + '%';
    body.appendChild(bar);
    body.appendChild(el('p', 'tiny', done + ' of ' + tot +
      ' learning objectives studied'));

    // ---- per-subject controls
    const ctl = el('div', 'ctl');
    const mk = (lab, node) => {
      const w = el('div');
      w.appendChild(el('label', 'f', lab));
      w.appendChild(node);
      return w;
    };
    const sel = el('select');
    STATUSES.forEach(([v, l]) => {
      const o = el('option', null, l);
      o.value = v;
      if (v === st.st) o.selected = true;
      sel.appendChild(o);
    });
    sel.onchange = () => { st.st = sel.value; save(); renderAll(); };
    ctl.appendChild(mk('Status', sel));

    const att = el('select');
    [0, 1, 2, 3, 4].forEach(v => {
      const o = el('option', null, v + ' of 4');
      o.value = v;
      if (v === st.att) o.selected = true;
      att.appendChild(o);
    });
    att.onchange = () => { st.att = +att.value; save(); renderAll(); };
    ctl.appendChild(mk('Attempts used', att));

    const sc = el('input');
    sc.type = 'number'; sc.min = 0; sc.max = 100; sc.placeholder = '%';
    sc.value = st.score;
    sc.oninput = () => { st.score = sc.value; save(); renderStatusTable(); };
    ctl.appendChild(mk('Score', sc));

    const dt = el('input');
    dt.type = 'date'; dt.value = st.date;
    dt.onchange = () => { st.date = dt.value; save(); renderStatusTable(); };
    ctl.appendChild(mk('Date passed', dt));
    body.appendChild(ctl);

    // ---- learning objectives
    let shown = 0;
    s.groups.forEach(g => {
      const items = g.items.filter(i =>
        filter === 'all' || (filter === 'done') === !!S.lo[i.c]);
      if (!items.length) return;
      shown += items.length;
      const gt = el('div', 'gtitle');
      gt.appendChild(el('span', null, g.code));
      gt.appendChild(el('div', null, g.title));
      body.appendChild(gt);
      items.forEach(i => {
        const lab = el('label', 'lo' + (S.lo[i.c] ? ' done' : ''));
        const cb = el('input');
        cb.type = 'checkbox';
        cb.checked = !!S.lo[i.c];
        cb.onchange = () => {
          if (cb.checked) S.lo[i.c] = 1; else delete S.lo[i.c];
          save();
          lab.classList.toggle('done', cb.checked);
          if (filter !== 'all') renderSubjects();
          else { refreshSubjHead(s, d); renderRing(); }
        };
        lab.appendChild(cb);
        lab.appendChild(el('span', null, i.t +
          (i.a ? '' : '<span class="ctx" title="printed in CAP2090 but not ticked in the PPL Aeroplane column">CTX</span>') +
          '<em>' + i.c + '</em>'));
        body.appendChild(lab);
      });
    });
    if (!shown) body.appendChild(el('p', 'tiny', 'Nothing matches the current filter.'));
    d.appendChild(body);
    box.appendChild(d);
  });
}

function refreshSubjHead(s, d) {
  const pct = Math.round(doneLOs(s) / allLOs(s) * 100);
  d.querySelector('summary .pc').textContent = pct + '%';
  d.querySelector('.body .bar i').style.width = pct + '%';
  d.querySelector('.body p.tiny').textContent =
    doneLOs(s) + ' of ' + allLOs(s) + ' learning objectives studied';
}

// ---------------------------------------------------------------- render: static tabs

function renderRuleList(id, list) {
  const box = $(id);
  box.textContent = '';
  list.forEach(r => {
    const d = el('div', 'rule');
    d.appendChild(el('h3', null, r.h +
      (r.cite ? ' <span class="cite">' + r.cite + '</span>' : '')));
    d.appendChild(el('div', 'muted', r.b));
    if (r.q) d.appendChild(el('blockquote', null, r.q));
    box.appendChild(d);
  });
}

function renderBooks() {
  const t = $('#booksTable');
  t.innerHTML = '<thead><tr><th>#</th><th>Exam subject</th><th>Volume</th>' +
    '<th>Title / coverage</th><th>Edition</th></tr></thead>';
  const tb = el('tbody');
  SUBJECTS.slice().sort((a, b) => a.code.localeCompare(b.code)).forEach(s => {
    const [v, title, ed] = BOOKS[s.code];
    const tr = el('tr');
    tr.appendChild(el('td', 'mono', s.code));
    tr.appendChild(el('td', null, s.name));
    tr.appendChild(el('td', 'mono', v));
    tr.appendChild(el('td', null, title));
    tr.appendChild(el('td', null, ed));
    tb.appendChild(tr);
  });
  t.appendChild(tb);
}

function renderSources() {
  const box = $('#sources');
  box.textContent = '';
  SOURCES.forEach(s => {
    const d = el('div', 'src');
    d.appendChild(el('div', 't', s.t));
    d.appendChild(el('div', 'm', s.m));
    const a = el('a', null, s.u);
    a.href = s.u; a.target = '_blank'; a.rel = 'noopener';
    const p = el('div', 'm');
    p.appendChild(a);
    d.appendChild(p);
    d.appendChild(el('div', 'tiny', s.n));
    box.appendChild(d);
  });
  const tot = SUBJECTS.reduce((a, s) => a + allLOs(s), 0);
  const tick = SUBJECTS.reduce((a, s) => a + s.groups.reduce((b, g) =>
    b + g.items.filter(i => i.a).length, 0), 0);
  $('#loCount').textContent = tot;
  $('#loTicked').textContent = tick;
}

// ---------------------------------------------------------------- chrome

function renderRing() {
  const tot = SUBJECTS.reduce((a, s) => a + allLOs(s), 0);
  const done = SUBJECTS.reduce((a, s) => a + doneLOs(s), 0);
  const pct = Math.round(done / tot * 100);
  const C = 2 * Math.PI * 18;
  $('#ringArc').setAttribute('stroke-dashoffset', C * (1 - pct / 100));
  $('#ringTxt').textContent = pct + '%';
  const passed = SUBJECTS.filter(s => sub(s.code).st === 'passed').length;
  $('#hdSub').textContent = passed + ' of 9 exams passed · ' + done + '/' + tot +
    ' objectives';
}

function renderAll() {
  renderRing(); renderCountdown(); renderRisks(); renderBlocks(); renderStatusTable();
}

function show(v) {
  ['plan', 'subjects', 'rules', 'books', 'sources'].forEach(k =>
    $('#v-' + k).hidden = k !== v);
  document.querySelectorAll('nav button').forEach(b =>
    b.setAttribute('aria-selected', b.dataset.v === v));
  window.scrollTo(0, 0);
  if (v === 'subjects' && !$('#subjects').children.length) renderSubjects();
}

// ---------------------------------------------------------------- init

document.querySelectorAll('nav button').forEach(b =>
  b.onclick = () => show(b.dataset.v));
document.querySelectorAll('[data-go]').forEach(b =>
  b.onclick = () => show(b.dataset.go));

$('#d1').value = S.d1;
$('#d2').value = S.d2;
$('#d1').onchange = e => { S.d1 = e.target.value; save(); renderAll(); };
$('#d2').onchange = e => { S.d2 = e.target.value; save(); renderAll(); };
$('#filter').onchange = renderSubjects;
$('#sortSel').onchange = renderSubjects;

if (S.theme) document.documentElement.dataset.theme = S.theme;
$('#themeBtn').onclick = () => {
  const cur = document.documentElement.dataset.theme;
  const dark = cur ? cur === 'dark'
    : matchMedia('(prefers-color-scheme: dark)').matches;
  S.theme = dark ? 'light' : 'dark';
  document.documentElement.dataset.theme = S.theme;
  save();
};

$('#expBtn').onclick = () => {
  const blob = new Blob([JSON.stringify(S, null, 1)], { type: 'application/json' });
  const a = el('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'ppl-theory-progress.json';
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
};
$('#impBtn').onclick = () => {
  const f = el('input');
  f.type = 'file'; f.accept = '.json,application/json';
  f.onchange = () => {
    const r = new FileReader();
    r.onload = () => {
      try {
        S = Object.assign(blank(), JSON.parse(r.result));
        save();
        $('#d1').value = S.d1; $('#d2').value = S.d2;
        renderAll(); renderSubjects();
      } catch (e) { alert('That file could not be read as progress data.'); }
    };
    r.readAsText(f.files[0]);
  };
  f.click();
};

renderRuleList('#rules', RULES);
renderRuleList('#pending', PENDING);
renderRuleList('#unknowns', UNKNOWNS);
renderBooks();
renderSources();
renderAll();
renderSubjects();
