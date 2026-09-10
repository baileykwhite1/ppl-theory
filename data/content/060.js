/* 060 Navigation — articles, quiz bank, flashcards. */
window.SC = window.SC || {};
window.SC['060'] = {
articles: [
{
  id: '060-earth', title: 'The Earth, position and direction', mins: 6, tags: ['061.01', '061.02'],
  body: `
<h3>Latitude and longitude</h3>
<p><b>Parallels of latitude</b> run east-west, measured 0&deg; to 90&deg; north or south of the
equator. They are all <b>small circles</b> except the equator itself. <b>Meridians of
longitude</b> run north-south from pole to pole, measured 0&deg; to 180&deg; east or west of
the Greenwich meridian. Every meridian is <b>half a great circle</b>.</p>
<p>The one relationship that earns its keep: <b>1 minute of latitude = 1 nautical mile</b>.
So 1 degree of latitude is 60 NM, anywhere. This is <em>not</em> true of longitude, where the
distance between meridians shrinks towards the poles by the cosine of the latitude —
1 minute of longitude equals 1 NM only at the equator.</p>

<h3>Great circles and rhumb lines</h3>
<p>A <b>great circle</b> is the shortest distance between two points on the Earth: the circle
whose plane passes through the centre of the Earth. Its track direction <b>changes</b>
continuously. A <b>rhumb line</b> crosses all meridians at the same angle, so it has a
<b>constant</b> track direction — easier to fly, but longer. Over PPL distances the difference
is negligible; the exam still asks.</p>

<h3>The three norths</h3>
<ul>
<li><b>True north</b> — the geographic pole. What your chart is drawn to.</li>
<li><b>Magnetic north</b> — where the compass points. Differs from true by
<b>variation</b>.</li>
<li><b>Compass north</b> — where your particular compass points in your particular aeroplane,
which differs from magnetic by <b>deviation</b> caused by the aircraft's own magnetic fields.</li>
</ul>
<p>Variation is shown on the chart by <b>isogonals</b> (lines of equal variation); an
<b>agonic</b> line is where variation is zero. Deviation is found on the <b>compass deviation
card</b> in the cockpit and varies with heading.</p>

<figure data-d="varmag"></figure>
<h3>Getting the sums the right way round</h3>
<p>The mnemonic worth memorising: <b>Variation east, magnetic least; variation west, magnetic
best.</b> So going from true to magnetic:</p>
<ul>
<li><b>West variation: add</b> it to true to get magnetic.</li>
<li><b>East variation: subtract</b> it from true to get magnetic.</li>
</ul>
<p>The UK has small westerly variation, so magnetic is slightly larger than true here.
Deviation works the same way from magnetic to compass. Chain it up:
<b>True &rarr; (variation) &rarr; Magnetic &rarr; (deviation) &rarr; Compass.</b>
<em>True Virgins Make Dull Company</em> going one way, and add west going from true to
compass.</p>

<h3>Magnetic dip and its errors</h3>
<p>The Earth's field is not horizontal except near the magnetic equator; it dips into the
Earth, which is why a compass needle is pendulously mounted and why it misbehaves when you
accelerate or turn. In the northern hemisphere:</p>
<ul>
<li><b>Acceleration</b> gives an apparent turn to the <b>north</b>; deceleration to the
<b>south</b>. Remember <b>ANDS</b> — Accelerate North, Decelerate South.</li>
<li><b>Turning</b> through north the compass <b>lags</b> (under-reads the turn); turning
through south it <b>leads</b> (over-reads).</li>
</ul>
<p>This is why you level the wings and let the compass settle before reading it, and why the
direction indicator (a gyro) is the instrument you actually fly headings on, realigned against
the compass in steady level flight.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>1 minute of <b>latitude</b> is 1 NM. Longitude only at the equator.</li>
<li>All meridians are half great circles; only the equator is a great circle among the
parallels.</li>
<li>Variation west, magnetic best — magnetic is the <em>larger</em> number.</li>
</ul></div>`
},
{
  id: '060-charts', title: 'Charts and the 1:500,000', mins: 6, tags: ['061.03', '061.04'],
  body: `
<h3>Scale</h3>
<p>Scale is the ratio of chart distance to Earth distance. The UK VFR chart you will use is
<b>1:500,000</b> — often called the half-mil. One centimetre on the chart is 500,000 cm on the
ground, which is 5 km. Working in the units you actually fly:</p>
<ul>
<li><b>1:500,000</b>: 1 inch = about 6.9 NM. A useful check: 2 cm = 10 km = about 5.4 NM.</li>
<li><b>1:250,000</b> (the quarter-mil): twice the detail, half the coverage. 1 inch = about
3.4 NM.</li>
</ul>
<p>A <b>larger</b> scale means a <b>smaller</b> number in the denominator and more detail:
1:250,000 is a larger scale than 1:500,000. That phrasing catches people out constantly.</p>

<h3>Projection</h3>
<p>You cannot flatten a sphere without distorting something. The half-mil uses a <b>Lambert
conformal conic</b> projection. What matters for the exam: it is <b>conformal</b> (angles and
shapes are correct locally, so bearings measured with a protractor are usable), scale is
<b>very nearly constant</b> over the sheet, and great circles plot as very nearly straight
lines. A <b>Mercator</b> projection, by contrast, is where rhumb lines are straight and scale
expands badly towards the poles.</p>

<h3>Measuring on the chart</h3>
<p>Measure <b>distance</b> along your track with the scale on the ruler, or against the
latitude scale (remembering 1 minute of latitude = 1 NM). Measure <b>direction</b> with a
protractor against a <b>meridian</b> — that gives you <b>true</b> track, because the chart is
drawn to true north. Then apply variation to get magnetic. Measure at the <b>mid-point</b> of a
long leg, because meridians converge.</p>

<h3>Reading the ground</h3>
<p>Relief is shown by <b>contours</b>, <b>layer tinting</b> (colour bands by elevation), and
<b>spot heights</b>. The largest figure in each half-degree graticule box is the <b>maximum
elevation figure</b>, in <em>thousands and hundreds of feet amsl</em> — so 23 means 2300 ft. It
includes obstacles. Use it as the starting point for a safety altitude.</p>
<p>Obstacles are marked with their height and elevation, and lit obstacles are flagged. Give
particular attention to the airspace overprint: class boundaries with their vertical limits
written as <em>upper limit over lower limit</em>, ATZs, MATZs, danger, prohibited and restricted
areas, and the little symbols for gliding, parachuting and microlight sites.</p>

<h3>Choosing good features</h3>
<p>For map reading, prefer features that are <b>unique, unambiguous, close to track and
unlikely to have changed</b>. Coastlines, large lakes, motorway junctions, railway lines and
big towns are reliable. Small woods, isolated farms and minor roads are not. Work
<b>map-to-ground</b> — read the map, predict what you should see, then look for it. Reading
ground-to-map, hunting for whatever you can see on the chart, is how people convince themselves
they are somewhere they are not.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>1:250,000 is a <b>larger</b> scale than 1:500,000.</li>
<li>Protractor against a meridian gives <b>true</b> direction.</li>
<li>Maximum elevation figures are thousands and hundreds: 23 = 2300 ft.</li>
</ul></div>`
},
{
  id: '060-triangle', title: 'The triangle of velocities', mins: 7, tags: ['061.05', '061.06'],
  body: `
<p>Three vectors, and the whole of practical navigation. The aeroplane flies through the air;
the air moves over the ground; what the ground sees is the sum.</p>

<h3>The three vectors</h3>
<ul>
<li><b>Air vector</b>: <b>heading</b> and <b>true airspeed</b> — where the nose points and how
fast you go through the air.</li>
<li><b>Wind vector</b>: wind direction and speed — always <b>from</b> which the wind blows.</li>
<li><b>Ground vector</b>: <b>track</b> and <b>groundspeed</b> — where you actually go and how
fast.</li>
</ul>
<p>Six quantities, and you can solve for any two if you know the other four. In planning, you
know the required track (off the chart), TAS (from the POH) and the forecast wind, and you
solve for <b>heading</b> and <b>groundspeed</b>.</p>

<figure data-d="triangle"></figure>
<h3>Drift and wind correction angle</h3>
<p><b>Drift</b> is the angle between heading and track, and it is named for where the wind
pushes you: a wind from the left gives <b>right</b> drift. The <b>wind correction angle</b> is
what you apply to heading to cancel it — turn <b>into</b> wind. So with the wind from the left
you steer left of track. The two numbers are the same size and opposite in sense, which is why
people muddle them; get in the habit of saying "wind from the left, drift to the right, so
steer left."</p>

<h3>Head, tail and crosswind components</h3>
<p>For a wind at an angle to track, the useful approximations:</p>
<table>
<thead><tr><th>Angle between wind and track</th><th>Crosswind component</th><th>Head/tailwind component</th></tr></thead>
<tbody>
<tr><td>30&deg;</td><td>1/2 of wind speed</td><td>about 0.87 of wind speed</td></tr>
<tr><td>45&deg;</td><td>about 0.7</td><td>about 0.7</td></tr>
<tr><td>60&deg;</td><td>about 0.87</td><td>1/2</td></tr>
<tr><td>90&deg;</td><td>all of it</td><td>none</td></tr>
</tbody></table>
<p>The clock code is a serviceable field method: treat the angle in degrees as minutes on a
clock face, so 30&deg; is 30 minutes which is half, 45&deg; is three-quarters, 60&deg; or more
is all of it. It over-reads slightly, which is the safe direction for a crosswind limit.</p>

<h3>The 1-in-60 rule</h3>
<p>An error of <b>1&deg; gives 1 NM of displacement after 60 NM</b>. Rearranged for the cockpit:</p>
<p class="mono">track error (degrees) = (distance off track &divide; distance flown) &times; 60</p>
<p>So 3 NM off after 30 NM flown is (3 &divide; 30) &times; 60 = 6&deg; of track error. To get
back to track <em>at your destination</em>, apply that 6&deg;. To regain track at a chosen
point, calculate a second closing angle the same way over the distance remaining and add it —
the <b>double track error</b> method: if you are a third of the way along, doubling the track
error will roughly put you back on track by half way.</p>

<figure data-d="oneinsixty"></figure>
<h3>The flight computer</h3>
<p>The circular slide rule side handles anything proportional: time, speed and distance; fuel
flow; conversions; TAS from RAS with altitude and temperature; density altitude. The wind side
solves the triangle of velocities. For the exam you need to be quick and confident with
<b>time-speed-distance</b> and <b>fuel</b> — those come up far more than anything else. Set
speed against the index, read distance against time.</p>

<h3>Conversions worth knowing without the computer</h3>
<ul>
<li>1 NM = <b>1852 m</b> = about 6080 ft; 1 statute mile = 1609 m; 1 NM = about 1.15 sm</li>
<li>1 m = <b>3.28 ft</b>; 1 km = about 0.54 NM</li>
<li>1 imperial gallon = <b>4.55 litres</b>; 1 US gallon = 3.78 litres</li>
<li>Avgas specific gravity about <b>0.72</b>, so 1 litre weighs about 0.72 kg</li>
<li>1 kg = 2.2 lb</li>
</ul>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Wind is always given as the direction it blows <b>from</b>.</li>
<li>Drift and wind correction angle are opposite in sense. Steer <b>into</b> wind.</li>
<li>1-in-60 uses distance <b>flown</b> for track error, distance <b>remaining</b> for the
closing angle.</li>
</ul></div>`
},
{
  id: '060-plog', title: 'Planning, the plog and going wrong gracefully', mins: 6, tags: ['061.06', '061.07'],
  body: `
<h3>Time is UTC</h3>
<p>All aviation time is <b>UTC</b> (Zulu). British Summer Time is UTC+1, so 1400 BST is
1300 UTC. Get this wrong on a flight plan or a NOTAM and you will be an hour out on
something that matters.</p>
<ul>
<li><b>ETD/ATD</b> estimated / actual time of departure.</li>
<li><b>ETA</b> estimated time of arrival; <b>ETO</b> estimated time over a waypoint.</li>
<li><b>Sunrise and sunset</b> tables are in the AIP, and <b>night</b> for these purposes is
defined as the period from 30 minutes after sunset until 30 minutes before sunrise.</li>
</ul>

<h3>What goes on the plog</h3>
<p>For each leg: true track from the chart, distance, forecast W/V, TAS, then the computed
drift, magnetic heading and groundspeed, then leg time and cumulative time, and a fuel figure.
Plus, for each leg, a <b>safety altitude</b>. Work out the safety altitude from the highest
terrain or obstacle within a corridor either side of track — 5 NM is the usual planning figure
— add 1000 ft (2000 ft over high ground), and round up to the next 100 ft.</p>

<h3>Fuel planning</h3>
<p>Add it up in this order and you will not forget anything:</p>
<ul>
<li><b>Taxi</b> fuel</li>
<li><b>Trip</b> fuel — the whole route, at the planned power settings, allowing for the climb</li>
<li><b>Contingency</b> — a percentage of trip fuel for the unforeseen</li>
<li><b>Alternate</b> fuel — to your diversion</li>
<li><b>Final reserve</b> — a fixed period of flight at holding speed, commonly 45 minutes for
a piston aeroplane; the figure to use is what your operations manual or club rules specify</li>
<li><b>Extra</b> — because you are the commander and it is your call</li>
</ul>
<p>Then convert volume to mass for the mass and balance sheet, and check the total still fits
inside the maximum take-off mass. Fuel is the one item where the planning and the loading talk
to each other.</p>

<h3>Dead reckoning, and fixing your position</h3>
<p><b>Dead reckoning</b> is the calculation of position from a known point using heading, speed
and time. It is only as good as your last fix, so the discipline is to fix regularly and reset
the DR from it. A <b>position fix</b> comes from two or more independent sources — visual
pinpoint, two bearings that cross, a bearing and a range, or GNSS. A single bearing gives a
<b>position line</b>, not a fix.</p>

<h3>When you are lost</h3>
<p>The standard drill, and the exam answer:</p>
<ol>
<li><b>Maintain heading and note the time.</b> Do not start turning randomly — that destroys
the only information you have.</li>
<li><b>Assess</b> how long since the last positive fix, and draw a circle of uncertainty around
your DR position — radius roughly 10% of the distance flown since the fix.</li>
<li><b>Look for a big feature</b> inside that circle: coastline, motorway, large town, estuary.
Fly to a line feature and follow it if necessary.</li>
<li><b>Check</b> fuel, weather and daylight remaining, and be honest about them.</li>
<li><b>Ask for help early</b> — a Basic Service unit, a D/F service, or 121.500. There is no
credit for silence.</li>
</ol>

<h3>Diversions</h3>
<p>Do it in the air with round numbers, not with a flight computer. Estimate the new track by
eye against a meridian or a known feature, round the distance to the nearest 5 NM, use a
groundspeed you can divide easily (60 kt = 1 NM per minute, 90 kt = 1.5), and note the time and
fuel. Then fly the aeroplane, and refine it once established. A rough diversion flown promptly
beats a precise one worked out while the weather closes in.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Night is 30 minutes after sunset to 30 minutes before sunrise.</li>
<li>A single bearing is a position line; a fix needs two.</li>
<li>The first action when lost is to <b>maintain heading and note the time</b>.</li>
</ul></div>`
},
{
  id: '060-radionav', title: 'Radio navigation for the PPL', mins: 6, tags: ['062.01', '062.02'],
  body: `
<h3>VOR</h3>
<p>VHF Omnidirectional Range. A ground beacon transmits in the <b>108 to 117.95 MHz</b> band,
and the aircraft receiver compares phase to determine which of 360 <b>radials</b> you are on.
Key points:</p>
<ul>
<li>Bearings are <b>magnetic</b> and are <b>radials from</b> the station.</li>
<li>Being VHF it is <b>line of sight</b>: range increases with altitude and it is blocked by
terrain.</li>
<li>The indication is <b>independent of aircraft heading</b> — the needle tells you where you
are relative to the selected radial, not which way you are pointing.</li>
<li>Directly overhead there is a <b>cone of confusion</b> where indications are unusable.</li>
<li>Identify it by its <b>Morse ident</b> before use, every time. No ident, no navigation.</li>
</ul>

<h3>ADF and NDB</h3>
<p>Automatic Direction Finder in the aircraft, Non-Directional Beacon on the ground, in the
<b>LF/MF</b> band (roughly 190 to 1750 kHz). The needle points <b>at the beacon</b>, giving a
<b>relative bearing</b> from the nose.</p>
<p class="mono">Magnetic bearing to the station = magnetic heading + relative bearing</p>
<p>(subtract 360 if the answer exceeds it). Because it depends on heading, the ADF needle swings
whenever you turn. Its errors are the reason it has been superseded: <b>night effect</b>
(sky-wave interference after dark), <b>thunderstorm effect</b> (the needle points at the
lightning), <b>coastal refraction</b> (bending as the signal crosses a coastline at an angle),
<b>mountain effect</b>, and <b>station interference</b>. Being LF/MF it is not limited to line
of sight, which is its one advantage.</p>

<h3>DME</h3>
<p>Distance Measuring Equipment, in the UHF band. The aircraft interrogates and the ground
station replies; the time delay gives distance. Critically, DME gives <b>slant range</b> — the
straight-line distance from aircraft to station, not the distance across the ground. Directly
overhead a station at 6000 ft, the DME reads about 1 NM, not zero. The error matters only when
you are high and close.</p>

<h3>GNSS</h3>
<p>Global Navigation Satellite System: GPS and its equivalents. Position from ranging to
satellites — a minimum of <b>three</b> for a two-dimensional fix, <b>four</b> for a
three-dimensional fix including altitude. Superbly accurate and completely unaware of whether
it is right, which is the point of <b>RAIM</b> and augmentation systems. For a PPL the
discipline is: it is an aid, not a substitute for the chart and the clock; the database has an
expiry date; and it will not tell you that you are about to enter Class D.</p>

<h3>VDF</h3>
<p>VHF Direction Finding. You transmit, the ground station measures the bearing of your signal,
and passes it to you. A <b>QDM</b> is the magnetic bearing <b>to</b> the station — the heading
to steer in nil wind. A <b>QDR</b> is the magnetic bearing <b>from</b> the station. A QTE is the
true bearing from the station. Ask for a QDM if you are lost and within range: it is the
simplest help in aviation and it needs no equipment in the aircraft beyond the radio you
already have.</p>

<h3>Secondary radar</h3>
<p>Primary radar reflects off the aircraft. <b>Secondary surveillance radar</b> interrogates a
transponder which replies with a coded signal: <b>Mode A</b> gives the four-digit identity code,
<b>Mode C</b> adds pressure altitude referenced to 1013 hPa (which is why the controller sees
your level correctly regardless of your subscale setting), and <b>Mode S</b> adds aircraft
identity and data. Select ALT to make Mode C work.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>VOR bearings are radials <b>from</b> the station and are <b>magnetic</b>. VOR indication does
not depend on heading; ADF does.</li>
<li>MB to station = MH + RB.</li>
<li>DME gives slant range.</li>
<li>GNSS: 3 satellites for 2D, 4 for 3D.</li>
<li>QDM is <b>to</b> the station.</li>
</ul></div>`
}
],

quiz: [
{ q: 'One minute of latitude is equal to:', a: ['1 statute mile', '1 nautical mile', '1 kilometre', '1 degree'], c: 1, why: '1 minute of latitude equals 1 NM anywhere on Earth. Longitude only equals 1 NM per minute at the equator.', ref: 'Nav theory' },
{ q: 'One degree of latitude equals:', a: ['30 NM', '60 NM', '90 NM', '120 NM'], c: 1, why: '60 minutes, so 60 NM.', ref: 'Nav theory' },
{ q: 'Which statement about meridians is correct?', a: ['They are all small circles', 'Each meridian is half a great circle', 'They converge at the equator', 'They cross latitude at 45 degrees'], c: 1, why: 'Each meridian is half a great circle, running pole to pole. Parallels of latitude are small circles except the equator.', ref: 'Nav theory' },
{ q: 'A rhumb line is a line that:', a: ['Is the shortest distance between two points', 'Crosses all meridians at the same angle', 'Passes through the centre of the Earth', 'Follows a parallel of latitude only'], c: 1, why: 'A rhumb line has constant direction. A great circle is the shortest distance but its direction changes.', ref: 'Nav theory' },
{ q: 'Variation is the angle between:', a: ['True north and magnetic north', 'Magnetic north and compass north', 'Track and heading', 'True north and compass north'], c: 0, why: 'Variation: true to magnetic. Deviation: magnetic to compass.', ref: 'Nav theory' },
{ q: 'A true track of 090 with 5 W variation gives a magnetic track of:', a: ['085', '090', '095', '100'], c: 2, why: 'Variation west, magnetic best. Add 5 to get 095.', ref: 'Nav theory' },
{ q: 'Lines of equal magnetic variation on a chart are called:', a: ['Isotachs', 'Isogonals', 'Isobars', 'Isotherms'], c: 1, why: 'Isogonals. An agonic line is where variation is zero.', ref: 'Nav theory' },
{ q: 'Deviation is found from:', a: ['The chart', 'The compass deviation card in the aircraft', 'The AIP', 'The POH performance section'], c: 1, why: 'Deviation is specific to the aircraft and heading, and is tabulated on the compass deviation card.', ref: 'Nav theory' },
{ q: 'In the northern hemisphere, accelerating on an easterly heading causes the direct reading compass to indicate:', a: ['An apparent turn to the north', 'An apparent turn to the south', 'No error', 'An apparent turn to the east'], c: 0, why: 'ANDS: Accelerate North, Decelerate South, in the northern hemisphere.', ref: 'Nav theory' },
{ q: 'Turning through north in the northern hemisphere, a direct reading compass will:', a: ['Lead the turn', 'Lag the turn', 'Read correctly', 'Reverse'], c: 1, why: 'It lags through north and leads through south.', ref: 'Nav theory' },
{ q: 'On a 1:500,000 chart, 2 cm represents:', a: ['5 km', '10 km', '20 km', '50 km'], c: 1, why: '1 cm is 5 km, so 2 cm is 10 km (about 5.4 NM).', ref: 'Chart scale' },
{ q: 'Which is the larger scale?', a: ['1:500,000', '1:250,000', 'They are the same', '1:1,000,000'], c: 1, why: 'The smaller the denominator, the larger the scale and the more detail. 1:250,000 is larger scale than 1:500,000.', ref: 'Chart scale' },
{ q: 'The UK 1:500,000 VFR chart uses which projection?', a: ['Mercator', 'Lambert conformal conic', 'Polar stereographic', 'Gnomonic'], c: 1, why: 'Lambert conformal conic: angles are correct locally, scale nearly constant, great circles nearly straight.', ref: 'Chart theory' },
{ q: 'Measuring track direction with a protractor against a meridian gives:', a: ['Magnetic track', 'True track', 'Compass track', 'Grid track'], c: 1, why: 'The chart is drawn to true north, so you measure true and then apply variation.', ref: 'Chart theory' },
{ q: 'A maximum elevation figure of 23 on a UK VFR chart means:', a: ['23 ft', '230 ft', '2300 ft', '23,000 ft'], c: 2, why: 'Thousands and hundreds of feet amsl, including obstacles. So 2300 ft.', ref: 'Chart symbols' },
{ q: 'The three vectors of the triangle of velocities are:', a: ['Heading/TAS, W/V, track/groundspeed', 'Heading/IAS, W/V, track/TAS', 'Track/TAS, drift, groundspeed', 'Heading/groundspeed, W/V, track/TAS'], c: 0, why: 'Air vector (heading and TAS), wind vector, ground vector (track and groundspeed).', ref: 'Nav theory' },
{ q: 'Wind velocity is always expressed as the direction the wind is:', a: ['Blowing towards', 'Blowing from', 'Drifting the aircraft', 'Measured at 2000 ft'], c: 1, why: 'Wind direction is always the direction it blows from.', ref: 'Nav theory' },
{ q: 'With the wind from the left of track, the aircraft will drift:', a: ['Left, so steer left', 'Right, so steer left', 'Right, so steer right', 'Left, so steer right'], c: 1, why: 'Wind from the left pushes you right, so you steer left of track to correct. Turn into wind.', ref: 'Nav theory' },
{ q: 'A 20 kt wind at 60 degrees to the runway gives a crosswind component of approximately:', a: ['5 kt', '10 kt', '17 kt', '20 kt'], c: 2, why: 'At 60 degrees the crosswind is about 0.87 of the wind speed: about 17 kt.', ref: 'Nav theory' },
{ q: 'A 30 kt wind at 30 degrees to track gives a headwind component of approximately:', a: ['15 kt', '21 kt', '26 kt', '30 kt'], c: 2, why: 'At 30 degrees the along-track component is about 0.87 of the wind: about 26 kt. The crosswind is half, 15 kt.', ref: 'Nav theory' },
{ q: 'After flying 40 NM you find you are 4 NM right of track. Your track error is:', a: ['2 degrees', '4 degrees', '6 degrees', '10 degrees'], c: 2, why: '1-in-60: (4/40) x 60 = 6 degrees.', ref: '1-in-60 rule' },
{ q: 'You are 3 NM off track having flown 30 NM, with 60 NM to run. To regain track at the destination you should alter heading by:', a: ['3 degrees', '6 degrees', '9 degrees', '12 degrees'], c: 2, why: 'Track error = (3/30) x 60 = 6 degrees. Closing angle = (3/60) x 60 = 3 degrees. Total alteration 9 degrees.', ref: '1-in-60 rule' },
{ q: '1 nautical mile equals:', a: ['1609 m', '1852 m', '1000 m', '2000 m'], c: 1, why: '1852 m, about 6080 ft. A statute mile is 1609 m.', ref: 'Conversions' },
{ q: '1 imperial gallon equals approximately:', a: ['3.78 litres', '4.55 litres', '5.00 litres', '4.00 litres'], c: 1, why: '4.55 litres. A US gallon is 3.78 litres.', ref: 'Conversions' },
{ q: 'Using an SG of 0.72, 100 litres of avgas weighs:', a: ['72 kg', '100 kg', '138 kg', '55 kg'], c: 0, why: '100 x 0.72 = 72 kg.', ref: 'Conversions' },
{ q: '1 metre equals:', a: ['3.28 ft', '2.20 ft', '6.08 ft', '1.15 ft'], c: 0, why: '3.28 ft.', ref: 'Conversions' },
{ q: 'All times used in aviation flight planning are:', a: ['Local time', 'UTC', 'BST in summer', 'Mean solar time'], c: 1, why: 'UTC, also called Zulu. BST is UTC+1.', ref: 'Nav theory' },
{ q: 'For aviation purposes, night is defined as:', a: ['Sunset to sunrise', '30 minutes after sunset to 30 minutes before sunrise', '1 hour after sunset to 1 hour before sunrise', 'Civil twilight'], c: 1, why: 'From 30 minutes after sunset until 30 minutes before sunrise.', ref: 'Definitions' },
{ q: 'A safety altitude for a leg is normally calculated as:', a: ['1000 ft above the highest terrain or obstacle within a corridor either side of track, rounded up', '500 ft above the highest terrain on track', 'The maximum elevation figure plus 100 ft', 'The cruising level minus 1000 ft'], c: 0, why: 'Highest terrain or obstacle in the corridor (5 NM is a common figure) plus 1000 ft, 2000 ft over high ground, rounded up to the next 100 ft.', ref: 'Nav practice' },
{ q: 'A single bearing from one station provides:', a: ['A position fix', 'A position line', 'A track', 'A groundspeed'], c: 1, why: 'One bearing gives a position line. A fix needs two or more independent sources.', ref: 'Nav theory' },
{ q: 'The first action on realising you are lost is to:', a: ['Turn onto the reciprocal', 'Maintain heading and note the time', 'Start a descent to identify features', 'Squawk 7700'], c: 1, why: 'Maintain heading and note the time. Random turning destroys the DR information you still have.', ref: 'Nav practice' },
{ q: 'A VOR provides bearing information that is:', a: ['True and dependent on heading', 'Magnetic and independent of heading', 'Magnetic and dependent on heading', 'Relative to the nose'], c: 1, why: 'VOR radials are magnetic and the indication is independent of aircraft heading. ADF is the heading-dependent one.', ref: 'Radio nav' },
{ q: 'The VOR frequency band is:', a: ['190 to 1750 kHz', '108 to 117.95 MHz', '118 to 136.975 MHz', '329 to 335 MHz'], c: 1, why: '108 to 117.95 MHz (VHF). 118 to 136.975 MHz is the VHF communications band.', ref: 'Radio nav' },
{ q: 'Because a VOR operates in the VHF band, its range is:', a: ['Unlimited', 'Line of sight, increasing with altitude', 'Limited to 25 NM at all altitudes', 'Better at night'], c: 1, why: 'VHF is line of sight, so range increases with altitude and terrain blocks it.', ref: 'Radio nav' },
{ q: 'The area directly above a VOR where indications are unusable is the:', a: ['Cone of confusion', 'Null zone', 'Shadow zone', 'Skip zone'], c: 0, why: 'The cone of confusion.', ref: 'Radio nav' },
{ q: 'With a magnetic heading of 040 and an ADF relative bearing of 060, the magnetic bearing to the NDB is:', a: ['020', '060', '100', '140'], c: 2, why: 'MB = MH + RB = 040 + 060 = 100.', ref: 'Radio nav' },
{ q: 'With a magnetic heading of 330 and a relative bearing of 090, the magnetic bearing to the NDB is:', a: ['060', '240', '420', '030'], c: 0, why: '330 + 090 = 420, subtract 360 to give 060.', ref: 'Radio nav' },
{ q: 'Night effect is an error associated with:', a: ['VOR', 'ADF/NDB', 'DME', 'GNSS'], c: 1, why: 'Sky-wave interference after dark affects LF/MF NDB reception. Other ADF errors: thunderstorm, coastal refraction, mountain, station interference.', ref: 'Radio nav' },
{ q: 'DME measures:', a: ['Horizontal distance across the ground', 'Slant range from aircraft to station', 'Bearing to the station', 'Groundspeed only'], c: 1, why: 'Slant range. Overhead a station at 6000 ft the DME reads about 1 NM, not zero.', ref: 'Radio nav' },
{ q: 'The minimum number of satellites for a three-dimensional GNSS fix is:', a: ['2', '3', '4', '6'], c: 2, why: 'Three for a 2D fix, four for 3D including altitude.', ref: 'Radio nav' },
{ q: 'A QDM is:', a: ['The magnetic bearing to the station', 'The magnetic bearing from the station', 'The true bearing from the station', 'The relative bearing'], c: 0, why: 'QDM is the magnetic bearing to the station, so it is the heading to steer in nil wind. QDR is from; QTE is the true bearing from.', ref: 'Radio nav' },
{ q: 'Transponder Mode C provides:', a: ['Aircraft identity only', 'Pressure altitude referenced to 1013 hPa', 'Groundspeed', 'Aircraft type'], c: 1, why: 'Mode A gives the code, Mode C adds pressure altitude referenced to 1013 hPa, Mode S adds identity and data.', ref: 'Radio nav' },
{ q: 'Good map reading technique is to work:', a: ['Ground to map', 'Map to ground', 'By GPS only', 'From memory'], c: 1, why: 'Read the map, predict what you should see, then look for it. Ground-to-map invites you to make features fit.', ref: 'Nav practice' }
],

cards: [
{ f: '1 minute of latitude', b: '1 nautical mile. Anywhere.', ref: 'Nav' },
{ f: 'Is 1 minute of longitude 1 NM?', b: 'Only at the equator. It shrinks with cos(latitude).', ref: 'Nav' },
{ f: 'Great circle versus rhumb line', b: 'Great circle: shortest distance, direction changes. Rhumb line: constant direction, longer.', ref: 'Nav' },
{ f: 'Variation versus deviation', b: 'Variation: true to magnetic (chart, isogonals). Deviation: magnetic to compass (deviation card).', ref: 'Nav' },
{ f: 'Variation west, magnetic ...', b: 'Best — i.e. larger. Add west variation to true to get magnetic. East variation, subtract.', ref: 'Nav' },
{ f: 'ANDS', b: 'Accelerate North, Decelerate South — compass acceleration errors, northern hemisphere.', ref: 'Nav' },
{ f: 'Compass turning errors, northern hemisphere', b: 'Lags through north, leads through south.', ref: 'Nav' },
{ f: '1:500,000 — what does 1 cm represent?', b: '5 km. So 2 cm = 10 km = about 5.4 NM.', ref: 'Nav' },
{ f: 'Which is larger scale: 1:250,000 or 1:500,000?', b: '1:250,000. Smaller denominator, larger scale, more detail.', ref: 'Nav' },
{ f: 'Projection of the UK half-mil chart', b: 'Lambert conformal conic. Conformal, near-constant scale, great circles nearly straight.', ref: 'Nav' },
{ f: 'Protractor against a meridian gives', b: 'True direction. Apply variation for magnetic.', ref: 'Nav' },
{ f: 'Maximum elevation figure "23"', b: '2300 ft amsl, including obstacles.', ref: 'Nav' },
{ f: 'The three vectors', b: 'Air (heading + TAS), wind (W/V), ground (track + groundspeed).', ref: 'Nav' },
{ f: 'Wind from the left — drift and correction', b: 'Drifts you right; steer left of track. Turn into wind.', ref: 'Nav' },
{ f: 'Crosswind component at 30 / 45 / 60 / 90 degrees', b: 'About 1/2, 0.7, 0.87, all of the wind speed.', ref: 'Nav' },
{ f: '1-in-60 rule for track error', b: 'Track error = (distance off / distance flown) x 60.', ref: 'Nav' },
{ f: 'Closing angle', b: '(distance off / distance remaining) x 60. Add to track error to regain track at destination.', ref: 'Nav' },
{ f: '1 NM in metres and feet', b: '1852 m, about 6080 ft.', ref: 'Nav' },
{ f: '1 statute mile in metres', b: '1609 m.', ref: 'Nav' },
{ f: '1 imperial gallon / 1 US gallon in litres', b: '4.55 / 3.78 litres.', ref: 'Nav' },
{ f: 'Avgas specific gravity', b: 'About 0.72. So 1 litre is about 0.72 kg.', ref: 'Nav' },
{ f: '1 metre in feet, 1 kg in lb', b: '3.28 ft, 2.2 lb.', ref: 'Nav' },
{ f: 'Aviation time reference', b: 'UTC (Zulu). BST is UTC+1.', ref: 'Nav' },
{ f: 'Definition of night', b: '30 minutes after sunset to 30 minutes before sunrise.', ref: 'Nav' },
{ f: 'Safety altitude method', b: 'Highest terrain/obstacle in a corridor either side of track, plus 1000 ft (2000 ft over high ground), rounded up to the next 100 ft.', ref: 'Nav' },
{ f: 'Fuel plan components', b: 'Taxi, trip, contingency, alternate, final reserve, extra.', ref: 'Nav' },
{ f: 'Position line versus fix', b: 'One bearing = position line. Two or more independent sources = fix.', ref: 'Nav' },
{ f: 'First action when lost', b: 'Maintain heading and note the time.', ref: 'Nav' },
{ f: 'VOR band and bearing type', b: '108 to 117.95 MHz. Magnetic radials from the station, independent of heading.', ref: 'Radio nav' },
{ f: 'Cone of confusion', b: 'The area overhead a VOR where indications are unusable.', ref: 'Radio nav' },
{ f: 'ADF: magnetic bearing to station', b: 'MB = MH + RB (subtract 360 if over).', ref: 'Radio nav' },
{ f: 'Five ADF errors', b: 'Night effect, thunderstorm effect, coastal refraction, mountain effect, station interference.', ref: 'Radio nav' },
{ f: 'What does DME measure?', b: 'Slant range, not ground distance.', ref: 'Radio nav' },
{ f: 'GNSS satellites needed', b: '3 for a 2D fix, 4 for 3D.', ref: 'Radio nav' },
{ f: 'QDM, QDR, QTE', b: 'QDM: magnetic bearing TO the station. QDR: magnetic FROM. QTE: true FROM.', ref: 'Radio nav' },
{ f: 'Transponder Modes A, C, S', b: 'A: identity code. C: pressure altitude on 1013. S: identity and data.', ref: 'Radio nav' },
{ f: 'Map reading direction', b: 'Map to ground. Predict, then look.', ref: 'Nav' }
]
};
