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
<figure data-d="semicircular"></figure>
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
<figure data-d="minheights"></figure>
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
<figure data-d="pdrareas"></figure>
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
<figure data-d="sepreval"></figure>
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
<figure data-d="sarsignals"></figure>
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
<figure data-d="transponder"></figure>
<table>
<thead><tr><th>Code</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td><b>7700</b></td><td>Emergency</td></tr>
<tr><td><b>7600</b></td><td>Radio communication failure</td></tr>
<tr><td><b>7500</b></td><td>Unlawful interference (hijack)</td></tr>
<tr><td><b>7000</b></td><td>Conspicuity — <b>VFR</b> with no specific transponder instruction from ATS</td></tr>
<tr><td><b>2000</b></td><td>Conspicuity — <b>IFR</b> with no specific transponder instruction from ATS</td></tr>
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
<li>Both 7000 and 2000 mean "nobody has given me a code". They split on <b>flight rules</b>, not on whether you have a service: 7000 VFR, 2000 IFR.</li>
<li>Annex 13's purpose is prevention, not blame.</li>
</ul></div>`
},
{
  id: '010-icao', title: 'The Chicago Convention, ICAO and the Annexes', mins: 7, tags: ['010.01', '010.14'],
  body: `
<p>Every rule you fly under traces back to one treaty, signed at Chicago on <b>7 December
1944</b>. It settles whose sky it is, whose licence counts abroad, and who writes the rest.</p>

<h3>Sovereignty, and the two kinds of flight</h3>
<p><b>Article 1</b> is the foundation — every State has <b>complete and exclusive sovereignty
over the airspace above its territory</b>. <b>Article 2</b> defines that territory as the
<b>land areas and the territorial waters adjacent to them</b>. <b>Article 3</b> applies the
Convention to <b>civil aircraft only</b>: <b>state aircraft</b>, used in military, customs and
police services, are outside it. Two articles then split civil flying in half:</p>
<ul>
<li><b>Article 5 — non-scheduled flight.</b> Aircraft <em>not</em> engaged in scheduled
international air services may fly into or non-stop across a Contracting State's territory, and
stop for non-traffic purposes, <b>without prior permission</b> — subject to that State's right
to require a landing.</li>
<li><b>Article 6 — scheduled air services.</b> No scheduled international air service may be
operated over or into a State's territory <b>except with that State's special permission</b>.</li>
</ul>
<p>Your trip to Le Touquet is an Article 5 flight. Note also <b>Article 12</b>: over the
<b>high seas</b>, the rules in force are those established under the Convention.</p>

<h3>Nationality: one State, one register</h3>
<ul>
<li><b>Article 17</b> — aircraft have the nationality of the <b>State in which they are
registered</b>.</li>
<li><b>Article 18</b> — an aircraft <b>cannot be validly registered in more than one State</b>,
though registration may be changed from one State to another.</li>
<li><b>Articles 19 and 20</b> — registration follows that State's own law, and the aircraft
must bear its nationality and registration marks.</li>
</ul>

<h3>Documents to be carried — Article 29</h3>
<p>For an aircraft in international navigation: the <b>certificate of registration</b>, the
<b>certificate of airworthiness</b>, the <b>appropriate licences for each crew member</b>, the
<b>journey log book</b>, and — where they apply — the <b>aircraft radio station licence</b>, a
<b>passenger list</b> and a <b>cargo manifest</b>. The UK working list is
<b>NCO.GEN.135</b>.</p>

<h3>Whose licence counts, and what an endorsement does</h3>
<p><b>Articles 31 and 32</b> put both in the hands of the <b>State of registry</b>: it issues
or renders valid the certificate of airworthiness and the crew licences. <b>Article 33</b> then
makes them travel — other Contracting States <b>shall recognise them as valid</b>, provided they
were issued under requirements <b>equal to or above the minimum ICAO standards</b>.</p>
<p>That proviso is the point of <b>Articles 39 and 40</b>. Where an aircraft or licence falls
short of the international standard, the shortfall is <b>endorsed on the certificate or
licence</b>, and anything so endorsed may take part in international navigation <b>only with the
permission of the State whose territory is entered</b>. An endorsement does not void the
document at home; it removes the automatic recognition abroad.</p>

<h3>Standards, Recommended Practices and Article 38</h3>
<p><b>Article 37</b> directs ICAO to adopt Standards and Recommended Practices. The
difference:</p>
<ul>
<li>A <b>Standard</b> is a specification whose uniform application is recognised as
<b>necessary</b> for the safety or regularity of international air navigation, and to which
States <b>will conform</b>. If compliance is impossible, <b>notification to the Council is
compulsory under Article 38</b>.</li>
<li>A <b>Recommended Practice</b> is one recognised as <b>desirable</b> in the interest of
safety, regularity or efficiency, to which States <b>will endeavour to conform</b>. No
notification duty.</li>
</ul>
<p><b>Article 38</b> lets the system tolerate national variation honestly. A State that cannot
comply, or chooses to differ, gives <b>immediate notification</b> to ICAO; where a Standard is
amended and the State will not follow, it must notify the Council <b>within 60 days</b> of
adoption, or say what it proposes to do. <b>UK differences are published in the UK AIP at
GEN 1.7.</b></p>

<h3>ICAO: Assembly, Council, Secretariat</h3>
<p>Part II creates the Organization — a United Nations agency seated in <b>Montreal</b> with
<b>193 Member States</b>. <b>Article 44</b> sets its aims: develop international air navigation
and foster air transport so as to ensure its <b>safe and orderly growth</b>, meet the world's
need for safe, regular, efficient and economical air transport, and promote safety of
flight.</p>
<ul>
<li><b>Assembly</b> — every Member State, <b>one vote each</b>, meeting <b>at least once every
three years</b>. It elects the Council.</li>
<li><b>Council</b> — a permanent body of Member States elected by the Assembly for <b>three
years</b>, balancing air transport importance, contribution of facilities and geographic spread.
It <b>adopts the SARPs and designates them as Annexes</b>. Learn the size as <b>36</b>: that is
the figure the exam uses. It is rising to <b>40</b> — the 2016 Protocol amending
<b>Article 50(a)</b> came into force on <b>12 June 2026</b>, and the four extra seats are filled
at an Extraordinary Assembly in <b>November 2026</b>.</li>
<li><b>Air Navigation Commission</b> — <b>19 experts</b> appointed by the Council from State
nominations, rising to <b>21</b> under the parallel amendment to <b>Article 56</b>, in force the
same day. It <em>recommends</em> Annex amendments.</li>
<li><b>Secretariat</b> — the permanent staff under the <b>Secretary General</b>, the Council's
appointed chief executive.</li>
</ul>
<p>Assembly elects, Commission recommends, <b>Council adopts</b>. The 2026 expansion changes the
headcounts, not that sequence — and the sequence is what the exam is really testing.</p>

