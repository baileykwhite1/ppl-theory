/* 050 Meteorology — articles, quiz bank, flashcards.
   Physical values are ICAO standard atmosphere and standard meteorological theory.
   Airspace/regulatory cross-references verified against UK Reg (EU) 923/2012. */
window.SC = window.SC || {};
window.SC['050'] = {
articles: [
{
  id: '050-atmos', title: 'The atmosphere and the ISA', mins: 6, tags: ['050.01', '050.02'],
  body: `
<p>Almost every performance figure, altimeter reading and airspeed correction in aviation is
quoted against one agreed fiction: the International Standard Atmosphere. Learn its numbers
first, because half of Met and most of Performance hang off them.</p>

<h3>The ISA at mean sea level</h3>
<table>
<tbody>
<tr><td>Temperature</td><td><b>+15 &deg;C</b> (288 K)</td></tr>
<tr><td>Pressure</td><td><b>1013.25 hPa</b></td></tr>
<tr><td>Density</td><td><b>1.225 kg/m&sup3;</b></td></tr>
<tr><td>Temperature lapse rate</td><td><b>1.98 &deg;C per 1000 ft</b> (use 2 &deg;C)</td></tr>
<tr><td>Tropopause</td><td><b>36,090 ft</b> (11 km) at <b>&minus;56.5 &deg;C</b></td></tr>
</tbody></table>
<p>Above the tropopause the ISA temperature is taken as constant at &minus;56.5 &deg;C. The
lapse rate applies only up to it.</p>

<figure data-d="isa"></figure>
<h3>Structure</h3>
<p><b>Troposphere</b> — where the weather lives; temperature falls with height; contains almost
all the water vapour. Deepest at the equator (about 16 km) and shallowest at the poles (about
8 km), and it moves with the seasons. <b>Tropopause</b> — the boundary, marked by an abrupt end
to the temperature fall, and where jet streams and the worst clear-air turbulence are found.
<b>Stratosphere</b> — above, where temperature is steady then rises with height because of
ozone absorbing ultraviolet.</p>

<h3>Composition</h3>
<p>Dry air: about <b>78% nitrogen, 21% oxygen</b>, the last 1% argon, carbon dioxide and
traces. Water vapour is the variable ingredient, up to about 4% by volume, and it is the whole
reason weather is interesting. Note that the <em>proportion</em> of oxygen does not change with
height — what falls is the partial pressure, which is why you get hypoxia.</p>

<h3>Pressure, temperature, density</h3>
<p>Density is what wings and propellers and engines actually care about. It rises with
pressure and falls with temperature:</p>
<ul>
<li>Pressure falls with height — fast at first, roughly 1 hPa per 30 ft near the surface,
1 hPa per 50 ft at around 20,000 ft.</li>
<li>Higher temperature at the same pressure means <b>lower</b> density.</li>
<li>Humid air is <b>less</b> dense than dry air at the same pressure and temperature, because
a water molecule is lighter than the nitrogen or oxygen molecule it displaces. This is
counter-intuitive and reliably examined.</li>
</ul>
<p>So the worst day for aircraft performance is <b>hot, high and humid</b> — all three reduce
density.</p>

<h3>Inversions</h3>
<p>An inversion is a layer in which temperature <em>rises</em> with height. Types worth
knowing: <b>nocturnal (radiation)</b> inversion, formed by the ground cooling on a clear calm
night; <b>subsidence</b> inversion, from air sinking and warming in an anticyclone; and
<b>frontal</b> inversion, where warm air overlies cold. Inversions are very stable, so they
trap haze, smoke and moisture beneath them, giving poor visibility and a sharp cut-off in
turbulence as you climb through.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Tropopause height and temperature: 36,090 ft and &minus;56.5 &deg;C. Not 30,000 and
&minus;50.</li>
<li>Humid air is less dense, not more.</li>
<li>An inversion means temperature increasing with height, and it is stable.</li>
</ul></div>`
},
{
  id: '050-wind', title: 'Pressure, wind and local effects', mins: 7, tags: ['050.03'],
  body: `
<p>Wind is air moving from high pressure to low pressure, bent by the rotation of the Earth
and slowed by the ground. Everything else in this article is a consequence of those three
sentences.</p>

<h3>The primary cause and the two forces</h3>
<p>The <b>pressure gradient force</b> pushes air from high to low, perpendicular to the
isobars. Closer isobars mean a steeper gradient and stronger wind. The <b>Coriolis force</b>
deflects moving air to the <b>right in the northern hemisphere</b>. When the two balance, the
result is the <b>geostrophic wind</b>: blowing <em>parallel</em> to straight isobars, not across
them. Where isobars are curved, add centrifugal effect and you get the <b>gradient wind</b> —
stronger around an anticyclone, weaker around a depression, for the same isobar spacing.</p>

<h3>Buys Ballot's law</h3>
<p>Stand with your back to the wind in the northern hemisphere and low pressure is on your
<b>left</b>. It follows that air circulates <b>anticlockwise around a low</b> and
<b>clockwise around a high</b> in the northern hemisphere.</p>

<h3>The friction layer</h3>
<p>Below roughly 2000 ft the ground drags on the air, reducing Coriolis effect relative to the
pressure gradient. The surface wind therefore <b>backs</b> (turns anticlockwise) and
<b>decreases</b> compared with the wind just above. Typically about <b>30&deg; and half the
speed over land</b>, and about <b>10&deg; and two-thirds the speed over the sea</b>, where
friction is less.</p>
<p>Turn that round for the cockpit: as you <b>climb</b> out of the friction layer, the wind
<b>veers and increases</b>. That is why your drift changes on the climb, and why a strong
crosswind aloft can be a light one on the runway.</p>

<h3>Convergence and divergence</h3>
<p>Air converging at low level must rise, which cools it, which builds cloud — so
<b>convergence gives ascent and bad weather</b>, the pattern in a depression. Air diverging at
low level must be replaced by air sinking from above; sinking air warms and dries, so
<b>divergence gives descent and fair weather</b>, the pattern in an anticyclone.</p>

<h3>Local winds you will meet</h3>
<ul>
<li><b>Sea breeze</b> — daytime. Land heats faster than sea, air rises over the land, the
breeze blows <em>onshore</em>. Strengthens through the afternoon, can reach 15 kt or more, and
its leading edge (the sea-breeze front) can trigger cloud and give a sharp wind change on
final approach.</li>
<li><b>Land breeze</b> — night. The land cools faster, so the flow reverses and blows
<em>offshore</em>. Weaker than the sea breeze.</li>
<li><b>Anabatic</b> — air warmed on a sunlit slope flows <em>up</em> the slope by day.
<b>Katabatic</b> — dense cold air flows <em>down</em> a slope at night, and can be surprisingly
strong down a valley.</li>
<li><b>Venturi effect</b> — wind accelerating through a gap or valley constriction.</li>
<li><b>F&ouml;hn effect</b> — air forced over a mountain range cools at the saturated rate on
the way up, loses its moisture as rain, then warms at the dry rate on the way down, arriving
warmer and drier than it started.</li>
</ul>

<figure data-d="seabreeze"></figure>
<h3>Mountain waves and turbulence</h3>
<p>Standing (lee) waves need a wind of about <b>20 kt or more roughly perpendicular</b> to a
ridge, increasing with height, and a stable layer near the ridge top. Signs: <b>lenticular</b>
clouds marking the wave crests, <b>roll or rotor</b> cloud beneath the crests, and a <b>cap</b>
cloud on the ridge. The rotor is the dangerous part — violent turbulence, and severe downdraught
on the lee side. Give ridges a wide berth and plenty of height in strong winds.</p>
<p>Turbulence types: <b>mechanical</b> (friction and obstacles), <b>thermal or convective</b>
(rising air on a sunny day), <b>frontal</b> (at the boundary of air masses), <b>wake</b>
(from other aircraft), and <b>clear-air turbulence</b> (wind shear near jet streams and the
tropopause).</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Geostrophic wind blows <b>parallel</b> to the isobars, not across them.</li>
<li>Descending into the friction layer the wind <b>backs and decreases</b>; climbing, it
<b>veers and increases</b> (northern hemisphere).</li>
<li>Sea breeze blows onshore and happens by <b>day</b>.</li>
</ul></div>`
},
{
  id: '050-cloud', title: 'Stability, cloud, fog and icing', mins: 8, tags: ['050.04', '050.05', '050.06'],
  body: `
<h3>Adiabatic lapse rates</h3>
<p>A parcel of air lifted through the atmosphere cools by expansion, with no heat exchanged
with its surroundings.</p>
<ul>
<li><b>DALR</b> — Dry Adiabatic Lapse Rate: <b>3 &deg;C per 1000 ft</b>. Unsaturated air.</li>
<li><b>SALR</b> — Saturated Adiabatic Lapse Rate: about <b>1.5 &deg;C per 1000 ft</b> (varies
roughly 1.2 to 1.8, because latent heat released by condensation offsets some of the cooling).</li>
<li><b>ELR</b> — Environmental Lapse Rate: whatever the actual atmosphere is doing today,
measured by a radiosonde.</li>
</ul>
<p>Compare the ELR with the adiabatic rates to get stability:</p>
<ul>
<li><b>ELR greater than DALR</b> (steeper than 3 &deg;C/1000 ft) — <b>absolutely unstable</b>.
Air lifted keeps rising. Convection, cumulus, showers, good visibility, bumpy.</li>
<li><b>ELR less than SALR</b> (shallower than about 1.5 &deg;C/1000 ft) — <b>absolutely
stable</b>. Air lifted sinks back. Layer cloud, drizzle, poor visibility, smooth.</li>
<li><b>ELR between SALR and DALR</b> — <b>conditionally unstable</b>: stable while
unsaturated, unstable once saturated. The setup for a thunderstorm.</li>
</ul>

<figure data-d="stability"></figure>
<h3>Humidity and dew point</h3>
<p><b>Relative humidity</b> is how much water vapour the air holds as a percentage of what it
could hold at that temperature. Warm air can hold far more. The <b>dew point</b> is the
temperature to which air must be cooled, at constant pressure, to become saturated. When
temperature and dew point converge, expect cloud, mist or fog. A useful rule: for unsaturated
air rising, the <b>cloud base in feet is roughly (temperature &minus; dew point) &times;
400</b>.</p>

<h3>Cloud, in two families</h3>
<p><b>Cumuliform</b> — formed by instability and convection. Heaped, sharp-edged, vertical
development. Turbulent inside, showery precipitation, good visibility between. Cu, TCU, Cb.
<b>Stratiform</b> — formed by stable air lifted gently or cooled from below. Layered, uniform.
Smooth, drizzle or continuous rain, poor visibility. St, Sc, As, Ns, Ci, Cc, Cs.</p>
<p>Height classification: <b>low</b> (surface to 6500 ft) St, Sc, Cu, Cb; <b>medium</b>
(6500 to 20,000 ft) As, Ac, Ns; <b>high</b> (above 20,000 ft) Ci, Cc, Cs — ice crystals.</p>

<h3>Thunderstorms</h3>
<p>Three ingredients: <b>unstable air</b> through a deep layer, <b>moisture</b>, and a
<b>trigger</b> to start the lifting (surface heating, a front, or orographic lift). Three
stages: <b>cumulus</b> (updraughts only), <b>mature</b> (updraughts and downdraughts together,
precipitation reaching the surface, the anvil forming — the dangerous stage, and the only one
with lightning and hail), <b>dissipating</b> (downdraughts only, the cell collapsing).</p>
<p>The hazards: severe turbulence, severe icing, hail, lightning, microburst and violent wind
shear, and a downdraught you cannot out-climb. Avoid a Cb by at least 10 NM, and never fly
under a storm to get through it.</p>

<h3>Fog — know which type from the cause</h3>
<ul>
<li><b>Radiation fog</b> — clear night, light wind (2 to 8 kt), moist air, over land. The
ground radiates heat away, cools the air to its dew point. Classic autumn dawn fog; clears
with sun or a strengthening wind. Needs <em>some</em> wind: calm gives dew, too much gives low
stratus.</li>
<li><b>Advection fog</b> — warm moist air moves over a colder surface. Sea fog, or fog over
cold land in spring. Unlike radiation fog it can form and persist in a <b>strong wind</b> and
by day.</li>
<li><b>Steam fog</b> — very cold air over much warmer water.</li>
<li><b>Frontal fog</b> — rain falling into cold air ahead of a warm front, saturating it.</li>
<li><b>Hill (upslope) fog</b> — cloud on the high ground; simply stratus you have flown into.</li>
</ul>
<p><b>Mist</b> is visibility of 1000 m or more with relative humidity above about 95%; <b>fog</b>
is visibility <b>below 1000 m</b>; haze and smoke are dry obscurations.</p>

<h3>Icing</h3>
<ul>
<li><b>Rime ice</b> — small supercooled droplets freezing instantly. Opaque, white, rough,
brittle. Forms in stratiform cloud, typically 0 to &minus;20 &deg;C. Spoils the aerofoil shape.</li>
<li><b>Clear (glaze) ice</b> — large supercooled droplets spreading before freezing. Smooth,
transparent, heavy, tenacious. Forms in cumuliform cloud and freezing rain, typically 0 to
&minus;10 &deg;C. The most dangerous: heavy, hard to shed, spreads beyond protected surfaces.</li>
<li><b>Hoar frost</b> — water vapour subliming straight to ice on a cold airframe, on the
ground or after a rapid descent from cold air. Must be removed before flight.</li>
<li><b>Freezing rain</b> — the worst case. Rain falling through a sub-zero layer beneath a
warm inversion, usually ahead of a warm front.</li>
</ul>
<p><b>Carburettor icing</b> is a different animal and does not need cloud or freezing outside
air. Fuel vaporisation and pressure drop in the venturi can cool the charge by 20 to 30
&deg;C, so it is possible with an OAT anywhere from about &minus;10 to +30 &deg;C, worst in
humid air at low power. Symptoms: gradual loss of RPM or manifold pressure, rough running.
Cure: carb heat, applied fully and early.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>DALR 3, SALR about 1.5, both per 1000 ft. Do not mix up with the ISA 2 &deg;C/1000 ft,
which is an <em>environmental</em> figure.</li>
<li>Radiation fog needs a light wind; advection fog can persist in a strong one.</li>
<li>Fog is below 1000 m visibility. Mist is 1000 m or more.</li>
<li>Clear ice comes from <b>large</b> droplets and cumuliform cloud; rime from small droplets
and stratiform.</li>
</ul></div>`
},
{
  id: '050-fronts', title: 'Air masses, fronts and pressure systems', mins: 7, tags: ['050.07', '050.08', '050.09'],
  body: `
<h3>Air masses</h3>
<p>An air mass takes its character from where it sat long enough to acquire one. Two labels:
<b>source latitude</b> (Polar, Arctic, Tropical) and <b>surface</b> (maritime = moist,
continental = dry).</p>
<ul>
<li><b>Polar maritime (Pm)</b> — the UK default from the north-west. Cool, moist, unstable.
Cumulus, showers, good visibility between, bumpy.</li>
<li><b>Tropical maritime (Tm)</b> — from the south-west. Warm, very moist, stable. Stratus,
drizzle, sea fog, poor visibility.</li>
<li><b>Polar continental (Pc)</b> — from the east in winter. Cold, dry, stable at source, but
picks up moisture and instability crossing the North Sea, giving winter snow showers on the
east coast.</li>
<li><b>Tropical continental (Tc)</b> — from the south-east in summer. Hot, dry, stable, hazy.</li>
</ul>
<p>The pattern to remember: <b>maritime means moist, continental means dry; polar means
unstable when it moves south (heated from below), tropical means stable when it moves north
(cooled from below).</b></p>

<h3>The warm front</h3>
<p>Warm air <b>overrunning</b> cold air, on a shallow slope of about 1 in 150. It announces
itself hours ahead. Sequence as it approaches: cirrus, then cirrostratus (halo round the sun),
altostratus, then nimbostratus with continuous rain, lowering cloud base, falling pressure and
worsening visibility. Wind <b>backs</b> ahead of it, then <b>veers</b> as it passes. Behind it,
in the warm sector, pressure steadies, rain becomes drizzle, cloud is low stratus and
visibility is poor. Hazards: continuous rain, low cloud, frontal fog, and freezing rain in
winter.</p>

<figure data-d="warmfront"></figure>
<h3>The cold front</h3>
<p>Cold air <b>undercutting</b> warm air, on a steeper slope of about 1 in 50, and moving
faster. Short, sharp and violent: a line of towering cumulus and cumulonimbus, heavy showers or
thunderstorms, severe turbulence, a sharp <b>veer</b> in wind, a sharp rise in pressure and a
drop in temperature. Then it clears quickly to bright, showery, gusty Pm air with excellent
visibility.</p>

<figure data-d="coldfront"></figure>
<h3>Occlusions</h3>
<p>The cold front travels faster and eventually catches the warm front, lifting the warm sector
clear of the surface. If the air behind is colder than the air ahead you get a <b>cold
occlusion</b>; if it is warmer, a <b>warm occlusion</b>. Weather is a mix of both fronts,
generally with a longer spell of poor conditions and no clear warm sector.</p>

<h3>Pressure systems</h3>
<ul>
<li><b>Depression (low)</b> — converging air, ascent, cloud and precipitation. Winds
anticlockwise (northern hemisphere) and generally strong because the isobars are packed.
Moves quickly.</li>
<li><b>Anticyclone (high)</b> — diverging air, subsidence, warming and drying. Winds clockwise
and light. Slow-moving and persistent, so it blocks. Fair weather, but subsidence inversions
trap haze, and in winter it gives fog and low stratus that can last for days — an
<em>anticyclonic gloom</em>, not a nice day.</li>
<li><b>Trough</b> — an elongated area of low pressure; behaves like a front, often with a line
of showers. <b>Ridge</b> — an elongated area of high pressure; a fine interlude between
depressions. <b>Col</b> — a slack area between two highs and two lows; light winds, and a
favourite for fog.</li>
</ul>

<div class="trap"><b>Exam traps</b>
<ul>
<li>At a front the wind always <b>veers</b> as it passes, in the northern hemisphere.</li>
<li>Warm front slope about 1 in 150; cold front about 1 in 50. The <b>cold</b> front is the
steep one.</li>
<li>An anticyclone in winter is not automatically good flying weather.</li>
</ul></div>`
},
{
  id: '050-reports', title: 'Reading METARs, TAFs and the Form 214', mins: 6, tags: ['050.10', '050.11'],
  body: `
<h3>METAR — what it is doing now</h3>
<p>A routine actual observation, issued usually every half hour. Read it in fixed order.</p>
<p class="mono">EGKK 121250Z 24015G27KT 3000 &minus;RA BR BKN008 OVC015 09/08 Q1004 TEMPO 1200 RADZ</p>
<ul>
<li><b>EGKK</b> station; <b>121250Z</b> 12th at 1250 UTC — everything in aviation is UTC.</li>
<li><b>24015G27KT</b> wind 240&deg; <b>true</b>, 15 kt, gusting 27. <b>VRB</b> for variable,
<b>00000KT</b> for calm, and a form like <b>210V280</b> for a varying direction.</li>
<li><b>3000</b> visibility in metres. <b>9999</b> means 10 km or more. <b>0000</b> means less
than 50 m.</li>
<li><b>&minus;RA BR</b> weather: minus is light, plus is heavy, no sign is moderate. RA rain,
SN snow, DZ drizzle, SH showers, TS thunderstorm, BR mist, FG fog, HZ haze, FZ freezing,
GR hail, VC in the vicinity.</li>
<li><b>BKN008 OVC015</b> cloud in <b>hundreds of feet above aerodrome elevation</b>. FEW 1-2
oktas, SCT 3-4, BKN 5-7, OVC 8. NSC no significant cloud, SKC sky clear. Only CB and TCU are
named.</li>
<li><b>09/08</b> temperature / dew point in &deg;C, M for minus. One degree apart, with rain —
expect it to go to fog.</li>
<li><b>Q1004</b> QNH in hPa.</li>
<li>Then trend or remarks: <b>NOSIG</b>, <b>TEMPO</b>, <b>BECMG</b>, and RE for recent weather.</li>
</ul>
<p><b>CAVOK</b> replaces visibility, weather and cloud, and means all of: visibility
<b>10 km or more</b>; <b>no cloud below 5000 ft</b> or below the highest minimum sector
altitude, whichever is greater; <b>no CB or TCU at any level</b>; and <b>no significant
weather</b>. All four, or it is not CAVOK.</p>

<h3>TAF — what it is expected to do</h3>
<p>A forecast for the aerodrome, with a validity period (commonly 9, 24 or 30 hours). Same
codes as a METAR, plus change groups:</p>
<ul>
<li><b>BECMG</b> — a permanent change expected during the stated period.</li>
<li><b>TEMPO</b> — temporary fluctuations, each lasting under an hour and in total less than
half the period.</li>
<li><b>PROB30 / PROB40</b> — 30% or 40% probability. There is no PROB50 or higher; if it were
more likely than that, the forecaster would state it.</li>
<li><b>FM</b> followed by a time — from that time.</li>
</ul>

<h3>The UK charts you will actually use</h3>
<ul>
<li><b>Form 214</b> — spot wind and temperature chart. Wind velocity and temperature at fixed
levels (1000, 2000, 5000, 10,000 ft and up) for a grid of spot positions, at a fixed time.
Interpolate between levels and between spots. Winds on the 214 are <b>true</b>.</li>
<li><b>Form 215</b> — low-level significant weather chart for the UK below 10,000 ft. Boxes
showing weather, visibility, cloud and freezing level for each area, plus a synoptic picture.</li>
<li><b>Significant weather chart / synoptic chart</b> — fronts, pressure centres, isobars.</li>
</ul>

<h3>The other acronyms</h3>
<p><b>SPECI</b> a special observation issued when conditions change significantly between
METARs. <b>SIGMET</b> a warning of en-route weather hazardous to all aircraft — thunderstorms,
severe icing, severe turbulence, volcanic ash. <b>AIRMET</b> low-level information for GA.
<b>ATIS</b> the recorded broadcast of aerodrome conditions and runway in use — note the letter
and read it back. <b>VOLMET</b> a broadcast of METARs for a group of aerodromes.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>Cloud heights in a METAR or TAF are above <b>aerodrome elevation</b>, not amsl. Cloud
heights on a Form 215 are amsl.</li>
<li>METAR and TAF winds are <b>true</b>; the tower gives you <b>magnetic</b>.</li>
<li>CAVOK needs all four conditions, and the cloud limit is 5000 ft.</li>
<li>9999 is 10 km <b>or more</b>, not exactly 10 km.</li>
</ul></div>`
}
],

quiz: [
{ q: 'ISA mean sea level temperature and pressure are:', a: ['+15 C and 1013.25 hPa', '+20 C and 1000 hPa', '0 C and 1013.25 hPa', '+15 C and 1000 hPa'], c: 0, why: 'ISA MSL: +15 C, 1013.25 hPa, density 1.225 kg/m3.', ref: 'ICAO Standard Atmosphere' },
{ q: 'The ISA temperature lapse rate in the troposphere is:', a: ['1.0 C per 1000 ft', '1.98 C per 1000 ft', '3.0 C per 1000 ft', '0.65 C per 1000 ft'], c: 1, why: '1.98 C per 1000 ft, usually rounded to 2 C.', ref: 'ICAO Standard Atmosphere' },
{ q: 'The ISA tropopause is at:', a: ['30,000 ft and -40 C', '36,090 ft and -56.5 C', '40,000 ft and -60 C', '18,000 ft and -20 C'], c: 1, why: '36,090 ft (11 km) at -56.5 C, above which ISA temperature is constant.', ref: 'ICAO Standard Atmosphere' },
{ q: 'ISA sea level density is:', a: ['1.225 kg/m3', '1.013 kg/m3', '0.905 kg/m3', '2.25 kg/m3'], c: 0, why: '1.225 kg/m3.', ref: 'ICAO Standard Atmosphere' },
{ q: 'Compared with dry air at the same temperature and pressure, humid air is:', a: ['More dense', 'Less dense', 'The same density', 'More dense only below 0 C'], c: 1, why: 'Water vapour molecules are lighter than the nitrogen and oxygen they displace, so humid air is less dense. Hot, high and humid is the worst combination for performance.', ref: 'Atmospheric physics' },
{ q: 'An inversion is a layer in which:', a: ['Temperature falls rapidly with height', 'Temperature increases with height', 'Pressure increases with height', 'Humidity falls to zero'], c: 1, why: 'Temperature increases with height. Inversions are very stable and trap haze and moisture beneath them.', ref: 'Met theory' },
{ q: 'The dry adiabatic lapse rate is:', a: ['1.5 C per 1000 ft', '2 C per 1000 ft', '3 C per 1000 ft', '5 C per 1000 ft'], c: 2, why: 'DALR is 3 C per 1000 ft. SALR is about 1.5 C per 1000 ft.', ref: 'Met theory' },
{ q: 'The saturated adiabatic lapse rate is less than the dry rate because:', a: ['Saturated air is denser', 'Latent heat released by condensation offsets some of the cooling', 'Water vapour absorbs sunlight', 'Pressure falls more slowly'], c: 1, why: 'Condensation releases latent heat, partly offsetting the cooling from expansion.', ref: 'Met theory' },
{ q: 'If the environmental lapse rate is greater than the DALR, the air is:', a: ['Absolutely stable', 'Conditionally unstable', 'Absolutely unstable', 'Neutral'], c: 2, why: 'ELR steeper than DALR means absolutely unstable: lifted air keeps rising. Expect convection and cumulus.', ref: 'Met theory' },
{ q: 'Layer cloud, drizzle, poor visibility and smooth flying conditions indicate:', a: ['Unstable air', 'Stable air', 'A cold front passing', 'Conditional instability'], c: 1, why: 'Stratiform cloud, drizzle, poor visibility and smooth air are the signature of stable air.', ref: 'Met theory' },
{ q: 'The dew point is:', a: ['The temperature at which ice forms', 'The temperature to which air must be cooled at constant pressure to become saturated', 'The temperature of the cloud base', 'The wet bulb temperature'], c: 1, why: 'The saturation temperature at constant pressure. When temperature and dew point converge, expect cloud, mist or fog.', ref: 'Met theory' },
{ q: 'With a surface temperature of 20 C and dew point 8 C, the approximate cumulus base is:', a: ['1200 ft', '2400 ft', '4800 ft', '6000 ft'], c: 2, why: 'Spread of 12 C times 400 ft is about 4800 ft.', ref: 'Met rule of thumb' },
{ q: 'In the northern hemisphere the Coriolis force deflects moving air:', a: ['To the left', 'To the right', 'Upwards', 'Towards low pressure'], c: 1, why: 'To the right in the northern hemisphere.', ref: 'Met theory' },
{ q: 'The geostrophic wind blows:', a: ['Directly from high to low pressure', 'Parallel to straight isobars', 'At 30 degrees to the isobars', 'Perpendicular to the isobars'], c: 1, why: 'When pressure gradient and Coriolis forces balance, the wind blows parallel to straight isobars.', ref: 'Met theory' },
{ q: 'Buys Ballot law in the northern hemisphere: back to the wind and low pressure is:', a: ['On your left', 'On your right', 'Ahead', 'Behind'], c: 0, why: 'On your left. Hence anticlockwise circulation around a low.', ref: 'Met theory' },
{ q: 'Descending from 2000 ft to the surface, the wind will typically:', a: ['Veer and increase', 'Back and decrease', 'Veer and decrease', 'Back and increase'], c: 1, why: 'Surface friction reduces the wind and backs it. Climbing out of the friction layer it veers and increases.', ref: 'Met theory' },
{ q: 'Over the sea the surface wind is typically backed from the gradient wind by about:', a: ['10 degrees', '30 degrees', '45 degrees', '60 degrees'], c: 0, why: 'About 10 degrees and two-thirds the speed over sea; about 30 degrees and half the speed over land.', ref: 'Met theory' },
{ q: 'A sea breeze:', a: ['Blows offshore by day', 'Blows onshore by day', 'Blows onshore at night', 'Occurs only in winter'], c: 1, why: 'Land heats faster than sea by day, air rises over the land, and the breeze flows onshore.', ref: 'Met theory' },
{ q: 'A katabatic wind is:', a: ['Warm air flowing up a sunlit slope', 'Cold dense air flowing down a slope at night', 'Wind accelerated through a valley', 'A wind blowing off the sea'], c: 1, why: 'Katabatic is cold air draining downhill at night. Anabatic is the daytime upslope flow.', ref: 'Met theory' },
{ q: 'Mountain wave activity typically requires a wind, roughly perpendicular to the ridge, of at least:', a: ['5 kt', '10 kt', '20 kt', '50 kt'], c: 2, why: 'About 20 kt or more, increasing with height, with a stable layer near ridge top.', ref: 'Met theory' },
{ q: 'Lenticular cloud indicates:', a: ['Thunderstorm activity', 'Standing wave activity in the lee of high ground', 'A warm front approaching', 'Fog forming'], c: 1, why: 'Lens-shaped, stationary cloud marks the crests of standing waves; rotor cloud beneath means severe turbulence.', ref: 'Met theory' },
{ q: 'Air converging at low level results in:', a: ['Ascent, cloud and precipitation', 'Descent, warming and fair weather', 'No vertical motion', 'An inversion'], c: 0, why: 'Convergence forces ascent, which cools the air and builds cloud. Divergence gives subsidence and fair weather.', ref: 'Met theory' },
{ q: 'Radiation fog forms most readily with:', a: ['A clear night, light wind and moist air over land', 'A strong wind and warm air over a cold sea', 'A cold front passing', 'Calm conditions and dry air'], c: 0, why: 'Clear skies for radiative cooling, moist air, and a light wind of about 2 to 8 kt to mix the cooling through a layer. Calm gives dew; strong wind gives stratus.', ref: 'Met theory' },
{ q: 'Which fog type can form and persist in a strong wind and by day?', a: ['Radiation fog', 'Advection fog', 'Steam fog', 'Frontal fog'], c: 1, why: 'Advection fog forms when warm moist air moves over a colder surface, and is not dispersed by wind or daylight.', ref: 'Met theory' },
{ q: 'Fog is reported when visibility is:', a: ['Less than 5000 m', 'Less than 1500 m', 'Less than 1000 m', 'Less than 200 m'], c: 2, why: 'Fog is below 1000 m. Mist is 1000 m or more with high humidity.', ref: 'WMO definitions' },
{ q: 'Clear (glaze) ice is typically associated with:', a: ['Small supercooled droplets in stratiform cloud', 'Large supercooled droplets in cumuliform cloud or freezing rain', 'Water vapour subliming on a cold airframe', 'Snow'], c: 1, why: 'Large droplets spread before freezing, giving smooth, heavy, tenacious clear ice. Rime comes from small droplets in stratiform cloud.', ref: 'Met theory' },
{ q: 'Freezing rain is most likely:', a: ['Behind a cold front', 'Ahead of a warm front in winter', 'In an anticyclone in summer', 'Above the tropopause'], c: 1, why: 'Rain from the warm air aloft falls through a sub-zero layer beneath the frontal surface ahead of a warm front.', ref: 'Met theory' },
{ q: 'Carburettor icing is possible at outside air temperatures of about:', a: ['Only below 0 C', 'Only below -10 C', '-10 C to +30 C, and worst in humid air at low power', 'Only above +20 C'], c: 2, why: 'Vaporisation and the venturi pressure drop can cool the charge 20 to 30 C, so it is possible well above freezing. Humid air and low power settings are the worst case.', ref: 'Met / AGK' },
{ q: 'The mature stage of a thunderstorm is characterised by:', a: ['Updraughts only', 'Updraughts and downdraughts together, with precipitation at the surface', 'Downdraughts only', 'No precipitation'], c: 1, why: 'The mature stage has both, with precipitation reaching the surface and the anvil forming. It is the most hazardous stage.', ref: 'Met theory' },
{ q: 'Which air mass gives the UK cool, moist, unstable air with cumulus and showers?', a: ['Tropical maritime', 'Polar maritime', 'Tropical continental', 'Polar continental'], c: 1, why: 'Polar maritime from the north-west: cool, moist and unstable because it is heated from below as it moves south.', ref: 'Met theory' },
{ q: 'Tropical maritime air over the UK typically brings:', a: ['Cumulus and good visibility', 'Stratus, drizzle, sea fog and poor visibility', 'Clear skies and strong winds', 'Snow showers'], c: 1, why: 'Warm, very moist and stable, because it is cooled from below as it moves north. Stratus, drizzle and poor visibility.', ref: 'Met theory' },
{ q: 'A warm front has a typical slope of about:', a: ['1 in 20', '1 in 50', '1 in 150', '1 in 500'], c: 2, why: 'About 1 in 150. The cold front is steeper at about 1 in 50.', ref: 'Met theory' },
{ q: 'As a front passes in the northern hemisphere, the wind:', a: ['Backs', 'Veers', 'Reverses', 'Drops to calm'], c: 1, why: 'The wind veers at a frontal passage in the northern hemisphere.', ref: 'Met theory' },
{ q: 'Cold front weather is typically:', a: ['Long spells of continuous rain and lowering stratus', 'A narrow band of cumulonimbus, heavy showers, turbulence, then clearing', 'Fog and calm winds', 'High cirrus only'], c: 1, why: 'The steep, fast cold front gives a short, violent band of Cb and showers, then rapid clearance to bright, gusty, showery air.', ref: 'Met theory' },
{ q: 'An occlusion occurs when:', a: ['Two warm fronts merge', 'A cold front catches up with a warm front and lifts the warm sector clear of the surface', 'A depression fills', 'An anticyclone builds'], c: 1, why: 'The faster cold front overtakes the warm front, lifting the warm air off the surface.', ref: 'Met theory' },
{ q: 'In an anticyclone in winter over the UK you should expect:', a: ['Guaranteed clear skies and good visibility', 'Subsidence inversion, trapped haze, fog and low stratus that can persist for days', 'Heavy showers', 'Strong winds and turbulence'], c: 1, why: 'Subsidence warms and dries aloft but caps the lower layer, trapping moisture and pollution. Anticyclonic gloom is a real hazard.', ref: 'Met theory' },
{ q: 'A col is:', a: ['An elongated area of high pressure', 'An elongated area of low pressure', 'A slack area between two highs and two lows, with light winds', 'The centre of a depression'], c: 2, why: 'A col has a weak pressure gradient and light winds, and is a favourite location for fog.', ref: 'Met theory' },
{ q: 'In a METAR, 9999 for visibility means:', a: ['Exactly 10 km', '10 km or more', '9999 m exactly', 'Visibility not measured'], c: 1, why: '9999 means 10 km or more. 0000 means less than 50 m.', ref: 'METAR code' },
{ q: 'CAVOK requires all of the following except:', a: ['Visibility 10 km or more', 'No cloud below 5000 ft or the highest MSA, whichever is greater', 'No CB or TCU at any level', 'Wind less than 15 kt'], c: 3, why: 'Wind is not part of CAVOK. The four conditions are visibility, cloud, no CB/TCU and no significant weather.', ref: 'METAR code' },
{ q: 'Cloud base in a METAR is given as height above:', a: ['Mean sea level', 'Aerodrome elevation', 'The 1013 datum', 'The transition altitude'], c: 1, why: 'Above aerodrome elevation, in hundreds of feet. Form 215 cloud heights are amsl, which is a common confusion.', ref: 'METAR code' },
{ q: 'BKN in a METAR means cloud cover of:', a: ['1 to 2 oktas', '3 to 4 oktas', '5 to 7 oktas', '8 oktas'], c: 2, why: 'FEW 1-2, SCT 3-4, BKN 5-7, OVC 8 oktas.', ref: 'METAR code' },
{ q: 'The wind direction in a METAR is given in degrees:', a: ['Magnetic', 'True', 'Compass', 'Grid'], c: 1, why: 'METAR and TAF winds are true. The tower passes magnetic.', ref: 'METAR code' },
{ q: 'TEMPO in a TAF indicates:', a: ['A permanent change', 'Temporary fluctuations, each under an hour and in total less than half the period', 'A 30% probability', 'A change from a stated time'], c: 1, why: 'TEMPO is temporary fluctuation. BECMG is a permanent change; FM is from a time; PROB30/40 give probability.', ref: 'TAF code' },
{ q: 'The highest probability group used in a TAF is:', a: ['PROB20', 'PROB40', 'PROB60', 'PROB80'], c: 1, why: 'PROB30 and PROB40 only. Anything more likely would be stated as a change group.', ref: 'TAF code' },
{ q: 'A SIGMET warns of:', a: ['Aerodrome conditions', 'En-route weather hazardous to all aircraft, such as thunderstorms, severe icing or volcanic ash', 'Runway closures', 'Spot winds'], c: 1, why: 'SIGMET is an en-route hazard warning. AIRMET is low-level GA information; ATIS is aerodrome information.', ref: 'Annex 3' },
{ q: 'The UK Form 214 provides:', a: ['Significant weather below 10,000 ft', 'Spot wind and temperature at fixed levels', 'Aerodrome forecasts', 'Surface pressure charts only'], c: 1, why: 'Form 214 is the spot wind and temperature chart; Form 215 is the low-level significant weather chart.', ref: 'Met Office products' }
],

cards: [
{ f: 'ISA MSL temperature, pressure, density', b: '+15 C, 1013.25 hPa, 1.225 kg/m3.', ref: 'ISA' },
{ f: 'ISA lapse rate', b: '1.98 C per 1000 ft — use 2 C.', ref: 'ISA' },
{ f: 'ISA tropopause', b: '36,090 ft (11 km) at -56.5 C.', ref: 'ISA' },
{ f: 'DALR', b: '3 C per 1000 ft.', ref: 'Met' },
{ f: 'SALR', b: 'About 1.5 C per 1000 ft (1.2 to 1.8).', ref: 'Met' },
{ f: 'ELR steeper than DALR means', b: 'Absolutely unstable — convection, cumulus, showers, turbulence, good visibility.', ref: 'Met' },
{ f: 'ELR shallower than SALR means', b: 'Absolutely stable — layer cloud, drizzle, poor visibility, smooth air.', ref: 'Met' },
{ f: 'ELR between SALR and DALR means', b: 'Conditionally unstable — stable dry, unstable once saturated.', ref: 'Met' },
{ f: 'Cumulus base rule of thumb', b: '(Temperature minus dew point) x 400 ft.', ref: 'Met' },
{ f: 'Is humid air more or less dense than dry air?', b: 'Less dense. Water vapour is lighter than the N2/O2 it displaces.', ref: 'Met' },
{ f: 'Coriolis deflection, northern hemisphere', b: 'To the right.', ref: 'Met' },
{ f: 'Geostrophic wind direction relative to isobars', b: 'Parallel to straight isobars.', ref: 'Met' },
{ f: 'Buys Ballot law, northern hemisphere', b: 'Back to the wind, low pressure on your left. Anticlockwise around a low.', ref: 'Met' },
{ f: 'Surface wind versus gradient wind over land', b: 'Backed about 30 degrees and about half the speed.', ref: 'Met' },
{ f: 'Surface wind versus gradient wind over sea', b: 'Backed about 10 degrees and about two-thirds the speed.', ref: 'Met' },
{ f: 'Climbing out of the friction layer, the wind', b: 'Veers and increases (northern hemisphere).', ref: 'Met' },
{ f: 'Sea breeze — direction and time of day', b: 'Onshore, by day. Land breeze is offshore, at night, and weaker.', ref: 'Met' },
{ f: 'Anabatic versus katabatic', b: 'Anabatic: up a sunlit slope by day. Katabatic: cold air down a slope at night.', ref: 'Met' },
{ f: 'Foehn effect', b: 'Air crosses a range, cools at SALR and rains out going up, warms at DALR coming down. Arrives warmer and drier.', ref: 'Met' },
{ f: 'Mountain wave requirements', b: 'About 20 kt or more roughly perpendicular to the ridge, increasing with height, with a stable layer near ridge top.', ref: 'Met' },
{ f: 'Lenticular and rotor cloud mean', b: 'Standing waves. Rotor beneath the crests is severe turbulence.', ref: 'Met' },
{ f: 'Convergence versus divergence', b: 'Convergence: ascent, cloud, bad weather (depression). Divergence: subsidence, warming, fair weather (anticyclone).', ref: 'Met' },
{ f: 'Radiation fog needs', b: 'Clear night, moist air, light wind 2 to 8 kt, over land. Calm gives dew; strong wind gives stratus.', ref: 'Met' },
{ f: 'Advection fog', b: 'Warm moist air over a colder surface. Can form and persist in strong wind and by day.', ref: 'Met' },
{ f: 'Fog versus mist visibility', b: 'Fog below 1000 m. Mist 1000 m or more with humidity above about 95%.', ref: 'WMO' },
{ f: 'Rime ice', b: 'Small supercooled droplets, stratiform cloud, 0 to -20 C. Opaque, white, rough, brittle.', ref: 'Met' },
{ f: 'Clear (glaze) ice', b: 'Large supercooled droplets, cumuliform cloud or freezing rain, 0 to -10 C. Smooth, heavy, tenacious — the dangerous one.', ref: 'Met' },
{ f: 'Where is freezing rain found?', b: 'Ahead of a warm front in winter, beneath the frontal surface.', ref: 'Met' },
{ f: 'Carb icing temperature range', b: 'About -10 to +30 C OAT. Worst in humid air at low power.', ref: 'Met/AGK' },
{ f: 'Three ingredients for a thunderstorm', b: 'Deep instability, moisture, and a trigger to start the lift.', ref: 'Met' },
{ f: 'Three thunderstorm stages', b: 'Cumulus (updraughts), mature (both, precipitation at surface — most dangerous), dissipating (downdraughts).', ref: 'Met' },
{ f: 'Cb avoidance distance', b: 'At least 10 NM. Never fly beneath one.', ref: 'Met' },
{ f: 'Polar maritime air over the UK', b: 'Cool, moist, unstable. Cumulus, showers, good visibility, bumpy.', ref: 'Met' },
{ f: 'Tropical maritime air over the UK', b: 'Warm, very moist, stable. Stratus, drizzle, sea fog, poor visibility.', ref: 'Met' },
{ f: 'Warm front versus cold front slope', b: 'Warm about 1 in 150 (shallow). Cold about 1 in 50 (steep).', ref: 'Met' },
{ f: 'Wind change at a frontal passage', b: 'Veers (northern hemisphere).', ref: 'Met' },
{ f: 'Warm front cloud sequence', b: 'Ci, Cs (halo), As, Ns with continuous rain, then low stratus and drizzle in the warm sector.', ref: 'Met' },
{ f: 'Occlusion', b: 'Cold front catches the warm front and lifts the warm sector clear of the surface.', ref: 'Met' },
{ f: 'Trough, ridge, col', b: 'Trough: elongated low, front-like weather. Ridge: elongated high, fine spell. Col: slack area, light winds, fog-prone.', ref: 'Met' },
{ f: 'METAR 9999', b: 'Visibility 10 km or more.', ref: 'METAR' },
{ f: 'The four CAVOK conditions', b: 'Vis 10 km or more; no cloud below 5000 ft or highest MSA (whichever greater); no CB or TCU at any level; no significant weather.', ref: 'METAR' },
{ f: 'Cloud amount codes', b: 'FEW 1-2, SCT 3-4, BKN 5-7, OVC 8 oktas.', ref: 'METAR' },
{ f: 'METAR cloud height datum', b: 'Above aerodrome elevation. Form 215 uses amsl.', ref: 'METAR' },
{ f: 'METAR/TAF wind reference', b: 'True. The tower gives magnetic.', ref: 'METAR' },
{ f: 'BECMG versus TEMPO', b: 'BECMG: permanent change. TEMPO: temporary fluctuations, each under an hour, in total under half the period.', ref: 'TAF' },
{ f: 'Highest PROB group in a TAF', b: 'PROB40.', ref: 'TAF' },
{ f: 'Form 214 versus Form 215', b: '214: spot winds and temperatures at fixed levels. 215: low-level significant weather below 10,000 ft.', ref: 'Met Office' },
{ f: 'SIGMET versus AIRMET', b: 'SIGMET: en-route hazards to all aircraft. AIRMET: low-level information for GA.', ref: 'Annex 3' }
]
};
