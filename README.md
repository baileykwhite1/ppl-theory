# UK PPL(A) Theory

A study app for the nine UK CAA PPL(A) theoretical knowledge exams: articles, mock tests,
Anki-style flashcards, the full CAA syllabus as checklists, and a planner for the deadlines
that actually bind you.

Static site — no build step, no dependencies, no backend. Designed mobile-first; add it to your
home screen and it runs standalone.

**It works offline.** A service worker pre-caches the whole app — articles, diagrams, questions,
flashcards, 2,766 aerodromes and the coastlines — so it opens with no signal, which is the point
at an airfield. Only the live weather needs a connection, and it fails quietly without one.

## How saving works — read this first

**GitHub does not store your progress.** GitHub Pages only serves the files; it never receives
anything back. Progress is saved in `localStorage` in **the browser on the device you are using**.

- **Multiple people, one device** — supported. The app has **profiles**: tap the avatar on Home
  to switch, rename or add someone. Each profile keeps its own articles, objectives, exam record,
  quiz history and flashcard schedule.
- **One person, multiple devices** — *not* synced. Your phone and your laptop keep two
  independent sets of progress. Export writes one file with everything (progress, exam record,
  flashcard scheduling, flight log and settings); import restores it elsewhere. That is also how
  a second person uses the app: their own device, their own file.
- Clearing site data, or using a private window, loses that browser's progress. Back up
  occasionally if it matters.

### Export and import

Three actions, all under **Sources & settings** (import is also on the Profiles screen):

| Action | What it does |
| --- | --- |
| **Export \<name\>** | Downloads just the **active** profile as `ppl-<name>.json`, stamped with the profile name and date |
| **Back up all N profiles** | Downloads every profile on the device in one `ppl-backup-<date>.json` |
| **Import a file** | Reads either kind, shows you what's inside, and asks what to do with it |

Importing never overwrites anything silently. A single-profile file gives you two clearly
labelled choices — **add as a new profile** (nothing existing is touched; names are
auto-numbered on a clash) or **overwrite the active profile** (destructive, and confirmed
twice). A whole-device backup offers only a full restore, which replaces every profile, and
says so plainly before you commit.

On an iPhone, Export saves into Files and Import opens the Files picker, so AirDrop or
iCloud Drive is the easy way to move a profile between devices.

Real cross-device sync would need a backend — this repo deliberately has none.

**Live site:** enable GitHub Pages on this repo (Settings → Pages → Deploy from branch →
`main` / root).

## What's in it

| Tab | Contents |
| --- | --- |
| **Home** | Course progress, the next thing to read, cards due today, a quick quiz, and the exam blocks at a glance |
| **Learn** | 9 subjects → **37 articles** with **23 hand-drawn diagrams**, plus all **551 CAA learning objectives** as tickable checklists, and a per-subject exam record |
| **Quiz** | **385 questions.** All-subject mock (45, balanced 5 per subject), mixed practice, quick ten, or a 20-question mock in any single subject. Exam mode withholds feedback; practice mode explains as you go. Scored against the real 75% pass mark, with per-subject breakdown and mistake review |
| **Cards** | **327 flashcards** on an SM-2 style spaced-repetition schedule — Again / Hard / Good / Easy, 20 new cards a day, filterable by subject |
| **Exams** | The 18-month and 24-month clocks, a risk watch that reacts to your attempts and dates, and five selectable exam orderings (or your own) |
| **Profile** | A route map of everywhere you have flown, hours, landings, distance, time per registration and aircraft type, airfields visited, and your study record |
| Flight log | Log flights with route, hours, landings and aircraft; tracks progress against the FCL.210.A experience requirements, including the qualifying cross-country |
| Reference | Every rule quoted with its citation; what's decided but not yet in force; what the CAA doesn't publish; the Pooleys volume for each exam; and every source with a URL |

## Setup, airfield and weather

