/* 020 Aircraft General Knowledge — articles, quiz bank, flashcards. */
window.SC = window.SC || {};
window.SC['020'] = {
articles: [
{
  id: '020-airframe', title: 'Airframe, controls and undercarriage', mins: 6, tags: ['021.01', '021.02', '021.04', '021.06'],
  body: `
<h3>Structure and loads</h3>
<p>Five basic loads act on aircraft structures: <b>tension</b>, <b>compression</b>, <b>shear</b>,
<b>torsion</b> and <b>bending</b> (which is tension on one face and compression on the other).
Construction types: <b>truss/space frame</b> (a braced skeleton with a non-loadbearing skin),
<b>monocoque</b> (the skin carries all the load), and <b>semi-monocoque</b> (skin plus
stringers, formers and bulkheads) — the last being what almost every light aeroplane is.</p>
<p><b>Fatigue</b> is failure from repeated cycling well below the ultimate load, and it is why
airframes have lives and inspections. The <b>ultimate load</b> is the limit load multiplied by
a <b>safety factor of 1.5</b>. Exceeding the limit load may cause permanent deformation;
exceeding ultimate load means failure.</p>

<h3>Wing structure</h3>
<p><b>Spars</b> take the bending loads and are the primary structural members. <b>Ribs</b> give
the aerofoil its shape and transfer skin loads to the spars. <b>Stringers</b> run spanwise
stiffening the skin. In flight the wing bends upwards, so the <b>upper surface is in
compression</b> and the lower in tension; on the ground, resting on its wheels, the reverse.
Fuel carried in the wings is structurally helpful: it relieves bending by putting weight where
the lift is generated.</p>

<h3>Flight controls</h3>
<p>Primary: <b>ailerons</b> (roll, about the longitudinal axis), <b>elevator</b> (pitch, about
the lateral axis), <b>rudder</b> (yaw, about the normal axis). Secondary: flaps, trim tabs,
spoilers, slats.</p>
<ul>
<li><b>Mass balance</b> — weight ahead of the hinge line, to prevent <b>flutter</b>, the
destructive coupling of aerodynamic and inertial forces.</li>
<li><b>Aerodynamic balance</b> — part of the surface ahead of the hinge, or a horn balance, to
reduce the stick force needed.</li>
<li><b>Trim tab</b> — a small surface moved to hold the main surface displaced with no stick
force. An <b>anti-balance tab</b> increases stick force to give better feel; a <b>balance tab</b>
reduces it.</li>
<li><b>Differential and Frise ailerons</b> reduce adverse yaw.</li>
</ul>
<p><b>Control locks</b> must be removed and the full and free check done before every flight,
looking outside as you move the controls.</p>

<h3>Flaps</h3>
<figure data-d="flapTypes"></figure>
<p>Types in increasing effectiveness: <b>plain</b>, <b>split</b> (lower surface only — lots of
drag, little extra lift), <b>slotted</b> (allows high-pressure air through a slot to re-energise
the flow), and <b>Fowler</b> (moves rearward as well as down, increasing wing area as well as
camber, and the most effective of all). Effect: higher C<sub>L</sub> max so a lower stall speed,
more drag, a steeper approach path at the same speed, a lower nose attitude and a better view.</p>

<h3>Undercarriage, brakes and tyres</h3>
<p><b>Oleo struts</b> use oil forced through an orifice to absorb energy and gas or a spring to
provide the springing. <b>Shimmy dampers</b> stop nosewheel oscillation. <b>Differential
braking</b> steers on the ground where there is no steerable nosewheel; a <b>castoring</b>
nosewheel is free to swivel.</p>
<p><b>Hydroplaning (aquaplaning)</b> is when a tyre rides on a film of water and loses contact
with the runway, so braking and steering are lost. The dynamic hydroplaning speed in knots is
roughly <b>9 times the square root of the tyre pressure in psi</b>. Avoid heavy braking on a
flooded runway; land firmly and use aerodynamic braking first.</p>
<p><b>Tyre creep</b> is the slow rotation of a tyre on its rim, checked by alignment marks.
Under-inflation causes shoulder wear and overheating; over-inflation causes centre wear and a
harsher ride.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Safety factor between limit and ultimate load is <b>1.5</b>.</li>
<li>In flight the wing <b>upper</b> surface is in compression.</li>
<li>Mass balance prevents <b>flutter</b>; aerodynamic balance reduces <b>stick force</b>.</li>
<li>Fowler flap is the most effective type; split flap gives the most drag for the least lift.</li>
</ul></div>`
},
{
  id: '020-engine', title: 'The piston engine', mins: 8, tags: ['021.09'],
  body: `
<h3>The four-stroke cycle</h3>
<p><b>Induction, compression, power, exhaust</b> — two crankshaft revolutions per cycle, one
power stroke per cylinder per two revolutions. In practice valve timing overlaps: the inlet
valve opens before top dead centre and closes after bottom dead centre, exploiting gas inertia
to improve charging. Ignition occurs <b>before</b> top dead centre, because combustion takes
time and peak pressure should arrive just after TDC.</p>

<figure data-d="fourstroke"></figure>
<h3>Mixture</h3>
<p>The chemically correct (stoichiometric) air/fuel ratio is about <b>15:1</b> by weight. Best
power is a little rich of that, around 12.5:1; best economy is a little lean, around 16:1.</p>
<p>As you climb, air density falls but the carburettor keeps metering the same <em>volume</em>
of air, so the mixture progressively <b>enriches</b>. Hence the mixture control: lean as you
climb, and <b>enrich before descending</b> and before increasing power. A rich mixture wastes
fuel, cools the engine and can foul the plugs; an excessively lean mixture runs hot, loses
power and risks detonation.</p>

<h3>Detonation and pre-ignition — not the same thing</h3>
<ul>
<li><b>Detonation</b>: the mixture explodes rather than burning progressively, after normal
ignition. Causes: too low a fuel grade, mixture too lean, high manifold pressure with low RPM,
overheating. Symptoms: rough running, loss of power, rising cylinder head temperature, and it
will destroy an engine quickly. Cure: enrich the mixture, reduce power, open the cowl flaps,
increase airspeed.</li>
<li><b>Pre-ignition</b>: the mixture is ignited <em>before</em> the spark, by a local hot spot —
a glowing carbon deposit or an overheated plug. Often a consequence of prolonged detonation.</li>
</ul>
<p>Using a <b>lower</b> grade of fuel than specified risks detonation. A higher grade is
generally acceptable but not ideal. UK Avgas <b>100LL</b> is dyed <b>blue</b>; Jet A-1 is
straw/clear — a fuel check means looking at colour, smell and water content.</p>

<h3>Carburettor and injection</h3>
<figure data-d="carbIce"></figure>
<p>A float-type carburettor uses a <b>venturi</b>: the airflow accelerates, static pressure
falls, and fuel is drawn from the float chamber. The throttle butterfly controls the mass of
mixture reaching the cylinders. Attached to it are the <b>idle cut-off</b>, the
<b>accelerator pump</b>, and the <b>mixture control</b>.</p>
<p><b>Carburettor icing</b> arises from two effects together: the temperature drop from fuel
vaporisation, and the pressure and temperature drop through the venturi — 20 to 30 &deg;C in
total. It is therefore possible with an OAT anywhere from roughly <b>&minus;10 to +30 &deg;C</b>,
is worst in <b>humid air at low power</b> (a closed throttle makes the venturi effect stronger),
and is <em>most</em> likely in the descent with the throttle back. Symptoms in a fixed pitch
aeroplane: gradual, unexplained RPM loss and rough running. Cure: <b>full carb heat, applied
early</b>. Expect a further small RPM drop when you apply it — that is hot, less dense air, and
is normal. Carb heat is unfiltered air, so avoid using it on the ground on a dusty surface.</p>
<p><b>Fuel injection</b> delivers fuel to each cylinder or the inlet port, so there is no
venturi and no carburettor icing — but it is more prone to <b>vapour locking</b> and to hot
starting difficulties.</p>

<h3>Ignition</h3>
<p>Two independent <b>magnetos</b>, each driving one plug per cylinder. Being
engine-driven generators they are wholly independent of the aircraft electrical system — which
is why an engine keeps running with the master off, and why a magneto with a broken earth lead
makes a propeller live even with everything switched off.</p>
<p>The <b>dead cut check</b> at idle confirms both magnetos are earthing properly. The
<b>magneto drop check</b> at run-up power: a small RPM drop on each (typically 75 to 125 RPM,
per the POH) shows each system is working; <b>no drop at all</b> suggests a faulty earth,
and an <b>excessive drop or rough running</b> suggests a fouled plug or a failed lead. A large
<b>difference</b> between the two is also a defect.</p>

<h3>Oil and cooling</h3>
<p>Oil does five jobs: <b>lubricates, cools, cleans, seals</b> and <b>protects</b> against
corrosion. A <b>wet sump</b> carries oil in the crankcase; a <b>dry sump</b> uses a separate
tank and a scavenge pump. Watch pressure and temperature together: <b>high temperature with low
pressure</b> means an oil loss and demands an immediate landing. Low temperature with high
pressure at start-up is just cold oil.</p>
<p>Most light aeroplane engines are <b>air cooled</b>, relying on airflow over finned cylinders,
baffles and sometimes cowl flaps. Cooling is therefore poor at low airspeed and high power —
which is precisely the climb — so keep the climb speed up and the mixture rich.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Stoichiometric ratio <b>15:1</b> by weight.</li>
<li>Climbing without leaning makes the mixture <b>richer</b>.</li>
<li>Detonation is <b>after</b> the spark; pre-ignition is <b>before</b> it.</li>
<li>Carb icing is possible well above freezing and is worst at <b>low power</b> in humid air.</li>
<li>No RPM drop on a magneto check is a fault, not a good sign.</li>
</ul></div>`
},
{
  id: '020-prop-systems', title: 'Propellers, fuel and electrics', mins: 6, tags: ['021.07', '021.08', '021.09'],
  body: `
<h3>Propellers</h3>
<figure data-d="bladeAngle"></figure>
<p>A propeller is a rotating aerofoil producing thrust. Because the tip travels much further per
revolution than the root, the blade is <b>twisted</b> — more coarse at the root, finer at the tip
— to keep the angle of attack roughly constant along the span.</p>
<ul>
<li><b>Blade angle</b> — between the chord of the blade section and the plane of rotation.
Fixed by the design on a fixed-pitch propeller.</li>
<li><b>Geometric pitch</b> — the distance the propeller would advance in one revolution with no
slip. <b>Effective pitch</b> is what it actually advances; the difference is <b>slip</b>.</li>
<li>The blade's <b>angle of attack</b> is the angle between blade chord and the <em>relative</em>
airflow, which is the resultant of rotational velocity and forward speed. So for a fixed pitch
propeller at fixed RPM, increasing forward speed <b>reduces</b> blade angle of attack, and
increasing RPM at fixed forward speed <b>increases</b> it.</li>
</ul>
<p>A <b>fixed pitch</b> propeller can only be efficient at one combination of speed and RPM. A
<b>climb</b> propeller has a fine pitch: good acceleration and climb, lower cruise speed. A
<b>cruise</b> propeller is coarse: better cruise, poorer take-off and climb.</p>
<p>A <b>variable pitch / constant speed</b> propeller uses a governor to vary blade angle and
hold the selected RPM, so the engine can work at its best efficiency across the range. Set
RPM with the pitch lever and power with the throttle (manifold pressure). Order matters: when
increasing power, <b>RPM first then throttle</b>; when reducing, <b>throttle first then RPM</b>
— always avoid high manifold pressure with low RPM, which is a detonation risk.
<b>Feathering</b> turns the blades edge-on to minimise drag after a failure.</p>

<h3>Fuel systems</h3>
<p>A high-wing aeroplane can usually feed by <b>gravity</b>; a low-wing one needs an
<b>engine-driven pump</b> plus an <b>electric boost pump</b> for starting and as a backup.
Components: tanks with vents (a blocked vent will stop fuel flow), a <b>selector</b>, a
<b>strainer/gascolator</b> at the lowest point, a primer, and drain points.</p>
<p><b>Water</b> in fuel is the main contamination hazard — it is denser than avgas so it
collects at the low points, which is why you drain every sump before the first flight of the day
and after refuelling. Condensation is worst in partly filled tanks, so tanks are best left
<b>full</b> overnight. Always confirm quantity <b>visually</b> with a dipstick; gauges are
notoriously optimistic.</p>

<h3>Electrical system</h3>
<figure data-d="elecBus"></figure>
<p>A typical light aeroplane has a <b>14 V</b> or <b>28 V</b> DC system with a lead-acid
battery and an engine-driven <b>alternator</b> (or older <b>generator</b>). The <b>master
switch</b> usually has two halves, battery and alternator. A <b>voltage regulator</b> controls
output; <b>fuses or circuit breakers</b> protect circuits; a <b>bus bar</b> distributes power.</p>
<p>If the <b>ammeter</b> shows a discharge and the low-voltage light comes on, the alternator has
failed and you are on the battery: shed every non-essential load, and plan to land. The engine
will keep running because the magnetos are independent — but your radio, transponder, flaps
(if electric) and lights will not. Reset a tripped breaker <b>once only</b>, and never in
flight if there is any sign of smoke or burning.</p>

<h3>Vacuum and pitot-static</h3>
<p>An engine-driven <b>vacuum pump</b> drives the gyros in the attitude indicator and direction
indicator. Fail it and both go unreliable — while the turn indicator, being electric on most
types, survives. That split is deliberate redundancy.</p>
<p>The <b>pitot tube</b> senses total (dynamic + static) pressure and feeds the ASI only. The
<b>static vents</b> feed the ASI, the altimeter and the VSI. Blockages and their consequences
are covered in the instruments article.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Increasing forward speed at constant RPM <b>reduces</b> blade angle of attack.</li>
<li>With a constant speed unit, increase RPM before throttle and reduce throttle before RPM.</li>
<li>Tanks full overnight to minimise condensation.</li>
<li>Magnetos are independent of the electrical system.</li>
<li>Vacuum failure takes the AI and DI, not the turn indicator.</li>
</ul></div>`
},
{
  id: '020-instruments', title: 'Instruments and their errors', mins: 7, tags: ['022.01', '022.02', '022.03', '022.04'],
  body: `
<h3>The pitot-static three</h3>
<p><b>ASI</b> — measures the difference between pitot (total) and static pressure, which is
dynamic pressure, and displays it as a speed. <b>Altimeter</b> — an aneroid capsule sensing
static pressure against a subscale reference. <b>VSI</b> — the rate of change of static pressure,
using a calibrated leak, which is why it lags by two or three seconds and why it briefly shows
the wrong sense at the start of a change.</p>

<figure data-d="pitotstatic"></figure>
<h3>Blockages — learn these as a table</h3>
<table>
<thead><tr><th>Blockage</th><th>ASI</th><th>Altimeter</th><th>VSI</th></tr></thead>
<tbody>
<tr><td><b>Pitot blocked</b>, static clear</td><td>Reads zero if fully blocked; if blocked with pressure trapped, acts like an altimeter — over-reads in a climb, under-reads in a descent</td><td>Normal</td><td>Normal</td></tr>
<tr><td><b>Static blocked</b>, pitot clear</td><td>Under-reads in a climb, over-reads in a descent</td><td>Frozen at the blockage altitude</td><td>Reads zero</td></tr>
<tr><td><b>Both blocked</b></td><td>Frozen</td><td>Frozen</td><td>Zero</td></tr>
</tbody></table>
<p>The cure for a blocked static is the <b>alternate static source</b>. It usually vents inside
the cabin, where pressure is slightly lower than ambient, so the altimeter typically
<b>over-reads</b> slightly and the ASI reads slightly high. Check the POH for the correction.</p>

<h3>ASI errors and the speed chain</h3>
<p><b>Instrument error</b> (manufacturing), <b>position/pressure error</b> (imperfect sensing,
worst at high angle of attack), <b>density error</b> (the ASI is calibrated for ISA sea level,
so it under-reads TAS at altitude), <b>compressibility</b> (negligible below about 200 kt),
and <b>manoeuvre-induced error</b>. Chain: IAS &rarr; CAS &rarr; EAS &rarr; TAS.</p>

<h3>Gyroscopic instruments</h3>
<figure data-d="gyroProps"></figure>
<p>Two gyroscopic properties do all the work: <b>rigidity in space</b> (a spinning gyro resists
change to its plane of rotation) and <b>precession</b> (a force applied to the rim produces
movement 90&deg; further round in the direction of spin).</p>
<ul>
<li><b>Attitude indicator</b> — a vertical-axis gyro with freedom in two planes, using rigidity.
Shows pitch and roll directly.</li>
<li><b>Direction indicator</b> — a horizontal-axis gyro using rigidity. It has no north-seeking
ability of its own, so it must be <b>realigned with the compass in straight and level unaccelerated
flight</b>, roughly every 10 to 15 minutes, because of <b>real drift</b> (bearing friction) and
<b>apparent drift</b> (the Earth rotating beneath it, which varies with latitude).</li>
<li><b>Turn and slip / turn coordinator</b> — a rate gyro using precession to indicate rate of
turn, plus an independent liquid-filled <b>ball</b> showing balance. The needle shows rate of
turn; the ball shows slip or skid. In a slip the ball moves towards the inside of the turn; in a
skid, towards the outside. <b>Step on the ball.</b></li>
</ul>

<h3>The magnetic compass</h3>
<p>A pendulously suspended magnet assembly in a damping fluid. Errors: <b>variation</b> (true
to magnetic), <b>deviation</b> (aircraft magnetism, from the deviation card), and the dip-derived
dynamic errors — <b>acceleration/deceleration</b> (ANDS: Accelerate North, Decelerate South in
the northern hemisphere) and <b>turning</b> (lags through north, leads through south). It also
suffers <b>oscillation</b> in turbulence. So you read the compass only in steady flight, and you
fly headings on the DI.</p>

<h3>Engine and other instruments</h3>
<ul>
<li><b>Tachometer</b> — RPM. <b>Manifold pressure gauge</b> — power on a constant speed
installation; note that with the engine stopped it reads ambient pressure.</li>
<li><b>Oil pressure and temperature</b> — read them together, as described in the engine
article.</li>
<li><b>CHT/EGT</b> — cylinder head and exhaust gas temperature; EGT is the practical tool for
leaning, peaking as you approach stoichiometric.</li>
<li><b>Ammeter</b> — charge or discharge; a discharge indicates alternator failure.</li>
<li><b>Slip ball, stall warner, hour meter</b> and, increasingly, an <b>EFIS</b> presenting all
of the above on a screen — with the same underlying sensors and the same failure modes.</li>
</ul>

<h3>Pitot heat and ice protection</h3>
<p>Pitot heat is an electrical element inside the pitot head and its drain hole. It keeps ice and
water out of the pressure sensing so that the <b>ASI</b> keeps working. That is the whole of its
job. It protects no part of the airframe, and fitting it does not turn the aeroplane into an
icing aeroplane: you may only commence a flight or intentionally fly into <b>expected or actual
icing conditions</b> if the aircraft is <b>certified and equipped</b> for them, and if you meet
icing in one that is not, you must leave the conditions <b>without delay</b> by a change of level
and/or course (<b>NCO.OP.170</b>).</p>
<p>What it does <em>not</em> protect on many light types is the <b>static</b> system. Cessna-style
static ports in the fuselage side are usually plain unheated holes; the Piper combined
pitot-static mast puts the static holes on the same heated head, so one element covers both.
The POH tells you which you have. Where the static side is unheated, your only defence in flight
is the <b>alternate static source</b>, with the cabin-pressure errors that brings.</p>
<p>Select it <b>before</b> entering visible moisture, not after. It is an anti-icing system, meant
to stop ice forming; an element working on a tube already packed with ice may take minutes to
clear it, or never clear it — and the ASI is unusable meanwhile. So switch on before cloud or
precipitation in air near or below freezing, and early rather than late.</p>
<p>It is a resistance heater and one of the largest continuous loads on a light single, typically
a <b>5 to 10 A</b> circuit depending on type. Selecting it should give a clear swing on the
<b>ammeter</b> or loadmeter, and that swing is how you confirm current is actually flowing. Keep
any ground check <b>brief</b>: with no cooling airflow on the ramp the element runs hot enough to
damage itself, and the tube gets hot enough to burn your hand.</p>
<p><b>Windscreens</b>: light aeroplanes demist with hot air ducted from the cabin heat exchanger,
which deals with internal misting and light frost and does nothing about airframe ice. Larger
types use a laminated screen with a transparent conductive film, thermostatically controlled,
which also keeps the interlayer warm and so less brittle in a bird strike. <b>Carburettor heat</b>
is a separate engine system using hot air rather than electricity, and is covered in the piston
engine article.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Pitot feeds the ASI only; static feeds all three.</li>
<li><b>Static</b> blocked: ASI under-reads in the climb. <b>Pitot</b> blocked with trapped
pressure: ASI over-reads in the climb.</li>
<li>Alternate static usually makes the altimeter over-read.</li>
<li>The DI needs realigning; the AI does not.</li>
<li>Rigidity for AI and DI, precession for the turn indicator.</li>
</ul></div>`
},
{
  id: '020-airworthiness', title: 'Airworthiness and documents', mins: 5, tags: ['010.02', '021.01'],
  body: `
<h3>The paperwork that makes it legal</h3>
<ul>
<li><b>Certificate of Airworthiness (C of A)</b> — issued once and remains valid so long as the
aircraft is maintained in accordance with the applicable requirements.</li>
<li><b>Airworthiness Review Certificate (ARC)</b> — the periodic confirmation, normally valid
<b>12 months</b>, that the airworthiness review has been completed. This is the one that expires
and stops you flying.</li>
<li><b>Certificate of Registration</b> — identifies the owner and the registration marks.</li>
<li><b>Radio licence</b> — for the aircraft's radio installation.</li>
<li><b>Insurance</b> certificate.</li>
<li><b>Mass and balance</b> data / weighing schedule.</li>
<li><b>Flight Manual or POH</b>, including the approved limitations.</li>
<li><b>Technical log</b> — the record of hours flown, maintenance due and defects. Check it and
sign it.</li>
<li><b>Noise certificate</b> where applicable.</li>
</ul>
<p>For a <b>Permit to Fly</b> aircraft the equivalent is a Permit with an annual validity, and
the operating limitations are usually narrower — day VFR only being typical.</p>

<h3>Maintenance</h3>
<p>Scheduled maintenance is driven by <b>hours flown</b> and <b>calendar time</b>, whichever
comes first, per the approved maintenance programme — the familiar 50-hour and 100-hour or
annual checks. <b>Airworthiness Directives</b> are mandatory. <b>Service Bulletins</b> from the
manufacturer are not mandatory unless made so by an AD. A <b>certificate of release to service</b>
is issued after maintenance and is what makes the aircraft usable again.</p>
<p>As the pilot you may carry out limited <b>pilot-owner maintenance</b> where permitted, and you
are always responsible for the <b>pre-flight inspection</b>. Nothing in the paperwork transfers
the commander's responsibility to satisfy themselves that the aircraft is fit for the intended
flight.</p>

<h3>Mass definitions</h3>
<table>
<tbody>
<tr><td><b>Basic empty mass</b></td><td>Airframe, engine, unusable fuel, full operating fluids, fixed equipment</td></tr>
<tr><td><b>Dry operating mass</b></td><td>Basic empty mass plus crew, their baggage and removable equipment — everything but usable fuel and payload</td></tr>
<tr><td><b>Useful load</b></td><td>Usable fuel plus payload</td></tr>
<tr><td><b>Maximum take-off mass (MTOM)</b></td><td>Structural limit for take-off</td></tr>
<tr><td><b>Maximum landing mass</b></td><td>Structural limit for landing</td></tr>
<tr><td><b>Maximum zero fuel mass</b></td><td>Limit before wing-bending relief from fuel is counted</td></tr>
</tbody></table>

<h3>Minimum equipment</h3>
<p>Required equipment depends on the flight. For day VFR in a light single you need at least an
ASI, an altimeter, a magnetic compass, a timepiece showing hours minutes and seconds, and the
engine instruments appropriate to the type; plus a safety harness for each seat, and for flight
over water beyond gliding distance from land, lifejackets. Additional instruments and equipment
are required for night, IFR and controlled airspace. When in doubt the answer is in the POH and
the ANO, not in a rule of thumb.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>The <b>C of A</b> does not expire; the <b>ARC</b> does, normally at 12 months.</li>
<li>Airworthiness Directives are <b>mandatory</b>; Service Bulletins are not, unless mandated.</li>
<li>Dry operating mass includes crew; basic empty mass does not.</li>
</ul></div>`
}
],

quiz: [
{ q: 'The safety factor between limit load and ultimate load is:', a: ['1.0', '1.25', '1.5', '2.0'], c: 2, why: 'Ultimate load = limit load x 1.5.', ref: 'AGK' },
{ q: 'Most light aeroplane fuselages are of which construction?', a: ['Truss', 'Monocoque', 'Semi-monocoque', 'Geodetic'], c: 2, why: 'Semi-monocoque: stressed skin plus stringers, formers and bulkheads.', ref: 'AGK' },
{ q: 'In flight, the upper surface of a wing is subject mainly to:', a: ['Tension', 'Compression', 'Torsion', 'No load'], c: 1, why: 'The wing bends upwards in flight, so the upper surface is in compression and the lower in tension.', ref: 'AGK' },
{ q: 'Fuel carried in the wings:', a: ['Increases wing bending loads', 'Relieves wing bending loads', 'Has no structural effect', 'Increases torsion only'], c: 1, why: 'It places weight near where lift is generated, relieving bending. Hence maximum zero fuel mass limits.', ref: 'AGK' },
{ q: 'Mass balancing of a control surface is to prevent:', a: ['Adverse yaw', 'Flutter', 'Overbalance', 'Control reversal'], c: 1, why: 'Mass balance places weight ahead of the hinge line to prevent flutter.', ref: 'AGK' },
{ q: 'Aerodynamic balancing of a control surface:', a: ['Prevents flutter', 'Reduces the stick force required', 'Increases the stall speed', 'Reduces drag'], c: 1, why: 'It reduces the control force needed by placing part of the surface ahead of the hinge.', ref: 'AGK' },
{ q: 'Which flap type increases wing area as well as camber?', a: ['Plain', 'Split', 'Slotted', 'Fowler'], c: 3, why: 'A Fowler flap moves rearward and down, increasing area and camber. It is the most effective type.', ref: 'AGK' },
{ q: 'A split flap is characterised by:', a: ['Much extra lift and little drag', 'Much drag for relatively little extra lift', 'Increased wing area', 'A slot through the wing'], c: 1, why: 'The lower surface only deflects, producing a lot of drag for modest lift increase.', ref: 'AGK' },
{ q: 'Aquaplaning speed in knots is approximately:', a: ['9 times the square root of tyre pressure in psi', 'The square root of tyre pressure', '9 times tyre pressure', 'Tyre pressure divided by 9'], c: 0, why: '9 times the square root of the tyre pressure in psi, for dynamic hydroplaning.', ref: 'AGK' },
{ q: 'Under-inflated tyres typically show:', a: ['Centre tread wear', 'Shoulder wear and overheating', 'No wear pattern', 'Sidewall cracking only'], c: 1, why: 'Under-inflation gives shoulder wear and overheating; over-inflation gives centre wear.', ref: 'AGK' },
{ q: 'In a four-stroke engine, one power stroke occurs every:', a: ['One revolution', 'Two revolutions', 'Four revolutions', 'Half a revolution'], c: 1, why: 'Induction, compression, power, exhaust across two crankshaft revolutions.', ref: 'AGK' },
{ q: 'Ignition normally occurs:', a: ['At top dead centre', 'Before top dead centre', 'After top dead centre', 'At bottom dead centre'], c: 1, why: 'Before TDC, so that peak pressure arrives just after TDC. Combustion takes time.', ref: 'AGK' },
{ q: 'The chemically correct air/fuel ratio by weight is approximately:', a: ['8:1', '12:1', '15:1', '20:1'], c: 2, why: 'About 15:1. Best power is around 12.5:1 and best economy around 16:1.', ref: 'AGK' },
{ q: 'Climbing without adjusting the mixture control causes the mixture to become:', a: ['Leaner', 'Richer', 'Unchanged', 'Alternately rich and lean'], c: 1, why: 'Air density falls but the carburettor meters the same volume, so the mixture enriches.', ref: 'AGK' },
{ q: 'Detonation is:', a: ['Ignition of the mixture before the spark by a hot spot', 'Explosive rather than progressive burning after normal ignition', 'Failure of one magneto', 'Fuel vaporising in the fuel lines'], c: 1, why: 'Detonation follows the spark. Pre-ignition is ignition before the spark by a hot spot.', ref: 'AGK' },
{ q: 'Which will help cure detonation?', a: ['Lean the mixture further', 'Increase manifold pressure', 'Enrich the mixture and reduce power', 'Reduce airspeed'], c: 2, why: 'Enrich, reduce power, open cowl flaps and increase airspeed to improve cooling.', ref: 'AGK' },
{ q: 'Using a lower grade of fuel than specified risks:', a: ['Vapour locking', 'Detonation', 'Carburettor icing', 'Fuel starvation'], c: 1, why: 'Lower octane rating means less resistance to detonation.', ref: 'AGK' },
{ q: 'Avgas 100LL in the UK is dyed:', a: ['Red', 'Blue', 'Green', 'Straw'], c: 1, why: '100LL is blue. Jet A-1 is straw or clear.', ref: 'AGK' },
{ q: 'Carburettor icing is most likely:', a: ['At high power in dry air', 'At low power in humid air', 'Only below freezing', 'Only above 10,000 ft'], c: 1, why: 'A closed throttle strengthens the venturi effect, and humidity supplies the water. It is possible from about -10 to +30 C OAT.', ref: 'AGK' },
{ q: 'On applying full carburettor heat with no ice present you should expect:', a: ['A small RPM rise', 'A small RPM drop', 'No change', 'Rough running'], c: 1, why: 'Hot air is less dense, so RPM drops slightly. That is normal and confirms the system works.', ref: 'AGK' },
{ q: 'A fuel injected engine, compared with a carburetted one, is:', a: ['More prone to carburettor icing', 'Not subject to carburettor icing but more prone to vapour locking', 'Unable to be leaned', 'Immune to induction icing of any kind'], c: 1, why: 'No venturi means no carb icing, but vapour locking and hot-start problems are more likely.', ref: 'AGK' },
{ q: 'Aircraft magnetos are:', a: ['Powered by the battery', 'Powered by the alternator', 'Engine-driven and independent of the electrical system', 'Powered by the vacuum pump'], c: 2, why: 'They are engine-driven generators, which is why the engine runs with the master off, and why a broken earth lead makes a propeller dangerous.', ref: 'AGK' },
{ q: 'During the magneto check, no RPM drop at all on one magneto indicates:', a: ['A healthy system', 'A possible faulty earth or live magneto', 'A fouled plug', 'Carburettor icing'], c: 1, why: 'No drop suggests the magneto is not being earthed when switched off. It is a defect, not a good sign.', ref: 'AGK' },
{ q: 'The five functions of engine oil are to lubricate, cool, clean, seal and:', a: ['Ignite', 'Protect against corrosion', 'Increase compression', 'Cushion the propeller'], c: 1, why: 'Lubricate, cool, clean, seal, protect against corrosion.', ref: 'AGK' },
{ q: 'High oil temperature accompanied by low oil pressure indicates:', a: ['Cold oil at start-up', 'Normal cruise indications', 'Probable loss of oil, requiring an immediate landing', 'A faulty gauge only'], c: 2, why: 'That combination points to oil loss. Land as soon as possible.', ref: 'AGK' },
{ q: 'A propeller blade is twisted along its span in order to:', a: ['Reduce weight', 'Keep the angle of attack roughly constant from root to tip', 'Increase tip speed', 'Reduce noise'], c: 1, why: 'The tip travels much further per revolution, so a twist is needed to keep angle of attack sensible along the blade.', ref: 'AGK' },
{ q: 'The difference between geometric and effective pitch is called:', a: ['Blade angle', 'Slip', 'Camber', 'Twist'], c: 1, why: 'Slip.', ref: 'AGK' },
{ q: 'At constant RPM, increasing forward speed will:', a: ['Increase blade angle of attack', 'Decrease blade angle of attack', 'Not change blade angle of attack', 'Increase blade angle'], c: 1, why: 'The relative airflow moves further from the plane of rotation, reducing the blade angle of attack.', ref: 'AGK' },
{ q: 'With a constant speed propeller, when increasing power you should:', a: ['Increase RPM then throttle', 'Increase throttle then RPM', 'Increase throttle only', 'Reduce RPM then increase throttle'], c: 0, why: 'RPM first, then throttle, to avoid high manifold pressure with low RPM. Reversed when reducing power.', ref: 'AGK' },
{ q: 'A blocked fuel tank vent will:', a: ['Have no effect', 'Restrict or stop fuel flow', 'Cause carburettor icing', 'Increase fuel pressure'], c: 1, why: 'Without venting, a vacuum forms above the fuel and flow is restricted or stops.', ref: 'AGK' },
{ q: 'Aircraft fuel tanks are best left full overnight in order to:', a: ['Improve mass and balance', 'Minimise condensation', 'Reduce fuel cost', 'Prevent vapour locking'], c: 1, why: 'Less air space means less condensation and therefore less water contamination.', ref: 'AGK' },
{ q: 'Water contamination collects at the low points of the fuel system because water is:', a: ['Less dense than avgas', 'Denser than avgas', 'The same density as avgas', 'Suspended in the fuel'], c: 1, why: 'Water is denser, so it sinks. Drain the sumps before the first flight and after refuelling.', ref: 'AGK' },
{ q: 'The ammeter shows a discharge and the low voltage light illuminates. This indicates:', a: ['Magneto failure', 'Alternator failure, with the aircraft running on battery', 'Vacuum pump failure', 'A blocked static vent'], c: 1, why: 'Alternator failure. Shed non-essential loads and plan to land. The engine keeps running because the magnetos are independent.', ref: 'AGK' },
{ q: 'A tripped circuit breaker should be reset:', a: ['As many times as necessary', 'Once only, and not at all if there is any smell of burning', 'Never', 'Only on the ground'], c: 1, why: 'Once only, and never if there is any sign of smoke or burning.', ref: 'AGK' },
{ q: 'Vacuum pump failure will affect:', a: ['The attitude indicator and direction indicator', 'The turn coordinator only', 'The altimeter and VSI', 'The magnetic compass'], c: 0, why: 'The AI and DI are vacuum driven on most light aircraft; the turn indicator is usually electric.', ref: 'AGK' },
{ q: 'The pitot tube supplies:', a: ['The ASI only', 'The ASI and altimeter', 'All three pressure instruments', 'The VSI only'], c: 0, why: 'Pitot feeds the ASI. Static feeds the ASI, altimeter and VSI.', ref: 'AGK' },
{ q: 'With the static vent blocked and the pitot clear, in a climb the ASI will:', a: ['Over-read', 'Under-read', 'Read correctly', 'Read zero'], c: 1, why: 'Trapped higher static pressure reduces the indicated differential as you climb, so the ASI under-reads. The altimeter freezes and the VSI reads zero.', ref: 'AGK' },
{ q: 'With the pitot blocked and pressure trapped, in a climb the ASI will:', a: ['Over-read', 'Under-read', 'Read zero', 'Read correctly'], c: 0, why: 'It behaves like an altimeter: as static pressure falls, the indicated differential grows, so it over-reads in the climb.', ref: 'AGK' },
{ q: 'Selecting the alternate static source, which usually vents inside the cabin, typically causes the altimeter to:', a: ['Under-read', 'Over-read slightly', 'Read correctly', 'Freeze'], c: 1, why: 'Cabin pressure is slightly below ambient, so the altimeter tends to over-read. Check the POH correction.', ref: 'AGK' },
{ q: 'The VSI lags because it:', a: ['Uses a gyro', 'Uses a calibrated leak', 'Is fed by pitot pressure', 'Has an aneroid capsule'], c: 1, why: 'The calibrated leak creates the pressure differential the instrument measures, and takes a couple of seconds to establish.', ref: 'AGK' },
{ q: 'The attitude indicator relies on which gyroscopic property?', a: ['Precession', 'Rigidity in space', 'Rotational inertia', 'Dip'], c: 1, why: 'Rigidity, as does the DI. The turn indicator uses precession.', ref: 'AGK' },
{ q: 'The direction indicator must be realigned with the compass because of:', a: ['Real and apparent drift', 'Acceleration error', 'Position error', 'Compressibility'], c: 0, why: 'Real drift from bearing friction and apparent drift from Earth rotation. Realign in straight and level unaccelerated flight.', ref: 'AGK' },
{ q: 'In a slipping turn the ball will be:', a: ['Towards the outside of the turn', 'Towards the inside of the turn', 'Centred', 'Oscillating'], c: 1, why: 'Slip: too little bank for the rate, ball to the inside. Skid: too much, ball to the outside. Step on the ball.', ref: 'AGK' },
{ q: 'The Certificate of Airworthiness:', a: ['Expires every 12 months', 'Remains valid provided the aircraft is maintained as required', 'Must be renewed after every maintenance', 'Is issued by the manufacturer'], c: 1, why: 'The C of A does not expire. The ARC is the periodic document, normally valid 12 months.', ref: 'AGK' },
{ q: 'An Airworthiness Review Certificate is normally valid for:', a: ['6 months', '12 months', '24 months', '36 months'], c: 1, why: '12 months.', ref: 'AGK' },
{ q: 'Airworthiness Directives are:', a: ['Advisory', 'Mandatory', 'Manufacturer recommendations only', 'Applicable to commercial operators only'], c: 1, why: 'ADs are mandatory. Service Bulletins are advisory unless made mandatory by an AD.', ref: 'AGK' },
{ q: 'Dry operating mass differs from basic empty mass in that it includes:', a: ['Usable fuel', 'Crew, their baggage and removable equipment', 'Payload', 'Unusable fuel'], c: 1, why: 'Dry operating mass = basic empty mass + crew and their equipment. It excludes usable fuel and payload.', ref: 'AGK' },
{ q: 'Maximum zero fuel mass exists because:', a: ['Fuel is heavy', 'Fuel in the wings relieves wing bending loads', 'Fuel affects the CG', 'Fuel is consumed in flight'], c: 1, why: 'Beyond that mass, further load must be carried as wing fuel to provide bending relief.', ref: 'AGK' },
{ q: 'In a typical light single with fuselage-side static ports, selecting pitot heat protects:', a: ['The pitot head and its drain hole only', 'The pitot head and the static ports', 'The static ports only', 'The pitot head, the static ports and the carburettor intake'], c: 0, why: 'Pitot heat is an element in the pitot head. On many light types the static ports are plain unheated holes, so an iced static system has to be dealt with by the alternate static source. A few types use a combined pitot-static mast where the same element covers both, which is why you check the POH rather than assume.', ref: 'Pitot-static anti-icing' },
{ q: 'Pitot heat should be selected:', a: ['Continuously from engine start until shutdown', 'Before entering visible moisture in air near or below freezing', 'As soon as the ASI reading starts to fall away', 'Only once ice has been seen forming on the airframe'], c: 1, why: 'It is an anti-icing system, not a de-icing one. Once the tube is packed with ice the element may take minutes to clear it or fail to clear it at all, and you have no ASI in the meantime. Leaving it on continuously is also wrong: on the ground there is no cooling airflow and the element can burn out.', ref: 'Pitot heat — operation' },
{ q: 'Having selected pitot heat, the normal way to confirm the element is drawing current in flight is:', a: ['A momentary drop in RPM', 'The low-voltage warning light extinguishing', 'A noticeable increase in load on the ammeter or loadmeter', 'A small rise in the indicated airspeed'], c: 2, why: 'The heater is a resistance load of several amps — typically a 5 to 10 A circuit — so it is large enough to move the ammeter or loadmeter visibly. It is electrically independent of the engine, so RPM is unaffected, and it changes nothing about the pressure the ASI senses.', ref: 'Pitot heat — electrical load' },
{ q: 'An aeroplane fitted with pitot heat and a hot-air windscreen demist, but not certified for icing:', a: ['Is by that equipment certified for flight in known icing', 'May enter forecast icing provided pitot heat is selected first', 'May enter icing so long as the demist keeps the screen clear', 'May not intentionally enter expected or actual icing, and must leave it without delay if encountered'], c: 3, why: 'NCO.OP.170 ties the permission to the aircraft\'s certification and equipment, not to having a heated probe. Pitot heat protects the ASI and the demist clears internal misting; neither keeps ice off the wings, tail or propeller. On encountering icing, change level and/or course without delay.', ref: 'NCO.OP.170' }
],

cards: [
{ f: 'Limit load to ultimate load safety factor', b: '1.5.', ref: 'AGK' },
{ f: 'Wing upper surface load in flight', b: 'Compression (lower surface in tension). Reversed on the ground.', ref: 'AGK' },
{ f: 'Mass balance versus aerodynamic balance', b: 'Mass balance prevents flutter. Aerodynamic balance reduces stick force.', ref: 'AGK' },
{ f: 'Most effective flap type', b: 'Fowler — moves back and down, increasing area and camber.', ref: 'AGK' },
{ f: 'Aquaplaning speed formula', b: 'About 9 x square root of tyre pressure in psi (knots).', ref: 'AGK' },
{ f: 'Four-stroke cycle', b: 'Induction, compression, power, exhaust — two crankshaft revolutions.', ref: 'AGK' },
{ f: 'Stoichiometric air/fuel ratio', b: 'About 15:1 by weight. Best power about 12.5:1, best economy about 16:1.', ref: 'AGK' },
{ f: 'Effect of climbing without leaning', b: 'The mixture becomes richer.', ref: 'AGK' },
{ f: 'Detonation versus pre-ignition', b: 'Detonation: explosive burning AFTER the spark. Pre-ignition: ignition BEFORE the spark by a hot spot.', ref: 'AGK' },
{ f: 'Four cures for detonation', b: 'Enrich the mixture, reduce power, open cowl flaps, increase airspeed.', ref: 'AGK' },
{ f: 'Avgas 100LL colour', b: 'Blue. Jet A-1 is straw or clear.', ref: 'AGK' },
{ f: 'When is carb icing most likely?', b: 'Low power, humid air, descent with the throttle back. Possible from about -10 to +30 C OAT.', ref: 'AGK' },
{ f: 'Expected effect of applying carb heat with no ice', b: 'A small RPM drop — hot air is less dense.', ref: 'AGK' },
{ f: 'Fuel injection versus carburettor', b: 'No carb icing, but more prone to vapour locking and hot-start difficulty.', ref: 'AGK' },
{ f: 'Are magnetos electrically independent?', b: 'Yes — engine-driven. The engine runs with the master off; a broken earth lead makes a prop live.', ref: 'AGK' },
{ f: 'No RPM drop on a magneto check means', b: 'A probable faulty earth — a defect, not a good sign.', ref: 'AGK' },
{ f: 'Five functions of engine oil', b: 'Lubricate, cool, clean, seal, protect against corrosion.', ref: 'AGK' },
{ f: 'High oil temperature with low oil pressure', b: 'Probable oil loss. Land as soon as possible.', ref: 'AGK' },
{ f: 'Geometric pitch minus effective pitch', b: 'Slip.', ref: 'AGK' },
{ f: 'Increasing forward speed at constant RPM', b: 'Reduces blade angle of attack.', ref: 'AGK' },
{ f: 'Constant speed prop: power increase and decrease order', b: 'Increase: RPM then throttle. Decrease: throttle then RPM. Avoid high MP with low RPM.', ref: 'AGK' },
{ f: 'Why leave tanks full overnight?', b: 'To minimise condensation and water contamination.', ref: 'AGK' },
{ f: 'Ammeter discharge plus low voltage light', b: 'Alternator failure. Shed loads, plan to land. Engine unaffected.', ref: 'AGK' },
{ f: 'How many times may you reset a circuit breaker?', b: 'Once. Never if there is any smell of burning.', ref: 'AGK' },
{ f: 'Vacuum failure — what is lost?', b: 'Attitude indicator and direction indicator. The turn indicator is usually electric.', ref: 'AGK' },
{ f: 'Pitot and static — which instruments?', b: 'Pitot: ASI only. Static: ASI, altimeter, VSI.', ref: 'AGK' },
{ f: 'Static blocked, climbing — ASI?', b: 'Under-reads. Altimeter frozen, VSI zero.', ref: 'AGK' },
{ f: 'Pitot blocked with trapped pressure, climbing — ASI?', b: 'Over-reads, behaving like an altimeter.', ref: 'AGK' },
{ f: 'Alternate static source effect', b: 'Vents into the cabin (lower pressure), so the altimeter usually over-reads slightly.', ref: 'AGK' },
{ f: 'Which gyro property for AI/DI, and for the turn indicator?', b: 'Rigidity in space for AI and DI. Precession for the turn indicator.', ref: 'AGK' },
{ f: 'Why realign the DI?', b: 'Real drift (bearing friction) and apparent drift (Earth rotation). Do it in straight and level unaccelerated flight.', ref: 'AGK' },
{ f: 'Slip versus skid ball indication', b: 'Slip: ball to the inside. Skid: ball to the outside. Step on the ball.', ref: 'AGK' },
{ f: 'C of A versus ARC', b: 'C of A does not expire while maintained. The ARC is the annual document that does.', ref: 'AGK' },
{ f: 'ADs versus Service Bulletins', b: 'ADs mandatory. SBs advisory unless mandated by an AD.', ref: 'AGK' },
{ f: 'Basic empty mass versus dry operating mass', b: 'Dry operating mass adds crew, their baggage and removable equipment.', ref: 'AGK' },
{ f: 'Why does maximum zero fuel mass exist?', b: 'Wing fuel relieves wing bending loads, so extra mass beyond MZFM must be fuel in the wings.', ref: 'AGK' },
{ f: 'Pitot heat — what does it actually protect?', b: 'The pitot head and its drain hole, so the ASI keeps working. Nothing else. On many light types the static ports are unheated.', ref: 'Pitot-static anti-icing' },
{ f: 'When do you select pitot heat?', b: 'Before entering visible moisture in air near or below freezing. It prevents ice; it does not reliably clear it once formed.', ref: 'Pitot heat — operation' },
{ f: 'Ammeter versus loadmeter — what does each read on alternator failure?', b: 'An ammeter sits in the battery lead and reads charge or discharge, so it swings negative. A loadmeter sits in the alternator lead and reads only alternator output, so it falls to zero and never goes negative.', ref: 'AGK — electrics' },
      { f: 'Pitot heat — electrical load and how you confirm it is working?', b: 'A resistance heater, typically a 5 to 10 A circuit; selecting it gives a visible swing on the ammeter or loadmeter.', ref: 'Pitot heat — electrical load' },
{ f: 'Why keep the pitot heat ground check brief?', b: 'No cooling airflow on the ramp, so the element overheats and can burn out — and the tube gets hot enough to burn your hand.', ref: 'Pitot heat — ground check' },
{ f: 'Windscreen ice protection — light aeroplane versus larger type?', b: 'Light: hot air from the cabin heat exchanger, for misting and light frost only. Larger: an electrically heated laminated screen with a conductive film, thermostatically controlled.', ref: 'Windscreen anti-icing' }
]
};