<h3>The nineteen Annexes</h3>
<table>
<thead><tr><th>#</th><th>Title</th><th>#</th><th>Title</th></tr></thead>
<tbody>
<tr><td>1</td><td>Personnel Licensing</td><td>11</td><td><b>Air Traffic Services</b></td></tr>
<tr><td>2</td><td><b>Rules of the Air</b></td><td>12</td><td><b>Search and Rescue</b></td></tr>
<tr><td>3</td><td>Meteorological Service</td><td>13</td><td>Accident Investigation</td></tr>
<tr><td>4</td><td>Aeronautical Charts</td><td>14</td><td><b>Aerodromes</b></td></tr>
<tr><td>5</td><td>Units of Measurement</td><td>15</td><td><b>Aeronautical Information Services</b></td></tr>
<tr><td>6</td><td><b>Operation of Aircraft</b></td><td>16</td><td>Environmental Protection</td></tr>
<tr><td>7</td><td><b>Nationality and Registration Marks</b></td><td>17</td><td>Security</td></tr>
<tr><td>8</td><td><b>Airworthiness of Aircraft</b></td><td>18</td><td>Dangerous Goods by Air</td></tr>
<tr><td>9</td><td>Facilitation</td><td>19</td><td>Safety Management</td></tr>
<tr><td>10</td><td>Aeronautical Telecommunications</td><td></td><td></td></tr>
</tbody></table>
<p>The eight in bold — <b>2, 6, 7, 8, 11, 12, 14 and 15</b> — are the ones a PPL meets in the
air. Annexes 1, 13 and 17 are examined too.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li><b>Non-scheduled</b> needs no prior permission (Art 5); <b>scheduled</b> needs special
permission (Art 6). Nationality follows the <b>register</b>, not the owner — and only
<b>one</b> register.</li>
<li><b>Standard</b> = necessary, differences must be notified. <b>Recommended Practice</b> =
desirable, no notification duty.</li>
<li>Council <b>36</b> States, Air Navigation Commission <b>19</b> — answer with these. The
amendments in force since 12 June 2026 take them to <b>40</b> and <b>21</b>, but the question
banks have not caught up. Either way the ANC recommends Annex amendments and the Council
adopts them.</li>
<li>Article 29 wants the <b>journey log book</b> — not your personal flying logbook.</li>
</ul></div>`
},
{
  id: '010-rules', title: 'Right of way and the general rules of the air', mins: 6, tags: ['010.05', '010.14'],
  body: `
<p>Nobody is separating you from anyone in Class G. These rules exist so two pilots who have never met react the same predictable way. Learn them as actions.</p>

<h3>The rule behind the rules</h3>
<p><b>SERA.3201</b> says nothing in the Regulation relieves the pilot-in-command of the responsibility to take whatever action best averts a collision, and <b>SERA.3205</b> forbids operating in such proximity to another aircraft as to create a collision hazard. Right of way is never a right to hit someone. Two general points from <b>SERA.3210</b>: the aircraft with right of way must <b>maintain heading and speed</b>; the one giving way must not pass <b>over, under or in front of</b> the other unless well clear, allowing for wake turbulence.</p>

<h3>Three encounters, three actions</h3>
<table>
<thead><tr><th>Situation</th><th>Who acts</th><th>Action</th></tr></thead>
<tbody>
<tr><td><b>Head-on</b>, or approximately so</td><td><b>Both</b></td><td>Each alters heading to the <b>right</b></td></tr>
<tr><td><b>Converging</b> at about the same level</td><td>The one with the other <b>on its right</b></td><td>Gives way</td></tr>
<tr><td><b>Overtaking</b></td><td>The <b>overtaking</b> aircraft</td><td>Alters heading to the <b>right</b> until entirely past and clear</td></tr>
</tbody></table>
<p>An overtaking aircraft approaches from the rear on a line less than <b>70&deg;</b> from the other's plane of symmetry — the sector in which, at night, you would see neither its red nor its green navigation light. Climbing, descending or level makes no difference, and no later change in the relative positions of the two aircraft releases you until you are past and clear. One exception, <b>SERA.3210(c)(3)(i)</b>: a <b>sailplane overtaking another sailplane</b> may alter course to the right <em>or</em> to the left.</p>

<h3>The give-way ladder</h3>
<p>The converging rule's exceptions run one way: the machine with fewer options wins.</p>
<ol>
<li>Power-driven heavier-than-air aircraft give way to <b>airships, sailplanes and balloons</b>.</li>
<li>Airships give way to <b>sailplanes and balloons</b>.</li>
<li>Sailplanes give way to <b>balloons</b>.</li>
<li>Power-driven aircraft give way to aircraft <b>seen to be towing</b> another aircraft or an object.</li>
</ol>
<p>A balloon beats everything; an aeroplane is at the bottom. A tug and the glider on its wire count as a <b>single aircraft</b> commanded by the tug's pilot — rule 8 of the Rules of the Air Regulations 2015, a UK addition. And SERA.3210(b): give way to any aircraft whose manoeuvrability you know to be impaired.</p>

<h3>Landing and taking off</h3>
<ul>
<li>Aircraft in flight, or operating on the ground or water, <b>give way to aircraft landing</b> or in the final stages of an approach.</li>
<li>Two or more heavier-than-air aircraft approaching to land: the <b>higher gives way to the lower</b> — but the lower must not cut in front of, or overtake, one in the final stages of an approach.</li>
<li>Power-driven heavier-than-air aircraft still give way to <b>sailplanes</b>.</li>
<li>Give way to an aircraft you know is <b>compelled to land</b>.</li>
<li>Taxiing on the manoeuvring area, give way to aircraft <b>taking off or about to take off</b>.</li>
</ul>
<p>In the circuit, <b>SERA.3225</b>: watch other traffic, conform with or avoid their pattern and — <b>balloons excepted on both counts</b> — turn <b>left</b> when approaching to land and after take-off unless otherwise indicated or instructed by ATC, and take off and land <b>into wind</b> unless safety, the runway configuration or air traffic considerations make another direction preferable.</p>

<h3>On the ground</h3>
<p>Taxiing, the same three encounters return with one change: head-on, both aircraft <b>stop</b>, or where practicable alter course right. Converging, the one with the other on its right gives way. Being overtaken, you keep going and the overtaker keeps well clear. At a <b>controlled</b> aerodrome, hold at every runway-holding position unless an <b>explicit clearance</b> to enter or cross the runway has been issued by the tower. Hold at any <b>lit stop bar</b> and go on only when the lights are switched off — that duty is not confined to controlled aerodromes.</p>

<h3>Lights</h3>
<p><b>SERA.3215.</b> At night an aircraft in flight displays <b>anti-collision lights</b> and — balloons excepted — <b>navigation lights</b>. Anti-collision lights fitted for that must also be shown <b>by day</b>. On the movement area at night: <b>navigation lights</b> whenever you are moving, lights marking the extremities of the structure unless stationary and otherwise lit, attention-attracting lights when taxiing or under tow, and lights showing the engines are running — the last two by day too. Flashing lights may be dimmed or switched off if they impair the performance of duties or dazzle an outside observer.</p>
<p>Navigation lights are <b>red</b> to port and <b>green</b> to starboard, each over 110&deg;, with a <b>white</b> light astern over 140&deg; — 70&deg; each side of the tail, which is where the overtaking definition comes from. If a required light fails at night and cannot be repaired immediately, <b>land as soon as you safely can</b> unless ATC authorises you to continue; by day an anti-collision light failure lets you carry on, repaired at the earliest practicable opportunity (Rules of the Air Regulations 2015, rule 15).</p>