First launch asks three things: your name, where you are in your training (which picks a
sensible starting exam order), and your home airfield. Adding a second person runs the same
flow. **2,766 aerodromes** — every UK `EG**` field and every US field with a four-letter ICAO code —
are bundled from [OurAirports](https://ourairports.com/) (public domain) and searchable offline
by code, name or town. The learning content remains UK CAA throughout; only the airfield data,
weather and flight log are international.

The Home screen carries a thin METAR-style strip — `EGLM 22010G20KT 9999 OVC016 17/13 Q1015` —
with a flight-category chip, which doubles as decoding practice. Two honest caveats are built
into the UI:

- A **CheckWX key ships with the app**, so real METARs work out of the box. It is a free tier
  with a daily cap shared by everyone using this build. Anyone can read it in a public repo — if
  the quota gets burned, put your own key in Sources & settings and it is used instead.
- **Where your field issues no METAR** — as EGLM does not — the app asks CheckWX for the nearest
  station that does, shows that instead, and says which one and how far away (EGLM falls back to
  EGLL, 12 NM). Failing that it drops to an **Open-Meteo forecast model** estimate, tagged
  `MODEL`, with the cloud base estimated from the temperature/dew-point spread.
- aviationweather.gov and AVWX both refuse browser requests from another origin, so a static site
  cannot use them. CheckWX sends `access-control-allow-origin: *` on a successful response, which
  is why it is the one that works.

Either way the app links out to the real sources: the club weather station (White Waltham's is
built in), metar-taf.com, and the Met Office GA page. Nothing here is for flight planning.

## The correction this repo exists to make

Almost every third-party study site says you must pass all nine PPL exams **within six
sittings**. For a PPL that is wrong, and it changes how you should plan.

`FCL.025(b)(3)` — the six-sittings rule — is written to apply to applicants for the
**ATPL theoretical knowledge examination, CPL or IR**. `FCL.025(b)(4)` is the LAPL/PPL
equivalent and refers only to **four attempts per paper** and the **18-month period**; it
contains no sittings limit. The UK CAA separately removed the sittings cap from its GA
examination procedures in Standards Document 11 version 14 (December 2020), recorded in that
document's amendment table as *"Removal of the number of sittings within validity
requirements."*

So there is no need to hold sittings in reserve for retakes. The constraints that do bind a
PPL candidate are:

1. **75%** to pass, no negative marking — `FCL.025(b)(1)`
2. **All nine passed within 18 months** of the end of the calendar month of your first
   attempt — `FCL.025(b)(2)`
3. **Four attempts per paper.** A fourth failure puts you in stand-down and voids
   **every pass in every subject** — `FCL.025(b)(4)`, Standards Doc 11 §11.1.31–36
4. **One attempt at a given paper per sitting** (a sitting being ≤10 consecutive days) —
   `GM1 FCL.025`
5. The completed set is valid **24 months** for the licence application —
   `FCL.025(c)(1)(i)`

## Two other things the textbooks get wrong

Both changed by **SI 2025/878**, in force October 2025, and confirmed in the July 2026
rulebook:

- **PPL(A) minimum flight time is 40 hours**, not 45 — reducible to 35 on a course at an ATO
  approved for the purpose (`FCL.210.A`).
- **SEP revalidation by experience** is 12 hours in the class across the two-year validity, of
  which **6 must fall in the final 12 months**, plus 6 hours PIC, 12 take-offs, 12 landings and
  1 hour with an FI or CRI (`FCL.740.A(b)(1)(ii)`). Older sources say all 12 hours must be in
  the final year.

## Primary sources

All regulatory content was read from primary documents on 10 September 2026, not from memory
and not from study sites:

- **UK Regulation (EU) No. 1178/2011 Annex I Part-FCL**, consolidated rulebook, page footers
  dated **July 2026** — <https://regulatorylibrary.caa.co.uk/1178-2011-PDF/PDF.pdf>
  (FCL.025 pp. 80–82; FCL.215 p. 144; FCL.205.A / FCL.210.A p. 218; FCL.740.A pp. 963–964;
  MED.A.045 p. 1581)
- **UK Regulation (EU) No. 923/2012 — Rules of the Air (SERA)**, page footers dated
  **August 2024** — <https://regulatorylibrary.caa.co.uk/923-2012-PDF/PDF.pdf>
  (SERA.5001 Table S5-1; SERA.5005; SERA.13001; Appendices III and IV)
- **CAA Standards Document 11, Revision 15** (May 2022) —
  <https://www.caa.co.uk/publication/download/12697>
- **CAA PPL(A) guidance page** —
  <https://www.caa.co.uk/general-aviation/pilot-licences/aeroplanes/private-pilot-licence-for-aeroplanes/>
- **CAA GA Theoretical Knowledge e-Exams** (CAP2090 index) —
  <https://www.caa.co.uk/general-aviation/pilot-training-organisations/ga-theoretical-knowledge-e-exams/>
- **CAP3212** — GA Pilot Licensing Review "Wave 2" Consultation Response Document,
  January 2026 — <https://www.caa.co.uk/publication/download/26763>
- **Pooleys Air Pilot's Manual** product pages — <https://www.pooleys.com/>

### What is CAA and what is not

The **551 learning objectives** are parsed verbatim from the CAA's own `CAP2090` PDFs, and the
**Reference** tab quotes regulation directly with citations. The **articles, quiz questions and
flashcards were written for this app** — they are a study aid, not an official question bank,
though every regulatory figure in them was checked against the primary sources above.

### Known limitations

The CAA does **not** publish per-subject question counts or time limits. Part-FCL gives only
the ~120-question total for the whole set (`AMC1 FCL.215;FCL.235`), and Standards Document 11
instructs the Ground Examiner to confirm "the time limits and number of questions" verbally
before each paper. Figures widely quoted online are not CAA-published and are deliberately
omitted — ask your Ground Examiner.

The `CAP2090` learning objectives are all version 1, January 2020 (the Principles of Flight
document carries no version line). They are the current published objectives but are six years
old; where one conflicts with current law, the law wins.

## Regenerating the syllabus data

`data/syllabus.js` is generated from the nine CAA PDFs by [`tools/build_syllabus.py`](tools/build_syllabus.py),
which downloads each `CAP2090` document, extracts the syllabus tables with `pdfplumber`, and
reads each row's PPL-Aeroplane tick straight from the table cell.

```bash
python3 -m venv .venv && ./.venv/bin/pip install pdfplumber && ./.venv/bin/python tools/build_syllabus.py
```

It reproduces 551 objectives, 484 of them ticked for PPL(A). Those counts were cross-checked
against an independent pass that classified tick marks by their x-coordinate on the page; both
methods agreed exactly.

## Layout

```
index.html            shell, tab bar and all CSS
app.js                profiles, router, views, quiz engine, SM-2 scheduler
data/syllabus.js      551 CAA learning objectives (generated)
data/diagrams.js      23 inline SVG diagrams, theme-aware
data/airfields.js     2,766 UK and US aerodromes from OurAirports (generated)
data/coast.js         simplified coastlines for the flight-log map (generated)
sw.js                 service worker: offline pre-cache of the whole app
data/content/0NN.js   articles, quiz bank and flashcards, one file per subject
tools/                syllabus generator
```

Content is easy to extend: each `data/content/*.js` file is a plain object with `articles`,
`quiz` and `cards` arrays. Quiz entries are `{q, a:[4 options], c: correctIndex, why, ref}`;
cards are `{f, b, ref}`.

## Disclaimer

A personal revision aid, not a CAA publication and not instruction. Confirm anything that
matters with your ATO/DTO, Ground Examiner or the CAA before acting on it.
