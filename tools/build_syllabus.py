#!/usr/bin/env python3
"""Regenerate data/syllabus.js from the CAA's nine CAP2090 learning-objective PDFs.

Downloads each document from caa.co.uk, extracts its syllabus table with pdfplumber,
and reads every row's PPL-Aeroplane tick directly from the table cell. Heading rows
(codes ending .00) are treated as structure, not content, unless the CAA ticks them
directly -- a few learning objectives are stated at heading level.

Usage:  python3 -m venv .venv && ./.venv/bin/pip install pdfplumber
        ./.venv/bin/python tools/build_syllabus.py
"""

import json
import os
import re
import sys
import urllib.request

import pdfplumber

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(ROOT, 'tools', '.cache')
OUT = os.path.join(ROOT, 'data', 'syllabus.js')
DL = 'https://www.caa.co.uk/publication/download/{}'

# subject code, name, CAP number, caa.co.uk download id, common/aeroplane-specific
SUBJECTS = [
    ('010', 'Air Law',                       'CAP2090J', 18302, 'common'),
    ('020', 'Aircraft General Knowledge',    'CAP2090A', 18284, 'specific'),
    ('030', 'Flight Performance & Planning', 'CAP2090B', 18286, 'specific'),
    ('040', 'Human Performance',             'CAP2090C', 18288, 'common'),
    ('050', 'Meteorology',                   'CAP2090D', 18290, 'common'),
    ('060', 'Navigation',                    'CAP2090E', 18292, 'common'),
    ('070', 'Operational Procedures',        'CAP2090F', 18294, 'specific'),
    ('081', 'Principles of Flight',          'CAP2090G', 18296, 'specific'),
    ('090', 'Communications',                'CAP2090I', 18300, 'common'),
]

CODE = re.compile(r'^\d{3}(?:\.\d{2}){3}$')
VERSION = re.compile(r'Version\s*(\d+)\s*\|\s*([A-Za-z]+\s*\d{4})')


def fetch(dl_id):
    """Download a CAP2090 PDF, caching it under tools/.cache/."""
    os.makedirs(CACHE, exist_ok=True)
    path = os.path.join(CACHE, f'{dl_id}.pdf')
    if not os.path.exists(path):
        req = urllib.request.Request(DL.format(dl_id),
                                     headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as r, open(path, 'wb') as f:
            f.write(r.read())
        print(f'  downloaded {dl_id}.pdf', file=sys.stderr)
    return path


def read_rows(path):
    """Return (version, [{code, text, aero}]) from one CAP2090 PDF.

    The tables are six columns: syllabus reference, objective text, then a tick
    column each for Aeroplane PPL, Aeroplane Bridge, Helicopter PPL, Helicopter
    Bridge. Column index 2 is the one that matters for a PPL(A).
    """
    rows, version = [], None
    with pdfplumber.open(path) as pdf:
        for page in pdf.pages:
            m = VERSION.search(page.extract_text() or '')
            if m and not version:
                version = f'v{m.group(1)}, {m.group(2)}'
            for table in page.extract_tables():
                for raw in table:
                    if len(raw) < 6:
                        continue
                    cell = [(c or '').replace('\n', ' ').strip() for c in raw]
                    if CODE.match(cell[0]):
                        rows.append({'code': cell[0],
                                     'text': re.sub(r'\s+', ' ', cell[1]),
                                     'aero': cell[2].lower() == 'x'})
                    elif rows and not cell[0] and cell[1].startswith('('):
                        # a wrapped sub-item, e.g. "(a) bank angle;"
                        rows[-1]['text'] += ' ' + re.sub(r'\s+', ' ', cell[1])
    return version, rows


def build_subject(code, name, cap, rows, version, kind):
    titles = {r['code']: r['text'].strip() for r in rows if r['text'].strip()}
    top = {titles.get(f'{c}.00.00.00', '') for c in {r['code'][:3] for r in rows}}
    groups, order = {}, []
    for r in rows:
        a, b, c, d = r['code'].split('.')
        # heading rows are structure, not content -- keep only if ticked directly
        if d == '00' and not r['aero']:
            continue
        gk = f'{a}.{b}'
        if gk not in groups:
            title = titles.get(f'{a}.{b}.00.00', '').strip()
            if not title or title in top:      # fall back to the third level
                title = titles.get(f'{a}.{b}.{c}.00', '').strip() or gk
            groups[gk] = {'code': gk, 'title': title, 'items': []}
            order.append(gk)
        parent = titles.get(f'{a}.{b}.{c}.00', '').strip()
        text = r['text'].strip()
        if parent and parent.lower() != text.lower() and parent != groups[gk]['title']:
            text = f'{parent} — {text}'
        groups[gk]['items'].append({'c': r['code'], 't': text,
                                    'a': 1 if r['aero'] else 0})
    return {'code': code, 'name': name, 'cap': cap, 'kind': kind,
            'version': version or 'v1, undated',
            'groups': [groups[k] for k in order]}


def main():
    out = []
    for code, name, cap, dl_id, kind in SUBJECTS:
        version, rows = read_rows(fetch(dl_id))
        subject = build_subject(code, name, cap, rows, version, kind)
        n = sum(len(g['items']) for g in subject['groups'])
        t = sum(i['a'] for g in subject['groups'] for i in g['items'])
        print(f'{code} {name:32s} groups={len(subject["groups"]):3d} '
              f'LOs={n:4d} ticked={t:4d} {subject["version"]}', file=sys.stderr)
        out.append(subject)

    total = sum(len(g['items']) for s in out for g in s['groups'])
    ticked = sum(i['a'] for s in out for g in s['groups'] for i in g['items'])
    print(f'\ntotal {total} learning objectives, {ticked} ticked for PPL(A)',
          file=sys.stderr)

    with open(OUT, 'w') as f:
        f.write('window.SYLLABUS = ')
        json.dump(out, f, separators=(',', ':'), ensure_ascii=False)
        f.write(';\n')
    print(f'wrote {OUT}', file=sys.stderr)


if __name__ == '__main__':
    main()
