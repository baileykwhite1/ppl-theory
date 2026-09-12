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
<p>UK variation is now <b>very small and close to zero</b>: the agonic line (zero variation)
crossed Greenwich in 2019 and is still moving west at roughly 0.2&deg; a year, so variation is
<b>easterly</b> over much of England and westerly only in the far west. Do not carry a sign in
your head — <b>read the isogonal on the current chart</b>, and note the annual change printed
with it. Deviation works the same way from magnetic to compass. Chain it up:
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
<figure data-d="chartSigns"></figure>
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
<p>So 3 NM off after 30 NM flown is (3 &divide; 30) &times; 60 = 6&deg; of <b>track error</b>.
Turning by that 6&deg; alone does <em>not</em> bring you back — it only makes your new track
<b>parallel</b> to the one you wanted, and you arrive 3 NM abeam the destination.</p>
<p>To close at the destination you need a second angle, worked the same way over the distance
<b>still to run</b>:</p>
<p class="mono">closing angle (degrees) = (distance off track &divide; distance to run) &times; 60</p>
<p>With 60 NM left: (3 &divide; 60) &times; 60 = 3&deg;. Total correction = track error + closing
angle = 6 + 3 = <b>9&deg;</b>.</p>
<p>The shortcut is the <b>double track error</b> method: turn by twice the track error and you
regain track after flying <em>the same distance again</em>. From a fix a third of the way along
you are back on track two-thirds of the way along; it is a fix at the <b>quarter</b> point that
puts you back on track by half way. Once back on track, take off the doubled half and fly the
original track error.</p>

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
<figure data-d="safetyAlt"></figure>
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
<li><b>Final reserve</b> — a fixed period of flight at holding speed, 1500 ft above the
destination. Under Part-NCO that is <b>30 minutes by day VFR</b> and <b>45 minutes at night or
IFR</b>. Club rules may demand more, never less</li>
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
  id: '060-radionav', title: 'Radio navigation for the PPL', mins: 6, tags: ['010.07', '061.07', '061.08', '061.09', '061.10'],
  body: `
<h3>VOR</h3>
<figure data-d="vorCdi"></figure>
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
<figure data-d="adfBearing"></figure>
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

<h3>The codes that matter</h3>
<figure data-d="transponder"></figure>
<p>A Mode A code is four digits, each <b>0 to 7</b> — 4096 of them. Eight are worth knowing cold, and <b>Mode C goes on with all of them</b>:</p>
<table>
<thead><tr><th>Code</th><th>Meaning, and when you set it</th></tr></thead>
<tbody>
<tr><td><b>7700</b></td><td>Emergency — as soon as practicable after declaring, once the aeroplane is under control</td></tr>
<tr><td><b>7600</b></td><td>Radio failure</td></tr>
<tr><td><b>7500</b></td><td>Unlawful interference, unless the circumstances warrant 7700 instead</td></tr>
<tr><td><b>7000</b></td><td>VFR conspicuity: UK airspace, VFR, no specific transponder instruction from ATS</td></tr>
<tr><td><b>2000</b></td><td>IFR conspicuity; also on entering UK airspace from an adjacent region where transponders were not required</td></tr>
<tr><td><b>7004</b></td><td>Aerobatics and display, from five minutes before you start until you stop</td></tr>
<tr><td><b>7010</b></td><td>Operating in an aerodrome traffic pattern — only when an ATS unit or a local procedure directs it</td></tr>
<tr><td><b>0033</b></td><td>The aircraft dropping parachutists, from five minutes before the drop until they are on the ground</td></tr>
</tbody></table>
<p>Mode C sends a pressure altitude and nothing else, in <b>100 ft steps</b>. That is why a controller may ask you to confirm your level to the nearest 100 ft: if the readout is more than <b>200 ft</b> out you will be told to stop squawking Mode C, or to select <b>0000</b> if your box cannot switch it independently (ENR 1.6, para 2.1.4).</p>
<p>Conspicuity is the fallback, not an override. Once a unit has assigned you a discrete code, <b>keep it</b> — including after you leave that unit's area — and reselect a code, or switch the transponder off in flight, <b>only when an ATS unit tells you to</b>. Read the new code back. You return to 7000 when you hear "squawk conspicuity", not before.</p>
<p>Two things catch people out. On declaring an emergency, a discrete code already assigned to you may be kept, at the pilot's or the controller's discretion — but <b>7000 and 2000 are explicitly excluded</b>, so from a conspicuity code you select 7700 (CAP 413, para 8.9). And the 70xx conspicuity codes sit next door to 7500, 7600 and 7700, so wind the digits through with care. "Squawk ident" operates the special position identification feature, which flags your return on the controller's display — press it when asked, and not otherwise.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>VOR bearings are radials <b>from</b> the station and are <b>magnetic</b>. VOR indication does
not depend on heading; ADF does.</li>
<li>MB to station = MH + RB.</li>
<li>DME gives slant range.</li>
<li>GNSS: 3 satellites for 2D, 4 for 3D.</li>
<li>QDM is <b>to</b> the station.</li>
</ul></div>`
},
{
  id: '060-time', title: 'Time: UTC, local mean time and the date line', mins: 6, tags: ['061.01'],
  body: `
<p>Everything you file, read and write down is in <b>UTC</b>. Everything about daylight depends
on where you are on the Earth. One number links them: the Earth turns <b>15&deg; of longitude
every hour</b>.</p>

<h3>Turning arc into time</h3>
<p>The Earth rotates 360&deg; in 24 hours, and every conversion here falls out of that:</p>
<table>
<thead><tr><th>Arc</th><th>Time</th></tr></thead>
<tbody>
<tr><td>360&deg;</td><td>24 hours</td></tr>
<tr><td><b>15&deg;</b></td><td><b>1 hour</b></td></tr>
<tr><td><b>1&deg;</b></td><td><b>4 minutes</b></td></tr>
<tr><td><b>15'</b></td><td><b>1 minute</b></td></tr>
<tr><td>1'</td><td>4 seconds</td></tr>
</tbody></table>
<p>The sun appears to move <b>westwards</b>, so a place to the <b>east</b> reaches noon sooner
and its clock is <b>ahead</b> of yours.</p>

<h3>Local mean time</h3>
<p>The real sun is a poor clock: the orbit is elliptical and the axis tilted, so apparent solar
days differ in length. Navigation uses an imaginary <b>mean sun</b> moving at a constant rate,
and <b>local mean time (LMT)</b> is what it keeps on <em>your own</em> meridian &mdash; LMT 1200
is mean local noon. The gap between apparent and mean time is the <b>equation of time</b>, up to
about 16 minutes. LMT at Greenwich is UTC; elsewhere, convert your longitude to time and apply
it:</p>
<p class="mono">LMT = UTC + arc-to-time (longitude EAST)</p>
<p class="mono">LMT = UTC &minus; arc-to-time (longitude WEST)</p>
<p><b>Longitude east, UTC least; longitude west, UTC best.</b></p>
<p>UTC to LMT: a point at <b>037&deg;30'W</b> at 1200 UTC. 37 &times; 4 = 148 minutes =
2 h 28 min; 30' = 2 min; total 2 h 30 min. West, so subtract &mdash; <b>LMT 0930</b>.</p>
<p>LMT to UTC: LMT 1800 at <b>075&deg;15'E</b>. 75 &times; 4 = 300 minutes = 5 h;
15' = 1 min; total 5 h 01 min. East, so subtract to get UTC &mdash; <b>1259 UTC</b>.</p>
<p>The difference in LMT between two places is their <b>difference of longitude</b> as time. Two
aerodromes at 002&deg;30'W and 001&deg;00'E are 3&deg;30' apart, which is <b>14 minutes</b>: at
the same latitude, the eastern one sees sunrise 14 minutes earlier.</p>

<h3>Standard time</h3>
<p>Nobody runs clocks on LMT &mdash; the next town east would already be a minute ahead, because
a minute of time is only <b>15' of longitude</b>, about ten miles at UK latitudes.
Each state adopts a <b>standard time</b>, or zone time: a <b>fixed offset from UTC applied across
the whole territory</b>, or across each of several zones in a state too wide for one. In theory
that is 24 zones of 15&deg;, each centred on a meridian that is a multiple of 15&deg; and running
<b>7&deg;30' either side</b>. Real boundaries follow national borders, and not every offset is a
whole hour: India UTC+5:30, Nepal UTC+5:45, the Chatham Islands UTC+12:45.</p>
<p>Many states add an hour in summer. The UK's standard time is <b>Greenwich Mean Time</b>, which
for flight planning is <b>UTC</b>, and <b>British Summer Time is UTC+1</b>, from 0100 GMT on the
last Sunday in March to 0100 GMT on the last Sunday in October (Summer Time Act 1972, as amended
by the Summer Time Order 2002). Standard time and LMT agree only on the zone's central meridian:
at 004&deg;W the clock says noon while mean local noon is not until <b>1216 UTC</b>.</p>

<h3>UTC, and what the rules require</h3>
<p><b>Coordinated Universal Time</b> is kept by atomic clocks, held within a second of mean solar
time at Greenwich by leap seconds. In aviation it is a four-figure group suffixed <b>Z</b>, spoken Zulu. <b>SERA.3401</b> requires UTC, expressed in hours and minutes &mdash; seconds where
needed &mdash; of the <b>24-hour day beginning at midnight</b>. A <b>time check</b> must be
obtained before operating a controlled flight, and time checks are given <b>at least to the
nearest minute</b>.</p>

<h3>The international date line</h3>
<p>Fly east around the world adding time and you gain a day; fly west and you lose one. The
<b>international date line</b> hands it back, running roughly along the <b>180&deg; meridian</b>
but deviating so whole countries keep one date.</p>
<ul>
<li>Crossing <b>westbound</b>: <b>advance the date by one day</b>. Monday becomes Tuesday.</li>
<li>Crossing <b>eastbound</b>: <b>put the date back one day</b>. You live the same date
twice.</li>
</ul>
<p>Only the date changes; the clock and UTC are untouched.</p>

<h3>Sunrise, sunset and twilight</h3>
<p><b>Sunrise</b> and <b>sunset</b> are the moments when the <b>upper limb</b> of the sun is on
the horizon; allowing for refraction and the sun's semi-diameter, its <em>centre</em> is then
about <b>50'</b> below the true horizon. <b>Civil twilight</b> is the period while that centre
lies between the horizon and <b>6&deg; below</b> it: morning civil twilight begins, and evening
civil twilight ends, at the 6&deg; point. It lengthens with latitude and season: about
twenty-four minutes at the equator, over an hour in northern Scotland in summer.</p>
<p>For UK flying, <b>night</b> is defined in the <b>Air Navigation Order 2016, Schedule 1</b> as
the time from <b>half an hour after sunset until half an hour before sunrise</b>, both times
inclusive, sunset and sunrise being determined at <b>surface level</b>. ICAO and SERA define
night by <b>civil twilight</b> instead; in the UK, plan to the half-hour rule. <b>UK AIP
GEN 2.7</b> does not tabulate the times itself &mdash; it directs you to HM Nautical Almanac
Office and the US Naval Observatory.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>15&deg; = 1 hour, 1&deg; = 4 minutes, <b>15' of arc = 1 minute of time</b>. One minute of arc
is 4 <em>seconds</em>.</li>
<li>Longitude <b>east</b>, UTC <b>least</b> &mdash; east of Greenwich, LMT is ahead of UTC.</li>
<li>LMT changes with every meridian; standard time is one offset for a whole country.</li>
<li>Date line <b>westbound: advance</b> the date. <b>Eastbound: put it back.</b></li>
<li>UK night is sunset <b>+30</b> to sunrise <b>&minus;30</b> (ANO 2016), not civil twilight.</li>
<li>Civil twilight is the sun's <b>centre 6&deg;</b> below the horizon; sunrise and sunset are
the <b>upper limb</b> on the horizon.</li>
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
{ q: 'Good map reading technique is to work:', a: ['Ground to map', 'Map to ground', 'By GPS only', 'From memory'], c: 1, why: 'Read the map, predict what you should see, then look for it. Ground-to-map invites you to make features fit.', ref: 'Nav practice' },
{ q: 'Converting arc to time, 15 minutes of arc of longitude is equivalent to:', a: ['15 seconds of time', '1 minute of time', '4 minutes of time', '1 hour of time'], c: 1, why: 'The Earth turns 360 degrees in 24 hours, so 15 degrees is 1 hour and 1 degree is 4 minutes. Divide by 60 again and 15 minutes of arc becomes 1 minute of time, while 1 minute of arc is 4 seconds. The whole topic is that one ladder.', ref: 'Arc to time conversion' },
{ q: 'An aerodrome lies at 037°30\'W. At 1200 UTC, its local mean time is:', a: ['1430', '0902', '1000', '0930'], c: 3, why: '37 x 4 = 148 minutes = 2 h 28 min, and 30 minutes of arc = 2 minutes of time, giving 2 h 30 min. Longitude west, UTC best, so subtract from UTC: 0930. Adding instead gives 1430, and treating the 30 minutes of arc as 30 minutes of time gives 0902.', ref: 'LMT and longitude' },
{ q: 'The difference between local mean time and the standard time in use at a place is that:', a: ['Standard time uses the true sun and local mean time uses the mean sun', 'Local mean time applies to a whole country while standard time changes with each meridian', 'Standard time is a fixed offset from UTC applied across a territory, while local mean time changes with every meridian', 'They are identical except during the summer time period'], c: 2, why: 'Both are mean-sun times, so the true-sun answer is wrong; that difference is the equation of time, between apparent and mean time. Standard time is adopted for administrative convenience and holds across a whole state, so it matches LMT only on the zone\'s central meridian.', ref: 'Standard (zone) time' },
{ q: 'You cross the international date line flying eastbound. You should:', a: ['Advance the date by one day', 'Put the date back by one day', 'Advance the clock by one hour', 'Make no change to date or time'], c: 1, why: 'Flying east you have been adding an hour for every 15 degrees, so by the 180th meridian you are a whole day ahead of where the calendar should be. Crossing eastbound gives that day back, and you repeat the same date. Westbound does the opposite. Only the date changes, not the clock, and UTC is unaffected.', ref: 'International date line' },
{ q: 'For a flight in the UK, night begins:', a: ['At sunset', 'At the end of evening civil twilight', 'Half an hour after sunset, sunset being determined at surface level', 'When the centre of the sun\'s disc is 6 degrees below the horizon'], c: 2, why: 'The Air Navigation Order 2016, Schedule 1 defines night as half an hour after sunset until half an hour before sunrise, both times inclusive, at surface level. ICAO and SERA use the civil twilight definition instead, which is why the two lookalike answers are both offered; for UK planning it is the half-hour rule.', ref: 'ANO 2016, Schedule 1' },
{ q: 'Evening civil twilight ends when the centre of the sun\'s disc is:', a: ['On the horizon', '6 degrees below the horizon', '12 degrees below the horizon', '18 degrees below the horizon'], c: 1, why: 'Civil twilight uses 6 degrees; 12 degrees is nautical twilight and 18 degrees astronomical twilight. Note the difference from sunset itself, which is when the upper limb is on the horizon, putting the centre about 50 minutes of arc below it once refraction and semi-diameter are allowed for.', ref: 'Civil twilight definition' },
{ q: 'Two aerodromes at the same latitude lie at 001°00\'E and 002°30\'W. Compared with the western aerodrome, the eastern one sees sunrise:', a: ['14 minutes earlier', '14 minutes later', '3.5 minutes earlier', '1 hour earlier'], c: 0, why: 'The difference of longitude is 3 degrees 30 minutes, which at 4 minutes per degree is 14 minutes of time. The sun tracks westwards, so the eastern aerodrome meets it first. The 3.5 minute answer is the giveaway that someone has read the degrees straight off as minutes.', ref: 'Difference of longitude as time' },
{ q: 'An aircraft is about to drop parachutists and has not been assigned a discrete code. The pilot should select:', a: ['7004, together with Mode C, five minutes before the drop', '0033, together with Mode C, five minutes before the drop until the parachutists are estimated to be on the ground', '0033, from the moment the first parachutist leaves the aircraft until the last is on the ground', '7010, together with Mode C, for the climb and the drop'], c: 1, why: '0033 is the UK paradropping code, and the five minutes of warning is the whole point of it: it tells ATC and other traffic what is about to happen while the aeroplane is still climbing, not once canopies are already in the air. 7004 uses the same five-minute lead-in but is for aerobatics and display.', ref: 'UK AIP ENR 1.6, SSR conspicuity codes' },
{ q: 'A LARS unit assigned you squawk 4571. You leave its area of coverage and the service is terminated with no further transponder instruction. You should:', a: ['Retain 4571 until an ATS unit instructs otherwise', 'Select 7000, as you are VFR and no longer receiving a service', 'Select 2000, having left the area in which the code was assigned', 'Select standby until you next call a unit'], c: 0, why: 'The AIP is explicit: when proceeding from an area where a specific Mode A code has been assigned, maintain that setting unless otherwise instructed, and reselect codes or switch off in flight only when an ATS unit instructs it. 7000 and 2000 are for when you have had no specific instruction — they do not cancel one. In practice a controller will normally say \'squawk conspicuity\' as they terminate; the point is that you wait to be told.', ref: 'UK AIP ENR 1.6, para 2.1.4' },
{ q: 'You are squawking 7000 under a Basic Service when you declare an emergency. Regarding the transponder:', a: ['Retain 7000, because you are already in contact with a controller', 'Select 7600 first, then 7700 if the radio subsequently fails', 'Select 7700, because 7000 is a conspicuity code and not a code assigned to you', 'Select 7700 only if the controller instructs you to'], c: 2, why: 'A discrete code previously assigned by ATC already identifies you on the display, so it may be retained at the discretion of either pilot or controller. Conspicuity codes 7000 and 2000 identify nobody and are specifically excluded from that allowance, so you go to 7700. Note the order of priority: the code is selected as soon as is practicable after declaring, once controlling the aircraft and containing the emergency has been dealt with.', ref: 'CAP 413 para 8.9; UK AIP ENR 1.6 para 2.2.1' },
{ q: 'You intend to practise general aerobatics outside controlled airspace and have not been assigned a discrete code. You should select:', a: ['7010 as you begin the first manoeuvre', '7004 five minutes before you begin, with Mode C, until you stop and resume normal flight', '7004, but only if an ATS unit instructs you to', '7000 with Mode C, and advise an ATS unit by radio'], c: 1, why: '7004 covers aerobatics, displays, display practice and general aerobatic training, and may be selected at the pilot\'s discretion — which is exactly what distinguishes it from 7010, the aerodrome traffic pattern code, which shall only be selected on the direction of an ATS unit or under local aerodrome procedures. Controllers treat 7004 as unvalidated and its Mode C as unverified, so telling a unit your lateral, vertical and time limits is still encouraged.', ref: 'UK AIP ENR 1.6, SSR conspicuity codes' }
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
{ f: 'Map reading direction', b: 'Map to ground. Predict, then look.', ref: 'Nav' },
{ f: '15 degrees of longitude equals how much time?', b: '1 hour. Then 1° = 4 minutes, 15\' = 1 minute, 1\' = 4 seconds.', ref: 'Arc to time' },
{ f: 'What is local mean time (LMT)?', b: 'The time kept by the mean sun on your own meridian. LMT 1200 is mean local noon; LMT at Greenwich is UTC.', ref: 'LMT' },
{ f: 'Converting UTC to LMT — which way for east and west longitude?', b: 'East: add. West: subtract. Longitude east, UTC least; longitude west, UTC best.', ref: 'LMT conversion' },
{ f: 'What is standard (zone) time?', b: 'A fixed offset from UTC applied across a whole territory or zone, regardless of your meridian. Not always a whole hour — India UTC+5:30, Nepal UTC+5:45.', ref: 'Standard time' },
{ f: 'British Summer Time — offset and dates?', b: 'UTC+1, from 0100 GMT on the last Sunday in March to 0100 GMT on the last Sunday in October.', ref: 'Summer Time Act 1972, as amended' },
{ f: 'Crossing the international date line — which way changes the date how?', b: 'Westbound: advance one day. Eastbound: put it back one day. Clock time and UTC unchanged.', ref: 'Date line' },
{ f: 'UK definition of night?', b: 'Half an hour after sunset until half an hour before sunrise, both times inclusive, determined at surface level.', ref: 'ANO 2016, Sch 1' },
{ f: 'Sunrise, sunset and civil twilight — the defining positions of the sun?', b: 'Sunrise/sunset: upper limb on the horizon (centre about 50\' below). Civil twilight: centre between the horizon and 6° below it.', ref: 'SERA definitions / Astronomical Almanac' },
{ f: '7700, 7600, 7500 — which is which?', b: 'Emergency; radio failure; unlawful interference. Use 7500 unless the circumstances warrant 7700 instead.', ref: 'UK AIP ENR 1.6 para 2.2.1' },
{ f: 'UK general conspicuity codes, and when do you use them?', b: '7000 VFR, 2000 IFR — only when ATS has given you no specific transponder instruction. 2000 also on entering UK airspace from an adjacent region where transponders were not required.', ref: 'UK AIP ENR 1.6' },
{ f: 'Squawk for an aircraft dropping parachutists?', b: '0033 with Mode C, from five minutes before the drop until the parachutists are estimated to be on the ground — unless a discrete code has already been assigned.', ref: 'UK AIP ENR 1.6' },
{ f: 'What does Mode C actually transmit?', b: 'Pressure altitude only, in 100 ft steps, always referenced to 1013 hPa. Not your QNH setting and not your selected level.', ref: 'UK AIP ENR 1.6; ICAO Annex 10 Vol IV' },
{ f: '"Squawk ident" — what are you being asked to do?', b: 'Operate the special position identification feature, which flags your return on the controller\'s display. Only when asked.', ref: 'CAP 413 Chapter 5, Table 2' }
]
};
