/* 070 Operational Procedures — articles, quiz bank, flashcards.
   Note: much of this subject overlaps Air Law and Human Performance, which is why
   Pooleys recommend sitting it last. */
window.SC = window.SC || {};
window.SC['070'] = {
articles: [
{
  id: '070-aerodrome', title: 'Aerodrome operations and the circuit', mins: 7, tags: ['070.02', '070.03'],
  body: `
<h3>Markings and signals</h3>
<figure data-d="taxisigns"></figure>
<p>Runway markings are <b>white</b>; taxiway markings are <b>yellow</b>. The runway designator is
the magnetic direction to the nearest ten degrees, rounded, with the leading zero retained —
so runway 05 is aligned about 050&deg; magnetic, and its reciprocal is 23. Parallel runways carry
L, C and R.</p>
<ul>
<li><b>Threshold markings</b> — the piano keys; the number of stripes indicates runway width.</li>
<li><b>Displaced threshold</b> — arrows leading to a transverse bar; the paved area before it may
be used for taxiing and take-off run but not for landing.</li>
<li><b>Runway holding position</b> — two solid and two dashed yellow lines. Never cross the
<b>solid</b> side without a clearance; that is the runway incursion line.</li>
<li><b>Closed runway or taxiway</b> — a white or yellow <b>cross</b>.</li>
<li><b>Unserviceable area</b> — unserviceability markers: boards, cones or flags in
orange-and-white or red-and-white stripes, with red unserviceability lights at night.</li>
</ul>

<h3>The signals square</h3>
<figure data-d="signalsquare"></figure>
<p>A ground square near the tower carrying visual signals for aircraft without radio:</p>
<ul>
<li><b>White dumb-bell</b> — land, take off <b>and taxi</b> on runways and taxiways only.</li>
<li><b>Dumb-bell with a black bar across each circle</b> — land and take off on runways only,
but <b>other manoeuvres need not</b> be confined to runways and taxiways. The bars
<em>relax</em> the restriction; they do not add one.</li>
<li><b>Red square panel with yellow diagonals</b> (two, forming an X) — <b>landing is
prohibited</b>, and the prohibition is liable to be prolonged.</li>
<li><b>Red square panel with a single yellow diagonal</b> — <b>special precautions</b> must be
observed in approaching to land or in landing. Landing is permitted, with care.</li>
<li><b>White landing T</b> — land and take off parallel to the shaft of the T, towards the
crossarm.</li>
<li><b>White double cross</b> — glider flying in progress.</li>
<li><b>Right-hand traffic arrow</b> — turns are to the right.</li>
<li><b>Black C on yellow</b> — reporting office.</li>
</ul>

<h3>Light signals from the tower</h3>
<figure data-d="lightsignals"></figure>
<table>
<thead><tr><th>Signal</th><th>To an aircraft in flight</th><th>To an aircraft on the ground</th></tr></thead>
<tbody>
<tr><td><b>Steady green</b></td><td>Cleared to land</td><td>Cleared for take-off</td></tr>
<tr><td><b>Steady red</b></td><td>Give way to other aircraft and continue circling</td><td>Stop</td></tr>
<tr><td><b>Green flashes</b></td><td>Return for landing</td><td>Cleared to taxi</td></tr>
<tr><td><b>Red flashes</b></td><td>Aerodrome unsafe, do not land</td><td>Taxi clear of the landing area in use</td></tr>
<tr><td><b>White flashes</b></td><td>Land at this aerodrome and proceed to the apron</td><td>Return to the starting point on the aerodrome</td></tr>
<tr><td><b>Red pyrotechnic</b></td><td>Do not land for the time being</td><td>—</td></tr>
</tbody></table>
<p>The pattern is worth noticing: <b>green means permission, red means stop or don't, flashes
soften the meaning</b>. Acknowledge by day <b>in flight</b> by rocking the wings — though not on the base or final
leg of the approach — and <b>on the ground</b> by moving the ailerons or rudder. By night, in
the air and on the ground alike, flash the landing lights on and off twice, or the navigation
lights if you carry no landing light (SERA Appendix 1, 3.1.2).</p>

<h3>Runway and approach lighting</h3>
<p>Runway edge lights are <b>white</b>; the <b>threshold</b> is <b>green</b> (seen on approach);
the <b>runway end</b> is <b>red</b>; taxiway edge lights are <b>blue</b> and taxiway centreline
lights <b>green</b>. On a precision runway the last 600 m of edge lighting is <b>yellow</b> as a
caution.</p>
<p><b>PAPI</b>: four lights either side of the runway. <b>All white</b> — too high. <b>All
red</b> — too low ("all red, you're dead"). <b>Two white, two red</b> — on the correct
approach path, typically 3&deg;. Three white one red is slightly high; one white three red
slightly low.</p>

<figure data-d="papi"></figure>
<h3>The circuit</h3>
<p>Standard circuit direction is <b>left-hand</b> unless otherwise notified. The pattern is
take-off, <b>crosswind</b>, <b>downwind</b>, <b>base</b>, <b>final</b>. Circuit height is
commonly 1000 ft aal but is aerodrome-specific — check the plate. Rules that matter:</p>
<ul>
<li><b>Join</b> as notified. The standard overhead join is: arrive overhead at 2000 ft aal,
identify the runway and signals, descend on the dead side to circuit height, cross the upwind
end and join downwind.</li>
<li>An aircraft <b>on final</b> has right of way over one on the ground or in the circuit.
When two are approaching to land, the <b>lower</b> aircraft has right of way — but must not cut
in front of or overtake one already on final.</li>
<li>All turns in the circuit are in the notified direction. Make your calls, and look out —
the circuit is where the mid-air risk concentrates.</li>
</ul>

<figure data-d="circuit"></figure>
<h3>Right of way, generally</h3>
<ul>
<li><b>Head-on</b>: both alter <b>heading to the right</b>.</li>
<li><b>Converging</b> at approximately the same level: the aircraft with the other <b>on its
right</b> gives way.</li>
<li><b>Overtaking</b>: the overtaking aircraft alters course to the <b>right</b> and keeps clear;
the overtaken aircraft has right of way.</li>
<li><b>Order of precedence</b>: balloons, then gliders, then airships, then aeroplanes — the
least manoeuvrable has priority. Also, an aircraft <b>towing</b> another or in <b>emergency</b>
has priority, and power-driven aircraft give way to those towing.</li>
</ul>

<h3>Marshalling signals</h3>
<p>A marshaller guides you into or out of a parking position on the apron. The signals are
prescribed in <b>SERA Appendix 1, section 4</b> and may be used for nothing else. For an aeroplane
the marshaller stands on the <b>left</b>, where you can best see them, in a fluorescent vest, with
bats, wands or gloves by day and <b>illuminated wands</b> at night or in poor visibility
(SERA.3301). Directions are given <b>from your point of view</b>, not theirs.</p>
<table>
<thead><tr><th>Signal from the marshaller</th><th>Meaning and your action</th></tr></thead>
<tbody>
<tr><td>Both arms up, then swung out to point</td><td><b>Proceed to the next marshaller</b>, or as directed — taxi on that way</td></tr>
<tr><td>Arms bent at the elbows, beckoning chest to head</td><td><b>Straight ahead</b>, move forward</td></tr>
<tr><td>One arm held out at 90&deg;, the other beckoning</td><td><b>Turn left</b> or <b>turn right</b>: turn towards the still arm, at the rate the other beckons</td></tr>
<tr><td>Arms down, patting gesture from waist to knees</td><td><b>Slow down</b></td></tr>
<tr><td>Arms raised slowly until the wands cross overhead</td><td><b>Normal stop</b>. Done <b>abruptly</b>, it is an <b>emergency stop</b> — stop at once</td></tr>
<tr><td>Raised open palm closed into a fist, or a fist opened</td><td><b>Set brakes</b> or <b>release brakes</b>; acknowledge with a thumbs up</td></tr>
<tr><td>Wands overhead, jabbed inwards or outwards</td><td><b>Chocks inserted</b> or <b>chocks removed</b></td></tr>
<tr><td>One hand circling at head level, other arm pointing</td><td><b>Start</b> the engine indicated</td></tr>
<tr><td>Wand drawn across the throat</td><td><b>Cut engines</b></td></tr>
<tr><td>Thumb up, or one arm raised with the wand up</td><td><b>Affirmative, all clear</b>. A standard <b>salute</b> is dispatch: taxi</td></tr>
</tbody></table>
<p>Five signals go the other way, made in the cockpit with hands plainly visible (SERA
Appendix 1, 4.2): <b>brakes engaged</b> — fingers extended in front of your face, then a clenched
fist, the moment the fist closes being the moment the brakes go on; <b>brakes released</b> — fist,
then fingers extended; <b>insert chocks</b> — palms outward, hands drawn in to cross in front of
the face; <b>remove chocks</b> — crossed hands moved outwards; and <b>ready to start</b> — raise
the number of fingers of the engine to be started.</p>
<p>Before signalling, the marshaller must check that the area you are being guided into is
<b>clear of objects you might strike</b> (SERA Appendix 1, 4.1.2). That does not hand over the
aeroplane: under <b>SERA.2010(a)</b> the pilot-in-command stays responsible for its operation, so
stop if a signal would take you somewhere you are unhappy with.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Steady green to an aircraft in flight means <b>cleared to land</b>; on the ground it means
<b>cleared for take-off</b>.</li>
<li>Taxiway lights <b>blue</b> edge, <b>green</b> centreline. Threshold green, runway end red.</li>
<li>PAPI: all red, you're dead.</li>
<li>Never cross the <b>solid</b> side of the holding position markings without clearance.</li>
<li>Head-on: <b>both</b> turn right.</li>
</ul></div>`
},
{
  id: '070-emergency', title: 'Emergencies and abnormal procedures', mins: 7, tags: ['070.05', '070.06'],
  body: `
<h3>The universal order</h3>
<p>Whatever happens: <b>aviate, navigate, communicate</b>. Fly the aeroplane first. The number of
accidents caused by a pilot troubleshooting a minor problem while failing to fly is depressingly
large.</p>

<h3>Engine failure after take-off</h3>
<figure data-d="turnback"></figure>
<p>The one that needs to be a reflex, because there is no time to think. Below a briefed height,
the answer is <b>land ahead</b> — attempting to turn back at low level is the classic fatal
decision, because the turn costs height and airspeed and the stall speed rises in the bank.</p>
<ol>
<li>Attitude for the <b>glide speed</b> immediately — this is the only action that buys you
options.</li>
<li>Choose the landing area, broadly ahead, accepting a shallow turn at most.</li>
<li>If height and time permit: fuel, mixture, throttle, magnetos, carb heat, change tanks, boost
pump.</li>
<li>Fuel off, ignition off, master off before touchdown; harnesses tight; door unlatched.</li>
<li>Mayday if there is time — but not before the aeroplane is under control and pointed
somewhere survivable.</li>
</ol>

<h3>Engine failure in the cruise — the forced landing</h3>
<p>Sequence: <b>attitude, area, approach, actions</b>. Establish the glide, pick a field, plan a
pattern that lets you adjust, then run the checks and make the call.</p>
<p>Field selection, in order: <b>size</b>, <b>shape</b>, <b>slope</b>, <b>surface</b>,
<b>surroundings</b>, and <b>wind</b>. Land into wind if the field allows, but a bigger field
downwind may beat a small one into wind. Aim to arrive at a chosen point with height to spare and
lose the excess with flap or a sideslip rather than stretching a glide — stretching kills.</p>

<h3>Fire</h3>
<ul>
<li><b>Engine fire in flight</b>: fuel <b>off</b>, mixture idle cut-off, throttle closed,
magnetos off, cabin heat/vents <b>closed</b> to avoid drawing smoke in, then a forced landing
without power. Do not attempt a restart.</li>
<li><b>Engine fire on start</b>: keep cranking to try to draw the fire into the engine; if it
does not go out, fuel off, magnetos off, evacuate, and use the extinguisher from outside.</li>
<li><b>Cabin fire</b>: identify and isolate the source, master off if electrical, use the
extinguisher, then <b>ventilate</b> — and land as soon as possible. Note the sequence: an
electrical fire needs the power off first, and ventilation after the extinguisher, not before.</li>
</ul>

<h3>Radio failure</h3>
<p>Check the obvious first: volume, correct frequency, correct box, headset plugs, squelch,
circuit breaker, and whether the microphone is stuck (which blocks the frequency for everyone).
Then <b>squawk 7600</b>. Continue in accordance with your clearance if you have one, and if you
must land at a controlled aerodrome, join and look for <b>light signals</b>, acknowledging by
rocking the wings. If you might be transmitting but not receiving, say so blind, and consider a
<b>transmitting blind</b> call at intervals.</p>

<h3>Transponder and emergency codes</h3>
<p><b>7700</b> emergency, <b>7600</b> radio failure, <b>7500</b> unlawful interference,
<b>7000</b> conspicuity if you are VFR and have had no specific transponder instruction, <b>2000</b> the same but IFR.
Selecting 7700 attracts immediate attention from every radar unit that can see you, which is
usually exactly what you want.</p>

<h3>Emergency equipment</h3>
<p>Know where they are and how they work, on the aircraft you actually fly: the <b>fire
extinguisher</b> and its type, the <b>first aid kit</b>, the <b>ELT</b> or PLB and how to
activate it, lifejackets and where they are stowed, the <b>door and canopy release</b>, and how
to open the door in a hurry with a bent airframe — which is why you unlatch it before an
off-airfield landing.</p>

<h3>Other abnormals worth having thought about</h3>
<ul>
<li><b>Rough running</b>: carb heat, mixture, change tanks, check the magnetos individually,
consider partial power and a precautionary landing.</li>
<li><b>Electrical failure</b>: shed loads, expect no flaps if they are electric, land at a
suitable aerodrome.</li>
<li><b>Vacuum failure</b>: AI and DI unreliable. Fly on the turn indicator, ASI, altimeter and
compass, and stay visual.</li>
<li><b>Smoke or fumes</b>: fresh air, heater off, consider CO, land.</li>
<li><b>Bird strike</b>: check for damage and control response, reduce speed, and land at the
nearest suitable aerodrome; report it.</li>
<li><b>Precautionary landing</b> — a deliberate landing with power at a chosen site because
continuing is unwise (weather, fuel, doubt about position, a sick passenger). It is a decision, not
a failure, and made early it is easy.</li>
</ul>

<h3>Passengers, evacuation and afterwards</h3>
<p>The legal brief is given "before or, where appropriate, <b>during</b> the flight"
(NCO.OP.130; ANO 2016 article 73 for non-Part-21 aircraft), so the brief on the way down is part
of the requirement, not an extra. Say what is happening in one sentence, then give the
instructions in the order they will be used:</p>
<ul>
<li><b>Harnesses tight</b> — pull the slack out of an inertia reel and lock it. Seat backs
upright, seats locked in their rails.</li>
<li><b>Loose articles secured.</b> Bags, bottles and cameras become missiles at impact.</li>
<li><b>Headsets off</b> before touchdown.</li>
<li><b>Doors unlatched</b> on short final — unlatched, not swung open.</li>
<li><b>Brace on your call</b> of "brace, brace, brace". With a shoulder harness: head forward,
chin on the chest, palms under the thighs or arms crossed in front, feet flat on the floor, body
<b>relaxed</b> — a rigid body is more easily injured. With a lap belt only: head down towards the
knees, hands one over the other on top of the head, fingers not interlocked.</li>
<li><b>Who opens what, and where to go</b> — name the person on each door, say who helps anyone
who cannot get out alone, and give a meeting point <b>upwind</b> and well clear.</li>
</ul>
<p>Shut down as you commit to the field: <b>fuel selector off, mixture idle cut-off, magnetos
off</b> and, once the flap you want is selected and the Mayday made, <b>master off</b>. After
touchdown get everyone out, <b>count them</b>, and move upwind with the first aid kit, a beacon
and something warm.</p>
<p>The order afterwards is <b>casualties, shelter, being found</b>. Dial <b>999</b> if you have a
signal. Switch the ELT or PLB on <b>without delay</b> — COSPAS-SARSAT detects 406 MHz throughout
the UK search and rescue region, so there is nothing to gain by waiting. Stay with the aeroplane;
it is far easier to spot than people are. Ground-to-air symbols should be at least <b>2.5 m
(8 ft)</b> long: <b>V</b> require assistance, <b>X</b> require medical assistance.</p>
<p>Do not move the aircraft. Pending the investigators' arrival <b>nobody may modify the site or
move the wreckage</b>, except for safety reasons, to help the injured, or with the express
permission of the authorities in control of the site (Regulation 996/2010, Article 13(2)). Notify
the <b>AAIB without delay</b> — and an accident to the <b>police</b> as well.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Engine failure after take-off at low level: <b>land ahead</b>. Do not turn back.</li>
<li>Cabin fire: extinguish <b>then</b> ventilate. Master off first if electrical.</li>
<li>Engine fire in flight: cabin heat and vents <b>closed</b>.</li>
<li>Forced landing field selection: size, shape, slope, surface, surroundings, wind.</li>
</ul></div>`
},
{
  id: '070-hazards', title: 'Special operational hazards', mins: 6, tags: ['070.04', '070.07'],
  body: `
<h3>Wake turbulence</h3>
<figure data-d="wakeavoid"></figure>
<p>Two counter-rotating vortices from the wingtips, strongest when the generating aircraft is
<b>heavy, slow and clean</b>. They sink at roughly 300 to 500 ft/min, level off about 900 ft below
the generating aircraft's path, and drift with the wind — so a light crosswind can hold one over
the runway, or move it onto a parallel one.</p>
<p>The practical rules:</p>
<ul>
<li><b>Landing behind a departing aircraft</b>: touch down <b>before</b> its rotation point.</li>
<li><b>Landing behind a landing aircraft</b>: stay above its approach path and touch down
<b>beyond</b> its touchdown point.</li>
<li><b>Departing behind a departing aircraft</b>: rotate <b>before</b> its rotation point and
climb above and upwind of its path.</li>
<li>When in doubt, wait. Time is cheap; a wake-induced roll at 200 ft is not. Note also that
helicopter downwash and jet blast are separate hazards on the ground.</li>
</ul>

<h3>Wind shear</h3>
<p>A change of wind speed or direction over a short distance. Sources: thunderstorms and
microbursts, fronts, temperature inversions, and terrain or buildings near the runway. Effects on
approach: a decreasing headwind or increasing tailwind causes an <b>immediate loss of indicated
airspeed and lift</b>, and the aeroplane sinks below the profile. Recognition: unexpected airspeed
excursions, a changing rate of descent, and an unusual power requirement.</p>
<p>The response is a <b>go-around, flown early and with full power</b>. Attempting to correct with
small adjustments while continuing the approach is how aircraft arrive short.</p>

<h3>Contaminated runways</h3>
<p>Water, slush, snow or ice. Two consequences: reduced braking (a longer landing roll and a
longer accelerate-stop distance) and, for loose contaminants, <b>displacement and impingement
drag</b> which slows acceleration on the take-off run. Standing water also brings
<b>hydroplaning</b> — the tyre riding on a water film, with total loss of braking and steering,
at roughly <b>9 times the square root of the tyre pressure in psi</b> in knots.</p>
<p>Technique on a wet or contaminated surface: land firmly to break the water film, use
aerodynamic braking first, and apply the wheel brakes progressively rather than hard and early.
On grass, expect a longer take-off and much worse braking when wet.</p>

<h3>Icing on the ground and in flight</h3>
<p>Any frost, snow or ice on the wings, tail or control surfaces must be <b>removed before
flight</b> — not polished, not partially cleared. Even a thin layer of frost badly degrades
C<sub>L</sub> max and can prevent the aircraft flying at all. In flight, avoid visible moisture
near and below freezing in an aircraft with no ice protection, and if you pick up ice, change
altitude to leave the icing layer and land as soon as practicable. Increase your approach speed
if you carry ice, because the stall speed has risen by an amount you cannot know.</p>

<h3>Other hazards</h3>
<ul>
<li><b>Bird strike</b> risk peaks at low level near coasts, estuaries, landfill and at dawn and
dusk. Birds usually dive to avoid — so climb if a collision looks imminent.</li>
<li><b>Noise abatement</b>: comply with published procedures and avoid overflying habitation.
Being a good neighbour keeps aerodromes open.</li>
<li><b>Laser illumination</b> and unauthorised drone sightings should be reported. Do not stare at
a laser source; shield your eyes, hand over control if you can, and report the position.</li>
<li><b>Volcanic ash</b>: avoid entirely. It abrades and melts in engines.</li>
<li><b>Mountain flying</b>: cross ridges at 45&deg; so you can turn away, expect strong
downdraughts on the lee side, and give high ground plenty of clearance in strong winds.</li>
<li><b>Fuel management</b>: the leading cause of avoidable engine stoppages. Know the tank
selector positions, the unusable quantity, and set a hard time to land.</li>
</ul>

<h3>Occurrence reporting</h3>
<p>Mandatory occurrence reporting exists so the industry learns. The system is intended to be
<b>just</b>, not punitive: report honestly and promptly. Report airprox, serious incidents,
technical defects affecting airworthiness, bird strikes, laser attacks and anything that
endangered or could have endangered the aircraft.</p>

<h3>The microburst</h3>
<figure data-d="microburst"></figure>
<p>A shaft of cold, dense air falling out of a convective cloud, hitting the ground and spreading
outwards in all directions. Fujita defined it by the size of that outflow: <b>0.4 to 4 km</b>
across. Short-lived, it generally reaches <b>maximum intensity within ten minutes</b>, and needs no
mature thunderstorm: any convective cloud will do, and a <b>dry</b> microburst falls from a shower
whose rain evaporates before it lands. Downdraughts of 1000 ft/min are typical; peaks above
<b>5000 ft/min</b> have been measured, several times what a light aeroplane can out-climb. At its
leading edge the outflow curls into a <b>horizontal vortex ring</b> around the base of the shaft, so
the edges shear hardest.</p>
<p>Fly through one on approach and three things happen, possibly inside <b>30 seconds</b>:</p>
<ol>
<li><b>Increasing headwind.</b> Airspeed rises, the nose pitches up, you drift above the slope on
less power. It feels like a good approach going slightly high. That is the trap: the <b>performance
increase is the warning</b>, and taking power off to correct it spends energy you are about to
need.</li>
<li><b>The downdraught.</b> Headwind becomes vertical flow, angle of attack falls with no change of
attitude, and you sink back through the slope.</li>
<li><b>Increasing tailwind.</b> Airspeed decays and the sink worsens, leaving you low and slow.</li>
</ol>
<p>Clues beforehand: <b>virga</b> under a high-based convective cloud, a <b>ring of dust</b> raised
beneath it, a rain shaft splaying outwards at the ground, windsocks disagreeing, a small intense
cell on rainfall radar over the approach. <b>No UK aerodrome has ground-based windshear
detection</b>; Heathrow and London City broadcast forecaster-issued ATIS warnings &mdash;
<b>WSF</b>, <b>WSFR</b>, <b>WSR</b> &mdash; UK METARs carry no windshear group, and everywhere else
the detector is you. On the instruments, treat <b>&plusmn;15 kt</b>, <b>&plusmn;500 ft/min</b>,
<b>&plusmn;5&deg;</b> of pitch or a dot of glidepath with an odd throttle position as
unacceptable.</p>
<p>The escape: <b>maximum available power</b>, pitch smoothly to the go-around attitude and <b>hold
it</b>, using the stall warner as the upper limit. <b>Do not chase the airspeed back</b> &mdash;
lowering the nose to regain it is what puts you in the trees. <b>Leave the flap alone</b> until the
climb away is assured. On take-off it is worse, because full power is already set and there is
nothing left to add. The escape is a bad hand played well; the decision that saves you is the
earlier one &mdash; hold off or divert rather than fly an approach into a convective cell at
all.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Wake vortices <b>sink</b> and <b>drift downwind</b>; land beyond a landing aircraft's
touchdown point and before a departing aircraft's rotation point.</li>
<li>Wind shear on approach: the answer is a <b>prompt go-around</b>.</li>
<li>All frost and ice must be removed before flight, not just most of it.</li>
<li>Birds generally dive, so <b>climb</b>.</li>
</ul></div>`
},
{
  id: '070-fire', title: 'Fire: classes, extinguishers and what you actually do', mins: 6, tags: ['070.04'],
  body: `
<h3>The classes, and why they matter</h3>
<p>Fire needs fuel, heat and oxygen together, and every drill removes one of them. Classification
exists because <em>which</em> one you can safely remove depends on what is burning: water on burning
avgas floats the fire across the floor, and on live wiring it puts you in the circuit. UK fires are
classified by <b>BS EN 2</b> — five classes, and electrical is not one of them.</p>
<table>
<thead><tr><th>Class</th><th>Fuel</th><th>In an aeroplane</th></tr></thead>
<tbody>
<tr><td><b>A</b></td><td>Solids forming glowing embers</td><td>Upholstery, trim, baggage</td></tr>
<tr><td><b>B</b></td><td>Flammable liquids</td><td>Avgas, oil, hydraulic fluid</td></tr>
<tr><td><b>C</b></td><td>Flammable <b>gases</b></td><td>A passenger's camping gas</td></tr>
<tr><td><b>D</b></td><td>Burning <b>metals</b></td><td>Magnesium castings, lithium-metal cells</td></tr>
<tr><td><b>F</b></td><td>Cooking oils and fats</td><td>Galleys</td></tr>
</tbody></table>
<p><b>There is no Class E.</b> Electricity is a source of ignition, not a fuel — what burns behind
the panel is insulation and plastic, a Class A or B fire with the added hazard that the equipment is
live. Extinguishers cleared for live equipment carry a dielectric marking, not a class letter. Watch
the lookalike: the American <b>UL</b> rating on an aircraft bottle does use <b>C for electrical</b>,
so <b>2B:C</b> covers flammable liquid and live electrics, not gases.</p>

<h3>Which agent suits which fire</h3>
<table>
<thead><tr><th>Agent</th><th>Works by</th><th>Use on</th><th>Never on</th></tr></thead>
<tbody>
<tr><td>Water (red)</td><td>Cooling</td><td>A</td><td>B, D, live electrics</td></tr>
<tr><td>Foam (cream)</td><td>Smothering</td><td>A, B</td><td>D, live electrics</td></tr>
<tr><td>Dry powder (blue)</td><td>Inhibiting</td><td>A, B, C, live electrics</td><td>Confined spaces</td></tr>
<tr><td>CO<sub>2</sub> (black)</td><td>Displacing oxygen</td><td>B, live electrics</td><td>Confined spaces, D</td></tr>
<tr><td>Halocarbon clean agent</td><td>Inhibiting</td><td>A, B, live electrics</td><td>D</td></tr>
<tr><td>Special powder</td><td>Smothering</td><td>D only</td><td>Anything else</td></tr>
</tbody></table>

<h3>What a light aeroplane carries now</h3>
<p>For decades the answer was <b>BCF</b> — bromochlorodifluoromethane, halon 1211: clean, effective
on solids, liquids and live electrics, almost weightless. It is also an ozone-depleting substance,
and aviation's "critical use" exemption had an end date. Under the Ozone-Depleting Substances
Regulations 2015, <b>halon 1211 and halon 2402 hand extinguishers had to be out of UK aircraft
cabins and crew compartments by 31 December 2025</b> — Defra's deadline, which the CAA cannot
waive.</p>
<p>The replacements accepted in <b>UK-CM-CS-013</b> are halocarbon clean agents: HFC-227ea,
HFC-236fa, HCFC Blend B and <b>2-BTP</b>. For an unpressurised cabin up to <b>5.66 cubic metres</b>
with nine passengers or fewer, it accepts a <b>UL 2B:C</b> bottle. <b>NCO.IDE.A.160</b> requires one
in the flight crew compartment but <b>exempts ELA1 aeroplanes</b> — 1200 kg MTOM or less, not
complex — so most of the training fleet. Carry one anyway.</p>

<h3>Using one in a cockpit</h3>
<p>Pull the pin, aim at the <b>base</b> of the flames, squeeze, sweep — it empties in seconds, so
aim before you squeeze. Then the three problems you just created:</p>
<ul>
<li><b>Toxicity.</b> Clean agents are mild as gases but decompose over a hot fire into hydrogen
fluoride, hydrogen bromide and similar — which is why NCO.IDE.A.160 requires an agent that
"minimise[s] the hazard of toxic gas concentration".</li>
<li><b>Obscuration.</b> Dry powder in a cockpit the size of a phone box gives a blinding, choking
cloud and corrosive residue over the instruments. Fine on the apron, wrong inside.</li>
<li><b>Oxygen.</b> CO<sub>2</sub> displaces oxygen, and in a few cubic metres it displaces yours.
Not a cockpit agent either.</li>
</ul>

<h3>Engine fire</h3>
<p>On start it is usually an <b>induction fire</b>: over-priming leaves fuel in the intake, which
lights. CAP 1535 has you keep <b>cranking</b> with mixture at idle cut-off, fuel off and throttle
fully open, so the engine draws the fire back in. If it is not out shortly after cutting the
mixture, get out and move <b>upwind</b>. Do not open the cowling — you would feed it air; attack
through the gills or intake.</p>
<p>Airborne you cannot reach an engine-bay fire, so the extinguisher is irrelevant and only
starvation works: fuel off, mixture idle cut-off, magnetos off, vents and cabin heat <b>closed</b>.
Then get down — CAP 1535 notes gear, flap and a sideslip steepen the descent, and a sideslip also
drags flames from the cabin side.</p>

<h3>Cabin and electrical fire</h3>
<p>A hot-plastic smell is electrical until proved otherwise. Isolate it: pull the breaker for the
suspect service. <b>Never reset a breaker more than once</b>, and never reset one that tripped
alongside a burning smell. If it worsens, <b>master off</b> — accepting the loss of radio, flaps and
everything else electrical — extinguish, and land as soon as possible.</p>
<p>Ventilation is the step most often got backwards:</p>
<ul>
<li><b>Engine fire in flight</b> — vents and cabin heat <b>closed</b>, keeping flame, smoke and
carbon monoxide out.</li>
<li><b>Fire inside the cabin</b> — extinguish <b>first</b>, ventilate <b>after</b>. Fresh air onto
live flame feeds it.</li>
<li><b>After discharging an extinguisher</b> — ventilate and descend to clear the agent.
UK-CM-CS-013 accepts opening a window.</li>
<li><b>Fumes with no fire</b>, such as carbon monoxide from a cracked exhaust reaching the cabin
heat — <b>heater off, fresh air on, land</b>. Ventilate: there is nothing to fan.</li>
</ul>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Under BS EN 2, <b>Class C is gases</b> and electrical is no class at all. On the American UL
rating stamped on the bottle, C <em>does</em> mean live electrical.</li>
<li>Halon 1211 (BCF) extinguishers had to be out of UK aircraft by <b>31 December 2025</b>.</li>
<li>Engine fire in flight: vents and cabin heat <b>closed</b>. Cabin fire: extinguish, <b>then</b>
ventilate.</li>
<li>Water spreads Class B and conducts on live electrics. Only special powder does Class D.</li>
<li>Never reset a tripped breaker more than once, and never after a burning smell.</li>
<li>Fire on start: keep cranking, fuel and mixture <b>off</b>, throttle <b>open</b>.</li>
</ul></div>`
}
],

quiz: [
{ q: 'Runway markings are which colour?', a: ['Yellow', 'White', 'Blue', 'Green'], c: 1, why: 'Runway markings are white; taxiway markings are yellow.', ref: 'Ops' },
{ q: 'Runway 05 is aligned approximately:', a: ['005 magnetic', '050 magnetic', '050 true', '500 magnetic'], c: 1, why: 'The designator is the magnetic direction to the nearest ten degrees. Its reciprocal is runway 23.', ref: 'Ops' },
{ q: 'A displaced threshold means the paved area before it:', a: ['Must not be used at all', 'May be used for taxiing and take-off but not for landing', 'May be used for landing only', 'Is a stopway only'], c: 1, why: 'Arrows lead to the transverse bar; the area before it is usable for taxi and take-off run, not for landing.', ref: 'Ops' },
{ q: 'At runway holding position markings you must never cross:', a: ['The dashed side without clearance', 'The solid side without clearance', 'Either side', 'The centreline'], c: 1, why: 'The two solid lines are on the holding side. Crossing them without clearance is a runway incursion.', ref: 'Ops' },
{ q: 'A white cross displayed on a runway means:', a: ['Glider flying in progress', 'The runway is closed', 'Take off and land on the runway only', 'Right-hand circuits'], c: 1, why: 'A cross marks a closed runway or taxiway. A double white cross in the signals square means glider flying.', ref: 'Ops' },
{ q: 'A white dumb-bell in the signals square means:', a: ['Glider flying in progress', 'Land, take off and taxi on runways and taxiways only', 'The aerodrome is unsafe', 'Right-hand traffic'], c: 1, why: 'The plain dumb-bell confines everything — landing, take-off and taxiing — to runways and taxiways. Add a black bar across each circle and the restriction is relaxed: land and take off on runways only, but other manoeuvres need not be confined.', ref: 'SERA App 1, s3' },
{ q: 'A steady green light directed at an aircraft in flight means:', a: ['Cleared for take-off', 'Cleared to land', 'Return for landing', 'Aerodrome unsafe'], c: 1, why: 'In flight: cleared to land. On the ground the same signal means cleared for take-off.', ref: 'Ops' },
{ q: 'Red flashes directed at an aircraft in flight mean:', a: ['Give way and continue circling', 'Aerodrome unsafe, do not land', 'Return for landing', 'Cleared to land'], c: 1, why: 'Red flashes in flight: aerodrome unsafe, do not land. On the ground: taxi clear of the landing area in use.', ref: 'Ops' },
{ q: 'White flashes directed at an aircraft in flight mean:', a: ['Do not land', 'Land at this aerodrome and proceed to the apron', 'Stop', 'Cleared to taxi'], c: 1, why: 'In flight: land here and proceed to the apron. On the ground: return to the starting point.', ref: 'Ops' },
{ q: 'A pilot acknowledges a light signal by day by:', a: ['Rocking the wings', 'Flashing the landing light', 'Squawking 7600', 'Making a 360 degree turn'], c: 0, why: 'Rock the wings by day; flash the landing or navigation lights at night.', ref: 'Ops' },
{ q: 'Taxiway edge lights are:', a: ['White', 'Blue', 'Green', 'Red'], c: 1, why: 'Taxiway edge lights blue, taxiway centreline green. Runway edge white, threshold green, runway end red.', ref: 'Ops' },
{ q: 'The runway threshold lights, seen on approach, are:', a: ['Red', 'Green', 'White', 'Blue'], c: 1, why: 'Green threshold, red runway end.', ref: 'Ops' },
{ q: 'A PAPI showing all four lights red indicates you are:', a: ['Too high', 'On the correct path', 'Too low', 'Off the centreline'], c: 2, why: 'All red, you are dead. All white is too high; two white and two red is on path.', ref: 'Ops' },
{ q: 'The standard circuit direction, unless otherwise notified, is:', a: ['Right-hand', 'Left-hand', 'Either', 'Into wind'], c: 1, why: 'Left-hand unless notified otherwise.', ref: 'Ops' },
{ q: 'A standard overhead join begins by arriving overhead at:', a: ['1000 ft aal', '2000 ft aal', '3000 ft aal', 'Circuit height'], c: 1, why: 'Overhead at 2000 ft aal, identify runway and signals, descend on the dead side to circuit height, cross the upwind end and join downwind.', ref: 'Ops' },
{ q: 'Two aircraft are approaching to land. Right of way belongs to:', a: ['The faster aircraft', 'The lower aircraft, which must not cut in front of one already on final', 'The higher aircraft', 'The larger aircraft'], c: 1, why: 'The lower aircraft has right of way, but must not use that to cut in front of or overtake one already on final approach.', ref: 'Ops' },
{ q: 'Two aircraft approach head-on. The correct action is:', a: ['Both alter heading to the right', 'Both alter heading to the left', 'The lower aircraft descends', 'The aircraft on the right maintains course'], c: 0, why: 'Both alter heading to the right.', ref: 'Ops' },
{ q: 'Two aircraft converge at approximately the same level. Which gives way?', a: ['The one with the other on its left', 'The one with the other on its right', 'The faster one', 'The higher one'], c: 1, why: 'The aircraft that has the other on its right gives way.', ref: 'Ops' },
{ q: 'An aircraft overtaking another shall:', a: ['Pass on the left', 'Alter course to the right and keep clear', 'Descend below', 'Have right of way'], c: 1, why: 'The overtaking aircraft alters course to the right and keeps clear. The overtaken aircraft has right of way.', ref: 'Ops' },
{ q: 'In the order of precedence, which has priority?', a: ['Aeroplanes over gliders', 'Balloons over gliders', 'Airships over balloons', 'Aeroplanes over airships'], c: 1, why: 'Balloons, then gliders, then airships, then aeroplanes. The least manoeuvrable has priority.', ref: 'Ops' },
{ q: 'Following an engine failure shortly after take-off at low level, the correct action is generally to:', a: ['Turn back to the runway', 'Land ahead, accepting at most a shallow turn', 'Attempt a restart while climbing', 'Squawk 7700 and orbit'], c: 1, why: 'A turn back at low level costs height and airspeed and raises the stall speed. Land ahead.', ref: 'Ops' },
{ q: 'The order of actions for a forced landing without power is:', a: ['Actions, approach, area, attitude', 'Attitude, area, approach, actions', 'Area, actions, attitude, approach', 'Approach, attitude, actions, area'], c: 1, why: 'Attitude (glide speed), area (choose a field), approach (plan a flexible pattern), actions (checks and calls).', ref: 'Ops' },
{ q: 'The recommended order for assessing a forced landing field is:', a: ['Surface, size, wind, slope', 'Size, shape, slope, surface, surroundings, wind', 'Wind, surface, size', 'Slope, surroundings, size'], c: 1, why: 'Size, shape, slope, surface, surroundings, wind.', ref: 'Ops' },
{ q: 'In the event of an engine fire in flight, the cabin heat and vents should be:', a: ['Opened to clear smoke', 'Closed to avoid drawing smoke and fumes into the cabin', 'Left as they are', 'Set to full hot'], c: 1, why: 'Closed. Fuel off, mixture cut-off, throttle closed, magnetos off, then a forced landing.', ref: 'Ops' },
{ q: 'For an electrical fire in the cabin, the sequence is:', a: ['Ventilate, then extinguish', 'Master off, extinguish, then ventilate', 'Ventilate only', 'Extinguish, then master off'], c: 1, why: 'Isolate the power first, extinguish, then ventilate, and land as soon as possible.', ref: 'Ops' },
{ q: 'On experiencing a radio failure you should select:', a: ['7000', '7500', '7600', '7700'], c: 2, why: '7600 indicates radio communication failure.', ref: 'Ops' },
{ q: 'A stuck microphone is a particular problem because it:', a: ['Damages the radio', 'Blocks the frequency for everyone', 'Increases range', 'Causes a transponder fault'], c: 1, why: 'It transmits continuously, blocking the frequency. Check it as part of a radio failure diagnosis.', ref: 'Ops' },
{ q: 'Wake turbulence is strongest when the generating aircraft is:', a: ['Light, fast and with flap down', 'Heavy, slow and clean', 'On the ground', 'In the cruise at high level'], c: 1, why: 'Heavy, slow and clean — the configuration on rotation and short final.', ref: 'Ops' },
{ q: 'Landing behind a heavier aircraft that has just landed, you should:', a: ['Stay below its approach path and land short of its touchdown point', 'Stay above its approach path and land beyond its touchdown point', 'Land on the same point', 'Land on the upwind edge'], c: 1, why: 'Vortices sink, so stay above the path and touch down beyond its touchdown point.', ref: 'Ops' },
{ q: 'Taking off behind a departing heavy aircraft, you should rotate:', a: ['Beyond its rotation point', 'Before its rotation point and climb above and upwind of its path', 'At the same point', 'After a 30 second delay only'], c: 1, why: 'Rotate before its rotation point, and climb above and upwind of its track.', ref: 'Ops' },
{ q: 'Wake vortices typically level off approximately how far below the generating aircraft?', a: ['200 ft', '500 ft', '900 ft', '2000 ft'], c: 2, why: 'They sink at about 300 to 500 ft/min and level off around 900 ft below the flight path, drifting with the wind.', ref: 'Ops' },
{ q: 'Encountering significant wind shear on final approach, the correct action is to:', a: ['Reduce power and continue', 'Increase power slightly and continue', 'Go around promptly with full power', 'Lower full flap'], c: 2, why: 'A prompt, positive go-around. Small corrections while continuing the approach is how aircraft land short.', ref: 'Ops' },
{ q: 'A decreasing headwind on approach will cause:', a: ['An increase in indicated airspeed and a tendency to go high', 'A loss of indicated airspeed and a tendency to sink below profile', 'No change', 'An increase in groundspeed only'], c: 1, why: 'The aircraft loses indicated airspeed and lift, and sinks below the profile.', ref: 'Ops' },
{ q: 'Frost on the wings before flight must be:', a: ['Polished smooth', 'Partially removed from the leading edge', 'Completely removed', 'Ignored if thin'], c: 2, why: 'Completely removed. Even thin frost badly degrades CL max and can prevent flight.', ref: 'Ops' },
{ q: 'On a wet grass runway you should expect:', a: ['Shorter take-off and landing distances', 'A longer take-off run and much degraded braking', 'No change from dry grass', 'Improved acceleration'], c: 1, why: 'Higher rolling resistance and badly reduced braking. Wet grass factors are about 1.30 take-off and 1.35 landing.', ref: 'Ops' },
{ q: 'If a bird strike appears imminent, the usual advice is to:', a: ['Descend', 'Climb, because birds normally dive to avoid', 'Maintain level flight', 'Turn sharply left'], c: 1, why: 'Birds normally dive to avoid a threat, so climbing improves your chances.', ref: 'Ops' },
{ q: 'A precautionary landing is:', a: ['A landing following engine failure', 'A deliberate landing with power at a chosen site because continuing is unwise', 'A go-around', 'A landing at an unlicensed aerodrome without permission'], c: 1, why: 'A planned landing with power available, made because continuing would be unwise. Made early it is straightforward.', ref: 'Ops' },
{ q: 'Crossing a mountain ridge in strong winds, the recommended technique is to:', a: ['Cross at 90 degrees at low level', 'Cross at about 45 degrees so you can turn away, with plenty of clearance', 'Fly along the lee side', 'Descend on the upwind side'], c: 1, why: 'A 45 degree crossing angle preserves an escape turn, and expect strong downdraughts on the lee side.', ref: 'Ops' },
{ q: 'Volcanic ash should be:', a: ['Flown through at reduced power', 'Avoided entirely', 'Flown above at 500 ft clearance', 'Treated like light rain'], c: 1, why: 'Avoid entirely. Ash abrades and melts in engines.', ref: 'Ops' },
{ q: 'The purpose of mandatory occurrence reporting is:', a: ['To apportion blame', 'To allow the industry to learn and improve safety, within a just culture', 'To record pilot hours', 'To calculate insurance premiums'], c: 1, why: 'Learning, not punishment. Report honestly and promptly.', ref: 'Ops' },
{ q: 'Under BS EN 2, a Class C fire involves:', a: ['Flammable gases', 'Electrical equipment', 'Flammable liquids', 'Burning metals'], c: 0, why: 'BS EN 2 classifies by the fuel: A solids, B flammable liquids, C gases, D metals, F cooking oils. Electricity is an ignition source, not a fuel, so it gets no class of its own — an extinguisher safe on live equipment carries a dielectric marking instead. Only in the American UL scheme does C mean electrical.', ref: 'BS EN 2' },
{ q: 'Halon 1211 (BCF) hand fire extinguishers in UK aircraft cabins and crew compartments:', a: ['May be carried indefinitely under aviation\'s critical-use exemption', 'Had to be decommissioned by 31 December 2025', 'Were banned outright in 2000, with no aviation exemption', 'May be carried where the CAA has granted an exemption'], c: 1, why: 'Aviation did hold a \'critical use\' exemption from the halon ban, but it carried an end date. Under the Ozone-Depleting Substances Regulations 2015 the bottles had to be out by the end of 2025. Defra sets that deadline and the Environment Agency enforces it — this is environmental law, not airworthiness law, so the CAA has no power to exempt an owner from it.', ref: 'Ozone-Depleting Substances Regulations 2015' },
{ q: 'During an engine fire in flight, the cabin heat and fresh-air vents should be:', a: ['Opened fully, to clear smoke from the cabin', 'Left as set, since they have no effect on the fire', 'Opened only once the fire is out', 'Closed, to keep smoke and fumes out of the cabin'], c: 3, why: 'The fire is in the engine bay, upstream of the heater muff and the fresh-air intakes, so opening them invites flame, smoke and carbon monoxide into the cabin. Note the contrast with a fire inside the cabin, where you extinguish first and ventilate afterwards — the rule is not \'always shut\' or \'always open\', it depends on which side of the firewall the fire is.', ref: 'Engine fire drill' },
{ q: 'Why is dry powder the wrong agent to discharge inside a light aircraft cockpit?', a: ['It is ineffective against burning insulation and plastic', 'It conducts electricity and is unsafe on live equipment', 'It produces a blinding, choking cloud and a corrosive residue', 'It is rated only for Class D fires'], c: 2, why: 'Dry powder is effective — it handles A, B, C and live electrics — so effectiveness is not the objection. The problem is what it does to a cockpit the size of a phone box: you lose sight of the instruments at the moment you most need them, and the residue corrodes what it settles on. UK certification guidance names only halocarbon clean agents for cabins and crew compartments — UK-CM-CS-013 lists 2-BTP, HFC-227ea, HFC-236fa and HCFC Blend B, and anything else has to be agreed with the CAA.', ref: 'UK-CM-CS-013' },
{ q: 'A circuit breaker trips and you notice a smell of hot insulation. You should:', a: ['Reset it once and monitor the service', 'Reset it as often as needed to keep the service', 'Turn the master switch off immediately and land', 'Leave it out, isolating that service, and monitor'], c: 3, why: 'CAP 1535 warns against resetting a tripped breaker and says never reset more than once — a breaker that trips alongside a burning smell has done its job, and resetting it re-energises the fault. Isolating the service and watching is the first step; master off and land as soon as possible is what you escalate to if the situation worsens, not your opening move.', ref: 'CAP 1535, Fire' },
{ q: 'A fire in the induction system during engine start. With the fuel and mixture cut off, the throttle should be:', a: ['Fully open, while you keep cranking, so the engine draws the fire in', 'Closed, to reduce the airflow through the carburettor', 'Set to 1200 rpm as soon as the engine catches', 'Left untouched while you fetch the extinguisher'], c: 0, why: 'The aim is to make the engine swallow its own fire: cranking with the throttle wide open pulls the burning mixture back through the induction system and out through the exhaust. CAP 1535 also sets the limit — if it is not out shortly after cutting the mixture, stop, get everyone out and move upwind rather than persisting.', ref: 'CAP 1535, Fire on the ground' },
{ q: 'Part-NCO requires a hand fire extinguisher in an aeroplane\'s flight crew compartment, except in:', a: ['Aeroplanes flown single-pilot', 'ELA1 aeroplanes', 'Aeroplanes with fewer than four seats', 'Aeroplanes flown VFR by day'], c: 1, why: 'NCO.IDE.A.160 exempts ELA1 aeroplanes — 1200 kg MTOM or less and not classified as complex — which takes in most of the UK training fleet. Treat that as a legal minimum rather than advice: an unfought cabin fire becomes a forced landing you did not need to make.', ref: 'NCO.IDE.A.160' },
{ q: 'You are on a stabilised approach when a microburst begins to affect you. The first indication is most likely to be:', a: ['Airspeed falling and the aircraft sinking below the glidepath', 'Airspeed rising and the aircraft going above the glidepath', 'An increased rate of descent with no change in airspeed', 'A sudden yaw towards the convective cell'], c: 1, why: 'You meet the outflow as an increasing headwind first, so airspeed rises, the nose pitches up and you go high on less power. The performance increase is the warning, not the reward: the downdraught and then the tailwind follow within seconds. Reducing power to regain the slope throws away the energy you are about to need.', ref: 'ICAO Doc 9817, 4.2.10' },
{ q: 'Escaping a microburst on approach in a light aeroplane, the flap should be:', a: ['Retracted fully to reduce drag', 'Retracted in stages as in a normal go-around', 'Left where it is until the climb away is assured', 'Extended one further stage to increase lift'], c: 2, why: 'Retracting flap as you would in a normal go-around removes lift and reduces the margin to the stall warner at the moment you have least to spare, and a mishandled selection is worse still. Configuration changes wait until terrain clearance is assured.', ref: 'ICAO Doc 9817, 4.3.52 and 4.3.71' },
{ q: 'A microburst is distinguished from a larger downburst by the horizontal extent of its surface outflow, which is:', a: ['0.4 to 4 km', '4 to 10 km', '10 to 25 km', 'Less than 200 m'], c: 0, why: 'Fujita\'s definition is a downdraught producing damaging horizontal surface winds over a horizontal extent between 0.4 and 4 km. That small scale is the whole problem: it fits entirely inside a final approach, and it reaches maximum intensity within about ten minutes, so a forecast warning may never catch it.', ref: 'ICAO Doc 9817, 3.5.15 and 3.5.18' },
{ q: 'At UK aerodromes, automated ground-based remote-sensing equipment for detecting windshear is:', a: ['Fitted at every aerodrome with an instrument approach', 'Fitted at Heathrow and Gatwick only', 'Fitted wherever thunderstorms are climatologically common', 'Not installed at any UK aerodrome'], c: 3, why: 'There is none in the UK. Warnings are produced by a forecaster and broadcast on ATIS at a very small number of aerodromes as WSF, WSFR or WSR, and UK METARs deliberately carry no windshear group because it is passed by RTF instead. So your own eyes and instruments are the detector, and your report to ATC is what warns the aircraft behind you.', ref: 'UK AIP GEN 3.5.2' },
{ q: 'A passenger has only a lap belt. The brace position you brief is:', a: ['Head forward with the chin on the chest and the palms under the thighs', 'Head down towards the knees, hands one over the other on top of the head', 'Head back against the seat with the arms folded across the chest', 'Leaning forward against the panel with the arms braced straight ahead'], c: 1, why: 'A shoulder harness restrains the upper body, so the head-forward position works with it. A lap belt alone leaves the upper body free, so the airline-style position is used instead: head down towards the knees, hands one over the other with the fingers not interlocked on top of the head. In either case stay relaxed — a rigid body is more easily injured — and take the headset off before impact.', ref: 'CAA Safety Sense 02, Care of Passengers' },
{ q: 'After a forced landing in a field, you may move the aircraft before the investigators arrive:', a: ['Never, under any circumstances', 'Only to clear a public road or right of way', 'For safety reasons, to help the injured, or with the express permission of the authorities in control of the site', 'Whenever the landowner asks you to'], c: 2, why: 'Article 13(2) forbids modifying the state of the site, taking samples, or moving or removing the aircraft and its wreckage pending the arrival of safety investigators — with exactly those exceptions. The site is the evidence, and the investigation exists to prevent the next accident, not to apportion blame. Tidying the field up is the instinct to resist.', ref: 'Regulation 996/2010, Article 13(2)' },
{ q: 'You have an accident in the UK. Who must be notified?', a: ['The CAA only', 'The AAIB only', 'The CAA and the police', 'The AAIB and the police'], c: 3, why: 'An accident or serious incident must be notified without delay to the Chief Inspector of Air Accidents — the AAIB — and, for an accident, also to a police officer for the area where it happened. Occurrence reporting to the CAA is a separate system with its own list of reportable events; it does not discharge the accident-notification duty.', ref: 'SI 2018/321, regulation 20' },
{ q: 'You have evacuated after a forced landing in a remote area. You should switch the ELT or PLB on:', a: ['Only once you can hear a search aircraft', 'Without delay', 'After 30 minutes, to conserve the battery', 'Only if you cannot get a mobile signal'], c: 1, why: 'COSPAS-SARSAT detects 406 MHz beacons across the entire globe, and much of the UK search and rescue region is busy civil and military airspace where the distress frequencies are routinely monitored, so the UK AIP tells survivors to switch an ELT on without delay. Only 406 MHz reaches the satellites — 121.5 MHz is monitored by aircraft and ATC, not by COSPAS-SARSAT. A beacon with a GNSS chip is fixed almost at once, but a plain 406 MHz beacon needs at least two polar-orbiting passes for a Doppler fix, which usually takes up to 90 minutes. That is time you spend waiting rather than saving.', ref: 'UK AIP GEN 3.6' },
{ q: 'A marshaller holds one arm extended horizontally and beckons with the other. The direction of turn indicated is:', a: ['From the marshaller\'s point of view, so you reverse it', 'From your own point of view as the pilot', 'Towards the beckoning arm, at the rate of the still arm', 'Whichever side the marshaller is standing on'], c: 1, why: 'Signals 5a and 5b in SERA Appendix 1 are both labelled \'from pilot\'s point of view\'. The arm held still marks the side you turn towards as you see it, and the rate at which the other arm beckons tells you how fast to turn.', ref: 'SERA Appendix 1, 4.1' },
{ q: 'You are taxiing under the direction of a marshaller. Before giving the signals, responsibility for ensuring the area you are guided into is clear of objects you might strike rests with:', a: ['The aerodrome operator', 'ATC ground movement control', 'The marshaller', 'Whoever issued your taxi clearance'], c: 2, why: 'SERA Appendix 1, 4.1.2 requires the signalman/marshaller to ascertain that the area is clear before using the signals. It does not transfer the aeroplane to them: SERA.2010(a) keeps the pilot-in-command responsible for the operation of the aircraft, so stop if a signal looks wrong.', ref: 'SERA Appendix 1, 4.1.2' },
{ q: 'Which of these is a signal made by the pilot to the marshaller rather than the other way round?', a: ['A wand drawn across the throat in a slicing motion', 'Arms raised slowly until the wands cross above the head', 'A standard salute with the right hand', 'Fingers extended in front of the face, then a clenched fist'], c: 3, why: 'Brakes engaged is one of the five pilot-to-marshaller signals listed at SERA Appendix 1, 4.2, and the moment the fist closes is the moment the brakes go on. The throat slice (cut engines), crossed wands overhead (stop) and the salute (dispatch aircraft) all come from the marshaller.', ref: 'SERA Appendix 1, 4.2' },
{ q: 'A marshaller abruptly extends both arms and wands to the top of the head, crossing the wands. This means:', a: ['Chocks inserted', 'Normal stop', 'Emergency stop', 'Hold position and stand by'], c: 2, why: 'Crossed wands above the head is the stop signal; the speed of the movement carries the urgency. Raised slowly it is a normal stop, done abruptly it is an emergency stop. Chocks inserted is a jabbing motion inwards with the arms already overhead, and hold position is both arms held down at 45 degrees.', ref: 'SERA Appendix 1, 4.1 (signals 6a, 6b)' }
],

cards: [
{ f: 'Runway versus taxiway marking colours', b: 'Runway markings white. Taxiway markings yellow.', ref: 'Ops' },
{ f: 'What does runway designator 05 mean?', b: 'Aligned about 050 magnetic. Reciprocal is 23.', ref: 'Ops' },
{ f: 'Displaced threshold — what may you do before it?', b: 'Taxi and take-off run. Not landing.', ref: 'Ops' },
{ f: 'Holding position markings — which side must you not cross?', b: 'The solid side, without a clearance.', ref: 'Ops' },
{ f: 'Steady green light: in flight and on the ground', b: 'In flight: cleared to land. On the ground: cleared for take-off.', ref: 'Ops' },
{ f: 'Steady red light: in flight and on the ground', b: 'In flight: give way and continue circling. On the ground: stop.', ref: 'Ops' },
{ f: 'Green flashes: in flight and on the ground', b: 'In flight: return for landing. On the ground: cleared to taxi.', ref: 'Ops' },
{ f: 'Red flashes: in flight and on the ground', b: 'In flight: aerodrome unsafe, do not land. On the ground: taxi clear of the landing area.', ref: 'Ops' },
{ f: 'White flashes: in flight and on the ground', b: 'In flight: land here and go to the apron. On the ground: return to the starting point.', ref: 'Ops' },
{ f: 'How do you acknowledge a light signal?', b: 'Rock the wings by day; flash landing or nav lights at night.', ref: 'Ops' },
{ f: 'Aerodrome light colours', b: 'Runway edge white (last 600 m yellow), threshold green, runway end red, taxiway edge blue, taxiway centreline green.', ref: 'Ops' },
{ f: 'PAPI indications', b: 'All white too high. Two white two red on path. All red, you are dead.', ref: 'Ops' },
{ f: 'Standard overhead join', b: 'Overhead at 2000 ft aal, identify runway and signals, descend dead side to circuit height, cross upwind end, join downwind.', ref: 'Ops' },
{ f: 'Head-on approach — action', b: 'Both alter heading to the right.', ref: 'Ops' },
{ f: 'Converging at the same level — who gives way?', b: 'The aircraft with the other on its right.', ref: 'Ops' },
{ f: 'Overtaking rule', b: 'Overtaking aircraft alters course to the right and keeps clear. The overtaken aircraft has right of way.', ref: 'Ops' },
{ f: 'Order of precedence', b: 'Balloons, gliders, airships, aeroplanes. Least manoeuvrable first.', ref: 'Ops' },
{ f: 'Engine failure just after take-off', b: 'Land ahead. Do not turn back at low level.', ref: 'Ops' },
{ f: 'Forced landing sequence', b: 'Attitude, area, approach, actions.', ref: 'Ops' },
{ f: 'Field selection criteria', b: 'Size, shape, slope, surface, surroundings, wind.', ref: 'Ops' },
{ f: 'Engine fire in flight — heat and vents?', b: 'Closed, to keep smoke out. Fuel off, mixture cut-off, throttle closed, magnetos off, forced landing.', ref: 'Ops' },
{ f: 'Electrical cabin fire sequence', b: 'Master off, extinguish, then ventilate. Land as soon as possible.', ref: 'Ops' },
{ f: 'Radio failure squawk and actions', b: '7600. Check volume, frequency, box, plugs, breaker and stuck mic; look for light signals; rock wings to acknowledge.', ref: 'Ops' },
{ f: 'When is wake turbulence worst?', b: 'Generating aircraft heavy, slow and clean.', ref: 'Ops' },
{ f: 'Landing behind a landing aircraft', b: 'Stay above its path, land beyond its touchdown point.', ref: 'Ops' },
{ f: 'Departing behind a departing aircraft', b: 'Rotate before its rotation point, climb above and upwind.', ref: 'Ops' },
{ f: 'How far below the generator do vortices settle?', b: 'About 900 ft, sinking 300 to 500 ft/min and drifting downwind.', ref: 'Ops' },
{ f: 'Wind shear on approach — response', b: 'Prompt go-around with full power.', ref: 'Ops' },
{ f: 'Effect of a decreasing headwind on approach', b: 'Loss of indicated airspeed and lift; sinks below profile.', ref: 'Ops' },
{ f: 'Frost on the wings', b: 'Must be completely removed before flight.', ref: 'Ops' },
{ f: 'Bird strike imminent — climb or descend?', b: 'Climb. Birds normally dive to avoid.', ref: 'Ops' },
{ f: 'Precautionary landing', b: 'A deliberate landing with power at a chosen site because continuing is unwise. A decision, not a failure.', ref: 'Ops' },
{ f: 'Mountain ridge crossing technique', b: 'Cross at about 45 degrees with plenty of height, expecting lee-side downdraughts.', ref: 'Ops' },
{ f: 'Purpose of occurrence reporting', b: 'Learning and safety improvement within a just culture — not blame.', ref: 'Ops' },
{ f: 'BS EN 2 fire classes?', b: 'A solids, B flammable liquids, C gases, D metals, F cooking oils and fats.', ref: 'BS EN 2' },
{ f: 'Why is there no Class E for electrical fires?', b: 'Electricity is a source of ignition, not a fuel. Extinguishers safe on live equipment carry a dielectric marking instead.', ref: 'BS EN 2' },
{ f: 'UL \'2B:C\' on an aircraft extinguisher — what does the C mean?', b: 'Live electrical equipment. That is the American scheme; under BS EN 2, C is gases.', ref: 'UK-CM-CS-013' },
{ f: 'Halon 1211 (BCF) hand extinguishers in UK aircraft — deadline?', b: 'Out of cabins and crew compartments by 31 December 2025. Replaced by clean agents: 2-BTP, HFC-227ea, HFC-236fa, HCFC Blend B.', ref: 'ODS Regulations 2015 / UK-CM-CS-013' },
{ f: 'Two reasons dry powder is wrong inside a cockpit?', b: 'A blinding, choking cloud, and corrosive residue over the instruments.', ref: 'Cockpit extinguishing agents' },
{ f: 'Engine fire in flight — vents and cabin heat?', b: 'Closed. Fuel off, mixture idle cut-off, magnetos off, then descend. No restart attempt.', ref: 'Engine fire drill' },
{ f: 'Cabin fire — extinguish or ventilate first?', b: 'Extinguish first, ventilate after. Ventilate early and you feed the fire.', ref: 'Cabin fire drill' },
{ f: 'Fire on start — what do you do with the starter and throttle?', b: 'Keep cranking with the throttle fully open, fuel and mixture off, to draw the fire into the engine. Not out soon after cutting the mixture: get out, move upwind.', ref: 'CAP 1535, Fire' },
{ f: 'Microburst on approach — the three events, in order?', b: 'Increasing headwind (airspeed up, high on the slope), then the downdraught (sink), then increasing tailwind (airspeed loss). Possibly all inside 30 seconds.', ref: 'ICAO Doc 9817, 4.2.10' },
{ f: 'Microburst — horizontal extent and lifetime?', b: 'Surface outflow 0.4 to 4 km across; maximum intensity generally reached within ten minutes.', ref: 'ICAO Doc 9817, 3.5.15 and 3.5.18' },
{ f: 'Why is the first indication of a microburst misleading?', b: 'It is a performance increase — airspeed up, high on the slope, power coming off. The gain is the warning; the loss is seconds away.', ref: 'ICAO Doc 9817, 4.2.10' },
{ f: 'Microburst escape — what do you do about the low airspeed?', b: 'Nothing. Maximum available power, hold the go-around attitude to the stall warner, accept the speed. Do not lower the nose to regain it, and do not touch the flap.', ref: 'ICAO Doc 9817, 4.3.50 to 4.3.52 and 4.3.71' },
{ f: 'Visual clues that a microburst may be waiting on the approach?', b: 'Virga under a high-based convective cloud, a ring of dust raised beneath it, a rain shaft splaying out at the ground, sheared smoke plumes, windsocks disagreeing.', ref: 'ICAO Doc 9817, 4.3.3' },
{ f: 'Forced landing — what you brief the passengers', b: 'Harnesses tight, loose articles secured, headsets off, doors unlatched on short final, brace on the call "brace, brace, brace". Then who opens which door, who helps whom, and a meeting point upwind and well clear.', ref: 'NCO.OP.130' },
{ f: 'Brace position — shoulder harness against lap belt only', b: 'Harness: head forward, chin on the chest, palms under the thighs or arms crossed in front, feet flat, body relaxed. Lap belt only: head down towards the knees, hands one over the other on top of the head, fingers not interlocked.', ref: 'Safety Sense 02' },
{ f: 'Shutdown before an off-airfield touchdown', b: 'Fuel selector off, mixture idle cut-off, magnetos off. Master off last — after the flap you want is selected and the Mayday is made.', ref: 'CAP 1535' },
{ f: 'May you move the aircraft after a forced landing?', b: 'Not until the investigators arrive — except for safety reasons, to help the injured, or with the express permission of the authorities in control of the site.', ref: 'Regulation 996/2010, Art 13(2)' },
{ f: 'Accident in the UK — who do you notify, and how fast?', b: 'The AAIB (the Chief Inspector of Air Accidents) without delay, and the police as well for an accident. AAIB 24-hour line: 01252 512299.', ref: 'SI 2018/321 reg 20; CAP 1535' },
{ f: 'Marshaller turn signals — whose left and right?', b: 'Yours. Turn towards the arm held still; the beckoning arm sets the rate of turn.', ref: 'SERA App 1, 4.1' },
{ f: 'Marshaller: wands crossed above the head — slowly vs abruptly?', b: 'Slowly = normal stop. Abruptly = emergency stop.', ref: 'SERA App 1, 4.1' },
{ f: 'Marshaller: wand drawn across the throat?', b: 'Cut engines.', ref: 'SERA App 1, 4.1' },
{ f: 'Being marshalled — who must check the area is clear of objects?', b: 'The marshaller, before signalling. But the pilot-in-command stays responsible for the aircraft.', ref: 'SERA App 1, 4.1.2; SERA.2010(a)' },
{ f: 'The five pilot-to-marshaller signals?', b: 'Brakes engaged, brakes released, insert chocks, remove chocks, ready to start engine(s).', ref: 'SERA App 1, 4.2' }
]
};
