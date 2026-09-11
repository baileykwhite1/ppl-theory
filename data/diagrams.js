/* Hand-authored inline SVG diagrams for the articles.
   All strokes and text use currentColor so they read in light and dark; a literal hue is
   reserved for the one element carrying the point. Marker ids are prefixed per diagram to
   avoid collisions when several figures share a page. */
window.DIAG = {

/* ---------------------------------------------------------------- 010 Air Law */

airspace: {
  alt: 'Cross-section of UK airspace showing Class A airways above, a Class D control zone around an aerodrome, Class E, and Class G everywhere else',
  cap: 'What each class asks of a VFR pilot. Class D needs a clearance and radio; Class E needs neither; Class G is see-and-avoid.',
  svg: `<svg class="dg" viewBox="0 0 640 330" role="img" aria-label="Airspace classes cross-section">
  <rect x="0" y="20" width="640" height="270" class="tint"/>
  <!-- Class A slab -->
  <rect x="150" y="28" width="480" height="46" class="fred" opacity=".13"/>
  <rect x="150" y="28" width="480" height="46" class="red ink"/>
  <text x="164" y="47" class="b">Class A</text>
  <text x="164" y="65" class="s">IFR only — VFR not permitted</text>
  <!-- Class E block -->
  <rect x="430" y="110" width="200" height="70" class="fblue" opacity=".10"/>
  <rect x="430" y="110" width="200" height="70" class="blue ink dash"/>
  <text x="444" y="133" class="b">Class E</text>
  <text x="444" y="151" class="s">No clearance needed</text>
  <text x="444" y="168" class="s">Traffic info if practical</text>
  <!-- Class D CTR -->
  <path d="M210 290 L210 150 L390 150 L390 290" class="fblue" opacity=".16"/>
  <path d="M210 290 L210 150 L390 150 L390 290" class="blue ink"/>
  <text x="224" y="174" class="b">Class D</text>
  <text x="224" y="192" class="s">Clearance + radio</text>
  <text x="224" y="209" class="s">Traffic info, no separation</text>
  <!-- Class G -->
  <text x="26" y="150" class="b">Class G</text>
  <text x="26" y="168" class="s">No clearance</text>
  <text x="26" y="185" class="s">No radio required</text>
  <text x="26" y="202" class="s">FIS on request</text>
  <!-- ground -->
  <line x1="0" y1="290" x2="640" y2="290" class="ink"/>
  <path d="M270 290 l14 -16 h34 l14 16 z" class="fill" opacity=".5"/>
  <text x="300" y="308" text-anchor="middle" class="s">Aerodrome</text>
  <!-- aeroplane in G -->
  <g transform="translate(80,232)"><path d="M0 0 l22 0 M11 -7 l0 14 M18 -4 l0 8" class="ink"/></g>
  <text x="108" y="236" class="s">You, VFR</text>
</svg>`
},

vmc: {
  alt: 'Three altitude bands showing the VMC visibility and distance from cloud minima',
  cap: 'Table S5-1 as a picture. The break at 3000 ft is where Class G stops owing you 1500 m from cloud and only asks you to stay clear of it.',
  svg: `<svg class="dg" viewBox="0 0 640 340" role="img" aria-label="VMC minima by altitude band">
  <!-- band 3: FL100+ -->
  <rect x="20" y="20" width="600" height="86" class="tint"/>
  <line x1="20" y1="20" x2="620" y2="20" class="thin"/>
  <text x="34" y="44" class="b">At or above 10,000 ft AMSL</text>
  <text x="34" y="64" class="s">All classes</text>
  <text x="330" y="48">8 km visibility</text>
  <text x="330" y="70" class="s">1500 m horizontally · 1000 ft vertically from cloud</text>
  <line x1="20" y1="106" x2="620" y2="106" class="ink"/>
  <text x="626" y="110" text-anchor="end" class="s"></text>
  <!-- band 2 -->
  <rect x="20" y="106" width="600" height="92" class="tint" opacity=".04"/>
  <text x="34" y="132" class="b">Below 10,000 ft, above 3000 ft</text>
  <text x="34" y="150" class="s">or 1000 ft above terrain,</text>
  <text x="34" y="167" class="s">whichever is higher</text>
  <text x="330" y="140">5 km visibility</text>
  <text x="330" y="162" class="s">1500 m horizontally · 1000 ft vertically from cloud</text>
  <line x1="20" y1="198" x2="620" y2="198" class="ink blue"/>
  <text x="34" y="216" class="b blue">At or below 3000 ft AMSL</text>
  <text x="34" y="234" class="s">or 1000 ft above terrain</text>
  <!-- split: controlled vs G -->
  <rect x="300" y="206" width="320" height="46" class="tint"/>
  <text x="314" y="226" class="s">Classes A B C D E</text>
  <text x="314" y="244">5 km · 1500 m · 1000 ft</text>
  <rect x="300" y="258" width="320" height="50" class="fblue" opacity=".12"/>
  <text x="314" y="278" class="s">Classes F G</text>
  <text x="314" y="296" class="blue-t">5 km · clear of cloud · surface in sight</text>
  <line x1="20" y1="316" x2="620" y2="316" class="ink"/>
  <text x="320" y="334" text-anchor="middle" class="s">Ground</text>
</svg>`
},

altimetry: {
  alt: 'Three altimeter subscale settings and the datum each one measures from',
  cap: 'Same aeroplane, three readings. QFE measures from the aerodrome, QNH from sea level, 1013 from a pressure datum that moves with the weather.',
  svg: `<svg class="dg" viewBox="0 0 640 300" role="img" aria-label="QFE, QNH and standard pressure setting datums">
  <defs><marker id="ar-alt" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker></defs>
  <!-- aeroplane -->
  <g transform="translate(300,44)"><path d="M-16 0 h32 M0 -9 l0 18 M9 -5 l0 10" class="ink blue"/></g>
  <text x="330" y="48" class="b blue">Aircraft</text>
  <!-- datums -->
  <line x1="60" y1="120" x2="580" y2="120" class="ink"/>
  <text x="60" y="112" class="b">Aerodrome level</text>
  <text x="580" y="112" text-anchor="end" class="s">QFE reads 0 here</text>
  <line x1="60" y1="200" x2="580" y2="200" class="ink"/>
  <text x="60" y="192" class="b">Mean sea level</text>
  <text x="580" y="192" text-anchor="end" class="s">QNH reads aerodrome elevation on the ground</text>
  <line x1="60" y1="270" x2="580" y2="270" class="ink dash"/>
  <text x="60" y="262" class="b">1013.25 hPa datum</text>
  <text x="580" y="262" text-anchor="end" class="s">1013 set — reads a flight level</text>
  <!-- measures -->
  <line x1="200" y1="56" x2="200" y2="118" class="ink blue" marker-end="url(#ar-alt)"/>
  <text x="208" y="92" class="blue-t">HEIGHT</text>
  <line x1="360" y1="56" x2="360" y2="198" class="ink" marker-end="url(#ar-alt)"/>
  <text x="368" y="132" >ALTITUDE</text>
  <line x1="500" y1="56" x2="500" y2="268" class="ink" marker-end="url(#ar-alt)"/>
  <text x="508" y="168">FLIGHT LEVEL</text>
  <!-- terrain -->
  <path d="M60 120 h520 v18 h-520 z" class="tint"/>
  <text x="320" y="292" text-anchor="middle" class="s">1 hPa ≈ 30 ft — high to low, look out below</text>
</svg>`
},

/* ---------------------------------------------------------------- 050 Meteorology */

isa: {
  alt: 'The International Standard Atmosphere from sea level to the tropopause',
  cap: 'The ISA. Every performance chart and altimeter is calibrated against these numbers.',
  svg: `<svg class="dg" viewBox="0 0 640 320" role="img" aria-label="International Standard Atmosphere">
  <rect x="170" y="30" width="290" height="230" class="tint"/>
  <!-- tropopause -->
  <line x1="140" y1="60" x2="490" y2="60" class="ink blue"/>
  <text x="500" y="56" class="b blue">Tropopause</text>
  <text x="500" y="74" class="s">36,090 ft (11 km)</text>
  <text x="500" y="92" class="s">−56.5 °C</text>
  <text x="132" y="64" text-anchor="end" class="s">Stratosphere above</text>
  <!-- sea level -->
  <line x1="140" y1="260" x2="490" y2="260" class="ink"/>
  <text x="500" y="256" class="b">Mean sea level</text>
  <text x="500" y="274" class="s">+15 °C · 1013.25 hPa</text>
  <text x="500" y="292" class="s">1.225 kg/m³</text>
  <!-- gradient line -->
  <line x1="200" y1="260" x2="330" y2="60" class="ink blue"/>
  <text x="272" y="176" class="blue-t">1.98 °C</text>
  <text x="272" y="194" class="blue-t">per 1000 ft</text>
  <!-- ticks -->
  <g class="s">
    <line x1="180" y1="210" x2="192" y2="210" class="thin"/><text x="150" y="214" text-anchor="end">10,000 ft</text>
    <line x1="180" y1="160" x2="192" y2="160" class="thin"/><text x="150" y="164" text-anchor="end">20,000 ft</text>
    <line x1="180" y1="110" x2="192" y2="110" class="thin"/><text x="150" y="114" text-anchor="end">30,000 ft</text>
  </g>
  <text x="320" y="308" text-anchor="middle" class="s">Above the tropopause ISA temperature is constant</text>
</svg>`
},

stability: {
  alt: 'Graph of temperature against height comparing the environmental lapse rate with the dry and saturated adiabatic lapse rates',
  cap: 'Stability is a comparison, not a property. Where the ELR is steeper than the DALR, a lifted parcel keeps rising.',
  svg: `<svg class="dg" viewBox="0 0 640 346" role="img" aria-label="Lapse rate stability comparison">
  <!-- axes -->
  <line x1="90" y1="40" x2="90" y2="270" class="ink"/>
  <line x1="90" y1="270" x2="580" y2="270" class="ink"/>
  <text x="70" y="150" text-anchor="middle" transform="rotate(-90 70 150)" class="s">Height</text>
  <text x="335" y="310" text-anchor="middle" class="s">Temperature (colder to the left)</text>
  <!-- unstable wedge -->
  <path d="M330 270 L150 60 L250 60 z" class="fred" opacity=".10"/>
  <!-- DALR -->
  <line x1="330" y1="270" x2="150" y2="60" class="ink"/>
  <text x="126" y="54">DALR</text><text x="126" y="70" class="s">3 °C/1000 ft</text>
  <!-- SALR -->
  <line x1="330" y1="270" x2="250" y2="60" class="ink"/>
  <text x="238" y="54">SALR</text><text x="238" y="70" class="s">≈1.5 °C/1000 ft</text>
  <!-- ELR unstable -->
  <line x1="330" y1="270" x2="110" y2="90" class="ink red dash"/>
  <text x="102" y="146" class="red-t">ELR here</text>
  <text x="102" y="162" class="s red-t">= unstable</text>
  <!-- ELR stable -->
  <line x1="330" y1="270" x2="330" y2="60" class="ink blue dash"/>
  <text x="342" y="96" class="blue-t">ELR here</text>
  <text x="342" y="112" class="s blue-t">= stable</text>
  <circle cx="330" cy="270" r="4" class="fill"/>
  <text x="330" y="288" text-anchor="middle" class="s">Surface</text>
  <text x="335" y="336" text-anchor="middle" class="s">Between the two adiabats the air is conditionally unstable</text>
</svg>`
},

warmfront: {
  alt: 'Cross-section of a warm front showing the shallow slope and the cloud sequence ahead of it',
  cap: 'A warm front announces itself for hours: cirrus first, then a lowering deck and continuous rain.',
  svg: `<svg class="dg" viewBox="0 0 640 300" role="img" aria-label="Warm front cross-section">
  <line x1="20" y1="250" x2="620" y2="250" class="ink"/>
  <path d="M120 250 L560 70 L620 70 L620 250 z" class="tint"/>
  <path d="M120 250 L560 70" class="ink red"/>
  <text x="30" y="170" class="red-t">Warm air overrunning · slope ≈ 1 in 150</text>
  <text x="560" y="250" class="s" text-anchor="end">Cold air</text>
  <text x="596" y="106" class="s">Warm</text>
  <!-- clouds -->
  <g class="fill" opacity=".38">
    <ellipse cx="150" cy="72" rx="34" ry="9"/><ellipse cx="205" cy="66" rx="26" ry="7"/>
    <ellipse cx="270" cy="96" rx="44" ry="12"/>
    <ellipse cx="360" cy="130" rx="56" ry="18"/>
    <ellipse cx="470" cy="176" rx="70" ry="30"/>
  </g>
  <text x="150" y="52" text-anchor="middle" class="s">Ci</text>
  <text x="215" y="48" text-anchor="middle" class="s">Cs — halo</text>
  <text x="300" y="82" text-anchor="middle" class="s">As</text>
  <text x="380" y="106" text-anchor="middle" class="s">Ns</text>
  <text x="470" y="140" text-anchor="middle" class="s">Continuous rain</text>
  <g class="thin">
    <line x1="430" y1="206" x2="424" y2="248"/><line x1="460" y1="206" x2="454" y2="248"/>
    <line x1="490" y1="206" x2="484" y2="248"/><line x1="520" y1="200" x2="514" y2="248"/>
  </g>
  <text x="70" y="270" class="s">Direction of travel →</text>
  <text x="620" y="270" text-anchor="end" class="s">Warm sector: stratus, drizzle, poor visibility</text>
</svg>`
},

coldfront: {
  alt: 'Cross-section of a cold front showing the steep slope and cumulonimbus along it',
  cap: 'Short, steep and violent. The cold air undercuts, throwing the warm air up into cumulonimbus.',
  svg: `<svg class="dg" viewBox="0 0 640 300" role="img" aria-label="Cold front cross-section">
  <line x1="20" y1="250" x2="620" y2="250" class="ink"/>
  <path d="M120 250 L300 60 L20 60 L20 250 z" class="tint"/>
  <path d="M120 250 L300 60" class="ink blue"/>
  <text x="40" y="230" class="blue-t">Cold air undercutting</text>
  <text x="150" y="150" class="s blue-t">slope ≈ 1 in 50</text>
  <text x="520" y="240" class="s" text-anchor="end">Warm air ahead</text>
  <!-- Cb -->
  <g class="fill" opacity=".38">
    <ellipse cx="300" cy="180" rx="52" ry="46"/>
    <ellipse cx="300" cy="110" rx="42" ry="34"/>
    <ellipse cx="330" cy="72" rx="72" ry="16"/>
  </g>
  <text x="408" y="70" class="s">Anvil</text>
  <text x="360" y="184" class="s">Cb</text>
  <g class="thin">
    <line x1="272" y1="222" x2="266" y2="248"/><line x1="292" y1="226" x2="286" y2="248"/>
    <line x1="312" y1="222" x2="306" y2="248"/><line x1="332" y1="226" x2="326" y2="248"/>
  </g>
  <text x="300" y="272" text-anchor="middle" class="s">Heavy showers, severe turbulence, sharp wind veer</text>
  <text x="530" y="272" text-anchor="middle" class="s">then rapid clearance</text>
</svg>`
},

seabreeze: {
  alt: 'Sea breeze circulation, with air rising over warm land and flowing onshore at the surface',
  cap: 'By day the land heats faster, so the surface flow is onshore. At night it reverses and weakens.',
  svg: `<svg class="dg" viewBox="0 0 640 280" role="img" aria-label="Sea breeze circulation">
  <defs><marker id="ar-sb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fblue"/></marker></defs>
  <!-- sea and land -->
  <rect x="20" y="210" width="300" height="40" class="tint"/>
  <path d="M320 210 h300 v40 h-300 z" class="fill" opacity=".14"/>
  <line x1="20" y1="210" x2="620" y2="210" class="ink"/>
  <text x="150" y="236" text-anchor="middle" class="s">Cool sea</text>
  <text x="470" y="236" text-anchor="middle" class="s">Warm land</text>
  <!-- sun -->
  <circle cx="540" cy="52" r="16" class="ink orange"/>
  <g class="orange ink"><line x1="540" y1="24" x2="540" y2="14"/><line x1="566" y1="34" x2="574" y2="26"/><line x1="514" y1="34" x2="506" y2="26"/></g>
  <!-- circulation -->
  <path d="M200 190 H430" class="ink blue" marker-end="url(#ar-sb)"/>
  <text x="300" y="182" text-anchor="middle" class="blue-t">Sea breeze — onshore</text>
  <path d="M450 190 V90" class="ink blue" marker-end="url(#ar-sb)"/>
  <text x="462" y="140" class="s blue-t">Rising</text>
  <path d="M430 74 H210" class="ink blue" marker-end="url(#ar-sb)"/>
  <text x="320" y="66" text-anchor="middle" class="s blue-t">Return flow aloft</text>
  <path d="M190 90 V180" class="ink blue" marker-end="url(#ar-sb)"/>
  <text x="140" y="140" class="s blue-t">Sinking</text>
  <!-- cloud over land -->
  <g class="fill" opacity=".3"><ellipse cx="450" cy="104" rx="36" ry="14"/><ellipse cx="470" cy="94" rx="24" ry="12"/></g>
  <text x="320" y="272" text-anchor="middle" class="s">The sea-breeze front can bring a sharp wind change on final approach</text>
</svg>`
},

/* ---------------------------------------------------------------- 081 Principles of Flight */

aerofoil: {
  alt: 'Aerofoil section showing chord line, relative airflow, angle of attack, and the lift and drag components',
  cap: 'Angle of attack is measured to the relative airflow — not to the horizon and not to the fuselage.',
  svg: `<svg class="dg" viewBox="0 0 640 290" role="img" aria-label="Aerofoil, angle of attack, lift and drag">
  <defs><marker id="ar-af" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker>
  <marker id="ar-afb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fblue"/></marker></defs>
  <!-- relative airflow -->
  <g class="ink" opacity=".45">
    <line x1="30" y1="120" x2="150" y2="120" marker-end="url(#ar-af)"/>
    <line x1="30" y1="160" x2="150" y2="160" marker-end="url(#ar-af)"/>
    <line x1="30" y1="200" x2="150" y2="200" marker-end="url(#ar-af)"/>
  </g>
  <text x="30" y="108" class="s">Relative airflow</text>
  <!-- aerofoil, rotated nose-up -->
  <g transform="rotate(-12 340 170)">
    <path d="M200 170 C240 138, 330 128, 420 152 C400 176, 300 190, 200 170 Z" class="fill" opacity=".22"/>
    <path d="M200 170 C240 138, 330 128, 420 152 C400 176, 300 190, 200 170 Z" class="ink"/>
    <line x1="200" y1="170" x2="420" y2="152" class="ink dash" opacity=".8"/>
    <text x="430" y="156" class="s">Chord line</text>
    <circle cx="290" cy="150" r="4" class="fblue"/>
  </g>
  <!-- centre of pressure, labelled clear of the aerofoil with a leader to the dot -->
  <line x1="280" y1="121" x2="287" y2="157" class="thin"/>
  <text x="200" y="116" class="s blue-t">Centre of pressure</text>
  <!-- AoA angle -->
  <line x1="150" y1="170" x2="470" y2="170" class="thin"/>
  <path d="M240 170 A 90 90 0 0 0 236 151" class="ink blue"/>
  <text x="160" y="146" class="blue-t">α</text>
  <text x="176" y="146" class="s blue-t">angle of attack</text>
  <!-- lift and drag -->
  <line x1="330" y1="138" x2="330" y2="48" class="ink blue" marker-end="url(#ar-afb)"/>
  <text x="338" y="60" class="b blue">LIFT</text>
  <text x="338" y="78" class="s blue-t">perpendicular to the airflow</text>
  <line x1="440" y1="168" x2="530" y2="168" class="ink" marker-end="url(#ar-af)"/>
  <text x="470" y="188">DRAG</text>
  <text x="320" y="262" text-anchor="middle" class="s">Most of the lift comes from reduced pressure over the upper surface, not raised pressure below.</text>
</svg>`
},

dragcurve: {
  alt: 'Graph of drag against airspeed showing parasite drag rising, induced drag falling, and the total drag minimum',
  cap: 'The bottom of the total curve is V<sub>MD</sub>: best lift/drag, best glide angle, best range. Below it, slower needs more power.',
  svg: `<svg class="dg" viewBox="0 0 640 330" role="img" aria-label="Total drag curve against airspeed">
  <line x1="80" y1="30" x2="80" y2="260" class="ink"/>
  <line x1="80" y1="260" x2="590" y2="260" class="ink"/>
  <text x="58" y="145" text-anchor="middle" transform="rotate(-90 58 145)" class="s">Drag</text>
  <text x="590" y="284" text-anchor="end" class="s">Airspeed</text>
  <!-- induced -->
  <path d="M110 60 C170 190, 220 232, 330 246 C420 254, 500 257, 580 258" class="ink dash" opacity=".65"/>
  <text x="120" y="52" class="s">Induced drag ∝ 1/V²</text>
  <!-- parasite -->
  <path d="M90 259 C220 256, 330 230, 430 170 C490 132, 540 84, 570 44" class="ink dash" opacity=".65"/>
  <text x="470" y="62" class="s" text-anchor="end">Parasite drag ∝ V²</text>
  <!-- total -->
  <path d="M110 56 C180 168, 240 196, 320 196 C400 196, 490 140, 570 46" class="ink blue"/>
  <text x="196" y="126" class="blue-t">Total drag</text>
  <!-- VMD -->
  <circle cx="322" cy="196" r="5" class="fblue"/>
  <line x1="322" y1="196" x2="322" y2="260" class="thin dash"/>
  <text x="322" y="278" text-anchor="middle" class="b blue">V<tspan font-size="9">MD</tspan></text>
  <text x="322" y="176" text-anchor="middle" class="s blue-t">induced = parasite</text>
  <!-- back of curve -->
  <path d="M110 266 H316" class="ink red"/>
  <text x="120" y="296" class="s red-t">Back of the drag curve — slower needs more power</text>
</svg>`
},

clcurve: {
  alt: 'Graph of lift coefficient against angle of attack, rising to CL max at the stalling angle then falling away',
  cap: 'The stalling <em>angle</em> is fixed. The stalling <em>speed</em> is not — weight, load factor and flap all move it.',
  svg: `<svg class="dg" viewBox="0 0 640 300" role="img" aria-label="Lift coefficient against angle of attack">
  <line x1="90" y1="30" x2="90" y2="240" class="ink"/>
  <line x1="90" y1="240" x2="580" y2="240" class="ink"/>
  <text x="66" y="135" text-anchor="middle" transform="rotate(-90 66 135)" class="s">C∟</text>
  <text x="335" y="282" text-anchor="middle" class="s">Angle of attack</text>
  <!-- curve -->
  <path d="M100 232 L300 100 C340 74, 380 62, 400 62 C424 62, 448 96, 500 152" class="ink blue"/>
  <circle cx="400" cy="62" r="5" class="fblue"/>
  <line x1="400" y1="62" x2="400" y2="240" class="thin dash"/>
  <text x="400" y="258" text-anchor="middle" class="b">≈16°</text>
  <text x="412" y="54" class="b blue">C∟ max</text>
  <text x="412" y="72" class="s blue-t">the stalling angle</text>
  <!-- separated flow -->
  <text x="500" y="182" class="s red-t">Flow separated</text>
  <text x="500" y="200" class="s red-t">lift falls, drag rises</text>
  <path d="M420 70 C450 110, 470 140, 496 168" class="ink red" opacity=".5"/>
  <!-- linear region -->
  <text x="150" y="192" class="s">Roughly linear here</text>
  <g class="s"><line x1="86" y1="62" x2="94" y2="62" class="thin"/></g>
</svg>`
},

turnforces: {
  alt: 'Rear view of an aeroplane in a 60 degree banked turn showing total lift resolved into vertical and horizontal components',
  cap: 'The horizontal component turns you; the vertical still has to hold the weight. At 60° that costs 2g, and 41% on the stall speed.',
  svg: `<svg class="dg" viewBox="0 0 640 320" role="img" aria-label="Forces in a banked turn">
  <defs><marker id="ar-tf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker>
  <marker id="ar-tfb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fblue"/></marker></defs>
  <!-- aeroplane banked 60 -->
  <g transform="rotate(-60 300 200)">
    <line x1="240" y1="200" x2="360" y2="200" class="ink" stroke-width="3"/>
    <line x1="300" y1="186" x2="300" y2="214" class="ink" stroke-width="3"/>
  </g>
  <text x="196" y="252" class="s">60° bank</text>
  <!-- total lift along the aircraft vertical -->
  <line x1="300" y1="200" x2="404" y2="140" class="ink blue" marker-end="url(#ar-tfb)"/>
  <text x="410" y="134" class="b blue">Total lift</text>
  <!-- vertical component -->
  <line x1="300" y1="200" x2="300" y2="80" class="ink dash"/>
  <text x="292" y="92" text-anchor="end" class="s">Vertical component</text>
  <text x="292" y="109" text-anchor="end" class="s">= weight</text>
  <!-- horizontal component -->
  <line x1="300" y1="80" x2="404" y2="80" class="ink dash"/>
  <line x1="300" y1="200" x2="404" y2="200" class="ink red" marker-end="url(#ar-tf)"/>
  <text x="310" y="222" class="red-t">Horizontal component</text>
  <text x="310" y="239" class="s red-t">turns the aeroplane</text>
  <!-- weight -->
  <line x1="300" y1="200" x2="300" y2="290" class="ink" marker-end="url(#ar-tf)"/>
  <text x="308" y="286">Weight</text>
  <!-- numbers -->
  <g><text x="470" y="192" class="b">n = 1 / cos 60° = 2.0</text>
  <text x="470" y="212" class="s">Stall speed × √2 = 1.41</text>
  <text x="470" y="232" class="s">50 kt clean becomes ≈71 kt</text></g>
</svg>`
},

asiarcs: {
  alt: 'Airspeed indicator dial showing the white, green and yellow arcs and the red never-exceed line',
  cap: 'Every arc boundary is a limitation. V<sub>A</sub> is the one that is not marked — and it gets lower as you get lighter.',
  svg: `<svg class="dg" viewBox="0 0 640 300" role="img" aria-label="Airspeed indicator arc markings">
  <circle cx="200" cy="150" r="112" class="ink"/>
  <circle cx="200" cy="150" r="4" class="fill"/>
  <!-- white arc: VS0 to VFE  (200deg to 290deg) -->
  <path d="M 108 86 A 112 112 0 0 1 148 58" class="ink" stroke-width="9" stroke-linecap="butt" opacity=".9"/>
  <!-- green arc -->
  <path d="M 148 58 A 112 112 0 0 1 300 190" class="green ink" stroke-width="9" stroke-linecap="butt"/>
  <!-- yellow arc -->
  <path d="M 300 190 A 112 112 0 0 1 262 236" class="orange ink" stroke-width="9" stroke-linecap="butt"/>
  <!-- red line -->
  <line x1="262" y1="236" x2="272" y2="248" class="red ink" stroke-width="5"/>
  <!-- labels -->
  <text x="200" y="146" text-anchor="middle" class="s">KNOTS</text>
  <text x="200" y="166" text-anchor="middle" class="s">IAS</text>
  <g class="s">
    <text x="330" y="70">White arc — flap operating range</text>
    <text x="330" y="88" class="sb">bottom = V<tspan font-size="8">S0</tspan> · top = V<tspan font-size="8">FE</tspan></text>
    <text x="330" y="122" class="green-t">Green arc — normal operating</text>
    <text x="330" y="140" class="sb">bottom = V<tspan font-size="8">S1</tspan> · top = V<tspan font-size="8">NO</tspan></text>
    <text x="330" y="174" class="orange-t">Yellow arc — caution</text>
    <text x="330" y="192" class="sb">smooth air only</text>
    <text x="330" y="226" class="red-t">Red line — V<tspan font-size="8">NE</tspan></text>
    <text x="330" y="244" class="sb">never exceed</text>
  </g>
</svg>`
},

/* ---------------------------------------------------------------- 060 Navigation */

triangle: {
  alt: 'The triangle of velocities showing the air vector, wind vector and ground vector',
  cap: 'Heading and TAS, plus the wind, gives track and groundspeed. Drift is the angle between heading and track.',
  svg: `<svg class="dg" viewBox="0 0 640 300" role="img" aria-label="Triangle of velocities">
  <defs><marker id="ar-tv" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker>
  <marker id="ar-tvb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fblue"/></marker>
  <marker id="ar-tvr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fred"/></marker></defs>
  <!-- air vector -->
  <line x1="80" y1="230" x2="420" y2="90" class="ink" marker-end="url(#ar-tv)"/>
  <text x="200" y="120" >Heading + TAS</text>
  <text x="200" y="136" class="s">the air vector</text>
  <!-- wind vector -->
  <line x1="420" y1="90" x2="500" y2="160" class="ink red" marker-end="url(#ar-tvr)"/>
  <text x="480" y="112" class="red-t">W/V</text>
  <text x="480" y="128" class="s red-t">wind, from</text>
  <!-- ground vector -->
  <line x1="80" y1="230" x2="500" y2="160" class="ink blue" marker-end="url(#ar-tvb)"/>
  <text x="250" y="222" class="blue-t">Track + groundspeed</text>
  <text x="250" y="238" class="s blue-t">where you actually go</text>
  <!-- drift angle -->
  <path d="M170 193 A 96 96 0 0 0 172 215" class="ink"/>
  <text x="148" y="181" class="s">drift</text>
  <circle cx="80" cy="230" r="4" class="fill"/>
  <text x="60" y="252" class="s">Start</text>
  <text x="335" y="286" text-anchor="middle" class="s">Wind from the left drifts you right, so you steer left of track</text>
</svg>`
},

oneinsixty: {
  alt: 'The 1 in 60 rule: one degree of error gives one nautical mile of displacement after sixty nautical miles',
  cap: 'Track error = (distance off ÷ distance flown) × 60. Add a closing angle over the distance remaining to regain track by the destination.',
  svg: `<svg class="dg" viewBox="0 0 640 260" role="img" aria-label="The 1 in 60 rule">
  <defs><marker id="ar-16" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker></defs>
  <line x1="60" y1="90" x2="560" y2="90" class="ink dash"/>
  <text x="300" y="80" text-anchor="middle" class="s">Planned track</text>
  <line x1="60" y1="90" x2="360" y2="150" class="ink blue" marker-end="url(#ar-16)"/>
  <text x="180" y="136" class="blue-t">Actual track</text>
  <circle cx="60" cy="90" r="4" class="fill"/>
  <circle cx="560" cy="90" r="5" class="fill"/>
  <text x="560" y="76" text-anchor="middle" class="s">Destination</text>
  <!-- displacement -->
  <line x1="360" y1="90" x2="360" y2="150" class="ink red"/>
  <text x="370" y="126" class="red-t">3 NM off</text>
  <!-- distances -->
  <line x1="60" y1="196" x2="360" y2="196" class="thin"/>
  <line x1="60" y1="190" x2="60" y2="202" class="thin"/><line x1="360" y1="190" x2="360" y2="202" class="thin"/>
  <text x="210" y="214" text-anchor="middle" class="s">30 NM flown</text>
  <line x1="360" y1="196" x2="560" y2="196" class="thin"/>
  <line x1="560" y1="190" x2="560" y2="202" class="thin"/>
  <text x="460" y="214" text-anchor="middle" class="s">60 NM to run</text>
  <!-- angle -->
  <path d="M155 90 A 95 95 0 0 1 153.2 108.6" class="ink"/>
  <text x="172" y="105" text-anchor="middle" class="s">6°</text>
  <text x="335" y="244" text-anchor="middle">(3 ÷ 30) × 60 = 6° track error &#160;·&#160; (3 ÷ 60) × 60 = 3° closing &#160;·&#160; alter 9°</text>
</svg>`
},

varmag: {
  alt: 'True north, magnetic north and compass north, with variation and deviation between them',
  cap: 'Variation west, magnetic best. The chart is drawn to true; the compass points somewhere else again.',
  svg: `<svg class="dg" viewBox="0 0 640 280" role="img" aria-label="True, magnetic and compass north">
  <defs><marker id="ar-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker></defs>
  <line x1="300" y1="230" x2="300" y2="50" class="ink" marker-end="url(#ar-vm)"/>
  <text x="300" y="38" text-anchor="middle" class="b">True N</text>
  <line x1="300" y1="230" x2="248" y2="58" class="ink blue" marker-end="url(#ar-vm)"/>
  <text x="228" y="46" text-anchor="middle" class="b blue">Magnetic N</text>
  <line x1="300" y1="230" x2="218" y2="78" class="ink red" marker-end="url(#ar-vm)"/>
  <text x="176" y="66" text-anchor="middle" class="b red-t">Compass N</text>
  <path d="M300 130 A 100 100 0 0 0 272 138" class="ink blue"/>
  <text x="306" y="126" class="blue-t">Variation</text>
  <text x="306" y="143" class="s blue-t">true → magnetic (chart)</text>
  <path d="M272 160 A 140 140 0 0 0 256 168" class="ink red"/>
  <text x="120" y="150" class="red-t">Deviation</text>
  <text x="120" y="167" class="s red-t">magnetic → compass</text>
  <text x="120" y="184" class="s red-t">(deviation card)</text>
  <circle cx="300" cy="230" r="4" class="fill"/>
  <text x="320" y="256">Variation <tspan class="b">west</tspan>, magnetic <tspan class="b">best</tspan> — add it to true</text>
</svg>`
},

/* ---------------------------------------------------------------- 020 AGK */

fourstroke: {
  alt: 'The four strokes of a piston engine cycle: induction, compression, power and exhaust',
  cap: 'Two crankshaft revolutions per cycle, one power stroke per cylinder. Ignition fires before top dead centre so peak pressure arrives just after it.',
  svg: `<svg class="dg" viewBox="0 0 640 272" role="img" aria-label="Four stroke engine cycle">
  <defs><marker id="ar-fs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker></defs>
  <g class="ink">
    <g transform="translate(30,40)">
      <rect x="0" y="0" width="100" height="140" rx="6"/>
      <rect x="12" y="86" width="76" height="26" class="fill" opacity=".25" stroke="none"/>
      <line x1="12" y1="86" x2="88" y2="86"/>
      <path d="M26 0 v18" class="blue"/><path d="M74 0 v0"/>
      <line x1="50" y1="112" x2="50" y2="150"/>
      <text x="50" y="-10" text-anchor="middle" class="b">1 Induction</text>
      <text x="50" y="172" text-anchor="middle" class="s">inlet open,</text>
      <text x="50" y="188" text-anchor="middle" class="s">piston down</text>
    </g>
    <g transform="translate(180,40)">
      <rect x="0" y="0" width="100" height="140" rx="6"/>
      <rect x="12" y="30" width="76" height="26" class="fill" opacity=".4" stroke="none"/>
      <line x1="12" y1="30" x2="88" y2="30"/>
      <line x1="50" y1="56" x2="50" y2="150"/>
      <text x="50" y="-10" text-anchor="middle" class="b">2 Compression</text>
      <text x="50" y="172" text-anchor="middle" class="s">both valves shut,</text>
      <text x="50" y="188" text-anchor="middle" class="s">piston up</text>
    </g>
    <g transform="translate(330,40)">
      <rect x="0" y="0" width="100" height="140" rx="6"/>
      <circle cx="50" cy="18" r="7" class="red"/>
      <rect x="12" y="44" width="76" height="26" class="fred" opacity=".3" stroke="none"/>
      <line x1="12" y1="70" x2="88" y2="70"/>
      <line x1="50" y1="96" x2="50" y2="150"/>
      <text x="50" y="-10" text-anchor="middle" class="b red-t">3 Power</text>
      <text x="50" y="172" text-anchor="middle" class="s">spark before TDC,</text>
      <text x="50" y="188" text-anchor="middle" class="s">piston driven down</text>
    </g>
    <g transform="translate(480,40)">
      <rect x="0" y="0" width="100" height="140" rx="6"/>
      <path d="M74 0 v18" class="blue"/>
      <line x1="12" y1="34" x2="88" y2="34"/>
      <line x1="50" y1="60" x2="50" y2="150"/>
      <text x="50" y="-10" text-anchor="middle" class="b">4 Exhaust</text>
      <text x="50" y="172" text-anchor="middle" class="s">exhaust open,</text>
      <text x="50" y="188" text-anchor="middle" class="s">piston up</text>
    </g>
  </g>
  <line x1="140" y1="110" x2="172" y2="110" class="ink" marker-end="url(#ar-fs)"/>
  <line x1="290" y1="110" x2="322" y2="110" class="ink" marker-end="url(#ar-fs)"/>
  <line x1="440" y1="110" x2="472" y2="110" class="ink" marker-end="url(#ar-fs)"/>
  <text x="320" y="254" text-anchor="middle" class="s">Suck · Squeeze · Bang · Blow</text>
</svg>`
},

pitotstatic: {
  alt: 'The pitot-static system showing which instruments the pitot tube and the static vents feed',
  cap: 'Pitot feeds only the ASI. Static feeds all three — which is why a blocked static affects everything.',
  svg: `<svg class="dg" viewBox="0 0 640 280" role="img" aria-label="Pitot static system">
  <!-- pitot -->
  <rect x="40" y="60" width="86" height="30" rx="15" class="ink blue"/>
  <text x="83" y="80" text-anchor="middle" class="blue-t">Pitot</text>
  <text x="83" y="48" text-anchor="middle" class="s">total pressure</text>
  <!-- static -->
  <rect x="40" y="180" width="86" height="30" rx="15" class="ink"/>
  <text x="83" y="200" text-anchor="middle">Static</text>
  <text x="83" y="230" text-anchor="middle" class="s">ambient pressure</text>
  <!-- instruments -->
  <g class="ink">
    <rect x="400" y="34" width="180" height="52" rx="10"/>
    <rect x="400" y="112" width="180" height="52" rx="10"/>
    <rect x="400" y="190" width="180" height="52" rx="10"/>
  </g>
  <text x="490" y="58" text-anchor="middle" class="b">ASI</text>
  <text x="490" y="76" text-anchor="middle" class="s">pitot minus static</text>
  <text x="490" y="136" text-anchor="middle" class="b">Altimeter</text>
  <text x="490" y="154" text-anchor="middle" class="s">static only</text>
  <text x="490" y="214" text-anchor="middle" class="b">VSI</text>
  <text x="490" y="232" text-anchor="middle" class="s">rate of static change</text>
  <!-- lines -->
  <path d="M126 75 H260 V60 H400" class="ink blue"/>
  <path d="M126 195 H210 V60 H400" class="ink"/>
  <path d="M210 138 H400" class="ink"/>
  <path d="M210 216 H400" class="ink"/>
  <circle cx="210" cy="138" r="3" class="fill"/><circle cx="210" cy="216" r="3" class="fill"/>
  <text x="320" y="266" text-anchor="middle" class="s">Static blocked in a climb: ASI under-reads, altimeter freezes, VSI reads zero</text>
</svg>`
},

/* ---------------------------------------------------------------- 030 FPP */

runwaydist: {
  alt: 'Declared distances along a runway: TORA, TODA with clearway, ASDA with stopway, and LDA from the displaced threshold',
  cap: 'Four declared distances, three different endings. Read carefully which one a question is asking for.',
  svg: `<svg class="dg" viewBox="0 0 640 280" role="img" aria-label="Declared runway distances">
  <!-- runway -->
  <rect x="60" y="40" width="380" height="42" class="tint"/>
  <rect x="60" y="40" width="380" height="42" class="ink"/>
  <rect x="440" y="40" width="60" height="42" class="ink dash"/>
  <text x="470" y="66" text-anchor="middle" class="s">Stopway</text>
  <rect x="500" y="40" width="80" height="42" class="thin"/>
  <text x="540" y="66" text-anchor="middle" class="s">Clearway</text>
  <line x1="120" y1="40" x2="120" y2="82" class="ink blue"/>
  <text x="122" y="34" class="s blue-t">Displaced threshold</text>
  <!-- bars -->
  <g>
    <line x1="60" y1="120" x2="440" y2="120" class="ink"/>
    <line x1="60" y1="114" x2="60" y2="126" class="ink"/><line x1="440" y1="114" x2="440" y2="126" class="ink"/>
    <text x="250" y="112" text-anchor="middle" class="b">TORA</text>
    <text x="452" y="124" class="s">take-off run available</text>

    <line x1="60" y1="158" x2="580" y2="158" class="ink"/>
    <line x1="60" y1="152" x2="60" y2="164" class="ink"/><line x1="580" y1="152" x2="580" y2="164" class="ink"/>
    <text x="250" y="150" text-anchor="middle" class="b">TODA</text>
    <text x="250" y="176" text-anchor="middle" class="s">TORA + clearway</text>

    <line x1="60" y1="204" x2="500" y2="204" class="ink"/>
    <line x1="60" y1="198" x2="60" y2="210" class="ink"/><line x1="500" y1="198" x2="500" y2="210" class="ink"/>
    <text x="250" y="196" text-anchor="middle" class="b">ASDA</text>
    <text x="512" y="208" class="s">TORA + stopway</text>

    <line x1="120" y1="242" x2="440" y2="242" class="ink blue"/>
    <line x1="120" y1="236" x2="120" y2="248" class="ink blue"/><line x1="440" y1="236" x2="440" y2="248" class="ink blue"/>
    <text x="280" y="234" text-anchor="middle" class="b blue">LDA</text>
    <text x="452" y="246" class="s blue-t">landing distance available</text>
  </g>
</svg>`
},

massbalance: {
  alt: 'A lever diagram showing datum, arms and moments, with the centre of gravity as the balance point',
  cap: 'Moment = mass × arm. The CG is the weighted average position — total moment divided by total mass.',
  svg: `<svg class="dg" viewBox="0 0 640 290" role="img" aria-label="Mass and balance: datum, arm, moment">
  <!-- datum -->
  <line x1="80" y1="40" x2="80" y2="220" class="ink blue dash"/>
  <text x="80" y="32" text-anchor="middle" class="b blue">DATUM</text>
  <!-- beam -->
  <line x1="80" y1="150" x2="580" y2="150" class="ink" stroke-width="3"/>
  <!-- fulcrum at CG -->
  <path d="M330 150 l-16 32 h32 z" class="fill"/>
  <line x1="330" y1="150" x2="330" y2="196" class="thin dash"/>
  <text x="330" y="212" text-anchor="middle" class="b">CG</text>
  <text x="330" y="232" text-anchor="middle" class="s">total moment ÷ total mass</text>
  <!-- masses -->
  <g class="ink">
    <rect x="150" y="108" width="70" height="34" rx="6"/>
    <rect x="270" y="98" width="70" height="44" rx="6"/>
    <rect x="430" y="116" width="70" height="26" rx="6"/>
  </g>
  <text x="185" y="130" text-anchor="middle" class="s">Pilot</text>
  <text x="305" y="126" text-anchor="middle" class="s">Fuel</text>
  <text x="465" y="134" text-anchor="middle" class="s">Baggage</text>
  <!-- arms -->
  <g class="thin">
    <line x1="80" y1="256" x2="185" y2="256"/><line x1="185" y1="250" x2="185" y2="262"/>
    <line x1="80" y1="274" x2="465" y2="274"/><line x1="465" y1="268" x2="465" y2="280"/>
  </g>
  <text x="132" y="250" text-anchor="middle" class="s">arm</text>
  <text x="272" y="270" text-anchor="middle" class="s">arm</text>
  <text x="560" y="92" text-anchor="end" class="s">Check take-off <tspan class="b">and</tspan> landing:</text>
  <text x="560" y="110" text-anchor="end" class="s">burning fuel moves the CG</text>
</svg>`
},

/* ---------------------------------------------------------------- 070 Ops */

circuit: {
  alt: 'A standard left-hand aerodrome circuit with the overhead join',
  cap: 'A standard left-hand circuit. The overhead join arrives at 2000 ft, descends on the dead side, and crosses the upwind end.',
  svg: `<svg class="dg" viewBox="0 0 640 320" role="img" aria-label="Aerodrome circuit and overhead join">
  <defs><marker id="ar-ci" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fblue"/></marker></defs>
  <!-- runway -->
  <rect x="250" y="120" width="150" height="20" class="ink" transform="rotate(0 325 130)"/>
  <text x="325" y="134" text-anchor="middle" class="s" fill="none"></text>
  <!-- circuit -->
  <path d="M400 130 H500" class="ink blue" marker-end="url(#ar-ci)"/>
  <text x="450" y="118" text-anchor="middle" class="blue-t">Upwind</text>
  <path d="M500 130 V220" class="ink blue" marker-end="url(#ar-ci)"/>
  <text x="512" y="180" class="blue-t">Crosswind</text>
  <path d="M500 220 H180" class="ink blue" marker-end="url(#ar-ci)"/>
  <text x="340" y="240" text-anchor="middle" class="blue-t">Downwind</text>
  <path d="M180 220 V160" class="ink blue" marker-end="url(#ar-ci)"/>
  <text x="118" y="196" class="blue-t">Base</text>
  <path d="M180 160 H250" class="ink blue" marker-end="url(#ar-ci)"/>
  <text x="212" y="152" text-anchor="middle" class="blue-t">Final</text>
  <!-- dead side -->
  <rect x="250" y="40" width="250" height="62" class="tint"/>
  <text x="376" y="76" text-anchor="middle" class="s">Dead side — descend here to circuit height</text>
  <!-- overhead -->
  <circle cx="325" cy="70" r="6" class="fill"/>
  <text x="325" y="30" text-anchor="middle" class="b">Overhead at 2000 ft aal</text>
  <path d="M325 78 V110" class="ink dash"/>
  <text x="320" y="286" text-anchor="middle" class="s">Standard direction is left-hand unless notified. Circuit height is aerodrome-specific — check the plate.</text>
  <text x="325" y="306" text-anchor="middle" class="s">Runway</text>
</svg>`
},

papi: {
  alt: 'PAPI indications for too high, on slope, and too low',
  cap: 'Two white and two red is the slope. All red, you are dead.',
  svg: `<svg class="dg" viewBox="0 0 640 250" role="img" aria-label="PAPI indications">
  <g>
    <text x="120" y="34" text-anchor="middle" class="b">Too high</text>
    <g><circle cx="60" cy="60" r="11" class="ink"/><circle cx="100" cy="60" r="11" class="ink"/>
       <circle cx="140" cy="60" r="11" class="ink"/><circle cx="180" cy="60" r="11" class="ink"/></g>
    <text x="120" y="92" text-anchor="middle" class="s">four white</text>

    <text x="320" y="34" text-anchor="middle" class="b green-t">On slope</text>
    <g><circle cx="260" cy="60" r="11" class="ink"/><circle cx="300" cy="60" r="11" class="ink"/>
       <circle cx="340" cy="60" r="11" class="fred"/><circle cx="380" cy="60" r="11" class="fred"/></g>
    <text x="320" y="92" text-anchor="middle" class="s">two white, two red — about 3°</text>

    <text x="520" y="34" text-anchor="middle" class="b red-t">Too low</text>
    <g><circle cx="460" cy="60" r="11" class="fred"/><circle cx="500" cy="60" r="11" class="fred"/>
       <circle cx="540" cy="60" r="11" class="fred"/><circle cx="580" cy="60" r="11" class="fred"/></g>
    <text x="520" y="92" text-anchor="middle" class="s">four red</text>
  </g>
  <!-- glidepath -->
  <line x1="60" y1="210" x2="580" y2="210" class="ink"/>
  <line x1="580" y1="210" x2="120" y2="140" class="ink green"/>
  <text x="300" y="170" class="green-t">3° glidepath</text>
  <g class="ink" opacity=".5"><path d="M150 128 l18 0 M159 122 l0 12" /></g>
  <text x="590" y="206" text-anchor="end" class="s">Threshold</text>
</svg>`
},

/* ---------------------------------------------------------------- 040 HP */

arousal: {
  alt: 'Inverted U curve showing performance against arousal',
  cap: 'Performance peaks at moderate arousal. Too little and you miss things; too much and attention narrows to a single point.',
  svg: `<svg class="dg" viewBox="0 0 640 280" role="img" aria-label="Arousal and performance inverted U">
  <line x1="90" y1="30" x2="90" y2="220" class="ink"/>
  <line x1="90" y1="220" x2="580" y2="220" class="ink"/>
  <text x="66" y="125" text-anchor="middle" transform="rotate(-90 66 125)" class="s">Performance</text>
  <text x="335" y="262" text-anchor="middle" class="s">Arousal</text>
  <path d="M110 206 C200 200, 250 60, 335 60 C420 60, 470 200, 560 212" class="ink blue"/>
  <circle cx="335" cy="60" r="5" class="fblue"/>
  <line x1="335" y1="60" x2="335" y2="220" class="thin dash"/>
  <text x="335" y="46" text-anchor="middle" class="b blue">Peak</text>
  <text x="205" y="178" class="s">Boredom</text>
  <text x="205" y="195" class="s">complacency</text>
  <text x="205" y="212" class="s">missed cues</text>
  <text x="400" y="178" class="s red-t">Tunnelling</text>
  <text x="400" y="195" class="s red-t">regression</text>
  <text x="400" y="212" class="s red-t">panic</text>
  <text x="335" y="238" text-anchor="middle" class="s">The peak is narrower for unfamiliar tasks</text>
</svg>`
},

semicircular: {
  alt: 'A compass rose divided by a vertical line running through 000 degrees at the top and 180 degrees at the bottom; the eastern half is marked odd thousands plus 500 feet and the western half even thousands plus 500 feet, an example track of 050 degrees magnetic is drawn into the eastern half, and a panel beside the rose lists the IFR and VFR flight levels for each track range.',
  cap: 'Magnetic track, not heading, picks the level: tracks 000°–179° take the odd thousands, 180°–359° the even ones, with IFR on the plain thousand and VFR 500 ft above it. It bites only in level cruise above 3000 ft, and in the UK the VFR levels are advisory rather than mandatory.',
  svg: `<svg class="dg" viewBox="0 0 640 344" role="img" aria-label="Compass rose split at 000 and 180 degrees showing semicircular cruising levels">
  <defs>
    <marker id="semicircular-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" class="fill"/>
    </marker>
  </defs>

  <path d="M172,78 A98,98 0 0 0 172,274 Z" class="tint"/>
  <circle cx="172" cy="176" r="98" class="ink"/>

  <line x1="221" y1="91.1" x2="217" y2="98.1" class="thin"/>
  <line x1="256.9" y1="127" x2="249.9" y2="131" class="thin"/>
  <line x1="256.9" y1="225" x2="249.9" y2="221" class="thin"/>
  <line x1="221" y1="260.9" x2="217" y2="253.9" class="thin"/>
  <line x1="123" y1="260.9" x2="127" y2="253.9" class="thin"/>
  <line x1="87.1" y1="225" x2="94.1" y2="221" class="thin"/>
  <line x1="87.1" y1="127" x2="94.1" y2="131" class="thin"/>
  <line x1="123" y1="91.1" x2="127" y2="98.1" class="thin"/>
  <line x1="270" y1="176" x2="258" y2="176" class="ink"/>
  <line x1="74" y1="176" x2="86" y2="176" class="ink"/>

  <line x1="172" y1="66" x2="172" y2="286" class="ink"/>

  <text x="172" y="58" text-anchor="middle">000°</text>
  <text x="172" y="304" text-anchor="middle">180°</text>
  <text x="278" y="181">090°</text>
  <text x="66" y="181" text-anchor="end">270°</text>

  <line x1="172" y1="176" x2="258" y2="104" class="ink" marker-end="url(#semicircular-arrow)"/>
  <text x="250" y="86" class="s">track 050° M</text>

  <text x="122" y="170" text-anchor="middle" class="b">EVEN</text>
  <text x="122" y="188" text-anchor="middle" class="s">thousands</text>
  <text x="122" y="208" text-anchor="middle" class="blue-t">+ 500 ft</text>

  <text x="222" y="170" text-anchor="middle" class="b">ODD</text>
  <text x="222" y="188" text-anchor="middle" class="s">thousands</text>
  <text x="222" y="208" text-anchor="middle" class="blue-t">+ 500 ft</text>

  <text x="340" y="90" class="b">Above 3000 ft, in level cruise</text>

  <text x="340" y="126" class="b">Track 000° – 179°</text>
  <text x="340" y="146" class="s">odd thousands</text>
  <text x="344" y="170" class="s">IFR</text>
  <text x="392" y="170" class="s">FL 30 · 50 · 70 · 90 …</text>
  <text x="344" y="192" class="blue-t">VFR</text>
  <text x="392" y="192" class="blue-t">FL 35 · 55 · 75 · 95 …</text>

  <line x1="340" y1="212" x2="560" y2="212" class="thin"/>

  <text x="340" y="232" class="b">Track 180° – 359°</text>
  <text x="340" y="252" class="s">even thousands</text>
  <text x="344" y="276" class="s">IFR</text>
  <text x="392" y="276" class="s">FL 40 · 60 · 80 · 100 …</text>
  <text x="344" y="298" class="blue-t">VFR</text>
  <text x="392" y="298" class="blue-t">FL 45 · 65 · 85 · 105 …</text>

  <text x="172" y="326" text-anchor="middle" class="s">magnetic track, not heading</text>
  <text x="340" y="326" class="s">UK: advisory for VFR, not mandatory</text>
</svg>`
},

transponder: {
  alt: 'A transponder control head — a rotary mode selector with detents OFF, SBY, ON and ALT and the pointer on ALT, a four-digit code window reading 7000, and an IDENT button — drawn beside a list of the UK squawk codes with 7700, 7600 and 7500 picked out in red.',
  cap: 'ALT is the normal selection: it adds Mode C, which reports pressure altitude referenced to 1013 hPa whatever the subscale is set to. The three codes in red you select yourself without being asked; 7000 is the conspicuity code when not receiving an ATS, and 2000 the one to set when ATS has assigned no code.',
  svg: `<svg class="dg" viewBox="0 0 640 300" role="img" aria-label="A transponder control head with mode selector OFF SBY ON ALT, a code window reading 7000 and an IDENT button, beside the UK squawk codes 7700, 7600, 7500, 7000, 7004 and 2000">
  <defs>
    <marker id="transponder-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" class="fill"/>
    </marker>
  </defs>

  <text x="20" y="28" class="b">Control head</text>
  <text x="398" y="28" class="b">Squawk codes</text>

  <rect x="20" y="52" width="356" height="112" rx="10" class="ink"/>

  <circle cx="94" cy="116" r="26" class="ink"/>
  <line x1="94" y1="116" x2="113.7" y2="123.2" class="ink"/>
  <circle cx="94" cy="116" r="3.5" class="fill"/>
  <line x1="67.7" y1="125.6" x2="62.1" y2="127.6" class="ink"/>
  <line x1="71.1" y1="99.9" x2="66.2" y2="96.5" class="ink"/>
  <line x1="116.9" y1="99.9" x2="121.9" y2="96.5" class="ink"/>
  <line x1="120.3" y1="125.6" x2="126" y2="127.6" class="ink"/>
  <text x="58" y="93" text-anchor="end">SBY</text>
  <text x="54" y="135" text-anchor="end">OFF</text>
  <text x="132" y="93">ON</text>
  <text x="132" y="135">ALT</text>

  <text x="168" y="82" class="s">Code — digits 0 to 7</text>
  <rect x="168" y="90" width="130" height="52" rx="5" class="ink"/>
  <text x="233" y="122" text-anchor="middle" class="b">7 0 0 0</text>

  <rect x="310" y="96" width="56" height="40" rx="6" class="ink"/>
  <text x="338" y="121" text-anchor="middle">IDENT</text>

  <line x1="94" y1="168" x2="94" y2="188" class="ink" marker-end="url(#transponder-ah)"/>
  <line x1="338" y1="168" x2="338" y2="188" class="ink" marker-end="url(#transponder-ah)"/>

  <text x="24" y="210">SBY</text>
  <text x="64" y="210" class="s">powered, not replying</text>
  <text x="376" y="210" text-anchor="end" class="s">only when ATC asks</text>
  <text x="24" y="232">ON</text>
  <text x="64" y="232" class="s">code only — Mode A</text>
  <text x="24" y="254">ALT</text>
  <text x="64" y="254" class="s">code + pressure altitude — Mode C</text>
  <text x="24" y="280" class="s">Mode C altitude is always on 1013 hPa</text>

  <line x1="388" y1="70" x2="388" y2="136" class="red ink"/>
  <text x="398" y="56" class="s">Emergency — set these yourself</text>
  <text x="398" y="82" class="b red-t">7700</text>
  <text x="452" y="82" class="s">Emergency</text>
  <text x="398" y="106" class="b red-t">7600</text>
  <text x="452" y="106" class="s">Radio failure</text>
  <text x="398" y="130" class="b red-t">7500</text>
  <text x="452" y="130" class="s">Unlawful interference</text>

  <line x1="388" y1="176" x2="388" y2="240" class="thin"/>
  <text x="398" y="162" class="s">Conspicuity — no discrete code</text>
  <text x="398" y="188" class="b">7000</text>
  <text x="452" y="188" class="s">Not receiving an ATS</text>
  <text x="398" y="212" class="b">7004</text>
  <text x="452" y="212" class="s">Aerobatics and display</text>
  <text x="398" y="236" class="b">2000</text>
  <text x="452" y="236" class="s">No code assigned by ATS</text>
</svg>`
},

sarsignals: {
  alt: 'Five survivor ground signals drawn as they would be laid out on the ground — a V, an X, an N, a Y and an upward arrow — with an aeroplane overhead reading them and a rear view of the same aeroplane rocking its wings in reply.',
  cap: 'The whole survivor code is these five symbols. Lay them out at least 2.5 m (8 ft) long and as conspicuous as you can; the aircraft answers by rocking its wings, or by flashing its landing lights twice at night, to say the message was understood.',
  svg: `<svg class="dg" viewBox="0 0 640 228" role="img" aria-label="The five ground-to-air survivor signals laid out on the ground: V require assistance, X require medical assistance, N no, Y yes, and an arrow for proceeding in this direction">
  <defs>
    <marker id="sarsignals-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" class="fill"/>
    </marker>
  </defs>

  <polygon points="48,4 51,14 72,22 72,26 51,24 51,30 58,34 58,37 38,37 38,34 45,30 45,24 24,26 24,22 45,14" class="fill"/>
  <line x1="48" y1="66" x2="48" y2="44" class="ink" marker-end="url(#sarsignals-a)"/>
  <text x="62" y="60">seen from above</text>

  <line x1="476" y1="14" x2="524" y2="38" class="thin dash"/>
  <polygon points="476,34 524,10 524,15 476,39" class="fill"/>
  <line x1="500" y1="24" x2="493" y2="11" class="ink"/>
  <circle cx="500" cy="24" r="5" class="fill"/>
  <line x1="500" y1="44" x2="500" y2="66" class="ink" marker-end="url(#sarsignals-a)"/>
  <text x="486" y="60" text-anchor="end">wings rocked = understood</text>

  <rect x="0" y="70" width="640" height="150" class="tint"/>

  <polygon points="46,84 76,168 106,84 92,84 76,135 60,84" class="fred"/>
  <text x="76" y="190" text-anchor="middle" class="b">Require</text>
  <text x="76" y="206" text-anchor="middle">assistance</text>

  <polygon points="168,84 182,84 228,168 214,168" class="fred"/>
  <polygon points="214,84 228,84 182,168 168,168" class="fred"/>
  <text x="198" y="190" text-anchor="middle" class="b">Require medical</text>
  <text x="198" y="206" text-anchor="middle">assistance</text>

  <rect x="290" y="84" width="14" height="84" class="fred"/>
  <polygon points="290,84 304,84 350,168 336,168" class="fred"/>
  <rect x="336" y="84" width="14" height="84" class="fred"/>
  <text x="320" y="190" text-anchor="middle" class="b">No</text>
  <text x="320" y="206" text-anchor="middle">or Negative</text>

  <polygon points="412,84 426,84 449,130 435,130" class="fred"/>
  <polygon points="458,84 472,84 449,130 435,130" class="fred"/>
  <rect x="435" y="124" width="14" height="44" class="fred"/>
  <text x="442" y="190" text-anchor="middle" class="b">Yes</text>
  <text x="442" y="206" text-anchor="middle">or Affirmative</text>

  <polygon points="564,84 594,124 534,124" class="fred"/>
  <rect x="557" y="118" width="14" height="50" class="fred"/>
  <text x="564" y="190" text-anchor="middle" class="b">Proceeding</text>
  <text x="564" y="206" text-anchor="middle">in this direction</text>
</svg>`
},

sepreval: {
  alt: 'A 24-month timeline running from rating issue to expiry, with the final 12 months shaded blue; a dashed bar across all 24 months carries 6 hours that may be flown anywhere, a solid blue bar confined to the final 12 months carries the other 6 hours, a brace marks the two as 12 hours in all, and below them 6 hours as PIC, 12 take-offs and 12 landings and 1 hour of training with an FI or CRI are shown as counting inside those 12 hours with no window of their own, with an alternative proficiency check drawn in the last 3 months before expiry.',
  cap: 'An SEP or TMG class rating runs for 24 months. The 12 hours may be spread across the whole of it — all 12 may sit in the final year if you like — but at least 6 of them must fall in the 12 months before expiry. The PIC hours, the take-offs and landings and the training flight are counted inside those 12 hours, not added to them. The alternative is a proficiency check with an examiner in the last 3 months.',
  svg: `<svg class="dg" viewBox="0 0 640 356" role="img" aria-label="Twenty-four month SEP class rating timeline showing which revalidation hours may fall anywhere and which must fall inside the twelve months before expiry">
  <defs>
    <marker id="sepreval-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" class="fill"/></marker>
    <marker id="sepreval-al" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M10,0 L0,5 L10,10 Z" class="fill"/></marker>
    <marker id="sepreval-bar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" class="fblue"/></marker>
    <marker id="sepreval-bal" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M10,0 L0,5 L10,10 Z" class="fblue"/></marker>
  </defs>

  <rect x="340" y="52" width="264" height="124" class="fblue" opacity=".10"/>

  <text x="76" y="26" class="s">Rating issued</text>
  <text x="604" y="26" text-anchor="end" class="b blue-t">Expiry</text>

  <line x1="76" y1="52" x2="76" y2="114" class="thin"/>
  <line x1="538" y1="56" x2="538" y2="78" class="thin"/>
  <line x1="340" y1="52" x2="340" y2="176" class="blue ink dash"/>
  <line x1="604" y1="52" x2="604" y2="176" class="blue ink"/>
  <line x1="604" y1="176" x2="604" y2="318" class="blue ink dash" opacity=".35"/>

  <line x1="76" y1="66" x2="141" y2="66" class="ink" marker-start="url(#sepreval-al)"/>
  <line x1="275" y1="66" x2="604" y2="66" class="ink" marker-end="url(#sepreval-ar)"/>
  <text x="208" y="71" text-anchor="middle" class="s">validity: 24 months</text>

  <line x1="342" y1="96" x2="376" y2="96" class="blue ink" marker-start="url(#sepreval-bal)"/>
  <line x1="568" y1="96" x2="602" y2="96" class="blue ink" marker-end="url(#sepreval-bar)"/>
  <text x="472" y="101" text-anchor="middle" class="s blue-t">the 12 months before expiry</text>

  <path d="M70,114 C63,116 68,138 60,145 C68,152 63,174 70,176" class="ink"/>
  <text x="48" y="137" text-anchor="end" class="b">12 h</text>
  <text x="48" y="159" text-anchor="end" class="s">in all</text>

  <rect x="76" y="114" width="528" height="26" class="ink dash"/>
  <text x="86" y="131">6 hours, anywhere in the 24 months</text>

  <rect x="340" y="150" width="264" height="26" class="blue ink"/>
  <text x="354" y="167" class="b blue-t">6 hours, inside this window</text>

  <line x1="76" y1="200" x2="604" y2="200" class="thin"/>
  <text x="76" y="222" class="b">All counted inside the 12 hours</text>
  <text x="596" y="222" text-anchor="end" class="s">no window of their own</text>
  <line x1="252" y1="236" x2="252" y2="292" class="thin"/>
  <line x1="428" y1="236" x2="428" y2="292" class="thin"/>
  <text x="164" y="262" text-anchor="middle" class="b">6 hours</text>
  <text x="164" y="280" text-anchor="middle" class="s">as PIC</text>
  <text x="340" y="262" text-anchor="middle" class="b">12 take-offs</text>
  <text x="340" y="280" text-anchor="middle" class="s">and 12 landings</text>
  <text x="516" y="262" text-anchor="middle" class="b">1 hour training</text>
  <text x="516" y="280" text-anchor="middle" class="s">with an FI or CRI</text>

  <line x1="76" y1="306" x2="604" y2="306" class="thin"/>
  <rect x="538" y="318" width="66" height="26" class="ink"/>
  <text x="571" y="335" text-anchor="middle" class="s">3 months</text>
  <text x="526" y="335" text-anchor="end">Or: a proficiency check with an examiner</text>
</svg>`
},

pdrareas: {
  alt: 'Three chart extracts side by side — a circular prohibited area labelled P611/2.2, a circular restricted area labelled R101/2.4 and an irregular danger area labelled D044/4.0, all outlined with the same inward cross-hatched boundary — above a side view showing that the figure after the stroke is an upper limit of 4,000 ft amsl with the base at the surface and open air above it.',
  cap: 'On the UK 1:500,000 chart all three carry the same cross-hatched boundary — purple in print — so only the letter P, R or D tells you whether flight is forbidden, permitted on stated conditions, or merely hazardous at notified times. The figure after the oblique stroke is the effective upper limit in thousands of feet amsl and the base is the surface, so D044/4.0 means surface to 4,000 ft amsl.',
  svg: `<svg class="dg" viewBox="0 0 640 400" role="img" aria-label="Three UK half-million chart extracts — a prohibited, a restricted and a danger area — all drawn with the same cross-hatched boundary, plus a side view explaining that the figure after the oblique stroke is the upper limit in thousands of feet above mean sea level">
<defs>
<marker id="pdrareas-ahr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" class="fred"/></marker>
</defs>
<text x="105" y="28" text-anchor="middle" class="b">Prohibited</text>
<text x="320" y="28" text-anchor="middle" class="b">Restricted</text>
<text x="535" y="28" text-anchor="middle" class="b">Danger area</text>
<rect x="12" y="38" width="186" height="132" class="tint"/>
<rect x="12" y="38" width="186" height="132" class="thin"/>
<rect x="227" y="38" width="186" height="132" class="tint"/>
<rect x="227" y="38" width="186" height="132" class="thin"/>
<rect x="442" y="38" width="186" height="132" class="tint"/>
<rect x="442" y="38" width="186" height="132" class="thin"/>
<polyline points="16,156 58,148 104,155 150,146 194,152" class="thin"/>
<polyline points="231,156 273,148 319,155 365,146 409,152" class="thin"/>
<polyline points="446,158 490,150 536,157 582,148 624,154" class="thin"/>
<circle cx="105" cy="104" r="42" class="red ink"/>
<line x1="147.0" y1="104.0" x2="139.0" y2="104.0" class="red ink" opacity=".45"/>
<line x1="144.9" y1="117.0" x2="137.3" y2="114.5" class="red ink" opacity=".45"/>
<line x1="139.0" y1="128.7" x2="132.5" y2="124.0" class="red ink" opacity=".45"/>
<line x1="129.7" y1="138.0" x2="125.0" y2="131.5" class="red ink" opacity=".45"/>
<line x1="118.0" y1="143.9" x2="115.5" y2="136.3" class="red ink" opacity=".45"/>
<line x1="105.0" y1="146.0" x2="105.0" y2="138.0" class="red ink" opacity=".45"/>
<line x1="92.0" y1="143.9" x2="94.5" y2="136.3" class="red ink" opacity=".45"/>
<line x1="80.3" y1="138.0" x2="85.0" y2="131.5" class="red ink" opacity=".45"/>
<line x1="71.0" y1="128.7" x2="77.5" y2="124.0" class="red ink" opacity=".45"/>
<line x1="65.1" y1="117.0" x2="72.7" y2="114.5" class="red ink" opacity=".45"/>
<line x1="63.0" y1="104.0" x2="71.0" y2="104.0" class="red ink" opacity=".45"/>
<line x1="65.1" y1="91.0" x2="72.7" y2="93.5" class="red ink" opacity=".45"/>
<line x1="71.0" y1="79.3" x2="77.5" y2="84.0" class="red ink" opacity=".45"/>
<line x1="80.3" y1="70.0" x2="85.0" y2="76.5" class="red ink" opacity=".45"/>
<line x1="92.0" y1="64.1" x2="94.5" y2="71.7" class="red ink" opacity=".45"/>
<line x1="105.0" y1="62.0" x2="105.0" y2="70.0" class="red ink" opacity=".45"/>
<line x1="118.0" y1="64.1" x2="115.5" y2="71.7" class="red ink" opacity=".45"/>
<line x1="129.7" y1="70.0" x2="125.0" y2="76.5" class="red ink" opacity=".45"/>
<line x1="139.0" y1="79.3" x2="132.5" y2="84.0" class="red ink" opacity=".45"/>
<line x1="144.9" y1="91.0" x2="137.3" y2="93.5" class="red ink" opacity=".45"/>
<text x="105" y="109" text-anchor="middle" class="red-t">P611/2.2</text>
<circle cx="320" cy="104" r="42" class="red ink"/>
<line x1="362.0" y1="104.0" x2="354.0" y2="104.0" class="red ink" opacity=".45"/>
<line x1="359.9" y1="117.0" x2="352.3" y2="114.5" class="red ink" opacity=".45"/>
<line x1="354.0" y1="128.7" x2="347.5" y2="124.0" class="red ink" opacity=".45"/>
<line x1="344.7" y1="138.0" x2="340.0" y2="131.5" class="red ink" opacity=".45"/>
<line x1="333.0" y1="143.9" x2="330.5" y2="136.3" class="red ink" opacity=".45"/>
<line x1="320.0" y1="146.0" x2="320.0" y2="138.0" class="red ink" opacity=".45"/>
<line x1="307.0" y1="143.9" x2="309.5" y2="136.3" class="red ink" opacity=".45"/>
<line x1="295.3" y1="138.0" x2="300.0" y2="131.5" class="red ink" opacity=".45"/>
<line x1="286.0" y1="128.7" x2="292.5" y2="124.0" class="red ink" opacity=".45"/>
<line x1="280.1" y1="117.0" x2="287.7" y2="114.5" class="red ink" opacity=".45"/>
<line x1="278.0" y1="104.0" x2="286.0" y2="104.0" class="red ink" opacity=".45"/>
<line x1="280.1" y1="91.0" x2="287.7" y2="93.5" class="red ink" opacity=".45"/>
<line x1="286.0" y1="79.3" x2="292.5" y2="84.0" class="red ink" opacity=".45"/>
<line x1="295.3" y1="70.0" x2="300.0" y2="76.5" class="red ink" opacity=".45"/>
<line x1="307.0" y1="64.1" x2="309.5" y2="71.7" class="red ink" opacity=".45"/>
<line x1="320.0" y1="62.0" x2="320.0" y2="70.0" class="red ink" opacity=".45"/>
<line x1="333.0" y1="64.1" x2="330.5" y2="71.7" class="red ink" opacity=".45"/>
<line x1="344.7" y1="70.0" x2="340.0" y2="76.5" class="red ink" opacity=".45"/>
<line x1="354.0" y1="79.3" x2="347.5" y2="84.0" class="red ink" opacity=".45"/>
<line x1="359.9" y1="91.0" x2="352.3" y2="93.5" class="red ink" opacity=".45"/>
<text x="320" y="109" text-anchor="middle" class="red-t">R101/2.4</text>
<polygon points="462,72 606,66 614,112 566,146 486,140 456,108" class="red ink"/>
<line x1="466.5" y1="71.8" x2="466.8" y2="79.8" class="red ink" opacity=".45"/>
<line x1="475.5" y1="71.4" x2="475.8" y2="79.4" class="red ink" opacity=".45"/>
<line x1="484.5" y1="71.1" x2="484.8" y2="79.1" class="red ink" opacity=".45"/>
<line x1="493.5" y1="70.7" x2="493.8" y2="78.7" class="red ink" opacity=".45"/>
<line x1="502.5" y1="70.3" x2="502.8" y2="78.3" class="red ink" opacity=".45"/>
<line x1="511.5" y1="69.9" x2="511.8" y2="77.9" class="red ink" opacity=".45"/>
<line x1="520.4" y1="69.6" x2="520.8" y2="77.6" class="red ink" opacity=".45"/>
<line x1="529.4" y1="69.2" x2="529.8" y2="77.2" class="red ink" opacity=".45"/>
<line x1="538.4" y1="68.8" x2="538.8" y2="76.8" class="red ink" opacity=".45"/>
<line x1="547.4" y1="68.4" x2="547.8" y2="76.4" class="red ink" opacity=".45"/>
<line x1="556.4" y1="68.1" x2="556.8" y2="76.1" class="red ink" opacity=".45"/>
<line x1="565.4" y1="67.7" x2="565.7" y2="75.7" class="red ink" opacity=".45"/>
<line x1="574.4" y1="67.3" x2="574.7" y2="75.3" class="red ink" opacity=".45"/>
<line x1="583.4" y1="66.9" x2="583.7" y2="74.9" class="red ink" opacity=".45"/>
<line x1="592.4" y1="66.6" x2="592.7" y2="74.6" class="red ink" opacity=".45"/>
<line x1="601.4" y1="66.2" x2="601.7" y2="74.2" class="red ink" opacity=".45"/>
<line x1="606.8" y1="70.4" x2="598.9" y2="71.8" class="red ink" opacity=".45"/>
<line x1="608.3" y1="79.3" x2="600.4" y2="80.7" class="red ink" opacity=".45"/>
<line x1="609.9" y1="88.2" x2="602.0" y2="89.5" class="red ink" opacity=".45"/>
<line x1="611.4" y1="97.0" x2="603.5" y2="98.4" class="red ink" opacity=".45"/>
<line x1="612.9" y1="105.9" x2="605.1" y2="107.3" class="red ink" opacity=".45"/>
<line x1="610.3" y1="114.6" x2="605.7" y2="108.1" class="red ink" opacity=".45"/>
<line x1="603.0" y1="119.8" x2="598.4" y2="113.3" class="red ink" opacity=".45"/>
<line x1="595.6" y1="125.0" x2="591.0" y2="118.5" class="red ink" opacity=".45"/>
<line x1="588.3" y1="130.2" x2="583.7" y2="123.7" class="red ink" opacity=".45"/>
<line x1="581.0" y1="135.4" x2="576.3" y2="128.9" class="red ink" opacity=".45"/>
<line x1="573.6" y1="140.6" x2="569.0" y2="134.1" class="red ink" opacity=".45"/>
<line x1="566.3" y1="145.8" x2="561.6" y2="139.3" class="red ink" opacity=".45"/>
<line x1="561.5" y1="145.7" x2="562.1" y2="137.7" class="red ink" opacity=".45"/>
<line x1="552.5" y1="145.0" x2="553.1" y2="137.0" class="red ink" opacity=".45"/>
<line x1="543.6" y1="144.3" x2="544.2" y2="136.3" class="red ink" opacity=".45"/>
<line x1="534.6" y1="143.6" x2="535.2" y2="135.7" class="red ink" opacity=".45"/>
<line x1="525.6" y1="143.0" x2="526.2" y2="135.0" class="red ink" opacity=".45"/>
<line x1="516.6" y1="142.3" x2="517.2" y2="134.3" class="red ink" opacity=".45"/>
<line x1="507.7" y1="141.6" x2="508.3" y2="133.6" class="red ink" opacity=".45"/>
<line x1="498.7" y1="141.0" x2="499.3" y2="133.0" class="red ink" opacity=".45"/>
<line x1="489.7" y1="140.3" x2="490.3" y2="132.3" class="red ink" opacity=".45"/>
<line x1="482.9" y1="136.7" x2="488.8" y2="131.2" class="red ink" opacity=".45"/>
<line x1="476.8" y1="130.2" x2="482.6" y2="124.7" class="red ink" opacity=".45"/>
<line x1="470.6" y1="123.6" x2="476.4" y2="118.1" class="red ink" opacity=".45"/>
<line x1="464.5" y1="117.0" x2="470.3" y2="111.5" class="red ink" opacity=".45"/>
<line x1="458.3" y1="110.5" x2="464.1" y2="105.0" class="red ink" opacity=".45"/>
<line x1="456.7" y1="103.6" x2="464.6" y2="104.9" class="red ink" opacity=".45"/>
<line x1="458.2" y1="94.7" x2="466.1" y2="96.0" class="red ink" opacity=".45"/>
<line x1="459.7" y1="85.8" x2="467.6" y2="87.1" class="red ink" opacity=".45"/>
<line x1="461.2" y1="76.9" x2="469.1" y2="78.2" class="red ink" opacity=".45"/>
<text x="535" y="109" text-anchor="middle" class="red-t">D044/4.0</text>
<text x="105" y="188" text-anchor="middle" class="s">Flight not permitted</text>
<text x="320" y="188" text-anchor="middle" class="s">Only on stated conditions</text>
<text x="535" y="188" text-anchor="middle" class="s">Hazard at notified times</text>
<text x="320" y="208" text-anchor="middle" class="s">One purple cross-hatched boundary — only the letter P, R or D differs</text>
<line x1="12" y1="224" x2="628" y2="224" class="thin"/>
<text x="12" y="246" class="b">The number after the stroke</text>
<text x="86" y="282" text-anchor="middle" class="b red-t">D044/4.0</text>
<path d="M56,291 V296 H86 V291" class="ink"/>
<path d="M87,291 V296 H116 V291" class="red ink"/>
<text x="71" y="316" text-anchor="middle" class="s">area number</text>
<line x1="120" y1="296" x2="352" y2="304" class="red ink" marker-end="url(#pdrareas-ahr)"/>
<text x="240" y="288" text-anchor="middle" class="red-t">upper limit</text>
<circle cx="70" cy="352" r="22" class="red ink dash"/>
<text x="104" y="345" class="s">broken boundary =</text>
<text x="104" y="367" class="s">activated by NOTAM</text>
<line x1="320" y1="378" x2="628" y2="378" class="ink"/>
<line x1="326" y1="378" x2="320" y2="385" class="thin"/>
<line x1="351" y1="378" x2="345" y2="385" class="thin"/>
<line x1="376" y1="378" x2="370" y2="385" class="thin"/>
<line x1="401" y1="378" x2="395" y2="385" class="thin"/>
<line x1="426" y1="378" x2="420" y2="385" class="thin"/>
<line x1="451" y1="378" x2="445" y2="385" class="thin"/>
<line x1="476" y1="378" x2="470" y2="385" class="thin"/>
<line x1="501" y1="378" x2="495" y2="385" class="thin"/>
<line x1="526" y1="378" x2="520" y2="385" class="thin"/>
<line x1="551" y1="378" x2="545" y2="385" class="thin"/>
<line x1="576" y1="378" x2="570" y2="385" class="thin"/>
<line x1="601" y1="378" x2="595" y2="385" class="thin"/>
<line x1="626" y1="378" x2="620" y2="385" class="thin"/>
<rect x="360" y="306" width="240" height="72" class="fred" opacity=".10"/>
<rect x="360" y="306" width="240" height="72" class="red ink"/>
<text x="590" y="322" text-anchor="end" class="red-t">4000 ft amsl</text>
<text x="372" y="368" class="s">base: surface</text>
<line x1="360" y1="282" x2="378" y2="282" class="ink dash"/>
<line x1="424" y1="282" x2="628" y2="282" class="ink dash"/>
<path d="M385,282 H416" class="ink"/>
<path d="M398,272 L406,282 L398,292" class="ink"/>
<path d="M387,277 V287" class="ink"/>
<text x="628" y="272" text-anchor="end" class="s">above it: outside the area</text>
</svg>`
},

carbIce: {
  alt: 'A section through a float carburettor: air enters at +20 °C, accelerates through the venturi where fuel is drawn up from the float chamber and vaporises, and ice has built up on the nearly closed throttle butterfly and the duct walls around it; alongside, a relative-humidity against outside-air-temperature chart shows a large risk envelope at descent power and a smaller one at cruise power, both lying between about −10 and +30 °C.',
  cap: 'Two coolings stack up at the same place: the pressure drop as the air accelerates through the venturi, and the latent heat the vaporising fuel takes out of the charge — <b>20 to 30 °C</b> between them. So on a humid day with an OAT of <b>+20 °C</b> the air at the throttle is already below freezing, and ice builds on the butterfly and the walls until it strangles the flow. It is worst at <b>low power</b>, where the nearly closed butterfly makes the restriction sharpest — which is why the descent is the danger. The cure is <b>full carb heat, applied early</b>.',
  svg: `<svg class="dg" viewBox="0 0 640 340" role="img" aria-label="Section through a carburettor showing the venturi, the fuel jet and the throttle butterfly with ice on it, beside a humidity against temperature risk envelope">
  <defs>
    <marker id="carbIce-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker>
    <marker id="carbIce-arb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" class="fblue"/></marker>
  </defs>

  <text x="14" y="28" class="b">Inside the carburettor</text>
  <text x="420" y="28" class="b">When ice is likely</text>

  <path class="tint" d="M95 108 H170 C192 108 197 134 209 134 H223 C235 134 240 108 262 108 H352 V192 H262 C240 192 235 166 223 166 H209 C197 166 192 192 170 192 H95 Z"/>
  <path class="ink" d="M95 108 H170 C192 108 197 134 209 134 H223 C235 134 240 108 262 108 H352"/>
  <path class="ink" d="M95 192 H170 C192 192 197 166 209 166 H223 C235 166 240 192 262 192 H352"/>

  <line x1="26" y1="156" x2="88" y2="156" class="ink" marker-end="url(#carbIce-ar)"/>
  <text x="24" y="138" class="s">Air in</text>
  <text x="24" y="178" class="s">OAT +20 °C</text>

  <line x1="196" y1="150" x2="250" y2="150" class="ink" marker-end="url(#carbIce-ar)"/>
  <line x1="334" y1="150" x2="348" y2="150" class="ink" marker-end="url(#carbIce-ar)"/>
  <text x="358" y="150" class="s">to cylinders</text>

  <text x="40" y="44">1  Venturi: pressure falls</text>
  <text x="40" y="60" class="s">air cools as it accelerates</text>
  <path class="ink" d="M150 68 C176 88 198 106 208 130" marker-end="url(#carbIce-ar)"/>

  <path class="ink" d="M212 166 V258"/>
  <path class="ink" d="M220 166 V258"/>
  <line x1="216" y1="252" x2="216" y2="182" class="ink" marker-end="url(#carbIce-ar)"/>
  <circle cx="216" cy="160" r="1.7" class="fill"/>
  <circle cx="223" cy="157" r="1.7" class="fill"/>
  <circle cx="230" cy="155" r="1.7" class="fill"/>
  <circle cx="237" cy="154" r="1.7" class="fill"/>

  <rect x="170" y="258" width="100" height="44" class="ink"/>
  <rect x="172" y="272" width="96" height="28" class="tint"/>
  <line x1="172" y1="272" x2="268" y2="272" class="ink"/>
  <rect x="228" y="262" width="26" height="10" rx="3" class="ink"/>
  <text x="220" y="318" text-anchor="middle" class="s">fuel from the float chamber</text>

  <text x="30" y="226">2  Fuel vaporises</text>
  <text x="30" y="242" class="s">latent heat cools the air</text>
  <path class="ink" d="M156 220 C180 212 196 196 206 172" marker-end="url(#carbIce-ar)"/>

  <path class="fill" d="M312.4 178.8 L332.4 122.8 L327.6 121.2 L307.6 177.2 Z"/>
  <circle cx="320" cy="150" r="3.6" class="ink"/>
  <path class="fblue" opacity=".62" d="M318 108 C321 116 326 119 330 116 C333 123 339 125 343 120 C347 115 349 111 351 108 Z"/>
  <path class="fblue" opacity=".62" d="M290 192 C293 186 298 183 302 186 C305 179 312 178 316 183 C319 186 322 190 324 192 Z"/>
  <path class="fblue" opacity=".62" d="M327.6 121.2 L307.6 177.2 C302.5 172 304.5 167.5 307.5 163 C310.5 158.5 306.5 153 310.5 147 C314 141.5 313 135.5 317.5 130 C321 125.7 324 123 327.6 121.2 Z"/>

  <text x="268" y="44" class="blue-t">Ice grows on the</text>
  <text x="268" y="60" class="s blue-t">throttle butterfly</text>
  <text x="268" y="76" class="s">worst at low power</text>
  <path class="ink blue" d="M300 86 C300 100 302 116 306 132" marker-end="url(#carbIce-arb)"/>

  <text x="300" y="226" text-anchor="middle" class="s blue-t">Total drop 20 to 30 °C</text>
  <text x="300" y="242" text-anchor="middle" class="s blue-t">so the air here is below 0 °C</text>
  <path class="ink blue" d="M300 208 C298 196 297 184 296 172" marker-end="url(#carbIce-arb)"/>

  <rect x="420" y="48" width="16" height="12" class="fblue" opacity=".16"/>
  <rect x="420" y="48" width="16" height="12" class="blue ink dash"/>
  <text x="442" y="58" class="s">serious icing, descent power</text>
  <rect x="420" y="68" width="16" height="12" class="fblue" opacity=".38"/>
  <rect x="420" y="68" width="16" height="12" class="blue ink"/>
  <text x="442" y="78" class="s">serious icing, cruise power</text>

  <line x1="452" y1="173" x2="620" y2="173" class="thin"/>
  <path class="fblue" opacity=".16" d="M480 96 L592 96 C586 140 577 180 553 205 C537 222 520 214 506 190 C492 166 485 130 480 96 Z"/>
  <path class="blue ink dash" d="M480 96 L592 96 C586 140 577 180 553 205 C537 222 520 214 506 190 C492 166 485 130 480 96 Z"/>
  <path class="fblue" opacity=".38" d="M522 96 L578 96 C573 124 563 148 550 152 C536 148 526 124 522 96 Z"/>
  <path class="blue ink" d="M522 96 L578 96 C573 124 563 148 550 152 C536 148 526 124 522 96 Z"/>

  <line x1="452" y1="96" x2="452" y2="250" class="ink"/>
  <line x1="452" y1="250" x2="620" y2="250" class="ink"/>
  <line x1="480" y1="250" x2="480" y2="255" class="thin"/>
  <line x1="508" y1="250" x2="508" y2="255" class="thin"/>
  <line x1="536" y1="250" x2="536" y2="255" class="thin"/>
  <line x1="564" y1="250" x2="564" y2="255" class="thin"/>
  <line x1="592" y1="250" x2="592" y2="255" class="thin"/>
  <line x1="620" y1="250" x2="620" y2="255" class="thin"/>

  <text x="446" y="100" text-anchor="end" class="s">100% RH</text>
  <text x="446" y="177" text-anchor="end" class="s">50%</text>
  <text x="446" y="248" text-anchor="end" class="s">0%</text>
  <text x="452" y="268" text-anchor="middle" class="s">−20</text>
  <text x="480" y="268" text-anchor="middle" class="s">−10</text>
  <text x="508" y="268" text-anchor="middle" class="s">0</text>
  <text x="536" y="268" text-anchor="middle" class="s">10</text>
  <text x="564" y="268" text-anchor="middle" class="s">20</text>
  <text x="592" y="268" text-anchor="middle" class="s">30</text>
  <text x="620" y="268" text-anchor="middle" class="s">40</text>
  <text x="536" y="290" text-anchor="middle" class="s">OAT °C</text>
  <text x="536" y="312" text-anchor="middle" class="s">possible from −10 to +30 °C</text>
</svg>`
},

gyroProps: {
  alt: 'Two panels: on the left a spinning rotor keeps its plane of spin horizontal while the aircraft rolls 30 degrees around it; on the right the same rotor seen face on, with a force pushed into the rim at the top taking effect 90 degrees further round in the direction of spin, at the three o\'clock position.',
  cap: 'Rigidity: the rotor holds its plane in space while the aeroplane moves around it — that is the attitude indicator, and the DI uses the same property about a horizontal axis. Precession: a force on the rim (crossed circle = pushed away from you) is felt 90&deg; further round <b>in the direction of spin</b>, which is how the turn indicator works.',
  svg: `<svg class="dg" viewBox="0 0 640 300" role="img" aria-label="Two panels. Left: a spinning rotor keeps its plane of spin horizontal while the aircraft rolls thirty degrees around it. Right: the same rotor face on, a force pushed into the rim at the top takes effect ninety degrees further round in the direction of spin, at the three o'clock position.">
  <defs>
    <marker id="gyroProps-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker>
    <marker id="gyroProps-arb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" class="fblue"/></marker>
  </defs>

  <text x="16" y="28" class="b">Rigidity in space</text>
  <text x="16" y="46" class="s">Spin plane stays fixed as the aircraft moves</text>

  <line x1="322" y1="16" x2="322" y2="284" class="thin"/>

  <text x="340" y="28" class="b">Precession</text>
  <text x="340" y="46" class="s">A force is felt 90&#176; further round the rim</text>

  <!-- ============ PANEL A : rigidity ============ -->
  <path d="M110 136 Q162 106 215 136" class="ink" marker-end="url(#gyroProps-ar)"/>
  <text x="162" y="100" text-anchor="middle">aircraft rolls</text>

  <!-- wings level -->
  <g>
    <line x1="32" y1="172" x2="144" y2="172" class="ink"/>
    <line x1="32" y1="172" x2="32" y2="166" class="ink"/>
    <line x1="144" y1="172" x2="144" y2="166" class="ink"/>
    <ellipse cx="88" cy="172" rx="11" ry="15" class="ink"/>
    <line x1="88" y1="157" x2="88" y2="140" class="ink"/>
    <line x1="76" y1="144" x2="100" y2="144" class="ink"/>
    <line x1="88" y1="187" x2="88" y2="200" class="thin"/>
  </g>

  <!-- banked 30 -->
  <g transform="rotate(30 238 177)">
    <line x1="182" y1="177" x2="294" y2="177" class="ink"/>
    <line x1="182" y1="177" x2="182" y2="171" class="ink"/>
    <line x1="294" y1="177" x2="294" y2="171" class="ink"/>
    <ellipse cx="238" cy="177" rx="11" ry="15" class="ink"/>
    <line x1="238" y1="162" x2="238" y2="145" class="ink"/>
    <line x1="226" y1="149" x2="250" y2="149" class="ink"/>
    <line x1="238" y1="192" x2="238" y2="205" class="thin"/>
  </g>

  <!-- the rotor: same plane in both -->
  <line x1="60" y1="206" x2="272" y2="206" class="blue ink dash"/>
  <ellipse cx="88" cy="206" rx="30" ry="9" class="ink"/>
  <path d="M62 210.5 A30 9 0 0 0 114 210.5" class="ink" marker-end="url(#gyroProps-ar)"/>
  <ellipse cx="221" cy="206" rx="30" ry="9" class="ink"/>
  <path d="M195 210.5 A30 9 0 0 0 247 210.5" class="ink" marker-end="url(#gyroProps-ar)"/>

  <text x="126" y="226" class="s">spin</text>
  <text x="88" y="238" text-anchor="middle" class="s">level</text>
  <text x="238" y="238" text-anchor="middle" class="s">banked 30&#176;</text>
  <text x="160" y="268" text-anchor="middle" class="blue-t">Plane of spin unchanged</text>

  <!-- ============ PANEL B : precession ============ -->
  <circle cx="448" cy="176" r="62" class="ink"/>
  <line x1="448" y1="176" x2="448" y2="124" class="thin"/>
  <line x1="448" y1="176" x2="500" y2="176" class="thin"/>
  <circle cx="448" cy="176" r="5" class="fill"/>

  <path d="M487 243.6 A78 78 0 0 1 370.3 182.8" class="ink" marker-end="url(#gyroProps-ar)"/>
  <text x="448" y="272" text-anchor="middle" class="s">direction of spin</text>

  <circle cx="448" cy="114" r="10" class="ink"/>
  <line x1="441" y1="107" x2="455" y2="121" class="ink"/>
  <line x1="455" y1="107" x2="441" y2="121" class="ink"/>
  <text x="448" y="76" text-anchor="middle">Push here</text>
  <text x="448" y="94" text-anchor="middle" class="s">(away from you)</text>

  <path d="M448 154 A22 22 0 0 1 470 176" class="blue ink" marker-end="url(#gyroProps-arb)"/>
  <text x="474" y="150" text-anchor="middle" class="blue-t">90&#176;</text>

  <circle cx="510" cy="176" r="10" class="blue ink"/>
  <line x1="503" y1="169" x2="517" y2="183" class="blue ink"/>
  <line x1="517" y1="169" x2="503" y2="183" class="blue ink"/>
  <text x="528" y="170" class="blue-t">Moves away</text>
  <text x="528" y="188" class="s blue-t">from you</text>
</svg>`
},

elecBus: {
  alt: 'A single-line electrical diagram: a battery earthed to the airframe feeds up through a zero-centre ammeter, whose needle is deflected to the minus side, and through the BAT half of the master switch to a junction where the engine-driven alternator also feeds in; one drop from that junction runs to a solid bus bar carrying circuit breakers for radio, transponder, lights, flaps and fuel pump plus a low volts warning lamp, the alternator\'s field is taken back from the bus through the ALT half of the master and a regulator, and a magnetos box sits connected to nothing.',
  cap: 'The ammeter sits in the battery lead, so it reads the battery and not the loads: needle to +, the alternator is carrying everything and charging the battery; needle to − with the low volts light, the battery alone is feeding the bus — the alternator has failed, so shed non-essential loads and land. The alternator\'s own field is excited from the bus through the ALT half of the master, which is why the magnetos, wired to none of it, are the one thing that keeps running.',
  svg: `<svg class="dg" viewBox="0 0 640 410" role="img" aria-label="Single line diagram of a light aeroplane electrical system: battery through an ammeter and the battery half of the master switch to a node, alternator feeding the same node with its field circuit taken from the bus through the alternator half of the master and the regulator, and circuit breakers hanging off the bus bar feeding radio, transponder, lights, flaps and fuel pump, with a low volts lamp and the magnetos shown off the bus">
  <defs>
    <marker id="elecBus-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker>
    <marker id="elecBus-arR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" class="fred"/></marker>
  </defs>

  <line x1="48" y1="140" x2="48" y2="90" class="ink"/>
  <line x1="26" y1="140" x2="70" y2="140" class="ink"/>
  <line x1="36" y1="149" x2="60" y2="149" class="ink"/>
  <line x1="26" y1="158" x2="70" y2="158" class="ink"/>
  <line x1="36" y1="167" x2="60" y2="167" class="ink"/>
  <line x1="48" y1="167" x2="48" y2="190" class="ink"/>
  <line x1="30" y1="190" x2="66" y2="190" class="ink"/>
  <line x1="36" y1="196" x2="60" y2="196" class="ink"/>
  <line x1="42" y1="202" x2="54" y2="202" class="ink"/>
  <text x="80" y="147">Battery</text>
  <text x="80" y="166" class="s">14 V or 28 V</text>
  <text x="8" y="220" class="s">Airframe earth</text>

  <line x1="48" y1="90" x2="139" y2="90" class="ink"/>
  <circle cx="172" cy="90" r="33" class="red ink"/>
  <path d="M153 79 A22 22 0 0 1 191 79" class="thin"/>
  <line x1="172" y1="60" x2="172" y2="72" class="ink"/>
  <line x1="172" y1="102" x2="156" y2="76" class="red ink"/>
  <circle cx="172" cy="102" r="2.5" class="fred"/>
  <text x="154" y="101" text-anchor="middle" class="s red-t">&#8722;</text>
  <text x="190" y="101" text-anchor="middle" class="s">+</text>
  <text x="172" y="140" text-anchor="middle" class="red-t">Ammeter</text>
  <line x1="205" y1="90" x2="300" y2="90" class="ink"/>

  <line x1="210" y1="114" x2="288" y2="114" class="red ink" marker-end="url(#elecBus-arR)"/>
  <text x="249" y="133" text-anchor="middle" class="red-t">discharge</text>
  <line x1="288" y1="148" x2="210" y2="148" class="ink" marker-end="url(#elecBus-ar)"/>
  <text x="249" y="167" text-anchor="middle">charge</text>

  <circle cx="300" cy="90" r="3" class="fill"/>
  <line x1="300" y1="90" x2="330" y2="73" class="ink"/>
  <circle cx="338" cy="90" r="3" class="fill"/>
  <line x1="338" y1="90" x2="430" y2="90" class="ink"/>
  <text x="319" y="58" text-anchor="middle">Master: BAT</text>

  <circle cx="430" cy="90" r="3.5" class="fill"/>
  <line x1="430" y1="90" x2="430" y2="250" class="ink"/>

  <line x1="430" y1="90" x2="528" y2="90" class="ink"/>
  <circle cx="556" cy="90" r="28" class="ink"/>
  <text x="556" y="95" text-anchor="middle">ALT</text>
  <text x="556" y="48" text-anchor="middle">Alternator</text>

  <line x1="556" y1="158" x2="556" y2="120" class="ink" marker-end="url(#elecBus-ar)"/>
  <text x="566" y="140" class="s">Field</text>
  <rect x="510" y="158" width="92" height="32" class="ink"/>
  <text x="556" y="178" text-anchor="middle">Regulator</text>
  <line x1="556" y1="190" x2="556" y2="208" class="ink"/>
  <circle cx="556" cy="208" r="3" class="fill"/>
  <line x1="556" y1="234" x2="574" y2="212" class="ink"/>
  <circle cx="556" cy="234" r="3" class="fill"/>
  <line x1="556" y1="234" x2="556" y2="250" class="ink"/>
  <text x="530" y="226" text-anchor="end">Master: ALT</text>

  <rect x="110" y="246" width="506" height="8" class="fill"/>
  <text x="180" y="236" class="b">Bus bar</text>

  <line x1="133" y1="282" x2="141" y2="282" class="thin"/>
  <text x="128" y="286" text-anchor="end" class="s">Circuit breakers</text>

  <line x1="150" y1="254" x2="150" y2="272" class="ink"/>
  <rect x="141" y="272" width="18" height="20" class="ink"/>
  <line x1="150" y1="292" x2="150" y2="310" class="ink"/>
  <text x="150" y="326" text-anchor="middle" class="s">Radio</text>

  <line x1="240" y1="254" x2="240" y2="272" class="ink"/>
  <rect x="231" y="272" width="18" height="20" class="ink"/>
  <line x1="240" y1="292" x2="240" y2="310" class="ink"/>
  <text x="240" y="326" text-anchor="middle" class="s">Transponder</text>

  <line x1="330" y1="254" x2="330" y2="272" class="ink"/>
  <rect x="321" y="272" width="18" height="20" class="ink"/>
  <line x1="330" y1="292" x2="330" y2="310" class="ink"/>
  <text x="330" y="326" text-anchor="middle" class="s">Lights</text>

  <line x1="500" y1="254" x2="500" y2="272" class="ink"/>
  <rect x="491" y="272" width="18" height="20" class="ink"/>
  <line x1="500" y1="292" x2="500" y2="310" class="ink"/>
  <text x="500" y="326" text-anchor="middle" class="s">Flaps</text>

  <line x1="580" y1="254" x2="580" y2="272" class="ink"/>
  <rect x="571" y="272" width="18" height="20" class="ink"/>
  <line x1="580" y1="292" x2="580" y2="310" class="ink"/>
  <text x="580" y="326" text-anchor="middle" class="s">Fuel pump</text>

  <line x1="390" y1="254" x2="390" y2="270" class="ink"/>
  <circle cx="390" cy="282" r="12" class="red ink"/>
  <line x1="381.5" y1="273.5" x2="398.5" y2="290.5" class="red ink"/>
  <line x1="381.5" y1="290.5" x2="398.5" y2="273.5" class="red ink"/>
  <text x="390" y="312" text-anchor="middle" class="s red-t">Low volts</text>

  <rect x="14" y="330" width="112" height="32" class="ink"/>
  <text x="70" y="351" text-anchor="middle">Magnetos</text>
  <text x="70" y="378" text-anchor="middle" class="s">not on the bus</text>
  <text x="70" y="396" text-anchor="middle" class="s">engine runs anyway</text>
</svg>`
},

flapTypes: {
  alt: 'Four wing sections drawn side by side with the flap at the same angle: a plain flap hinged straight down, a split flap whose upper surface stays put with a large shaded wake behind it, a slotted flap hanging below the wing with an arrow showing air passing up through the slot onto its upper surface, and a Fowler flap that has also slid aft so the chord is longer.',
  cap: 'Same section, same flap angle — only the geometry differs. Plain adds camber alone; split adds camber but leaves a large wake, so it is the most drag for the least extra lift; the slot feeds high-pressure air over the flap and keeps the flow attached; the Fowler adds <b>area</b> as well as camber, which is why it is the most effective of the four.',
  svg: `<svg class="dg" viewBox="0 0 640 348" role="img" aria-label="Plain, split, slotted and Fowler flaps drawn in section at the same deflection">
  <defs>
    <marker id="flapTypes-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="fill"/></marker>
    <marker id="flapTypes-arb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="fblue"/></marker>
    <marker id="flapTypes-arbs" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M10 0 L0 5 L10 10 z" class="fblue"/></marker>
  </defs>

  <text x="10" y="18" class="b">Same section, same flap angle</text>

  <!-- A PLAIN -->
  <text x="10" y="43" class="b">Plain</text>
  <g transform="translate(22 92)">
    <line x1="0" y1="0" x2="242" y2="0" class="thin dash"/>
    <path d="M0 0 C 6 -18 38 -31 95 -30 C 130 -29.4 152 -26 170 -21.8 L 170 5.6 C 145 7.4 120 8.6 95 9 C 58 10 22 8 0 0 Z" class="fill" opacity=".10"/>
    <path d="M0 0 C 6 -18 38 -31 95 -30 C 130 -29.4 152 -26 170 -21.8 L 170 5.6 C 145 7.4 120 8.6 95 9 C 58 10 22 8 0 0 Z" class="ink"/>
    <path d="M170 -21.8 C 192 -16 216 -8 240 0 C 216 2.5 192 4.5 170 5.6 Z" class="thin dash"/>
    <g transform="rotate(32 170 2)">
      <path d="M170 -21.8 C 192 -16 216 -8 240 0 C 216 2.5 192 4.5 170 5.6 Z" class="fblue" opacity=".2"/>
      <path d="M170 -21.8 C 192 -16 216 -8 240 0 C 216 2.5 192 4.5 170 5.6 Z" class="blue ink"/>
    </g>
    <circle cx="170" cy="2" r="2.6" class="fill"/>
  </g>
  <text x="10" y="154" class="s">Camber up. Same area, no slot.</text>
  <text x="10" y="172" class="s blue-t">Some extra lift, a fair bit of drag.</text>

  <!-- B SPLIT -->
  <text x="328" y="43" class="b">Split</text>
  <g transform="translate(340 92)">
    <path d="M170 6 L 240 0 C 258 2 272 8 276 18 C 278 30 268 42 252 44 C 240 45 234 42 232.4 37.9 Z" class="fill" opacity=".12"/>
    <line x1="0" y1="0" x2="242" y2="0" class="thin dash"/>
    <path d="M0 0 C 6 -18 38 -31 95 -30 C 145 -29 195 -19 240 0 C 200 4 145 8 95 9 C 58 10 22 8 0 0 Z" class="fill" opacity=".10"/>
    <path d="M0 0 C 6 -18 38 -31 95 -30 C 145 -29 195 -19 240 0 C 200 4 145 8 95 9 C 58 10 22 8 0 0 Z" class="ink"/>
    <g transform="rotate(32 170 5.6)">
      <path d="M170 5.6 C 195 4 218 2 240 0 L 239.2 3.4 C 218 5.4 195 7.4 170 9 Z" class="fblue" opacity=".25"/>
      <path d="M170 5.6 C 195 4 218 2 240 0 L 239.2 3.4 C 218 5.4 195 7.4 170 9 Z" class="blue ink"/>
    </g>
    <g class="ink" opacity=".4">
      <path d="M206 8 A 7 7 0 1 0 200 18" marker-end="url(#flapTypes-ar)"/>
      <path d="M259 20 A 9 9 0 1 0 251 32" marker-end="url(#flapTypes-ar)"/>
    </g>
    <line x1="246" y1="-6" x2="252" y2="7" class="thin"/>
    <text x="228" y="-14" class="s">Big wake</text>
  </g>
  <text x="328" y="154" class="s">Lower surface only. Same area, no slot.</text>
  <text x="328" y="172" class="s blue-t">Most drag for the least extra lift.</text>

  <!-- C SLOTTED -->
  <text x="10" y="203" class="b">Slotted</text>
  <g transform="translate(22 252)">
    <line x1="0" y1="0" x2="242" y2="0" class="thin dash"/>
    <path d="M0 0 C 6 -18 38 -31 95 -30 C 135 -29 168 -23 186 -16 C 178 -9 168 -3 156 1 C 120 7 58 10 22 8 C 12 7 5 4 0 0 Z" class="fill" opacity=".10"/>
    <path d="M0 0 C 6 -18 38 -31 95 -30 C 135 -29 168 -23 186 -16 C 178 -9 168 -3 156 1 C 120 7 58 10 22 8 C 12 7 5 4 0 0 Z" class="ink"/>
    <g transform="translate(190 4) rotate(32)">
      <path d="M0 0 C 4 -6 16 -10 36 -9 C 50 -8 60 -4 68 0 C 55 3 22 4 0 0 Z" class="fblue" opacity=".2"/>
      <path d="M0 0 C 4 -6 16 -10 36 -9 C 50 -8 60 -4 68 0 C 55 3 22 4 0 0 Z" class="blue ink"/>
    </g>
    <path d="M120 20 C 148 19 160 14 170 7 C 180 0 192 -6 202 -2 C 210 1 216 5 221 9" class="blue ink" marker-end="url(#flapTypes-arb)"/>
    <line x1="208" y1="-11" x2="194" y2="-3" class="thin"/>
    <text x="204" y="-19" class="s">Slot</text>
  </g>
  <text x="10" y="314" class="s">Camber up, same area — but now a slot.</text>
  <text x="10" y="332" class="s blue-t">Slot re-energises the flow: more lift.</text>

  <!-- D FOWLER -->
  <text x="328" y="203" class="b">Fowler</text>
  <text x="382" y="203" class="s">most effective</text>
  <g transform="translate(340 252)">
    <line x1="0" y1="0" x2="242" y2="0" class="thin dash"/>
    <path d="M0 0 C 6 -18 38 -31 95 -30 C 145 -29 190 -20 219 -8 C 208 -3 192 1 174 4 C 130 8 58 10 22 8 C 12 7 5 4 0 0 Z" class="fill" opacity=".10"/>
    <path d="M0 0 C 6 -18 38 -31 95 -30 C 145 -29 190 -20 219 -8 C 208 -3 192 1 174 4 C 130 8 58 10 22 8 C 12 7 5 4 0 0 Z" class="ink"/>
    <g transform="translate(218 6) rotate(32)">
      <path d="M0 0 C 4 -6 16 -10 36 -9 C 50 -8 60 -4 68 0 C 55 3 22 4 0 0 Z" class="fblue" opacity=".2"/>
      <path d="M0 0 C 4 -6 16 -10 36 -9 C 50 -8 60 -4 68 0 C 55 3 22 4 0 0 Z" class="blue ink"/>
    </g>
    <path d="M160 18 C 186 17 196 13 206 6 C 214 0 224 -4 232 1 C 238 4.5 242 7 246 10" class="blue ink" marker-end="url(#flapTypes-arb)"/>
    <line x1="240" y1="-12" x2="240" y2="-2" class="thin"/>
    <line x1="276" y1="-12" x2="276" y2="30" class="thin"/>
    <line x1="240" y1="-10" x2="276" y2="-10" class="blue ink" marker-end="url(#flapTypes-arb)" marker-start="url(#flapTypes-arbs)"/>
    <text x="258" y="-20" text-anchor="middle" class="s blue-t">+ area</text>
  </g>
  <text x="328" y="314" class="s">Camber up and area up, with a slot too.</text>
  <text x="328" y="332" class="s blue-t">Most lift for the least drag.</text>
</svg>`
},

};
