"""Pull the draw run's results into one file, lint them, and stage the geometry audit.
Usage: collect_diagrams.py <task-output.json | journal.jsonl>  -> .claude/scratch/drawn-final.json
                                                                   .claude/scratch/candidates.js
Handles both shapes: the workflow's returned array, or a raw journal (draw + check pairs)."""
import json, sys, os, subprocess

def from_output(path):
    d = json.load(open(path))
    res = d.get('result', d) if isinstance(d, dict) else d
    return [x for x in res if isinstance(x, dict) and x.get('svg')]

def from_journal(path):
    draws, checks = {}, {}
    for line in open(path):
        try: j = json.loads(line)
        except: continue
        if j.get('type') != 'result' or not isinstance(j.get('result'), dict): continue
        r = j['result']
        if 'svg' in r and r.get('id'): draws[r['id']] = r
        elif 'factuallyWrong' in r and r.get('fixedSvg') is not None:
            checks.setdefault(j.get('agentId'), r)
    # checks are not keyed by id in the journal; match a corrected svg back by its aria-label / id prefix
    out = []
    for did, d in draws.items():
        item = dict(d); item['wasCorrected'] = False; item['problems'] = []
        for c in checks.values():
            fx = c.get('fixedSvg') or ''
            if c.get('factuallyWrong') and fx and ('id="%s-' % did in fx or ('aria-label' in fx and did.lower() in fx.lower()[:400])):
                item['svg'] = fx
                if c.get('fixedCap'): item['cap'] = c['fixedCap']
                item['wasCorrected'] = True; item['problems'] = c.get('problems', [])
        out.append(item)
    return out

src = sys.argv[1]
items = from_journal(src) if src.endswith('.jsonl') else from_output(src)
os.makedirs('.claude/scratch', exist_ok=True)
json.dump(items, open('.claude/scratch/drawn-final.json', 'w'), indent=1)
open('.claude/scratch/candidates.js', 'w').write(
    'window.CAND = ' + json.dumps({x['id']: x['svg'] for x in items}) + ';\n')
print('collected %d diagrams (%d flagged corrected) -> drawn-final.json, candidates.js'
      % (len(items), sum(1 for x in items if x.get('wasCorrected'))))
rc = subprocess.call([sys.executable, '.claude/tools/lint_svgs.py', '.claude/scratch/drawn-final.json'])
sys.exit(rc)
