/* Map each quiz question to a CAP2090 learning-objective GROUP within its own subject.
   Group level, not item level: item texts are long and overlapping, and a wrong item
   tag would be worse than a right group tag. Scoring is TF-IDF-ish — a term that
   appears in only one group in the subject is worth far more than one in half of them. */
global.window = {};
const fs = require('fs');
for (const f of fs.readdirSync('data/content').filter(f => f.endsWith('.js')))
  eval(fs.readFileSync('data/content/' + f, 'utf8'));
eval(fs.readFileSync('data/syllabus.js', 'utf8'));

const STOP = new Set(('the a an and or of to in on for with at by from as is are be that this it its ' +
  'you your their his her which what when where how why not no yes if then than so but ' +
  'general basic types type use used using including include includes relevant parts ' +
  'aircraft aeroplane flight air').split(' '));
const toks = t => (t || '').toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/)
  .filter(w => w.length > 3 && !STOP.has(w));

function tagSubject(code) {
  const sub = window.SYLLABUS.find(s => s.code === code);
  const groups = sub.groups.map(g => ({
    code: g.code,
    terms: new Set(toks(g.title + ' ' + g.items.map(i => i.t).join(' ')))
  }));
  // document frequency across groups in this subject
  const df = {};
  groups.forEach(g => g.terms.forEach(t => df[t] = (df[t] || 0) + 1));
  const N = groups.length;

  return (window.SC[code].quiz || []).map(q => {
    const qt = toks(q.q + ' ' + q.a.join(' ') + ' ' + q.why + ' ' + q.ref);
    const seen = new Set();
    let best = null, second = 0;
    for (const g of groups) {
      let sc = 0;
      for (const t of qt) {
        if (seen.has(t + g.code)) continue;
        seen.add(t + g.code);
        if (g.terms.has(t)) sc += Math.log(1 + N / df[t]);
      }
      if (!best || sc > best.sc) { second = best ? best.sc : 0; best = { code: g.code, sc: sc }; }
      else if (sc > second) second = sc;
    }
    // confident when the winner clearly beats the runner-up
    const conf = best && best.sc > 0 ? (best.sc - second) / best.sc : 0;
    return { q: q, lo: best && best.sc >= 2 ? best.code : null,
             score: best ? +best.sc.toFixed(2) : 0, conf: +conf.toFixed(2) };
  });
}

const out = {};
let tagged = 0, total = 0, confident = 0;
for (const s of window.SYLLABUS) {
  const r = tagSubject(s.code);
  out[s.code] = r;
  total += r.length;
  tagged += r.filter(x => x.lo).length;
  confident += r.filter(x => x.lo && x.conf >= 0.25).length;
}
console.log(`tagged ${tagged}/${total} questions (${Math.round(tagged / total * 100)}%), ` +
            `${confident} of them with a clear winner`);
if (process.argv[2] === 'sample') {
  for (const c of ['010', '030', '081']) {
    console.log('\n=== ' + c + ' ===');
    out[c].slice(0, 6).forEach(x => console.log(
      `  ${x.lo || '(none)'}  conf=${x.conf}  ${x.q.q.slice(0, 72)}`));
  }
}
if (process.argv[2] === 'write') {
  for (const s of window.SYLLABUS) {
    const path = 'data/content/' + s.code + '.js';
    let src = fs.readFileSync(path, 'utf8');
    const rows = out[s.code];
    let hit = 0;
    rows.forEach(x => {
      if (!x.lo) return;
      // find this question's literal and append lo: before the closing brace
      const needle = "{ q: '" + x.q.q.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "',";
      const i = src.indexOf(needle);
      if (i < 0) return;
      const end = src.indexOf(" },\n", i);
      const end2 = src.indexOf(" }\n", i);
      const cut = end >= 0 && (end2 < 0 || end < end2) ? end : end2;
      if (cut < 0) return;
      src = src.slice(0, cut) + ", lo: '" + x.lo + "'" + src.slice(cut);
      hit++;
    });
    fs.writeFileSync(path, src);
    console.log('  ' + s.code + ': wrote ' + hit + ' tags');
  }
}
