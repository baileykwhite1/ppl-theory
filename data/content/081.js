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
<figure data-d="induceddrag"></figure>
<p>A real wing has ends. Higher pressure below spills round the tip to the lower pressure above,
creating <b>wingtip vortices</b> and a general <b>downwash</b> behind the wing. Consequences:
the effective angle of attack is reduced, the lift vector is tilted rearwards, and the rearward
component is <b>induced drag</b>. Vortex strength increases with <b>high weight, low speed and
clean configuration</b> — which is exactly the configuration of a heavy aircraft rotating or on
short final, hence the wake turbulence separation minima.</p>
<p><b>Aspect ratio</b> is span squared divided by area (roughly span over average chord). A
<b>high</b> aspect ratio wing has weaker tip effects and therefore <b>less induced drag</b> —
which is why gliders have long thin wings.</p>

<h3>The boundary layer</h3>
<p>Air has <b>viscosity</b>, so it sticks to a surface. At the skin itself the air is stationary relative to the wing — the <b>no-slip condition</b> — and the speed rises through a very thin layer until it matches the free stream. That layer is the <b>boundary layer</b>: millimetres thick near the leading edge, thickening towards the trailing edge. All of the skin friction, and all of the stall, happen inside it.</p>
<p>It comes in two forms:</p>
<ul>
<li><b>Laminar</b> — smooth sheets sliding over one another, starting at the leading edge. Thin, with a gentle velocity gradient at the skin, so it gives <b>low skin friction drag</b>. But it carries little energy close to the surface.</li>
<li><b>Turbulent</b> — chaotic mixing. Thicker, with a steeper velocity gradient at the skin, so <b>more skin friction drag</b> — but the mixing drags fast-moving air down towards the surface, so it has <b>more energy</b> where it matters and clings on far better.</li>
</ul>
<p>The changeover is the <b>transition point</b>. It moves <b>forward</b> with surface roughness, damage, contamination and increasing angle of attack.</p>
<p>Aft of the point of minimum pressure — near the highest point of the upper surface — static pressure rises again towards the trailing edge. From there the boundary layer is running uphill against an <b>adverse pressure gradient</b>. Slowed by friction and pushed back by the rising pressure, the flow closest to the skin eventually stops and reverses, and the airflow leaves the surface. That is the <b>separation point</b>.</p>
<p>Increase the angle of attack and the suction peak sharpens, the adverse gradient steepens, and the separation point <b>moves forward from the trailing edge</b>. While the separated area is small the wing keeps working. Past the critical angle it has marched far enough forward to destroy the upper-surface suction, and that is the stall. Because a turbulent layer withstands the adverse gradient better, keeping it attached is worth a small drag penalty: <b>vortex generators</b> — the small vanes standing proud of the wing, or set ahead of a control surface — stir high-energy free-stream air down into the boundary layer, holding the flow on to a higher angle.</p>

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
<figure data-d="flapTypes"></figure>
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
<figure data-d="axes"></figure>
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