<h3>Aerobatics, formation, dropping and spraying</h3>
<p>Aerobatics (<b>SERA.3130</b>), dropping or spraying (<b>SERA.3115</b>) and towing (<b>SERA.3120</b>) are permitted only in accordance with the applicable legislation and any relevant ATS advice or clearance. In the UK, rule 4 of the Rules of the Air Regulations 2015 bars aerobatics <b>over the congested area</b> of any city, town or settlement and <b>within notified controlled airspace</b> without the controlling unit's consent.</p>
<p>Formation flight (<b>SERA.3135</b>) needs <b>pre-arrangement between the pilots-in-command</b>; in controlled airspace, prescribed conditions apply as well — one designated <b>flight leader</b>, the formation navigating and reporting as a <b>single aircraft</b>, and each aircraft within <b>1 km (0.5 NM)</b> laterally and longitudinally and <b>30 m (100 ft)</b> vertically of the leader.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Head-on, <b>both</b> turn right. Converging, only the aircraft with the other on its right acts.</li>
<li>Overtaking, you turn <b>right</b> — unless you are a sailplane overtaking a sailplane, which may go either way.</li>
<li>The converging exceptions name airships, sailplanes <em>and</em> balloons. The landing exception names <b>sailplanes only</b>.</li>
<li>Approaching to land the <b>higher</b> gives way — but the lower may not cut in front of one on final.</li>
<li>Anti-collision lights fitted for night must be on <b>by day</b> too.</li>
</ul></div>`
},
{
  id: '010-signals', title: 'Signals, and what to do when the radio dies', mins: 6, tags: ['010.05', '010.08', '010.11'],
  body: `
<p>Radios fail, and the tower keeps a lamp for exactly that day. Everything below passes an
instruction without a frequency: tower to aircraft, marshaller to cockpit, survivor to searcher.</p>

<h3>Light signals from the tower</h3>
<figure data-d="lightsignals"></figure>
<figure data-d="signalsquare"></figure>
<p>One lamp, two entirely different meanings depending on whether your wheels are turning. Learn
it as two columns, not six signals.</p>
<table>
<thead><tr><th>Signal</th><th>Aircraft <b>in flight</b></th><th>Aircraft <b>on the ground</b></th></tr></thead>
<tbody>
<tr><td>Steady <b>green</b></td><td>Cleared to land</td><td>Cleared for take-off</td></tr>
<tr><td>Steady <b>red</b></td><td>Give way to other aircraft and continue circling</td><td>Stop</td></tr>
<tr><td>Series of <b>green</b> flashes</td><td>Return for landing</td><td>Cleared to taxi</td></tr>
<tr><td>Series of <b>red</b> flashes</td><td>Aerodrome unsafe, do not land</td><td>Taxi clear of the landing area in use</td></tr>
<tr><td>Series of <b>white</b> flashes</td><td>Land at this aerodrome and proceed to apron</td><td>Return to starting point on the aerodrome</td></tr>
<tr><td><b>Red pyrotechnic</b></td><td>Notwithstanding any previous instructions, do not land for the time being</td><td>&mdash;</td></tr>
</tbody></table>
<p>Green and white flashes in flight are <em>not</em> landing clearances &mdash; the table carries
its own footnote against both, that clearances to land and to taxi will be given in due course.
Only a <b>steady green</b> clears you to land. The red pyrotechnic has no entry at all in the
ground column (SERA Appendix 1, 3.1.1).</p>
<p>You acknowledge (SERA Appendix 1, 3.1.2): <b>in flight by day</b>, rock the wings &mdash; except
on the base and final legs of the approach; <b>on the ground by day</b>, move the ailerons or
rudder; <b>by night</b>, in the air and on the ground alike, flash the landing lights on and off
twice, or the navigation lights if you carry no landing light.</p>

<h3>The signals area</h3>
<p>A square roughly <b>12 m</b> a side inside a white border, sited so you can see it from any
direction of approach (CAP 637, Chapter 6). Everything in it is laid out flat, to be read from
above.</p>
<table>
<thead><tr><th>Signal</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Red square, <b>two</b> yellow diagonals</td><td>Landing prohibited, and the prohibition is liable to be prolonged</td></tr>
<tr><td>Red square, <b>one</b> yellow diagonal</td><td>Special precautions needed when approaching or landing</td></tr>
<tr><td>White dumb-bell</td><td>Land, take off and taxi on runways and taxiways <b>only</b></td></tr>
<tr><td>White dumb-bell with a black bar across each circle</td><td>Land and take off on runways only; other manoeuvring need not be confined</td></tr>
<tr><td>White or orange landing <b>T</b></td><td>Land and take off parallel to the shaft, towards the cross arm</td></tr>
<tr><td>Right-hand arrow</td><td>Right-hand circuit &mdash; turns to the right before landing and after take-off. May instead be laid at the end of the runway in use</td></tr>
<tr><td>Double white cross</td><td>Gliding in progress</td></tr>
</tbody></table>
<p>Two more signals belong to the same set but are displayed <b>vertically</b>, not laid flat in
the square: a black letter <b>C</b> on yellow marks the location of the ATS reporting office, and
a set of <b>two digits</b> at or near the control tower gives the take-off direction,
<b>magnetic</b>, in tens of degrees (SERA Appendix 1, 3.2.5.2 and 3.2.7.1).</p>
<p>Outside the signals area, <b>crosses</b> mark ground unfit for aircraft: <b>white on a runway,
yellow on a taxiway</b>.</p>

<h3>Marshalling</h3>
<p>The marshaller stands off your left, facing you, where you can best see them (SERA Appendix 1,
4.1.1). Read the descriptions carefully: the arms are described as the <em>marshaller's</em> arms,
and only the direction of a turn is stated <b>from the pilot's point of view</b>. Because they are
facing you, the two work out the same way round (CAP 637, Table E).</p>
<ul>
<li><b>Straight ahead</b> &mdash; arms bent at the elbow, beckoning from chest to head height.</li>
<li><b>Turn</b> &mdash; one arm held rigidly out at 90&deg;, the other beckoning. The direction is
given from your point of view, and the <em>still</em> arm is the one you see on the side you turn
towards.</li>
<li><b>Normal stop</b> &mdash; arms swept slowly up until they cross overhead. <b>Emergency
stop</b> &mdash; the same cross, made abruptly. The speed is the message.</li>
<li><b>Slow down</b> &mdash; arms patting downwards, waist to knees. <b>Cut engines</b> &mdash;
hand drawn across the throat.</li>
<li><b>All clear</b> &mdash; thumbs up. <b>Fire</b> &mdash; one hand fanning shoulder to knee, the
other pointing at the fire.</li>
</ul>

<h3>Ground to air: the survivor's code</h3>
<figure data-d="sarsignals"></figure>
<p>Five symbols, laid out at least <b>2.5 m (8 ft)</b> long and made as conspicuous as you can
manage &mdash; fabric, wood, stones, trampled snow, spilt oil (ICAO Annex 12, Appendix).</p>
<table>
<thead><tr><th>Symbol</th><th>Message</th></tr></thead>
<tbody>
<tr><td><b>V</b></td><td>Require assistance</td></tr>
<tr><td><b>X</b></td><td>Require <b>medical</b> assistance</td></tr>
<tr><td><b>N</b></td><td>No / negative</td></tr>
<tr><td><b>Y</b></td><td>Yes / affirmative</td></tr>
<tr><td>An <b>arrow</b></td><td>Proceeding in this direction</td></tr>
</tbody></table>
<p>The aircraft answers that it understood by <b>rocking its wings</b> by day, or <b>flashing its
landing lights on and off twice</b> at night. <b>No signal means the ground signal was not
understood.</b></p>
<p>Intercept a distress transmission and Annex 12 asks you to acknowledge it, record the position
given, take a bearing on it, tell the rescue coordination centre or an ATS unit, and at your
discretion head for that position while you await instructions.</p>

