/* 081 Principles of Flight (Aeroplane) — articles, quiz bank, flashcards. */
window.SC = window.SC || {};
window.SC['081'] = {
articles: [
{
  id: '081-lift', title: 'Lift and the aerofoil', mins: 7, tags: ['081.01', '081.02', '081.03'],
  body: `
<h3>The vocabulary, precisely</h3>
<ul>
<li><b>Chord line</b> — the straight line from leading edge to trailing edge.</li>
<li><b>Angle of attack</b> — the angle between the chord line and the <b>relative airflow</b>.
Not the angle to the horizon, and not the angle to the fuselage.</li>
<li><b>Angle of incidence</b> — the fixed rigging angle between the chord line and the
longitudinal axis. It does not change in flight.</li>
<li><b>Camber</b> — the curvature of the aerofoil; the mean camber line lies midway between
upper and lower surfaces.</li>
<li><b>Centre of pressure</b> — the point through which the total reaction acts.</li>
</ul>
<p>Attitude and angle of attack are different things, and the difference is the whole reason
aeroplanes stall in level flight and in dives.</p>

<h3>Why there is lift</h3>
<p>Air accelerating over the more curved upper surface has lower static pressure (Bernoulli:
in a streamline flow, total pressure is constant, so where dynamic pressure rises static
pressure falls). Simultaneously the wing deflects a mass of air downwards, and by Newton's
third law the reaction is upwards. Both descriptions are correct and describe the same
phenomenon. What matters practically is the <b>pressure distribution</b>: most of the lift comes
from <b>reduced pressure on the upper surface</b>, not from increased pressure below.</p>

<figure data-d="aerofoil"></figure>
<h3>The lift formula</h3>
<p class="mono">L = C<sub>L</sub> &frac12; &rho; V&sup2; S</p>
<p>Where C<sub>L</sub> is the lift coefficient (a function of angle of attack and aerofoil
shape), &rho; is air density, V is true airspeed and S is wing area. Read what it tells you:</p>
<ul>
<li>Lift varies with the <b>square</b> of speed. Double the speed, four times the lift at the
same angle of attack.</li>
<li>To maintain constant lift in level flight, as speed increases the angle of attack must
<b>decrease</b>. That is the whole of speed control.</li>
<li>&frac12;&rho;V&sup2; is <b>dynamic pressure</b>, which is what the ASI actually measures.
Because the ASI is fooled by density in the same proportion as the wing is, a given
<b>indicated</b> airspeed always corresponds to the same dynamic pressure — which is why stall
speed and Vne are quoted as indicated speeds.</li>
</ul>

<h3>C<sub>L</sub> against angle of attack</h3>
<p>C<sub>L</sub> rises almost linearly with angle of attack up to <b>C<sub>L</sub> max</b>,
reached at the <b>stalling angle</b> — typically around <b>15 to 16&deg;</b> for a light
aeroplane — and then falls away as the flow separates. The stalling <em>angle</em> is a
property of the aerofoil and is essentially fixed. The stalling <em>speed</em> is not; it
depends on weight, load factor and configuration.</p>

<h3>Centre of pressure movement</h3>
<p>On a conventional cambered aerofoil, as angle of attack increases from small values, the
centre of pressure moves <b>forward</b>. At the stall it moves sharply <b>rearward</b>, which
produces a nose-down pitching moment and is a helpful, self-correcting characteristic.</p>

<h3>The three-dimensional wing</h3>
<p>A real wing has ends. Higher pressure below spills round the tip to the lower pressure above,
creating <b>wingtip vortices</b> and a general <b>downwash</b> behind the wing. Consequences:
the effective angle of attack is reduced, the lift vector is tilted rearwards, and the rearward
component is <b>induced drag</b>. Vortex strength increases with <b>high weight, low speed and
clean configuration</b> — which is exactly the configuration of a heavy aircraft rotating or on
short final, hence the wake turbulence separation minima.</p>
<p><b>Aspect ratio</b> is span squared divided by area (roughly span over average chord). A
<b>high</b> aspect ratio wing has weaker tip effects and therefore <b>less induced drag</b> —
which is why gliders have long thin wings.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Angle of attack is measured to the <b>relative airflow</b>.</li>
<li>Most lift comes from <b>reduced pressure above</b>.</li>
<li>Lift varies with the <b>square</b> of the speed.</li>
<li>The stalling <b>angle</b> is fixed; the stalling <b>speed</b> varies.</li>
</ul></div>`
},
{
  id: '081-drag', title: 'Drag, and the speed that matters', mins: 6, tags: ['081.05', '081.06'],
  body: `
<h3>Two kinds of drag, pulling in opposite directions</h3>
<p><b>Parasite drag</b> (form + skin friction + interference) is caused by moving an
awkwardly-shaped object through air. It increases with the <b>square of speed</b>: go faster,
much more of it.</p>
<p><b>Induced drag</b> is the price of making lift, and it is a consequence of downwash and tip
vortices. It is <b>inversely proportional to the square of speed</b>: go slower and you need a
higher angle of attack, stronger vortices, and much more of it. It also increases with the
<b>square of weight</b>, and decreases with increasing aspect ratio.</p>

<h3>The total drag curve</h3>
<p>Add the two and you get a U-shaped curve with a minimum. That minimum is where parasite and
induced drag are <b>equal</b>, and it is the single most useful speed on the aeroplane:</p>
<ul>
<li>Minimum total drag = <b>maximum lift/drag ratio</b> = <b>V<sub>MD</sub></b>.</li>
<li>It gives the <b>best glide angle</b> and therefore the greatest gliding distance.</li>
<li>For a propeller aeroplane it gives the <b>maximum range</b> in still air.</li>
<li>It is the speed for <b>best angle of climb</b> region and the basis of V<sub>x</sub>.</li>
</ul>
<p>Below V<sub>MD</sub> you are on the <b>back of the drag curve</b> — the region of reverse
command, where flying <em>slower</em> requires <em>more</em> power, and where speed stability
is poor. That is where a badly-flown final approach lives.</p>

<figure data-d="dragcurve"></figure>
<h3>Minimum power versus minimum drag</h3>
<p>Power required is drag multiplied by speed, so the minimum-power speed is <b>slower</b> than
the minimum-drag speed — roughly 76% of V<sub>MD</sub>. Minimum power gives <b>maximum
endurance</b> (longest time airborne) and the <b>minimum rate of descent</b> in a glide; minimum
drag gives maximum range and the <b>best glide angle</b>. Endurance and range are different
questions and have different answers.</p>

<h3>Effect of weight on the glide</h3>
<p>This one is worth getting right because instinct is wrong. A heavier aeroplane glides at a
<b>higher speed</b> for the same angle of attack, but the <b>glide angle and therefore the still
air distance are unchanged</b> — the lift/drag ratio has not altered. What does change is the
rate of descent (higher) and the time to the ground (shorter). Weight changes the speed, not
the distance.</p>
<p>Wind, on the other hand, changes distance considerably: with a headwind, increase the glide
speed slightly to reduce the time exposed to it; with a tailwind, reduce it.</p>

<h3>Ground effect</h3>
<p>Within roughly one wingspan of the surface, the ground interferes with the downwash and the
tip vortices. Induced drag falls, effective angle of attack rises, and the aeroplane behaves as
though it has suddenly become more efficient. Symptoms: a tendency to float on landing, and on
take-off an aircraft that lifts off in ground effect and then will not climb once out of it.
There is also a nose-down pitching tendency from the changed downwash over the tailplane.</p>

<h3>Devices</h3>
<p><b>Flaps</b> increase camber, raising C<sub>L</sub> max so the stall speed falls, and
increasing drag — which is why they steepen the approach without increasing speed. Small
deflections give proportionately more lift; large deflections give proportionately more drag.
Lowering flap generally requires a <b>lower nose attitude</b> for the same speed and improves
the view. <b>Slots and slats</b> re-energise the boundary layer at the leading edge, delaying
separation to a <b>higher</b> stalling angle. <b>Spoilers</b> destroy lift and increase drag.
<b>Winglets</b> reduce induced drag by interfering with the tip vortex.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Induced drag varies with <b>1/V&sup2;</b>; parasite with <b>V&sup2;</b>.</li>
<li>Minimum drag speed = best L/D = best glide <b>angle</b> and best range.</li>
<li>Minimum power speed = best endurance and minimum <b>rate</b> of descent, and is slower.</li>
<li>Weight does not change still-air glide distance.</li>
<li>Slots and slats raise the stalling <b>angle</b>; flaps lower the stalling <b>speed</b>.</li>
</ul></div>`
},
{
  id: '081-stall', title: 'The stall and the spin', mins: 7, tags: ['081.07', '081.09'],
  body: `
<h3>What a stall actually is</h3>
<p>A stall is the <b>separation of airflow from the upper surface</b> when the critical angle
of attack is exceeded, causing a loss of lift and a large increase in drag. It has nothing to
do with the engine, and everything to do with angle of attack. You can stall at any speed and
in any attitude — including nose-down at high speed, if you pull hard enough.</p>

<figure data-d="clcurve"></figure>
<h3>What changes the stall speed</h3>
<table>
<thead><tr><th>Factor</th><th>Effect on stall speed</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Increased <b>weight</b></td><td>Higher</td><td>More lift needed; stall speed varies with the square root of weight</td></tr>
<tr><td>Increased <b>load factor</b> (turning, pulling)</td><td>Higher</td><td>Varies with the square root of load factor</td></tr>
<tr><td><b>Flap</b> lowered</td><td>Lower</td><td>Higher C<sub>L</sub> max</td></tr>
<tr><td><b>Power</b> on</td><td>Lower</td><td>Slipstream over the wing root and a vertical thrust component</td></tr>
<tr><td><b>Ice</b> or contamination</td><td>Higher</td><td>Aerofoil shape destroyed; can be dramatically higher</td></tr>
<tr><td><b>Forward</b> CG</td><td>Higher</td><td>Greater download on the tail adds to the effective weight</td></tr>
<tr><td><b>Aft</b> CG</td><td>Lower</td><td>But stability and spin recovery suffer</td></tr>
</tbody></table>
<p>The two square-root relationships are the ones to be able to use. Increase weight by 21%
and the stall speed rises by about 10%. Pull 2g and the stall speed rises by 41%.</p>

<h3>Stall speed in a turn</h3>
<p>In a balanced level turn, load factor <b>n = 1 / cos(bank angle)</b> and stall speed
increases by the square root of n:</p>
<table>
<thead><tr><th>Bank</th><th>Load factor</th><th>Stall speed multiplier</th></tr></thead>
<tbody>
<tr><td>30&deg;</td><td>1.15</td><td>1.07</td></tr>
<tr><td>45&deg;</td><td>1.41</td><td>1.19</td></tr>
<tr><td><b>60&deg;</b></td><td><b>2.0</b></td><td><b>1.41</b></td></tr>
<tr><td>75&deg;</td><td>3.9</td><td>1.97</td></tr>
</tbody></table>
<p>Sixty degrees of bank doubles your effective weight and adds 41% to your stall speed. That is
the arithmetic behind the base-to-final stall-spin accident.</p>

<figure data-d="turnforces"></figure>
<h3>Symptoms and recovery</h3>
<p>Approaching the stall: decreasing airspeed, high nose attitude, reduced effectiveness and
sloppiness of the controls, buffet, the stall warner, and a sinking feeling. Recovery, in
order:</p>
<ol>
<li><b>Reduce the angle of attack</b> — move the control column progressively forward. This is
the only action that actually un-stalls the wing, and it must come first.</li>
<li><b>Apply full power</b> (with carb heat cold) to minimise height loss.</li>
<li><b>Prevent further yaw with rudder</b>; do not use aileron to pick up a dropped wing while
stalled.</li>
<li>Once unstalled, level the wings and <b>ease out of the descent</b> without a secondary
stall.</li>
</ol>

<h3>Wing drop, and why aileron is wrong</h3>
<p>If one wing stalls first it drops, and the descending wing meets the airflow at a
<em>higher</em> angle of attack, stalling it more deeply — <b>autorotation</b>. Applying
aileron to lift it increases that wing's angle of attack still further and makes it worse.
Rudder to prevent yaw, and unstall first.</p>
<p>A <b>spin</b> is a stall plus autorotation: both wings stalled, one more than the other,
with yaw and roll. Standard recovery (confirm your POH): close throttle, ailerons neutral, full
<b>opposite rudder</b>, then control column progressively forward until rotation stops, centralise
rudder, and level out.</p>

<h3>Designing in good manners</h3>
<p>Designers make the <b>root</b> stall before the tip so the ailerons stay effective and the
buffet is felt early. <b>Washout</b> (less incidence at the tip) is the usual method; others
are a different tip aerofoil section, stall strips at the root, and slots or vortex generators
outboard.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Stall is about angle of attack, not speed.</li>
<li>Stall speed varies with the <b>square root</b> of weight and of load factor.</li>
<li>60&deg; bank: n = 2, stall speed &times;1.41.</li>
<li>First recovery action: reduce angle of attack. Not power.</li>
<li>Power-on stall speed is <b>lower</b> than power-off.</li>
</ul></div>`
},
{
  id: '081-stability', title: 'Stability, control and the CG', mins: 7, tags: ['081.14', '081.15', '081.17'],
  body: `
<h3>Static and dynamic</h3>
<p><b>Static stability</b> is the initial tendency after a disturbance: positive means it starts
to return, neutral means it stays displaced, negative means it diverges. <b>Dynamic stability</b>
describes what happens next: positive dynamic stability means the oscillation damps out, neutral
means it continues undamped, negative means it grows. An aeroplane can be statically stable but
dynamically unstable — the oscillation gets bigger each time. You cannot have positive dynamic
stability without positive static stability.</p>

<h3>Three axes, three stabilities</h3>
<table>
<thead><tr><th>Axis</th><th>Motion</th><th>Stability</th><th>Provided mainly by</th><th>Control</th></tr></thead>
<tbody>
<tr><td>Lateral (wingtip to wingtip)</td><td>Pitch</td><td>Longitudinal</td><td>Tailplane, and CG position</td><td>Elevator</td></tr>
<tr><td>Longitudinal (nose to tail)</td><td>Roll</td><td>Lateral</td><td>Dihedral, keel surface, high wing, sweepback</td><td>Ailerons</td></tr>
<tr><td>Normal (vertical)</td><td>Yaw</td><td>Directional</td><td>Fin</td><td>Rudder</td></tr>
</tbody></table>
<p>Note the crossover that catches everyone: motion <em>about</em> the lateral axis is pitch,
and its stability is called <em>longitudinal</em>. Learn the pairs as pairs.</p>

<h3>Longitudinal stability and the CG</h3>
<p>The dominant factor is the <b>position of the CG relative to the centre of pressure</b> and
the moment arm to the tailplane. The further <b>forward</b> the CG, the longer the arm, and the
more longitudinally stable the aeroplane.</p>
<table>
<thead><tr><th></th><th>Forward CG</th><th>Aft CG</th></tr></thead>
<tbody>
<tr><td>Longitudinal stability</td><td>More stable</td><td>Less stable</td></tr>
<tr><td>Stick forces</td><td>Heavier</td><td>Lighter</td></tr>
<tr><td>Stall speed</td><td>Higher</td><td>Lower</td></tr>
<tr><td>Cruise performance / range</td><td>Worse (more tail download, more trim drag)</td><td>Better</td></tr>
<tr><td>Stall and spin recovery</td><td>Easier</td><td>Harder — may be unrecoverable</td></tr>
<tr><td>Elevator authority at low speed</td><td>May be insufficient to flare</td><td>Ample</td></tr>
</tbody></table>
<p>That table is worth memorising as a block. Both extremes are dangerous, for different
reasons.</p>

<h3>Lateral and directional coupling</h3>
<p>Roll and yaw are not independent. Two named consequences:</p>
<ul>
<li><b>Spiral instability</b> — strong directional stability with weak lateral stability. A wing
drop yaws the aircraft into the turn, which increases the outer wing's speed and lift, which
steepens the bank: a spiral dive. Common and mild in light aeroplanes.</li>
<li><b>Dutch roll</b> — strong lateral stability with weak directional stability. An oscillating
combination of yaw and roll. Unpleasant, and the reason some designs have yaw dampers.</li>
</ul>

<h3>Adverse yaw</h3>
<p>Roll left and the down-going right aileron produces more lift <em>and</em> more induced drag,
yawing the nose <b>right</b> — the wrong way. Cures built into the aeroplane: <b>differential
ailerons</b> (the up-going aileron deflects more than the down-going), <b>Frise ailerons</b>
(the up-going aileron's nose protrudes into the airflow to add drag on that side). Cure in the
cockpit: <b>rudder in the direction of roll</b>.</p>

<h3>Trim, and what it does not do</h3>
<p>Trim relieves the stick force needed to hold a given attitude. It does not change the
aeroplane's performance and it is not a means of controlling the aeroplane — the sequence is
always attitude and power first, then trim to hold it. Correctly trimmed, the aeroplane will
hold its speed hands-off.</p>

<h3>Propeller effects</h3>
<p>Four effects, all of which yaw a typical clockwise-turning (viewed from the cockpit) engine
to the <b>left</b> at high power and low speed:</p>
<ul>
<li><b>Slipstream</b> — the corkscrewing flow strikes one side of the fin.</li>
<li><b>Torque reaction</b> — the airframe rolls opposite to the propeller, loading one wheel.</li>
<li><b>Gyroscopic effect</b> — raising or lowering the tail precesses the disc, most noticeable
in a tailwheel aeroplane.</li>
<li><b>Asymmetric blade effect</b> (P-factor) — at high angle of attack the descending blade has
a greater effective angle of attack and produces more thrust.</li>
</ul>
<p>Which is why you need right rudder on take-off in most training aeroplanes.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Pitch is about the <b>lateral</b> axis but its stability is <b>longitudinal</b>.</li>
<li>Dihedral gives <b>lateral</b> stability; the fin gives <b>directional</b>.</li>
<li>Aft CG lowers stall speed and stick forces but degrades stability and spin recovery.</li>
<li>Adverse yaw is towards the <b>raised</b> wing — the opposite of the roll.</li>
</ul></div>`
},
{
  id: '081-mechanics', title: 'Flight mechanics and the V-speeds', mins: 6, tags: ['081.11', '081.27'],
  body: `
<h3>The four forces</h3>
<p>In <b>steady straight and level flight</b>, all forces and moments are in equilibrium:
lift equals weight, thrust equals drag. Strictly, lift plus the vertical component of thrust
balances weight, and the couples formed by lift/weight and thrust/drag balance each other with
help from the tailplane — which is why the tailplane usually carries a <b>download</b>.</p>

<h3>Climb</h3>
<p>In a steady climb, thrust must overcome drag <em>plus</em> the component of weight acting
down the flight path. Because the flight path is inclined, the lift required is slightly
<b>less</b> than weight. So in a climb, lift is less than weight — a favourite question.</p>
<ul>
<li><b>V<sub>x</sub></b>, best angle of climb: the speed giving maximum <b>excess thrust</b>.
Greatest height gained per unit of <em>distance</em>. Use it to clear an obstacle. Slower.</li>
<li><b>V<sub>y</sub></b>, best rate of climb: the speed giving maximum <b>excess power</b>.
Greatest height gained per unit of <em>time</em>. Use it to get up quickly. Faster.</li>
</ul>
<p>Both decrease with altitude, and they converge; where they meet, the rate of climb is zero
and you are at the absolute ceiling.</p>

<h3>Descent and glide</h3>
<p>In a glide there is no thrust, so a component of weight provides the propulsive force. The
glide angle depends only on <b>lift/drag ratio</b> — best L/D gives the flattest glide. Glide
ratio is distance over height: an L/D of 10 means 10 NM from 6000 ft, roughly, ignoring wind.</p>

<h3>Turning</h3>
<p>In a turn, lift is tilted; its <b>horizontal component provides the centripetal force</b>
that turns the aeroplane, and the vertical component must still support the weight. So total
lift must increase, which means a higher angle of attack, which means more induced drag, which
is why you need power to hold altitude in a turn.</p>
<ul>
<li>Load factor <b>n = 1/cos(bank)</b>; stall speed multiplied by the square root of n.</li>
<li>For a given bank angle, rate of turn <b>decreases</b> and radius <b>increases</b> as speed
increases. So the tightest, fastest turn is slow and steeply banked.</li>
<li>Rate one (standard rate) is 3&deg; per second, 180&deg; in one minute. A rough rule for
bank angle: <b>speed in knots divided by 10, plus 7</b>.</li>
</ul>
<p>A <b>slipping</b> turn has too little bank for the rate of turn (or too much rudder into the
turn) — the ball is towards the inside. A <b>skidding</b> turn has too much bank or too much
rate — ball towards the outside. Step on the ball.</p>

<h3>The V-speeds and the limitations they protect</h3>
<table>
<thead><tr><th>Speed</th><th>Meaning</th><th>Marking</th></tr></thead>
<tbody>
<tr><td><b>V<sub>S0</sub></b></td><td>Stall speed, landing configuration (full flap)</td><td>Bottom of the white arc</td></tr>
<tr><td><b>V<sub>S1</sub></b></td><td>Stall speed, clean</td><td>Bottom of the green arc</td></tr>
<tr><td><b>V<sub>FE</sub></b></td><td>Maximum flaps extended</td><td>Top of the white arc</td></tr>
<tr><td><b>V<sub>NO</sub></b></td><td>Maximum structural cruising — smooth air only above it</td><td>Top of the green arc / start of yellow</td></tr>
<tr><td><b>V<sub>NE</sub></b></td><td>Never exceed</td><td>Red line</td></tr>
<tr><td><b>V<sub>A</sub></b></td><td>Manoeuvring speed — full control deflection will stall the wing before it breaks the aeroplane</td><td>Not marked; in the POH</td></tr>
</tbody></table>
<p>Two subtleties that are examined relentlessly. First, the <b>yellow arc</b> (between
V<sub>NO</sub> and V<sub>NE</sub>) may only be used in <b>smooth air</b> and with caution.
Second, <b>V<sub>A</sub> reduces as weight reduces</b> — a lighter aeroplane accelerates to its
limit load factor more readily, so it must be flown more slowly in turbulence. It is the one
limitation that gets <em>more</em> restrictive as you get lighter.</p>

<figure data-d="asiarcs"></figure>
<h3>Airspeeds, in order</h3>
<p><b>IAS</b> what the instrument shows. Correct for instrument and position error to get
<b>CAS</b>. Correct for compressibility (irrelevant below about 200 kt) to get <b>EAS</b>.
Correct for density (altitude and temperature) to get <b>TAS</b>. TAS exceeds IAS by roughly
<b>2% per 1000 ft</b> of altitude — a useful mental check. Add the wind and you get
groundspeed.</p>

<h3>The load factor envelope</h3>
<p>Normal category limits are typically <b>+3.8g and &minus;1.52g</b>; utility category
<b>+4.4g</b>; aerobatic <b>+6.0g</b>. The V-n diagram plots load factor against speed, bounded
by the stall on the left (a curve, because the stall limits the g available at low speed), the
structural limit above, and V<sub>NE</sub> on the right.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>In a climb, lift is <b>less</b> than weight.</li>
<li>V<sub>x</sub> is slower and gives the best <b>angle</b>; V<sub>y</sub> is faster and gives
the best <b>rate</b>.</li>
<li>The <b>horizontal component</b> of lift turns the aeroplane.</li>
<li>For a given bank, faster means <b>lower rate</b> and <b>bigger radius</b>.</li>
<li>V<sub>A</sub> <b>decreases</b> with decreasing weight.</li>
<li>The yellow arc is smooth air only.</li>
</ul></div>`
}
],

quiz: [
{ q: 'The angle of attack is the angle between the chord line and:', a: ['The horizon', 'The relative airflow', 'The longitudinal axis', 'The mean camber line'], c: 1, why: 'Angle of attack is measured to the relative airflow. The fixed angle to the longitudinal axis is the angle of incidence.', ref: 'PoF' },
{ q: 'Most of the lift produced by a conventional aerofoil comes from:', a: ['Increased pressure on the lower surface', 'Reduced pressure on the upper surface', 'Engine thrust', 'The tailplane'], c: 1, why: 'The reduced pressure over the upper surface accounts for the majority of the lift.', ref: 'PoF' },
{ q: 'If speed is doubled at a constant angle of attack, lift will:', a: ['Double', 'Increase four times', 'Increase eight times', 'Stay the same'], c: 1, why: 'Lift varies with the square of the speed.', ref: 'PoF' },
{ q: 'To maintain level flight as speed increases, angle of attack must:', a: ['Increase', 'Decrease', 'Stay constant', 'Increase then decrease'], c: 1, why: 'Lift must stay constant, so as V rises, CL and therefore angle of attack must fall.', ref: 'PoF' },
{ q: 'The stalling angle of attack of a typical light aeroplane is about:', a: ['4 degrees', '10 degrees', '16 degrees', '30 degrees'], c: 2, why: 'Around 15 to 16 degrees, and it is essentially fixed for the aerofoil.', ref: 'PoF' },
{ q: 'As angle of attack increases from a small value on a cambered aerofoil, the centre of pressure:', a: ['Moves forward', 'Moves rearward', 'Does not move', 'Moves to the tip'], c: 0, why: 'It moves forward with increasing angle of attack, then sharply rearward at the stall.', ref: 'PoF' },
{ q: 'Induced drag is caused by:', a: ['Skin friction', 'Wingtip vortices and downwash associated with lift production', 'Form drag', 'Interference between components'], c: 1, why: 'Induced drag is the rearward component of the tilted lift vector, a consequence of downwash and tip vortices.', ref: 'PoF' },
{ q: 'Induced drag varies:', a: ['With the square of speed', 'Inversely with the square of speed', 'Directly with speed', 'Independently of speed'], c: 1, why: 'Induced drag is inversely proportional to V squared; parasite drag is proportional to V squared.', ref: 'PoF' },
{ q: 'Wingtip vortex strength is greatest when the aircraft is:', a: ['Light, fast and with flap down', 'Heavy, slow and clean', 'Light, slow and clean', 'Heavy, fast and with flap down'], c: 1, why: 'Heavy, slow and clean — the wake turbulence worst case, as on rotation or short final.', ref: 'PoF' },
{ q: 'A higher aspect ratio wing has:', a: ['More induced drag', 'Less induced drag', 'The same induced drag', 'More parasite drag at low speed'], c: 1, why: 'Weaker tip effects, so less induced drag. Hence long thin glider wings.', ref: 'PoF' },
{ q: 'Minimum total drag occurs when:', a: ['Induced drag is zero', 'Parasite drag is zero', 'Induced and parasite drag are equal', 'Speed is at VNE'], c: 2, why: 'The minimum of the total drag curve is where the two components are equal. That speed is VMD, the best L/D speed.', ref: 'PoF' },
{ q: 'The speed for the best glide angle is:', a: ['Minimum drag speed', 'Minimum power speed', 'VNO', 'VA'], c: 0, why: 'Best glide angle corresponds to maximum L/D, i.e. minimum drag speed. Minimum power speed gives minimum rate of descent.', ref: 'PoF' },
{ q: 'The speed for maximum endurance in a piston aeroplane is:', a: ['Minimum drag speed', 'Minimum power speed', 'Best rate of climb speed', 'VNE'], c: 1, why: 'Maximum endurance is achieved at minimum power required, which is slower than minimum drag speed.', ref: 'PoF' },
{ q: 'Flying below the minimum drag speed, to fly slower in level flight you need:', a: ['Less power', 'More power', 'The same power', 'Flap'], c: 1, why: 'This is the back of the drag curve, the region of reverse command. Slower requires more power.', ref: 'PoF' },
{ q: 'Increasing the weight of a glider in still air:', a: ['Reduces the still-air glide distance', 'Increases the still-air glide distance', 'Does not change the still-air glide distance but increases the glide speed', 'Reduces the rate of descent'], c: 2, why: 'The L/D ratio and therefore glide angle are unchanged. Speed and rate of descent both increase.', ref: 'PoF' },
{ q: 'Lowering flap:', a: ['Increases CL max and decreases stall speed', 'Decreases CL max and increases stall speed', 'Raises the stalling angle of attack', 'Reduces drag'], c: 0, why: 'Flap increases camber and CL max, lowering the stall speed, and increases drag. Slots and slats are what raise the stalling angle.', ref: 'PoF' },
{ q: 'The purpose of a leading edge slot is to:', a: ['Increase the stall speed', 'Delay separation to a higher angle of attack', 'Reduce parasite drag', 'Reduce the stalling angle'], c: 1, why: 'It re-energises the boundary layer, delaying separation to a higher stalling angle.', ref: 'PoF' },
{ q: 'In ground effect:', a: ['Induced drag increases', 'Induced drag decreases', 'Parasite drag decreases', 'Lift decreases'], c: 1, why: 'The ground interferes with downwash and tip vortices, reducing induced drag. Hence float on landing.', ref: 'PoF' },
{ q: 'A stall is caused by:', a: ['Insufficient airspeed', 'Engine failure', 'Exceeding the critical angle of attack', 'Excessive weight'], c: 2, why: 'Airflow separates when the critical angle of attack is exceeded. It can happen at any speed.', ref: 'PoF' },
{ q: 'Stall speed varies with:', a: ['Weight', 'The square of weight', 'The square root of weight', 'The cube of weight'], c: 2, why: 'The square root of weight, and likewise the square root of load factor.', ref: 'PoF' },
{ q: 'In a balanced level 60 degree banked turn, the load factor is:', a: ['1.15', '1.41', '2.0', '3.9'], c: 2, why: 'n = 1/cos 60 = 2.0, and stall speed is multiplied by the square root of 2, about 1.41.', ref: 'PoF' },
{ q: 'If the clean stall speed is 50 kt, the stall speed in a 60 degree banked level turn is about:', a: ['50 kt', '58 kt', '71 kt', '100 kt'], c: 2, why: '50 x 1.41 = about 71 kt.', ref: 'PoF' },
{ q: 'Compared with a power-off stall, a power-on stall occurs at:', a: ['A higher speed', 'A lower speed', 'The same speed', 'A lower angle of attack'], c: 1, why: 'Slipstream over the wing root and a vertical thrust component lower the power-on stall speed.', ref: 'PoF' },
{ q: 'The first and most important action in stall recovery is to:', a: ['Apply full power', 'Reduce the angle of attack', 'Level the wings with aileron', 'Apply rudder'], c: 1, why: 'Only reducing the angle of attack un-stalls the wing. Power then minimises height loss.', ref: 'PoF' },
{ q: 'A wing drops at the stall. You should:', a: ['Apply opposite aileron', 'Prevent further yaw with rudder and unstall the wing', 'Apply aileron into the drop', 'Increase back pressure'], c: 1, why: 'Aileron on a stalled wing increases its angle of attack and worsens autorotation. Rudder to prevent yaw, and unstall first.', ref: 'PoF' },
{ q: 'Designers make the wing root stall before the tip in order to:', a: ['Reduce induced drag', 'Retain aileron effectiveness and give early buffet warning', 'Increase CL max', 'Improve cruise speed'], c: 1, why: 'Root-first stalling keeps the ailerons working and puts the buffet where the pilot feels it. Washout is the usual method.', ref: 'PoF' },
{ q: 'A spin is:', a: ['A steep turn at high load factor', 'A stall combined with autorotation, both wings stalled unequally', 'A spiral dive', 'An unbalanced turn'], c: 1, why: 'Both wings stalled, one more deeply, with yaw and roll. A spiral dive by contrast is unstalled and accelerating.', ref: 'PoF' },
{ q: 'Motion about the lateral axis is:', a: ['Roll, and its stability is lateral', 'Pitch, and its stability is longitudinal', 'Yaw, and its stability is directional', 'Pitch, and its stability is lateral'], c: 1, why: 'Pitch is about the lateral axis, and pitch stability is called longitudinal stability.', ref: 'PoF' },
{ q: 'Lateral stability is provided mainly by:', a: ['The fin', 'Dihedral, keel surface and high wing position', 'The tailplane', 'The elevator'], c: 1, why: 'Dihedral is the classic source of lateral (roll) stability. The fin provides directional stability.', ref: 'PoF' },
{ q: 'Moving the CG aft will:', a: ['Increase stability and increase stall speed', 'Reduce stability and reduce stall speed', 'Increase stability and reduce stall speed', 'Have no effect on stability'], c: 1, why: 'Aft CG reduces longitudinal stability and stick forces, and lowers stall speed, but degrades spin recovery.', ref: 'PoF' },
{ q: 'A very forward CG will:', a: ['Lighten the stick forces', 'Improve range', 'Increase the stall speed and may leave insufficient elevator authority to flare', 'Make the aircraft less stable'], c: 2, why: 'Forward CG means more tail download, a higher stall speed, heavier stick forces, more trim drag and possibly insufficient elevator authority at low speed.', ref: 'PoF' },
{ q: 'An aircraft that is statically stable but whose oscillations grow in amplitude is:', a: ['Dynamically stable', 'Dynamically neutral', 'Dynamically unstable', 'Statically unstable'], c: 2, why: 'Static stability describes the initial tendency; dynamic describes the subsequent oscillation. Growing oscillations mean negative dynamic stability.', ref: 'PoF' },
{ q: 'Spiral instability results from:', a: ['Strong directional stability with weak lateral stability', 'Strong lateral stability with weak directional stability', 'Neutral static stability', 'An aft CG'], c: 0, why: 'Strong fin, weak dihedral. Dutch roll is the opposite combination.', ref: 'PoF' },
{ q: 'Rolling to the left, adverse yaw will yaw the nose:', a: ['Left', 'Right', 'Not at all', 'Downwards'], c: 1, why: 'The down-going right aileron creates extra induced drag, yawing the nose right, away from the roll. Rudder in the direction of roll cures it.', ref: 'PoF' },
{ q: 'Differential ailerons work by:', a: ['Deflecting the up-going aileron more than the down-going', 'Deflecting both equally', 'Adding a spoiler', 'Increasing camber'], c: 0, why: 'More up than down, which equalises the drag and reduces adverse yaw. Frise ailerons project the up-going aileron nose into the airflow instead.', ref: 'PoF' },
{ q: 'The purpose of trim is to:', a: ['Change the aircraft performance', 'Relieve the control force needed to hold an attitude', 'Replace elevator control', 'Increase stability'], c: 1, why: 'Trim relieves stick force. Attitude and power first, then trim.', ref: 'PoF' },
{ q: 'In a steady climb, lift is:', a: ['Greater than weight', 'Equal to weight', 'Less than weight', 'Zero'], c: 2, why: 'On an inclined flight path only a component of weight acts perpendicular to it, so required lift is less than weight.', ref: 'PoF' },
{ q: 'Vx gives:', a: ['The greatest height gain per unit of time', 'The greatest height gain per unit of distance', 'The best glide', 'Maximum endurance'], c: 1, why: 'Vx is best angle of climb (height per distance, for obstacle clearance) and is the slower speed. Vy is best rate (height per time).', ref: 'PoF' },
{ q: 'What provides the turning force in a balanced turn?', a: ['The rudder', 'The horizontal component of lift', 'The vertical component of lift', 'Thrust'], c: 1, why: 'The horizontal component of lift provides the centripetal force. The vertical component still balances weight.', ref: 'PoF' },
{ q: 'For a given bank angle, increasing speed will:', a: ['Increase rate of turn and decrease radius', 'Decrease rate of turn and increase radius', 'Increase both rate and radius', 'Have no effect'], c: 1, why: 'Faster means a lower rate of turn and a larger radius. The tightest turn is slow and steep.', ref: 'PoF' },
{ q: 'The bottom of the white arc on the ASI indicates:', a: ['VS1', 'VS0', 'VFE', 'VNO'], c: 1, why: 'Bottom of white = VS0, stall speed in the landing configuration. Bottom of green = VS1, clean stall.', ref: 'PoF' },
{ q: 'The top of the green arc corresponds to:', a: ['VNE', 'VNO', 'VFE', 'VA'], c: 1, why: 'VNO, maximum structural cruising speed. Above it, in the yellow arc, smooth air only.', ref: 'PoF' },
{ q: 'The yellow arc on the ASI may be used:', a: ['At any time', 'In smooth air only and with caution', 'Only with flap extended', 'Only in the descent'], c: 1, why: 'Between VNO and VNE, smooth air only.', ref: 'PoF' },
{ q: 'As weight decreases, VA:', a: ['Increases', 'Decreases', 'Stays the same', 'Becomes equal to VNE'], c: 1, why: 'A lighter aircraft reaches its limit load factor more readily, so VA decreases with weight. It is more restrictive when light.', ref: 'PoF' },
{ q: 'Full control deflection above VA risks:', a: ['A stall', 'Structural damage', 'Engine overspeed', 'Flap damage'], c: 1, why: 'Below VA the wing stalls before the structural limit is reached. Above it, full deflection can overstress the airframe.', ref: 'PoF' },
{ q: 'TAS compared with IAS at 10,000 ft is approximately:', a: ['The same', '10% higher', '20% higher', '20% lower'], c: 2, why: 'Roughly 2% per 1000 ft, so about 20% higher at 10,000 ft.', ref: 'PoF' },
{ q: 'Typical normal category limit load factors are:', a: ['+3.8 g and -1.52 g', '+4.4 g and -1.76 g', '+6.0 g and -3.0 g', '+2.5 g and -1.0 g'], c: 0, why: '+3.8/-1.52 normal, +4.4 utility, +6.0 aerobatic.', ref: 'PoF' },
{ q: 'Asymmetric blade effect (P-factor) is most pronounced:', a: ['At high speed and low angle of attack', 'At high power and high angle of attack', 'In the descent', 'At cruise power'], c: 1, why: 'At high angle of attack the descending blade has a greater effective angle of attack. Combined with slipstream, torque and gyroscopic effects, this is why right rudder is needed on take-off.', ref: 'PoF' }
],

cards: [
{ f: 'Angle of attack — measured to what?', b: 'The relative airflow. Angle of incidence is the fixed rigging angle to the longitudinal axis.', ref: 'PoF' },
{ f: 'Where does most lift come from?', b: 'Reduced pressure over the upper surface.', ref: 'PoF' },
{ f: 'The lift formula', b: 'L = CL x 1/2 rho V squared x S. Lift varies with the square of speed.', ref: 'PoF' },
{ f: 'Stalling angle of a light aeroplane', b: 'About 15 to 16 degrees, and essentially fixed.', ref: 'PoF' },
{ f: 'Centre of pressure movement with increasing AoA', b: 'Forward — then sharply rearward at the stall.', ref: 'PoF' },
{ f: 'Parasite versus induced drag with speed', b: 'Parasite proportional to V squared. Induced inversely proportional to V squared.', ref: 'PoF' },
{ f: 'When are wingtip vortices strongest?', b: 'Heavy, slow and clean.', ref: 'PoF' },
{ f: 'Effect of high aspect ratio', b: 'Less induced drag.', ref: 'PoF' },
{ f: 'Minimum total drag occurs when', b: 'Induced drag equals parasite drag. This is VMD, best L/D.', ref: 'PoF' },
{ f: 'Best glide angle speed', b: 'Minimum drag speed (best L/D). Gives greatest still-air distance.', ref: 'PoF' },
{ f: 'Minimum rate of descent / best endurance speed', b: 'Minimum power speed — slower than VMD (about 76% of it).', ref: 'PoF' },
{ f: 'Back of the drag curve', b: 'Below VMD: flying slower needs more power. Poor speed stability.', ref: 'PoF' },
{ f: 'Effect of extra weight on still-air glide distance', b: 'No change. Glide speed and rate of descent both increase.', ref: 'PoF' },
{ f: 'Flap versus slats: what do they change?', b: 'Flap lowers the stall SPEED (higher CL max). Slots/slats raise the stalling ANGLE.', ref: 'PoF' },
{ f: 'Ground effect', b: 'Within about one wingspan: induced drag falls, tends to float, plus a nose-down pitch change.', ref: 'PoF' },
{ f: 'Definition of a stall', b: 'Airflow separation from the upper surface when the critical angle of attack is exceeded.', ref: 'PoF' },
{ f: 'Stall speed varies with', b: 'The square root of weight, and the square root of load factor.', ref: 'PoF' },
{ f: 'Load factor at 30 / 45 / 60 degrees bank', b: '1.15 / 1.41 / 2.0. Stall speed multipliers 1.07 / 1.19 / 1.41.', ref: 'PoF' },
{ f: 'Power on versus power off stall speed', b: 'Power on is lower — slipstream and a vertical thrust component.', ref: 'PoF' },
{ f: 'First action in stall recovery', b: 'Reduce the angle of attack. Then full power, rudder to prevent yaw, then level and ease out.', ref: 'PoF' },
{ f: 'Why not use aileron on a dropped wing at the stall?', b: 'It raises that wing angle of attack further and deepens autorotation. Use rudder to prevent yaw.', ref: 'PoF' },
{ f: 'Washout', b: 'Less incidence at the tip, so the root stalls first — keeps ailerons effective and gives early buffet.', ref: 'PoF' },
{ f: 'Axes and their stabilities', b: 'Lateral axis = pitch = longitudinal stability. Longitudinal axis = roll = lateral stability. Normal axis = yaw = directional stability.', ref: 'PoF' },
{ f: 'What gives lateral stability?', b: 'Dihedral, keel surface, high wing, sweepback. The fin gives directional.', ref: 'PoF' },
{ f: 'Aft CG — four consequences', b: 'Less stable, lighter stick forces, lower stall speed, better cruise — but spin recovery may be impossible.', ref: 'PoF' },
{ f: 'Forward CG — four consequences', b: 'More stable, heavier stick forces, higher stall speed, more trim drag — and possibly not enough elevator to flare.', ref: 'PoF' },
{ f: 'Static versus dynamic stability', b: 'Static: initial tendency to return. Dynamic: whether the resulting oscillation damps out.', ref: 'PoF' },
{ f: 'Spiral instability versus Dutch roll', b: 'Spiral: strong directional, weak lateral. Dutch roll: strong lateral, weak directional.', ref: 'PoF' },
{ f: 'Adverse yaw direction', b: 'Towards the raised wing — opposite to the roll. Cure with rudder in the direction of roll.', ref: 'PoF' },
{ f: 'In a climb, is lift greater or less than weight?', b: 'Less than weight.', ref: 'PoF' },
{ f: 'Vx versus Vy', b: 'Vx: best angle, height per distance, slower, max excess thrust. Vy: best rate, height per time, faster, max excess power.', ref: 'PoF' },
{ f: 'What turns the aeroplane in a turn?', b: 'The horizontal component of lift.', ref: 'PoF' },
{ f: 'Effect of increasing speed at constant bank', b: 'Rate of turn decreases, radius increases.', ref: 'PoF' },
{ f: 'Rate one turn', b: '3 degrees per second, 180 degrees in a minute. Bank angle roughly (speed in kt / 10) + 7.', ref: 'PoF' },
{ f: 'ASI arc markings', b: 'White: VS0 to VFE. Green: VS1 to VNO. Yellow: VNO to VNE, smooth air only. Red line: VNE.', ref: 'PoF' },
{ f: 'What does VA protect against, and how does weight affect it?', b: 'Structural overload from full control deflection. VA DECREASES as weight decreases.', ref: 'PoF' },
{ f: 'IAS to TAS rule of thumb', b: 'Add about 2% per 1000 ft.', ref: 'PoF' },
{ f: 'Limit load factors: normal, utility, aerobatic', b: '+3.8/-1.52, +4.4, +6.0.', ref: 'PoF' },
{ f: 'Four propeller effects yawing you left', b: 'Slipstream, torque reaction, gyroscopic effect, asymmetric blade effect (P-factor).', ref: 'PoF' }
]
};
