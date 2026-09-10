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
  <text x="164" y="49" class="b">Class A</text>
  <text x="164" y="65" class="s">IFR only — VFR not permitted</text>
  <!-- Class E block -->
  <rect x="430" y="110" width="200" height="70" class="fblue" opacity=".10"/>
  <rect x="430" y="110" width="200" height="70" class="blue ink dash"/>
  <text x="444" y="132" class="b">Class E</text>
  <text x="444" y="148" class="s">No clearance needed</text>
  <text x="444" y="163" class="s">Traffic info if practical</text>
  <!-- Class D CTR -->
  <path d="M210 290 L210 150 L390 150 L390 290" class="fblue" opacity=".16"/>
  <path d="M210 290 L210 150 L390 150 L390 290" class="blue ink"/>
  <text x="224" y="174" class="b">Class D</text>
  <text x="224" y="190" class="s">Clearance + radio</text>
  <text x="224" y="205" class="s">Traffic info, no separation</text>
  <!-- Class G -->
  <text x="26" y="150" class="b">Class G</text>
  <text x="26" y="166" class="s">No clearance</text>
  <text x="26" y="181" class="s">No radio required</text>
  <text x="26" y="196" class="s">FIS on request</text>
  <!-- ground -->
  <line x1="0" y1="290" x2="640" y2="290" class="ink"/>
  <path d="M270 290 l14 -16 h34 l14 16 z" class="fill" opacity=".5"/>
  <text x="300" y="308" text-anchor="middle" class="s">Aerodrome</text>
  <!-- aeroplane in G -->
  <g transform="translate(80,232)"><path d="M0 0 l22 0 M11 -7 l0 14 M18 -4 l0 8" class="ink"/></g>
  <text x="91" y="236" class="s">You, VFR</text>
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
  <text x="34" y="165" class="s">whichever is higher</text>
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
  <rect x="150" y="30" width="340" height="230" class="tint"/>
  <!-- tropopause -->
  <line x1="120" y1="60" x2="520" y2="60" class="ink blue"/>
  <text x="530" y="56" class="b blue">Tropopause</text>
  <text x="530" y="72" class="s">36,090 ft (11 km)</text>
  <text x="530" y="87" class="s">−56.5 °C</text>
  <text x="112" y="64" text-anchor="end" class="s">Stratosphere above</text>
  <!-- sea level -->
  <line x1="120" y1="260" x2="520" y2="260" class="ink"/>
  <text x="530" y="256" class="b">Mean sea level</text>
  <text x="530" y="272" class="s">+15 °C · 1013.25 hPa</text>
  <text x="530" y="287" class="s">1.225 kg/m³</text>
  <!-- gradient line -->
  <line x1="200" y1="260" x2="330" y2="60" class="ink blue"/>
  <text x="212" y="176" class="blue-t">1.98 °C</text>
  <text x="212" y="192" class="blue-t">per 1000 ft</text>
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
  svg: `<svg class="dg" viewBox="0 0 640 330" role="img" aria-label="Lapse rate stability comparison">
  <!-- axes -->
  <line x1="90" y1="40" x2="90" y2="270" class="ink"/>
  <line x1="90" y1="270" x2="580" y2="270" class="ink"/>
  <text x="70" y="150" text-anchor="middle" transform="rotate(-90 70 150)" class="s">Height</text>
  <text x="335" y="298" text-anchor="middle" class="s">Temperature (colder to the left)</text>
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
  <text x="102" y="108" class="red-t">ELR here</text>
  <text x="102" y="124" class="s red-t">= unstable</text>
  <!-- ELR stable -->
  <line x1="330" y1="270" x2="330" y2="60" class="ink blue dash"/>
  <text x="342" y="96" class="blue-t">ELR here</text>
  <text x="342" y="112" class="s blue-t">= stable</text>
  <circle cx="330" cy="270" r="4" class="fill"/>
  <text x="330" y="288" text-anchor="middle" class="s">Surface</text>
  <text x="335" y="320" text-anchor="middle" class="s">Between the two adiabats the air is conditionally unstable</text>
</svg>`
},

