/* 010 Air Law — articles, quiz bank, flashcards.
   Regulatory numbers verified against UK Reg (EU) 923/2012 (SERA) rulebook, footers
   dated August 2024, and UK Reg (EU) 1178/2011 Part-FCL / Part-MED, footers dated
   July 2026. Both retrieved from the CAA Aviation Regulation Library, 10 Sep 2026. */
window.SC = window.SC || {};
window.SC['010'] = {
articles: [
{
  id: '010-airspace', title: 'Airspace classes A to G', mins: 7, tags: ['010.05', '010.08'],
  body: `
<p>Seven letters, one question: <em>what does this airspace ask of me?</em> For a VFR pilot
the answer comes down to three things — do I need a clearance, will anyone separate me from
other traffic, and is there a speed limit.</p>

<figure data-d="airspace"></figure>
<h3>The table you actually need</h3>
<table>
<thead><tr><th>Class</th><th>VFR allowed?</th><th>Clearance needed?</th><th>Separation from other VFR</th><th>Service</th></tr></thead>
<tbody>
<tr><td><b>A</b></td><td>No</td><td>—</td><td>—</td><td>IFR only</td></tr>
<tr><td><b>B</b></td><td>Yes</td><td>Yes</td><td>Yes — from everything</td><td>ATC service</td></tr>
<tr><td><b>C</b></td><td>Yes</td><td>Yes</td><td>No (separated from IFR only)</td><td>ATC service + VFR traffic info</td></tr>
<tr><td><b>D</b></td><td>Yes</td><td><b>Yes</b></td><td>No</td><td>ATC service + traffic info on IFR and VFR</td></tr>
<tr><td><b>E</b></td><td>Yes</td><td><b>No</b></td><td>No</td><td>Traffic info as far as practical</td></tr>
<tr><td><b>F</b></td><td>Yes</td><td>No</td><td>No</td><td>FIS if requested</td></tr>
<tr><td><b>G</b></td><td>Yes</td><td>No</td><td>No</td><td>FIS if requested</td></tr>
</tbody></table>

<p>The UK does not use Class B or Class F in practice, so your working world is
<b>Class A</b> (airways and the busiest TMAs — you stay out unless you have an IR or a
Special VFR clearance into a control zone), <b>Class D</b> (most regional control zones —
you need a clearance and you must read it back and comply), <b>Class E</b> (a clearance is
<em>not</em> required for VFR, which surprises people), and <b>Class G</b> (everything else —
the see-and-avoid world where nobody is separating you from anyone).</p>

<h3>The speed limit that applies almost everywhere</h3>
<p><b>250 kt IAS below 10,000 ft AMSL</b> applies in classes C, D, E, F and G. Classes A and B
have no speed limitation in the table. Note the footnote: where the transition altitude is
below 10,000 ft, read FL 100 instead of 10,000 ft. A training aeroplane will never trouble
this, but it is a standard exam question.</p>

<h3>Radio, and the zones that force you to use it</h3>
<p>In Class G, VFR, you are not obliged to talk to anyone. Two exceptions bite:</p>
<ul>
<li><b>RMZ</b> — Radio Mandatory Zone. You must maintain a continuous listening watch and
establish two-way communication on the notified frequency before entering.</li>
<li><b>TMZ</b> — Transponder Mandatory Zone. You need a serviceable transponder with the
notified mode and code, or a specific clearance to enter without one.</li>
</ul>
<p>An <b>ATZ</b> (Aerodrome Traffic Zone) is a separate idea again — it does not change the
airspace class, but you must obtain permission or establish contact as notified before
entering.</p>

<h3>Three services you can ask for in Class G</h3>
<p>Under the UK Flight Information Services scheme: <b>Basic Service</b> (generic
information, no traffic monitoring — the controller is not watching you), <b>Traffic
Service</b> (surveillance-based traffic information, but no deconfliction advice), and
<b>Deconfliction Service</b> (traffic information plus headings/levels to achieve
deconfliction — IFR only in practice). A <b>Procedural Service</b> exists where there is no
surveillance. Whatever the service, in Class G <b>you</b> remain responsible for collision
avoidance.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Class E VFR needs <b>no</b> clearance and <b>no</b> radio — but Class D VFR needs both.</li>
<li>Class C separates VFR from IFR, but <b>not</b> VFR from VFR.</li>
<li>A Basic Service does not mean anyone is looking out for you.</li>
</ul></div>`
},
{
  id: '010-vmc', title: 'VMC minima and Special VFR', mins: 7, tags: ['010.05'],
  body: `
<p>VFR is a promise you make about visibility and distance from cloud. Break it and you are
either illegal or in cloud, and usually both.</p>

<figure data-d="vmc"></figure>
<h3>Table S5-1, the whole thing</h3>
<table>
<thead><tr><th>Where</th><th>Class</th><th>Flight visibility</th><th>Distance from cloud</th></tr></thead>
<tbody>
<tr><td>At/above 10,000 ft AMSL</td><td>All</td><td><b>8 km</b></td><td>1500 m horizontally, 1000 ft vertically</td></tr>
<tr><td>Below 10,000 ft, above 3000 ft AMSL <em>or</em> 1000 ft above terrain, whichever is higher</td><td>All</td><td><b>5 km</b></td><td>1500 m horizontally, 1000 ft vertically</td></tr>
<tr><td>At/below 3000 ft AMSL <em>or</em> 1000 ft above terrain, whichever is higher</td><td>A, B, C, D, E</td><td><b>5 km</b></td><td>1500 m horizontally, 1000 ft vertically</td></tr>
<tr><td>At/below 3000 ft AMSL <em>or</em> 1000 ft above terrain, whichever is higher</td><td><b>F, G</b></td><td><b>5 km</b></td><td><b>Clear of cloud and with the surface in sight</b></td></tr>
</tbody></table>

<p>Read the middle column of that table twice. The bottom two rows both say 5 km — the
difference is the cloud requirement. In Class G low down you only have to stay <em>clear of
cloud with the surface in sight</em>; in Class D at the same height you owe the full
1500 m / 1000 ft cloud separation.</p>

<h3>The 1500 m concession</h3>
<p>In Class F or G you may reduce flight visibility to <b>1500 m</b> if all of the following
hold: by <b>day</b>; at or below 3000 ft AMSL or 1000 ft above terrain, whichever is higher;
and at an <b>IAS of 140 kt or less</b>, so you have a fair chance of seeing and avoiding
something. A similar day / 3000 ft / 140 kt alternative exists in Class D, but there the
visibility stays at 5 km and what you gain is clear-of-cloud-with-surface-in-sight instead of
1500 m / 1000 ft.</p>

<h3>Getting in and out of a control zone</h3>
<p>Except with a Special VFR clearance, a VFR flight must not take off or land at an
aerodrome in a control zone, nor enter its ATZ or traffic circuit, when the <b>reported</b>
conditions are below:</p>
<ul><li>ceiling less than <b>1500 ft</b>, or</li>
<li>ground visibility less than <b>5 km</b>.</li></ul>
<p>Note the shift from <em>flight</em> visibility (what you can see from the cockpit, your
judgement) to <em>ground</em> visibility and <em>ceiling</em> (what the aerodrome reports,
not your judgement).</p>

<h3>Special VFR</h3>
<p>SVFR is a clearance, issued by ATC, to fly VFR inside a control zone when you cannot meet
the ordinary VMC minima — or to enter Class A, where VFR is otherwise forbidden. You are then
separated from IFR traffic by ATC, but you must remain clear of cloud with the surface in
sight, stay within the terms of the clearance, and it is still your job to avoid obstacles
and comply with the low-flying rules.</p>

<h3>Ceilings you cannot exceed</h3>
<p>VFR is not permitted above <b>FL 195</b> (with narrow authorised exceptions). Nowhere near
a PPL, but it is asked.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>1000 ft above terrain, <em>whichever is higher</em> — over 2500 ft hills the 3000 ft band
boundary moves up with the ground.</li>
<li>The 1500 m concession needs day <b>and</b> 3000 ft <b>and</b> 140 kt. All three.</li>
<li>8 km starts <b>at</b> 10,000 ft, not above it.</li>
</ul></div>`
},
{
  id: '010-altimetry', title: 'QFE, QNH and the Standard Pressure Setting', mins: 6, tags: ['010.06'],
  body: `
<p>An altimeter is a barometer with an optimistic dial. What it reads depends entirely on the
number in the subscale, so the discipline is knowing which number belongs in there and when.</p>

<figure data-d="altimetry"></figure>
<h3>Three settings, three meanings</h3>
<ul>
<li><b>QFE</b> — set it and the altimeter reads <b>height above the aerodrome datum</b>. Reads
zero on the runway. Used in the circuit at many UK schools.</li>
<li><b>QNH</b> — set it and the altimeter reads <b>altitude above mean sea level</b>. Reads
aerodrome elevation on the ground. Used for terrain and obstacle clearance, and for VFR
cruising below the transition altitude.</li>
<li><b>1013 hPa</b> (the Standard Pressure Setting) — set it and the altimeter reads a
<b>flight level</b>. Everybody above the transition level is on it, so everybody is measuring
from the same imaginary datum and vertical separation works even when nobody knows the real
pressure.</li>
</ul>

<h3>Altitude, height, flight level, elevation</h3>
<p><b>Height</b> is above a specified datum, usually the aerodrome. <b>Altitude</b> is above
mean sea level. <b>Flight level</b> is a surface of constant pressure referenced to 1013 hPa.
<b>Elevation</b> is the height of a fixed point (like an aerodrome) above mean sea level.
QNH minus QFE, in feet, is roughly the aerodrome elevation.</p>

<h3>Transition altitude and transition level</h3>
<p>Climbing, you fly <b>altitudes on QNH</b> up to the <b>transition altitude</b>, then change
to 1013 and fly <b>flight levels</b>. Descending, you fly flight levels down to the
<b>transition level</b>, then change to QNH. The space between them is the <b>transition
layer</b>. The transition altitude is published — it varies by aerodrome and area across the
UK, so read it off the chart or the AIP rather than assuming a number. (A harmonised UK
transition altitude of 18,000 ft has been consulted on; check the AIP for the value in force
where you are flying.)</p>

<h3>The rule that keeps you off the hill</h3>
<p><b>1 hPa is about 30 ft</b> near sea level. Fly from high pressure to low pressure without
resetting and your altimeter over-reads — you are lower than it says. <em>High to low, look
out below.</em> The same applies to temperature: flying into colder air, the altimeter
over-reads. Cold and low pressure both put you closer to the ground than the instrument
admits.</p>

<h3>Cruising levels above 3000 ft</h3>
<p>Above <b>3000 ft from the ground or water</b> (or a higher notified datum — note that is
height above the surface, <b>not</b> AMSL), in level cruise, SERA Appendix 3 sets a cruising
level appropriate to your <b>magnetic track</b>, from the semicircular table:</p>
<ul>
<li>Track <b>000&deg; to 179&deg;</b>: odd thousands <b>+ 500 ft</b> for VFR — FL 35, 55, 75, 95…</li>
<li>Track <b>180&deg; to 359&deg;</b>: even thousands <b>+ 500 ft</b> for VFR — FL 45, 65, 85, 105…</li>
</ul>
<p>IFR takes the plain odd and even thousands; VFR takes the plus-500 ft levels in between.
For <b>IFR outside controlled airspace</b> the table is mandatory; inside controlled airspace
you fly the level in your clearance.</p>
<p><b>A UK difference worth knowing.</b> SERA applies the table to VFR "except … as specified by
the competent authority" — and the UK has so specified. UK AIP ENR 1.2 records that it is
<b>not mandatory</b> in the UK for VFR flights in level cruise above 3000 ft from the ground or
water to adopt any particular cruising level system; such flights are <em>advised</em> to use
the table. So for VFR in the UK it is <b>recommended, not required</b> — but fly it anyway, it
is what everyone else is doing.</p>
<p>The UK abolished the old quadrantal rule in 2014 — the semicircular table above is what
applies now.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>It is <b>magnetic</b> track, not heading and not true.</li>
<li>The datum is 3000 ft <b>from the ground or water</b>, not 3000 ft AMSL. Over 2000 ft
terrain those are 1000 ft apart.</li>
<li>For <b>VFR in the UK</b> the table is <b>advisory</b>, not mandatory — a notified UK
difference. It is mandatory for <b>IFR outside controlled airspace</b>.</li>
<li>Even as advice it applies only in <b>level cruise</b>. Climbing or descending, it does
not.</li>
<li>QFE reads zero on the runway; QNH reads elevation. If a question says the altimeter reads
0 on the ground, the subscale has QFE in it.</li>
</ul></div>`
},
{
  id: '010-lowflying', title: 'Low flying, and where you may not go', mins: 5, tags: ['010.05', '010.10'],
  body: `
<p>Two numbers, and a great deal of misunderstanding about which applies where.</p>

<h3>The 500 ft rule</h3>
<p>Except when taking off or landing, or with permission, a VFR flight shall not be flown at a
height less than <b>500 ft above the ground or water</b>, or 500 ft above the highest obstacle
within a radius of <b>500 ft</b> of the aircraft. This is the general low-flying rule and it
applies over open country.</p>

<h3>The 1000 ft rule</h3>
<p>Over the <b>congested areas</b> of cities, towns or settlements, or over an <b>open-air
assembly of persons</b>, you shall not fly at a height less than <b>1000 ft above the highest
obstacle within a radius of 600 m</b> of the aircraft. Note the differences from the 500 ft
rule: a bigger clearance, a bigger radius, and it is measured from the highest
<em>obstacle</em>, not the ground.</p>

<h3>Night, and high ground</h3>
<p>A VFR flight at night shall be flown at least:</p>
<ul>
<li><b>2000 ft</b> above the highest obstacle within <b>8 km</b> over high terrain or in
mountainous areas, or</li>
<li><b>1000 ft</b> above the highest obstacle within <b>8 km</b> elsewhere,</li>
</ul>
<p>except as necessary for take-off and landing. Compare that 8 km radius with the 500 ft and
600 m radii by day — night buys you a much larger circle of terrain to clear.</p>

<h3>Working out a minimum safe altitude</h3>
<p>The exam wants the method, not a memorised answer. Take the highest spot elevation or
obstacle within your chosen corridor either side of track, add the obstacle height if it is
not already an amsl figure, add your clearance (1000 ft is the usual planning figure,
2000 ft over high ground), then round <em>up</em> to the next 100 ft. Do it on QNH, because
QNH is the setting that relates to terrain.</p>

<h3>Airspace you must simply avoid</h3>
<p><b>Prohibited</b> — flight is not permitted. <b>Restricted</b> — flight is permitted only
in accordance with specified conditions. <b>Danger area</b> — an area in which activities
dangerous to flight may take place at notified times; not necessarily illegal to enter, but
foolish without checking, and some are permanently active. Check NOTAMs, because temporary
restrictions appear for air displays, royal flights and major events.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>500 ft rule: radius <b>500 ft</b>. Congested area rule: radius <b>600 m</b>. Night:
radius <b>8 km</b>.</li>
<li>A danger area is not automatically prohibited — read the question carefully.</li>
<li>The congested-area clearance is above the highest <b>obstacle</b>, not above the ground.</li>
</ul></div>`
},
{
  id: '010-licensing', title: 'Licences, medicals and staying legal', mins: 7, tags: ['010.04', '010.14'],
  body: `
<p>This is the part of Air Law that keeps mattering after the exam, and several of the numbers
changed in October 2025 — so be careful with older textbooks and older instructors.</p>

<h3>What a PPL(A) lets you do</h3>
<p>Act <b>without remuneration</b> as PIC or co-pilot of aeroplanes or TMGs in
<b>non-commercial</b> operations, and exercise all the privileges of an LAPL(A) holder. You may
share the direct operating costs with your passengers, but you cannot be paid to fly. The one
exception: a PPL holder with instructor or examiner privileges may be paid for instructing and
for conducting tests on LAPL(A), PPL(A) and NPPL(A).</p>

<h3>What it takes to get one</h3>
<p>Minimum age <b>17</b> for licence issue; <b>16</b> for first solo. The experience
requirement is at least <b>40 hours</b> of flight time as a pilot (of which up to 5 may be in
an FSTD), including at least 10 hours of supervised solo, of which at least 5 hours is solo
cross-country including one cross-country flight of at least <b>270 km (150 NM)</b> with
full-stop landings at <b>two</b> aerodromes different from the departure aerodrome. That 40
hours may be reduced to <b>35</b> on a course at an ATO approved for the purpose.</p>
<p>The old figure was 45 hours. It changed to 40 with SI 2025/878. If a practice question
says 45, it is out of date.</p>

<h3>Keeping the SEP rating alive — also changed</h3>
<p>An SEP (or TMG) class rating is valid for <b>24 months</b>. To revalidate, either pass a
proficiency check with an examiner in the 3 months before expiry, <em>or</em> within the
validity period complete <b>12 hours</b> of flight time in the class, including:</p>
<ul>
<li><b>6 hours in the 12 months preceding expiry</b>,</li>
<li><b>6 hours as PIC</b>,</li>
<li><b>12 take-offs and 12 landings</b>, and</li>
<li>at least <b>1 hour</b> of refresher training with an FI or CRI.</li>
</ul>
<p>Read that first bullet carefully. The 12 hours may be spread across the whole two years,
but 6 of them must fall in the final twelve months. Older sources say all 12 hours must be in
the 12 months before expiry; that is no longer the rule.</p>

<h3>Recency for carrying passengers</h3>
<p>You may not carry passengers as PIC unless you have made at least <b>3 take-offs,
approaches and landings</b> in the preceding <b>90 days</b> in an aircraft of the same type or
class. At night, add at least <b>1</b> take-off, approach and landing at night in the preceding
90 days, unless you hold an IR. Note this is a <em>passenger-carrying</em> restriction — you
may fly solo to regain it.</p>

<h3>Class 2 medical validity</h3>
<table>
<thead><tr><th>Age at issue</th><th>Valid for</th><th>Hard stop</th></tr></thead>
<tbody>
<tr><td>Under 40</td><td>60 months</td><td>Ceases when you reach 42</td></tr>
<tr><td>40 to 50</td><td>24 months</td><td>Ceases when you reach 51</td></tr>
<tr><td>Over 50</td><td>12 months</td><td>—</td></tr>
</tbody></table>
<p>You must hold the appropriate medical certificate before you are permitted to fly solo.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li><b>40</b> hours, not 45. <b>35</b> if at an approved ATO.</li>
<li>SEP: 12 hours across the 2 years, with 6 in the final year.</li>
<li>The 90-day rule restricts carrying <b>passengers</b>, not flying.</li>
<li>A Class 2 issued at 39 expires when you turn 42, not five years later.</li>
</ul></div>`
},
{
  id: '010-docs', title: 'Documents, NOTAMs and emergencies', mins: 5, tags: ['010.09', '010.11', '010.13'],
  body: `
<h3>The information chain</h3>
<ul>
<li><b>AIP</b> — Aeronautical Information Publication. The permanent reference: aerodrome
plates, airspace, procedures. Amended on a schedule.</li>
<li><b>NOTAM</b> — Notice to Airmen. Short-notice, operationally significant information:
runway closures, unserviceable navaids, temporary restrictions, obstacles, air displays.
Check before every flight.</li>
<li><b>AIC</b> — Aeronautical Information Circular. Advisory, explanatory or administrative
material, colour-coded by subject. Not usually time-critical.</li>
<li><b>AIRAC</b> — the fixed cycle on which significant changes take effect, every
<b>28 days</b>, so that everyone's charts and databases change on the same date.</li>
</ul>

<h3>Distress versus urgency</h3>
<p>The distinction is the exam question and, one day, the radio call.</p>
<ul>
<li><b>Distress — MAYDAY</b> (said three times). Grave and imminent danger, requiring
<b>immediate assistance</b>. Engine failure, fire, structural failure.</li>
<li><b>Urgency — PAN PAN</b> (said three times). Concerns the safety of the aircraft or a
person on board, but does <b>not</b> require immediate assistance. Lost, unsure of position,
low on fuel but not critical, a sick passenger.</li>
</ul>
<p>The international aeronautical emergency frequency is <b>121.500 MHz</b>. If you are
already talking to someone, make the call on the frequency in use — do not waste time
changing.</p>

<h3>Transponder codes worth knowing cold</h3>
<table>
<thead><tr><th>Code</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td><b>7700</b></td><td>Emergency</td></tr>
<tr><td><b>7600</b></td><td>Radio communication failure</td></tr>
<tr><td><b>7500</b></td><td>Unlawful interference (hijack)</td></tr>
<tr><td><b>7000</b></td><td>Conspicuity — the default when not receiving an ATS</td></tr>
<tr><td><b>2000</b></td><td>Set when no code has been assigned by ATS</td></tr>
</tbody></table>
<p>The regulation is explicit that if circumstances warrant, 7700 may be used in place of
7500 — and that if you have selected 7500 and ATC asks you to confirm it, silence is taken as
confirmation.</p>

<h3>Interception</h3>
<p>If intercepted: follow the interceptor's visual instructions, notify the ATS unit, try to
establish contact on 121.500, and <b>squawk 7700</b> unless told otherwise. Comply first,
argue later.</p>

<h3>Accidents and incidents</h3>
<p>ICAO Annex 13 governs accident and incident investigation. Its sole objective is the
<b>prevention of accidents</b> — not the apportioning of blame or liability. In the UK the AAIB
investigates. That single-sentence purpose is one of the most reliably examined facts in the
whole syllabus.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>PAN PAN is urgency — safety concerned but <b>no immediate assistance</b> needed.</li>
<li>7000 is conspicuity; 2000 is the no-code-assigned code. Do not swap them.</li>
<li>Annex 13's purpose is prevention, not blame.</li>
</ul></div>`
}
],

quiz: [
{ q: 'In Class D airspace, a VFR flight requires:', a: ['An ATC clearance and two-way radio communication', 'Two-way radio only', 'Neither a clearance nor radio', 'A clearance, but radio only if requested'], c: 0, why: 'Appendix IV to SERA requires VFR flights in Class D to hold an ATC clearance and maintain continuous two-way air-ground voice communication.', ref: 'SERA Appendix IV' },
{ q: 'A VFR flight in Class E airspace:', a: ['Needs an ATC clearance', 'Does not need an ATC clearance', 'Is not permitted', 'Needs a clearance only above 3000 ft'], c: 1, why: 'Class E VFR is not subject to an ATC clearance and has no radio requirement, though traffic information is given as far as practical.', ref: 'SERA Appendix IV' },
{ q: 'In Class C airspace, VFR flights are separated from:', a: ['All other traffic', 'IFR traffic only', 'Nothing', 'Other VFR traffic only'], c: 1, why: 'Class C provides VFR separation from IFR. VFR-to-VFR gets traffic information, not separation.', ref: 'SERA Appendix IV' },
{ q: 'The speed limit for a VFR flight below 10,000 ft AMSL in Class D is:', a: ['200 kt IAS', '250 kt IAS', '140 kt IAS', 'No limit'], c: 1, why: '250 kt IAS below 10,000 ft AMSL applies in classes C, D, E, F and G.', ref: 'SERA Appendix IV' },
{ q: 'Flying at 2000 ft AMSL over flat terrain in Class G by day, the VMC minima are:', a: ['5 km visibility, clear of cloud, surface in sight', '5 km visibility, 1500 m horizontally and 1000 ft vertically from cloud', '8 km visibility, 1500 m from cloud', '1500 m visibility, clear of cloud'], c: 0, why: 'At or below 3000 ft AMSL in Class F or G, Table S5-1 requires 5 km flight visibility, clear of cloud and with the surface in sight.', ref: 'SERA.5001 Table S5-1' },
{ q: 'At and above 10,000 ft AMSL the required flight visibility for VFR is:', a: ['5 km', '8 km', '10 km', '1500 m'], c: 1, why: '8 km, with 1500 m horizontal and 1000 ft vertical separation from cloud.', ref: 'SERA.5001 Table S5-1' },
{ q: 'The 1500 m reduced-visibility concession in Class G requires all of the following except:', a: ['Flight by day', 'At or below 3000 ft AMSL or 1000 ft above terrain, whichever is higher', 'IAS of 140 kt or less', 'A radio clearance from ATC'], c: 3, why: 'The three conditions are day, the height band, and 140 kt IAS or less. No clearance is involved.', ref: 'SERA.5001 Table S5-1 note 4' },
{ q: 'Below 10,000 ft but above 3000 ft AMSL, the VFR distance-from-cloud requirement is:', a: ['Clear of cloud, surface in sight', '1500 m horizontally, 1000 ft vertically', '1000 m horizontally, 1500 ft vertically', '600 m horizontally, 500 ft vertically'], c: 1, why: '1500 m horizontally and 1000 ft vertically, with 5 km flight visibility.', ref: 'SERA.5001 Table S5-1' },
{ q: 'Without a Special VFR clearance, a VFR flight must not take off or land at an aerodrome within a control zone when the reported ceiling is less than:', a: ['1000 ft', '1500 ft', '2000 ft', '3000 ft'], c: 1, why: 'Ceiling less than 1500 ft, or ground visibility less than 5 km, requires a Special VFR clearance.', ref: 'SERA.5005(b)' },
{ q: 'Special VFR is best described as:', a: ['A VFR flight in Class G below 3000 ft', 'An ATC clearance to fly VFR in a control zone when VMC minima cannot be met', 'A flight plan filed for a night VFR flight', 'An IFR flight cleared visually'], c: 1, why: 'SVFR is an ATC clearance allowing VFR flight in a control zone, including Class A, when the ordinary VMC minima cannot be met. The pilot remains clear of cloud with the surface in sight.', ref: 'SERA.5005(a)-(b)' },
{ q: 'With QFE set on the subscale, the altimeter indicates:', a: ['Altitude above mean sea level', 'Height above the aerodrome datum', 'A flight level', 'Elevation'], c: 1, why: 'QFE gives height above the aerodrome datum and reads zero on the runway.', ref: 'Altimetry definitions' },
{ q: '1 hPa change in pressure corresponds to approximately how many feet near sea level?', a: ['10 ft', '30 ft', '100 ft', '300 ft'], c: 1, why: 'About 30 ft per hPa near sea level, which is why the high-to-low error matters.', ref: 'Altimetry' },
{ q: 'Flying from an area of high pressure into an area of low pressure without resetting the altimeter, the altimeter will:', a: ['Over-read, so you are lower than indicated', 'Under-read, so you are higher than indicated', 'Read correctly', 'Read zero'], c: 0, why: 'High to low, look out below. The altimeter over-reads and true altitude is lower than indicated.', ref: 'Altimetry' },
{ q: 'A VFR flight in level cruise above 3000 ft AMSL on a magnetic track of 090 degrees should use:', a: ['FL 40, 60, 80', 'FL 35, 55, 75', 'FL 45, 65, 85', 'Any level'], c: 1, why: 'Tracks 000 to 179 take odd thousands plus 500 ft for VFR: FL 35, 55, 75 and so on.', ref: 'SERA Appendix 3' },
{ q: 'The cruising-levels table is applied according to:', a: 'True track|Magnetic track|Magnetic heading|True heading'.split('|'), c: 1, why: 'The table is based on magnetic track.', ref: 'SERA Appendix 3, note 1' },
{ q: 'Over the congested area of a town, the minimum height is 1000 ft above the highest obstacle within a radius of:', a: ['150 m', '500 ft', '600 m', '8 km'], c: 2, why: '1000 ft above the highest obstacle within 600 m of the aircraft.', ref: 'SERA.5005(f)(1)' },
{ q: 'Away from congested areas, the minimum height for a VFR flight is:', a: ['500 ft above the ground or water', '1000 ft above the ground', '500 m above the ground', '1000 ft above the highest obstacle within 600 m'], c: 0, why: '500 ft above ground or water, or 500 ft above the highest obstacle within a radius of 500 ft.', ref: 'SERA.5005(f)(2)' },
{ q: 'A VFR flight at night, not over high terrain, must be at least:', a: ['500 ft above the highest obstacle within 500 ft', '1000 ft above the highest obstacle within 8 km', '2000 ft above the highest obstacle within 8 km', '1000 ft above the highest obstacle within 600 m'], c: 1, why: '1000 ft above the highest obstacle within 8 km; 2000 ft over high terrain or mountainous areas.', ref: 'SERA.5005(c)(5)' },
{ q: 'VFR flight is not permitted above:', a: ['FL 100', 'FL 145', 'FL 195', 'FL 245'], c: 2, why: 'FL 195, subject to narrow authorised exceptions.', ref: 'SERA.5005(d)(2)' },
{ q: 'The minimum age to fly solo as a student pilot is:', a: ['14', '16', '17', '18'], c: 1, why: 'FCL.020 requires a student pilot to be at least 16 before first solo. Licence issue requires 17.', ref: 'FCL.020(b), FCL.200' },
{ q: 'The minimum flight time for a PPL(A) is:', a: ['30 hours', '35 hours', '40 hours', '45 hours'], c: 2, why: '40 hours, reducible to 35 on a course at an ATO approved for the purpose. This changed from 45 hours by SI 2025/878.', ref: 'FCL.210.A(a) and (b)' },
{ q: 'The PPL(A) qualifying cross-country flight must be at least:', a: ['150 km with landings at 2 aerodromes', '270 km (150 NM) with full-stop landings at 2 aerodromes other than departure', '300 km with 3 landings', '100 NM with 1 landing'], c: 1, why: 'At least 270 km (150 NM), with full-stop landings at two aerodromes different from the departure aerodrome.', ref: 'FCL.210.A(a)(2)' },
{ q: 'To revalidate an SEP class rating by experience, you need 12 hours in the class including:', a: ['All 12 hours in the 12 months before expiry', '6 hours in the 12 months before expiry, 6 hours PIC, 12 take-offs and landings, and 1 hour with an instructor', '3 hours PIC and 6 landings', '12 hours PIC and a proficiency check'], c: 1, why: 'The 12 hours may fall anywhere in the 2-year validity, but 6 must be in the final 12 months, with 6 hours PIC, 12 take-offs, 12 landings and at least 1 hour of refresher training with an FI or CRI.', ref: 'FCL.740.A(b)(1)(ii)' },
{ q: 'An SEP class rating is valid for:', a: ['12 months', '24 months', '36 months', '60 months'], c: 1, why: '24 months.', ref: 'FCL.740(a)' },
{ q: 'To carry passengers as PIC you must have completed, in the preceding 90 days:', a: ['1 take-off and landing', '3 take-offs, approaches and landings', '5 landings', '3 hours as PIC'], c: 1, why: 'At least 3 take-offs, approaches and landings in an aircraft of the same type or class.', ref: 'FCL.060(b)(1)' },
{ q: 'A Class 2 medical certificate issued to a 39-year-old is valid:', a: ['For 60 months regardless of age', 'For 60 months, but ceases when the holder reaches 42', 'For 24 months', 'For 12 months'], c: 1, why: '60 months below age 40, but a certificate issued before 40 ceases to be valid once the holder reaches 42.', ref: 'MED.A.045(a)(3)(i)' },
{ q: 'A Class 2 medical certificate for a licence holder aged over 50 is valid for:', a: ['60 months', '24 months', '12 months', '6 months'], c: 2, why: '12 months above age 50.', ref: 'MED.A.045(a)(3)(iii)' },
{ q: 'The privileges of a PPL(A) holder are to act:', a: ['As PIC for remuneration in commercial operations', 'Without remuneration as PIC or co-pilot in non-commercial operations', 'As PIC only in aircraft under 2000 kg', 'As co-pilot only'], c: 1, why: 'Without remuneration, as PIC or co-pilot, in non-commercial operations, plus all LAPL(A) privileges.', ref: 'FCL.205.A(a)' },
{ q: 'AIRAC changes take effect every:', a: ['7 days', '14 days', '28 days', '56 days'], c: 2, why: 'The AIRAC cycle is 28 days.', ref: 'ICAO Annex 15' },
{ q: 'Short-notice, operationally significant information such as a runway closure is published as:', a: ['An AIC', 'A NOTAM', 'An AIP amendment', 'An AIRAC supplement'], c: 1, why: 'NOTAMs carry short-notice operationally significant information.', ref: 'ICAO Annex 15' },
{ q: 'A PAN PAN call indicates:', a: ['Grave and imminent danger requiring immediate assistance', 'A condition concerning safety but not requiring immediate assistance', 'A radio check', 'An unlawful interference'], c: 1, why: 'PAN PAN is the urgency signal: safety of the aircraft or a person is concerned, but immediate assistance is not required.', ref: 'SERA.14' },
{ q: 'The international aeronautical emergency frequency is:', a: ['121.500 MHz', '243.000 MHz', '123.450 MHz', '118.000 MHz'], c: 0, why: '121.500 MHz.', ref: 'SERA.14' },
{ q: 'Which transponder code indicates radio communication failure?', a: ['7500', '7600', '7700', '7000'], c: 1, why: '7600 for radio failure; 7500 unlawful interference; 7700 emergency.', ref: 'SERA.13001' },
{ q: 'When not receiving an air traffic service, a pilot should select:', a: ['2000', '7000', '7700', '0000'], c: 1, why: 'Code 7000, the conspicuity code, to improve detection. Code 2000 is for when no code has been assigned by ATS.', ref: 'SERA.13001' },
{ q: 'In a Radio Mandatory Zone you must:', a: ['Carry a serviceable transponder', 'Maintain a continuous listening watch and establish two-way communication', 'Obtain an ATC clearance', 'File a flight plan'], c: 1, why: 'An RMZ requires a continuous air-ground voice communication watch and two-way communication as necessary on the notified frequency. A transponder is the TMZ requirement.', ref: 'SERA Appendix IV note 2' },
{ q: 'The sole objective of an ICAO Annex 13 accident investigation is:', a: ['To apportion blame', 'To determine liability', 'The prevention of accidents and incidents', 'To prosecute the pilot'], c: 2, why: 'Annex 13 states the sole objective is prevention. It is expressly not the apportioning of blame or liability.', ref: 'ICAO Annex 13' },
{ q: 'Under a Basic Service in Class G, the controller:', a: ['Separates you from all traffic', 'Provides deconfliction advice', 'Is not required to monitor your flight for traffic', 'Provides radar vectors'], c: 2, why: 'A Basic Service provides generic information only; the controller is not required to monitor the flight. Collision avoidance remains entirely with the pilot.', ref: 'UK FIS' },
{ q: 'A danger area is airspace in which:', a: ['Flight is prohibited at all times', 'Activities dangerous to flight may take place at notified times', 'Flight is permitted only with a clearance', 'Only military traffic may operate'], c: 1, why: 'A danger area denotes activities dangerous to flight at notified times. It is not automatically prohibited, unlike a prohibited area.', ref: 'ICAO Annex 2' },
{ q: 'If intercepted by another aircraft, you should:', a: ['Turn away immediately and descend', 'Follow the interceptor instructions, notify ATS, try 121.500 and squawk 7700', 'Squawk 7500 and continue', 'Maintain heading and ignore it'], c: 1, why: 'Comply with the visual instructions, notify the ATS unit, attempt contact on 121.500 and select 7700 unless otherwise instructed.', ref: 'SERA.11015' },
{ q: 'The transition layer is:', a: ['The airspace between the transition altitude and the transition level', 'The airspace above FL 195', 'The band from 3000 ft to 10,000 ft', 'The layer in which QFE is used'], c: 0, why: 'The transition layer lies between the transition altitude (below, on QNH) and the transition level (above, on 1013 hPa).', ref: 'Altimetry definitions' }
],

cards: [
{ f: 'Class D, VFR — clearance needed?', b: 'Yes. And continuous two-way radio.', ref: 'SERA App IV' },
{ f: 'Class E, VFR — clearance needed?', b: 'No. No radio requirement either. Traffic information as far as practical.', ref: 'SERA App IV' },
{ f: 'Class C — is VFR separated from other VFR?', b: 'No. Separated from IFR only; VFR/VFR gets traffic information.', ref: 'SERA App IV' },
{ f: 'Speed limit below 10,000 ft AMSL in classes C to G', b: '250 kt IAS.', ref: 'SERA App IV' },
{ f: 'VMC at/above 10,000 ft AMSL', b: '8 km visibility, 1500 m horizontally, 1000 ft vertically from cloud.', ref: 'Table S5-1' },
{ f: 'VMC below 10,000 ft, above 3000 ft AMSL', b: '5 km visibility, 1500 m horizontally, 1000 ft vertically.', ref: 'Table S5-1' },
{ f: 'VMC at/below 3000 ft AMSL in Class G', b: '5 km visibility, clear of cloud, surface in sight.', ref: 'Table S5-1' },
{ f: 'Three conditions for the 1500 m visibility concession in Class G', b: 'Day, at/below 3000 ft AMSL or 1000 ft above terrain (whichever higher), and IAS 140 kt or less.', ref: 'Table S5-1 note 4' },
{ f: 'VFR take-off/landing minima in a control zone (no SVFR)', b: 'Ceiling at least 1500 ft and ground visibility at least 5 km.', ref: 'SERA.5005(b)' },
{ f: 'Maximum level for VFR flight', b: 'FL 195.', ref: 'SERA.5005(d)(2)' },
{ f: 'QFE set — altimeter reads?', b: 'Height above the aerodrome datum. Zero on the runway.', ref: 'Altimetry' },
{ f: 'QNH set — altimeter reads?', b: 'Altitude above mean sea level. Aerodrome elevation on the ground.', ref: 'Altimetry' },
{ f: '1013 hPa set — altimeter reads?', b: 'A flight level.', ref: 'Altimetry' },
{ f: 'Feet per hPa near sea level', b: 'About 30 ft.', ref: 'Altimetry' },
{ f: 'High pressure to low pressure, altimeter not reset', b: 'Altimeter over-reads. You are lower than indicated. High to low, look out below.', ref: 'Altimetry' },
{ f: 'VFR cruising levels, magnetic track 000 to 179', b: 'Odd thousands plus 500 ft: FL 35, 55, 75, 95.', ref: 'SERA App 3' },
{ f: 'VFR cruising levels, magnetic track 180 to 359', b: 'Even thousands plus 500 ft: FL 45, 65, 85, 105.', ref: 'SERA App 3' },
{ f: 'Minimum height over a congested area', b: '1000 ft above the highest obstacle within a radius of 600 m.', ref: 'SERA.5005(f)(1)' },
{ f: 'Minimum height elsewhere', b: '500 ft above ground or water, or above the highest obstacle within 500 ft.', ref: 'SERA.5005(f)(2)' },
{ f: 'Night VFR minimum height, not over high terrain', b: '1000 ft above the highest obstacle within 8 km. 2000 ft over high terrain or mountains.', ref: 'SERA.5005(c)(5)' },
{ f: 'Minimum age: first solo, and PPL issue', b: '16 for first solo, 17 for licence issue.', ref: 'FCL.020, FCL.200' },
{ f: 'PPL(A) minimum flight time', b: '40 hours (reducible to 35 at an approved ATO). Changed from 45 by SI 2025/878.', ref: 'FCL.210.A' },
{ f: 'PPL(A) qualifying cross-country', b: '270 km (150 NM) with full-stop landings at 2 aerodromes other than departure.', ref: 'FCL.210.A(a)(2)' },
{ f: 'SEP revalidation by experience', b: '12 hours in the class in the 2-year validity, including 6 hours in the final 12 months, 6 hours PIC, 12 take-offs, 12 landings, and 1 hour with an FI or CRI.', ref: 'FCL.740.A(b)(1)(ii)' },
{ f: 'SEP class rating validity', b: '24 months.', ref: 'FCL.740(a)' },
{ f: '90-day rule', b: '3 take-offs, approaches and landings in the preceding 90 days to carry passengers. Plus 1 at night for night passenger flying, unless you hold an IR.', ref: 'FCL.060(b)' },
{ f: 'Class 2 medical validity, under 40', b: '60 months — but it ceases when you reach 42.', ref: 'MED.A.045' },
{ f: 'Class 2 medical validity, 40 to 50', b: '24 months — ceases when you reach 51.', ref: 'MED.A.045' },
{ f: 'Class 2 medical validity, over 50', b: '12 months.', ref: 'MED.A.045' },
{ f: 'AIRAC cycle length', b: '28 days.', ref: 'Annex 15' },
{ f: 'MAYDAY versus PAN PAN', b: 'MAYDAY: grave and imminent danger, immediate assistance required. PAN PAN: safety concerned, immediate assistance not required.', ref: 'SERA.14' },
{ f: 'Emergency frequency', b: '121.500 MHz.', ref: 'SERA.14' },
{ f: 'Squawk 7700 / 7600 / 7500', b: 'Emergency / radio failure / unlawful interference.', ref: 'SERA.13001' },
{ f: 'Squawk 7000 versus 2000', b: '7000 = conspicuity, when not receiving an ATS. 2000 = when no code has been assigned by ATS.', ref: 'SERA.13001' },
{ f: 'RMZ versus TMZ', b: 'RMZ: radio — listening watch and two-way communication. TMZ: transponder with the notified mode and code.', ref: 'SERA App IV' },
{ f: 'Sole objective of an Annex 13 investigation', b: 'The prevention of accidents and incidents. Not blame or liability.', ref: 'Annex 13' },
{ f: 'Prohibited, restricted, danger area', b: 'Prohibited: no flight. Restricted: flight subject to specified conditions. Danger: dangerous activities may take place at notified times.', ref: 'Annex 2' },
{ f: 'Does a Basic Service monitor you for traffic?', b: 'No. Generic information only; collision avoidance is entirely yours.', ref: 'UK FIS' }
]
};
