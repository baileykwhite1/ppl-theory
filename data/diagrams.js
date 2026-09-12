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
  svg: `<svg class="dg" viewBox="0 0 640 378" role="img" aria-label="VMC minima by altitude band">
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
  <text x="320" y="332" text-anchor="middle" class="s">Ground</text>
  <line x1="20" y1="344" x2="620" y2="344" class="thin"/>
  <text x="34" y="364" class="s">Concession: Class F/G, by day, at 140 kt IAS or less — visibility may reduce to 1500 m.</text>
</svg>`
},

altimetry: {
  alt: 'Three altimeter subscale settings and the datum each one measures from',
  cap: 'Same aeroplane, three readings. QFE measures from the aerodrome, QNH from sea level, 1013 from a pressure datum that moves with the weather.',
  svg: `<svg class="dg" viewBox="0 0 640 300" role="img" aria-label="QFE, QNH and standard pressure setting datums">
  <defs><marker id="altimetry-ar-alt" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
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
  <line x1="200" y1="56" x2="200" y2="118" class="ink blue" marker-end="url(#altimetry-ar-alt)"/>
  <text x="208" y="92" class="blue-t">HEIGHT</text>
  <line x1="360" y1="56" x2="360" y2="198" class="ink" marker-end="url(#altimetry-ar-alt)"/>
  <text x="368" y="132" >ALTITUDE</text>
  <line x1="500" y1="56" x2="500" y2="268" class="ink" marker-end="url(#altimetry-ar-alt)"/>
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
  <defs><marker id="seabreeze-ar-sb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
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
  <path d="M200 190 H430" class="ink blue" marker-end="url(#seabreeze-ar-sb)"/>
  <text x="300" y="182" text-anchor="middle" class="blue-t">Sea breeze — onshore</text>
  <path d="M450 190 V90" class="ink blue" marker-end="url(#seabreeze-ar-sb)"/>
  <text x="462" y="140" class="s blue-t">Rising</text>
  <path d="M430 74 H210" class="ink blue" marker-end="url(#seabreeze-ar-sb)"/>
  <text x="320" y="66" text-anchor="middle" class="s blue-t">Return flow aloft</text>
  <path d="M190 90 V180" class="ink blue" marker-end="url(#seabreeze-ar-sb)"/>
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
  <defs><marker id="aerofoil-ar-af" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker>
  <marker id="aerofoil-ar-afb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fblue"/></marker></defs>
  <!-- relative airflow -->
  <g class="ink" opacity=".45">
    <line x1="30" y1="120" x2="150" y2="120" marker-end="url(#aerofoil-ar-af)"/>
    <line x1="30" y1="160" x2="150" y2="160" marker-end="url(#aerofoil-ar-af)"/>
    <line x1="30" y1="200" x2="150" y2="200" marker-end="url(#aerofoil-ar-af)"/>
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
  <line x1="330" y1="138" x2="330" y2="48" class="ink blue" marker-end="url(#aerofoil-ar-afb)"/>
  <text x="338" y="60" class="b blue">LIFT</text>
  <text x="338" y="78" class="s blue-t">perpendicular to the airflow</text>
  <line x1="440" y1="168" x2="530" y2="168" class="ink" marker-end="url(#aerofoil-ar-af)"/>
  <text x="470" y="188">DRAG</text>
  <text x="320" y="262" text-anchor="middle" class="s">Most of the lift comes from reduced pressure over the upper surface, not raised pressure below.</text>
</svg>`
},

