"""Merge generated diagrams into data/diagrams.js and reference them from articles.

Placements come from placements.resolved.json: diagram id -> [[articleId, h3], ...].
A <figure> goes immediately after the named <h3>, so the picture introduces the
section it belongs to. An entry already in diagrams.js is replaced only when the
new one is flagged as a correction (wasCorrected) or --replace is given; a figure
reference already present in an article is left alone.
"""
import json, re, sys

def js_str(s):
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', ' ') + "'"

def entry(d):
    if '`' in d['svg'] or '${' in d['svg']:
        raise ValueError('svg for %s breaks the template literal' % d['id'])
    return ("\n%s: {\n  alt: %s,\n  cap: %s,\n  svg: `%s`\n},\n"
            % (d['id'], js_str(d['alt']), js_str(d['cap']), d['svg'].strip()))

def entry_span(src, did):
    """(start, end) of an existing `id: { ... },` block, or None."""
    m = re.search(r'^%s: \{\n' % re.escape(did), src, re.M)
    if not m: return None
    # the block ends at the first "\n}," or "\n}" that follows the closing backtick of svg
    i = src.index('svg: `', m.start())
    j = src.index('`', i + 6)               # closing backtick of the svg literal
    k = src.index('}', j)                    # the entry's closing brace
    end = k + 1
    if src[end:end+1] == ',': end += 1
    return (m.start(), end)

def main():
    drawn = json.load(open(sys.argv[1]))
    force = '--replace' in sys.argv
    places = json.load(open('.claude/tools/placements.resolved.json'))
    by_id = {d['id']: d for d in drawn}

    # --- diagrams.js
    src = open('data/diagrams.js').read()
    added, replaced, kept = [], [], []
    for d in drawn:
        span = entry_span(src, d['id'])
        if span:
            if force or d.get('wasCorrected'):
                src = src[:span[0]] + entry(d).strip('\n') + '\n' + src[span[1]:].lstrip('\n')
                replaced.append(d['id'])
            else:
                kept.append(d['id'])
            continue
        added.append(d)
    if added:
        end = src.rstrip().rfind('};')
        head = src[:end].rstrip()
        if head.endswith('}'): head += ','
        src = head + '\n' + ''.join(entry(d) for d in added) + '\n};\n'
    open('data/diagrams.js', 'w').write(src)
    print('    +  %d added: %s' % (len(added), ', '.join(d['id'] for d in added) or '-'))
    print('    ~  %d replaced (corrected): %s' % (len(replaced), ', '.join(replaced) or '-'))
    print('    =  %d kept as-is' % len(kept))

    # --- figure references
    n = 0
    for dg, plist in places.items():
        if dg not in by_id and not entry_span(src, dg):
            continue
        for art, h3 in plist:
            code = art[:3]
            path = 'data/content/%s.js' % code
            s = open(path).read()
            i = s.find("id: '%s'" % art)
            if i < 0:
                print('    !! no article %s' % art); continue
            b0 = s.index('body: `', i); b1 = s.index('`', b0 + 7)
            body = s[b0 + 7:b1]
            if 'data-d="%s"' % dg in body:
                continue
            anchor = '<h3>%s</h3>' % h3
            j = body.find(anchor)
            if j < 0:
                print('    !! anchor not found: %s / %s' % (art, h3)); continue
            k = j + len(anchor)
            body = body[:k] + '\n<figure data-d="%s"></figure>' % dg + body[k:]
            open(path, 'w').write(s[:b0 + 7] + body + s[b1:])
            n += 1
    print('    +  %d figure references inserted' % n)

if __name__ == '__main__':
    main()
