"""Merge generated diagrams into data/diagrams.js and reference them from articles.

Diagram entries are appended before the closing brace of window.DIAG. A
<figure> is inserted immediately after the named <h3>, so the picture introduces
the section it belongs to.
"""
import json, re, sys

PLACEMENTS = [
    ('semicircular', 'data/content/010.js', '010-altimetry',    'Cruising levels above 3000 ft'),
    ('transponder',  'data/content/010.js', '010-docs',         'Transponder codes worth knowing cold'),
    ('sarsignals',   'data/content/010.js', '010-docs',         'Distress versus urgency'),
    ('sepreval',     'data/content/010.js', '010-licensing',    'Keeping the SEP rating alive — also changed'),
    ('pdrareas',     'data/content/010.js', '010-lowflying',    'Airspace you must simply avoid'),
    ('carbIce',      'data/content/020.js', '020-engine',       'Carburettor and injection'),
    ('carbIce',      'data/content/050.js', '050-cloud',        'Icing'),
    ('gyroProps',    'data/content/020.js', '020-instruments',  'Gyroscopic instruments'),
    ('elecBus',      'data/content/020.js', '020-prop-systems', 'Electrical system'),
    ('flapTypes',    'data/content/020.js', '020-airframe',     'Flaps'),
    ('flapTypes',    'data/content/081.js', '081-drag',         'Devices'),
]

def js_str(s):
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', ' ') + "'"

def entry(d):
    if '`' in d['svg'] or '${' in d['svg']:
        raise ValueError('svg for %s breaks the template literal' % d['id'])
    return ("\n%s: {\n  alt: %s,\n  cap: %s,\n  svg: `%s`\n},\n"
            % (d['id'], js_str(d['alt']), js_str(d['cap']), d['svg'].strip()))

def main():
    drawn = json.load(open(sys.argv[1]))
    by_id = {d['id']: d for d in drawn}

    # --- diagrams.js
    src = open('data/diagrams.js').read()
    end = src.rstrip().rfind('};')
    assert end > 0, 'cannot find the end of window.DIAG'
    added = []
    for d in drawn:
        if re.search(r'^%s: \{' % re.escape(d['id']), src, re.M):
            print('    ~  %s already present, skipped' % d['id']); continue
        added.append(d)
    if added:
        block = ''.join(entry(d) for d in added)
        head = src[:end].rstrip()
        # the last existing entry carries no trailing comma; appending after it
        # would butt two object literals together
        if head.endswith('}'):
            head += ','
        src = head + '\n' + block + '\n};\n'
        open('data/diagrams.js', 'w').write(src)
        print('    +  %d diagrams: %s' % (len(added), ', '.join(d['id'] for d in added)))

    # --- figure references
    for dg, path, art, h3 in PLACEMENTS:
        if dg not in by_id:
            continue
        s = open(path).read()
        i = s.find("id: '%s'" % art)
        if i < 0:
            print('    !! no article %s in %s' % (art, path)); continue
        b0 = s.index('body: `', i); b1 = s.index('`', b0 + 7)
        body = s[b0 + 7:b1]
        if 'data-d="%s"' % dg in body:
            print('    ~  %s already referenced in %s' % (dg, art)); continue
        anchor = '<h3>%s</h3>' % h3
        j = body.find(anchor)
        if j < 0:
            print('    !! anchor not found: %s / %s' % (art, h3)); continue
        k = j + len(anchor)
        body = body[:k] + '\n<figure data-d="%s"></figure>' % dg + body[k:]
        open(path, 'w').write(s[:b0 + 7] + body + s[b1:])
        print('    +  figure %s -> %s (%s)' % (dg, art, h3))

if __name__ == '__main__':
    main()