warmfront: {
  alt: 'Cross-section of a warm front showing the shallow slope and the cloud sequence ahead of it',
  cap: 'A warm front announces itself for hours: cirrus first, then a lowering deck and continuous rain.',
  svg: `<svg class="dg" viewBox="0 0 640 300" role="img" aria-label="Warm front cross-section">
  <line x1="20" y1="250" x2="620" y2="250" class="ink"/>
  <path d="M120 250 L560 70 L620 70 L620 250 z" class="tint"/>
  <path d="M120 250 L560 70" class="ink red"/>
  <text x="300" y="188" class="red-t">Warm air overrunning · slope ≈ 1 in 150</text>
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
  <text x="392" y="70" class="s">Anvil</text>
  <text x="300" y="184" text-anchor="middle" class="s">Cb</text>
  <g class="thin">
    <line x1="272" y1="222" x2="266" y2="248"/><line x1="292" y1="226" x2="286" y2="248"/>
    <line x1="312" y1="222" x2="306" y2="248"/><line x1="332" y1="226" x2="326" y2="248"/>
  </g>
  <text x="300" y="272" text-anchor="middle" class="s">Heavy showers, severe turbulence, sharp wind veer</text>
  <text x="500" y="272" text-anchor="middle" class="s">then rapid clearance</text>
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
    <text x="300" y="184" class="s">Chord line</text>
    <circle cx="290" cy="150" r="4" class="fblue"/>
    <text x="298" y="146" class="s blue-t">Centre of pressure</text>
  </g>
  <!-- AoA angle -->
  <line x1="150" y1="170" x2="470" y2="170" class="thin"/>
  <path d="M240 170 A 90 90 0 0 0 236 151" class="ink blue"/>
  <text x="250" y="164" class="blue-t">α</text>
  <text x="266" y="164" class="s blue-t">angle of attack</text>
  <!-- lift and drag -->
  <line x1="330" y1="138" x2="330" y2="48" class="ink blue" marker-end="url(#ar-afb)"/>
  <text x="338" y="60" class="b blue">LIFT</text>
  <text x="338" y="76" class="s blue-t">perpendicular to the airflow</text>
  <line x1="440" y1="168" x2="530" y2="168" class="ink" marker-end="url(#ar-af)"/>
  <text x="470" y="188">DRAG</text>
  <text x="90" y="262" class="s">Most of the lift comes from reduced pressure over the upper surface, not raised pressure below.</text>
</svg>`
},

dragcurve: {
  alt: 'Graph of drag against airspeed showing parasite drag rising, induced drag falling, and the total drag minimum',
  cap: 'The bottom of the total curve is V<sub>MD</sub>: best lift/drag, best glide angle, best range. Below it, slower needs more power.',
  svg: `<svg class="dg" viewBox="0 0 640 330" role="img" aria-label="Total drag curve against airspeed">
  <line x1="80" y1="30" x2="80" y2="260" class="ink"/>
  <line x1="80" y1="260" x2="590" y2="260" class="ink"/>
  <text x="58" y="145" text-anchor="middle" transform="rotate(-90 58 145)" class="s">Drag</text>
  <text x="335" y="300" text-anchor="middle" class="s">Airspeed</text>
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
  <text x="412" y="56" class="b blue">C∟ max</text>
  <text x="412" y="72" class="s blue-t">the stalling angle</text>
  <!-- separated flow -->
  <text x="500" y="182" class="s red-t">Flow separated</text>
  <text x="500" y="197" class="s red-t">lift falls, drag rises</text>
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
  <text x="240" y="92" class="s">Vertical component</text>
  <text x="240" y="107" class="s">= weight</text>
  <!-- horizontal component -->
  <line x1="300" y1="80" x2="404" y2="80" class="ink dash"/>
  <line x1="300" y1="200" x2="404" y2="200" class="ink red" marker-end="url(#ar-tf)"/>
  <text x="330" y="222" class="red-t">Horizontal component</text>
  <text x="330" y="238" class="s red-t">turns the aeroplane</text>
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
  <text x="200" y="140" >Heading + TAS</text>
  <text x="200" y="156" class="s">the air vector</text>
  <!-- wind vector -->
  <line x1="420" y1="90" x2="500" y2="160" class="ink red" marker-end="url(#ar-tvr)"/>
  <text x="466" y="112" class="red-t">W/V</text>
  <text x="446" y="128" class="s red-t">wind, from</text>
  <!-- ground vector -->
  <line x1="80" y1="230" x2="500" y2="160" class="ink blue" marker-end="url(#ar-tvb)"/>
  <text x="250" y="222" class="blue-t">Track + groundspeed</text>
  <text x="250" y="238" class="s blue-t">where you actually go</text>
  <!-- drift angle -->
  <path d="M170 193 A 96 96 0 0 0 172 215" class="ink"/>
  <text x="150" y="184" class="s">drift</text>
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
  <path d="M110 90 A 50 50 0 0 0 108 100" class="ink"/>
  <text x="112" y="108" class="s">6°</text>
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
  <text x="306" y="142" class="s blue-t">true → magnetic (chart)</text>
  <path d="M272 160 A 140 140 0 0 0 256 168" class="ink red"/>
  <text x="120" y="150" class="red-t">Deviation</text>
  <text x="120" y="166" class="s red-t">magnetic → compass</text>
  <text x="120" y="181" class="s red-t">(deviation card)</text>
  <circle cx="300" cy="230" r="4" class="fill"/>
  <text x="320" y="256">Variation <tspan class="b">west</tspan>, magnetic <tspan class="b">best</tspan> — add it to true</text>
</svg>`
},

