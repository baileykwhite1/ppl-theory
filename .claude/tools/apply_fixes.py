"""Splice corrected SVGs from .claude/scratch/fix/<id>.svg back into data/diagrams.js.

The diagrams are template literals, so the only thing that can break the file is a
backtick or a ${ in the replacement — both are rejected rather than escaped, because
either one means the agent produced something that is not plain SVG."""
import os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SRC = os.path.join(ROOT, 'data', 'diagrams.js')
FIX = os.path.join(ROOT, '.claude', 'scratch', 'fix')

def main(only=None):
    s = open(SRC).read()
    applied, skipped = [], []
    for fn in sorted(os.listdir(FIX)):
        if not fn.endswith('.svg'):
            continue
        did = fn[:-4]
        if only and did not in only:
            continue
        new = open(os.path.join(FIX, fn)).read().strip()
        if '`' in new or '${' in new:
            skipped.append((did, 'contains a backtick or ${')); continue
        if not new.startswith('<svg') or not new.rstrip().endswith('</svg>'):
            skipped.append((did, 'not a bare <svg> element')); continue
        pat = re.compile(r'(\n%s: \{.*?svg: `)(.*?)(`\n\})' % re.escape(did), re.S)
        m = pat.search(s)
        if not m:
            skipped.append((did, 'not found in diagrams.js')); continue
        if m.group(2).strip() == new:
            skipped.append((did, 'unchanged')); continue
        s = s[:m.start(2)] + new + s[m.end(2):]
        applied.append(did)
    open(SRC, 'w').write(s)
    print('applied:', ' '.join(applied) or '(none)')
    for d, why in skipped:
        print('skipped:', d, '-', why)
    return 0 if not skipped or all(w == 'unchanged' for _, w in skipped) else 0

if __name__ == '__main__':
    sys.exit(main(sys.argv[1:] or None))
