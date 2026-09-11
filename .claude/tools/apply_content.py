"""Merge workflow-generated content into data/content/0NN.js.

The content files are hand-written JS, not data, so this edits them as text at
known structural anchors rather than round-tripping through a parser — a
round-trip would reflow every article body and make the diff unreadable.

Anchors, per file:
    articles: [ ... ]        ends at the first line that is exactly "],"
    quiz: [ ... ]            ends at the next line that is exactly "],"
    cards: [ ... ]           ends at "]" followed by "};"
"""
import json, re, sys, io

def js_str(s):
    """A JS single-quoted string literal."""
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', ' ') + "'"

def js_template(s):
    """A JS template literal for an HTML body."""
    if '`' in s or '${' in s:
        raise ValueError('body contains a backtick or ${ which would break the template literal')
    return '`\n' + s.strip() + '`'

def fmt_quiz(q):
    opts = ', '.join(js_str(o) for o in q['a'])
    return ('{ q: %s, a: [%s], c: %d, why: %s, ref: %s },'
            % (js_str(q['q']), opts, int(q['c']), js_str(q['why']), js_str(q['ref'])))

def fmt_card(c):
    return '{ f: %s, b: %s, ref: %s },' % (js_str(c['f']), js_str(c['b']), js_str(c['ref']))

def fmt_article(a):
    tags = ', '.join(js_str(t) for t in a['tags'])
    return ("{\n  id: %s, title: %s, mins: %d, tags: [%s],\n  body: %s\n}"
            % (js_str(a['id']), js_str(a['title']), int(a['mins']), tags, js_template(a['body'])))

def section_markers(lines):
    """Return (articles_end, quiz_end, cards_end) as 0-based line indices."""
    art_start = next(i for i, l in enumerate(lines) if l.rstrip() == 'articles: [')
    art_end = next(i for i in range(art_start + 1, len(lines)) if lines[i].rstrip() == '],')
    quiz_start = next(i for i in range(art_end, len(lines)) if lines[i].rstrip() == 'quiz: [')
    quiz_end = next(i for i in range(quiz_start + 1, len(lines)) if lines[i].rstrip() == '],')
    cards_start = next(i for i in range(quiz_end, len(lines)) if lines[i].rstrip() == 'cards: [')
    cards_end = next(i for i in range(cards_start + 1, len(lines)) if lines[i].rstrip() in (']', '],'))
    return art_end, quiz_end, cards_end

def apply_to_file(path, items):
    src = open(path).read()
    lines = src.split('\n')

    new_articles = [i for i in items if i['kind'] == 'article']
    sections     = [i for i in items if i['kind'] == 'section']

    # --- sections go inside an existing article body, before its trap block
    for s in sections:
        pat = re.compile(r"(id: '" + re.escape(s['id']) + r"',)")
        m = pat.search(src)
        if not m:
            print('    !! article not found for section:', s['id']); continue
        # find that article's body template literal
        b0 = src.index('body: `', m.end())
        b1 = src.index('`', b0 + 7)
        body = src[b0 + 7:b1]
        html = s['body'].strip()
        if '`' in html or '${' in html:
            print('    !! section html unsafe for template literal:', s['id']); continue
        trap = body.find('<div class="trap">')
        if trap >= 0:
            body = body[:trap].rstrip() + '\n\n' + html + '\n\n' + body[trap:]
        else:
            body = body.rstrip() + '\n\n' + html + '\n'
        src = src[:b0 + 7] + body + src[b1:]
        print('    +  section "%s" -> %s' % (s['title'], s['id']))

    lines = src.split('\n')
    art_end, quiz_end, cards_end = section_markers(lines)

    def comma_before(idx):
        """The last entry in these arrays carries no trailing comma; appending after
        it would produce two adjacent object literals. Give it one."""
        j = idx - 1
        while j > 0 and not lines[j].strip():
            j -= 1
        t = lines[j].rstrip()
        if t.endswith('}') or t.endswith(']'):
            lines[j] = t + ','

    # --- insert in reverse line order so earlier indices stay valid
    cards = [c for i in items for c in i.get('cards', [])]
    if cards:
        comma_before(cards_end)
        lines[cards_end:cards_end] = [fmt_card(c) for c in cards]
        # the array's last element must not carry one
        lines[cards_end + len(cards) - 1] = lines[cards_end + len(cards) - 1].rstrip().rstrip(',')
        print('    +  %d flashcards' % len(cards))

    quiz = [q for i in items for q in i.get('quiz', [])]
    if quiz:
        comma_before(quiz_end)
        lines[quiz_end:quiz_end] = [fmt_quiz(q) for q in quiz]
        lines[quiz_end + len(quiz) - 1] = lines[quiz_end + len(quiz) - 1].rstrip().rstrip(',')
        print('    +  %d quiz questions' % len(quiz))

    if new_articles:
        comma_before(art_end)
        block = []
        for a in new_articles:
            block.extend(fmt_article(a).split('\n'))
            block[-1] += ','
        block[-1] = block[-1].rstrip(',')
        lines[art_end:art_end] = block
        print('    +  %d articles: %s' % (len(new_articles), ', '.join(a['id'] for a in new_articles)))

    open(path, 'w').write('\n'.join(lines))

def main():
    items = json.load(open(sys.argv[1]))
    by = {}
    for it in items:
        by.setdefault(str(it['subject']).strip()[:3], []).append(it)
    for subj, group in sorted(by.items()):
        path = 'data/content/%s.js' % subj
        print('  %s  (%d items)' % (path, len(group)))
        apply_to_file(path, group)

if __name__ == '__main__':
    main()