/* ---------------------------------------------------------------- 020 AGK */

fourstroke: {
  alt: 'The four strokes of a piston engine cycle: induction, compression, power and exhaust',
  cap: 'Two crankshaft revolutions per cycle, one power stroke per cylinder. Ignition fires before top dead centre so peak pressure arrives just after it.',
  svg: `<svg class="dg" viewBox="0 0 640 260" role="img" aria-label="Four stroke engine cycle">
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
      <text x="50" y="172" text-anchor="middle" class="s">inlet open, piston down</text>
    </g>
    <g transform="translate(180,40)">
      <rect x="0" y="0" width="100" height="140" rx="6"/>
      <rect x="12" y="30" width="76" height="26" class="fill" opacity=".4" stroke="none"/>
      <line x1="12" y1="30" x2="88" y2="30"/>
      <line x1="50" y1="56" x2="50" y2="150"/>
      <text x="50" y="-10" text-anchor="middle" class="b">2 Compression</text>
      <text x="50" y="172" text-anchor="middle" class="s">both valves shut, piston up</text>
    </g>
    <g transform="translate(330,40)">
      <rect x="0" y="0" width="100" height="140" rx="6"/>
      <circle cx="50" cy="18" r="7" class="red"/>
      <rect x="12" y="44" width="76" height="26" class="fred" opacity=".3" stroke="none"/>
      <line x1="12" y1="70" x2="88" y2="70"/>
      <line x1="50" y1="96" x2="50" y2="150"/>
      <text x="50" y="-10" text-anchor="middle" class="b red-t">3 Power</text>
      <text x="50" y="172" text-anchor="middle" class="s">spark before TDC, piston driven down</text>
    </g>
    <g transform="translate(480,40)">
      <rect x="0" y="0" width="100" height="140" rx="6"/>
      <path d="M74 0 v18" class="blue"/>
      <line x1="12" y1="34" x2="88" y2="34"/>
      <line x1="50" y1="60" x2="50" y2="150"/>
      <text x="50" y="-10" text-anchor="middle" class="b">4 Exhaust</text>
      <text x="50" y="172" text-anchor="middle" class="s">exhaust open, piston up</text>
    </g>
  </g>
  <line x1="140" y1="110" x2="172" y2="110" class="ink" marker-end="url(#ar-fs)"/>
  <line x1="290" y1="110" x2="322" y2="110" class="ink" marker-end="url(#ar-fs)"/>
  <line x1="440" y1="110" x2="472" y2="110" class="ink" marker-end="url(#ar-fs)"/>
  <text x="320" y="242" text-anchor="middle" class="s">Suck · Squeeze · Bang · Blow</text>
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
  <text x="240" y="266" class="s">Static blocked in a climb: ASI under-reads, altimeter freezes, VSI reads zero</text>
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
  <text x="330" y="228" text-anchor="middle" class="s">total moment ÷ total mass</text>
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
  <text x="560" y="96" text-anchor="end" class="s">Check take-off <tspan class="b">and</tspan> landing:</text>
  <text x="560" y="112" text-anchor="end" class="s">burning fuel moves the CG</text>
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
  <text x="60" y="286" class="s">Standard direction is left-hand unless notified. Circuit height is aerodrome-specific — check the plate.</text>
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
  <text x="150" y="180" class="s">Boredom</text>
  <text x="150" y="196" class="s">complacency</text>
  <text x="150" y="212" class="s">missed cues</text>
  <text x="470" y="180" class="s red-t">Tunnelling</text>
  <text x="470" y="196" class="s red-t">regression</text>
  <text x="470" y="212" class="s red-t">panic</text>
  <text x="335" y="238" text-anchor="middle" class="s">The peak is narrower for unfamiliar tasks</text>
</svg>`
}

};
