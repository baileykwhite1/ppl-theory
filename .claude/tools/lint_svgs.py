"""Spec lint for generated diagrams: the mechanical rules from DIAGRAM-SPEC.md.
Usage: lint_svgs.py drawn.json   -> prints offenders, exits 1 if any."""
import json, re, sys
ALLOWED_CLASSES = set('dg b s sb sub blue-t red-t green-t orange-t ink thin dash fill tint '
                      'blue red green orange fblue fred fgreen forange face panel white fwhite white-t dark-t'.split())
def lint(d):
    s, i, p = d['svg'], d['id'], []
    if not re.search(r'viewBox="0 0 640 \d+"', s): p.append('viewBox not 640 wide')
    m = re.search(r'viewBox="0 0 640 (\d+)"', s)
    if m and not (150 <= int(m.group(1)) <= 520): p.append('height %s out of range' % m.group(1))
    if 'class="dg"' not in s: p.append('no class="dg"')
    if 'role="img"' not in s: p.append('no role=img')
    if 'aria-label' not in s: p.append('no aria-label')
    for b in ['<script', '<image', '<foreignObject', 'xlink:href', 'http://', 'https://', '<style']:
        if b in s: p.append('contains ' + b)
    for a in ['fill="#', 'stroke="#', 'font-size=', 'style="', 'fill="rgb', 'stroke="rgb']:
        if a in s: p.append('inline ' + a)
    for m in re.finditer(r'(?<![-\w])id="([^"]+)"', s):
        if not m.group(1).startswith(i + '-'): p.append('unprefixed id ' + m.group(1))
    for m in re.finditer(r'url\(#([^)]+)\)', s):
        if 'id="%s"' % m.group(1) not in s: p.append('dangling ref ' + m.group(1))
    for m in re.finditer(r'class="([^"]+)"', s):
        for c in m.group(1).split():
            if c not in ALLOWED_CLASSES: p.append('unknown class .' + c)
    if '`' in s or '${' in s: p.append('backtick or ${ breaks template literal')
    if not d.get('alt') or not d.get('cap'): p.append('missing alt/cap')
    return sorted(set(p))
def main():
    drawn = json.load(open(sys.argv[1])); bad = 0
    for d in drawn:
        p = lint(d)
        if p: bad += 1; print('  %s: %s' % (d['id'], '; '.join(p)))
    print(('%d of %d fail the spec lint' % (bad, len(drawn))) if bad else 'all %d pass the spec lint' % len(drawn))
    sys.exit(1 if bad else 0)
if __name__ == '__main__': main()