<h3>When the radio dies</h3>
<p>Suspect yourself first: wrong frequency, wrong 8.33/25 kHz mode, volume or squelch, the audio
selector, a headset half out of its socket, a stuck transmit button. Reset a breaker <em>once</em>
only, try the second set, or ask another aircraft to relay.</p>
<p>If it really has failed (SERA.13005(a)(2); ICAO Annex 2, 3.6.5.2.1; UK AIP ENR 1.1;
CAA SafetySense 22):</p>
<ol>
<li><b>Squawk 7600.</b></li>
<li>Fly the aeroplane. Maintain VMC and stay clear of controlled airspace.</li>
<li>Decide whether the flight can safely continue &mdash; a quiet aerodrome outside controlled
airspace is often the better answer.</li>
<li>If only the receiver may have gone, transmit blind. If only the transmitter has gone, keep
listening.</li>
<li>Overhead the aerodrome, read the signals area and the circuit, and <b>watch for light
signals</b>.</li>
<li>Land, then report your arrival to the relevant ATS unit as soon as you can.</li>
</ol>
<p>Annex 2 puts the VFR case in one line, at 3.6.5.2.1 a): continue in VMC, land at the
<b>nearest suitable aerodrome</b>, report your arrival by the most expeditious means. A separate
UK code, <b>0030</b>, means <em>lost</em> &mdash; a different problem from being deaf.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Steady green in flight is a landing clearance. <b>Green flashes</b> in flight mean return for
landing &mdash; the clearance comes later.</li>
<li>Red flashes: on the ground, taxi clear of the landing area; in flight, aerodrome unsafe.</li>
<li>The red pyrotechnic has <b>no</b> meaning for an aircraft on the ground.</li>
<li><b>Two</b> yellow diagonals means landing prohibited; <b>one</b> means take special care.</li>
<li>The letter <b>C</b> and the two-digit take-off direction are displayed <b>vertically</b>, at
the reporting office and the tower. They are not laid out in the signals area.</li>
<li>V is assistance, <b>X</b> is <em>medical</em> assistance. Do not swap them.</li>
<li>The UK radio-failure code is <b>7600</b>. The EU's 7601 (May 2025) was not adopted here.</li>
</ul></div>`
},
{
  id: '010-aerodromes', title: 'Aerodromes: markings, lighting and signs', mins: 7, tags: ['010.10'],
  body: `
<p>Markings and lights are a language you read at 80 kt with your hands full. Nearly all of it
decodes from one rule: <b>runway markings are white, taxiway and apron markings are yellow</b>.</p>

<h3>Runway designation</h3>
<p>A two-digit number giving the magnetic direction of the runway centreline to the nearest ten
degrees, read from the direction of approach, with the leading zero kept &mdash; <b>05</b>, never
5. The other end of the same strip differs by 18, so 05 becomes 23. Parallel runways add a
letter, again as seen from the approach: <b>L</b> and <b>R</b> for two, <b>L</b>, <b>C</b> and
<b>R</b> for three.</p>

<h3>The white marks on the runway</h3>
<ul>
<li><b>Threshold</b> &mdash; the piano keys: longitudinal stripes beginning at the threshold. The
number of stripes is fixed by the runway's width &mdash; <b>4 at 18 m</b>, 8 at 30 m, 16 at 60 m
&mdash; so the marking tells you how wide the runway is.</li>
<li><b>Aiming point</b> &mdash; two broad stripes either side of the centreline, starting between
<b>150 m and 400 m</b> in from the threshold depending on the landing distance available. What you aim at, not where you
plan to touch down.</li>
<li><b>Touchdown zone</b> &mdash; pairs of rectangles at <b>150 m</b> intervals from the
threshold: one pair where the landing distance available is under 900 m, up to six pairs at
2400 m or more. Every pair you float past is 150 m of runway gone.</li>
<li><b>Centreline</b> &mdash; a dashed line down the middle. <b>Edge markings</b> are continuous
stripes down each side, used where the declared runway is narrower than the pavement, or the
contrast with the shoulder is poor.</li>
</ul>

<h3>A displaced threshold</h3>
<p>Land beyond the transverse bar. The paved area before it is marked according to what it can
actually take &mdash; in the UK, three ways, not two:</p>
<ul>
<li><b>White arrows</b> along the centreline leading to the bar &mdash; fit for aircraft, usable
as a starter extension for the take-off run and for taxiing, but not for landing.</li>
<li><b>White crosses</b> &mdash; the closed marking. <b>Unfit for the movement of aircraft and
unsuitable even as a stopway</b>. Keep off it entirely.</li>
<li><b>Yellow chevrons</b> pointing towards the threshold &mdash; fit for use as a <b>stopway</b>
by an aircraft landing in the opposite direction, but not fit for the normal movement of
aircraft. Not somewhere to taxi or begin a take-off run.</li>
</ul>
<p>Note the trap: it is the <b>cross</b>, not the chevron, that means the pavement is no use to
anyone. US practice differs &mdash; there, chevrons alone carry the keep-off meaning.</p>

<h3>Yellow, and the line that matters most</h3>
<p>The <b>runway holding position</b> marking, Pattern A, is two solid and two dashed yellow
lines across the taxiway, <b>the dashed pair nearer the runway</b>. Coming from the taxiway you
meet the solid lines first, and that is where you stop &mdash; close up to the marking, with no
part of the aircraft beyond it. Where there is an ATC unit you do not pass it without a
clearance; where there is none, it is where you give way to aircraft using or approaching the
runway. A ladder-pattern Pattern B marking is used for Category II/III holds set further back.</p>

<h3>Signs: red stops you, yellow tells you where you are</h3>
<ul>
<li><b>Mandatory instruction signs</b> &mdash; <b>white characters on red</b>. Runway holding
position signs, carrying the runway designator (27, or 09-27), and No Entry signs. Never pass one without a clearance.</li>
<li><b>Location signs</b> &mdash; <b>yellow characters on black</b>, with a yellow border. You
are on taxiway A.</li>
<li><b>Direction and destination signs</b> &mdash; <b>black characters on yellow</b>, with an
arrow. That way to taxiway A.</li>
</ul>

<h3>Lights, by colour</h3>
<table>
<thead><tr><th>Light</th><th>Colour</th><th>Note</th></tr></thead>
<tbody>
<tr><td>Approach</td><td><b>White</b></td><td>Simple system starts 500 m out, a full Calvert 900 m</td></tr>
<tr><td>Threshold</td><td><b>Green</b></td><td>Start of the landing distance available</td></tr>
<tr><td>Runway edge</td><td><b>White</b></td><td>Yellow caution zone over the upwind 600 m or one third, whichever is less, on ILS runways without centreline lighting</td></tr>
<tr><td>Runway centreline</td><td><b>White</b></td><td>Alternating red and white from 900 m to 300 m to go, then red</td></tr>
<tr><td>Runway end</td><td><b>Red</b></td><td>Limit of the runway available for manoeuvring</td></tr>
<tr><td>Taxiway edge</td><td><b>Blue</b></td><td>Apron edges too</td></tr>
<tr><td>Taxiway centreline</td><td><b>Green</b></td><td>Low-visibility aerodromes</td></tr>
</tbody></table>
<p>A lit <b>stop bar</b> is a row of red lights across the taxiway and you never cross one.
<b>Runway guard lights</b> &mdash; flashing yellow wig-wags &mdash; warn that a runway is close.</p>