<h3>Tabs and aerodynamic balance</h3>
<p>A control surface hinged at its leading edge is heavy to move at speed, because every bit of
its area lies behind the hinge. <b>Aerodynamic balance</b> is any means of reducing that
<b>hinge moment</b>, and so the stick force, without taking away the control's authority.</p>
<p>You already know one tab. The <b>trim tab</b> is set by the pilot and deflects <b>opposite</b>
to the control surface, holding it in place so the stick force falls to zero. The <b>balance</b>
and <b>anti-balance</b> tabs are not set by the pilot at all; the linkage works them as the
surface moves. The <b>servo tab</b> is the odd one out — it is the only surface the pilot's
controls reach.</p>
<table>
<thead><tr><th>Tab</th><th>How it moves</th><th>Stick force</th></tr></thead>
<tbody>
<tr><td>Trim tab</td><td>Set by the pilot, opposite to the surface</td><td>Zero, for one chosen attitude</td></tr>
<tr><td>Balance tab</td><td>Automatically, <b>opposite</b> to the surface</td><td><b>Reduced</b></td></tr>
<tr><td>Anti-balance tab</td><td>Automatically, the <b>same way</b> as the surface</td><td><b>Increased</b></td></tr>
<tr><td>Servo tab</td><td>Moved by the pilot, opposite to the way the surface is to go</td><td>Very light</td></tr>
</tbody></table>
<p>With a <b>servo tab</b> the controls are connected to the tab alone; the surface itself is
free to float. Deflect the tab and the load on it swings the control surface round — the airflow
does the work, not your arm. It makes very large surfaces manageable, but it needs dynamic
pressure, so it is weak at very low speed.</p>
<p>An <b>all-moving tailplane (stabilator)</b> pivots close to its own aerodynamic centre, so
almost no force is needed to move it. Pitch would be dangerously light and over-sensitive, and
easy to overstress. The <b>anti-balance tab</b> puts the feel back: because it deflects the same
way as the surface, the stick force rises with deflection and with speed. On many stabilator
aeroplanes the same tab also serves as the trim tab.</p>
<p>Two ways of reducing hinge moment without a tab: a <b>horn balance</b>, where part of the
surface near the tip projects forward of the hinge line, and an <b>inset (set-back) hinge</b>,
where the hinge line itself is moved aft so a strip of surface lies ahead of it. In both, the
airflow on the part ahead of the hinge helps the deflection. Neither can be taken far — too much
area ahead of the hinge and the control <b>overbalances</b>, running away from you instead of
centring. Do not confuse any of this with <b>mass balance</b>, a weight fitted ahead of the hinge
line to prevent <b>flutter</b>; that has nothing to do with stick force.</p>

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
<p>As altitude increases <b>V<sub>x</sub> increases and V<sub>y</sub> decreases</b> — as
indicated airspeeds they move towards each other from opposite directions. Where they meet the
rate of climb is zero and you are at the <b>absolute ceiling</b>.</p>

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
<p>A <b>slipping</b> turn has <b>too much bank</b> for the rate of turn (too little rudder) —
the aeroplane slides in towards the lower wing and the ball falls to the <b>inside</b>. A
<b>skidding</b> turn has <b>too much rudder</b>, so the rate of turn is too great for the bank —
the tail swings the aeroplane outwards and the ball goes to the <b>outside</b>. Either way, step
on the ball.</p>

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
<figure data-d="vndiagram"></figure>
<p>Normal category limits are typically <b>+3.8g and &minus;1.52g</b>; utility category
<b>+4.4g</b>; aerobatic <b>+6.0g</b>. The V-n diagram plots load factor against speed, bounded
by the stall on the left (a curve, because the stall limits the g available at low speed), the
structural limit above, and V<sub>NE</sub> on the right.</p>

