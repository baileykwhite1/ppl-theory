"""dgcss.css is a copy of the app's .dg rules so the geometry audit can measure
diagrams outside the app. A copy drifts: three bugs in one session were the audit
running against rules index.html had moved on from, which is exactly the kind of
failure that makes a checking tool worse than no tool. This compares the two and
names what is missing.
Usage: check_dgcss.py   -> exits 1 if they disagree."""
import re, sys

def dg_rules(css):
    css = re.sub(r'/\*.*?\*/', ' ', css, flags=re.S)   # comments ride along into the selector otherwise
    out = {}
    for m in re.finditer(r'([^{}]+)\{([^{}]*)\}', css):
        sel, body = m.group(1).strip(), m.group(2).strip()
        if re.search(r'(^|[\s,>]).dg[\s.:\[]', sel + ' '):
            out[' '.join(sel.split())] = ' '.join(body.split())
    return out

app = ''.join(re.findall(r'<style[^>]*>(.*?)</style>', open('index.html', encoding='utf-8').read(), re.S))
copy = open('.claude/tools/dgcss.css', encoding='utf-8').read()
a, c = dg_rules(app), dg_rules(copy)

# The bare .dg rule is deliberately absent from the copy: it sizes the <svg> to its
# container, and the audit page sizes #host instead so every figure is measured at
# exactly 640 units. Everything else must match.
BY_DESIGN = {'.dg'}

missing = [s for s in a if s not in c and s not in BY_DESIGN]
differs = [s for s in a if s in c and s not in BY_DESIGN and a[s] != c[s]]
extra = [s for s in c if s not in a]

for s in missing: print('  MISSING from dgcss.css: %s { %s }' % (s, a[s][:70]))
for s in differs: print('  DIFFERS  %s\n      app : %s\n      copy: %s' % (s, a[s][:70], c[s][:70]))
for s in extra:   print('  ONLY in dgcss.css (stale?): %s' % s)
n = len(missing) + len(differs) + len(extra)
print('%d .dg rules in index.html, %d in dgcss.css — %s'
      % (len(a), len(c), 'in step' if not n else '%d out of step' % n))
sys.exit(1 if n else 0)