dragcurve: {
  alt: 'Graph of drag against airspeed showing parasite drag rising, induced drag falling, and the total drag minimum',
  cap: 'The bottom of the total curve is V<sub>MD</sub>: best lift/drag, best glide angle, and — in a propeller aeroplane — best range. Below it you need more <em>thrust</em> to fly slower. Careful with the word power: this is a drag curve, and the power-required curve bottoms out slower still, at V<sub>MP</sub>, which is the endurance speed.',
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
  <text x="322" y="278" text-anchor="middle" class="b blue">V<tspan class="sub">MD</tspan></text>
  <text x="322" y="176" text-anchor="middle" class="s blue-t">induced = parasite</text>
  <!-- back of curve -->
  <path d="M110 266 H316" class="ink red"/>
  <text x="120" y="301" class="s red-t">Back of the drag curve — slower needs more thrust</text>
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
  <defs><marker id="turnforces-ar-tf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker>
  <marker id="turnforces-ar-tfb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fblue"/></marker></defs>
  <!-- aeroplane banked 60 -->
  <g transform="rotate(-60 300 200)">
    <line x1="240" y1="200" x2="360" y2="200" class="ink" stroke-width="3"/>
    <line x1="300" y1="186" x2="300" y2="214" class="ink" stroke-width="3"/>
  </g>
  <text x="196" y="252" class="s">60° bank</text>
  <!-- total lift along the aircraft vertical -->
  <line x1="300" y1="200" x2="404" y2="140" class="ink blue" marker-end="url(#turnforces-ar-tfb)"/>
  <text x="410" y="134" class="b blue">Total lift</text>
  <!-- vertical component -->
  <line x1="300" y1="200" x2="300" y2="80" class="ink dash"/>
  <text x="292" y="92" text-anchor="end" class="s">Vertical component</text>
  <text x="292" y="109" text-anchor="end" class="s">= weight</text>
  <!-- horizontal component -->
  <line x1="300" y1="80" x2="404" y2="80" class="ink dash"/>
  <line x1="300" y1="200" x2="404" y2="200" class="ink red" marker-end="url(#turnforces-ar-tf)"/>
  <text x="310" y="222" class="red-t">Horizontal component</text>
  <text x="310" y="239" class="s red-t">turns the aeroplane</text>
  <!-- weight -->
  <line x1="300" y1="200" x2="300" y2="290" class="ink" marker-end="url(#turnforces-ar-tf)"/>
  <text x="308" y="286">Weight</text>
  <!-- numbers -->
  <g><text x="470" y="192" class="b">n = 1 / cos 60° = 2.0</text>
  <text x="470" y="212" class="s">Stall speed × √2 = 1.41</text>
  <text x="470" y="232" class="s">50 kt clean becomes ≈71 kt</text></g>
</svg>`
},

asiarcs: {
  alt: 'Airspeed indicator dial showing the white, green and yellow arcs and the red never-exceed line',
  cap: 'Every arc boundary is a limitation. Note that white is a separate, inner arc that <em>overlaps</em> the green — V<sub>S0</sub> sits below V<sub>S1</sub> because flap lowers the stall, and V<sub>FE</sub> falls well inside the green range. V<sub>A</sub> is the one limitation not marked on the dial at all — and it gets lower as you get lighter.',
  svg: `<svg class="dg" viewBox="0 0 640 300" role="img" aria-label="Airspeed indicator arc markings">
  <circle cx="200" cy="150" r="112" class="face"/>
  <circle cx="200" cy="150" r="112" class="ink"/>
  <circle cx="200" cy="150" r="4" class="fwhite"/>
  <!-- White sits on an INNER radius and overlaps the green: VS0 is below VS1, and
       VFE lies well inside the green range. Drawn end-to-end they would say
       VFE = VS1, which is not what the instrument means. -->
  <path d="M 118.9 171.7 A 84 84 0 0 1 221.7 68.9" class="white" stroke-width="9" stroke-linecap="butt"/>
  <text x="136" y="171" text-anchor="middle" class="s white-t">V<tspan class="sub">S0</tspan></text>
  <text x="217" y="90" text-anchor="middle" class="s white-t">V<tspan class="sub">FE</tspan></text>
  <!-- green arc, outer -->
  <path d="M 103.4 124.1 A 100 100 0 0 1 299.5 139.6" class="green ink" stroke-width="10" stroke-linecap="butt"/>
  <text x="80" y="122" text-anchor="end" class="s green-t">V<tspan class="sub">S1</tspan></text>
  <text x="266" y="147" text-anchor="middle" class="s green-t">V<tspan class="sub">NO</tspan></text>
  <!-- yellow arc, same outer radius -->
  <path d="M 299.5 139.6 A 100 100 0 0 1 270.7 220.7" class="orange ink" stroke-width="10" stroke-linecap="butt"/>
  <!-- red radial, crossing the band as it does on the instrument -->
  <line x1="263.6" y1="213.6" x2="277.8" y2="227.8" class="red ink" stroke-width="5"/>
  <text x="291" y="245" text-anchor="middle" class="s red-t">V<tspan class="sub">NE</tspan></text>
  <!-- labels -->
  <text x="200" y="146" text-anchor="middle" class="s white-t">KNOTS</text>
  <text x="200" y="166" text-anchor="middle" class="s white-t">IAS</text>
  <g class="s">
    <text x="330" y="70">White arc — flap operating range</text>
    <text x="330" y="88" class="sb">bottom = V<tspan class="sub">S0</tspan> · top = V<tspan class="sub">FE</tspan></text>
    <text x="330" y="122" class="green-t">Green arc — normal operating</text>
    <text x="330" y="140" class="sb">bottom = V<tspan class="sub">S1</tspan> · top = V<tspan class="sub">NO</tspan></text>
    <text x="330" y="174" class="orange-t">Yellow arc — caution</text>
    <text x="330" y="192" class="sb">smooth air only</text>
    <text x="330" y="226" class="red-t">Red line — V<tspan class="sub">NE</tspan></text>
    <text x="330" y="244" class="sb">never exceed</text>
  </g>
</svg>`
},

/* ---------------------------------------------------------------- 060 Navigation */

triangle: {
  alt: 'The triangle of velocities showing the air vector, wind vector and ground vector',
  cap: 'Heading and TAS, plus the wind, gives track and groundspeed. Drift is the angle between heading and track.',
  svg: `<svg class="dg" viewBox="0 0 640 300" role="img" aria-label="Triangle of velocities">
  <defs><marker id="triangle-ar-tv" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker>
  <marker id="triangle-ar-tvb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fblue"/></marker>
  <marker id="triangle-ar-tvr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fred"/></marker></defs>
  <!-- air vector -->
  <line x1="80" y1="230" x2="420" y2="90" class="ink" marker-end="url(#triangle-ar-tv)"/>
  <text x="200" y="120" >Heading + TAS</text>
  <text x="200" y="136" class="s">the air vector</text>
  <!-- wind vector -->
  <line x1="420" y1="90" x2="500" y2="160" class="ink red" marker-end="url(#triangle-ar-tvr)"/>
  <text x="480" y="112" class="red-t">W/V</text>
  <text x="480" y="128" class="s red-t">wind, from</text>
  <!-- ground vector -->
  <line x1="80" y1="230" x2="500" y2="160" class="ink blue" marker-end="url(#triangle-ar-tvb)"/>
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
  <defs><marker id="oneinsixty-ar-16" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker></defs>
  <line x1="60" y1="90" x2="560" y2="90" class="ink dash"/>
  <text x="300" y="80" text-anchor="middle" class="s">Planned track</text>
  <line x1="60" y1="90" x2="360" y2="150" class="ink blue" marker-end="url(#oneinsixty-ar-16)"/>
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
  <defs><marker id="varmag-ar-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker></defs>
  <line x1="300" y1="230" x2="300" y2="50" class="ink" marker-end="url(#varmag-ar-vm)"/>
  <text x="300" y="38" text-anchor="middle" class="b">True N</text>
  <line x1="300" y1="230" x2="248" y2="58" class="ink blue" marker-end="url(#varmag-ar-vm)"/>
  <text x="228" y="46" text-anchor="middle" class="b blue">Magnetic N</text>
  <line x1="300" y1="230" x2="218" y2="78" class="ink red" marker-end="url(#varmag-ar-vm)"/>
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
  <defs><marker id="fourstroke-ar-fs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
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
  <line x1="140" y1="110" x2="172" y2="110" class="ink" marker-end="url(#fourstroke-ar-fs)"/>
  <line x1="290" y1="110" x2="322" y2="110" class="ink" marker-end="url(#fourstroke-ar-fs)"/>
  <line x1="440" y1="110" x2="472" y2="110" class="ink" marker-end="url(#fourstroke-ar-fs)"/>
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
  <defs><marker id="circuit-ar-ci" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fblue"/></marker></defs>
  <!-- runway -->
  <rect x="250" y="120" width="150" height="20" class="ink" transform="rotate(0 325 130)"/>
  <text x="325" y="134" text-anchor="middle" class="s" fill="none"></text>
  <!-- circuit -->
  <path d="M400 130 H500" class="ink blue" marker-end="url(#circuit-ar-ci)"/>
  <text x="450" y="118" text-anchor="middle" class="blue-t">Upwind</text>
  <path d="M500 130 V220" class="ink blue" marker-end="url(#circuit-ar-ci)"/>
  <text x="512" y="180" class="blue-t">Crosswind</text>
  <path d="M500 220 H180" class="ink blue" marker-end="url(#circuit-ar-ci)"/>
  <text x="340" y="240" text-anchor="middle" class="blue-t">Downwind</text>
  <path d="M180 220 V160" class="ink blue" marker-end="url(#circuit-ar-ci)"/>
  <text x="118" y="196" class="blue-t">Base</text>
  <path d="M180 160 H250" class="ink blue" marker-end="url(#circuit-ar-ci)"/>
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
  cap: 'Magnetic track, not heading, picks the level: tracks 000°–179° take the odd thousands, 180°–359° the even ones, with IFR on the plain thousand and VFR 500 ft above it. It bites only in level cruise above 3000 ft from the ground or water, and in the UK the VFR levels are advisory rather than mandatory.',
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

  <text x="340" y="90" class="b">In level cruise, above 3000 ft</text>
  <text x="340" y="106" class="s">above the ground or water</text>

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
  cap: 'ALT is the normal selection: it adds Mode C, which reports pressure altitude referenced to 1013 hPa whatever the subscale is set to. The three codes in red you select yourself without being asked. The two conspicuity codes split on <em>flight rules</em>, not on whether you have a service: 7000 if you are VFR and have had no code assigned, 2000 if you are IFR and have had none. Both mean the same thing — nobody has given you a discrete code.',
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
  <text x="452" y="188" class="s">VFR, no code assigned</text>
  <text x="398" y="212" class="b">7004</text>
  <text x="452" y="212" class="s">Aerobatics and display</text>
  <text x="398" y="236" class="b">2000</text>
  <text x="452" y="236" class="s">IFR, no code assigned</text>
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

  <text x="14" y="24" class="b">Inside the carburettor</text>
  <text x="420" y="24" class="b">When ice is likely</text>

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
  cap: 'The ammeter sits in the battery lead, so it reads the battery and not the loads: needle to +, the alternator is carrying everything and charging the battery; needle to − with the low volts light, the battery alone is feeding the bus — the alternator has failed, so shed non-essential loads and land. The alternator\'s own field is excited from the bus through the ALT half of the master, which is why the magnetos, wired to none of it, are the one thing that keeps running. Know which instrument your aeroplane has: this centre-zero <b>ammeter</b> reads battery charge or discharge and swings negative when the alternator quits, whereas a <b>loadmeter</b> sits in the alternator lead, reads only what the alternator is producing, and answers the same failure by dropping to zero — it never reads negative at all.',
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

minheights: {
  alt: 'Three side-by-side cross-sections on one ground line: an aeroplane 500 ft above a radio mast in open country, 1000 ft above a tall chimney over town rooftops, and at night 1000 ft or 2000 ft above a hill summit, with orange bars beneath showing the 500 ft, 600 m and 8 km radii drawn to one scale.',
  cap: 'The three minimum-height rules on one ground line and one vertical scale; each dashed line is the lowest height permitted. Open country by day: 500 ft above the ground, or 500 ft above the highest obstacle within 500 ft of you — so the floor steps up over the mast. Congested area by day: 1000 ft above the highest obstacle within 600 m, measured from the chimney top, never from the ground. Night: 1000 ft above the highest obstacle within 8 km, or 2000 ft over high terrain or in mountainous areas — the hill sets your floor even over the flat ground beside it. The orange radius bars share one scale: 600 m is nearly four times 500 ft, and 8 km is more than fifty times it, far beyond the page.',
  svg: `<svg class="dg" viewBox="0 0 640 302" role="img" aria-label="The 500 ft, 1000 ft and night minimum-height rules drawn side by side on one ground line, with their 500 ft, 600 m and 8 km radii as orange bars to a common scale">
  <defs><marker id="minheights-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker></defs>

  <!-- panel headings -->
  <text x="12" y="22" class="b">Open country, by day</text>
  <text x="12" y="41" class="s">above ground or obstacle</text>
  <text x="226" y="22" class="b">Congested area, by day</text>
  <text x="226" y="41" class="s">above the highest obstacle</text>
  <text x="440" y="22" class="b">At night</text>
  <text x="440" y="41" class="s">above the highest obstacle</text>

  <!-- panel separators (sky only) and common ground line -->
  <line x1="214" y1="8" x2="214" y2="236" class="thin"/>
  <line x1="428" y1="8" x2="428" y2="236" class="thin"/>
  <line x1="0" y1="236" x2="496" y2="236" class="ink"/>

  <!-- ===== Panel 1: open country, 500 ft rule ===== -->
  <!-- radio mast -->
  <path d="M129 236 L135 206 L141 236" class="ink"/>
  <line x1="133" y1="216" x2="137" y2="216" class="ink"/>
  <line x1="131" y1="226" x2="139" y2="226" class="ink"/>
  <!-- minimum-height floor: 500 ft agl, stepping up to 500 ft above the mast within 500 ft of it -->
  <path d="M12 200 H115" class="ink dash"/>
  <path d="M115 170 H155" class="ink dash"/>
  <path d="M155 200 H206" class="ink dash"/>
  <!-- 500 ft from the ground -->
  <line x1="60" y1="236" x2="60" y2="200" class="ink" marker-end="url(#minheights-ar)"/>
  <text x="66" y="222">500 ft</text>
  <!-- 500 ft from the mast top -->
  <line x1="135" y1="206" x2="143" y2="206" class="thin"/>
  <line x1="143" y1="206" x2="143" y2="170" class="ink" marker-end="url(#minheights-ar)"/>
  <text x="149" y="192">500 ft</text>
  <!-- aeroplane on the raised floor -->
  <g transform="translate(135 163)">
    <path d="M-12 0 L-11 -3 L6 -3 L12 -1 L12 1 L6 2.5 L-11 2.5 Z M-11 -3 L-8 -9 L-5 -9 L-6 -3 Z M-2 2.5 L4 2.5 L2 5 L-4 5 Z M-12 -1 L-15 -1.5 L-14 0 Z" class="fill"/>
  </g>
  <!-- radius bar: 500 ft either side -->
  <line x1="115" y1="266" x2="155" y2="266" class="orange ink"/>
  <line x1="115" y1="261" x2="115" y2="271" class="orange ink"/>
  <line x1="155" y1="261" x2="155" y2="271" class="orange ink"/>
  <line x1="135" y1="263" x2="135" y2="269" class="orange ink"/>
  <text x="135" y="288" text-anchor="middle" class="orange-t">radius 500 ft</text>

  <!-- ===== Panel 2: congested area, 1000 ft rule ===== -->
  <!-- rooftops and one tall chimney -->
  <path d="M228 236 V229 L235 222 L242 229 L249 222 L256 229 L263 222 L270 229 L277 222 L284 229 L291 222 L298 229 L305 222 L312 229 V236" class="ink"/>
  <rect x="316" y="206" width="10" height="30" class="ink"/>
  <path d="M348 236 V229 L355 222 L362 229 L369 222 L376 229 L383 222 L390 229 L397 222 L404 229 L411 222 L418 229 V236" class="ink"/>
  <!-- floor: 1000 ft above the chimney top -->
  <path d="M224 134 H418" class="ink dash"/>
  <!-- 1000 ft arrow, foot on the chimney top -->
  <line x1="326" y1="206" x2="340" y2="206" class="thin"/>
  <line x1="340" y1="206" x2="340" y2="134" class="ink" marker-end="url(#minheights-ar)"/>
  <text x="346" y="174">1000 ft</text>
  <!-- construction line to the ground: the wrong datum -->
  <line x1="340" y1="206" x2="340" y2="236" class="thin"/>
  <line x1="336.5" y1="232.5" x2="343.5" y2="239.5" class="ink"/>
  <line x1="336.5" y1="239.5" x2="343.5" y2="232.5" class="ink"/>
  <text x="330" y="254" text-anchor="end" class="s">not from here</text>
  <!-- aeroplane -->
  <g transform="translate(321 127)">
    <path d="M-12 0 L-11 -3 L6 -3 L12 -1 L12 1 L6 2.5 L-11 2.5 Z M-11 -3 L-8 -9 L-5 -9 L-6 -3 Z M-2 2.5 L4 2.5 L2 5 L-4 5 Z M-12 -1 L-15 -1.5 L-14 0 Z" class="fill"/>
  </g>
  <!-- radius bar: 600 m either side, same scale as panel 1 -->
  <line x1="242.3" y1="266" x2="399.7" y2="266" class="orange ink"/>
  <line x1="242.3" y1="261" x2="242.3" y2="271" class="orange ink"/>
  <line x1="399.7" y1="261" x2="399.7" y2="271" class="orange ink"/>
  <line x1="321" y1="263" x2="321" y2="269" class="orange ink"/>
  <text x="321" y="288" text-anchor="middle" class="orange-t">radius 600 m</text>

  <!-- ===== Panel 3: night ===== -->
  <!-- terrain: lowland then a hill -->
  <path d="M496 236 L536 228 L566 212 L590 200 L608 212 L626 222 L640 226" class="ink"/>
  <!-- two floors, both measured from the summit (highest obstacle within 8 km) -->
  <path d="M436 128 H632" class="ink dash"/>
  <path d="M436 56 H632" class="ink dash"/>
  <line x1="590" y1="200" x2="590" y2="128" class="ink" marker-end="url(#minheights-ar)"/>
  <text x="584" y="164" text-anchor="end">1000 ft</text>
  <text x="584" y="183" text-anchor="end" class="s">elsewhere</text>
  <line x1="590" y1="200" x2="604" y2="200" class="thin"/>
  <line x1="604" y1="200" x2="604" y2="56" class="ink" marker-end="url(#minheights-ar)"/>
  <text x="596" y="74" text-anchor="end">2000 ft</text>
  <text x="596" y="93" text-anchor="end" class="s">high terrain</text>
  <text x="596" y="112" text-anchor="end" class="s">or mountainous</text>
  <!-- aeroplane over the flat ground, on the 1000 ft floor -->
  <g transform="translate(470 121)">
    <path d="M-12 0 L-11 -3 L6 -3 L12 -1 L12 1 L6 2.5 L-11 2.5 Z M-11 -3 L-8 -9 L-5 -9 L-6 -3 Z M-2 2.5 L4 2.5 L2 5 L-4 5 Z M-12 -1 L-15 -1.5 L-14 0 Z" class="fill"/>
  </g>
  <line x1="470" y1="128" x2="470" y2="261" class="thin dash"/>
  <!-- radius bar: 8 km either side, same scale, runs off both edges -->
  <line x1="426" y1="266" x2="632" y2="266" class="orange ink"/>
  <path d="M426 261 L420 266 L426 271" class="orange ink"/>
  <path d="M632 261 L638 266 L632 271" class="orange ink"/>
  <line x1="470" y1="263" x2="470" y2="269" class="orange ink"/>
  <text x="470" y="288" text-anchor="middle" class="orange-t">radius 8 km</text>
</svg>`
},

icaoFlightPlan: {
  alt: 'The ICAO flight plan form drawn flat as a grid of boxes in their real positions — item 7 aircraft identification and item 8 flight rules on the top row, then item 9 number, type and wake category with item 10 equipment, item 13 departure aerodrome and off-block time, item 15 cruising speed, level and route, item 16 destination, total EET and alternates, item 18 other information, and at the foot a highlighted item 19 supplementary block holding endurance, persons on board, emergency and survival equipment, aircraft colour and the commander\'s name, with an arrow noting that this block stays with the unit you filed it through.',
  cap: 'Where everything actually goes on the form, with sample entries. Exam questions ask which item holds what, and the answer is nearly always item 19 — endurance, persons on board, survival equipment, colour and markings, the commander\'s name. Items 7 to 18 are transmitted as the flight plan message; item 19 is not, which is exactly why it must be true. Two more that get asked: the time in item 13 is off-blocks, while the total EET in item 16 runs from take-off to overhead the destination, and item 15 takes the letters VFR in place of a level if you are not planning a set one.',
  svg: `<svg class="dg" viewBox="0 0 640 430" role="img" aria-label="The ICAO flight plan form drawn as it appears on paper, items 7 to 19 in their real positions, with item 19 highlighted as the box that is not transmitted">
  <defs>
    <marker id="icaoFlightPlan-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" class="fblue"/>
    </marker>
  </defs>

  <text x="14" y="18" class="b">The ICAO flight plan form (UK: CA48)</text>
  <text x="626" y="18" text-anchor="end" class="s">all clock times UTC, four figures</text>

  <rect x="14" y="26" width="612" height="358" class="ink"/>
  <line x1="14" y1="66" x2="626" y2="66" class="ink"/>
  <line x1="14" y1="106" x2="626" y2="106" class="ink"/>
  <line x1="14" y1="144" x2="626" y2="144" class="ink"/>
  <line x1="14" y1="198" x2="626" y2="198" class="ink"/>
  <line x1="14" y1="252" x2="626" y2="252" class="ink"/>
  <line x1="14" y1="292" x2="626" y2="292" class="ink"/>
  <line x1="300" y1="26" x2="300" y2="106" class="ink"/>
  <line x1="180" y1="144" x2="180" y2="198" class="ink"/>
  <line x1="300" y1="144" x2="300" y2="252" class="ink"/>
  <line x1="470" y1="198" x2="470" y2="252" class="ink"/>
  <line x1="310" y1="190" x2="616" y2="190" class="thin"/>

  <text x="24" y="46" class="b">7</text>
  <text x="40" y="46">Aircraft identification</text>
  <text x="40" y="60" class="s">GABCD, no hyphen, 7 characters</text>
  <text x="310" y="46" class="b">8</text>
  <text x="326" y="46">Flight rules and type of flight</text>
  <text x="326" y="60" class="s">V = VFR throughout</text>
  <text x="470" y="60" class="s">G = general aviation</text>

  <text x="24" y="86" class="b">9</text>
  <text x="40" y="86">Number, type, wake category</text>
  <text x="40" y="100" class="s">C172 / L</text>
  <text x="120" y="100" class="s">L = 7,000 kg or less</text>
  <text x="310" y="86" class="b">10</text>
  <text x="332" y="86">Equipment and surveillance</text>
  <text x="332" y="100" class="s">SG/S</text>
  <text x="390" y="100" class="s">standard plus GNSS / Mode S</text>

  <text x="24" y="124" class="b">13</text>
  <text x="46" y="124">Departure aerodrome and EOBT</text>
  <text x="46" y="138" class="s">EGBJ 1315, estimated off-block time</text>

  <text x="24" y="164" class="b">15</text>
  <text x="46" y="164">Cruising speed</text>
  <text x="46" y="180" class="s">N0100 = 100 kt TAS</text>
  <text x="190" y="164">Level</text>
  <text x="190" y="180" class="s">A045 = 4,500 ft</text>
  <text x="310" y="164">Route</text>
  <text x="310" y="180" class="s">waypoints, DCT between them</text>

  <text x="24" y="218" class="b">16</text>
  <text x="46" y="218">Destination</text>
  <text x="46" y="234" class="s">EGBO</text>
  <text x="392" y="218">0045</text>
  <text x="310" y="218">Total EET</text>
  <text x="310" y="237" class="s">take-off to overhead</text>
  <text x="480" y="218">Alternate(s)</text>
  <text x="480" y="234" class="s">EGBJ, up to two</text>

  <text x="24" y="271" class="b">18</text>
  <text x="46" y="271">Other information</text>
  <text x="46" y="285" class="s">0 if none, or DOF/ for the date, RMK/ for the rest</text>

  <rect x="14" y="292" width="612" height="92" class="fblue" opacity=".09"/>
  <rect x="14" y="292" width="612" height="92" class="blue ink"/>
  <text x="24" y="312" class="b blue-t">19</text>
  <text x="46" y="312" class="b blue-t">Supplementary information</text>
  <text x="250" y="312" class="s blue-t">not transmitted with the flight plan</text>
  <text x="24" y="336">E/ Endurance</text>
  <text x="210" y="336">0330</text>
  <text x="24" y="354">P/ Persons on board</text>
  <text x="210" y="354">3</text>
  <text x="24" y="372">A/ Aircraft colour and markings</text>
  <text x="330" y="336">R/ Emergency radio</text>
  <text x="330" y="354">S/ J/ D/ Survival, jackets, dinghies</text>
  <text x="330" y="372">C/ Pilot in command's name</text>

  <line x1="44" y1="414" x2="44" y2="390" class="blue ink" marker-end="url(#icaoFlightPlan-ar)"/>
  <text x="58" y="402" class="blue-t">Stays with the unit you filed it through</text>
  <text x="58" y="418" class="s">produced only if you go missing, so endurance and persons on board must be true</text>
</svg>`
},

cgEnvelope: {
  alt: 'A loading chart with total mass in kilograms up the left axis and CG position in metres aft of datum along the bottom; the envelope is a kinked polygon with a horizontal maximum take-off mass ceiling, a vertical aft limit and a forward limit that slopes aft as mass rises, and it carries a take-off point just under MTOM joined by an arrow to a lower, slightly more forward landing point, plus a third point sitting outside the aft limit.',
  cap: 'The POH envelope is not a rectangle: the forward limit moves aft as mass rises, so a CG of 2.20 m is legal at 900 kg and illegal at MTOM. Plot take-off and landing as two separate points — burning 120 kg of trip fuel from a tank arm aft of the CG drops the point down the chart and walks it forward. The rejected point is well under MTOM yet outside the aft limit: mass and balance are two checks, not one.',
  svg: `<svg class="dg" viewBox="0 0 640 358" role="img" aria-label="Centre of gravity envelope from a POH loading chart, with a take-off point, a landing point after fuel burn, and a rejected point outside the aft limit">
  <defs>
    <marker id="cgEnvelope-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" class="fblue"/>
    </marker>
  </defs>

  <path d="M104.5 302 L104.5 172 L215 67 L368 67 L368 302 Z" class="tint"/>
  <path d="M96 67 H215" class="thin dash"/>
  <path d="M104.5 302 L104.5 172 L215 67 L368 67 L368 302" class="ink"/>

  <path d="M96 62 V302 H444" class="ink"/>
  <g class="ink">
    <path d="M96 302 V307"/><path d="M181 302 V307"/><path d="M266 302 V307"/><path d="M351 302 V307"/><path d="M436 302 V307"/>
    <path d="M90 302 H96"/><path d="M90 250 H96"/><path d="M90 198 H96"/><path d="M90 145 H96"/><path d="M90 93 H96"/>
  </g>
  <g class="thin">
    <path d="M138.5 302 V305"/><path d="M223.5 302 V305"/><path d="M308.5 302 V305"/><path d="M393.5 302 V305"/>
    <path d="M92.5 276 H96"/><path d="M92.5 224 H96"/><path d="M92.5 172 H96"/><path d="M92.5 119 H96"/>
  </g>

  <text x="96" y="324" text-anchor="middle" class="s">2.10</text>
  <text x="181" y="324" text-anchor="middle" class="s">2.20</text>
  <text x="266" y="324" text-anchor="middle" class="s">2.30</text>
  <text x="351" y="324" text-anchor="middle" class="s">2.40</text>
  <text x="436" y="324" text-anchor="middle" class="s">2.50</text>
  <text x="266" y="344" text-anchor="middle" class="s">CG position — metres aft of datum</text>

  <text x="84" y="306" text-anchor="end" class="s">600</text>
  <text x="84" y="254" text-anchor="end" class="s">700</text>
  <text x="84" y="202" text-anchor="end" class="s">800</text>
  <text x="84" y="149" text-anchor="end" class="s">900</text>
  <text x="84" y="97" text-anchor="end" class="s">1000</text>
  <text x="56" y="50" class="s">Total mass, kg</text>
  <text x="626" y="50" text-anchor="end" class="s">illustrative figures — use your own POH</text>

  <text x="291" y="54" text-anchor="middle" class="b">MTOM 1050 kg</text>
  <text x="101" y="100">fwd limit</text>
  <text x="101" y="118" class="s">slopes aft</text>
  <text x="374" y="226">aft limit</text>
  <text x="374" y="244" class="s">2.42 m</text>

  <path d="M300 85 V178" class="thin dash"/>
  <path d="M275 147 V178" class="thin dash"/>
  <path d="M300 178 H278" class="blue ink" marker-end="url(#cgEnvelope-ar)"/>
  <text x="288" y="198" text-anchor="middle" class="s">CG moves forward</text>
  <text x="288" y="216" text-anchor="middle" class="s">tank arm aft of the CG</text>

  <path d="M297 85 L278 132" class="blue ink" marker-end="url(#cgEnvelope-ar)"/>
  <text x="274" y="104" text-anchor="end" class="s">burn 120 kg</text>
  <text x="274" y="122" text-anchor="end" class="s">trip fuel</text>

  <circle cx="300" cy="78" r="4.5" class="fblue"/>
  <text x="310" y="86" class="s">take-off</text>
  <text x="310" y="104" class="s">1030 kg</text>

  <circle cx="275" cy="140" r="4.5" class="fblue"/>
  <text x="265" y="158" text-anchor="end" class="s">landing 910 kg</text>

  <circle cx="402" cy="172" r="6" class="blue ink"/>
  <path d="M397.8 167.8 L406.2 176.2 M406.2 167.8 L397.8 176.2" class="blue ink"/>
  <path d="M409 172 H446" class="thin"/>
  <text x="452" y="162" class="s">850 kg at 2.46 m</text>
  <text x="452" y="182" class="blue-t">legal mass,</text>
  <text x="452" y="200" class="blue-t">illegal balance</text>
</svg>`
},

partialPressure: {
  alt: 'Four columns drawn in proportion to ambient pressure at sea level, 10,000 ft, 18,000 ft and 25,000 ft, each with the bottom 21% shaded to show oxygen; the shaded proportion is identical in all four but its size falls from 212 hPa to 79 hPa, and a dashed line marks 18,000 ft as half the sea-level pressure.',
  cap: 'The shaded fraction is the same in all four columns — air is 21% oxygen at every level. What shrinks is the column itself: ambient pressure is halved by 18,000 ft, and with it the oxygen partial pressure that drives oxygen across the lung membranes, from about 212 hPa at sea level to 106 hPa.',
  svg: `<svg class="dg" viewBox="0 0 640 330" role="img" aria-label="Four columns drawn to ambient pressure at sea level, 10,000 feet, 18,000 feet and 25,000 feet, each with the same 21 per cent oxygen slice shaded at its base">
  <rect x="14" y="23" width="15" height="12" class="fblue"/>
  <text x="37" y="33" class="blue-t">O2, 21% at every level</text>
  <text x="215" y="33" class="s">Column height = ambient pressure</text>

  <line x1="30" y1="296" x2="614" y2="296" class="ink"/>

  <rect x="64" y="247.7" width="64" height="48.3" class="fblue"/>
  <rect x="184" y="262.8" width="64" height="33.2" class="fblue"/>
  <rect x="304" y="271.9" width="64" height="24.1" class="fblue"/>
  <rect x="424" y="278.1" width="64" height="17.9" class="fblue"/>

  <rect x="64" y="66" width="64" height="230" class="ink"/>
  <rect x="184" y="137.8" width="64" height="158.2" class="ink"/>
  <rect x="304" y="181.1" width="64" height="114.9" class="ink"/>
  <rect x="424" y="210.6" width="64" height="85.4" class="ink"/>

  <line x1="128" y1="247.7" x2="184" y2="262.8" class="blue ink dash"/>
  <line x1="248" y1="262.8" x2="304" y2="271.9" class="blue ink dash"/>
  <line x1="368" y1="271.9" x2="424" y2="278.1" class="blue ink dash"/>

  <line x1="44" y1="181.1" x2="304" y2="181.1" class="ink dash"/>
  <line x1="368" y1="181.1" x2="496" y2="181.1" class="ink dash"/>
  <text x="502" y="176">Half sea-level</text>
  <text x="502" y="194" class="s">pressure, 18,000 ft</text>

  <text x="96" y="56" text-anchor="middle">1013 hPa</text>
  <text x="216" y="128" text-anchor="middle">697 hPa</text>
  <text x="336" y="170" text-anchor="middle">506 hPa</text>
  <text x="456" y="201" text-anchor="middle">376 hPa</text>

  <text x="96" y="238" text-anchor="middle" class="blue-t">212 hPa</text>
  <text x="216" y="253" text-anchor="middle" class="blue-t">146 hPa</text>
  <text x="336" y="262" text-anchor="middle" class="blue-t">106 hPa</text>
  <text x="456" y="268" text-anchor="middle" class="blue-t">79 hPa</text>

  <text x="96" y="316" text-anchor="middle">Sea level</text>
  <text x="216" y="316" text-anchor="middle">10,000 ft</text>
  <text x="336" y="316" text-anchor="middle">18,000 ft</text>
  <text x="456" y="316" text-anchor="middle">25,000 ft</text>
</svg>`
},

fuelBreakdown: {
  alt: 'A tall column standing for the tank contents, divided from the bottom up into a hatched final reserve, then alternate, contingency, trip, taxi and extra on top; a bracket down the left spans everything except extra, a dashed arrow runs from the contingency band up into the trip band, and a line across the top of the reserve marks the level at which you should already be on the ground.',
  cap: 'Fuel is a stack, not a list. Contingency is a percentage of the trip band above it, and everything except the extra on top has to be aboard before you may depart. The hatched final reserve — 30 minutes by day VFR, 45 minutes at night or IFR — is not fuel you may plan to use: the top of it is the level at which you should already be on the ground. Band depths are schematic, not to scale.',
  svg: `<svg class="dg" viewBox="0 0 640 424" role="img" aria-label="A single fuel column divided from the bottom up into final reserve, alternate, contingency, trip and taxi with extra on top, a bracket marking everything below extra as the minimum required to depart, and a tie-line showing contingency is a percentage of trip">
  <defs>
    <marker id="fuelBreakdown-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" class="fill"/>
    </marker>
  </defs>
  <rect x="210" y="28" width="150" height="350" class="tint"/>
  <rect x="210" y="278" width="150" height="100" class="fred" opacity=".12"/>
  <line x1="210" y1="294" x2="226" y2="278" class="red ink" opacity=".3"/>
  <line x1="210" y1="310" x2="242" y2="278" class="red ink" opacity=".3"/>
  <line x1="210" y1="326" x2="258" y2="278" class="red ink" opacity=".3"/>
  <line x1="210" y1="342" x2="274" y2="278" class="red ink" opacity=".3"/>
  <line x1="210" y1="358" x2="290" y2="278" class="red ink" opacity=".3"/>
  <line x1="210" y1="374" x2="306" y2="278" class="red ink" opacity=".3"/>
  <line x1="222" y1="378" x2="322" y2="278" class="red ink" opacity=".3"/>
  <line x1="238" y1="378" x2="338" y2="278" class="red ink" opacity=".3"/>
  <line x1="254" y1="378" x2="354" y2="278" class="red ink" opacity=".3"/>
  <line x1="270" y1="378" x2="360" y2="288" class="red ink" opacity=".3"/>
  <line x1="286" y1="378" x2="360" y2="304" class="red ink" opacity=".3"/>
  <line x1="302" y1="378" x2="360" y2="320" class="red ink" opacity=".3"/>
  <line x1="318" y1="378" x2="360" y2="336" class="red ink" opacity=".3"/>
  <line x1="334" y1="378" x2="360" y2="352" class="red ink" opacity=".3"/>
  <line x1="350" y1="378" x2="360" y2="368" class="red ink" opacity=".3"/>
  <rect x="210" y="28" width="150" height="350" class="ink"/>
  <line x1="210" y1="76" x2="360" y2="76" class="ink"/>
  <line x1="210" y1="98" x2="360" y2="98" class="ink"/>
  <line x1="210" y1="194" x2="360" y2="194" class="ink"/>
  <line x1="210" y1="236" x2="360" y2="236" class="ink"/>
  <rect x="210" y="278" width="150" height="100" class="red ink"/>
  <line x1="190" y1="278" x2="580" y2="278" class="red ink"/>
  <path d="M196 76 L170 76 L170 378 L196 378" class="ink"/>
  <text x="158" y="207" text-anchor="end" class="s">minimum required</text>
  <text x="158" y="227" text-anchor="end" class="s">before you may depart</text>
  <text x="158" y="247" text-anchor="end">NCO.OP.125</text>
  <path d="M336 218 L390 218 L390 146 L336 146" class="ink dash" opacity=".6" marker-end="url(#fuelBreakdown-arrow)"/>
  <text x="400" y="50">Extra</text>
  <text x="400" y="70" class="s">above the minimum — your judgement</text>
  <text x="400" y="92">Taxi</text>
  <text x="444" y="92" class="s">start-up, taxi, power checks</text>
  <text x="400" y="138">Trip</text>
  <text x="400" y="158" class="s">climb, cruise and descent</text>
  <text x="402" y="190" class="s">a percentage of trip</text>
  <text x="400" y="212">Contingency</text>
  <text x="400" y="232" class="s">a headwind worse than forecast</text>
  <text x="400" y="262">Alternate</text>
  <text x="472" y="262" class="s">plus a missed approach</text>
  <text x="400" y="298" class="s red-t">the level at which you are</text>
  <text x="400" y="318" class="s red-t">already on the ground</text>
  <text x="400" y="348" class="b red-t">Final reserve</text>
  <text x="400" y="369" class="red-t">30 min day VFR</text>
  <text x="400" y="389" class="red-t">45 min night or IFR</text>
  <text x="400" y="410" class="s red-t">planned to be burned: never</text>
</svg>`
},

toPerfChart: {
  alt: 'A four-panel take-off distance chart — temperature with a fan of pressure-altitude curves, then mass, wind component and screen height — with a single traced path entering at minus 5 degrees Celsius, rising to the 2000 ft curve, stepping down the mass guidelines to 1000 kg and the wind guidelines to 10 kt of headwind, then up the obstacle guidelines to 50 ft and out to about 530 metres on the right-hand distance axis.',
  cap: 'How a POH chart is actually read: enter at the OAT, go up to your pressure-altitude curve, then in each panel run across to the reference line and follow the shape of the guidelines — never the reference line itself — down to mass, down to headwind, up to the 50 ft screen. The 530 m that falls out is the unfactored distance; the safety factor of ×1.33 for take-off, and any grass, slope or tailwind corrections, are applied to it afterwards. Figures here are illustrative — use the POH for the aeroplane you are flying.',
  svg: `<svg class="dg" viewBox="0 0 640 336" role="img" aria-label="A four-panel POH take-off distance chart with the worked path traced across temperature, pressure altitude, mass, wind component and screen height to a distance on the right-hand axis">
  <rect x="84" y="66" width="474" height="186" class="tint"/>
  <text x="84" y="30" class="b">Take-off distance to 50 ft</text>
  <text x="630" y="30" text-anchor="end" class="s">illustrative figures</text>
  <text x="218" y="48" class="s">reference line</text>
  <line x1="224" y1="55" x2="224" y2="66" class="thin"/>
  <text x="462" y="48" class="s">ground roll</text>
  <line x1="472" y1="55" x2="472" y2="66" class="thin"/>
  <line x1="84" y1="66" x2="558" y2="66" class="thin"/>
  <line x1="210" y1="66" x2="210" y2="252" class="thin"/>
  <line x1="322" y1="66" x2="322" y2="252" class="thin"/>
  <line x1="460" y1="66" x2="460" y2="252" class="thin"/>
  <line x1="84" y1="66" x2="84" y2="252" class="ink"/>
  <line x1="558" y1="66" x2="558" y2="252" class="ink"/>
  <line x1="84" y1="252" x2="558" y2="252" class="ink"/>
  <path d="M84 226 Q147 215 210 200" class="thin"/>
  <path d="M84 196 Q147 185 210 170" class="ink"/>
  <path d="M84 166 Q147 155 210 140" class="thin"/>
  <path d="M84 136 Q147 125 210 110" class="thin"/>
  <text x="78" y="230" text-anchor="end" class="s">SL</text>
  <text x="78" y="200" text-anchor="end" class="s blue-t">2000 ft</text>
  <text x="78" y="170" text-anchor="end" class="s">4000 ft</text>
  <text x="78" y="140" text-anchor="end" class="s">6000 ft</text>
  <circle cx="16" cy="195.5" r="9" class="ink blue"/>
  <text x="16" y="200" text-anchor="middle" class="s blue-t">2</text>
  <text x="90" y="96" class="s">pressure altitude</text>
  <line x1="224" y1="66" x2="224" y2="252" class="ink dash"/>
  <path d="M224 145 L322 187" class="thin"/>
  <path d="M224 175 L322 217" class="thin"/>
  <path d="M224 205 L322 247" class="thin"/>
  <line x1="382" y1="66" x2="382" y2="252" class="ink dash"/>
  <path d="M322 90 L382 150 L460 189" class="thin"/>
  <path d="M322 130 L382 190 L460 229" class="thin"/>
  <path d="M322 175 L382 235 L412 250" class="thin"/>
  <text x="326" y="86" class="s">tailwind</text>
  <text x="398" y="118" class="s">headwind</text>
  <line x1="472" y1="66" x2="472" y2="252" class="ink dash"/>
  <path d="M472 162 Q509 139 546 93" class="thin"/>
  <path d="M472 202 Q509 179 546 133" class="thin"/>
  <path d="M472 242 Q509 219 546 173" class="thin"/>
  <g class="thin">
    <line x1="84" y1="252" x2="84" y2="257"/><line x1="109.2" y1="252" x2="109.2" y2="257"/>
    <line x1="134.4" y1="252" x2="134.4" y2="257"/><line x1="159.6" y1="252" x2="159.6" y2="257"/>
    <line x1="184.8" y1="252" x2="184.8" y2="257"/><line x1="210" y1="252" x2="210" y2="257"/>
    <line x1="224" y1="252" x2="224" y2="257"/><line x1="308" y1="252" x2="308" y2="257"/>
    <line x1="352" y1="252" x2="352" y2="257"/><line x1="367" y1="252" x2="367" y2="257"/>
    <line x1="382" y1="252" x2="382" y2="257"/><line x1="442" y1="252" x2="442" y2="257"/>
    <line x1="472" y1="252" x2="472" y2="257"/><line x1="509" y1="252" x2="509" y2="257"/>
    <line x1="558" y1="102" x2="561" y2="102"/><line x1="558" y1="162" x2="561" y2="162"/>
    <line x1="558" y1="222" x2="561" y2="222"/>
  </g>
  <g class="ink">
    <line x1="558" y1="72" x2="564" y2="72"/><line x1="558" y1="132" x2="564" y2="132"/>
    <line x1="558" y1="192" x2="564" y2="192"/><line x1="558" y1="252" x2="564" y2="252"/>
  </g>
  <text x="568" y="76.5" class="s">800 m</text>
  <text x="568" y="136.5" class="s">600 m</text>
  <text x="568" y="196.5" class="s">400 m</text>
  <text x="568" y="256.5" class="s">200 m</text>
  <path d="M266 207 L266 257" class="ink blue dash" opacity=".55"/>
  <path d="M412 222 L412 257" class="ink blue dash" opacity=".55"/>
  <path d="M546 153 L546 257" class="ink blue dash" opacity=".55"/>
  <path d="M122 257 L122 189 L224 189 L266 207 L382 207 L412 222 L472 222 Q509 199 556 153" class="ink blue"/>
  <path d="M556 148 L566 153 L556 158 Z" class="fblue"/>
  <text x="572" y="157.5" class="s blue-t">≈ 530 m</text>
  <g class="s">
    <text x="84" y="275" text-anchor="middle">−20</text>
    <text x="134.4" y="275" text-anchor="middle">0</text>
    <text x="159.6" y="275" text-anchor="middle">10</text>
    <text x="184.8" y="275" text-anchor="middle">20</text>
    <text x="224" y="275" text-anchor="middle">1100</text>
    <text x="308" y="275" text-anchor="middle">900</text>
    <text x="352" y="275" text-anchor="middle">10</text>
    <text x="382" y="275" text-anchor="middle">0</text>
    <text x="442" y="275" text-anchor="middle">20</text>
    <text x="472" y="275" text-anchor="middle">0</text>
    <text x="546" y="275" text-anchor="middle">50</text>
  </g>
  <circle cx="103" cy="291.5" r="9" class="ink blue"/>
  <text x="103" y="296" text-anchor="middle" class="s blue-t">1</text>
  <text x="118" y="296" class="s blue-t">−5 °C</text>
  <circle cx="240" cy="291.5" r="9" class="ink blue"/>
  <text x="240" y="296" text-anchor="middle" class="s blue-t">3</text>
  <text x="255" y="296" class="s blue-t">1000 kg</text>
  <circle cx="364" cy="291.5" r="9" class="ink blue"/>
  <text x="364" y="296" text-anchor="middle" class="s blue-t">4</text>
  <text x="379" y="296" class="s blue-t">10 kt headwind</text>
  <circle cx="527" cy="291.5" r="9" class="ink blue"/>
  <text x="527" y="296" text-anchor="middle" class="s blue-t">5</text>
  <text x="542" y="296" class="s blue-t">50 ft</text>
  <g class="s">
    <text x="147" y="318" text-anchor="middle">OAT °C</text>
    <text x="266" y="318" text-anchor="middle">Mass kg</text>
    <text x="380" y="318" text-anchor="middle">Wind component kt</text>
    <text x="509" y="318" text-anchor="middle">Screen height ft</text>
  </g>
</svg>`
},

runwayIllusion: {
  alt: 'Three columns comparing a narrow, normal-width and wide runway: the top row shows the pilot\'s-eye sight picture of each from the same point on a three degree slope, and the bottom row shows the approach profile flown under each, low and short under the narrow runway, on slope under the normal one, and high under the wide one.',
  cap: 'All three sight pictures are taken from the same point on a correct 3° slope, so only the width differs. A narrow runway fills less of the windscreen than you expect, which looks like being high — so you descend below the slope and end up short. A wide one does the reverse and leaves you high and steep. Slope behaves the same way: an upslope like a narrow runway, a downslope like a wide one.',
  svg: `<svg class="dg" viewBox="0 0 640 356" role="img" aria-label="Narrow, normal and wide runway sight pictures with the approach profile flown under each">
  <text x="320" y="14" text-anchor="middle" class="s">All three seen from the same point on a correct 3&#176; slope &#8212; only the width differs</text>

  <text x="106" y="34" text-anchor="middle" class="b">Narrow runway</text>
  <text x="320" y="34" text-anchor="middle" class="b">Normal width</text>
  <text x="534" y="34" text-anchor="middle" class="b">Wide runway</text>

  <rect x="10" y="42" width="192" height="116" class="thin"/>
  <rect x="224" y="42" width="192" height="116" class="thin"/>
  <rect x="438" y="42" width="192" height="116" class="thin"/>
  <rect x="10" y="80" width="192" height="78" class="tint"/>
  <rect x="224" y="80" width="192" height="78" class="tint"/>
  <rect x="438" y="80" width="192" height="78" class="tint"/>
  <line x1="10" y1="80" x2="202" y2="80" class="ink"/>
  <line x1="224" y1="80" x2="416" y2="80" class="ink"/>
  <line x1="438" y1="80" x2="630" y2="80" class="ink"/>
  <text x="16" y="72" class="s">horizon</text>

  <polygon points="89,152 123,152 110,92 102,92" class="tint"/>
  <polygon points="89,152 123,152 110,92 102,92" class="ink"/>
  <line x1="92" y1="152" x2="92" y2="145" class="ink"/>
  <line x1="100.5" y1="152" x2="100.5" y2="145" class="ink"/>
  <line x1="111.5" y1="152" x2="111.5" y2="145" class="ink"/>
  <line x1="120" y1="152" x2="120" y2="145" class="ink"/>

  <polygon points="290,152 350,152 327,92 313,92" class="tint"/>
  <polygon points="290,152 350,152 327,92 313,92" class="ink"/>
  <line x1="295.5" y1="152" x2="295.5" y2="145" class="ink"/>
  <line x1="310.5" y1="152" x2="310.5" y2="145" class="ink"/>
  <line x1="329.5" y1="152" x2="329.5" y2="145" class="ink"/>
  <line x1="344.5" y1="152" x2="344.5" y2="145" class="ink"/>

  <polygon points="488,152 580,152 545,92 523,92" class="tint"/>
  <polygon points="488,152 580,152 545,92 523,92" class="ink"/>
  <line x1="496" y1="152" x2="496" y2="145" class="ink"/>
  <line x1="520" y1="152" x2="520" y2="145" class="ink"/>
  <line x1="548" y1="152" x2="548" y2="145" class="ink"/>
  <line x1="572" y1="152" x2="572" y2="145" class="ink"/>

  <text x="106" y="174" text-anchor="middle" class="red-t">looks high</text>
  <text x="320" y="174" text-anchor="middle">looks right</text>
  <text x="534" y="174" text-anchor="middle" class="red-t">looks low</text>

  <line x1="160" y1="191" x2="190" y2="191" class="ink dash"/>
  <text x="196" y="195" class="s">correct 3&#176; slope</text>
  <line x1="320" y1="191" x2="350" y2="191" class="red ink"/>
  <text x="356" y="195" class="s">path actually flown</text>

  <line x1="16" y1="276" x2="128" y2="276" class="thin"/>
  <line x1="128" y1="276" x2="194" y2="276" class="ink"/>
  <line x1="128" y1="276" x2="128" y2="270" class="ink"/>
  <rect x="152" y="272" width="12" height="4" class="fill"/>
  <line x1="22" y1="214" x2="158" y2="276" class="ink dash"/>
  <polyline points="22,214 54,246 92,266 118,276" class="red ink"/>
  <circle cx="118" cy="276" r="3" class="fred"/>

  <line x1="230" y1="276" x2="342" y2="276" class="thin"/>
  <line x1="342" y1="276" x2="408" y2="276" class="ink"/>
  <line x1="342" y1="276" x2="342" y2="270" class="ink"/>
  <rect x="366" y="272" width="12" height="4" class="fill"/>
  <line x1="236" y1="214" x2="372" y2="276" class="red ink"/>
  <line x1="236" y1="214" x2="372" y2="276" class="ink dash"/>
  <circle cx="372" cy="276" r="3" class="fred"/>

  <line x1="444" y1="276" x2="556" y2="276" class="thin"/>
  <line x1="556" y1="276" x2="622" y2="276" class="ink"/>
  <line x1="556" y1="276" x2="556" y2="270" class="ink"/>
  <rect x="580" y="272" width="12" height="4" class="fill"/>
  <line x1="450" y1="214" x2="586" y2="276" class="ink dash"/>
  <polyline points="450,214 504,223 550,244 586,276" class="red ink"/>
  <circle cx="586" cy="276" r="3" class="fred"/>

  <text x="106" y="304" text-anchor="middle" class="red-t">flies low</text>
  <text x="320" y="304" text-anchor="middle" class="s">on the aiming point</text>
  <text x="534" y="304" text-anchor="middle" class="red-t">flies high</text>

  <text x="106" y="326" text-anchor="middle" class="s">an upslope does what</text>
  <text x="106" y="345" text-anchor="middle" class="s">a narrow runway does</text>
  <text x="534" y="326" text-anchor="middle" class="s">a downslope does what</text>
  <text x="534" y="345" text-anchor="middle" class="s">a wide runway does</text>
</svg>`
},

somatogravic: {
  alt: 'Two side-view panels of a level aeroplane: at steady speed a single 1 g vector points straight down from the pilot and the felt horizon lies exactly on the true horizon, while under go-around acceleration the 1 g vector and a rearward inertial vector add head-to-tail to a resultant leaning back by an angle theta, tilting the felt horizon by the same theta so the unchanged nose appears high, with a ghosted aeroplane below pushed nose-down and descending towards the ground.',
  cap: 'Steady, the only specific force on the otoliths is 1 g down, so the felt vertical is the true vertical and the attitude reads correctly. Accelerating, a rearward inertial force of size a adds to it: the resultant — the direction the body calls "down" — leans back by θ = arctan(a/g), and the felt horizon tilts by that same θ. The nose has not moved, but it now sits above the felt horizon, so a level go-around feels like a steep climb. Push to cancel that climb, as the reflex demands, and the aeroplane really does descend. Believe the instruments.',
  svg: `<svg class="dg" viewBox="0 0 640 434" role="img" aria-label="Somatogravic illusion drawn as a vector sum: gravity plus rearward inertia gives a felt vertical that leans back, tilting the felt horizon">
<defs>
<marker id="somatogravic-ah" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1 L 9 5 L 0 9 Z" class="fill"/></marker>
<marker id="somatogravic-ahr" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1 L 9 5 L 0 9 Z" class="fred"/></marker>
</defs>

<line x1="270" y1="10" x2="270" y2="254" class="thin"/>

<text x="14" y="21" class="b">Steady speed</text>
<text x="14" y="37" class="s">level, no acceleration</text>
<line x1="16" y1="104" x2="256" y2="104" class="ink"/>
<line x1="16" y1="104" x2="256" y2="104" class="red ink dash"/>
<text x="254" y="96" text-anchor="end" class="s">true horizon</text>
<text x="254" y="122" text-anchor="end" class="s red-t">felt horizon</text>
<g transform="translate(80,108)">
<path class="ink" d="M 33 2 C 33 -3 26 -7 16 -8 L 0 -9 L -14 -7 L -44 -1 L -44 3 L -26 8 L 14 8 C 26 8 32 6 33 2 Z"/>
<path class="ink" d="M -26 -5 L -41 -21 L -46 -21 L -45 -1 Z"/>
<path class="ink" d="M -40 -3 L -54 -4 L -54 -1 L -40 0 Z"/>
<path class="ink" d="M -19 -11 L 15 -11 L 13 -8.5 L -17 -8.5 Z"/>
<path class="thin" d="M -7 -9 L -17 6"/>
<path class="thin" d="M 13 -9 L 24 -2"/>
<path class="thin" d="M 34 -9 L 34 9"/>
<circle cx="4" cy="-4" r="3.2" class="fill"/>
</g>
<line x1="84" y1="104" x2="84" y2="204" class="ink" marker-end="url(#somatogravic-ah)"/>
<text x="92" y="150">1 g</text>
<text x="92" y="166" class="s">gravity</text>
<text x="136" y="224" text-anchor="middle" class="s">felt vertical = true vertical</text>
<text x="136" y="244" text-anchor="middle" class="s">attitude read correctly</text>

<text x="284" y="21" class="b">Go-around at full power</text>
<text x="284" y="37" class="s">still level, but accelerating</text>
<line x1="286" y1="104" x2="632" y2="104" class="ink"/>
<line x1="294" y1="52.6" x2="630" y2="174.9" class="red ink dash"/>
<text x="628" y="96" text-anchor="end" class="s">true horizon</text>
<text x="628" y="192" text-anchor="end" class="red-t">felt horizon</text>
<text x="628" y="209" text-anchor="end" class="s red-t">feels like a steep climb</text>
<g transform="translate(430,108)">
<path class="ink" d="M 33 2 C 33 -3 26 -7 16 -8 L 0 -9 L -14 -7 L -44 -1 L -44 3 L -26 8 L 14 8 C 26 8 32 6 33 2 Z"/>
<path class="ink" d="M -26 -5 L -41 -21 L -46 -21 L -45 -1 Z"/>
<path class="ink" d="M -40 -3 L -54 -4 L -54 -1 L -40 0 Z"/>
<path class="ink" d="M -19 -11 L 15 -11 L 13 -8.5 L -17 -8.5 Z"/>
<path class="thin" d="M -7 -9 L -17 6"/>
<path class="thin" d="M 13 -9 L 24 -2"/>
<path class="thin" d="M 34 -9 L 34 9"/>
<circle cx="4" cy="-4" r="3.2" class="fill"/>
</g>
<line x1="476" y1="88" x2="536" y2="88" class="ink" marker-end="url(#somatogravic-ah)"/>
<text x="476" y="78" class="s">acceleration a</text>
<path class="red ink" d="M 478 104 A 44 44 0 0 1 475.4 119.0"/>
<text x="498" y="119" text-anchor="middle">&#952;</text>
<line x1="434" y1="104" x2="434" y2="204" class="ink" marker-end="url(#somatogravic-ah)"/>
<text x="442" y="150">1 g</text>
<text x="442" y="166" class="s">gravity</text>
<line x1="434" y1="204" x2="397.6" y2="204" class="ink" marker-end="url(#somatogravic-ah)"/>
<text x="416" y="224" text-anchor="middle" class="s">rearward inertia, a</text>
<text x="416" y="244" text-anchor="middle" class="s">&#952; = arctan (a / g)</text>
<path class="red ink" d="M 434 150 A 46 46 0 0 1 418.3 147.2"/>
<text x="423" y="170" text-anchor="middle">&#952;</text>
<line x1="434" y1="104" x2="397.6" y2="204" class="red ink" marker-end="url(#somatogravic-ahr)"/>
<text x="404" y="160" text-anchor="end" class="red-t">felt vertical</text>
<text x="404" y="176" text-anchor="end" class="s">the resultant</text>

<line x1="8" y1="264" x2="632" y2="264" class="thin"/>
<text x="14" y="288" class="b">The reflex response</text>
<g transform="translate(120,320)" opacity=".45">
<path class="ink" d="M 33 2 C 33 -3 26 -7 16 -8 L 0 -9 L -14 -7 L -44 -1 L -44 3 L -26 8 L 14 8 C 26 8 32 6 33 2 Z"/>
<path class="ink" d="M -26 -5 L -41 -21 L -46 -21 L -45 -1 Z"/>
<path class="ink" d="M -40 -3 L -54 -4 L -54 -1 L -40 0 Z"/>
<path class="ink" d="M -19 -11 L 15 -11 L 13 -8.5 L -17 -8.5 Z"/>
<path class="thin" d="M -7 -9 L -17 6"/>
<path class="thin" d="M 13 -9 L 24 -2"/>
<path class="thin" d="M 34 -9 L 34 9"/>
</g>
<line x1="176" y1="296" x2="176" y2="316" class="ink" marker-end="url(#somatogravic-ah)"/>
<text x="184" y="306" class="s">nose-down push</text>
<text x="628" y="330" text-anchor="end" class="s">worst at night or in IMC</text>
<path class="red ink dash" d="M 160 320 C 300 320 400 336 498 366"/>
<text x="343" y="362" text-anchor="middle" class="s red-t">an actual descent</text>
<g transform="translate(551.3,383.3) rotate(17)" opacity=".45">
<path class="ink" d="M 33 2 C 33 -3 26 -7 16 -8 L 0 -9 L -14 -7 L -44 -1 L -44 3 L -26 8 L 14 8 C 26 8 32 6 33 2 Z"/>
<path class="ink" d="M -26 -5 L -41 -21 L -46 -21 L -45 -1 Z"/>
<path class="ink" d="M -40 -3 L -54 -4 L -54 -1 L -40 0 Z"/>
<path class="ink" d="M -19 -11 L 15 -11 L 13 -8.5 L -17 -8.5 Z"/>
<path class="thin" d="M -7 -9 L -17 6"/>
<path class="thin" d="M 13 -9 L 24 -2"/>
<path class="thin" d="M 34 -9 L 34 9"/>
</g>
<line x1="8" y1="410" x2="632" y2="410" class="ink"/>
<path class="thin" d="M 100 410 L 90 420 M 140 410 L 130 420 M 180 410 L 170 420 M 220 410 L 210 420 M 260 410 L 250 420 M 300 410 L 290 420 M 340 410 L 330 420 M 380 410 L 370 420 M 420 410 L 410 420 M 460 410 L 450 420 M 500 410 L 490 420 M 540 410 L 530 420 M 580 410 L 570 420 M 620 410 L 610 420"/>
<text x="14" y="426" class="s">ground</text>
</svg>`
},

sleepCycle: {
  alt: 'Two stacked panels on one time axis from 2200 to 0700: above, a hypnogram whose deep NREM troughs are largest in the first two cycles while the REM blocks grow progressively longer towards morning, with a bracket over 0500 to 0700 marking the sleep an early call removes; below, the circadian alertness and body temperature curve reaching its low across a shaded band from 0300 to 0500.',
  cap: 'Both facts on one clock. Deep NREM is front-loaded and REM back-loaded, so the hours an early call takes are mostly REM — which is why fragmented or shortened sleep leaves you unrested even when the total looks adequate. The body clock\'s low sits at 0300 to 0500 whatever time you went to bed, so an 0500 call finds you short of REM and at the bottom of the rhythm at the same time.',
  svg: `<svg class="dg" viewBox="0 0 640 362" role="img" aria-label="A hypnogram and the circadian alertness curve drawn on one shared time axis from 2200 to 0700">
  <defs>
    <marker id="sleepCycle-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" class="fill"/>
    </marker>
  </defs>

  <rect x="390" y="54" width="112" height="274" class="tint"/>

  <text x="630" y="12" text-anchor="end" class="s">cut sleep short by an early call</text>
  <text x="630" y="31" text-anchor="end" class="s">and it is mostly REM you lose</text>
  <path d="M502 46 V40 H614 V46" class="ink"/>
  <text x="6" y="40" class="b">Sleep stages</text>

  <line x1="110" y1="54" x2="110" y2="186" class="thin"/>
  <line x1="390" y1="78" x2="390" y2="148" class="thin dash"/>
  <line x1="502" y1="78" x2="502" y2="148" class="thin dash"/>

  <text x="411" y="66" text-anchor="middle" class="s">each REM episode longer than the last</text>
  <line x1="232" y1="74" x2="590" y2="74" class="ink" opacity=".55" marker-end="url(#sleepCycle-arrow)"/>

  <rect x="218.3" y="81" width="9.3" height="18" class="fblue" opacity=".34"/>
  <rect x="292.9" y="81" width="18.7" height="18" class="fblue" opacity=".34"/>
  <rect x="363.9" y="81" width="28" height="18" class="fblue" opacity=".34"/>
  <rect x="444.1" y="81" width="42" height="18" class="fblue" opacity=".34"/>
  <rect x="516" y="81" width="60.7" height="18" class="fblue" opacity=".34"/>

  <path class="ink" d="M110 64 H138 V116 H145.5 V142 H158.5 V168 H201.5 V142 H210.8 V116 H218.3 V90 H227.6 V116 H236.9 V142 H246.3 V168 H283.6 V142 H292.9 V90 H311.6 V142 H322.8 V168 H347.1 V142 H363.9 V90 H391.9 V116 H401.2 V142 H434.8 V116 H444.1 V90 H486.1 V116 H496.4 V142 H516 V90 H576.7 V116 H600 V64 H614"/>
  <path class="blue ink" d="M218.3 90 H227.6 M292.9 90 H311.6 M363.9 90 H391.9 M444.1 90 H486.1 M516 90 H576.7"/>

  <text x="102" y="68" text-anchor="end" class="s">Awake</text>
  <text x="102" y="94" text-anchor="end" class="s blue-t">REM</text>
  <text x="102" y="120" text-anchor="end" class="s">NREM 1</text>
  <text x="102" y="146" text-anchor="end" class="s">NREM 2</text>
  <text x="102" y="172" text-anchor="end" class="s">NREM 3–4</text>

  <line x1="366" y1="168" x2="352" y2="168" class="ink" opacity=".55" marker-end="url(#sleepCycle-arrow)"/>
  <text x="372" y="172" class="s">deepest NREM early in the night</text>

  <line x1="110" y1="186" x2="614" y2="186" class="ink"/>
  <line x1="110" y1="186" x2="110" y2="191" class="thin"/> <text x="110" y="207" text-anchor="middle" class="s">2200</text>
  <line x1="166" y1="186" x2="166" y2="191" class="thin"/> <text x="166" y="207" text-anchor="middle" class="s">2300</text>
  <line x1="222" y1="186" x2="222" y2="191" class="thin"/> <text x="222" y="207" text-anchor="middle" class="s">0000</text>
  <line x1="278" y1="186" x2="278" y2="191" class="thin"/> <text x="278" y="207" text-anchor="middle" class="s">0100</text>
  <line x1="334" y1="186" x2="334" y2="191" class="thin"/> <text x="334" y="207" text-anchor="middle" class="s">0200</text>
  <line x1="390" y1="186" x2="390" y2="191" class="thin"/> <text x="390" y="207" text-anchor="middle" class="s">0300</text>
  <line x1="446" y1="186" x2="446" y2="191" class="thin"/> <text x="446" y="207" text-anchor="middle" class="s">0400</text>
  <line x1="502" y1="186" x2="502" y2="191" class="thin"/> <text x="502" y="207" text-anchor="middle" class="s">0500</text>
  <line x1="558" y1="186" x2="558" y2="191" class="thin"/> <text x="558" y="207" text-anchor="middle" class="s">0600</text>
  <line x1="614" y1="186" x2="614" y2="191" class="thin"/> <text x="614" y="207" text-anchor="middle" class="s">0700</text>

  <text x="6" y="230" class="b">Body clock</text>
  <text x="120" y="230" class="s">alertness and body temperature</text>
  <line x1="110" y1="220" x2="110" y2="328" class="thin"/>
  <line x1="110" y1="328" x2="614" y2="328" class="thin"/>

  <path class="ink" d="M110 240 C119.3 241.3, 147.3 244.7, 166 248 C184.7 251.3, 203.3 255.7, 222 260 C240.7 264.3, 259.3 269.2, 278 274 C296.7 278.8, 315.3 284.5, 334 289 C352.7 293.5, 371.3 298.0, 390 301 C408.7 304.0, 427.3 306.8, 446 307 C464.7 307.2, 483.3 305.0, 502 302 C520.7 299.0, 539.3 294.3, 558 289 C576.7 283.7, 604.7 273.2, 614 270"/>

  <text x="446" y="262" text-anchor="middle" class="s">0300–0500</text>
  <text x="446" y="280" text-anchor="middle" class="s">worst performance</text>

  <text x="630" y="348" text-anchor="end" class="s">the same low comes round every 24 hours, whatever time you went to bed</text>
</svg>`
},

climbSpeeds: {
  alt: 'Two panels. Left: power against true airspeed at sea level, with the vertical gap between the power available and power required curves marked as excess power at Vy, and below it the same pair at high altitude where power available has fallen, power required has risen, and the gap has shrunk to almost nothing. Right: altitude against indicated airspeed, with a Vx line leaning right and a Vy line leaning left meeting at a marked point, the absolute ceiling where Vx equals Vy and the rate of climb is zero, with the service ceiling drawn as a dashed line just below it.',
  cap: 'Rate of climb is the gap between power available and power required, and that gap closes as you climb. That is why V(x) increases with altitude while V(y) decreases: moving in opposite directions, they can only meet at the absolute ceiling, where the rate of climb is zero.',
  svg: `<svg class="dg" viewBox="0 0 640 400" role="img" aria-label="Power against true airspeed at sea level and at high altitude, the gap between power available and power required shrinking to almost nothing, beside a plot of indicated airspeed against altitude in which Vx increases and Vy decreases until they meet at the absolute ceiling">
  <text x="34" y="24" class="b">Rate of climb = excess power</text>
  <text x="368" y="24" class="b">So the two climb speeds converge</text>

  <line x1="68" y1="58" x2="68" y2="190" class="ink"/>
  <line x1="68" y1="190" x2="312" y2="190" class="ink"/>
  <text x="64" y="50" text-anchor="end" class="s">Power</text>
  <text x="74" y="50" class="s">sea level</text>
  <path d="M80 114 C 122 94 172 82 222 78 C 252 76 288 78 306 82" class="ink"/>
  <path d="M78 128 C 94 162 104 172 122 172 C 154 172 192 158 230 134 C 262 114 292 94 302 78" class="ink"/>
  <text x="306" y="68" text-anchor="end" class="s">power available</text>
  <text x="310" y="166" text-anchor="end" class="s">power required</text>
  <path d="M155 89 L151 98 L159 98 Z" class="fill"/>
  <path d="M155 167 L151 158 L159 158 Z" class="fill"/>
  <line x1="155" y1="96" x2="155" y2="160" class="ink"/>
  <text x="165" y="110" class="s">excess power</text>
  <line x1="155" y1="170" x2="155" y2="190" class="ink dash"/>
  <text x="155" y="208" text-anchor="middle">Vy</text>
  <text x="312" y="208" text-anchor="end" class="s">TAS</text>

  <line x1="68" y1="234" x2="68" y2="366" class="ink"/>
  <line x1="68" y1="366" x2="312" y2="366" class="ink"/>
  <text x="64" y="230" text-anchor="end" class="s">Power</text>
  <text x="74" y="230" class="s">high altitude</text>
  <path d="M80 340 C 122 320 172 308 222 304 C 252 302 288 304 306 308" class="ink" opacity=".6"/>
  <path d="M100 284 C 116 318 126 328 144 328 C 176 328 214 314 252 290 C 268 280 284 270 296 262" class="ink" opacity=".6"/>
  <text x="296" y="250" text-anchor="end" class="s">power required rises</text>
  <text x="175" y="270" text-anchor="middle" class="s">excess power nearly gone</text>
  <line x1="175" y1="278" x2="175" y2="308" class="thin"/>
  <line x1="175" y1="310" x2="175" y2="324" class="ink"/>
  <line x1="169" y1="310" x2="181" y2="310" class="ink"/>
  <line x1="169" y1="324" x2="181" y2="324" class="ink"/>
  <text x="150" y="348" class="s">power available falls</text>
  <text x="312" y="384" text-anchor="end" class="s">TAS</text>

  <line x1="392" y1="56" x2="392" y2="366" class="ink"/>
  <line x1="392" y1="366" x2="612" y2="366" class="ink"/>
  <text x="368" y="48" class="s">Altitude</text>
  <line x1="424" y1="366" x2="488" y2="80" class="ink"/>
  <line x1="552" y1="366" x2="488" y2="80" class="ink"/>
  <line x1="392" y1="104" x2="612" y2="104" class="ink dash"/>
  <text x="516" y="122" class="s">service ceiling</text>
  <text x="516" y="144" class="s">ROC = 100 ft/min</text>
  <circle cx="488" cy="80" r="5" class="fblue"/>
  <text x="500" y="72" class="b blue-t">absolute ceiling</text>
  <text x="500" y="94" class="s blue-t">Vx = Vy, ROC = 0</text>
  <text x="456" y="168" text-anchor="end" class="b">Vx</text>
  <text x="456" y="190" text-anchor="end" class="s">increases</text>
  <text x="528" y="168" class="b">Vy</text>
  <text x="528" y="190" class="s">decreases</text>
  <text x="386" y="358" text-anchor="end" class="s">sea level</text>
  <text x="396" y="384" class="s">Vx best angle</text>
  <text x="492" y="384" class="s">Vy best rate</text>
  <text x="612" y="384" text-anchor="end" class="s">IAS</text>
</svg>`
},

bladeAngle: {
  alt: 'A propeller blade section at 75% radius with the plane of rotation drawn horizontally; arrows for rotational velocity and TAS combine into the relative airflow, the blade angle is marked from the plane of rotation to the chord line and the angle of attack in blue from the chord to the relative airflow; a dashed faster case at the same RPM swings the relative airflow forward and leaves a visibly smaller angle of attack; at the right a helix of one revolution rises to the effective pitch, with a dashed no-slip helix reaching the geometric pitch and the gap marked slip.',
  cap: 'Blade angle is fixed by the hub; angle of attack (blue) is only what is left between the chord and the relative airflow, and the airflow is the resultant of rotational velocity and forward speed. Add TAS at the same RPM (dashed) and the resultant swings forward, so the angle of attack shrinks — the exam answer, read off rather than recalled. Right: in one revolution the blade would advance the geometric pitch with no slip, but actually advances the effective pitch.',
  svg: `<svg class="dg" viewBox="0 0 640 290" role="img" aria-label="A propeller blade section with rotational velocity and TAS vectors resolving into the relative airflow, blade angle and angle of attack marked, a dashed faster case with a smaller angle of attack, and a helix strip showing geometric pitch, effective pitch and slip">
  <defs>
    <marker id="bladeAngle-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 1L10 5L0 9z" class="fill"/>
    </marker>
  </defs>

  <text x="66" y="38" class="b">One blade section</text>
  <text x="440" y="38" class="b">Pitch and slip</text>

  <line x1="66" y1="172" x2="356" y2="172" class="thin"/>
  <text x="74" y="162" class="s">plane of rotation</text>

  <path d="M200 172Q152 203 121 251Q164 215 200 172Z" class="fill" opacity=".16"/>
  <path d="M200 172Q152 203 121 251Q164 215 200 172Z" class="ink"/>
  <line x1="121" y1="251" x2="295" y2="77" class="ink dash" opacity=".7"/>
  <text x="130" y="272" class="s">section at 75% radius</text>
  <text x="240" y="60" class="s">chord line</text>
  <line x1="284" y1="67" x2="293" y2="77" class="thin"/>

  <path d="M200 172L309 121A120 120 0 0 0 285 87Z" class="fblue" opacity=".14"/>
  <path d="M200 172L297 102A120 120 0 0 0 285 87Z" class="fblue" opacity=".26"/>

  <g opacity=".62">
    <line x1="200" y1="172" x2="200" y2="86" class="ink dash" marker-end="url(#bladeAngle-ar)"/>
    <line x1="200" y1="172" x2="320" y2="86" class="ink dash" marker-end="url(#bladeAngle-ar)"/>
  </g>
  <text x="326" y="90" class="s">faster, same RPM</text>

  <line x1="200" y1="116" x2="320" y2="116" class="thin"/>
  <line x1="200" y1="172" x2="320" y2="172" class="ink" marker-end="url(#bladeAngle-ar)"/>
  <line x1="200" y1="172" x2="200" y2="116" class="ink" marker-end="url(#bladeAngle-ar)"/>
  <line x1="200" y1="172" x2="320" y2="116" class="ink" marker-end="url(#bladeAngle-ar)"/>
  <text x="192" y="116" text-anchor="end">TAS</text>
  <text x="192" y="136" text-anchor="end" class="s">forward speed</text>
  <text x="326" y="120">relative airflow</text>
  <text x="280" y="192" text-anchor="middle">rotational velocity</text>
  <text x="280" y="212" text-anchor="middle" class="s">set by RPM</text>

  <path d="M276 172A76 76 0 0 0 254 118" class="ink"/>
  <text x="288" y="160">blade angle</text>
  <path d="M309 121A120 120 0 0 0 285 87" class="blue ink"/>
  <text x="330" y="52" class="blue-t">angle of attack</text>
  <line x1="334" y1="58" x2="297" y2="89" class="thin"/>

  <line x1="440" y1="70" x2="520" y2="70" class="thin dash"/>
  <text x="526" y="74" class="s">geometric pitch</text>
  <line x1="440" y1="105" x2="520" y2="105" class="thin"/>
  <text x="526" y="109" class="s">effective pitch</text>
  <line x1="505" y1="72" x2="505" y2="103" class="ink" marker-start="url(#bladeAngle-ar)" marker-end="url(#bladeAngle-ar)"/>
  <text x="498" y="92" text-anchor="end">slip</text>
  <line x1="440" y1="220" x2="520" y2="220" class="thin"/>
  <path d="M470 220C494 211 494 163 470 145C446 134 446 82 470 70" class="thin dash"/>
  <path d="M470 220C494 212 494 170 470 162C446 155 446 113 470 105" class="ink"/>
  <text x="480" y="238" text-anchor="middle" class="s">one revolution</text>
</svg>`
},

metarDecode: {
  alt: 'The METAR EGKK 121250Z 24015G27KT 3000 -RA BR BKN008 OVC015 09/08 Q1004 TEMPO 1200 RADZ is set out as one line of boxed groups, each with a leader dropping to a decoded label in two staggered rows, with callouts above marking the gust figure and the intensity sign, and an okta scale below showing FEW 1-2, SCT 3-4, BKN 5-7 and OVC 8.',
  cap: 'The article\'s own METAR taken apart. The order never varies, so any group can be found by counting along the line: intensity is the sign alone (- light, + heavy, no sign moderate), cloud amount reads off the okta scale, and the two groups in colour — visibility and cloud — are the ones that decide whether the flight goes.',
  svg: `<svg class="dg" viewBox="0 0 640 248" role="img" aria-label="A METAR split into its groups, each boxed with a leader to a decoded label, with an okta scale beside the cloud groups">
  <text x="10" y="20" class="b">METAR</text>
  <text x="167.5" y="20" text-anchor="middle" class="s">gust</text>
  <text x="253.5" y="20" text-anchor="middle" class="s">intensity</text>
  <line x1="167.5" y1="28" x2="167.5" y2="38" class="thin"/>
  <line x1="253.5" y1="28" x2="253.5" y2="38" class="thin"/>

  <rect x="10" y="38" width="38" height="24" class="thin"/>
  <rect x="52" y="38" width="59" height="24" class="thin"/>
  <rect x="115" y="38" width="84" height="24" class="thin"/>
  <rect x="203" y="38" width="38" height="24" class="fblue" opacity=".12"/>
  <rect x="203" y="38" width="38" height="24" class="blue ink"/>
  <rect x="245" y="38" width="52" height="24" class="thin"/>
  <rect x="299" y="38" width="56" height="24" class="fblue" opacity=".12"/>
  <rect x="299" y="38" width="56" height="24" class="blue ink"/>
  <rect x="357" y="38" width="52" height="24" class="fblue" opacity=".12"/>
  <rect x="357" y="38" width="52" height="24" class="blue ink"/>
  <rect x="413" y="38" width="45" height="24" class="thin"/>
  <rect x="462" y="38" width="45" height="24" class="thin"/>
  <rect x="511" y="38" width="119" height="24" class="thin"/>

  <text x="29" y="54" text-anchor="middle">EGKK</text>
  <text x="81.5" y="54" text-anchor="middle">121250Z</text>
  <text x="157" y="54" text-anchor="middle">24015G27KT</text>
  <text x="222" y="54" text-anchor="middle">3000</text>
  <text x="271" y="54" text-anchor="middle">-RA BR</text>
  <text x="327" y="54" text-anchor="middle">BKN008</text>
  <text x="383" y="54" text-anchor="middle">OVC015</text>
  <text x="435.5" y="54" text-anchor="middle">09/08</text>
  <text x="484.5" y="54" text-anchor="middle">Q1004</text>
  <text x="570.5" y="54" text-anchor="middle">TEMPO 1200 RADZ</text>

  <line x1="29" y1="62" x2="29" y2="72" class="thin"/>
  <line x1="157" y1="62" x2="157" y2="72" class="thin"/>
  <line x1="271" y1="62" x2="271" y2="72" class="thin"/>
  <line x1="383" y1="62" x2="383" y2="72" class="thin"/>
  <line x1="484.5" y1="62" x2="484.5" y2="72" class="thin"/>
  <line x1="81.5" y1="62" x2="81.5" y2="118" class="thin"/>
  <line x1="222" y1="62" x2="222" y2="118" class="thin"/>
  <line x1="327" y1="62" x2="327" y2="118" class="thin"/>
  <line x1="435.5" y1="62" x2="435.5" y2="118" class="thin"/>
  <line x1="570.5" y1="62" x2="570.5" y2="118" class="thin"/>

  <text x="8" y="86">Station</text>
  <text x="8" y="100" class="s">Gatwick</text>
  <text x="157" y="86" text-anchor="middle">Wind 240&#176; true</text>
  <text x="157" y="100" text-anchor="middle" class="s">15 kt, gusting 27</text>
  <text x="271" y="86" text-anchor="middle">- = light</text>
  <text x="271" y="100" text-anchor="middle" class="s">RA rain</text>
  <text x="271" y="114" text-anchor="middle" class="s">BR mist</text>
  <text x="381" y="86" text-anchor="middle" class="blue-t">OVC = 8 oktas</text>
  <text x="381" y="100" text-anchor="middle" class="s">1500 ft aal</text>
  <text x="488" y="86" text-anchor="middle">QNH 1004 hPa</text>

  <text x="85" y="132" text-anchor="middle">12th, 1250 UTC</text>
  <text x="85" y="146" text-anchor="middle" class="s">Z is always UTC</text>
  <text x="213" y="132" text-anchor="middle" class="blue-t">Vis 3000 m</text>
  <text x="213" y="146" text-anchor="middle" class="s">9999 = 10 km or more</text>
  <text x="335" y="132" text-anchor="middle" class="blue-t">BKN 5-7 oktas</text>
  <text x="335" y="146" text-anchor="middle" class="s">800 ft aal</text>
  <text x="445" y="132" text-anchor="middle">Temp 09, dew 08</text>
  <text x="445" y="146" text-anchor="middle" class="s">&#176;C, M = minus</text>
  <text x="567" y="132" text-anchor="middle">TEMPO vis 1200 m</text>
  <text x="567" y="146" text-anchor="middle" class="s">rain and drizzle</text>

  <text x="14" y="182" class="b">Reading the cloud group</text>
  <text x="14" y="200" class="s">Amount in oktas, eighths of sky</text>
  <text x="14" y="216" class="s">Height in hundreds of feet above</text>
  <text x="14" y="232" class="s">aerodrome elevation, not amsl</text>

  <rect x="420" y="176" width="120" height="26" class="fblue" opacity=".12"/>
  <rect x="300" y="176" width="30" height="26" class="thin"/>
  <rect x="330" y="176" width="30" height="26" class="thin"/>
  <rect x="360" y="176" width="30" height="26" class="thin"/>
  <rect x="390" y="176" width="30" height="26" class="thin"/>
  <rect x="420" y="176" width="30" height="26" class="thin"/>
  <rect x="450" y="176" width="30" height="26" class="thin"/>
  <rect x="480" y="176" width="30" height="26" class="thin"/>
  <rect x="510" y="176" width="30" height="26" class="thin"/>
  <text x="315" y="194" text-anchor="middle" class="s">1</text>
  <text x="345" y="194" text-anchor="middle" class="s">2</text>
  <text x="375" y="194" text-anchor="middle" class="s">3</text>
  <text x="405" y="194" text-anchor="middle" class="s">4</text>
  <text x="435" y="194" text-anchor="middle" class="s">5</text>
  <text x="465" y="194" text-anchor="middle" class="s">6</text>
  <text x="495" y="194" text-anchor="middle" class="s">7</text>
  <text x="525" y="194" text-anchor="middle" class="s">8</text>

  <path d="M302 204 L302 210 L358 210 L358 204" class="thin"/>
  <path d="M362 204 L362 210 L418 210 L418 204" class="thin"/>
  <path d="M422 204 L422 210 L508 210 L508 204" class="blue ink"/>
  <path d="M512 204 L512 210 L538 210 L538 204" class="blue ink"/>
  <text x="330" y="226" text-anchor="middle" class="s">FEW 1-2</text>
  <text x="390" y="226" text-anchor="middle" class="s">SCT 3-4</text>
  <text x="465" y="226" text-anchor="middle" class="s blue-t">BKN 5-7</text>
  <text x="525" y="226" text-anchor="middle" class="s blue-t">OVC 8</text>
</svg>`
},

retinaRods: {
  alt: 'A horizontal section of the eye in which light from an object on the visual axis converges on the fovea and light from an object 10 to 15 degrees off the axis converges on rod-rich retina beside it, drawn above a plot of receptor density across the retina where cones peak sharply at the fovea, rods peak either side of it, and both fall to nothing at the optic disc.',
  cap: 'Cones are packed into the fovea and rods are not, so at night the thing you look straight at is the thing you cannot see. Shifting the eye 10 to 15° puts the image on the rod peak instead. The optic disc, about 15° from the fovea, has no receptors of either kind — one more reason a night scan keeps moving rather than settling.',
  svg: `<svg class="dg" viewBox="0 0 640 410" role="img" aria-label="Section through the eye with rays from an object on the axis and one 10 to 15 degrees off it, above a plot of rod and cone density across the retina">
<defs><marker id="retinaRods-tip" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" class="fill"/></marker></defs>
<rect x="366" y="272" width="16" height="84" class="tint"/>
<path class="fred" opacity=".12" d="M 317 218 L 323 218 L 331 272 L 331 356 L 309 356 L 309 272 Z"/>
<path class="ink" d="M 348 107 A 70 58 0 1 1 292 107 A 32 32 0 0 1 348 107"/>
<path class="ink" d="M 298 128 Q 320 112 342 128 Q 320 144 298 128 Z"/>
<path class="ink" d="M 292 107 L 308 118"/>
<path class="ink" d="M 348 107 L 332 118"/>
<path class="ink" d="M 268 190 A 64 52 0 0 0 337 210"/>
<path class="ink" d="M 347 207 A 64 52 0 0 0 372 190"/>
<path class="ink" marker-mid="url(#retinaRods-tip)" d="M 320 30 L 320 74 L 320 212"/>
<path class="ink" marker-mid="url(#retinaRods-tip)" d="M 346 30 L 334 74 L 298 209"/>
<path class="thin" d="M 320 58 A 70 70 0 0 1 338 60"/>
<circle cx="320" cy="30" r="3.5" class="fill"/>
<circle cx="346" cy="30" r="3.5" class="fill"/>
<circle cx="320" cy="212" r="3" class="fred"/>
<circle cx="298" cy="209" r="2.6" class="fill"/>
<path class="thin" d="M 242 90 L 298 99"/>
<path class="thin" d="M 242 117 L 296 111"/>
<path class="thin" d="M 242 141 L 299 131"/>
<path class="thin" d="M 392 148 L 358 157"/>
<path class="thin" d="M 392 194 L 371 190"/>
<path class="thin" d="M 252 211 L 292 209"/>
<path class="thin dash" d="M 298 209 L 266 272 L 266 295"/>
<path class="thin dash" d="M 342 208 L 374 272 L 374 354"/>
<path class="thin" d="M 152 356 L 486 356"/>
<path class="thin" d="M 152 272 L 152 356"/>
<path class="thin" d="M 158 356 L 158 361 M 212 356 L 212 361 M 266 356 L 266 361 M 320 356 L 320 361 M 374 356 L 374 361 M 428 356 L 428 361 M 482 356 L 482 361"/>
<path class="ink" d="M 158 326 L 176 319 L 194 311 L 212 303 L 230 295 L 242 291 L 251 290 L 258 291 L 266 295 L 274 301 L 282 308 L 290 317 L 298 328 L 306 339 L 313 348 L 320 356 L 327 348 L 334 339 L 342 328 L 350 317 L 358 307 L 366 299 L 366 356"/>
<path class="ink" d="M 382 356 L 382 297 L 390 291 L 400 289 L 412 289 L 424 292 L 438 297 L 452 303 L 466 310 L 482 320"/>
<path class="ink dash" d="M 158 352 L 190 351 L 222 350 L 250 349 L 272 348 L 288 346 L 298 343 L 305 337 L 310 327 L 314 311 L 317 292 L 320 274 L 323 292 L 326 311 L 330 327 L 335 337 L 342 343 L 352 346 L 360 348 L 366 349 L 366 356"/>
<path class="ink dash" d="M 382 356 L 382 349 L 390 350 L 410 351 L 440 352 L 482 353"/>
<circle cx="266" cy="295" r="2.6" class="fill"/>
<text x="300" y="34" class="s" text-anchor="end">object on the axis</text>
<text x="362" y="34" class="s">the same object, off-axis</text>
<text x="362" y="50" class="s">(off-centre viewing)</text>
<text x="350" y="68">10–15°</text>
<text x="236" y="94" class="s" text-anchor="end">cornea</text>
<text x="236" y="118" class="s" text-anchor="end">iris</text>
<text x="236" y="142" class="s" text-anchor="end">lens</text>
<text x="398" y="150" class="s">vitreous</text>
<text x="398" y="196" class="s">retina</text>
<text x="246" y="213" class="s" text-anchor="end">lands on rod-rich retina</text>
<text x="384" y="264">optic disc — no receptors</text>
<text x="146" y="268" class="s" text-anchor="end">receptor density</text>
<text x="494" y="326">rods</text>
<text x="494" y="349">cones</text>
<text x="158" y="370" class="s" text-anchor="middle">45°</text>
<text x="212" y="370" class="s" text-anchor="middle">30°</text>
<text x="266" y="370" class="s" text-anchor="middle">15°</text>
<text x="320" y="370" class="s" text-anchor="middle">fovea</text>
<text x="374" y="370" class="s" text-anchor="middle">15°</text>
<text x="428" y="370" class="s" text-anchor="middle">30°</text>
<text x="482" y="370" class="s" text-anchor="middle">45°</text>
<text x="320" y="388" class="red-t" text-anchor="middle">night blind spot — no rods</text>
</svg>`
},

vorCdi: {
  alt: 'Top: a VOR station drawn as a compass rose with the 090 radial running east as a blue line; aircraft A north of the radial, two aircraft B on the radial flying opposite ways, and aircraft C south of it. Bottom: three VOR indicators with OBS set to 090 — the needle deflected right under A, centred under B and deflected left under C, each with the FROM flag showing.',
  cap: 'The needle answers one question: which side of the selected radial you are on. A is north of the 090 radial so the needle sits right; B is on it so the needle centres; C is south so the needle sits left — and all three read FROM, because all three are east of the station. Both B aeroplanes give the same indication, since a VOR takes no notice of heading; "turn towards the needle" only works while your heading roughly matches the radial you have selected.',
  svg: `<svg class="dg" viewBox="0 0 640 426" role="img" aria-label="VOR plan view with the 090 radial and three aircraft, above three VOR indicators reading needle right, centred and left">
  <path class="ink" d="M58 96L58 74"/>
  <path class="fill" d="M53 76L58 66L63 76Z"/>
  <circle class="ink" cx="58" cy="118" r="20"/>
  <path class="thin" d="M58 103L58 98M65.5 105L68 100.7M71 110.5L75.3 108M73 118L78 118M71 125.5L75.3 128M65.5 131L68 135.3M58 133L58 138M50.5 131L48 135.3M45 125.5L40.7 128M43 118L38 118M45 110.5L40.7 108M50.5 105L48 100.7"/>
  <path class="ink" d="M58 111L64.1 114.5L64.1 121.5L58 125L51.9 121.5L51.9 114.5Z"/>
  <path class="blue ink" d="M80 118L604 118"/>
  <path class="fblue" d="M603 113L618 118L603 123Z"/>
  <path class="fill" d="M140 70L124 67L117 58L113 58L116 67L106 67L103 62L100 62L101.5 70L100 78L103 78L106 73L116 73L113 82L117 82L124 73Z"/>
  <path class="fill" d="M266 118L282 115L289 106L293 106L290 115L300 115L303 110L306 110L304.5 118L306 126L303 126L300 121L290 121L293 130L289 130L282 121Z"/>
  <path class="fill" d="M374 118L358 115L351 106L347 106L350 115L340 115L337 110L334 110L335.5 118L334 126L337 126L340 121L350 121L347 130L351 130L358 121Z"/>
  <path class="fill" d="M540 166L524 163L517 154L513 154L516 163L506 163L503 158L500 158L501.5 166L500 174L503 174L506 169L516 169L513 178L517 178L524 169Z"/>
  <text x="14" y="22" class="b">Where you are</text>
  <text x="58" y="60" text-anchor="middle">N</text>
  <text x="58" y="158" text-anchor="middle" class="s">VOR station</text>
  <text x="120" y="48" text-anchor="middle" class="b">A</text>
  <text x="320" y="96" text-anchor="middle" class="b">B</text>
  <text x="520" y="198" text-anchor="middle" class="b">C</text>
  <text x="600" y="104" text-anchor="end" class="blue-t">090 radial</text>
  <text x="320" y="150" text-anchor="middle" class="s blue-t">same indication on either heading</text>
  <path class="thin" d="M6 208L634 208"/>
  <text x="14" y="230" class="b">What the needle says</text>
  <rect class="ink" x="89" y="238" width="62" height="26"/>
  <path class="fill" d="M115 265L125 265L120 272Z"/>
  <circle class="ink" cx="120" cy="318" r="46"/>
  <circle class="thin" cx="96" cy="318" r="3"/>
  <circle class="thin" cx="108" cy="318" r="3"/>
  <circle class="thin" cx="132" cy="318" r="3"/>
  <circle class="thin" cx="144" cy="318" r="3"/>
  <rect class="fblue" x="142" y="288" width="4" height="60"/>
  <path class="fill" d="M114 352L126 352L120 362Z"/>
  <rect class="ink" x="289" y="238" width="62" height="26"/>
  <path class="fill" d="M315 265L325 265L320 272Z"/>
  <circle class="ink" cx="320" cy="318" r="46"/>
  <circle class="thin" cx="296" cy="318" r="3"/>
  <circle class="thin" cx="308" cy="318" r="3"/>
  <circle class="thin" cx="332" cy="318" r="3"/>
  <circle class="thin" cx="344" cy="318" r="3"/>
  <rect class="fblue" x="318" y="288" width="4" height="60"/>
  <path class="fill" d="M314 352L326 352L320 362Z"/>
  <rect class="ink" x="489" y="238" width="62" height="26"/>
  <path class="fill" d="M515 265L525 265L520 272Z"/>
  <circle class="ink" cx="520" cy="318" r="46"/>
  <circle class="thin" cx="496" cy="318" r="3"/>
  <circle class="thin" cx="508" cy="318" r="3"/>
  <circle class="thin" cx="532" cy="318" r="3"/>
  <circle class="thin" cx="544" cy="318" r="3"/>
  <rect class="fblue" x="494" y="288" width="4" height="60"/>
  <path class="fill" d="M514 352L526 352L520 362Z"/>
  <path class="thin" d="M72 374L110 357"/>
  <text x="66" y="372" text-anchor="end" class="s">FROM flag</text>
  <text x="120" y="256" text-anchor="middle">OBS 090</text>
  <text x="320" y="256" text-anchor="middle">OBS 090</text>
  <text x="520" y="256" text-anchor="middle">OBS 090</text>
  <text x="120" y="394" text-anchor="middle">A: needle right, FROM</text>
  <text x="320" y="394" text-anchor="middle">B: centred, FROM</text>
  <text x="520" y="394" text-anchor="middle">C: needle left, FROM</text>
  <text x="120" y="412" text-anchor="middle" class="s">turn right, towards the needle</text>
  <text x="320" y="412" text-anchor="middle" class="s">on the radial</text>
  <text x="520" y="412" text-anchor="middle" class="s">turn left, towards the needle</text>
</svg>`
},

chartSigns: {
  alt: 'A grid of twelve UK 1:500,000 chart symbols drawn at chart size, each with a label beneath: civil, military and disused aerodromes and a heliport; then ATZ, MATZ, a hatched danger area and a class D boundary, all in blue; then unlit and lit obstacles with their figures, glider and parachute sites, and a maximum elevation figure with a spot height in a graticule corner.',
  cap: 'The conventional signs you have to recognise on sight, drawn at chart size; blue is the airspace overprint. Read the annotations as carefully as the shapes: D123/5.0 is a danger area up to 5000 ft amsl, SFC-2500\' is a class D boundary written base first then upper, 1284 (450) is elevation amsl above height agl, and a large 2 with a small raised 3 is a maximum elevation figure of 2300 ft.',
  svg: `<svg class="dg" viewBox="0 0 640 300" role="img" aria-label="Twelve conventional signs from the UK 1:500,000 chart: civil, military and disused aerodromes, heliport, ATZ, MATZ, danger area, class D boundary, unlit and lit obstacles, glider and parachute sites, and a maximum elevation figure with a spot height">

  <circle cx="80" cy="48" r="13" class="ink"/>
  <line x1="80" y1="29" x2="80" y2="35" class="ink"/>
  <line x1="80" y1="61" x2="80" y2="67" class="ink"/>
  <line x1="61" y1="48" x2="67" y2="48" class="ink"/>
  <line x1="93" y1="48" x2="99" y2="48" class="ink"/>
  <text x="80" y="92" text-anchor="middle">Civil aerodrome</text>

  <circle cx="240" cy="48" r="13" class="ink"/>
  <circle cx="240" cy="48" r="7" class="ink"/>
  <text x="240" y="92" text-anchor="middle">Military aerodrome</text>

  <circle cx="400" cy="48" r="13" class="ink"/>
  <line x1="391" y1="39" x2="409" y2="57" class="ink"/>
  <line x1="391" y1="57" x2="409" y2="39" class="ink"/>
  <text x="400" y="92" text-anchor="middle">Disused aerodrome</text>

  <circle cx="560" cy="48" r="13" class="ink"/>
  <text x="560" y="53" text-anchor="middle">H</text>
  <text x="560" y="92" text-anchor="middle">Heliport</text>

  <circle cx="80" cy="144" r="11" class="blue ink dash"/>
  <circle cx="80" cy="144" r="4.5" class="ink"/>
  <text x="80" y="188" text-anchor="middle">ATZ</text>

  <path d="M 253.75,138 L 268,138 L 268,150 L 253.75,150 A 15 15 0 1 1 253.75,138 Z" class="blue ink"/>
  <text x="240" y="188" text-anchor="middle">MATZ</text>

  <rect x="358" y="124" width="84" height="40" class="blue ink"/>
  <g class="blue ink" opacity=".55">
    <line x1="368" y1="124" x2="360" y2="132"/>
    <line x1="378" y1="124" x2="370" y2="132"/>
    <line x1="388" y1="124" x2="380" y2="132"/>
    <line x1="398" y1="124" x2="390" y2="132"/>
    <line x1="408" y1="124" x2="400" y2="132"/>
    <line x1="418" y1="124" x2="410" y2="132"/>
    <line x1="428" y1="124" x2="420" y2="132"/>
    <line x1="438" y1="124" x2="430" y2="132"/>
    <line x1="362" y1="164" x2="370" y2="156"/>
    <line x1="372" y1="164" x2="380" y2="156"/>
    <line x1="382" y1="164" x2="390" y2="156"/>
    <line x1="392" y1="164" x2="400" y2="156"/>
    <line x1="402" y1="164" x2="410" y2="156"/>
    <line x1="412" y1="164" x2="420" y2="156"/>
    <line x1="422" y1="164" x2="430" y2="156"/>
    <line x1="432" y1="164" x2="440" y2="156"/>
    <line x1="358" y1="140" x2="366" y2="132"/>
    <line x1="358" y1="150" x2="366" y2="142"/>
    <line x1="358" y1="160" x2="366" y2="152"/>
    <line x1="442" y1="128" x2="434" y2="136"/>
    <line x1="442" y1="138" x2="434" y2="146"/>
    <line x1="442" y1="148" x2="434" y2="156"/>
  </g>
  <text x="400" y="150" text-anchor="middle" class="blue-t">D123/5.0</text>
  <text x="400" y="188" text-anchor="middle">Danger area</text>

  <text x="529" y="132" text-anchor="end" class="blue-t">CTR</text>
  <rect x="534" y="118" width="20" height="19" class="blue ink"/>
  <text x="544" y="132.5" text-anchor="middle" class="blue-t b">D</text>
  <text x="560" y="152" text-anchor="middle" class="blue-t">SFC-2500'</text>
  <rect x="496" y="156" width="132" height="8" class="fblue" opacity=".16"/>
  <line x1="496" y1="164" x2="628" y2="164" class="blue ink"/>
  <text x="560" y="188" text-anchor="middle">Class D boundary</text>

  <path d="M 86,246 L 93,218 L 100,246" class="ink"/>
  <text x="80" y="226" text-anchor="end" class="s">1284</text>
  <text x="80" y="242" text-anchor="end" class="s">(450)</text>
  <text x="80" y="284" text-anchor="middle">Unlit obstacle</text>

  <path d="M 233,246 L 240,218 L 247,246" class="ink"/>
  <line x1="240" y1="215" x2="240" y2="208" class="ink"/>
  <line x1="236.5" y1="216" x2="232.5" y2="210" class="ink"/>
  <line x1="243.5" y1="216" x2="247.5" y2="210" class="ink"/>
  <text x="240" y="284" text-anchor="middle">Lit obstacle</text>

  <circle cx="368" cy="234" r="12" class="ink"/>
  <text x="368" y="239" text-anchor="middle">G</text>
  <text x="380" y="251" class="s">/2.5</text>
  <circle cx="432" cy="234" r="12" class="ink"/>
  <path d="M 425,230 A 7 7 0 0 0 439,230 Z" class="fill"/>
  <path d="M 429,231.5 L 432,245 L 435,231.5 Z" class="fill"/>
  <text x="400" y="284" text-anchor="middle">Glider, parachute</text>

  <g class="thin">
    <line x1="506" y1="216" x2="630" y2="216"/>
    <line x1="506" y1="216" x2="506" y2="262"/>
    <line x1="530" y1="216" x2="530" y2="220"/>
    <line x1="554" y1="216" x2="554" y2="220"/>
    <line x1="578" y1="216" x2="578" y2="220"/>
    <line x1="602" y1="216" x2="602" y2="220"/>
    <line x1="506" y1="232" x2="510" y2="232"/>
    <line x1="506" y1="247" x2="510" y2="247"/>
    <line x1="506" y1="262" x2="510" y2="262"/>
  </g>
  <text x="544" y="250" text-anchor="middle" class="b">2</text>
  <text x="556" y="241" text-anchor="middle" class="s">3</text>
  <circle cx="596" cy="244" r="2" class="fill"/>
  <text x="602" y="248" class="s">1705</text>
  <text x="560" y="284" text-anchor="middle">MEF and spot height</text>
</svg>`
},

microburst: {
  alt: 'Side elevation of an approach flown through a microburst: a cumulonimbus base with a descending shaft beneath it spreading into outflow arrows at the surface, a dashed three degree glidepath running down to the threshold, and a red track that balloons above the glidepath in the increasing headwind, sinks through it in the downdraught core, then falls away in the increasing tailwind and reaches the ground well short of the threshold.',
  cap: 'The outflow gives you a headwind first — airspeed rises and you balloon above the slope on less power. Then the downdraught, then a tailwind that takes the airspeed away and leaves you low and slow. The performance gain at 1 is the warning; the go-around belongs there, not at 3.',
  svg: `<svg class="dg" viewBox="0 0 640 400" role="img" aria-label="Side view of an approach flown through a microburst: the aeroplane balloons above the glidepath in the increasing headwind, sinks in the downdraught core, then falls below the glidepath in the increasing tailwind and reaches the ground short of the threshold">
  <defs><marker id="microburst-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker></defs>

  <!-- cumulonimbus base -->
  <path d="M214 14 H466 V44 q-18 30 -36 0 q-18 30 -36 0 q-18 30 -36 0 q-18 30 -36 0 q-18 30 -36 0 q-18 30 -36 0 q-18 30 -36 0 Z" class="fill" opacity=".16"/>
  <text x="20" y="34" class="b">Cumulonimbus base</text>
  <text x="20" y="54" class="s">or any convective cloud</text>

  <!-- descending shaft -->
  <path d="M302 58 L378 58 L436 306 L244 306 Z" class="tint"/>
  <path d="M302 58 L244 306" class="thin"/>
  <path d="M378 58 L436 306" class="thin"/>
  <path d="M310 72 L308 176" class="ink" marker-end="url(#microburst-ar)"/>
  <path d="M340 72 L340 214" class="ink" marker-end="url(#microburst-ar)"/>
  <path d="M372 72 L374 232" class="ink" marker-end="url(#microburst-ar)"/>
  <text x="414" y="148" class="b">Downdraught</text>
  <text x="414" y="168" class="s">1000 to 5000 ft/min</text>

  <!-- ground, runway, threshold -->
  <line x1="16" y1="336" x2="624" y2="336" class="ink"/>
  <rect x="580" y="333" width="44" height="6" class="fill" opacity=".28"/>
  <line x1="580" y1="328" x2="580" y2="344" class="ink"/>
  <text x="628" y="318" text-anchor="end" class="s">Threshold</text>

  <!-- outflow, with the vortex roll at each leading edge -->
  <path d="M254 316 L164 316" class="ink" marker-end="url(#microburst-ar)"/>
  <path d="M162 312 C 138 310, 134 288, 158 284 C 174 281, 180 290, 173 295" class="ink" marker-end="url(#microburst-ar)"/>
  <text x="190" y="280" class="s">Outflow</text>
  <path d="M448 316 L512 316" class="ink" marker-end="url(#microburst-ar)"/>
  <path d="M514 304 C 538 302, 542 280, 518 276 C 502 273, 496 282, 503 287" class="ink" marker-end="url(#microburst-ar)"/>
  <text x="452" y="266" class="s">Outflow</text>

  <!-- nominal glidepath -->
  <path d="M48 116 L580 336" class="ink dash"/>
  <text x="44" y="100" class="s">Nominal 3&#176; glidepath</text>

  <!-- the aeroplane and its actual track -->
  <path d="M16 110 L40 117 L16 124 L22 117 Z" class="fred"/>
  <path d="M48 116 C 96 136, 148 152, 196 158 C 224 162, 244 164, 262 172 C 286 182, 306 208, 330 236 C 352 262, 372 288, 398 306 C 414 316, 430 326, 452 336" class="red ink"/>
  <line x1="452" y1="330" x2="452" y2="342" class="red ink"/>
  <text x="16" y="156" class="s red-t">Actual track</text>
  <circle cx="262" cy="172" r="4.5" class="fred"/>
  <circle cx="346" cy="255" r="4.5" class="fred"/>
  <circle cx="433" cy="327" r="4.5" class="fred"/>
  <text x="244" y="152" class="b red-t">1</text>
  <text x="326" y="278" class="b red-t">2</text>
  <text x="444" y="302" class="b red-t">3</text>

  <!-- what happens at each station -->
  <text x="20" y="360" class="b red-t">1</text>
  <text x="34" y="360">Increasing headwind</text>
  <text x="34" y="380" class="s">IAS rises, you balloon high</text>
  <text x="214" y="360" class="b red-t">2</text>
  <text x="228" y="360">The downdraught</text>
  <text x="228" y="380" class="s">AoA falls, sink begins</text>
  <text x="414" y="360" class="b red-t">3</text>
  <text x="428" y="360">Increasing tailwind</text>
  <text x="428" y="380" class="s">IAS decays, lands short</text>
</svg>`
},

synopticLow: {
  alt: 'Plan view of a mature depression on a surface chart: three closed isobars labelled 984, 992 and 1000 hPa around a central L with arrows showing anticlockwise circulation, an occluded front of alternating triangles and half-discs running out from the centre to a triple point, from which a warm front marked with half-discs runs east and a cold front marked with triangles runs south-west, enclosing a tinted warm sector; three wind arrows show a backing south-easterly ahead of the warm front, a steady south-westerly in the warm sector and a veered north-westerly behind the cold front, and a dashed line A to B cuts across both fronts.',
  cap: 'One system, not two unrelated slices. Every symbol sits on the side the front is moving towards, so the cold front\'s triangles point into the warm sector and the warm front\'s half-discs point into the cold air ahead; the occlusion carries both because it is both. Wind backs ahead of the warm front, holds steady in the warm sector, then veers behind the cold front — and A–B is the line the two cross-sections above are cut along.',
  svg: `<svg class="dg" viewBox="0 0 640 400" role="img" aria-label="Surface chart of a mature depression: closed isobars round a central L with anticlockwise arrows, an occluded front running out to a triple point where a warm front with half-discs and a cold front with triangles enclose a tinted warm sector, wind arrows backing ahead of the warm front and veering behind the cold front, and a dashed section line A to B">
  <defs>
    <marker id="synopticLow-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" class="fill"/>
    </marker>
  </defs>
  <path d="M355 245 L634 285 L634 390 L238 390 Z" class="tint"/>
  <ellipse cx="215" cy="110" rx="36" ry="27" class="thin"/>
  <ellipse cx="215" cy="110" rx="70" ry="52" class="thin"/>
  <ellipse cx="215" cy="110" rx="104" ry="78" class="thin"/>
  <path d="M251 37 A104 78 0 0 0 179 37" class="ink" marker-end="url(#synopticLow-arw)"/>
  <path d="M281 128 A70 52 0 0 0 281 92" class="ink" marker-end="url(#synopticLow-arw)"/>
  <path d="M149 92 A70 52 0 0 0 149 128" class="ink" marker-end="url(#synopticLow-arw)"/>
  <line x1="232" y1="126" x2="355" y2="245" class="ink"/>
  <line x1="355" y1="245" x2="632" y2="284" class="red ink"/>
  <line x1="355" y1="245" x2="243" y2="384" class="blue ink"/>
  <g class="fill">
    <path d="M-7 0 L0 -11 L7 0 Z" transform="translate(292 184) rotate(44.1)"/>
    <path d="M-7 0 A7 7 0 0 1 7 0 Z" transform="translate(310 201) rotate(44.1)"/>
    <path d="M-7 0 L0 -11 L7 0 Z" transform="translate(327 218) rotate(44.1)"/>
    <path d="M-7 0 A7 7 0 0 1 7 0 Z" transform="translate(341 232) rotate(44.1)"/>
  </g>
  <g class="fred">
    <path d="M-7 0 A7 7 0 0 1 7 0 Z" transform="translate(387 250) rotate(8.1)"/>
    <path d="M-7 0 A7 7 0 0 1 7 0 Z" transform="translate(432 256) rotate(8.1)"/>
    <path d="M-7 0 A7 7 0 0 1 7 0 Z" transform="translate(478 262) rotate(8.1)"/>
    <path d="M-7 0 A7 7 0 0 1 7 0 Z" transform="translate(567 275) rotate(8.1)"/>
    <path d="M-7 0 A7 7 0 0 1 7 0 Z" transform="translate(603 280) rotate(8.1)"/>
  </g>
  <g class="fblue">
    <path d="M-7 0 L0 -11 L7 0 Z" transform="translate(339 265) rotate(128.9)"/>
    <path d="M-7 0 L0 -11 L7 0 Z" transform="translate(319 290) rotate(128.9)"/>
    <path d="M-7 0 L0 -11 L7 0 Z" transform="translate(285 332) rotate(128.9)"/>
    <path d="M-7 0 L0 -11 L7 0 Z" transform="translate(265 357) rotate(128.9)"/>
  </g>
  <line x1="150" y1="340" x2="628" y2="251" class="ink dash" opacity=".55"/>
  <line x1="540" y1="222" x2="496" y2="178" class="ink" marker-end="url(#synopticLow-arw)"/>
  <line x1="400" y1="352" x2="452" y2="308" class="ink" marker-end="url(#synopticLow-arw)"/>
  <line x1="95" y1="265" x2="143" y2="313" class="ink" marker-end="url(#synopticLow-arw)"/>
  <text x="215" y="52" text-anchor="middle" class="s">1000 hPa</text>
  <text x="215" y="76" text-anchor="middle" class="s">992</text>
  <text x="215" y="101" text-anchor="middle" class="s">984</text>
  <text x="215" y="124" text-anchor="middle" class="b">L</text>
  <text x="104" y="108" text-anchor="end">Anticlockwise</text>
  <text x="290" y="235" text-anchor="end">Occlusion</text>
  <text x="400" y="276" text-anchor="middle" class="red-t">Warm front</text>
  <text x="292" y="290" text-anchor="end" class="blue-t">Cold front</text>
  <text x="470" y="150" text-anchor="middle">Cold air ahead</text>
  <text x="630" y="200" text-anchor="end">SE, backing</text>
  <text x="520" y="364" text-anchor="middle">Warm sector</text>
  <text x="468" y="326">SW, steady</text>
  <text x="100" y="336" text-anchor="end">NW, veered</text>
  <text x="110" y="370" text-anchor="middle">Cold air behind</text>
  <text x="140" y="336" text-anchor="end">A</text>
  <text x="628" y="238" text-anchor="end">B</text>
  <text x="260" y="390" class="s">A–B: line of the two cross-sections</text>
</svg>`
},

leeWave: {
  alt: 'Cross-section of a ridge with wind arriving from the left: streamlines rise over the summit and oscillate downwind, with a cap cloud on the ridge, lenticular clouds at the wave crests, and a rotor beneath the first crest inside a shaded danger zone on the lee side.',
  cap: 'Standing waves need about 20 kt or more roughly across the ridge, increasing with height, and a stable layer near ridge top. The crests are fixed in space while the air flows through them, which is why the lenticulars sit still. The danger is the lee side and low down — severe downdraught on the slope and the rotor beneath the first crest, whose surface flow runs back against the wind. Height is what keeps you out of it.',
  svg: `<svg class="dg" viewBox="0 0 640 400" role="img" aria-label="Mountain wave over a ridge with cap cloud, lenticular clouds at the wave crests and a rotor in the lee">
  <defs>
    <marker id="leeWave-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="fill"/></marker>
    <marker id="leeWave-arR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="fred"/></marker>
  </defs>

  <!-- danger zone: severe downdraught on the lee slope plus the rotor -->
  <path d="M192 268 C250 256 320 258 384 272 C394 306 390 348 380 380 L226 380 Z" class="fred" opacity=".13"/>
  <path d="M192 268 C250 256 320 258 384 272 C394 306 390 348 380 380" class="red ink dash" opacity=".55"/>

  <!-- stable layer near ridge top -->
  <rect x="14" y="240" width="192" height="28" class="tint"/>
  <line x1="14" y1="240" x2="206" y2="240" class="thin dash"/>
  <line x1="14" y1="268" x2="206" y2="268" class="thin dash"/>

  <!-- the ridge -->
  <path d="M10 380 H30 C74 376 104 342 128 288 C136 256 184 254 190 290 C204 326 212 358 226 380 H630 V392 H10 Z" class="fill" opacity=".14"/>
  <path d="M10 380 H30 C74 376 104 342 128 288 C136 256 184 254 190 290 C204 326 212 358 226 380 H630" class="ink"/>

  <!-- upwind wind profile: speed increasing with height -->
  <line x1="20" y1="164" x2="20" y2="372" class="thin"/>
  <line x1="22" y1="356" x2="38" y2="356" class="ink" marker-end="url(#leeWave-ar)"/>
  <line x1="22" y1="328" x2="48" y2="328" class="ink" marker-end="url(#leeWave-ar)"/>
  <line x1="22" y1="300" x2="58" y2="300" class="ink" marker-end="url(#leeWave-ar)"/>
  <line x1="22" y1="224" x2="68" y2="224" class="ink" marker-end="url(#leeWave-ar)"/>
  <line x1="22" y1="196" x2="74" y2="196" class="ink" marker-end="url(#leeWave-ar)"/>
  <line x1="22" y1="168" x2="80" y2="168" class="ink" marker-end="url(#leeWave-ar)"/>
  <text x="16" y="134" class="s">Wind 20 kt+ roughly across the ridge</text>
  <text x="16" y="154" class="s">and increasing with height</text>
  <text x="26" y="258" class="s">Stable layer</text>

  <!-- streamlines rise over the ridge, then oscillate downwind -->
  <path d="M112 200 H130 C141 200 146 166 156 166 C188 166 204 226 235 226 C267 226 283 168 315 168 C347 168 363 218 395 218 C427 218 443 174 475 174 C507 174 523 212 555 212 C583 212 598 200 626 200" class="ink" marker-end="url(#leeWave-ar)"/>
  <path d="M112 288 H126 C138 288 145 234 156 234 C188 234 204 314 235 314 C267 314 283 240 315 240 C347 240 363 302 395 302 C427 302 443 246 475 246 C507 246 523 298 555 298 C583 298 598 284 626 284" class="ink" marker-end="url(#leeWave-ar)"/>

  <!-- crest markers -->
  <line x1="315" y1="160" x2="315" y2="296" class="thin dash"/>
  <line x1="475" y1="160" x2="475" y2="238" class="thin dash"/>

  <!-- cap cloud on the summit -->
  <ellipse cx="158" cy="252" rx="40" ry="10" class="fill" opacity=".4"/>
  <line x1="158" y1="228" x2="158" y2="242" class="thin"/>
  <text x="158" y="224" text-anchor="middle" class="s">Cap cloud</text>

  <!-- lenticular clouds sit at the wave crests -->
  <ellipse cx="315" cy="150" rx="40" ry="9" class="fill" opacity=".32"/>
  <ellipse cx="475" cy="150" rx="40" ry="9" class="fill" opacity=".32"/>
  <text x="395" y="150" text-anchor="middle" class="s">Lenticular</text>

  <!-- rotor beneath the first crest, turning against the flow -->
  <g class="fill" opacity=".32">
    <ellipse cx="315" cy="326" rx="18" ry="11"/>
    <circle cx="303" cy="320" r="9"/>
    <circle cx="328" cy="318" r="10"/>
    <circle cx="315" cy="314" r="11"/>
  </g>
  <path d="M292 318 A24 24 0 0 1 338 318" class="red ink" marker-end="url(#leeWave-arR)"/>
  <path d="M338 330 A24 24 0 0 1 292 330" class="red ink" marker-end="url(#leeWave-arR)"/>

  <!-- severe downdraught on the immediate lee slope -->
  <path d="M198 294 C206 312 214 330 218 344" class="red ink" marker-end="url(#leeWave-arR)"/>
  <line x1="248" y1="359" x2="226" y2="351" class="thin"/>
  <text x="232" y="368" class="s red-t">Severe downdraught</text>
  <line x1="398" y1="360" x2="344" y2="342" class="thin"/>
  <text x="396" y="368" class="s red-t">Rotor — violent turbulence</text>

  <!-- caught in it, at about ridge-top height -->
  <path d="M280 277 C270 273 260 272 252 273 L245 265 L250 265 L249 274 L243 277 C254 280 268 280 280 277 Z" class="fred"/>
  <path d="M264 278 L256 286 L264 286 L270 278 Z" class="fred"/>
  <!-- clear above the wave -->
  <path d="M218 49 C208 45 198 44 190 45 L183 37 L188 37 L187 46 L181 49 C192 52 206 52 218 49 Z" class="fill"/>
  <path d="M202 50 L194 58 L202 58 L208 50 Z" class="fill"/>
  <text x="226" y="52" class="s">Plenty of height — smooth air above the wave</text>

  <!-- wavelength -->
  <line x1="315" y1="100" x2="475" y2="100" class="ink"/>
  <line x1="315" y1="94" x2="315" y2="106" class="ink"/>
  <line x1="475" y1="94" x2="475" y2="106" class="ink"/>
  <text x="395" y="86" text-anchor="middle" class="s">Wavelength — crest to crest</text>
  <text x="395" y="124" text-anchor="middle" class="s">Crests stay put — the air flows through</text>
</svg>`
},

earSection: {
  alt: 'A cutaway section of the ear showing the pinna and ear canal leading to a flat eardrum, the three ossicles inside the air-filled middle-ear cavity, the Eustachian tube running down at about 45 degrees to a narrow slit at the back of the throat with a solid arrow carrying air out of it on climb and a dashed arrow forcing air back up it on descent, the cochlea and three semicircular canals with the otoliths at their base bracketed together as the inner ear, and a small inset in which the eardrum bows inwards over a low-pressure cavity.',
  cap: 'The middle ear\'s only vent is the Eustachian tube, which runs downhill to the back of the throat and normally lies shut there. On climb the higher pressure inside blows that end open and air escapes freely, so the eardrum stays flat. On descent the higher pressure outside presses it shut, so air has to be forced back in — swallow, yawn, or a gentle Valsalva. Block the tube with a head cold and it cannot be forced, the eardrum is dragged inwards, and it hurts: descent is the painful direction. The same inner ear carries the cochlea for hearing and, on the semicircular canals sensing angular acceleration, the otoliths sensing linear acceleration and gravity.',
  svg: `<svg class="dg" viewBox="0 0 640 396" role="img" aria-label="Section through the ear: pinna, ear canal, eardrum, the three ossicles in the middle-ear cavity, the Eustachian tube sloping down to the throat, and the cochlea and semicircular canals of the inner ear, with air leaving freely on climb and having to be forced back in on descent">
  <defs>
    <marker id="earSection-ab" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" class="fblue"/>
    </marker>
  </defs>
  <g transform="translate(0,-28)">

  <path d="M151,132 C158,116 168,106 182,104 L224,104 C240,106 248,120 248,140 C248,158 238,172 222,178 C210,182 190,184 176,180 L158,170 Z" class="tint"/>

  <path d="M62,106 C28,106 16,126 16,144 C16,162 30,182 62,182" class="ink"/>
  <path d="M56,122 C36,122 28,134 28,146 C28,158 38,170 56,170" class="thin"/>
  <line x1="56" y1="136" x2="152" y2="136" class="ink"/>
  <line x1="56" y1="164" x2="157" y2="164" class="ink"/>

  <path d="M151,132 C158,116 168,106 182,104 L224,104 C240,106 248,120 248,140 C248,158 238,172 222,178 C210,182 190,184 176,180 L158,170" class="ink"/>
  <line x1="151" y1="132" x2="158" y2="170" class="ink"/>

  <path d="M154,152 L170,127" class="ink"/>
  <circle cx="176" cy="121" r="6" class="ink"/>
  <path d="M182,123 L189,126" class="ink"/>
  <circle cx="196" cy="129" r="5.5" class="ink"/>
  <path d="M200,133 L209,137" class="ink"/>
  <ellipse cx="220" cy="141" rx="11" ry="7" transform="rotate(-14 220 141)" class="ink"/>
  <line x1="232" y1="132" x2="236" y2="152" class="ink"/>
  <line x1="248" y1="145" x2="259" y2="148" class="ink"/>

  <ellipse cx="272" cy="152" rx="12" ry="15" class="ink"/>
  <ellipse cx="279.8" cy="123" rx="24" ry="9" transform="rotate(-105 279.8 123)" class="ink"/>
  <ellipse cx="289.2" cy="127.4" rx="24" ry="9" transform="rotate(-55 289.2 127.4)" class="ink"/>
  <ellipse cx="301.7" cy="147.8" rx="24" ry="9" transform="rotate(-8 301.7 147.8)" class="ink"/>
  <line x1="286" y1="158" x2="317" y2="183" class="ink"/>

  <path d="M317.4,183.4 L319.8,180.9 L322.4,178.8 L325.3,176.9 L328.3,175.5 L331.4,174.5 L334.7,173.8 L337.9,173.6 L341.2,173.7 L344.4,174.3 L347.4,175.2 L350.3,176.5 L353.0,178.1 L355.4,180.1 L357.6,182.3 L359.5,184.7 L361.0,187.3 L362.2,190.1 L363.1,192.9 L363.6,195.8 L363.7,198.8 L363.5,201.7 L362.9,204.5 L361.9,207.2 L360.7,209.7 L359.2,212.1 L357.4,214.2 L355.4,216.1 L353.2,217.7 L350.8,219.0 L348.3,219.9 L345.7,220.6 L343.1,220.9 L340.5,220.9 L338.0,220.6 L335.5,220.0 L333.2,219.1 L331.0,218.0 L329.0,216.5 L327.2,214.9 L325.6,213.1 L324.3,211.1 L323.2,209.0 L322.5,206.8 L322.0,204.5 L321.8,202.3 L321.8,200.0 L322.2,197.8 L322.8,195.7 L323.6,193.7 L324.7,191.8 L326.0,190.2 L327.5,188.7 L329.1,187.4 L330.9,186.3 L332.7,185.5 L334.6,184.9 L336.5,184.6 L338.5,184.5 L340.4,184.6 L342.2,185.0 L344.0,185.6 L345.7,186.4 L347.2,187.4 L348.5,188.5 L349.7,189.8 L350.8,191.2 L351.6,192.7 L352.2,194.3 L352.6,195.9 L352.8,197.5 L352.8,199.1 L352.6,200.6 L352.2,202.1 L351.7,203.6 L350.9,204.9 L350.1,206.1 L349.1,207.1 L348.0,208.0 L346.8,208.8 L345.6,209.4 L344.3,209.8 L343.0,210.0 L341.7,210.1 L340.5,210.0 L339.2,209.8 L338.1,209.4 L337.0,208.9 L336.0,208.3 L335.2,207.6 L334.4,206.8 L333.8,205.9 L333.3,204.9 L332.9,204.0 L332.7,203.0 L332.6,202.0 L332.6,201.1 L332.7,200.1 L333.0,199.3 L333.3,198.5 L333.8,197.7 L334.3,197.1 L334.9,196.5 L335.5,196.1 L336.1,195.7 L336.8,195.4 L337.5,195.3 L338.2,195.2 L338.8,195.2 L339.4,195.3 L340.0,195.5" class="ink"/>

  <line x1="216" y1="172" x2="309" y2="265" class="ink"/>
  <line x1="200" y1="188" x2="293" y2="281" class="ink"/>
  <path d="M309,265 L320,286" class="ink blue"/>
  <path d="M293,281 L316,290" class="ink blue"/>

  <line x1="240" y1="202" x2="304" y2="267" class="ink blue" marker-end="url(#earSection-ab)"/>
  <line x1="295" y1="276" x2="230" y2="212" class="ink blue dash" marker-end="url(#earSection-ab)"/>

  <path d="M376,100 L382,100 L382,226 L376,226" class="ink"/>
  <line x1="382" y1="152" x2="390" y2="152" class="ink"/>

  <line x1="148" y1="118" x2="152" y2="133" class="thin"/>
  <line x1="154" y1="208" x2="178" y2="184" class="thin"/>
  <line x1="132" y1="284" x2="228" y2="217" class="thin"/>
  <line x1="252" y1="168" x2="262" y2="158" class="thin"/>
  <line x1="336" y1="280" x2="302" y2="266" class="thin"/>
  <line x1="336" y1="332" x2="320" y2="293" class="thin"/>

  <text x="270" y="86">three semicircular canals</text>
  <text x="454" y="86" class="s">angular acceleration</text>
  <text x="150" y="94" text-anchor="middle" class="s">ossicles: malleus, incus, stapes</text>
  <text x="140" y="112" text-anchor="end">eardrum</text>
  <text x="44" y="202" text-anchor="middle">pinna</text>
  <text x="106" y="192" text-anchor="middle">ear canal</text>
  <text x="150" y="214" text-anchor="end" class="b">middle ear</text>
  <text x="150" y="234" text-anchor="end" class="s">air-filled cavity</text>
  <text x="244" y="186">otoliths</text>
  <text x="340" y="246" text-anchor="middle">cochlea</text>
  <text x="396" y="142" class="b">inner ear</text>
  <text x="396" y="162" class="s">hearing and balance</text>

  <text x="340" y="278" class="b blue-t">On climb</text>
  <text x="340" y="298" class="s">air escapes freely down the tube</text>
  <text x="340" y="316" class="s">and the eardrum stays flat</text>

  <text x="44" y="290" class="b blue-t">On descent</text>
  <text x="44" y="310" class="s">the tube must be forced open</text>
  <text x="44" y="328" class="s">swallow, yawn or Valsalva</text>

  <text x="340" y="338" class="s">opens into the back of the throat</text>
  <text x="340" y="356" class="s blue-t">normally shut at this end</text>

  <rect x="44" y="348" width="246" height="68" rx="10" class="tint"/>
  <line x1="56" y1="366" x2="96" y2="366" class="ink"/>
  <line x1="56" y1="394" x2="96" y2="394" class="ink"/>
  <rect x="98" y="354" width="110" height="50" rx="12" class="ink"/>
  <path d="M96,362 C112,372 112,388 98,398" class="ink blue"/>
  <line x1="208" y1="391" x2="244" y2="405" class="ink"/>
  <line x1="204" y1="401" x2="240" y2="415" class="ink"/>
  <line x1="238" y1="408" x2="214" y2="399" class="ink blue" marker-end="url(#earSection-ab)"/>
  <text x="158" y="384" text-anchor="middle" class="s blue-t">low pressure</text>
  <text x="302" y="378" class="b">eardrum on descent</text>
  <text x="302" y="398" class="s">bows inwards — that is the pain</text>
  </g>
</svg>`
},

lightsignals: {
  alt: 'A six-row table of aerodrome light signals. Each signal is drawn as a coloured disc in the left column — a solid ring around it for a steady light, a broken ring for a flashing one, and a starburst for the red pyrotechnic — with its meaning for an aircraft in flight in the middle column and for an aircraft on the ground in the right column.',
  cap: 'Every signal carries two meanings, and only your position decides which applies. Steady green is cleared to land in the air but cleared for take-off on the ground; green flashes mean return for landing in the air but cleared to taxi on the ground. A broken ring marks a flashing signal; the red pyrotechnic is for aircraft in flight only.',
  svg: `<svg class="dg" viewBox="0 0 640 304" role="img" aria-label="Table of aerodrome light signals with separate meanings for an aircraft in flight and an aircraft on the ground">
  <text x="12" y="19" class="b">Signal</text>
  <text x="264" y="19" class="b">Aircraft in flight</text>
  <text x="460" y="19" class="b">Aircraft on the ground</text>
  <line x1="12" y1="27" x2="632" y2="27" class="ink"/>

  <rect x="12" y="61" width="620" height="34" class="tint"/>
  <rect x="12" y="129" width="620" height="34" class="tint"/>
  <rect x="12" y="197" width="620" height="40" class="tint"/>

  <line x1="252" y1="27" x2="252" y2="197" class="thin"/>
  <line x1="452" y1="27" x2="452" y2="197" class="thin"/>

  <circle cx="34" cy="44" r="9" class="fgreen"/>
  <circle cx="34" cy="44" r="15" class="green ink"/>
  <text x="62" y="48">Steady green</text>
  <text x="264" y="48" class="s">Cleared to land</text>
  <text x="460" y="48" class="s">Cleared for take-off</text>

  <circle cx="34" cy="78" r="9" class="fred"/>
  <circle cx="34" cy="78" r="15" class="red ink"/>
  <text x="62" y="82">Steady red</text>
  <text x="264" y="74" class="s">Give way to other aircraft</text>
  <text x="264" y="89" class="s">and continue circling</text>
  <text x="460" y="82" class="s">Stop</text>

  <circle cx="34" cy="112" r="9" class="fgreen"/>
  <circle cx="34" cy="112" r="15" class="green ink dash"/>
  <text x="62" y="116">Series of green flashes</text>
  <text x="264" y="116" class="s">Return for landing *</text>
  <text x="460" y="116" class="s">Cleared to taxi</text>

  <circle cx="34" cy="146" r="9" class="fred"/>
  <circle cx="34" cy="146" r="15" class="red ink dash"/>
  <text x="62" y="150">Series of red flashes</text>
  <text x="264" y="142" class="s">Aerodrome unsafe,</text>
  <text x="264" y="157" class="s">do not land</text>
  <text x="460" y="142" class="s">Taxi clear of landing</text>
  <text x="460" y="157" class="s">area in use</text>

  <circle cx="34" cy="180" r="9" class="fill" opacity=".16"/>
  <circle cx="34" cy="180" r="9" class="ink"/>
  <circle cx="34" cy="180" r="15" class="ink dash"/>
  <text x="62" y="184">Series of white flashes</text>
  <text x="264" y="176" class="s">Land at this aerodrome</text>
  <text x="264" y="191" class="s">and proceed to apron *</text>
  <text x="460" y="176" class="s">Return to starting point</text>
  <text x="460" y="191" class="s">on the aerodrome</text>

  <circle cx="34" cy="216" r="9" class="fred"/>
  <line x1="47" y1="216" x2="52" y2="216" class="red ink"/>
  <line x1="43.2" y1="225.2" x2="46.7" y2="228.7" class="red ink"/>
  <line x1="34" y1="229" x2="34" y2="234" class="red ink"/>
  <line x1="24.8" y1="225.2" x2="21.3" y2="228.7" class="red ink"/>
  <line x1="21" y1="216" x2="16" y2="216" class="red ink"/>
  <line x1="24.8" y1="206.8" x2="21.3" y2="203.3" class="red ink"/>
  <line x1="34" y1="203" x2="34" y2="198" class="red ink"/>
  <line x1="43.2" y1="206.8" x2="46.7" y2="203.3" class="red ink"/>
  <text x="62" y="220">Red pyrotechnic</text>
  <text x="264" y="211" class="s">Notwithstanding any previous instructions,</text>
  <text x="264" y="226" class="s">do not land for the time being</text>

  <line x1="12" y1="237" x2="632" y2="237" class="ink"/>
  <text x="12" y="255" class="s">* Clearance to land and to taxi will be given in due course.</text>
  <text x="12" y="273" class="s">Acknowledge: in flight, rock the wings by day or flash the landing lights twice at night.</text>
  <text x="12" y="291" class="s">On the ground, move the ailerons or rudder by day. The red pyrotechnic has no on-ground meaning.</text>
</svg>`
},

axes: {
  alt: 'A light aeroplane drawn in three-quarter view with the longitudinal, lateral and normal axes passing through the centre of gravity, each carrying a rotation arrow and labels giving its motion, its control surface and the stability it provides.',
  cap: 'Each axis carries one motion, one control and one stabilising surface. Note the crossover the exam relies on: the aeroplane pitches about the lateral axis, but that stability is called longitudinal. All three axes cross at the CG — that is what the aeroplane rotates about, not the middle of the fuselage.',
  svg: `<svg class="dg" viewBox="0 0 640 400" role="img" aria-label="Three-quarter view of a light aeroplane with the longitudinal, lateral and normal axes drawn through the centre of gravity, each with a rotation arrow and labels for its motion, control surface and the stability it provides">
  <defs>
    <marker id="axes-ah" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
      <path d="M0,0 L9,3.5 L0,7 Z" class="fblue"/>
    </marker>
  </defs>

  <path d="M285,241 L381.6,243.9 L389.1,238.4 L307.5,224.5 L215.9,196.2 L208.4,201.7 Z" class="tint"/>
  <path d="M335,200.8 L370.2,205.5 L377.2,200.3 L346,192.7 L314.8,185.1 L307.8,190.3 Z" class="tint"/>
  <path d="M331,205.5 L342.5,169.9 L347.5,166.2 L347.5,193.4 Z" class="tint"/>
  <path d="M247.5,268.4 L277.8,253.9 L318.7,224.8 L350.1,192.2 L301.3,220.6 L262.2,250.1 Z" class="tint"/>
  <path d="M247.5,268.4 L277.8,253.9 L318.7,224.8 L350.1,192.2 L301.3,220.6 L262.2,250.1 Z" class="ink"/>
  <path d="M285,241 L381.6,243.9 L389.1,238.4 L307.5,224.5 L215.9,196.2 L208.4,201.7 Z" class="ink"/>
  <path d="M335,200.8 L370.2,205.5 L377.2,200.3 L346,192.7 L314.8,185.1 L307.8,190.3 Z" class="ink"/>
  <path d="M331,205.5 L342.5,169.9 L347.5,166.2 L347.5,193.4 Z" class="ink"/>
  <line x1="350.5" y1="233.5" x2="383.1" y2="239.1" class="thin"/>
  <line x1="255.2" y1="210.3" x2="218.6" y2="199.0" class="thin"/>
  <path d="M373.9,202.7 L342.7,195.1 L311.5,187.5" class="thin"/>
  <line x1="342.6" y1="197.0" x2="346.0" y2="167.3" class="thin"/>

  <line x1="175" y1="321.5" x2="387.5" y2="166" class="blue ink dash"/>
  <line x1="148.4" y1="193.1" x2="451.6" y2="266.9" class="blue ink dash"/>
  <line x1="300" y1="103.2" x2="300" y2="343.3" class="blue ink dash"/>

  <path d="M221.1,299.3 L214.2,288.3 L204.2,280.4 L193.0,277.1 L182.6,279.1 L175.0,285.9 L171.6,296.3 L173.1,308.4 L179.1,319.7 L188.6,328.4 L199.8,332.6 L210.5,331.7 L218.8,325.8" class="blue ink" marker-end="url(#axes-ah)"/>
  <path d="M416.3,260.1 L420.3,247.9 L426.0,238.2 L432.5,233.0 L438.5,233.1 L442.9,238.6 L444.8,248.3 L444.0,260.6 L440.5,273.1 L435.0,283.4 L428.6,289.7 L422.4,290.7 L417.6,286.2" class="blue ink" marker-end="url(#axes-ah)"/>
  <path d="M296.3,157.1 L314.4,156.1 L329.7,151.9 L339.5,145.5 L341.8,137.8 L336.4,130.5 L324.1,124.9 L307.3,121.9 L289.1,122.3 L273.0,125.8 L261.9,131.9 L258.0,139.4 L261.9,146.9" class="blue ink" marker-end="url(#axes-ah)"/>

  <circle cx="300" cy="230" r="6" class="ink"/>
  <path d="M300,230 L300,224 A6,6 0 0 1 306,230 Z" class="fill"/>
  <path d="M300,230 L300,236 A6,6 0 0 1 294,230 Z" class="fill"/>
  <line x1="256" y1="193" x2="293" y2="224" class="thin"/>
  <text x="236" y="190" class="b">CG</text>

  <text x="14" y="34" class="b">The crossover to watch</text>
  <text x="14" y="52" class="s">Motion about the lateral axis</text>
  <text x="14" y="68" class="s">is pitch — but the stability</text>
  <text x="14" y="84" class="s">about it is called longitudinal.</text>

  <text x="300" y="34" text-anchor="middle" class="b">Normal axis (vertical)</text>
  <text x="300" y="52" text-anchor="middle">Yaw — rudder</text>
  <text x="300" y="70" text-anchor="middle" class="blue-t">Directional stability</text>
  <text x="300" y="88" text-anchor="middle" class="s">provided by the fin</text>

  <text x="14" y="296" class="b">Longitudinal axis</text>
  <text x="14" y="312" class="s">nose to tail</text>
  <text x="14" y="330">Roll — ailerons</text>
  <text x="14" y="348" class="blue-t">Lateral stability</text>
  <text x="14" y="364" class="s">dihedral, keel surface</text>

  <text x="468" y="240" class="b">Lateral axis</text>
  <text x="468" y="256" class="s">wingtip to wingtip</text>
  <text x="468" y="274">Pitch — elevator</text>
  <text x="468" y="292" class="blue-t">Longitudinal stability</text>
  <text x="468" y="308" class="s">tailplane and CG position</text>

  <text x="406" y="336" class="b">All three pass through the CG</text>
  <text x="406" y="354" class="s">The aeroplane rotates about the</text>
  <text x="406" y="370" class="s">CG, not the middle of the fuselage.</text>
</svg>`
},

signalsquare: {
  alt: 'A four-by-two grid of eight signals-square ground signals — white dumb-bell, dumb-bell with a black bar across each disc, red panel with one yellow diagonal, red panel with two yellow diagonals, double white cross, landing T, right-hand traffic arrow and the black C on yellow — each with its meaning underneath.',
  cap: 'The eight signals, with the two pairs that catch people out set side by side. The black bars across the dumb-bell <b>relax</b> the rule: runways are still required for take-off and landing, but ground movement is no longer confined to runways and taxiways. <b>One</b> yellow diagonal means special precautions on approach and landing; <b>two</b> mean landing is prohibited.',
  svg: `<svg class="dg" viewBox="0 0 640 346" role="img" aria-label="The signals square: eight ground signals with their meanings">
  <text x="14" y="22" class="b">Signals square</text>
  <text x="626" y="22" text-anchor="end" class="s">White = outline, black = solid</text>

  <rect x="14" y="34" width="612" height="296" class="ink"/>
  <path class="thin" d="M167 34 V330 M320 34 V330 M473 34 V330 M14 182 H626"/>

  <circle cx="73" cy="74" r="9" class="ink"/>
  <circle cx="107" cy="74" r="9" class="ink"/>
  <path class="ink" d="M80.8 69.5 H99.2 M80.8 78.5 H99.2"/>
  <text x="90" y="120" text-anchor="middle">Dumb-bell</text>
  <text x="90" y="138" text-anchor="middle" class="s">Land, take off and</text>
  <text x="90" y="155" text-anchor="middle" class="s">taxi on runways and</text>
  <text x="90" y="172" text-anchor="middle" class="s">taxiways only</text>

  <circle cx="226" cy="74" r="9" class="ink"/>
  <circle cx="260" cy="74" r="9" class="ink"/>
  <path class="ink" d="M233.8 69.5 H252.2 M233.8 78.5 H252.2"/>
  <rect x="223.5" y="65.4" width="5" height="17.2" class="fill"/>
  <rect x="257.5" y="65.4" width="5" height="17.2" class="fill"/>
  <text x="243" y="120" text-anchor="middle">Bars across the ends</text>
  <text x="243" y="138" text-anchor="middle" class="s">Take off and land on</text>
  <text x="243" y="155" text-anchor="middle" class="s">runways only; ground</text>
  <text x="243" y="172" text-anchor="middle" class="s">movement not confined</text>

  <rect x="375" y="52" width="44" height="44" class="fred" opacity=".16"/>
  <rect x="375" y="52" width="44" height="44" class="red ink"/>
  <path class="orange ink" d="M377.9 95 L418 54.9 M376 93.1 L416.1 53"/>
  <text x="397" y="120" text-anchor="middle">One yellow diagonal</text>
  <text x="397" y="138" text-anchor="middle" class="s red-t">Special precautions</text>
  <text x="397" y="155" text-anchor="middle" class="s">when approaching</text>
  <text x="397" y="172" text-anchor="middle" class="s">and landing</text>

  <rect x="528" y="52" width="44" height="44" class="fred" opacity=".16"/>
  <rect x="528" y="52" width="44" height="44" class="red ink"/>
  <path class="orange ink" d="M530.9 95 L571 54.9 M529 93.1 L569.1 53 M530.9 53 L571 93.1 M529 54.9 L569.1 95"/>
  <text x="550" y="120" text-anchor="middle">Two yellow diagonals</text>
  <text x="550" y="138" text-anchor="middle" class="s red-t">Landing prohibited</text>
  <text x="550" y="155" text-anchor="middle" class="s">aerodrome unsafe and</text>
  <text x="550" y="172" text-anchor="middle" class="s">likely to be prolonged</text>

  <path class="ink" d="M73 210 H81 V218 H89 V226 H81 V234 H73 V226 H65 V218 H73 Z"/>
  <path class="ink" d="M99 210 H107 V218 H115 V226 H107 V234 H99 V226 H91 V218 H99 Z"/>
  <text x="90" y="268" text-anchor="middle">Double white cross</text>
  <text x="90" y="286" text-anchor="middle" class="s">Glider flying</text>
  <text x="90" y="303" text-anchor="middle" class="s">in progress</text>

  <path class="ink" d="M227 202 H259 V210 H247 V242 H239 V210 H227 Z"/>
  <text x="243" y="268" text-anchor="middle">Landing T</text>
  <text x="243" y="286" text-anchor="middle" class="s">Land and take off</text>
  <text x="243" y="303" text-anchor="middle" class="s">along the shaft,</text>
  <text x="243" y="320" text-anchor="middle" class="s">towards the crossarm</text>

  <rect x="371" y="198" width="52" height="48" class="thin"/>
  <path class="ink" d="M377 204 H415 V228"/>
  <polygon class="fill" points="415,242 409,228 421,228"/>
  <text x="397" y="268" text-anchor="middle">Right-hand arrow</text>
  <text x="397" y="286" text-anchor="middle" class="s">Red and yellow, laid</text>
  <text x="397" y="303" text-anchor="middle" class="s">clockwise: right-hand</text>
  <text x="397" y="320" text-anchor="middle" class="s">circuit is in force</text>

  <rect x="533" y="200" width="34" height="42" class="fill" opacity=".16"/>
  <rect x="533" y="200" width="34" height="42" class="ink"/>
  <path class="ink" d="M556 212 A9 9 0 1 0 556 230"/>
  <text x="550" y="268" text-anchor="middle">Black C on yellow</text>
  <text x="550" y="286" text-anchor="middle" class="s">Air traffic services</text>
  <text x="550" y="303" text-anchor="middle" class="s">reporting office</text>
</svg>`
},

msgpriority: {
  alt: 'A six-rung ladder of aeronautical message categories in descending priority — distress, urgency, direction finding, flight safety, meteorological, flight regularity — each rung giving the spoken signal and an example, with a downward priority arrow at the left and a bracket marking the top two rungs as taking absolute priority on any frequency.',
  cap: 'The ranking decides who gets the frequency when two stations want it at once. Only the top two carry a spoken signal, each said three times, and only they outrank everything else — make the call on the frequency already in use rather than changing to 121.500. Below flight regularity CAP 413 lists four lower categories still, but these six are the examined order.',
  svg: `<svg class="dg" viewBox="0 0 640 334" role="img" aria-label="Ladder of aeronautical message categories in descending order of priority, distress at the top and flight regularity at the bottom">
  <defs>
    <marker id="msgpriority-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0 0 L10 5 L0 10 Z" class="fill"/>
    </marker>
  </defs>

  <text x="6" y="34" class="s">Priority decreases</text>
  <line x1="20" y1="58" x2="20" y2="314" class="ink" marker-end="url(#msgpriority-arrow)"/>

  <text x="52" y="52" class="s">Category</text>
  <text x="200" y="52" class="s">Spoken signal</text>

  <rect x="40" y="62" width="426" height="36" rx="3" class="fred" opacity=".13"/>
  <rect x="40" y="62" width="426" height="36" rx="3" class="red ink"/>
  <text x="30" y="76" text-anchor="middle" class="red-t">1</text>
  <text x="52" y="76" class="b red-t">Distress</text>
  <text x="200" y="76" class="red-t">MAYDAY MAYDAY MAYDAY</text>
  <text x="52" y="95" class="s">Engine failure, forced landing</text>

  <rect x="40" y="104" width="426" height="36" rx="3" class="fred" opacity=".13"/>
  <rect x="40" y="104" width="426" height="36" rx="3" class="red ink"/>
  <text x="30" y="118" text-anchor="middle" class="red-t">2</text>
  <text x="52" y="118" class="b red-t">Urgency</text>
  <text x="200" y="118" class="red-t">PAN PAN, PAN PAN, PAN PAN</text>
  <text x="52" y="137" class="s">A passenger taken ill; a pilot unsure of position</text>

  <rect x="40" y="146" width="426" height="36" rx="3" class="ink"/>
  <text x="30" y="160" text-anchor="middle">3</text>
  <text x="52" y="160" class="b">Direction finding</text>
  <text x="200" y="160" class="s">none</text>
  <text x="52" y="179" class="s">A request for a QDM or a VDF bearing</text>

  <rect x="40" y="188" width="426" height="36" rx="3" class="ink"/>
  <text x="30" y="202" text-anchor="middle">4</text>
  <text x="52" y="202" class="b">Flight safety</text>
  <text x="200" y="202" class="s">none</text>
  <text x="52" y="221" class="s">A clearance, a position report, a flight plan message</text>

  <rect x="40" y="230" width="426" height="36" rx="3" class="ink"/>
  <text x="30" y="244" text-anchor="middle">5</text>
  <text x="52" y="244" class="b">Meteorological</text>
  <text x="200" y="244" class="s">none</text>
  <text x="52" y="263" class="s">The ATIS, a VOLMET, an aerodrome report on request</text>

  <rect x="40" y="272" width="426" height="36" rx="3" class="ink"/>
  <text x="30" y="286" text-anchor="middle">6</text>
  <text x="52" y="286" class="b">Flight regularity</text>
  <text x="200" y="286" class="s">none</text>
  <text x="52" y="305" class="s">A company message — an engineer wanted on arrival</text>

  <path d="M470 62 L478 62 L478 140 L470 140" class="red ink"/>
  <text x="488" y="96" class="red-t">Absolute priority</text>
  <text x="488" y="113" class="s">on any frequency</text>
</svg>`
},

vndiagram: {
  alt: 'A V-n diagram with load factor on the vertical axis and indicated airspeed along the bottom: an accelerated stall curve rises from the origin to meet the +3.8 limit load factor line at VA, a second dashed curve for a lighter aeroplane meets it further to the left, a negative stall curve falls to the −1.52 limit, VNO and VNE are marked along the bottom with a shaded caution band between them, and a shaded band above the limit line between VA and VNE is labelled structural failure.',
  cap: 'Every boundary is a limitation. Left of the stall curve the wing simply stalls, so below V<sub>A</sub> full control deflection stalls the wing before it can overstress the aeroplane — the g you can pull is limited by the wing, not the structure. Lighten the aeroplane and it stalls more slowly: the whole curve slides left, and with it the point where it meets +3.8. That is why V<sub>A</sub> <em>falls</em> as mass falls — the one limitation that gets more restrictive as you get lighter. Between V<sub>NO</sub> and V<sub>NE</sub>, the yellow arc, smooth air only.',
  svg: `<svg class="dg" viewBox="0 0 640 400" role="img" aria-label="V-n manoeuvring envelope: load factor against indicated airspeed">
  <defs><marker id="vndiagram-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L10 5 L0 10 z" class="fblue"/></marker></defs>
  <!-- overstress is only reachable between VA and VNE: below VA the wing stalls first -->
  <rect x="416" y="64" width="183" height="33" class="tint"/>
  <rect x="477" y="97" width="122" height="234" class="tint"/>
  <text x="7" y="32" class="s">Load factor n</text>
  <text x="7" y="50" class="s">normal category limits</text>
  <line x1="96" y1="64" x2="96" y2="338" class="thin"/>
  <line x1="96" y1="264" x2="600" y2="264" class="thin"/>
  <text x="90" y="101" text-anchor="end" class="s">+3.8</text>
  <text x="90" y="224" text-anchor="end" class="s">+1</text>
  <text x="90" y="268" text-anchor="end" class="s">0</text>
  <text x="90" y="335" text-anchor="end" class="s">&#8722;1.52</text>
  <text x="628" y="256" text-anchor="end" class="s">IAS</text>
  <!-- limit levels drawn thin where the stall curve reaches them first -->
  <line x1="96" y1="97" x2="416" y2="97" class="thin dash"/>
  <line x1="96" y1="331" x2="299" y2="331" class="thin dash"/>
  <line x1="96" y1="220" x2="261" y2="220" class="thin dash"/>
  <!-- the envelope: stall curve, +3.8 limit, VNE, -1.52 limit, negative stall curve -->
  <path d="M 96 264 L 142 261 L 172 255 L 203 246 L 233 233 L 261 220 L 291 202 L 322 181 L 352 158 L 383 131 L 416 97 L 599 97 L 599 331 L 299 331 L 264 310 L 230 293 L 194 279 L 157 270 Z" class="ink"/>
  <!-- same aeroplane, lighter: stalls slower, so the curve slides left -->
  <path d="M 96 264 L 142 260 L 172 252 L 194 244 L 218 233 L 242 220 L 273 200 L 303 176 L 334 148 L 358 123 L 382 97" class="blue ink dash"/>
  <line x1="416" y1="97" x2="416" y2="338" class="thin dash"/>
  <line x1="477" y1="97" x2="477" y2="338" class="thin dash"/>
  <line x1="599" y1="331" x2="599" y2="338" class="thin dash"/>
  <line x1="382" y1="97" x2="382" y2="338" class="blue thin dash"/>
  <circle cx="261" cy="220" r="3" class="fill"/>
  <circle cx="416" cy="97" r="4" class="fill"/>
  <circle cx="382" cy="97" r="4" class="fblue"/>
  <line x1="406" y1="110" x2="372" y2="110" class="blue ink" marker-end="url(#vndiagram-ar)"/>
  <text x="507" y="86" text-anchor="middle" class="s">Structural failure</text>
  <text x="106" y="132" class="s">Below VA the wing stalls before</text>
  <text x="106" y="150" class="s">full deflection can break it</text>
  <text x="106" y="188" class="s blue-t">Lighter: stalls slower,</text>
  <text x="106" y="206" class="s blue-t">so VA falls too</text>
  <text x="268" y="238">VS1</text>
  <text x="538" y="286" text-anchor="middle" class="s">Caution range</text>
  <text x="538" y="304" text-anchor="middle" class="s">smooth air only</text>
  <text x="416" y="360" text-anchor="middle">VA</text>
  <text x="477" y="360" text-anchor="middle">VNO</text>
  <text x="599" y="360" text-anchor="middle">VNE</text>
  <text x="382" y="382" text-anchor="middle" class="s blue-t">VA when lighter</text>
</svg>`
},

wakeavoid: {
  alt: 'Two panels: a rear view of a heavy aeroplane trailing counter-rotating wingtip vortices that sink, with a crosswind holding the upwind one over the runway while the downwind one drifts clear; and side views of a light aeroplane landing short of a departing heavy\'s rotation point, and landing beyond a landing heavy\'s touchdown point while staying above its approach path.',
  cap: 'Vortices sink 300 to 500 ft/min, level about 900 ft below the generating aircraft\'s path, and drift with the wind, so a light crosswind can hold the upwind one over the runway while the downwind one clears. All four cases are one rule: stay above the heavy\'s path, and put your wheels where its wake never reached, short of its rotation point or beyond its touchdown point.',
  svg: `<svg class="dg" viewBox="0 0 640 370" role="img" aria-label="Left, rear view: a heavy aeroplane with counter-rotating wingtip vortices sinking, a crosswind holding the upwind vortex over the runway while the downwind one drifts clear. Right, side views: landing short of a departing heavy's rotation point, and landing beyond a landing heavy's touchdown point while staying above its path.">
  <defs>
    <marker id="wakeavoid-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" class="fill"/></marker>
    <marker id="wakeavoid-arrowg" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" class="fgreen"/></marker>
  </defs>

  <line x1="274" y1="10" x2="274" y2="356" class="thin"/>

  <text x="10" y="22" class="b">From behind: where they go</text>
  <text x="160" y="38" text-anchor="middle" class="s">heavy, slow, clean</text>

  <line x1="106" y1="68" x2="214" y2="68" class="ink"/>
  <rect x="153" y="57" width="14" height="17" rx="6" class="ink"/>
  <line x1="160" y1="57" x2="160" y2="45" class="ink"/>
  <line x1="150" y1="47" x2="170" y2="47" class="ink"/>
  <line x1="128" y1="68" x2="128" y2="75" class="ink"/>
  <line x1="192" y1="68" x2="192" y2="75" class="ink"/>

  <path d="M106,72 C100,130 98,200 110,286" class="ink" marker-end="url(#wakeavoid-arrow)"/>
  <path d="M214,72 C222,130 238,206 254,286" class="ink" marker-end="url(#wakeavoid-arrow)"/>
  <path d="M107.5,161.3 A13,13 0 1 1 114,150" class="ink" marker-end="url(#wakeavoid-arrow)"/>
  <path d="M220.5,162.3 A13,13 0 1 0 214,151" class="ink" marker-end="url(#wakeavoid-arrow)"/>
  <line x1="160" y1="108" x2="160" y2="170" class="ink" opacity=".8" marker-end="url(#wakeavoid-arrow)"/>
  <text x="160" y="188" text-anchor="middle" class="s">sinking</text>
  <text x="160" y="206" text-anchor="middle" class="s">300-500 ft/min</text>

  <text x="14" y="238" class="s">crosswind</text>
  <line x1="14" y1="250" x2="70" y2="250" class="ink" opacity=".7" marker-end="url(#wakeavoid-arrow)"/>

  <line x1="10" y1="296" x2="262" y2="296" class="thin"/>
  <line x1="96" y1="296" x2="224" y2="296" class="ink"/>
  <line x1="96" y1="290" x2="96" y2="302" class="ink"/>
  <line x1="224" y1="290" x2="224" y2="302" class="ink"/>
  <text x="160" y="288" text-anchor="middle" class="s">runway</text>
  <text x="12" y="316">upwind vortex held over the runway</text>
  <text x="12" y="336">downwind vortex drifts clear</text>

  <text x="290" y="22" class="b">From the side: where your wheels go</text>

  <text x="300" y="44">Behind a departing heavy</text>
  <line x1="300" y1="164" x2="616" y2="164" class="ink"/>
  <path d="M474,164 C520,160 560,154 612,150 L612,164 Z" class="tint"/>
  <path d="M474,164 C520,160 560,154 612,150" class="ink dash" opacity=".55"/>
  <path d="M470,164 C505,132 530,100 575,70" class="ink"/>
  <line x1="470" y1="156" x2="470" y2="178" class="ink"/>
  <g transform="translate(568,75) rotate(-34)">
    <path d="M-16,-2.5 L4,-2.5 L13,0 L4,2.5 L-16,2.5 Z" class="ink"/>
    <path d="M-15,-2 L-12,-11 L-8,-2" class="ink"/>
    <path d="M-4,2 L-9,10 L-1,2" class="ink"/>
  </g>
  <text x="592" y="66" class="s">heavy</text>
  <text x="520" y="136" class="s">its wake sinks</text>
  <rect x="320" y="157" width="144" height="7" class="fgreen" opacity=".28"/>
  <line x1="330" y1="130" x2="397" y2="160" class="green ink" marker-end="url(#wakeavoid-arrowg)"/>
  <g transform="translate(352,140) rotate(24)">
    <path d="M-13,-2 L3,-2 L10,0 L3,2 L-13,2 Z" class="green ink"/>
    <path d="M-12,-1.6 L-9.5,-9 L-6.5,-1.6" class="green ink"/>
    <path d="M-3,1.6 L-7,8 L-1,1.6" class="green ink"/>
  </g>
  <text x="300" y="96" class="green-t">touch down before it</text>
  <text x="300" y="114" class="green-t">or rotate before it</text>
  <text x="300" y="132" class="green-t s">you</text>
  <text x="300" y="184" class="s">runway</text>
  <text x="478" y="184" class="s">rotation point</text>

  <text x="300" y="208">Behind a landing heavy</text>
  <line x1="300" y1="330" x2="616" y2="330" class="ink"/>
  <path d="M300,278 L470,330 C410,327 350,318 300,304 Z" class="tint"/>
  <path d="M300,304 C350,318 410,327 470,330" class="ink dash" opacity=".55"/>
  <line x1="300" y1="278" x2="470" y2="330" class="ink"/>
  <line x1="470" y1="322" x2="470" y2="344" class="ink"/>
  <g transform="translate(356,295) rotate(17)">
    <path d="M-16,-2.5 L4,-2.5 L13,0 L4,2.5 L-16,2.5 Z" class="ink"/>
    <path d="M-15,-2 L-12,-11 L-8,-2" class="ink"/>
    <path d="M-4,2 L-9,10 L-1,2" class="ink"/>
  </g>
  <rect x="476" y="323" width="140" height="7" class="fgreen" opacity=".28"/>
  <line x1="306" y1="242" x2="513" y2="327" class="green ink" marker-end="url(#wakeavoid-arrowg)"/>
  <g transform="translate(350,260) rotate(22)">
    <path d="M-13,-2 L3,-2 L10,0 L3,2 L-13,2 Z" class="green ink"/>
    <path d="M-12,-1.6 L-9.5,-9 L-6.5,-1.6" class="green ink"/>
    <path d="M-3,1.6 L-7,8 L-1,1.6" class="green ink"/>
  </g>
  <text x="300" y="228" class="green-t">stay above its path</text>
  <text x="628" y="286" text-anchor="end" class="green-t">touch down beyond it</text>
  <text x="628" y="306" text-anchor="end" class="green-t">or lift off beyond it</text>
  <text x="464" y="350" text-anchor="end" class="s">its touchdown point</text>
</svg>`
},

adfBearing: {
  alt: 'Plan view of an aeroplane, nose up the page, on heading 040 magnetic with the ADF needle 70 degrees right of the nose: one arc runs from magnetic north to the nose and a second from the nose to the needle, and together they make the 110 degree magnetic bearing to the NDB, with a dashed reciprocal of 290 running back through the aircraft; a smaller second case shows heading 310 plus relative bearing 120 making 430, which becomes 070 once 360 is taken off.',
  cap: 'Heading is measured from magnetic north, relative bearing from the nose, and laid end to end the two make the magnetic bearing to the beacon: MB = MH + RB, less 360 whenever the sum runs past it. Add 180 and you have the bearing from the station — the position line you draw from the NDB, converted to true for the chart.',
  svg: `<svg class="dg" viewBox="0 0 640 350" role="img" aria-label="Relative bearing added to magnetic heading gives the magnetic bearing to an NDB, with the reciprocal and the 360 degree wrap">
  <defs>
    <marker id="adfBearing-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker>
    <marker id="adfBearing-arb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" class="fblue"/></marker>
  </defs>
  <line x1="404" y1="22" x2="404" y2="336" class="thin"/>
  <!-- main case: MH 040, RB 070, MB 110 -->
  <text x="20" y="36" class="b">MB = MH + RB</text>
  <text x="20" y="56" class="s">the bearing to the station</text>
  <line x1="196" y1="242" x2="88" y2="113.3" class="ink" marker-end="url(#adfBearing-ar)"/>
  <text x="20" y="104">Magnetic</text>
  <text x="20" y="124">north</text>
  <line x1="196" y1="242" x2="196" y2="96" class="ink"/>
  <line x1="196" y1="242" x2="344.5" y2="188" class="ink" marker-end="url(#adfBearing-ar)"/>
  <line x1="196" y1="242" x2="109.5" y2="273.5" class="ink dash" marker-end="url(#adfBearing-ar)"/>
  <g transform="translate(196,242)"><path d="M0 -27 L3 -11 L29 5 L29 10 L3 4 L2 17 L11 24 L11 27 L0 23 L-11 27 L-11 24 L-2 17 L-3 4 L-29 10 L-29 5 L-3 -11 Z" class="fill" opacity=".92"/></g>
  <text x="314" y="232" text-anchor="middle" class="s">ADF needle</text>
  <circle cx="363" cy="181" r="11" class="ink"/>
  <circle cx="363" cy="181" r="4" class="fill"/>
  <text x="363" y="160" text-anchor="middle" class="b">NDB</text>
  <path d="M147.2 183.8 A 76 76 0 0 1 196 166" class="ink"/>
  <text x="159" y="140" text-anchor="middle">MH 040°</text>
  <path d="M196 166 A 76 76 0 0 1 267.4 216" class="ink"/>
  <text x="254" y="155" text-anchor="middle">RB 070°</text>
  <path d="M106 134.8 A 140 140 0 0 1 327.6 194.1" class="blue ink" marker-end="url(#adfBearing-arb)"/>
  <text x="250" y="72" text-anchor="middle" class="b blue-t">MB 110°</text>
  <text x="250" y="92" text-anchor="middle" class="s blue-t">= 040° + 070°</text>
  <text x="120" y="300" text-anchor="middle">Reciprocal 290°</text>
  <text x="120" y="320" text-anchor="middle" class="s">the position line from the NDB</text>
  <!-- wrap case: MH 310, RB 120, sum 430 -->
  <text x="424" y="36" class="b">When the sum passes 360°</text>
  <line x1="500" y1="150" x2="500" y2="84" class="ink"/>
  <line x1="500" y1="150" x2="561.3" y2="98.6" class="ink" marker-end="url(#adfBearing-ar)"/>
  <line x1="500" y1="150" x2="569.3" y2="190" class="ink" marker-end="url(#adfBearing-ar)"/>
  <g transform="translate(500,150) scale(.58)"><path d="M0 -27 L3 -11 L29 5 L29 10 L3 4 L2 17 L11 24 L11 27 L0 23 L-11 27 L-11 24 L-2 17 L-3 4 L-29 10 L-29 5 L-3 -11 Z" class="fill" opacity=".92"/></g>
  <text x="576" y="92" text-anchor="middle" class="b">N</text>
  <circle cx="586.6" cy="200" r="9" class="ink"/>
  <circle cx="586.6" cy="200" r="3.5" class="fill"/>
  <path d="M533.7 121.7 A 44 44 0 1 1 500 106" class="thin" marker-end="url(#adfBearing-ar)"/>
  <text x="500" y="214" text-anchor="middle">MH 310°</text>
  <path d="M546 111.4 A 60 60 0 0 1 552 180" class="blue ink" marker-end="url(#adfBearing-arb)"/>
  <text x="572" y="156" class="b blue-t">MB 070°</text>
  <text x="424" y="268" class="s">MH 310° + RB 120° = 430°</text>
  <text x="424" y="290" class="blue-t">430° − 360° = MB 070°</text>
  <text x="424" y="314" class="s">the sum ran past north —</text>
  <text x="424" y="334" class="s">a bearing never exceeds 360°</text>
</svg>`
},

induceddrag: {
  alt: 'A wing seen from behind and above, with higher pressure below spilling round the tip, rolling into a trailing tip vortex and pushing the wake behind the wing downwards; below it a wing section where that downwash tilts the local airflow down by the induced angle, so the lift vector, perpendicular to that tilted airflow, leans rearwards and its rearward component is labelled induced drag.',
  cap: 'Higher pressure below spills round the tip, rolls up into the trailing vortex, and pushes the wake behind the wing downwards. That downwash tilts the airflow the wing actually meets, and because lift acts perpendicular to the relative airflow, the whole lift vector tilts back with it — the rearward component is <b>induced drag</b>. The induced angle &alpha;<sub>i</sub> is drawn far larger than the couple of degrees of real life, so the tilt can be seen.',
  svg: `<svg class="dg" viewBox="0 0 640 416" role="img" aria-label="How induced drag is produced: pressure spilling round the wingtip forms a trailing vortex and downwash, which tilts the local airflow and so tilts the lift vector rearwards">
  <defs>
    <marker id="induceddrag-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker>
    <marker id="induceddrag-arb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" class="fblue"/></marker>
  </defs>

  <text x="18" y="28" class="b">1  Where the downwash comes from</text>

  <!-- direction of flight -->
  <line x1="600" y1="104" x2="520" y2="51" class="ink" opacity=".55" marker-end="url(#induceddrag-ar)"/>
  <text x="478" y="124" class="s">Direction of flight</text>

  <!-- the wing, seen from behind and above: root at the left, tip at the right -->
  <path d="M56 112 L252 88 L282 108 L102 143 Z" class="fill" opacity=".12"/>
  <path d="M102 143 L282 108 L252 88 L56 112" class="ink"/>
  <line x1="56" y1="112" x2="102" y2="143" class="ink dash" opacity=".55"/>

  <text x="72" y="70" class="s">Lower pressure above</text>
  <text x="24" y="190" class="s">Higher pressure below</text>

  <!-- higher pressure below spills outboard round the tip on to the upper surface -->
  <path d="M288 120 C320 116, 324 72, 262 68" class="ink" marker-end="url(#induceddrag-ar)"/>
  <text x="300" y="58" class="s">Spills round the tip</text>

  <!-- the spill rolls up into a vortex trailing aft from the tip -->
  <path d="M 306.8 132.8 L 310.1 134.5 L 313.7 135.3 L 317.4 135.4 L 321.1 134.5 L 324.4 133.0 L 327.3 130.9 L 329.6 128.3 L 331.1 125.6 L 331.8 122.8 L 331.8 120.3 L 331.0 118.2 L 329.5 116.7 L 327.6 116.0 L 325.4 116.1 L 323.0 117.0 L 320.8 118.7 L 318.8 121.2 L 317.3 124.2 L 316.5 127.7 L 316.3 131.4 L 317.0 135.0 L 318.4 138.5 L 320.6 141.5 L 323.4 143.9 L 326.7 145.6 L 330.4 146.4 L 334.1 146.5 L 337.7 145.6 L 341.1 144.1 L 344.0 142.0 L 346.2 139.4 L 347.7 136.7 L 348.5 133.9 L 348.4 131.4 L 347.6 129.3 L 346.2 127.8 L 344.3 127.1 L 342.0 127.2 L 339.7 128.1 L 337.4 129.8 L 335.5 132.3 L 334.0 135.3 L 333.1 138.8 L 333.0 142.5 L 333.6 146.1 L 335.1 149.6 L 337.2 152.6 L 340.1 155.0 L 343.4 156.7 L 347.0 157.5 L 350.7 157.6 L 354.4 156.7 L 357.7 155.2 L 360.6 153.1 L 362.8 150.5 L 364.4 147.8 L 365.1 145.0 L 365.0 142.5 L 364.2 140.4 L 362.8 138.9 L 360.9 138.2 L 358.7 138.3 L 356.3 139.2 L 354.1 140.9 L 352.1 143.4 L 350.6 146.4 L 349.7 149.9 L 349.6 153.6 L 350.3 157.2 L 351.7 160.7 L 353.9 163.7 L 356.7 166.1 L 360.0 167.8 L 363.6 168.6 L 367.4 168.7 L 371.0 167.8 L 374.4 166.3 L 377.2 164.2 L 379.5 161.6 L 381.0 158.9 L 381.7 156.1 L 381.7 153.6 L 380.9 151.5 L 379.5 150.0 L 377.5 149.3 L 375.3 149.4 L 373.0 150.3 L 370.7 152.0 L 368.7 154.5 L 367.2 157.5 L 366.4 161.0 L 366.3 164.7 L 366.9 168.3 L 368.3 171.8 L 370.5 174.8 L 373.3 177.2" class="ink" marker-end="url(#induceddrag-ar)"/>
  <text x="400" y="172" class="b">Tip vortex</text>
  <text x="400" y="192" class="s">strongest when slow and heavy</text>

  <!-- and the wake behind the wing is pushed down -->
  <line x1="182" y1="147" x2="182" y2="181" class="blue ink" marker-end="url(#induceddrag-arb)"/>
  <line x1="226" y1="139" x2="226" y2="173" class="blue ink" marker-end="url(#induceddrag-arb)"/>
  <line x1="270" y1="130" x2="270" y2="164" class="blue ink" marker-end="url(#induceddrag-arb)"/>
  <text x="188" y="210" class="b blue-t">Downwash</text>

  <text x="18" y="258" class="b">2  The lift vector tilts back</text>

  <!-- the two airflows, meeting at the induced angle -->
  <line x1="30" y1="364" x2="198" y2="364" class="ink" opacity=".7" marker-end="url(#induceddrag-ar)"/>
  <text x="30" y="384" class="s">Free-stream airflow</text>
  <line x1="40" y1="314" x2="176" y2="364" class="blue ink" marker-end="url(#induceddrag-arb)"/>
  <text x="26" y="302" class="s">Airflow tilted by the downwash</text>
  <path d="M116 364 A 60 60 0 0 1 120 343" class="blue ink"/>
  <text x="84" y="355" class="blue-t">αi</text>

  <!-- the section, and the lift resolved -->
  <path d="M206 358 C228 348, 266 358, 294 377 C264 375, 225 366, 206 358 Z" class="fill" opacity=".12"/>
  <path d="M206 358 C228 348, 266 358, 294 377 C264 375, 225 366, 206 358 Z" class="ink"/>
  <line x1="238" y1="355" x2="238" y2="254" class="ink dash" opacity=".55"/>
  <text x="230" y="278" text-anchor="end" class="s">Supports the weight</text>
  <line x1="238" y1="355" x2="275" y2="254" class="blue ink" marker-end="url(#induceddrag-arb)"/>
  <line x1="238" y1="254" x2="275" y2="254" class="blue ink" marker-end="url(#induceddrag-arb)"/>
  <text x="238" y="240" class="b blue-t">Induced drag</text>
  <text x="288" y="272" class="b blue-t">LIFT</text>
  <text x="288" y="292" class="s blue-t">perpendicular to the tilted airflow</text>

  <!-- what reduces it -->
  <rect x="356" y="304" width="274" height="102" rx="8" class="tint"/>
  <text x="364" y="330" class="b">Less induced drag</text>
  <circle cx="366" cy="350" r="2.2" class="fill"/>
  <text x="376" y="354" class="s">higher aspect ratio (long thin wings)</text>
  <circle cx="366" cy="370" r="2.2" class="fill"/>
  <text x="376" y="374" class="s">winglets weaken the tip vortex</text>
  <circle cx="366" cy="390" r="2.2" class="fill"/>
  <text x="376" y="394" class="s">more speed — induced drag ∝ 1/V²</text>
</svg>`
},

vhfrange: {
  alt: 'A ground station\'s line of sight drawn as a straight ray grazing a curved earth, with aircraft at 1000 ft, 3000 ft and 10,000 ft sitting on that ray at 40, 68 and 125 nautical miles; below, a ridge casts a radio shadow in which a low aircraft is out of contact while a higher aircraft, reached by a climb arrow, stays in contact.',
  cap: 'VHF is line of sight, so the earth\'s curve fixes how far you can talk: sitting on the same grazing ray, an aircraft is only 1000 ft up at 40 NM but 10,000 ft up at 125 NM. Terrain does the same thing far more abruptly — behind a ridge you are in its radio shadow until you climb above the line that grazes the top, which is why the first remedy for no reply is to climb.',
  svg: `<svg class="dg" viewBox="0 0 640 424" role="img" aria-label="Radio horizon geometry: a line of sight tangent to the curved earth from a ground station, with aircraft at 1000 ft, 3000 ft and 10,000 ft reaching 40, 68 and 125 nautical miles, and a second panel showing a ridge casting a radio shadow over a low aircraft while a higher one stays in contact">
  <defs>
    <marker id="vhfrange-bh" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,1 L9,5 L0,9 Z" class="fblue"/></marker>
    <marker id="vhfrange-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,1 L9,5 L0,9 Z" class="fill"/></marker>
  </defs>

  <text x="12" y="32" class="b">Height sets the range</text>
  <text x="628" y="32" text-anchor="end">range in NM ≈ 1.25 × √(height in ft)</text>
  <text x="628" y="50" text-anchor="end" class="s">vertical scale exaggerated</text>

  <path class="tint" d="M0,97.8 Q307,80.5 614,229.1 L614,240 L0,240 Z"/>
  <path class="ink" d="M0,97.8 Q307,80.5 614,229.1"/>

  <line x1="224" y1="96" x2="224" y2="111" class="ink dash" opacity=".55"/>
  <line x1="339" y1="96" x2="339" y2="135" class="ink dash" opacity=".55"/>
  <line x1="564" y1="96" x2="564" y2="212" class="ink dash" opacity=".55"/>

  <line x1="64" y1="96" x2="610" y2="96" class="blue ink" marker-end="url(#vhfrange-bh)"/>

  <line x1="64" y1="96" x2="64" y2="72" class="ink"/>
  <line x1="58" y1="80" x2="70" y2="80" class="ink"/>
  <line x1="59.5" y1="88" x2="68.5" y2="88" class="ink"/>

  <path class="fill" d="M211,97.5 L211,94.5 L227,93.5 L236,96 L227,98.5 Z"/>
  <path class="fill" d="M211,94.5 L213,87 L217,94.5 Z"/>
  <path class="fill" d="M221,98 L215,105 L223,105 L226,98 Z"/>
  <path class="fill" d="M326,97.5 L326,94.5 L342,93.5 L351,96 L342,98.5 Z"/>
  <path class="fill" d="M326,94.5 L328,87 L332,94.5 Z"/>
  <path class="fill" d="M336,98 L330,105 L338,105 L341,98 Z"/>
  <path class="fill" d="M551,97.5 L551,94.5 L567,93.5 L576,96 L567,98.5 Z"/>
  <path class="fill" d="M551,94.5 L553,87 L557,94.5 Z"/>
  <path class="fill" d="M561,98 L555,105 L563,105 L566,98 Z"/>

  <text x="80" y="86" class="blue-t">line of sight</text>
  <text x="224" y="80" text-anchor="middle">1000 ft</text>
  <text x="339" y="80" text-anchor="middle">3000 ft</text>
  <text x="564" y="80" text-anchor="middle">10,000 ft</text>
  <text x="558" y="160" text-anchor="end" class="s">aircraft height</text>
  <text x="64" y="116" text-anchor="middle" class="s">ground station</text>
  <text x="224" y="130" text-anchor="middle" class="s">40 NM</text>
  <text x="339" y="152" text-anchor="middle" class="s">68 NM</text>
  <text x="564" y="232" text-anchor="middle" class="s">125 NM</text>

  <line x1="0" y1="244" x2="640" y2="244" class="thin"/>
  <text x="12" y="274" class="b">Terrain blocks it too</text>

  <path class="fill" opacity=".1" d="M230,334 L610,280.4 L610,394 L300,394 Z"/>
  <path class="tint" d="M0,394 L175,394 L230,334 L300,394 L640,394 L640,424 L0,424 Z"/>
  <path class="ink" d="M0,394 L175,394 L230,334 L300,394 L640,394"/>

  <line x1="60" y1="394" x2="60" y2="358" class="ink"/>
  <line x1="54" y1="366" x2="66" y2="366" class="ink"/>
  <line x1="55.5" y1="374" x2="64.5" y2="374" class="ink"/>

  <line x1="60" y1="358" x2="610" y2="280.4" class="blue ink" marker-end="url(#vhfrange-bh)"/>
  <line x1="64" y1="358" x2="208.7" y2="357.2" class="blue ink dash"/>
  <line x1="257" y1="356.9" x2="415" y2="356.1" class="blue ink dash" opacity=".3"/>

  <line x1="450" y1="346" x2="490" y2="294" class="ink" marker-end="url(#vhfrange-ah)"/>

  <path class="fill" d="M417,357.5 L417,354.5 L433,353.5 L442,356 L433,358.5 Z"/>
  <path class="fill" d="M417,354.5 L419,347 L423,354.5 Z"/>
  <path class="fill" d="M427,358 L421,365 L429,365 L432,358 Z"/>
  <path class="fill" d="M487,281.5 L487,278.5 L503,277.5 L512,280 L503,282.5 Z"/>
  <path class="fill" d="M487,278.5 L489,271 L493,278.5 Z"/>
  <path class="fill" d="M497,282 L491,289 L499,289 L502,282 Z"/>

  <text x="250" y="310" class="blue-t">line of sight</text>
  <text x="330" y="344" text-anchor="middle">radio shadow</text>
  <text x="130" y="376" text-anchor="middle" class="s">blocked</text>
  <text x="430" y="384" text-anchor="middle">out of contact</text>
  <text x="500" y="266" text-anchor="middle">in contact</text>
  <text x="494" y="322" class="s">climb</text>
  <text x="60" y="412" text-anchor="middle" class="s">ground station</text>
</svg>`
},

safetyAlt: {
  alt: 'Two stacked panels over the same stretch of track: a plan view with a corridor 5 NM either side of track containing spot heights of 1120, 1480 and 980 feet and a 2100 foot spot crossed out beyond the corridor, and an elevation view below where the 1480 foot hill carries a 400 foot mast to 1880 feet, with a 1000 foot dimension arrow above it reaching a blue safety altitude line at 2900 feet.',
  cap: 'Take the highest terrain or obstacle inside the corridor, not the highest thing on the chart — the 2100 ft spot lies outside the 5 NM either side of track and plays no part. The 1480 ft hill carries a 400 ft mast, so the obstacle tops out at 1880 ft; add 1000 ft (2000 ft over high ground) and round up to the next 100 ft.',
  svg: `<svg class="dg" viewBox="0 0 640 400" role="img" aria-label="Building a safety altitude from the highest obstacle inside a 5 NM corridor either side of track">
  <defs>
    <marker id="safetyAlt-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" class="fill"/></marker>
    <marker id="safetyAlt-arb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" class="fblue"/></marker>
  </defs>

  <text x="8" y="22" class="b">Plan view - the 5 NM corridor</text>

  <circle cx="250" cy="44" r="4.5" class="ink"/>
  <line x1="246.8" y1="40.8" x2="253.2" y2="47.2" class="ink"/>
  <line x1="253.2" y1="40.8" x2="246.8" y2="47.2" class="ink"/>
  <text x="262" y="48">2100 ft</text>
  <text x="322" y="48" class="s">outside the corridor - ignored</text>

  <rect x="96" y="68" width="480" height="80" class="tint"/>
  <line x1="96" y1="68" x2="576" y2="68" class="ink dash"/>
  <line x1="96" y1="148" x2="576" y2="148" class="ink dash"/>

  <line x1="96" y1="108" x2="578" y2="108" class="ink" marker-end="url(#safetyAlt-ar)"/>
  <text x="90" y="112" text-anchor="end">track</text>

  <line x1="120" y1="70" x2="120" y2="106" class="ink" marker-start="url(#safetyAlt-ar)" marker-end="url(#safetyAlt-ar)"/>
  <line x1="120" y1="110" x2="120" y2="146" class="ink" marker-start="url(#safetyAlt-ar)" marker-end="url(#safetyAlt-ar)"/>
  <text x="128" y="86">5 NM</text>
  <text x="128" y="134">5 NM</text>

  <circle cx="206" cy="88" r="3" class="fill"/>
  <text x="216" y="92">1120 ft</text>
  <circle cx="486" cy="88" r="3" class="fill"/>
  <text x="496" y="92">980 ft</text>
  <circle cx="334" cy="132" r="4" class="fblue"/>
  <text x="346" y="136" class="blue-t">1480 ft</text>
  <text x="404" y="136" class="s">highest in the corridor</text>

  <text x="8" y="182" class="b">Elevation along the same track</text>

  <path d="M96 384 L96 378 L132 372 L168 356 L190 332 L206 319 L224 338 L252 356 L276 358 L300 330 L318 300 L330 298 L342 300 L360 318 L386 344 L420 356 L452 348 L470 334 L486 327 L506 344 L534 362 L560 374 L578 380 L578 384 Z" class="tint"/>
  <path d="M96 378 L132 372 L168 356 L190 332 L206 319 L224 338 L252 356 L276 358 L300 330 L318 300 L330 298 L342 300 L360 318 L386 344 L420 356 L452 348 L470 334 L486 327 L506 344 L534 362 L560 374 L578 380" class="ink"/>

  <text x="196" y="312" text-anchor="end" class="s">1120 ft</text>
  <text x="498" y="320" class="s">980 ft</text>
  <text x="300" y="296" text-anchor="end" class="blue-t">1480 ft</text>

  <line x1="330" y1="298" x2="330" y2="275" class="ink"/>
  <line x1="330" y1="277" x2="320" y2="298" class="thin"/>
  <line x1="330" y1="277" x2="340" y2="298" class="thin"/>
  <text x="318" y="272" text-anchor="end">400 ft mast</text>

  <line x1="332" y1="275" x2="372" y2="275" class="thin"/>
  <text x="382" y="279" class="blue-t">1880 ft</text>

  <line x1="356" y1="275" x2="356" y2="218" class="blue ink" marker-start="url(#safetyAlt-arb)" marker-end="url(#safetyAlt-arb)"/>
  <text x="364" y="250" class="blue-t">+1000 ft</text>

  <line x1="96" y1="216" x2="576" y2="216" class="blue ink"/>
  <text x="96" y="206" class="b blue-t">safety altitude 2900 ft</text>
  <text x="96" y="234" class="s">2880 rounded up to the next 100 ft</text>
</svg>`
},

vhfband: {
  alt: 'A ruler of the VHF band from 108 to 137 MHz: the tinted 108.000 to 117.975 segment is VOR and ILS localiser, 118.000 to 136.975 is communications, a red flag drops onto 121.500, and a pointer at 123.000 opens out below into one 25 kHz channel split into three 8.33 kHz channels labelled 123.005, 123.010 and 123.015.',
  cap: 'The comms band starts at 118.000. Everything below it, down to 108.000, belongs to the VOR and ILS localiser — you tune those, you do not talk on them, though they carry voice identification and some carry a VOLMET. That boundary is the exam trap. 121.500 sits inside the comms band, not beside it. Each old 25 kHz channel now holds three 8.33 kHz channels, which is where the six-digit frequencies come from.',
  svg: `<svg class="dg" viewBox="0 0 640 306" role="img" aria-label="A ruler of the aeronautical VHF band from 108 to 137 MHz showing the navigation segment, the communications segment, the emergency frequency 121.500, and one 25 kHz channel magnified into three 8.33 kHz channels">
  <text x="132" y="20" text-anchor="middle" class="b">VOR and ILS localiser</text>
  <text x="132" y="38" text-anchor="middle" class="s">navigation, not comms</text>
  <text x="302" y="20" text-anchor="middle" class="b red-t">121.500</text>
  <text x="302" y="38" text-anchor="middle" class="s red-t">emergency – D and D</text>
  <text x="460" y="20" text-anchor="middle" class="b">VHF communications</text>
  <text x="460" y="38" text-anchor="middle" class="s">8.33 kHz channel spacing</text>

  <text x="34" y="58" class="s">108.000</text>
  <text x="226" y="58" text-anchor="end" class="s">117.975</text>
  <text x="238" y="58" class="s">118.000</text>
  <text x="610" y="58" text-anchor="end" class="s">136.975</text>

  <rect x="32" y="66" width="199.5" height="32" class="tint"/>
  <rect x="32" y="66" width="199.5" height="32" class="ink"/>
  <rect x="232" y="66" width="379.5" height="32" class="ink"/>
  <line x1="232" y1="62" x2="232" y2="104" class="ink"/>

  <line x1="32" y1="98" x2="32" y2="103" class="ink"/>
  <line x1="52" y1="98" x2="52" y2="103" class="ink"/>
  <line x1="92" y1="98" x2="92" y2="103" class="ink"/>
  <line x1="112" y1="98" x2="112" y2="103" class="ink"/>
  <line x1="132" y1="98" x2="132" y2="103" class="ink"/>
  <line x1="152" y1="98" x2="152" y2="103" class="ink"/>
  <line x1="192" y1="98" x2="192" y2="103" class="ink"/>
  <line x1="212" y1="98" x2="212" y2="103" class="ink"/>
  <line x1="252" y1="98" x2="252" y2="103" class="ink"/>
  <line x1="292" y1="98" x2="292" y2="103" class="ink"/>
  <line x1="312" y1="98" x2="312" y2="103" class="ink"/>
  <line x1="352" y1="98" x2="352" y2="103" class="ink"/>
  <line x1="392" y1="98" x2="392" y2="103" class="ink"/>
  <line x1="412" y1="98" x2="412" y2="103" class="ink"/>
  <line x1="432" y1="98" x2="432" y2="103" class="ink"/>
  <line x1="452" y1="98" x2="452" y2="103" class="ink"/>
  <line x1="492" y1="98" x2="492" y2="103" class="ink"/>
  <line x1="512" y1="98" x2="512" y2="103" class="ink"/>
  <line x1="532" y1="98" x2="532" y2="103" class="ink"/>
  <line x1="552" y1="98" x2="552" y2="103" class="ink"/>
  <line x1="592" y1="98" x2="592" y2="103" class="ink"/>
  <line x1="612" y1="98" x2="612" y2="103" class="ink"/>

  <line x1="72" y1="98" x2="72" y2="109" class="ink"/>
  <line x1="172" y1="98" x2="172" y2="109" class="ink"/>
  <line x1="272" y1="98" x2="272" y2="109" class="ink"/>
  <line x1="372" y1="98" x2="372" y2="109" class="ink"/>
  <line x1="472" y1="98" x2="472" y2="109" class="ink"/>
  <line x1="572" y1="98" x2="572" y2="109" class="ink"/>

  <text x="72" y="124" text-anchor="middle" class="s">110</text>
  <text x="172" y="124" text-anchor="middle" class="s">115</text>
  <text x="272" y="124" text-anchor="middle" class="s">120</text>
  <text x="372" y="124" text-anchor="middle" class="s">125</text>
  <text x="472" y="124" text-anchor="middle" class="s">130</text>
  <text x="572" y="124" text-anchor="middle" class="s">135</text>
  <text x="612" y="124" text-anchor="middle" class="s">MHz</text>

  <line x1="302" y1="48" x2="302" y2="104" class="red ink"/>
  <path d="M302 48 L318 54 L302 60 Z" class="fred"/>

  <path d="M332 99 L338 108 L326 108 Z" class="fill"/>
  <line x1="332" y1="108" x2="332" y2="142" class="thin dash"/>
  <line x1="332" y1="142" x2="220" y2="160" class="thin dash"/>
  <line x1="332" y1="142" x2="600" y2="160" class="thin dash"/>

  <rect x="220" y="160" width="380" height="28" class="tint"/>
  <rect x="220" y="160" width="380" height="28" class="ink"/>
  <text x="206" y="168" text-anchor="end" class="b">one 25 kHz channel</text>
  <text x="206" y="188" text-anchor="end" class="s">magnified from 123.000</text>

  <text x="206" y="209" text-anchor="end" class="s">one becomes three</text>
  <line x1="282" y1="190" x2="282" y2="212" class="ink"/>
  <path d="M282 220 L277 211 L287 211 Z" class="fill"/>
  <line x1="410" y1="190" x2="410" y2="212" class="ink"/>
  <path d="M410 220 L405 211 L415 211 Z" class="fill"/>
  <line x1="538" y1="190" x2="538" y2="212" class="ink"/>
  <path d="M538 220 L533 211 L543 211 Z" class="fill"/>

  <rect x="220" y="222" width="124" height="28" class="ink"/>
  <rect x="348" y="222" width="124" height="28" class="ink"/>
  <rect x="476" y="222" width="124" height="28" class="ink"/>
  <text x="206" y="238" text-anchor="end" class="b">three 8.33 kHz channels</text>

  <text x="282" y="268" text-anchor="middle">123.005</text>
  <text x="410" y="268" text-anchor="middle">123.010</text>
  <text x="538" y="268" text-anchor="middle">123.015</text>
  <text x="410" y="290" text-anchor="middle" class="s">six-digit designators – set exactly what is published</text>
</svg>`
},

};