<h3>Flutter</h3>
<p>Flutter is a vibration driven by the airflow, not by the pilot. A wing that bends upwards also
<b>twists</b>, because its stiffness axis coincides with neither its centre of lift nor its centre
of mass. The twist alters the angle of attack, which alters the lift, which drives the next bend
&mdash; and because the twisting lags the bending, the airflow does net work on the structure every
cycle. Flutter is that <b>coupling of bending and torsion</b>; either alone simply damps out.</p>
<p>It is a threshold, not a gradual onset. Aerodynamic forces rise with the <b>square of
speed</b>; stiffness and damping do not. Below the critical speed a disturbance dies away; above
it, the airstream feeds in more energy than the structure can absorb, and there is no warning
band. These modes oscillate several times a second, so once divergent the amplitude reaches
destructive levels in a second or two &mdash; seconds, not minutes. The only action is to slow
down at once.</p>
<p>A control surface free to rotate on its hinge is the usual culprit. Its mass lies behind the
hinge line, so when the wing flexes the surface's own inertia holds it back and it deflects:
exactly the input flutter needs. <b>Mass balance</b> &mdash; weight ahead of the hinge &mdash;
puts the surface's centre of gravity on or ahead of the hinge line, so inertia no longer drives
it. That balance is easily spoilt: extra coats of paint, a filler or fabric repair, trapped
water, ice, or a balance weight that has worked loose. CAP 747 GR No. 10 lists <b>loss of
correct mass balance moments on flight control surfaces</b> among the hazards of uncontrolled
painting &mdash; repainting a control surface is a maintenance task, not decoration.</p>
<p>This is what V<sub>NE</sub> protects. CS 23.1505 sets it at no more than the lesser of <b>0.9
V<sub>D</sub></b> and 0.9 times the maximum speed demonstrated under CS 23.251. CS 23.629 then
requires the flight flutter tests to make proper attempts to induce flutter <b>up to
V<sub>D</sub></b>, with a proper margin of damping still present there, and any rational flutter
analysis to cover all speeds <b>up to 1.2 V<sub>D</sub></b>. So the red line sits at least ten
per cent below the fastest speed ever flown &mdash; on a new, correctly balanced, correctly rigged
airframe. Paint, filler, ice, a tired hinge: each one eats into a margin you cannot feel shrinking.
It is a limit, not a target.</p>
<p>On the walk-round, hold each control surface near its trailing edge and feel for <b>free
play</b> at the hinges and in the linkage: slack lets the surface move independently of the
stick and lowers the flutter speed. Check the hinge bolts and their locking, and that every
balance weight and arm is present, secure and undamaged.</p>

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
},
{
  id: '081-propellers', title: 'The propeller, and what it does to your glide', mins: 6, tags: ['081.24', '081.25'],
  body: `
<h3>The blade is a rotating wing</h3>
<figure data-d="bladeAngle"></figure>
<p>Each propeller blade is a small, twisted, rotating wing. It meets the air at an angle of
attack and produces a total reaction: <b>thrust</b> along the flight path, and a force in the
plane of rotation that the engine's torque must overcome. Too much blade angle of attack and it
stalls, like any wing.</p>

<h3>Geometric pitch, effective pitch and slip</h3>
<p><b>Geometric pitch</b> is the distance the propeller would advance in one revolution if it
were a screw turning in a solid nut &mdash; a property of the blade's geometry. <b>Effective
pitch</b> is how far the aeroplane actually advances in one revolution. The difference is
<b>slip</b>, usually quoted as a percentage of geometric pitch.</p>
<p class="mono">slip = geometric pitch &minus; effective pitch</p>
<p>Slip is not a fault. The blade only makes thrust by meeting the air at a positive angle of
attack, which means the aeroplane must advance less than the geometric pitch.</p>

<h3>Blade angle is not angle of attack</h3>
<ul>
<li><b>Blade angle</b> (pitch angle) &mdash; between the blade's chord line and the <b>plane of
rotation</b>. On a fixed pitch propeller it is built in and never changes.</li>
<li><b>Helix angle</b>, or angle of advance &mdash; between the <b>relative airflow at the
blade</b> and the plane of rotation. That airflow is the resultant of the blade's rotational
speed and the aeroplane's forward TAS, so it depends on both RPM and airspeed.</li>
</ul>
<p class="mono">blade angle of attack = blade angle &minus; helix angle</p>
<p>At the holding point at full power the forward speed is nil, so the helix angle is nil and
the blade's angle of attack is the whole blade angle, near its stalling angle. Accelerate at
constant RPM and the helix angle grows, blade angle of attack falls, and so does thrust. A fixed
pitch propeller is only right at one combination of speed and RPM.</p>

<h3>Why the blade is twisted</h3>
<p>Rotational speed rises in proportion to radius, while forward speed is the same all along the
blade. The helix angle is therefore <b>large at the root and small at the tip</b>. To hold a
roughly constant angle of attack along the blade, the blade angle must fall to match:
<b>coarse at the root, fine at the tip</b>. Without that twist the inboard sections would be
stalled while the tips did almost nothing.</p>

<h3>Fixed pitch and constant speed</h3>
<p>A <b>fixed pitch</b> propeller is one compromise chosen at the factory: a finer <em>climb</em>
propeller favours take-off and climb, a coarser <em>cruise</em> propeller favours cruising speed.
A <b>constant speed</b> propeller breaks the compromise &mdash; you select the RPM and a governor
varies the blade angle to hold it, keeping a near-optimum angle of attack across the speed
range.</p>
<table>
<thead><tr><th>Setting</th><th>Blade angle</th><th>RPM</th><th>Used for</th></tr></thead>
<tbody>
<tr><td><b>Fine</b></td><td>Small</td><td>High</td><td>Take-off, landing, go-around &mdash; full power available</td></tr>
<tr><td><b>Coarse</b></td><td>Large</td><td>Low</td><td>Cruise &mdash; a bigger bite of air per revolution</td></tr>
<tr><td><b>Feather</b></td><td>About 90&deg;, edge-on</td><td>Zero</td><td>A failed engine. Minimum drag</td></tr>
</tbody></table>

<h3>Ice on the propeller</h3>
<p>Ice ruins a blade's aerofoil section as surely as it ruins a wing's: thrust falls and the
power absorbed for a given RPM rises. The propeller then adds a problem of its own. Ice builds
and sheds <b>unevenly</b> &mdash; centrifugal force and the higher outboard speeds throw it off
the tips while it clings near the roots &mdash; so the disc goes out of balance and the
<b>vibration can be severe</b>. If you suspect propeller icing on a constant speed unit, cycling
the RPM up and down may shed some of it (Safety Sense Leaflet 03).</p>

<h3>Windmilling drag, and your glide</h3>
<p>Stop the engine but leave the propeller free and the airflow drives it round instead. The
helix angle now exceeds the blade angle, so the blade's angle of attack is <b>negative</b>: the
total reaction tilts so that one component keeps the propeller turning and the other acts
<b>backwards along the flight path</b>. The propeller has become a windmill, taking power from
the airstream to turn a dead engine &mdash; and that power comes out of your height and
speed.</p>
<ul>
<li>A <b>windmilling</b> propeller drags far more than a <b>stopped</b> one. A stopped propeller
takes no power out of the airflow; a windmilling one does, continuously.</li>
<li>Windmilling in <b>fine</b> pitch is worse than windmilling in <b>coarse</b>.</li>
<li><b>Feathered</b> is least of all, and the propeller stops.</li>
</ul>
<p>More drag means a lower lift/drag ratio: a <b>steeper glide angle and less distance</b> from
the height you have. POH glide figures normally assume the propeller <b>windmilling</b>, flaps
up, zero wind &mdash; the published number is already the pessimistic case.</p>
<p>Feathering exists because of that drag. On a twin it is survival: the dead engine's
windmilling propeller adds drag and a large yawing moment, enough to take the single-engine climb
rate below zero. A typical PPL trainer cannot feather &mdash; a fixed pitch propeller cannot
change blade angle at all, and single-engine constant speed installations stop at a coarse limit
well short of feather.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li><b>Geometric</b> pitch is a property of the blade, <b>effective</b> pitch is what the
aeroplane achieves. Slip is the difference.</li>
<li>Blade angle is measured to the <b>plane of rotation</b>, angle of attack to the <b>relative
airflow</b>. Angle of attack = blade angle &minus; helix angle.</li>
<li>Blade angle <b>decreases</b> from root to tip, because helix angle <b>decreases</b> with
radius &mdash; rotational speed rises with radius while forward speed does not.</li>
<li>Fixed pitch at constant RPM: more airspeed means <b>less</b> blade angle of attack.</li>
<li>A <b>windmilling</b> propeller drags far more than a <b>stopped</b> one, and steepens the
glide.</li>
<li>Fine = small blade angle = high RPM. Coarse = large blade angle = low RPM.</li>
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
{ q: 'Flying below the minimum power speed, to fly slower in level flight you need:', a: ['Less power', 'More power', 'The same power', 'Flap'], c: 1, why: 'This is the region of reverse command: below the minimum power speed, flying slower needs more power, not less. Note the datum — below minimum <em>drag</em> speed you need more thrust, but power required is still falling until you reach the minimum power speed, which is slower again.', ref: 'PoF' },
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
{ q: 'Asymmetric blade effect (P-factor) is most pronounced:', a: ['At high speed and low angle of attack', 'At high power and high angle of attack', 'In the descent', 'At cruise power'], c: 1, why: 'At high angle of attack the descending blade has a greater effective angle of attack. Combined with slipstream, torque and gyroscopic effects, this is why right rudder is needed on take-off.', ref: 'PoF' },
{ q: 'The distance an aeroplane actually advances in one revolution of the propeller is the effective pitch. The difference between that and the geometric pitch is called:', a: ['Blade twist', 'The helix angle', 'Slip', 'Washout'], c: 2, why: 'Geometric pitch is fixed by the blade\'s geometry — the advance per revolution if the propeller were a screw turning in a solid nut. Slip is the shortfall, and it is necessary rather than wasteful: the blade only produces thrust because it meets the air at a positive angle of attack.', ref: 'Propeller pitch and slip' },
{ q: 'Propeller blade angle is the angle between the blade chord line and:', a: ['The plane of rotation', 'The relative airflow at the blade', 'The longitudinal axis of the aeroplane', 'The aeroplane\'s flight path'], c: 0, why: 'Blade angle is purely geometric and is measured to the plane of rotation; on a fixed pitch propeller it never changes. The angle between the chord and the relative airflow at the blade is the blade angle of attack, which equals blade angle minus helix angle.', ref: 'Blade angle and helix angle' },
{ q: 'A propeller blade is twisted from root to tip because:', a: ['A twisted blade is stronger and better resists centrifugal bending', 'Local speed increases with radius, so the blade angle must decrease towards the tip to keep the angle of attack roughly constant', 'The blade angle must increase towards the tip to compensate for the lower dynamic pressure there', 'Twist prevents a tip vortex forming on the blade'], c: 1, why: 'Rotational speed is proportional to radius while forward speed is the same everywhere along the blade, so the helix angle falls towards the tip. Blade angle is reduced to match — coarse at the root, fine at the tip — which keeps the angle of attack and the thrust reasonably even along the blade.', ref: 'Blade twist' },
{ q: 'On a fixed pitch propeller at constant RPM, an increase in forward airspeed will:', a: ['Increase the blade angle', 'Increase the blade angle of attack and increase thrust', 'Decrease the blade angle of attack and decrease thrust', 'Leave the blade angle of attack unchanged'], c: 2, why: 'Forward speed increases the helix angle while the blade angle is fixed, and blade angle of attack is blade angle minus helix angle. The reverse applies at the start of the take-off roll, where nil forward speed leaves the blade working at almost its full blade angle.', ref: 'Fixed pitch propeller' },
{ q: 'After an engine failure in a single-engine aeroplane, a windmilling propeller compared with one that has stopped will give:', a: ['Less drag, because it is turning with the airflow', 'More drag, but the same glide angle', 'The same drag, since the frontal area is unchanged', 'More drag, and a steeper glide angle'], c: 3, why: 'A windmilling propeller extracts power from the airstream to turn the engine, and the only source of that power is the aeroplane\'s height and speed. The extra drag lowers the lift/drag ratio, so the glide angle steepens and the distance achieved falls. A stopped propeller takes no power out of the airflow.', ref: 'Windmilling drag' },
{ q: 'A propeller is feathered when the blades are set:', a: ['At the fine pitch stop, so that the engine can be restarted', 'At the coarse pitch stop normally used in the cruise', 'At roughly 90 degrees to the plane of rotation, nearly edge-on to the airflow', 'At a negative blade angle, to give reverse thrust'], c: 2, why: 'Feathering turns the blades almost edge-on so that the propeller stops and its drag is minimised. It matters most on a twin, where a windmilling propeller on the dead engine adds both drag and yaw. A typical PPL trainer cannot feather: a fixed pitch propeller cannot change blade angle at all, and single-engine constant speed units stop well short of feather.', ref: 'Feathering' },
{ q: 'Ice accreting on the propeller blades in flight will:', a: ['Reduce thrust, and can cause severe vibration as the ice sheds unevenly', 'Have no real effect, because centrifugal force removes it as fast as it forms', 'Increase thrust, because the iced blade section is more cambered', 'Affect engine cooling only, not propeller performance'], c: 0, why: 'Ice spoils the blade\'s aerofoil section, so thrust falls and the power absorbed for a given RPM rises. It also builds and sheds unevenly, putting the disc out of balance, and the resulting vibration can be severe. CAA Safety Sense Leaflet 03 suggests cycling the RPM on a constant speed unit to shed some of it.', ref: 'Safety Sense Leaflet 03' },
{ q: 'Compared with a laminar boundary layer, a turbulent boundary layer:', a: ['Gives less skin friction drag and separates more readily', 'Gives more skin friction drag but resists separation better', 'Gives less skin friction drag and resists separation better', 'Gives more skin friction drag and separates more readily'], c: 1, why: 'Mixing inside a turbulent layer drags fast-moving air down towards the skin. That steepens the velocity gradient at the surface, so friction drag rises — but the extra energy near the surface lets the flow keep running against a rising pressure, so separation is delayed. Designers pay the drag to keep the flow attached.', ref: 'Boundary layer — laminar and turbulent' },
{ q: 'As the angle of attack of a wing is increased towards the stall, the separation point on the upper surface:', a: ['Moves progressively forward from the trailing edge', 'Moves rearwards towards the trailing edge', 'Stays fixed at the transition point', 'Jumps to the leading edge only once the critical angle is passed'], c: 0, why: 'Separation starts near the trailing edge at low angles and creeps forward as the adverse pressure gradient steepens. It is already moving well before the critical angle; the stall is simply the point at which it has moved far enough forward to destroy the upper-surface suction.', ref: 'Flow separation at increasing angles of attack' },
{ q: 'A boundary layer forms over a wing because:', a: ['Air is compressible', 'The upper surface is cambered', 'Static pressure falls where the air accelerates', 'Air is viscous and will not slip at the surface'], c: 3, why: 'Viscosity plus the no-slip condition: the air touching the skin is stationary relative to it, and the speed rises across a thin layer to the free stream value. Camber and Bernoulli explain the pressure distribution, not the existence of the layer — a flat plate has a boundary layer too.', ref: 'The boundary layer' },
{ q: 'Vortex generators delay flow separation because they:', a: ['Reduce the skin friction drag of the wing', 'Increase the camber of the aerofoil', 'Mix high-energy free-stream air into the boundary layer', 'Weaken the wingtip vortices'], c: 2, why: 'They deliberately make the layer turbulent and energised, mixing faster air from above down towards the surface so it can run further against the adverse pressure gradient. They cost a little drag rather than saving it; changing camber is what flaps do, and weakening tip vortices is what winglets do.', ref: 'Boundary layer control' },
{ q: 'On the walk-round you find noticeable free play at an aileron hinge. It matters because it:', a: ['Lowers the speed at which flutter can begin', 'Increases the stick force required in the cruise', 'Is the usual cause of adverse yaw', 'Reduces the authority of the trim tab'], c: 0, why: 'Play lets the surface rotate independently of the control run, so it can be driven by its own inertia and by the airflow instead of being held by the pilot. That extra degree of freedom is exactly what flutter needs, and every bit of slack lowers the critical speed. Report it; do not fly it.', ref: 'Pre-flight control surface and hinge check' },
{ q: 'Flutter is best described as:', a: ['Buffet caused by separated airflow striking the tailplane', 'A coupled bending and torsional oscillation that draws its energy from the airflow', 'Airframe vibration caused by an out-of-balance propeller', 'The pre-stall buffet felt through the airframe and controls'], c: 1, why: 'Flutter needs two motions coupled together, typically bending and torsion. Because the twist lags the bend, the airflow does net work on the structure each cycle and the amplitude grows. Buffet and propeller vibration are forced vibrations with an external driver; they do not diverge.', ref: 'CS 23.629, Flutter' },
{ q: 'A mass balance weight fitted ahead of the hinge line of a control surface:', a: ['Reduces the stick force needed to deflect the surface', 'Prevents control reversal at high angles of attack', 'Moves the surface\'s centre of gravity on to or ahead of the hinge line, so inertia no longer deflects it', 'Offsets the download carried by the tailplane in the cruise'], c: 2, why: 'Mass balance is about where the weight is, not where the area is. Putting part of the surface ahead of the hinge, or fitting a horn balance, is aerodynamic balance and reduces stick force; it is not a flutter cure. Anything that shifts the surface\'s centre of gravity aft again — paint, filler, trapped water, ice — lowers the flutter speed.', ref: 'Mass balance versus aerodynamic balance' },
{ q: 'Why should Vₙₑ be treated as a limit rather than a speed to explore?', a: ['Above it the wing will stall at a load factor of 1', 'Above it the ASI over-reads, so the true airspeed is unknown', 'Above it full control deflection will overstress the airframe', 'Flutter testing is flown only up to the design dive speed Vᴅ, and Vₙₑ is set no higher than 0.9 Vᴅ — so the margin is small, and it shrinks if mass balance or stiffness has changed'], c: 3, why: 'Flutter has no warning band: below the critical speed a disturbance damps out, above it the amplitude diverges within seconds. CS 23.629 requires proper attempts to induce flutter up to Vᴅ, a proper margin of damping at Vᴅ, and any rational analysis to cover speeds up to 1.2 Vᴅ — all on a new, correctly balanced and rigged airframe. Paint, repairs, ice or worn hinges eat into that margin. Option three describes Vᴀ, not Vₙₑ.', ref: 'CS 23.1505 and CS 23.629' },
{ q: 'A balance tab moves:', a: ['In the same direction as the control surface, increasing the stick force', 'In the opposite direction to the control surface, reducing the stick force', 'Only when selected by the pilot, to hold a chosen attitude', 'In the opposite direction to the control surface, increasing the stick force'], c: 1, why: 'The linkage deflects the tab the other way when you deflect the surface. The load on the tab acts about the hinge in the direction you are already moving the surface, so the hinge moment and the stick force both fall. A tab that moves the same way as the surface is an anti-balance tab; a tab you set yourself is a trim tab.', ref: 'Aerodynamic balance - balance tab' },
{ q: 'An anti-balance tab is fitted to an all-moving tailplane (stabilator) because:', a: ['The stabilator has no other means of trim', 'It increases the lift the stabilator produces at low speed', 'It prevents flutter of the stabilator at high speed', 'The stabilator pivots near its own aerodynamic centre, so pitch control would otherwise be far too light'], c: 3, why: 'A stabilator hinged close to its aerodynamic centre has almost no hinge moment, so the control is over-sensitive and easy to over-control or overstress. The anti-balance tab deflects the same way as the surface, so stick force builds with deflection and with speed. Flutter is prevented by mass balance, not by a tab.', ref: 'Stabilator - anti-balance tab' },
{ q: 'In a servo tab system, the pilot controls are connected directly to:', a: ['The tab only - aerodynamic load on the tab then moves the control surface', 'The control surface only', 'Both the tab and the control surface together', 'Neither; the control surface is moved hydraulically'], c: 0, why: 'You move the tab, which deflects opposite to the way you want the surface to go; the load on the tab then drives the surface round. It makes very large surfaces movable by hand, but it depends on dynamic pressure, so it is weak at very low airspeed.', ref: 'Aerodynamic balance - servo tab' },
{ q: 'Moving a control surface hinge line too far aft would:', a: ['Increase the stick force at all speeds', 'Have no effect until high speed is reached', 'Overbalance the control, so that it tends to keep deflecting rather than centring', 'Reduce the maximum deflection available'], c: 2, why: 'An inset (set-back) hinge leaves part of the surface ahead of the hinge, and the airflow on that part helps the deflection. Taken too far, the helping moment exceeds the opposing one and the surface runs away from the pilot - overbalance. A horn balance does the same job by the same means and has the same limit.', ref: 'Aerodynamic balance - inset hinge and horn balance' }
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
{ f: 'Four propeller effects yawing you left', b: 'Slipstream, torque reaction, gyroscopic effect, asymmetric blade effect (P-factor).', ref: 'PoF' },
{ f: 'Geometric pitch and effective pitch?', b: 'Geometric = the advance per revolution if the propeller were a screw in a solid nut. Effective = the advance the aeroplane actually achieves. The difference is slip.', ref: 'Propeller pitch' },
{ f: 'Blade angle of attack — made up of what?', b: 'Blade angle (chord to the plane of rotation) minus helix angle (relative airflow at the blade to the plane of rotation).', ref: 'Blade angle and AoA' },
{ f: 'Why is a propeller blade twisted?', b: 'Local speed rises with radius, so the helix angle falls towards the tip. Blade angle decreases from root to tip to hold a roughly constant angle of attack.', ref: 'Blade twist' },
{ f: 'Fixed pitch propeller at constant RPM, airspeed increases — blade angle of attack?', b: 'It decreases, and thrust falls with it. The helix angle has grown while the blade angle is fixed.', ref: 'Fixed pitch propeller' },
{ f: 'Fine and coarse pitch — blade angle, RPM, when?', b: 'Fine = small blade angle, high RPM, take-off and landing. Coarse = large blade angle, low RPM, cruise.', ref: 'Constant speed propeller' },
{ f: 'Windmilling or stopped propeller — which drags more?', b: 'Windmilling, by a long way. It takes power out of the airstream to turn the engine, so the glide angle steepens and you go less far.', ref: 'Windmilling drag' },
{ f: 'Feathered propeller?', b: 'Blades turned to roughly 90 degrees to the plane of rotation, edge-on to the airflow. Minimum drag, and the propeller stops. Not available on a typical PPL trainer.', ref: 'Feathering' },
{ f: 'Ice on the propeller — two effects?', b: 'Thrust falls as the blade section is spoiled, and uneven shedding unbalances the disc, causing vibration that can be severe.', ref: 'Propeller icing' },
{ f: 'Why is there a boundary layer at all?', b: 'Air is viscous and will not slip at the surface: speed is zero at the skin and rises across a thin layer to the free stream.', ref: 'The boundary layer' },
{ f: 'Laminar boundary layer — friction and separation?', b: 'Low skin friction drag, but little energy near the surface, so it separates readily.', ref: 'Boundary layer types' },
{ f: 'Turbulent boundary layer — friction and separation?', b: 'More skin friction drag, but more energy near the surface, so it resists separation.', ref: 'Boundary layer types' },
{ f: 'Adverse pressure gradient — where is it, and what does it do?', b: 'Aft of the point of minimum pressure, static pressure rises towards the trailing edge. The boundary layer runs uphill against it, slows, reverses and separates.', ref: 'Separation point' },
{ f: 'Which way does the separation point move as angle of attack increases?', b: 'Forward, from the trailing edge. When it has moved far enough forward the wing stalls.', ref: 'Flow separation and angle of attack' },
{ f: 'Flutter — which two motions couple?', b: 'Bending and torsion. The twist lags the bend, so the airflow does net work on the structure every cycle and the amplitude grows.', ref: 'Flutter' },
{ f: 'Why is flutter speed-dependent?', b: 'Aerodynamic forces rise with the square of speed; stiffness and damping do not. Below the critical speed a disturbance damps out, above it the oscillation diverges. There is no warning band.', ref: 'Flutter' },
{ f: 'Mass balance — where is the weight and what does it achieve?', b: 'Ahead of the hinge line. It puts the surface\'s centre of gravity on or ahead of the hinge, so inertia can no longer deflect the surface when the structure flexes. That raises the flutter speed.', ref: 'Mass balance' },
{ f: 'Four things that can spoil a control surface\'s mass balance', b: 'Extra coats of paint, a filler or fabric repair, water trapped inside the surface or ice on it, and a loose or missing balance weight. CAP 747 GR No. 10 lists loss of correct mass balance moments among the hazards of uncontrolled painting.', ref: 'CAP 747 GR No. 10, Painting of Aircraft' },
{ f: 'How much margin is there above Vₙₑ?', b: 'At least ten per cent up to Vᴅ: CS 23.1505 sets Vₙₑ at no more than 0.9 Vᴅ. CS 23.629 requires flight flutter tests to attempt to induce flutter up to Vᴅ with a proper margin of damping there, and any rational analysis to cover all speeds up to 1.2 Vᴅ — on a new, correctly balanced airframe. Paint, repairs, ice or free play eat into it.', ref: 'CS 23.1505 / CS 23.629' },
{ f: 'Balance tab - which way does it move, and what does it do to stick force?', b: 'Opposite to the control surface. It reduces the stick force.', ref: 'Aerodynamic balance' },
{ f: 'Anti-balance tab - which way does it move, and what does it do to stick force?', b: 'The same way as the control surface. It increases the stick force, restoring feel.', ref: 'Aerodynamic balance' },
{ f: 'Why does an all-moving tailplane (stabilator) need an anti-balance tab?', b: 'It pivots near its own aerodynamic centre, so pitch would be far too light and over-sensitive. The tab puts the stick force back, rising with deflection and speed.', ref: 'Stabilator' },
{ f: 'Servo tab - what does the pilot actually move?', b: 'Only the tab. Aerodynamic load on the tab then drives the control surface. Weak at very low airspeed.', ref: 'Aerodynamic balance' },
{ f: 'Two aerodynamic balance methods that are not tabs', b: 'Horn balance and inset (set-back) hinge - both put surface area ahead of the hinge line. Too much area gives overbalance.', ref: 'Aerodynamic balance' }
]
};
