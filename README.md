# UK PPL(A) Theory — revision dashboard

A single-page, offline-capable revision tracker for the nine UK CAA PPL(A) theoretical
knowledge exams. No build step, no dependencies, no backend — progress lives in the
browser's `localStorage`.

**Live site:** enable GitHub Pages on this repo (Settings → Pages → Deploy from branch → `main` / root).

## What's in it

| Tab | Contents |
| --- | --- |
| **Plan** | The two deadlines that actually bind you, a risk watch that reacts to your attempts and dates, four suggested exam blocks, and a status table |
| **Subjects** | All 551 learning objectives from the CAA's nine `CAP2090` documents, parsed verbatim, as tickable checklists with per-subject status, attempts, score and pass date |
| **Rules** | Every rule quoted from primary sources, with citations; plus what's decided-but-not-yet-in-force, and what the CAA doesn't publish |
| **Books** | Pooleys Air Pilot's Manual volume → exam subject mapping with current editions |
| **Sources** | Full source list with URLs, document versions and retrieval dates |

## The correction this repo exists to make

Almost every third-party study site says you must pass all nine PPL exams **within six
sittings**. For a PPL that is wrong, and it changes how you should plan.

`FCL.025(b)(3)` — the six-sittings rule — is written to apply to applicants for the
**ATPL theoretical knowledge examination, CPL or IR**. `FCL.025(b)(4)` is the LAPL/PPL
equivalent and refers only to **four attempts per paper** and the **18-month period**;
it contains no sittings limit. The UK CAA separately removed the sittings cap from its GA
examination procedures in Standards Document 11 version 14 (December 2020), recorded in
that document's amendment table as *"Removal of the number of sittings within validity
requirements."*

So there is no need to hold sittings in reserve for retakes. The constraints that do bind
a PPL candidate are:

1. **75%** to pass, no negative marking — `FCL.025(b)(1)`
2. **All nine passed within 18 months** of the end of the calendar month of your first
   attempt — `FCL.025(b)(2)`
3. **Four attempts per paper.** A fourth failure puts you in stand-down and voids
   **every pass in every subject** — `FCL.025(b)(4)`, Standards Doc 11 §11.1.31–36
4. **One attempt at a given paper per sitting** (a sitting being ≤10 consecutive days) —
   `GM1 FCL.025`
5. The completed set is valid **24 months** for the licence application —
   `FCL.025(c)(1)(i)`

## Primary sources

All regulatory content was read from primary documents on 10 September 2026, not from
memory or study sites:

- **UK Regulation (EU) No. 1178/2011 Annex I Part-FCL**, consolidated rulebook, page
  footers dated **July 2026** —
  <https://regulatorylibrary.caa.co.uk/1178-2011-PDF/PDF.pdf>
  (FCL.025 pp. 80–82; FCL.215 p. 144; AMC1 FCL.210;FCL.215 pp. 145+;
  AMC1 FCL.215;FCL.235 p. 209)
- **CAA Standards Document 11, Revision 15** (May 2022) —
  <https://www.caa.co.uk/publication/download/12697>
- **CAA PPL(A) guidance page** (24-month validity, nine subjects) —
  <https://www.caa.co.uk/general-aviation/pilot-licences/aeroplanes/private-pilot-licence-for-aeroplanes/>
- **CAA GA Theoretical Knowledge e-Exams** (CAP2090 index) —
  <https://www.caa.co.uk/general-aviation/pilot-training-organisations/ga-theoretical-knowledge-e-exams/>
- **CAP3212** — GA Pilot Licensing Review "Wave 2" Consultation Response Document,
  January 2026 — <https://www.caa.co.uk/publication/download/26763>
- **Pooleys Air Pilot's Manual** product pages for volume/edition data —
  <https://www.pooleys.com/>

### Known limitation

The CAA does **not** publish per-subject question counts or time limits. Part-FCL gives
only the ~120-question total for the whole set (`AMC1 FCL.215;FCL.235`), and Standards
Document 11 instructs the Ground Examiner to confirm "the time limits and number of
questions" to you verbally before each paper. Figures widely quoted online are not
CAA-published and are deliberately omitted here — ask your Ground Examiner.

The `CAP2090` learning objectives are all version 1, January 2020 (the Principles of
Flight document carries no version line). They are the current published objectives but
are six years old; where one conflicts with current law, the law wins.

## Regenerating the syllabus data

`data/syllabus.js` is generated from the nine CAA PDFs. The generator lives in
[`tools/`](tools/); it downloads each `CAP2090` document, extracts the syllabus tables
with `pdfplumber`, and reads each row's PPL-Aeroplane tick straight from the table cell.

```bash
python3 -m venv .venv && ./.venv/bin/pip install pdfplumber
./.venv/bin/python tools/build_syllabus.py
```

The output was cross-checked against an independent pass that classified tick marks by
their x-coordinate on the page; both methods agreed exactly on 484 ticked objectives out
of 551 total.

## Disclaimer

A personal revision aid, not a CAA publication and not instruction. Confirm anything that
matters with your ATO/DTO, Ground Examiner or the CAA before acting on it.
