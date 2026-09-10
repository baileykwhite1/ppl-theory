/* 030 Flight Performance & Planning — articles, quiz bank, flashcards. */
window.SC = window.SC || {};
window.SC['030'] = {
articles: [
{
  id: '030-massbalance', title: 'Mass and balance', mins: 7, tags: ['031.01', '031.02', '031.03', '031.04'],
  body: `
<h3>Why it matters, in two sentences</h3>
<p><b>Mass</b> limits are structural and performance-based: too heavy and you exceed the design
strength, the stall speed rises, the climb suffers and the runway required grows. <b>Balance</b>
limits are about controllability and stability: outside the CG envelope the aeroplane may be
uncontrollable in pitch, or unrecoverable from a stall or spin. Both must be inside limits, and
both must remain so for the whole flight.</p>

<h3>The vocabulary</h3>
<ul>
<li><b>Datum</b> — an arbitrary reference point from which all distances are measured. It may be
the firewall, the propeller spinner, or a point ahead of the nose. It does not matter where, so
long as everything uses the same one.</li>
<li><b>Arm</b> (or moment arm) — the distance from the datum to the item. Behind the datum is
positive; ahead is negative.</li>
<li><b>Moment</b> — mass multiplied by arm. Units are kg&middot;m, kg&middot;in, lb&middot;in —
whatever the POH uses. Be consistent.</li>
<li><b>Centre of gravity</b> — total moment divided by total mass. It is a <em>weighted average
position</em>, which is why the calculation is a division at the end.</li>
</ul>

<figure data-d="massbalance"></figure>
<h3>The method, every time</h3>
<ol>
<li>Tabulate every item: basic empty mass, pilot, passengers, baggage in each compartment, fuel,
oil if not included.</li>
<li>Write the arm for each, from the POH loading data.</li>
<li>Multiply to get each moment; sum the masses and sum the moments.</li>
<li>Divide total moment by total mass to get the CG.</li>
<li>Check the total mass against MTOM, and plot the point on the CG envelope.</li>
<li><b>Repeat for the landing case</b> — subtract the trip fuel at the fuel tank arm and re-plot.
Both take-off and landing must be inside the envelope, and the CG moves as fuel burns.</li>
</ol>
<p>If the fuel tanks are close to the CG the point barely moves; if they are well ahead or behind
it, burning fuel can walk you out of the envelope. Which direction it moves is a favourite exam
question: if the tank arm is <b>aft</b> of the CG, burning fuel moves the CG <b>forward</b>.</p>

<h3>Shifting and adding load</h3>
<p>Two formulae do all the arithmetic:</p>
<p class="mono">CG shift = (mass moved &times; distance moved) &divide; total mass</p>
<p class="mono">CG shift = (mass added &times; distance from old CG) &divide; new total mass</p>
<p>Sanity check the direction rather than trusting the sign: moving mass aft moves the CG aft;
adding mass behind the CG moves the CG aft. If the answer disagrees with common sense, redo it.</p>

<h3>Effects of loading errors</h3>
<table>
<thead><tr><th></th><th>Overweight</th><th>CG too far forward</th><th>CG too far aft</th></tr></thead>
<tbody>
<tr><td>Stall speed</td><td>Higher</td><td>Higher</td><td>Lower</td></tr>
<tr><td>Take-off run</td><td>Longer</td><td>Longer (harder to rotate)</td><td>Shorter</td></tr>
<tr><td>Climb</td><td>Reduced</td><td>Reduced</td><td>Better</td></tr>
<tr><td>Stability</td><td>—</td><td>Excessive; heavy in pitch</td><td>Reduced; may be uncontrollable</td></tr>
<tr><td>Landing</td><td>Longer, higher speed</td><td>May be unable to flare</td><td>Tendency to float, hard to prevent</td></tr>
<tr><td>Range</td><td>Reduced</td><td>Reduced (trim drag)</td><td>Slightly improved</td></tr>
<tr><td>Spin recovery</td><td>—</td><td>Easier</td><td><b>May be impossible</b></td></tr>
</tbody></table>
<p>Note that overweight and forward CG both raise the stall speed, but aft CG lowers it — which
is why "lower stall speed" is never a reason to load aft.</p>

<h3>Fuel arithmetic</h3>
<p>Convert volume to mass with specific gravity: avgas about <b>0.72</b>, so 1 litre is about
0.72 kg. A common exam step: you have a maximum take-off mass, subtract the empty mass and the
people and the bags, and the remainder is the fuel you may carry — then convert to litres and
check it is enough for the flight plus reserves. If it is not, the answer is fewer passengers or
less baggage, not less reserve.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>You must check <b>both</b> take-off and landing CG.</li>
<li>Burning fuel from a tank <b>aft</b> of the CG moves the CG <b>forward</b>.</li>
<li>Aft CG <b>lowers</b> the stall speed. That is not a benefit.</li>
<li>Watch the units and the datum sign convention.</li>
</ul></div>`
},
{
  id: '030-performance', title: 'Take-off, landing and climb performance', mins: 7, tags: ['032.01', '032.02'],
  body: `
<h3>The four things that ruin performance</h3>
<p>Everything on the take-off run comes down to <b>air density</b> and <b>mass</b>. Density falls
with <b>altitude</b>, rising <b>temperature</b> and rising <b>humidity</b>; low <b>pressure</b>
does the same. Hence the mnemonic that is worth more than a formula: <b>hot, high, humid and
heavy</b> — every one of them lengthens the take-off run and flattens the climb.</p>

<h3>Density altitude</h3>
<p><b>Pressure altitude</b> is what the altimeter reads with <b>1013 hPa</b> set. <b>Density
altitude</b> is pressure altitude corrected for temperature — the altitude in the ISA at which
the density equals today's density. It is the number the aeroplane actually flies at. A useful
approximation: add about <b>120 ft per degree Celsius</b> above ISA. So an aerodrome at 1000 ft
on a 30 &deg;C day, when ISA there is about 13 &deg;C, has a density altitude around
1000 + (17 &times; 120) = about 3000 ft. The aeroplane will perform as though it were at
3000 ft.</p>

<figure data-d="runwaydist"></figure>
<h3>The factors, as multipliers</h3>
<p>The POH graphs are authoritative, but the CAA-style safety factors are what the exam and good
practice use for a rough check on take-off and landing distance:</p>
<table>
<thead><tr><th>Condition</th><th>Effect on distance</th></tr></thead>
<tbody>
<tr><td>+10% mass</td><td>&times;1.20 take-off, &times;1.10 landing</td></tr>
<tr><td>+1000 ft elevation</td><td>&times;1.10</td></tr>
<tr><td>+10 &deg;C temperature</td><td>&times;1.10</td></tr>
<tr><td>Dry grass (up to 20 cm)</td><td>&times;1.20 take-off, &times;1.15 landing</td></tr>
<tr><td>Wet grass</td><td>&times;1.30 take-off, &times;1.35 landing</td></tr>
<tr><td>2% uphill slope</td><td>&times;1.10 take-off (downhill helps take-off but hurts landing)</td></tr>
<tr><td>10% of TAS as tailwind</td><td>&times;1.20</td></tr>
<tr><td>Safety factor</td><td>&times;1.33 take-off, &times;1.43 landing</td></tr>
</tbody></table>
<p>These <b>multiply</b>, they do not add. Two adverse factors of 1.2 and 1.3 give 1.56, not
1.5.</p>

<h3>Wind, surface and slope</h3>
<p>A <b>headwind</b> shortens both take-off and landing; a <b>tailwind</b> lengthens both, and
disproportionately, which is why a tailwind take-off from a short strip is such a reliable way to
end up in the hedge. <b>Long or wet grass</b> increases rolling resistance and reduces
acceleration; wet grass also destroys braking, so it hurts landing more than take-off.
<b>Uphill</b> slope hurts the take-off run and helps the landing roll; downhill is the reverse.</p>

<h3>Runway distances</h3>
<ul>
<li><b>TORA</b> — take-off run available.</li>
<li><b>TODA</b> — take-off distance available: TORA plus any clearway.</li>
<li><b>ASDA</b> — accelerate-stop distance available: TORA plus any stopway.</li>
<li><b>LDA</b> — landing distance available.</li>
</ul>
<p><b>Take-off distance</b> is measured to a screen height of <b>50 ft</b>; <b>landing
distance</b> is from 50 ft to a full stop. The <b>take-off run</b> is to the point of lift-off.
Read carefully which one a question is asking for.</p>

<h3>Climb performance</h3>
<p>Rate of climb depends on <b>excess power</b>; angle of climb depends on <b>excess thrust</b>.
Both shrink with increased mass, increased altitude and increased temperature, and both are
degraded by flap (which adds drag). Consequences:</p>
<ul>
<li><b>V<sub>y</sub></b> (best rate, most height per minute) and <b>V<sub>x</sub></b> (best angle,
most height per unit distance) both <b>decrease with altitude</b> and converge at the absolute
ceiling.</li>
<li>The <b>service ceiling</b> is where the rate of climb falls to a defined small value
(commonly 100 ft/min); the <b>absolute ceiling</b> is where it reaches zero.</li>
<li>A <b>headwind steepens the climb gradient</b> over the ground without changing the rate of
climb — useful for obstacle clearance, and it is why the gradient and the rate are separate
concepts.</li>
</ul>

<h3>Cruise, range and endurance</h3>
<p><b>Range</b> is distance, and is maximised near the <b>minimum drag</b> speed for a
propeller aeroplane. <b>Endurance</b> is time, and is maximised at the <b>minimum power</b>
speed, which is slower. Wind changes range but not endurance. Higher mass reduces both.
Flying higher generally improves range in a piston aeroplane up to the point where the engine
can no longer produce useful power, because TAS rises for the same IAS.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Performance factors <b>multiply</b>.</li>
<li>Take-off and landing distances are measured to and from a <b>50 ft</b> screen.</li>
<li>Vx and Vy both <b>decrease</b> with altitude.</li>
<li>A headwind improves the climb <b>gradient</b>, not the rate of climb.</li>
<li>Density altitude, not pressure altitude, is what performance depends on.</li>
</ul></div>`
},
{
  id: '030-planning', title: 'Flight planning and the decisions in it', mins: 6, tags: ['033.01', '033.02', '034.01'],
  body: `
<h3>The order of work</h3>
<p>A good plan is built in a fixed order so nothing gets forgotten:</p>
<ol>
<li><b>Weather</b> — forecast charts, TAFs and METARs for departure, destination and alternate.
Decide whether the flight is on before you spend an hour on a plog.</li>
<li><b>NOTAMs and airspace</b> — temporary restrictions, closures, danger area activity, and any
notified events.</li>
<li><b>Route</b> — drawn on the chart, avoiding controlled airspace you cannot enter, with
sensible waypoints and turning points you will recognise.</li>
<li><b>Plog</b> — tracks, distances, safety altitudes, headings, groundspeeds, times.</li>
<li><b>Fuel</b> — trip, contingency, alternate, final reserve, plus taxi and extra.</li>
<li><b>Mass and balance</b> — with the fuel figure you have just calculated. If it does not fit,
go back to step 5 or reduce the payload.</li>
<li><b>Performance</b> — take-off and landing distances at today's mass, temperature, elevation,
surface and wind, at both ends of the flight.</li>
<li><b>Aerodrome details</b> — plates, frequencies, circuit directions, PPR, opening hours,
landing fees, and how you will get back.</li>
</ol>
<p>Note the dependency: fuel drives mass, mass drives performance. Do them in that order and you
will not have to redo them.</p>

<h3>Flight plans</h3>
<p>A full <b>ICAO flight plan</b> is required for certain flights — crossing an international
FIR boundary is the common trigger — and is optional but sensible otherwise, because it starts a
search if you do not arrive. File it in good time, and remember to <b>close it</b> on arrival:
failing to do so launches an alerting action. A <b>booking out</b> is the local alternative at
many aerodromes. Consider a <b>listening squawk</b> and a Basic Service as low-cost insurance
even on a local flight.</p>

<h3>Fuel, properly</h3>
<ul>
<li><b>Taxi</b> — a fixed allowance for start, taxi and power checks.</li>
<li><b>Trip</b> — climb, cruise and descent for the whole route at planned power. Do not forget
that the climb burns at a higher rate and covers less ground.</li>
<li><b>Contingency</b> — a percentage of trip fuel, for a headwind that is worse than forecast or
a routing you did not plan.</li>
<li><b>Alternate</b> — from destination to the alternate, including a missed approach.</li>
<li><b>Final reserve</b> — a fixed time at holding consumption. Commonly 45 minutes for a
piston aeroplane; use the figure your operations manual or club specifies.</li>
<li><b>Extra</b> — your judgement, and the one that gets used.</li>
</ul>
<p>Two habits worth more than any calculation: <b>dip the tanks</b> rather than trusting the
gauges, and set a <b>time</b> at which you will land regardless, written on the plog.</p>

<h3>The point of no return, and diversions</h3>
<p>Plan the diversion before you need it. Identify, for each leg, where you would go if the
weather ahead closed in, and know its frequency and runway direction. In the air, a diversion is
a thirty-second job with round numbers: estimate the track, round the distance, use an easy
groundspeed, note time and fuel, fly the aeroplane, refine later.</p>

<h3>The decision to go</h3>
<p>The commander's responsibility, which cannot be delegated, is to be satisfied that the flight
can be made safely: the aircraft is airworthy and within limits, the weather is within your
personal minima as well as the legal ones, the fuel is adequate with reserves intact, the
paperwork is valid, and you are fit to fly. Set personal minima on the ground, in writing, when
nobody is waiting for you — and then treat them as limits rather than as targets.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Fuel first, then mass and balance, then performance.</li>
<li>A flight plan must be <b>closed</b> on arrival.</li>
<li>Contingency is a percentage of <b>trip</b> fuel.</li>
<li>The final reserve is not available fuel. It is the reason you land earlier.</li>
</ul></div>`
}
],

quiz: [
{ q: 'The centre of gravity is calculated by:', a: ['Adding all the moments', 'Total moment divided by total mass', 'Total mass divided by total moment', 'Averaging the arms'], c: 1, why: 'CG = total moment / total mass. It is a weighted average position.', ref: 'Mass and balance' },
{ q: 'A moment is:', a: ['Mass divided by arm', 'Mass multiplied by arm', 'Arm divided by mass', 'The distance from the datum'], c: 1, why: 'Moment = mass x arm.', ref: 'Mass and balance' },
{ q: 'The datum used for mass and balance calculations is:', a: ['Always the propeller spinner', 'Always the CG', 'An arbitrary reference point specified in the POH', 'The main wheels'], c: 2, why: 'Arbitrary, but everything in that POH is measured from it consistently.', ref: 'Mass and balance' },
{ q: 'Fuel is burned from a tank whose arm is aft of the CG. During the flight the CG will move:', a: ['Aft', 'Forward', 'Not at all', 'Aft then forward'], c: 1, why: 'Removing mass from behind the CG moves the CG forward.', ref: 'Mass and balance' },
{ q: 'Mass and balance must be checked:', a: ['For take-off only', 'For landing only', 'For both take-off and landing', 'Only if passengers are carried'], c: 2, why: 'Both cases must be inside the envelope, because the CG moves as fuel burns.', ref: 'Mass and balance' },
{ q: 'The CG shift when moving a mass within the aircraft is:', a: ['(mass moved x distance moved) / total mass', '(mass moved x total mass) / distance', 'mass moved / distance moved', 'distance moved / total mass'], c: 0, why: 'CG shift = (mass moved x distance moved) / total mass.', ref: 'Mass and balance' },
{ q: 'A CG too far aft will:', a: ['Increase the stall speed and improve stability', 'Reduce the stall speed but reduce stability and may make spin recovery impossible', 'Have no effect on stability', 'Lengthen the take-off run'], c: 1, why: 'Aft CG lowers stall speed and stick forces but degrades stability and spin recovery.', ref: 'Mass and balance' },
{ q: 'A CG too far forward may result in:', a: ['Insufficient elevator authority to flare on landing', 'A tendency to float', 'Reduced stall speed', 'Improved range'], c: 0, why: 'Forward CG gives heavy pitch forces, higher stall speed, more trim drag and possibly insufficient elevator to flare.', ref: 'Mass and balance' },
{ q: 'Taking off above maximum take-off mass will:', a: ['Increase the stall speed and lengthen the take-off run', 'Reduce the stall speed', 'Improve the rate of climb', 'Have no effect if the CG is in limits'], c: 0, why: 'Higher stall speed, longer take-off run, reduced climb and reduced range.', ref: 'Mass and balance' },
{ q: '80 litres of avgas at SG 0.72 has a mass of:', a: ['57.6 kg', '72 kg', '80 kg', '111 kg'], c: 0, why: '80 x 0.72 = 57.6 kg.', ref: 'Mass and balance' },
{ q: 'An aircraft has an MTOM of 1050 kg, empty mass 690 kg, two occupants totalling 160 kg and 20 kg of baggage. The maximum fuel mass is:', a: ['160 kg', '180 kg', '200 kg', '360 kg'], c: 1, why: '1050 - 690 - 160 - 20 = 180 kg.', ref: 'Mass and balance' },
{ q: 'Pressure altitude is the altitude indicated with:', a: ['QNH set', 'QFE set', '1013 hPa set', 'The aerodrome elevation set'], c: 2, why: '1013 hPa (the standard pressure setting).', ref: 'Performance' },
{ q: 'Density altitude is:', a: ['Pressure altitude corrected for temperature', 'Altitude corrected for humidity only', 'The same as pressure altitude', 'Indicated altitude on QNH'], c: 0, why: 'Pressure altitude corrected for temperature deviation from ISA. It is what performance actually depends on.', ref: 'Performance' },
{ q: 'A rough correction for density altitude is to add, for each degree Celsius above ISA:', a: ['30 ft', '60 ft', '120 ft', '200 ft'], c: 2, why: 'About 120 ft per degree above ISA.', ref: 'Performance' },
{ q: 'Which combination gives the worst take-off performance?', a: ['Cold, low, dry, light', 'Hot, high, humid, heavy', 'Cold, high, dry, light', 'Hot, low, dry, light'], c: 1, why: 'Hot, high, humid and heavy — all four reduce density or increase the mass to be accelerated.', ref: 'Performance' },
{ q: 'Take-off distance is measured to a screen height of:', a: ['0 ft', '35 ft', '50 ft', '100 ft'], c: 2, why: '50 ft for light aeroplanes. The take-off run is to the point of lift-off.', ref: 'Performance' },
{ q: 'TODA is:', a: ['Take-off run available', 'TORA plus any clearway', 'TORA plus any stopway', 'The landing distance available'], c: 1, why: 'TODA = TORA + clearway. ASDA = TORA + stopway.', ref: 'Performance' },
{ q: 'ASDA is:', a: ['TORA plus clearway', 'TORA plus stopway', 'The landing distance available', 'The full runway length only'], c: 1, why: 'Accelerate-stop distance available = TORA + stopway.', ref: 'Performance' },
{ q: 'A 10% increase in mass typically increases the take-off distance by about:', a: ['5%', '10%', '20%', '50%'], c: 2, why: 'A factor of about 1.20 on take-off distance, and about 1.10 on landing distance.', ref: 'Performance factors' },
{ q: 'Taking off from dry grass compared with a paved runway typically requires:', a: ['The same distance', '20% more', '50% more', '10% less'], c: 1, why: 'About 1.20 on take-off. Wet grass is about 1.30 on take-off and 1.35 on landing.', ref: 'Performance factors' },
{ q: 'A tailwind of 10% of the take-off TAS typically increases take-off distance by about:', a: ['5%', '10%', '20%', '40%'], c: 2, why: 'About 1.20. Tailwinds hurt disproportionately.', ref: 'Performance factors' },
{ q: 'Two performance factors of 1.2 and 1.3 combine to give:', a: ['1.50', '1.25', '1.56', '2.50'], c: 2, why: 'They multiply: 1.2 x 1.3 = 1.56.', ref: 'Performance factors' },
{ q: 'An uphill runway slope:', a: ['Helps take-off and hinders landing', 'Hinders take-off and helps landing', 'Has no effect', 'Helps both'], c: 1, why: 'Uphill lengthens the take-off run but shortens the landing roll.', ref: 'Performance' },
{ q: 'Rate of climb depends on:', a: ['Excess thrust', 'Excess power', 'Total drag', 'Wing loading only'], c: 1, why: 'Rate depends on excess power; angle depends on excess thrust.', ref: 'Performance' },
{ q: 'As altitude increases, Vx and Vy:', a: ['Both increase', 'Both decrease and converge', 'Vx increases and Vy decreases', 'Remain constant'], c: 1, why: 'Both decrease with altitude and converge at the absolute ceiling.', ref: 'Performance' },
{ q: 'The absolute ceiling is the altitude at which:', a: ['Rate of climb is 100 ft/min', 'Rate of climb is zero', 'The engine stops', 'Vx equals VNE'], c: 1, why: 'Rate of climb zero. The service ceiling is where it falls to a defined small value, commonly 100 ft/min.', ref: 'Performance' },
{ q: 'A headwind during the climb:', a: ['Increases the rate of climb', 'Increases the climb gradient over the ground', 'Reduces the climb gradient', 'Has no effect on either'], c: 1, why: 'Rate of climb is unchanged, but the gradient over the ground steepens, which helps obstacle clearance.', ref: 'Performance' },
{ q: 'Extending flap for take-off generally:', a: ['Improves the climb rate', 'Shortens the ground run but reduces the climb performance', 'Has no effect on climb', 'Reduces drag'], c: 1, why: 'More CL gets you off sooner, but the extra drag flattens the climb.', ref: 'Performance' },
{ q: 'For a piston aeroplane, maximum range is achieved close to:', a: ['Minimum power speed', 'Minimum drag speed', 'VNE', 'VS1'], c: 1, why: 'Minimum drag (best L/D) for range. Minimum power for endurance.', ref: 'Performance' },
{ q: 'Maximum endurance is achieved at:', a: ['Minimum drag speed', 'Minimum power speed', 'Best rate of climb speed', 'Maximum cruise speed'], c: 1, why: 'Minimum power required, which is slower than minimum drag speed.', ref: 'Performance' },
{ q: 'Which does a headwind affect?', a: ['Endurance but not range', 'Range but not endurance', 'Both equally', 'Neither'], c: 1, why: 'Endurance is a time, unaffected by wind. Range is a distance over the ground, and is reduced by a headwind.', ref: 'Performance' },
{ q: 'The correct order for flight planning is:', a: ['Performance, then fuel, then mass and balance', 'Fuel, then mass and balance, then performance', 'Mass and balance, then performance, then fuel', 'Performance, then mass and balance, then fuel'], c: 1, why: 'Fuel determines mass; mass determines performance. Any other order means redoing the work.', ref: 'Planning' },
{ q: 'Fuel planning should include:', a: ['Trip fuel only', 'Trip and taxi fuel', 'Taxi, trip, contingency, alternate, final reserve and extra', 'Trip fuel plus 10%'], c: 2, why: 'All six components.', ref: 'Planning' },
{ q: 'Contingency fuel is normally calculated as a percentage of:', a: ['Total fuel', 'Trip fuel', 'Final reserve', 'Alternate fuel'], c: 1, why: 'A percentage of trip fuel.', ref: 'Planning' },
{ q: 'A typical final reserve for a piston aeroplane is:', a: ['10 minutes', '30 minutes', '45 minutes', '2 hours'], c: 2, why: 'Commonly 45 minutes at holding consumption, but use the figure your operations manual or club specifies.', ref: 'Planning' },
{ q: 'Failing to close a filed flight plan on arrival will:', a: ['Have no consequence', 'Trigger alerting and possibly search and rescue action', 'Invalidate the licence', 'Incur a fine only'], c: 1, why: 'The alerting service will begin action. Always close the plan.', ref: 'Planning' },
{ q: 'The most reliable way to establish the fuel on board is to:', a: ['Read the fuel gauges', 'Dip the tanks', 'Ask the previous pilot', 'Use the tech log hours'], c: 1, why: 'Dip the tanks. Gauges are notoriously optimistic.', ref: 'Planning' },
{ q: 'For obstacle clearance shortly after take-off you should climb at:', a: ['Vy', 'Vx', 'Cruise climb speed', 'VNO'], c: 1, why: 'Vx gives the best angle, i.e. the most height per unit of distance.', ref: 'Performance' },
{ q: 'An aerodrome is at 2000 ft elevation with an OAT of 25 C. ISA temperature there is about 11 C. The approximate density altitude is:', a: ['2000 ft', '2700 ft', '3700 ft', '5000 ft'], c: 2, why: '25 - 11 = 14 C above ISA. 14 x 120 = 1680 ft. 2000 + 1680 = about 3700 ft.', ref: 'Performance' },
{ q: 'Landing on wet grass compared with a paved runway requires approximately:', a: ['The same distance', '15% more', '35% more', '50% less'], c: 2, why: 'About 1.35 on landing distance, because braking is badly degraded.', ref: 'Performance factors' }
],

cards: [
{ f: 'CG calculation', b: 'Total moment divided by total mass.', ref: 'M&B' },
{ f: 'Moment', b: 'Mass x arm.', ref: 'M&B' },
{ f: 'Burning fuel from a tank aft of the CG', b: 'Moves the CG forward.', ref: 'M&B' },
{ f: 'Which loading cases must be checked?', b: 'Both take-off and landing.', ref: 'M&B' },
{ f: 'CG shift when moving a mass', b: '(mass moved x distance moved) / total mass.', ref: 'M&B' },
{ f: 'CG shift when adding a mass', b: '(mass added x distance from old CG) / new total mass.', ref: 'M&B' },
{ f: 'Aft CG — effects', b: 'Lower stall speed, lighter stick forces, better cruise — but reduced stability and possibly no spin recovery.', ref: 'M&B' },
{ f: 'Forward CG — effects', b: 'Higher stall speed, heavier stick forces, more trim drag, longer take-off, possibly not enough elevator to flare.', ref: 'M&B' },
{ f: 'Avgas SG', b: 'About 0.72. 1 litre is about 0.72 kg.', ref: 'M&B' },
{ f: 'Pressure altitude', b: 'The altitude indicated with 1013 hPa set.', ref: 'Perf' },
{ f: 'Density altitude', b: 'Pressure altitude corrected for temperature. Add about 120 ft per degree C above ISA.', ref: 'Perf' },
{ f: 'The four enemies of take-off performance', b: 'Hot, high, humid, heavy.', ref: 'Perf' },
{ f: 'Take-off and landing screen height', b: '50 ft.', ref: 'Perf' },
{ f: 'TORA, TODA, ASDA, LDA', b: 'Run available; run + clearway; run + stopway; landing distance available.', ref: 'Perf' },
{ f: '+10% mass — take-off and landing factors', b: 'x1.20 take-off, x1.10 landing.', ref: 'Perf' },
{ f: '+1000 ft elevation, +10 C — factor each', b: 'x1.10 each.', ref: 'Perf' },
{ f: 'Dry grass and wet grass factors', b: 'Dry: x1.20 take-off, x1.15 landing. Wet: x1.30 take-off, x1.35 landing.', ref: 'Perf' },
{ f: 'Tailwind of 10% of TAS', b: 'x1.20.', ref: 'Perf' },
{ f: 'CAA safety factors', b: 'x1.33 take-off, x1.43 landing.', ref: 'Perf' },
{ f: 'Do performance factors add or multiply?', b: 'Multiply.', ref: 'Perf' },
{ f: 'Uphill slope', b: 'Hinders take-off, helps landing.', ref: 'Perf' },
{ f: 'Rate versus angle of climb', b: 'Rate depends on excess power (Vy). Angle depends on excess thrust (Vx).', ref: 'Perf' },
{ f: 'Vx and Vy with altitude', b: 'Both decrease and converge at the absolute ceiling.', ref: 'Perf' },
{ f: 'Service versus absolute ceiling', b: 'Service: rate falls to a defined small value (often 100 ft/min). Absolute: rate is zero.', ref: 'Perf' },
{ f: 'Effect of a headwind on the climb', b: 'Steeper gradient over the ground; rate of climb unchanged.', ref: 'Perf' },
{ f: 'Maximum range versus maximum endurance speed', b: 'Range: minimum drag speed. Endurance: minimum power speed (slower).', ref: 'Perf' },
{ f: 'Does wind affect endurance?', b: 'No. It affects range.', ref: 'Perf' },
{ f: 'Correct planning order', b: 'Fuel, then mass and balance, then performance.', ref: 'Planning' },
{ f: 'Six fuel components', b: 'Taxi, trip, contingency, alternate, final reserve, extra.', ref: 'Planning' },
{ f: 'Contingency fuel is a percentage of', b: 'Trip fuel.', ref: 'Planning' },
{ f: 'What happens if you do not close a flight plan?', b: 'Alerting action, potentially search and rescue.', ref: 'Planning' },
{ f: 'Best way to check fuel quantity', b: 'Dip the tanks. Do not trust the gauges.', ref: 'Planning' }
]
};