<h3>PAPI</h3>
<p>A single row of four units, normally on the <b>left</b> as seen from the approach; a two-unit
APAPI may be used on runways not serving jet public transport. Four white, too high. Three white
one red, slightly high. <b>Two white two red, on the correct approach path.</b> One white three
red, slightly low. Four red, too low. The signal is not designed to be used more than
<b>15&deg;</b> either side of the centreline.</p>

<h3>The wind, and finding the place</h3>
<p>The <b>wind direction indicator</b> gives surface wind direction and a rough idea of strength:
a fabric truncated cone at least <b>3.6 m</b> long and <b>0.9 m</b> across the mouth, sited clear
of turbulence and visible from the approach, lit if the aerodrome is used at night. A UK civil
<b>identification beacon</b> flashes a two-letter Morse identifier in <b>green</b>; a military
one flashes <b>red</b>. A <b>location beacon</b> shows white flashes, or green alternating with
white where background lighting is heavy.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Threshold <b>green</b>, runway end <b>red</b>, runway edge <b>white</b>, taxiway edge
<b>blue</b>, taxiway centreline <b>green</b>.</li>
<li>Stop on the <b>solid</b> side of the holding position marking. The dashed pair is the runway
side.</li>
<li>Before a displaced threshold: white arrows mean usable for the take-off run; <b>white
crosses mean keep off entirely</b>; <b>yellow chevrons mean stopway only</b>. Do not answer this
one from US habit.</li>
<li>Mandatory signs are white on <b>red</b>; location signs yellow on <b>black</b>; direction
signs black on <b>yellow</b>.</li>
<li>The aiming point marking is not the touchdown zone marking.</li>
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
{ q: 'Flying VFR in UK airspace, with no specific transponder instruction from ATS, you should select:', a: ['2000', '7000', '7700', '0000'], c: 1, why: '7000 is the VFR conspicuity code; 2000 is the same idea for IFR. Neither is assigned to you — both simply say that nobody has given you a discrete code.', ref: 'UK AIP ENR 1.6 / AIC 128/2019' },
{ q: 'In a Radio Mandatory Zone you must:', a: ['Carry a serviceable transponder', 'Maintain a continuous listening watch and establish two-way communication', 'Obtain an ATC clearance', 'File a flight plan'], c: 1, why: 'An RMZ requires a continuous air-ground voice communication watch and two-way communication as necessary on the notified frequency. A transponder is the TMZ requirement.', ref: 'SERA Appendix IV note 2' },
{ q: 'The sole objective of an ICAO Annex 13 accident investigation is:', a: ['To apportion blame', 'To determine liability', 'The prevention of accidents and incidents', 'To prosecute the pilot'], c: 2, why: 'Annex 13 states the sole objective is prevention. It is expressly not the apportioning of blame or liability.', ref: 'ICAO Annex 13' },
{ q: 'Under a Basic Service in Class G, the controller:', a: ['Separates you from all traffic', 'Provides deconfliction advice', 'Is not required to monitor your flight for traffic', 'Provides radar vectors'], c: 2, why: 'A Basic Service provides generic information only; the controller is not required to monitor the flight. Collision avoidance remains entirely with the pilot.', ref: 'UK FIS' },
{ q: 'A danger area is airspace in which:', a: ['Flight is prohibited at all times', 'Activities dangerous to flight may take place at notified times', 'Flight is permitted only with a clearance', 'Only military traffic may operate'], c: 1, why: 'A danger area denotes activities dangerous to flight at notified times. It is not automatically prohibited, unlike a prohibited area.', ref: 'ICAO Annex 2' },
{ q: 'If intercepted by another aircraft, you should:', a: ['Turn away immediately and descend', 'Follow the interceptor instructions, notify ATS, try 121.500 and squawk 7700', 'Squawk 7500 and continue', 'Maintain heading and ignore it'], c: 1, why: 'Comply with the visual instructions, notify the ATS unit, attempt contact on 121.500 and select 7700 unless otherwise instructed.', ref: 'SERA.11015' },
{ q: 'The transition layer is:', a: ['The airspace between the transition altitude and the transition level', 'The airspace above FL 195', 'The band from 3000 ft to 10,000 ft', 'The layer in which QFE is used'], c: 0, why: 'The transition layer lies between the transition altitude (below, on QNH) and the transition level (above, on 1013 hPa).', ref: 'Altimetry definitions' },
{ q: 'You fly a privately owned aeroplane from the UK to France. The flight is not a scheduled international air service. Under the Chicago Convention, France:', a: ['Must give special permission before you may enter its territory', 'May require the flight to be notified to ICAO in advance', 'Must allow you to enter or cross without prior permission, subject to its right to require a landing', 'Must allow you to enter and to take on fare-paying passengers within France'], c: 2, why: 'Article 5 grants the right of entry, non-stop transit and stops for non-traffic purposes to flights that are NOT scheduled international air services. Article 6 is the mirror image and applies to scheduled services, which do need the State\'s special permission. Picking up traffic within another State is a separate matter again, restricted by Article 7 (cabotage).', ref: 'Chicago Convention Arts 5, 6, 7' },
{ q: 'The nationality of an aircraft is determined by:', a: ['The State in which it was manufactured', 'The nationality of its registered owner', 'The State where the operator has its principal place of business', 'The State in which it is registered'], c: 3, why: 'Article 17 ties nationality to the register alone, which is why a G-registered aeroplane stays British whoever owns it and wherever it was built. Article 18 completes the idea: an aircraft cannot be validly registered in more than one State at a time, although the registration may be transferred from one State to another.', ref: 'Chicago Convention Arts 17, 18' },
{ q: 'An ICAO Standard is amended. A Contracting State will not amend its own regulations to match. It must notify the Council:', a: ['Within 14 days of adoption of the amendment', 'Within 28 days of adoption of the amendment', 'Within 60 days of adoption of the amendment', 'Within 90 days of adoption of the amendment'], c: 2, why: 'Article 38 sets two separate duties. A State that simply cannot comply with a Standard gives immediate notification; but where the Standard has been amended, the State has 60 days from adoption to notify the Council or to say what action it proposes. The 28-day distractor is the AIRAC cycle, which governs when changes take effect, not when differences are notified.', ref: 'Chicago Convention Art 38' },
{ q: 'Which statement about ICAO Recommended Practices is correct?', a: ['Uniform application is recognised as desirable; States endeavour to conform, and notification of differences is not compulsory', 'Uniform application is recognised as necessary; differences must be notified to the Council under Article 38', 'They carry no status and may be disregarded entirely', 'They bind only those States that have no national regulation on the subject'], c: 0, why: 'The single word in each definition does the work: a Standard is \'necessary\' and a Recommended Practice is \'desirable\'. That one word drives the obligation — conform versus endeavour to conform — and it is why only Standards trigger the compulsory Article 38 notification. A Recommended Practice still has real status; it is simply not backed by that duty.', ref: 'ICAO Annex Foreword, Status of Annex components' },
{ q: 'The ICAO Council is:', a: ['A meeting of all Member States, each holding one vote, convened at least once every three years', 'A permanent body of Member States elected by the Assembly for a three-year term, which adopts the SARPs and designates them as Annexes', 'A body of technical experts appointed for their qualifications in aeronautics, which recommends amendments to the Annexes', 'The permanent staff of the Organization, headed by the Secretary General'], c: 1, why: 'The three wrong answers are the other three bodies: the Assembly, the Air Navigation Commission and the Secretariat. Keep the sequence straight and the whole structure falls into place — the Assembly elects the Council, the Commission recommends Annex amendments, and the Council is the body that actually adopts the SARPs and designates them as Annexes. On the headcounts, answer 36 for the Council and 19 for the Commission: those are the figures the exam uses. Be aware they are changing — the 2016 Protocols amending Articles 50(a) and 56 entered into force on 12 June 2026 and take the Council to 40 and the Commission to 21, with the extra Council seats filled at an Extraordinary Assembly in November 2026.', ref: 'Chicago Convention Arts 43, 48, 50, 54, 56' },
{ q: 'A pilot\'s licence carries an endorsement recording a particular in which it does not meet the relevant ICAO Standard. The holder:', a: ['May not exercise the licence privileges at all until the endorsement is removed', 'May fly internationally, because Article 33 obliges every Contracting State to recognise the licence', 'Must apply to ICAO to have the licence rendered valid', 'May take part in international navigation only with the permission of the State or States whose territory is entered'], c: 3, why: 'Article 33 requires other States to recognise a licence only where it was issued under requirements equal to or above the ICAO minimum standards. Article 39 makes any shortfall visible by endorsing it on the licence, and Article 40 then removes the automatic recognition: the holder needs the permission of the State being entered. The licence remains perfectly valid for flying within its own State of issue.', ref: 'Chicago Convention Arts 33, 39, 40' },
{ q: 'Which of these must be carried on board an aircraft engaged in international navigation under Article 29?', a: ['The pilot\'s personal flying logbook', 'The aircraft maintenance records', 'The journey log book', 'The operator\'s operations manual'], c: 2, why: 'Article 29 lists the certificate of registration, the certificate of airworthiness, the appropriate crew licences and the journey log book, plus three conditional items: the radio station licence if radio is fitted, a passenger list if passengers are carried, and a cargo manifest if cargo is carried. The journey log book is defined separately in Article 34 and records the aircraft, its crew and each journey — it is not your personal logbook, which stays on the ground.', ref: 'Chicago Convention Arts 29, 34' },
{ q: 'Two aeroplanes are converging at approximately the same level. Which one gives way?', a: ['The one that has the other on its left', 'The one that has the other on its right', 'The faster of the two', 'The one at the lower level'], c: 1, why: 'The burden sits with the aircraft that sees the other out to its right. Its half of the bargain is matched by the other aircraft\'s: the one with right of way must maintain heading and speed, so that the give-way pilot has something predictable to plan around.', ref: 'SERA.3210(c)(2)' },
{ q: 'Two aircraft are approaching head-on, or approximately so, and there is a danger of collision. What must happen?', a: ['The aircraft with the other on its right alters heading to the right', 'Both alter heading to the left', 'The lower aircraft gives way to the higher', 'Both alter heading to the right'], c: 3, why: 'Head-on is the only encounter in which both aircraft act. A right turn is chosen because it is symmetrical — it still opens the gap even if only one of the two pilots has seen the other.', ref: 'SERA.3210(c)(1)' },
{ q: 'You are in a PA-28 converging with an aeroplane that is towing a glider. The tug is on your left. Who gives way?', a: ['You, because power-driven aircraft give way to aircraft seen to be towing', 'The tug, because it has you on its right', 'Neither — both alter heading to the right', 'The aircraft at the higher level'], c: 0, why: 'The towing exception overrides the has-the-other-on-its-right rule, so the plain converging answer is wrong here. A tug on a wire has almost no ability to manoeuvre; UK rule 8 of the Rules of the Air Regulations 2015 also treats the tug and glider as one aircraft, commanded by the tug pilot.', ref: 'SERA.3210(c)(2)(iv)' },
{ q: 'Which of these has right of way over all of the others?', a: ['An airship', 'A sailplane', 'A balloon', 'An aeroplane towing a banner'], c: 2, why: 'The ladder runs balloons, then sailplanes, then airships, then power-driven aeroplanes. A towing aeroplane outranks other powered aircraft, but it is still power-driven, so it gives way to a balloon.', ref: 'SERA.3210(c)(2)' },
{ q: 'Two aeroplanes are approaching the same aerodrome to land, one 500 ft above the other. What applies?', a: ['The lower gives way to the higher', 'The faster gives way to the slower', 'Whichever called the aerodrome first has priority', 'The higher gives way to the lower, but the lower must not cut in front of an aircraft in the final stages of an approach'], c: 3, why: 'The lower aircraft is further committed and has fewer options, so it keeps its place. The proviso stops the rule being used as a queue-jump: you may not dive below an aircraft already on final and slot in ahead of it.', ref: 'SERA.3210(c)(4)(i)' },
{ q: 'You are overtaking another aeroplane in the cruise. You must:', a: ['Alter heading to the left and pass down its left side', 'Alter heading to the right and keep clear until entirely past and clear', 'Climb at least 500 ft before passing', 'Descend and pass beneath it'], c: 1, why: 'The overtaking aircraft alters heading to the right whether it is climbing, descending or level, and no later change in relative position releases it from that duty. Overtaking is defined geometrically: approaching from the rear within less than 70 degrees of the other\'s plane of symmetry.', ref: 'SERA.3210(c)(3)' },
{ q: 'An aeroplane in flight is fitted with anti-collision lights to meet the night requirement. When must they be displayed?', a: ['At night only', 'At night, and by day only in controlled airspace', 'By day as well as at night', 'Only while taxiing or under tow'], c: 2, why: 'Conspicuity matters most in daylight see-and-avoid, so lights fitted for the night rule are required by day too. The consequences of failure differ: a light failure at night means landing as soon as you safely can unless ATC authorises you to continue, while a day anti-collision failure lets you carry on and have it repaired at the earliest practicable opportunity.', ref: 'SERA.3215(c); RoA 2015 rule 15' },
{ q: 'A steady red light is directed at your aircraft while you are in the circuit. It means:', a: ['Stop', 'Aerodrome unsafe, do not land', 'Give way to other aircraft and continue circling', 'Notwithstanding any previous instructions, do not land for the time being'], c: 2, why: 'Every light-gun signal has two meanings and you must pick the column for an aircraft in flight. \'Stop\' is the steady red for an aircraft on the ground; \'aerodrome unsafe, do not land\' is a series of red flashes; the \'notwithstanding\' wording belongs to the red pyrotechnic.', ref: 'SERA Appendix 1, 3.1.1' },
{ q: 'You are holding on the taxiway when the tower directs a series of white flashes at you. You should:', a: ['Taxi clear of the landing area in use', 'Return to your starting point on the aerodrome', 'Land at this aerodrome and proceed to the apron', 'Continue taxiing to the holding point and wait'], c: 1, why: 'White flashes on the ground send you back where you started. \'Land at this aerodrome and proceed to apron\' is the same signal read from the in-flight column; \'taxi clear of the landing area in use\' is a series of red flashes on the ground.', ref: 'SERA Appendix 1, 3.1.1' },
{ q: 'A red square panel bearing a single yellow diagonal is displayed in the signals area. This indicates:', a: ['Landing is prohibited and the prohibition is liable to be prolonged', 'Gliding is in progress', 'Right-hand circuits are in force', 'Special precautions must be observed when approaching to land or landing'], c: 3, why: 'Count the diagonals: two yellow diagonals ban landing outright, one warns you that the manoeuvring area or something else about the aerodrome needs care. Gliding is a double white cross and a right-hand circuit is a right-hand arrow.', ref: 'SERA Appendix 1, 3.2.2.1' },
{ q: 'A marshaller fully extends both arms to the sides and sweeps them slowly upwards until they cross above the head. This means:', a: ['Normal stop', 'Emergency stop', 'Chocks inserted', 'Hold position and stand by'], c: 0, why: 'The crossed-arms shape is the stop signal; it is the speed that separates the two. Slow and deliberate is a normal stop, abrupt is an emergency stop. Chocks inserted is a jabbing motion inwards above the head, and hold position is arms extended downwards at 45 degrees.', ref: 'SERA Appendix 1, Section 4; CAP 637 Table E' },
{ q: 'Survivors have laid out a large letter X on the ground. They are signalling:', a: ['Proceeding in this direction', 'No, or negative', 'Require medical assistance', 'Require assistance'], c: 2, why: 'X is the medical one, and it is the letter most often confused with V, which is the general \'require assistance\'. N means no, Y means yes, and an arrow means proceeding in this direction. The symbols must be at least 2.5 m (8 ft) long to be readable from the air.', ref: 'ICAO Annex 12, Appendix' },
{ q: 'At night, an aircraft overhead a ground party indicates that their visual signal has been understood by:', a: ['Rocking its wings', 'Flashing its landing lights on and off twice', 'Circling the site once at low level', 'Firing a green pyrotechnic'], c: 1, why: 'Rocking the wings is the daylight acknowledgement; at night it is the landing lights flashed on and off twice, or the navigation lights if no landing light is fitted. If no acknowledgement is made at all, that means the ground signal was not understood.', ref: 'ICAO Annex 12, Appendix' },
{ q: 'Your radio fails during a VFR flight in VMC in UK airspace. The correct actions are to:', a: ['Squawk 7700, continue to destination and land without further action', 'Squawk 0030 and return to the departure aerodrome', 'Squawk 7601, maintain VMC and land at the nearest suitable aerodrome', 'Squawk 7600, remain in VMC, land at the nearest suitable aerodrome and report your arrival'], c: 3, why: '7600 is the radio-failure code in UK airspace. 7601 is an EU code introduced in May 2025 that the UK has not adopted, 0030 is the UK code for being lost, and 7700 is for an emergency. Annex 2 then requires a VFR flight to continue in VMC, land at the nearest suitable aerodrome and report its arrival by the most expeditious means.', ref: 'SERA.13005(a)(2); ICAO Annex 2, 3.6.5.2.1 a); UK AIP ENR 1.1' },
{ q: 'A runway is designated 04. Its centreline points approximately:', a: ['004° magnetic', '040° true', '040° magnetic', '220° magnetic'], c: 2, why: 'The designator is the magnetic direction of the centreline to the nearest ten degrees, seen from the direction of approach, written as two digits with the leading zero kept. The reciprocal end of the same strip is 22, which differs by 18.', ref: 'Runway designation marking' },
{ q: 'Taxiing towards a runway you reach a marking of two solid and two dashed yellow lines. You should stop:', a: ['Before the solid lines — the dashed pair lies on the runway side', 'Before the dashed lines — the solid pair lies on the runway side', 'With the nosewheel between the two pairs of lines', 'Anywhere short of the runway edge lighting'], c: 0, why: 'In a Pattern A runway holding position marking the broken lines are the pair nearer the runway, so approaching from the taxiway you meet the solid lines first. Hold close up to the marking with no part of the aircraft beyond it.', ref: 'CAP 637 Ch 2, runway taxi-holding position' },
{ q: 'Yellow chevrons are painted on the paved area before a displaced threshold. In the UK that area is:', a: ['Fit for the take-off run but not for landing', 'Fit for use as a stopway, but not for the normal movement of aircraft', 'Unfit for aircraft and unsuitable even as a stopway', 'The clearway'], c: 1, why: 'CAP 637 marks the pre-threshold area three ways, and the chevron is the one most often misremembered. White arrows leading to the threshold bar: fit for aircraft, usable as a starter extension for take-off and for taxiing, but not for landing. Yellow chevrons: fit as a stopway for an aircraft landing in the opposite direction, but not for the normal movement of aircraft. White crosses, the closed marking: unfit for aircraft and unsuitable as a stopway — that is the one that means keep off entirely. US practice puts the keep-off meaning on the chevron, so do not answer from habit.', ref: 'CAP 637 Ch 2, Figure 2.1(d)' },
{ q: 'A sign with black characters and an arrow on a yellow background is:', a: ['A mandatory instruction sign', 'A location sign', 'A direction sign', 'A runway holding position sign'], c: 2, why: 'Colour identifies the sign\'s job. Black on yellow with an arrow points the way (direction or destination). Yellow on black with a yellow border tells you where you are. White on red is mandatory — holding positions and No Entry — and you do not pass it without a clearance.', ref: 'CAP 637 Ch 3, signs' },
{ q: 'On a night approach, the line of green lights across the runway ahead marks:', a: ['The runway end', 'The start of the landing distance available', 'The aiming point', 'The last 300 m of runway'], c: 1, why: 'Threshold lighting is green seen from the approach and marks where the landing distance available begins — do not land before it. Red lights across the far end mark the limit of runway available for manoeuvring.', ref: 'CAP 637 Ch 1, runway threshold and end lighting' },
{ q: 'You see one white and three red lights on the PAPI. You are:', a: ['On the correct approach path', 'Slightly above the approach path', 'Slightly below the approach path', 'Well below the approach path'], c: 2, why: 'The four units read from all white (too high) through three white one red, two and two on slope, one white three red, to all red (too low). One white means you still have some margin — four red means you have none.', ref: 'PAPI indications' },
{ q: 'Yellow runway edge lights over the final part of a runway indicate:', a: ['The runway is closed', 'You are in the touchdown zone', 'An exit taxiway', 'A caution zone warning that the runway end is approaching'], c: 3, why: 'On ILS-equipped runways without centreline lighting the upwind 600 m, or one third of the lighted length if that is less, is lit yellow as a caution zone. Where centreline lighting is fitted the same warning is given by its red and white coding instead.', ref: 'CAP 637 Ch 1, caution zone lighting' }
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
{ f: 'Squawk 7000 versus 2000', b: 'Both are conspicuity codes for when ATS has given you no specific transponder instruction. 7000 if you are VFR, 2000 if you are IFR.', ref: 'UK AIP ENR 1.6 / AIC 128/2019' },
{ f: 'RMZ versus TMZ', b: 'RMZ: radio — listening watch and two-way communication. TMZ: transponder with the notified mode and code.', ref: 'SERA App IV' },
{ f: 'Sole objective of an Annex 13 investigation', b: 'The prevention of accidents and incidents. Not blame or liability.', ref: 'Annex 13' },
{ f: 'Prohibited, restricted, danger area', b: 'Prohibited: no flight. Restricted: flight subject to specified conditions. Danger: dangerous activities may take place at notified times.', ref: 'Annex 2' },
{ f: 'Does a Basic Service monitor you for traffic?', b: 'No. Generic information only; collision avoidance is entirely yours.', ref: 'UK FIS' },
{ f: 'Chicago Convention Article 1 — what does it establish?', b: 'Every State has complete and exclusive sovereignty over the airspace above its territory.', ref: 'Chicago Art 1' },
{ f: 'Non-scheduled vs scheduled international flight — permission needed?', b: 'Non-scheduled (Art 5): no prior permission, subject to the State\'s right to require a landing. Scheduled (Art 6): the State\'s special permission is required.', ref: 'Chicago Arts 5, 6' },
{ f: 'In how many States may an aircraft be registered?', b: 'One only. Registration may be transferred from one State to another, but never held in two at once.', ref: 'Chicago Art 18' },
{ f: 'Article 29 — documents carried in an aircraft in international navigation', b: 'Certificate of registration; certificate of airworthiness; crew licences; journey log book. Plus, if applicable: radio station licence, passenger list, cargo manifest.', ref: 'Chicago Art 29' },
{ f: 'Standard vs Recommended Practice', b: 'Standard: necessary — States will conform, and differences must be notified (Art 38). Recommended Practice: desirable — States endeavour to conform, no notification duty.', ref: 'ICAO Annex Foreword' },
{ f: 'Article 38 — deadline to notify the Council after a Standard is amended', b: '60 days from adoption of the amendment, or state the action proposed instead.', ref: 'Chicago Art 38' },
{ f: 'Who adopts the ICAO Annexes?', b: 'The Council — a permanent body of Member States elected by the Assembly for three years. The Air Navigation Commission, a body of appointed experts, only recommends amendments.', ref: 'Chicago Arts 50, 54, 56' },
{ f: 'How many States sit on the ICAO Council, and how many experts on the Air Navigation Commission?', b: 'Answer 36 and 19 in the exam. Both are rising: the 2016 Protocols amending Arts 50(a) and 56 came into force on 12 June 2026, taking the Council to 40 and the Commission to 21, with the extra Council seats filled at an Extraordinary Assembly in November 2026.', ref: 'Chicago Arts 50(a), 56; ICAO, 12 June 2026' },
{ f: 'Where are UK differences from ICAO SARPs published?', b: 'UK AIP GEN 1.7.', ref: 'UK AIP GEN 1.7' },
{ f: 'Head-on with danger of collision — who acts, and which way?', b: 'Both aircraft. Each alters heading to the right.', ref: 'SERA.3210(c)(1)' },
{ f: 'Converging at about the same level — who gives way?', b: 'The aircraft that has the other on its right. The one with right of way maintains heading and speed.', ref: 'SERA.3210(c)(2)' },
{ f: 'Right-of-way ladder, top to bottom', b: 'Balloons, sailplanes, airships, then power-driven aeroplanes. Powered aircraft also give way to any aircraft seen to be towing.', ref: 'SERA.3210(c)(2)' },
{ f: 'Overtaking — the defining angle, and the action', b: 'Approaching from the rear within less than 70 degrees of the other\'s plane of symmetry. Alter heading to the right until entirely past and clear. Exception: a sailplane overtaking another sailplane may go right or left.', ref: 'SERA.3210(c)(3) and (c)(3)(i)' },
{ f: 'Two aeroplanes approaching to land at different levels', b: 'The higher gives way to the lower — but the lower must not cut in front of, or overtake, an aircraft in the final stages of an approach.', ref: 'SERA.3210(c)(4)(i)' },
{ f: 'Taxiing head-on with another aircraft', b: 'Both stop, or where practicable alter course to the right, so as to keep well clear.', ref: 'SERA.3210(d)(1)(i)' },
{ f: 'Anti-collision lights — when on?', b: 'Night and day. Lights fitted for the night requirement must also be displayed by day.', ref: 'SERA.3215(c)' },
{ f: 'Formation flight in controlled airspace — spacing from the leader', b: 'Not more than 1 km (0.5 NM) laterally and longitudinally, and 30 m (100 ft) vertically. Pre-arranged between the pilots-in-command.', ref: 'SERA.3135' },
{ f: 'Steady green light signal — in flight, and on the ground?', b: 'In flight: cleared to land. On the ground: cleared for take-off.', ref: 'SERA App 1, 3.1.1' },
{ f: 'Series of green flashes to an aircraft in flight?', b: 'Return for landing. Not a clearance — the clearance to land and taxi follows in due course.', ref: 'SERA App 1, 3.1.1' },
{ f: 'Red pyrotechnic — meaning, and to whom?', b: 'Notwithstanding any previous instructions, do not land for the time being. Aircraft in flight only; no ground meaning.', ref: 'SERA App 1, 3.1.1' },
{ f: 'How do you acknowledge a light signal in flight, by day and by night?', b: 'Day: rock the wings, except on the base and final legs. Night: flash landing lights on and off twice, or navigation lights if none fitted.', ref: 'SERA App 1, 3.1.2' },
{ f: 'Signals area: red square with two yellow diagonals, versus one?', b: 'Two: landing prohibited, and the prohibition is liable to be prolonged. One: special precautions needed when approaching or landing.', ref: 'SERA App 1, 3.2.1-3.2.2' },
{ f: 'Crosses displayed on a runway and on a taxiway — colour and meaning?', b: 'White on runways, yellow on taxiways. The area is unfit for the movement of aircraft.', ref: 'SERA App 1, 3.2.4' },
{ f: 'Ground-to-air survivor code: V, X, N, Y, arrow?', b: 'V require assistance; X require medical assistance; N no; Y yes; arrow proceeding in this direction. Symbols at least 2.5 m (8 ft) long.', ref: 'ICAO Annex 12, Appendix' },
{ f: 'VFR, in VMC, radio fails — squawk and procedure?', b: 'Squawk 7600. Stay in VMC and clear of controlled airspace, land at the nearest suitable aerodrome, report arrival by the most expeditious means. Watch for light signals overhead.', ref: 'SERA.13005(a)(2); ICAO Annex 2, 3.6.5.2.1' },
{ f: 'Runway markings — what colour? Taxiway and apron markings?', b: 'Runway white. Taxiway and apron yellow.', ref: 'CAP 637 Ch 2' },
{ f: 'Runway 05 — magnetic direction, and the designator at the other end?', b: 'About 050°M. The other end is 23.', ref: 'Runway designation' },
{ f: 'Pattern A holding position marking — which side do you stop on?', b: 'The solid side. The two dashed lines are the pair nearer the runway.', ref: 'CAP 637 Ch 2' },
{ f: 'Before a displaced threshold: white arrows, white crosses, yellow chevrons?', b: 'Arrows — fit for aircraft, starter extension for take-off and taxiing, not for landing. Crosses — unfit for aircraft, not even a stopway, keep off. Chevrons — fit as a stopway for a landing in the opposite direction, but not for normal movement.', ref: 'CAP 637 Ch 2, Figure 2.1(d)' },
{ f: 'Sign colours: mandatory, location, direction?', b: 'Mandatory white on red. Location yellow on black with a yellow border. Direction black on yellow.', ref: 'CAP 637 Ch 3' },
{ f: 'Threshold, runway edge and runway end lighting — colours?', b: 'Threshold green, edge white, end red.', ref: 'CAP 637 Ch 1' },
{ f: 'Taxiway edge and taxiway centreline lighting — colours?', b: 'Edge blue, centreline green. A lit stop bar is red.', ref: 'CAP 637 Ch 1' },
{ f: 'PAPI showing three red and one white?', b: 'Slightly low. Two white two red is on slope; four red is too low.', ref: 'PAPI indications' }
]
};
