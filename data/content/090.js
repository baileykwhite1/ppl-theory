/* 090 Communications — articles, quiz bank, flashcards. */
window.SC = window.SC || {};
window.SC['090'] = {
articles: [
{
  id: '090-basics', title: 'Phraseology, alphabet and numbers', mins: 6, tags: ['090.01', '090.02'],
  body: `
<h3>Why standard phraseology exists</h3>
<p>Radio is a shared, noisy, single-channel medium, often used by people whose first language is
not English. Standard phraseology removes ambiguity and shortens transmissions. Where standard
phraseology does not cover the situation, use <b>plain, concise English</b> — inventing your own
brevity codes is worse than a plain sentence.</p>

<h3>The alphabet</h3>
<p class="mono">Alfa Bravo Charlie Delta Echo Foxtrot Golf Hotel India Juliett Kilo Lima Mike
November Oscar Papa Quebec Romeo Sierra Tango Uniform Victor Whiskey X-ray Yankee Zulu</p>

<h3>Numbers</h3>
<p>Transmit numbers digit by digit, with these pronunciations: <b>tree</b> (3), <b>fower</b> (4),
<b>fife</b> (5), <b>niner</b> (9), and <b>decimal</b> for the point.</p>
<ul>
<li><b>Headings and radials</b>: three digits, each spoken separately — heading 070 is "heading
zero seven zero".</li>
<li><b>Flight levels</b>: digit by digit — FL 65 is "flight level six five".</li>
<li><b>Altitudes and heights</b>: spoken as whole numbers where they are round thousands or
hundreds — 3000 ft is "three thousand feet"; 2500 ft is "two thousand five hundred feet".</li>
<li><b>Frequencies</b>: digit by digit with "decimal" — 118.325 is "one one eight decimal three
two five".</li>
<li><b>Wind</b>: direction and speed, for example "wind two four zero degrees, one five knots".</li>
<li><b>QNH</b>: digit by digit — "QNH one zero one three".</li>
<li><b>Time</b>: normally the minutes only, and the hour as well when there is any risk of
confusion.</li>
</ul>

<h3>The standard words, and what they precisely mean</h3>
<table>
<tbody>
<tr><td><b>Acknowledge</b></td><td>Let me know you have received and understood</td></tr>
<tr><td><b>Affirm</b></td><td>Yes (never "affirmative")</td></tr>
<tr><td><b>Negative</b></td><td>No / permission not granted / that is not correct</td></tr>
<tr><td><b>Break</b></td><td>Separation between messages</td></tr>
<tr><td><b>Cleared</b></td><td>Authorised to proceed under the specified conditions</td></tr>
<tr><td><b>Confirm</b></td><td>Have I correctly received…? / Did you correctly receive…?</td></tr>
<tr><td><b>Correction</b></td><td>An error has been made; the correct version is…</td></tr>
<tr><td><b>Disregard</b></td><td>Ignore that transmission</td></tr>
<tr><td><b>How do you read</b></td><td>What is the readability of my transmission?</td></tr>
<tr><td><b>I say again</b></td><td>I repeat for clarity or emphasis</td></tr>
<tr><td><b>Monitor</b></td><td>Listen out on the stated frequency</td></tr>
<tr><td><b>Over</b></td><td>My transmission is ended and I expect a response</td></tr>
<tr><td><b>Out</b></td><td>Exchange ended, no response expected</td></tr>
<tr><td><b>Read back</b></td><td>Repeat all, or the specified part, of this message back to me exactly</td></tr>
<tr><td><b>Report</b></td><td>Pass me the following information</td></tr>
<tr><td><b>Roger</b></td><td>I have received all of your last transmission — <em>not</em> "yes" and <em>not</em> "wilco"</td></tr>
<tr><td><b>Say again</b></td><td>Repeat all or part of your last transmission</td></tr>
<tr><td><b>Speak slower</b></td><td>Reduce your rate of speech</td></tr>
<tr><td><b>Standby</b></td><td>Wait, I will call you</td></tr>
<tr><td><b>Wilco</b></td><td>I understand your message and will comply with it</td></tr>
<tr><td><b>Unable</b></td><td>I cannot comply with your request or instruction</td></tr>
</tbody></table>
<p><b>Roger</b> is the most misused word on the radio. It means "received", nothing more. It is
never an answer to a question and never a substitute for a readback.</p>

<h3>Readability scale</h3>
<p>One to five: <b>1</b> unreadable, <b>2</b> readable now and then, <b>3</b> readable but with
difficulty, <b>4</b> readable, <b>5</b> perfectly readable. "Read you five" is the good one.</p>

<h3>Callsigns</h3>
<p>A UK-registered aircraft is G-ABCD, spoken in full on first contact as "Golf Alfa Bravo Charlie
Delta". Once the ATS unit has abbreviated it — usually to the first letter and last two, "Golf
Charlie Delta" — you may do the same. <b>Only the ground station may initiate the
abbreviation.</b> With a type prefix it becomes, for example, "Cessna Golf Charlie Delta". Where
two similar callsigns are on frequency, use the full callsign until told otherwise.</p>

<h3>Items that must always be read back</h3>
<p>Anything that could cause a loss of separation or a runway incursion, in particular:</p>
<ul>
<li><b>Level instructions</b> — climb, descend, maintain, and altimeter settings</li>
<li><b>Heading and speed</b> instructions</li>
<li><b>Runway in use</b>, and clearances to <b>enter, land on, take off from, backtrack, cross
or hold short of</b> any runway</li>
<li><b>Airways or route clearances</b>, SSR codes, and frequency changes</li>
</ul>
<p>Include your callsign in every readback. A readback without a callsign is not a readback.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>"Roger" means received, not yes and not wilco.</li>
<li>Say "affirm", never "affirmative".</li>
<li>Only the <b>ground station</b> may abbreviate a callsign.</li>
<li>Frequencies are read digit by digit with "decimal".</li>
<li>All runway-related clearances must be read back with your callsign.</li>
</ul></div>`
},
{
  id: '090-procedures', title: 'Standard calls and procedures', mins: 6, tags: ['090.02', '090.03'],
  body: `
<h3>The shape of a call</h3>
<p>Every transmission follows the same skeleton: <b>who you are calling, who you are, where you
are, what you want</b>. On first contact, keep it short and wait to be invited to pass details:</p>
<p class="mono">"Kirkbride Information, Golf Alfa Bravo Charlie Delta, request airfield
information."</p>
<p>Then, when asked, pass the fuller message. Think before keying, and never key the microphone
while you are still deciding what to say — a partial transmission blocks the frequency and
teaches the controller nothing.</p>

<h3>What the ground station's name tells you</h3>
<table>
<tbody>
<tr><td><b>Control</b></td><td>An air traffic control unit — it issues <b>instructions and clearances</b> which you must comply with</td></tr>
<tr><td><b>Approach / Radar / Tower / Ground</b></td><td>Also ATC, for that phase of flight</td></tr>
<tr><td><b>Information</b></td><td>An <b>AFIS</b> — <em>information</em> rather than instructions to aircraft <b>in the air</b>, and no clearance to land or take off. It <em>does</em> instruct aircraft and vehicles on the <b>manoeuvring area</b></td></tr>
<tr><td><b>Radio</b></td><td>An <b>air-ground</b> communication service, operated by a radio operator. Information only, and much of it based on what other pilots have reported</td></tr>
</tbody></table>
<p>This distinction matters and is heavily examined. "Golf CD, land at your discretion" from a
<b>Radio</b> or <b>Information</b> station is not a clearance — the decision remains yours.
Only a <b>Tower</b> can clear you to land.</p>

<h3>A normal flight, in calls</h3>
<ul>
<li><b>Radio check</b>: "Tower, G-ABCD, radio check one one eight decimal three."</li>
<li><b>Taxi</b>: request taxi with your intentions and aircraft type; expect a runway, a QNH and
a holding point, and read them back.</li>
<li><b>Departure</b>: "Ready for departure" at the hold, then the clearance and readback.</li>
<li><b>Frequency change</b>: request it, read back the new frequency, then check in on the new one
with your callsign, position, level and intentions.</li>
<li><b>En route with a FIS</b>: pass callsign, type, departure and destination, position, level,
and the service you would like. Expect a squawk and a QNH; read them back.</li>
<li><b>Arrival</b>: listen to the <b>ATIS</b> first if there is one and note the letter — quoting
"information Delta" saves the controller a long transmission. Then call with your position,
level and request, and expect joining instructions.</li>
<li><b>Circuit calls</b>: downwind, base or final as notified, plus "go around" if you go around.
Keep them short: "Golf Charlie Delta, downwind."</li>
</ul>

<h3>VHF propagation and frequencies</h3>
<p>Aeronautical VHF communications occupy <b>118.000 to 136.975 MHz</b> and are
<b>line of sight</b>. Range therefore depends on altitude and is blocked by terrain. A rough
approximation for range in nautical miles is <b>1.25 times the square root of the height in
feet</b> — about 125 NM at 10,000 ft, but only about 40 NM at 1000 ft. If you cannot raise
someone, the first remedy is usually to climb.</p>
<p>UK aeronautical VHF uses <b>8.33 kHz</b> channel spacing, which is why frequencies now have
six digits. Set what is published, exactly.</p>

<h3>Discipline</h3>
<ul>
<li><b>Listen out</b> before transmitting, so you do not step on someone.</li>
<li><b>Think, then key</b>. Compose the message first.</li>
<li>Speak at a steady, even rate, slightly slower than conversation, with the microphone close
to the lips.</li>
<li>Keep transmissions short. If you need to say a lot, break it into two.</li>
<li>Do not transmit anything unnecessary, and never anything false, deceptive or profane.</li>
<li>If you are unsure of an instruction, say so. "Say again" costs three seconds.</li>
</ul>

<div class="trap"><b>Exam traps</b>
<ul>
<li>"Information" is AFIS and "Radio" is air-ground — neither can clear you to land.</li>
<li>VHF is line of sight; range increases with height.</li>
<li>The VHF comms band is 118.000 to 136.975 MHz — do not confuse it with the VOR band, which
starts at 108.</li>
</ul></div>`
},
{
  id: '090-emergency', title: 'Distress, urgency and radio failure', mins: 5, tags: ['090.04', '090.05'],
  body: `
<h3>Distress and urgency</h3>
<ul>
<li><b>Distress — MAYDAY MAYDAY MAYDAY</b>. Grave and imminent danger requiring
<b>immediate assistance</b>.</li>
<li><b>Urgency — PAN PAN, PAN PAN, PAN PAN</b>. A condition concerning the safety of the aircraft
or a person on board or in sight, but <b>not requiring immediate assistance</b>.</li>
</ul>
<p>Distress has absolute priority over everything, including urgency messages. Make the call on
the frequency you are already using — do not waste time changing to 121.500 if someone is already
listening to you.</p>

<h3>The distress message format</h3>
<p>The standard order, and the one the exam wants:</p>
<ol>
<li><b>MAYDAY MAYDAY MAYDAY</b></li>
<li><b>Name of the station addressed</b> (if time permits)</li>
<li><b>Callsign</b> (and aircraft type)</li>
<li><b>Nature of the emergency</b></li>
<li><b>Intentions</b> of the pilot in command</li>
<li><b>Position, level and heading</b></li>
<li><b>Any other useful information</b> — persons on board, fuel remaining</li>
</ol>
<p>A workable memory aid is <b>My Aircraft Needs Immediate Positive Assistance</b>: Mayday,
Aircraft (callsign and type), Nature, Intentions, Position (level and heading), Assistance
required. If you cannot remember the order, say the important things first — who you are, what
is wrong, where you are. Nobody has ever been criticised for an untidy Mayday.</p>

<h3>Imposing and lifting silence</h3>
<p>The station in distress, or the station controlling the distress traffic, may impose radio
silence with <b>"STOP TRANSMITTING — MAYDAY"</b>. When the emergency is over, distress traffic is
cancelled with <b>"DISTRESS TRAFFIC ENDED"</b>, and silence is lifted with
<b>"SILENCE FINI"</b>, pronounced "see-lonce fee-nee".</p>

<h3>Radio failure</h3>
<p>Work the checklist rather than assuming the worst:</p>
<ol>
<li>Volume, and squelch.</li>
<li>Correct frequency, and the right radio selected on the audio panel.</li>
<li>Headset and microphone plugs fully home; try the overhead speaker and hand mic.</li>
<li>Circuit breaker.</li>
<li>Stuck microphone — which blocks the frequency for everyone else.</li>
</ol>
<p>Then <b>squawk 7600</b>. Consider that the failure may be one-way: if you may still be
transmitting, <b>transmit blind</b>, saying so — state your callsign, position, intentions, and
that you are transmitting blind due to receiver failure, and repeat at intervals.</p>
<p>Arriving at a controlled aerodrome without radio, join as instructed by <b>light signals</b>
and acknowledge by rocking the wings by day or flashing the landing light at night. Keep a good
lookout, expect to be fitted in, and do not assume anyone knows your intentions.</p>

<h3>Getting help when uncertain of position</h3>
<p>Ask early. Options in the UK:</p>
<ul>
<li>A <b>Basic Service</b> unit or a nearby ATSU on the appropriate frequency.</li>
<li><b>D/F (VDF)</b> — ask for a <b>QDM</b>, the magnetic heading to steer to the station in
nil wind. Simple, and it needs no equipment beyond the radio.</li>
<li><b>121.500 MHz</b>, the emergency frequency, monitored by the Distress and Diversion cell,
which can fix your position from your transmissions. A <b>PAN</b> call to D&amp;D when you are
lost is entirely proper and is what the service is for.</li>
</ul>
<p>The commonest mistake in this whole subject is delay: pilots wait until the situation is
serious before asking, when the same call twenty minutes earlier would have been routine. There
is no penalty for asking, and no prize for silence.</p>

<div class="trap"><b>Exam traps</b>
<ul>
<li>MAYDAY and PAN PAN are each spoken <b>three times</b>.</li>
<li>PAN PAN means immediate assistance is <b>not</b> required.</li>
<li>Silence is imposed with "STOP TRANSMITTING — MAYDAY" and lifted with "SILENCE FINI".</li>
<li>Squawk 7600 for radio failure, 7700 for emergency.</li>
<li>Make the emergency call on the frequency <b>in use</b>.</li>
</ul></div>`
}
],

quiz: [
{ q: 'The correct pronunciation of the number 3 in RTF is:', a: ['Three', 'Tree', 'Thuh-ree', 'Trio'], c: 1, why: 'Tree. Also fower (4), fife (5), niner (9) and decimal for the point.', ref: 'CAP413' },
{ q: 'A heading of 070 degrees is transmitted as:', a: ['Seventy', 'Zero seventy', 'Zero seven zero', 'Seven zero'], c: 2, why: 'Headings are three digits spoken individually.', ref: 'CAP413' },
{ q: 'The frequency 118.325 is transmitted as:', a: ['One eighteen point three two five', 'One one eight decimal three two five', 'One one eight point three twenty five', 'One hundred and eighteen decimal three'], c: 1, why: 'Digit by digit with "decimal".', ref: 'CAP413' },
{ q: 'An altitude of 2500 ft is normally transmitted as:', a: ['Two five zero zero feet', 'Two thousand five hundred feet', 'Twenty five hundred feet', 'Two point five thousand feet'], c: 1, why: 'Altitudes and heights are spoken as whole numbers of thousands and hundreds.', ref: 'CAP413' },
{ q: 'Flight level 65 is transmitted as:', a: ['Flight level sixty five', 'Flight level six five', 'Flight level six thousand five hundred', 'Level six five'], c: 1, why: 'Flight levels are digit by digit.', ref: 'CAP413' },
{ q: '"Roger" means:', a: ['Yes', 'I will comply', 'I have received all of your last transmission', 'Please repeat'], c: 2, why: 'Received. It is not yes, and it is not wilco, and it is never a substitute for a readback.', ref: 'CAP413' },
{ q: '"Wilco" means:', a: ['I have received your message', 'I understand your message and will comply with it', 'Wait', 'Say again'], c: 1, why: 'Understood and will comply.', ref: 'CAP413' },
{ q: 'The correct word for "yes" is:', a: ['Affirmative', 'Affirm', 'Roger', 'Correct'], c: 1, why: 'Affirm. "Affirmative" is not used, because it can be confused with "negative".', ref: 'CAP413' },
{ q: '"Standby" means:', a: ['Wait, I will call you', 'Cleared to proceed', 'Say again', 'Your message is understood'], c: 0, why: 'Wait and I will call you. It is not a clearance and not an approval.', ref: 'CAP413' },
{ q: '"Confirm" is used to:', a: ['Grant a clearance', 'Ask whether a message has been correctly received', 'End a transmission', 'Cancel a previous instruction'], c: 1, why: 'Have I correctly received, or did you correctly receive, the following.', ref: 'CAP413' },
{ q: '"Disregard" means:', a: ['Repeat the message', 'Ignore that transmission', 'Wait', 'You are cleared'], c: 1, why: 'Ignore that transmission.', ref: 'CAP413' },
{ q: 'A readability of 3 means the transmission is:', a: ['Unreadable', 'Readable now and then', 'Readable but with difficulty', 'Perfectly readable'], c: 2, why: '1 unreadable, 2 readable now and then, 3 readable but with difficulty, 4 readable, 5 perfectly readable.', ref: 'CAP413' },
{ q: 'An aircraft callsign may be abbreviated:', a: ['By the pilot at any time', 'Only after the ground station has abbreviated it', 'Only in an emergency', 'Never'], c: 1, why: 'Only the ground station may initiate abbreviation; the pilot may then follow suit.', ref: 'CAP413' },
{ q: 'G-ABCD abbreviated by a ground station would normally become:', a: ['Golf Alfa Bravo', 'Golf Charlie Delta', 'Alfa Bravo Charlie', 'Golf Delta'], c: 1, why: 'First letter plus the last two: Golf Charlie Delta.', ref: 'CAP413' },
{ q: 'Which of these must always be read back?', a: ['A weather report', 'A traffic information message', 'A runway holding instruction', 'A wind check'], c: 2, why: 'Anything relating to runway entry, crossing, holding, take-off or landing, plus levels, headings, speeds, SSR codes, altimeter settings and frequency changes.', ref: 'CAP413' },
{ q: 'A readback must always include:', a: ['The time', 'Your callsign', 'The QNH', 'The word Roger'], c: 1, why: 'Without a callsign the controller does not know who read it back.', ref: 'CAP413' },
{ q: 'A station whose callsign suffix is "Information" provides:', a: ['Air traffic control clearances', 'An aerodrome flight information service — information, not instructions', 'A radar service', 'A deconfliction service'], c: 1, why: 'An AFIS gives information rather than instructions to aircraft in the air, and cannot clear you to land or take off. It does issue instructions to aircraft and vehicles on the manoeuvring area.', ref: 'CAP 797 / CAP 413' },
{ q: 'A station whose callsign suffix is "Radio" is:', a: ['An air traffic control unit', 'An air-ground communication service', 'A radar unit', 'A military unit'], c: 1, why: 'Air-ground, operated by a radio operator, giving information only.', ref: 'CAP413' },
{ q: 'Which station may issue a clearance to land?', a: ['Radio', 'Information', 'Tower', 'Any of them'], c: 2, why: 'Only an ATC unit such as Tower. "Land at your discretion" from Radio or Information is not a clearance.', ref: 'CAP413' },
{ q: 'The aeronautical VHF communications band is:', a: ['108.000 to 117.950 MHz', '118.000 to 136.975 MHz', '190 to 1750 kHz', '329 to 335 MHz'], c: 1, why: '118.000 to 136.975 MHz. 108 to 117.95 MHz is the VOR band.', ref: 'CAP413' },
{ q: 'VHF radio range:', a: ['Is unaffected by altitude', 'Increases with altitude because VHF is line of sight', 'Is better at night', 'Is limited to 25 NM'], c: 1, why: 'Line of sight, so climbing is the usual remedy for poor reception.', ref: 'CAP413' },
{ q: 'UK aeronautical VHF now uses channel spacing of:', a: ['25 kHz', '12.5 kHz', '8.33 kHz', '50 kHz'], c: 2, why: '8.33 kHz spacing, which is why frequencies have six digits.', ref: 'CAP413' },
{ q: 'MAYDAY indicates:', a: ['A condition concerning safety but not requiring immediate assistance', 'Grave and imminent danger requiring immediate assistance', 'A radio check', 'Unlawful interference'], c: 1, why: 'Distress. PAN PAN is urgency.', ref: 'CAP413' },
{ q: 'The distress and urgency signals are each spoken:', a: ['Once', 'Twice', 'Three times', 'Continuously'], c: 2, why: 'MAYDAY MAYDAY MAYDAY, or PAN PAN, PAN PAN, PAN PAN.', ref: 'CAP413' },
{ q: 'An emergency call should normally be made:', a: ['On 121.500 always', 'On the frequency in use', 'On the destination tower frequency', 'After squawking 7700 and waiting'], c: 1, why: 'Use the frequency you are already on — someone is already listening. Changing wastes time.', ref: 'CAP413' },
{ q: 'In the standard distress message the nature of the emergency is stated:', a: ['Before the callsign', 'After the callsign and before intentions', 'Last', 'Only if asked'], c: 1, why: 'Mayday x3, station addressed, callsign and type, nature of emergency, intentions, position/level/heading, other useful information.', ref: 'CAP413' },
{ q: 'The phrase used to impose radio silence during a distress is:', a: ['SILENCE FINI', 'STOP TRANSMITTING - MAYDAY', 'DISTRESS TRAFFIC ENDED', 'BREAK BREAK'], c: 1, why: 'Silence is imposed with STOP TRANSMITTING - MAYDAY, and lifted with SILENCE FINI.', ref: 'CAP413' },
{ q: 'The phrase used to lift radio silence is:', a: ['SILENCE FINI', 'DISTRESS TRAFFIC ENDED', 'RESUME NORMAL OPERATIONS', 'OUT'], c: 0, why: 'SILENCE FINI, pronounced see-lonce fee-nee. Distress traffic is cancelled with DISTRESS TRAFFIC ENDED.', ref: 'CAP413' },
{ q: 'A PAN PAN call would be appropriate for:', a: ['An engine fire', 'Being uncertain of position with adequate fuel', 'Structural failure', 'A hijacking'], c: 1, why: 'Safety is concerned but immediate assistance is not required. Being lost is a classic and entirely proper PAN.', ref: 'CAP413' },
{ q: 'A controller passes you a QDM. It is:', a: ['The magnetic bearing from the station', 'The magnetic heading to steer to the station in nil wind', 'The true bearing from the station', 'A distance in nautical miles'], c: 1, why: 'QDM is the magnetic bearing to the station. QDR is from; QTE is the true bearing from.', ref: 'CAP413' },
{ q: 'A stuck microphone will:', a: ['Improve range', 'Block the frequency for all other users', 'Have no effect', 'Trigger the ELT'], c: 1, why: 'It transmits continuously. Check for it as part of any radio failure diagnosis.', ref: 'CAP413' },
{ q: 'Following a suspected receiver failure you should:', a: ['Say nothing until landing', 'Transmit blind, stating that you are doing so, with callsign, position and intentions', 'Squawk 7700', 'Return to the departure aerodrome without a call'], c: 1, why: 'Transmit blind at intervals, and squawk 7600.', ref: 'CAP413' },
{ q: 'Arriving without radio at a controlled aerodrome you should expect:', a: ['To be refused entry', 'Light signals from the tower', 'A telephone call', 'To land without any acknowledgement'], c: 1, why: 'Light signals, acknowledged by rocking the wings by day or flashing the landing light at night.', ref: 'CAP413' },
{ q: 'Before transmitting you should:', a: ['Key the microphone and then think', 'Listen out to ensure the frequency is clear, and compose the message first', 'Transmit immediately on any frequency', 'Wait for the controller to call you'], c: 1, why: 'Listen out, think, then key. Partial or blocking transmissions help nobody.', ref: 'CAP413' },
{ q: 'When quoting the ATIS on first contact you should include:', a: ['The full weather', 'The information letter', 'The time you heard it', 'The runway only'], c: 1, why: 'Quoting the letter tells the controller you have current information and saves a transmission.', ref: 'CAP413' },
{ q: 'Where standard phraseology does not cover a situation you should:', a: ['Invent an abbreviation', 'Use plain, concise English', 'Say nothing', 'Use the nearest standard phrase regardless of meaning'], c: 1, why: 'Plain, concise English.', ref: 'CAP413' },
{ q: 'Approximate VHF range in NM is roughly:', a: ['1.25 times the square root of height in feet', 'The square root of height in feet', 'Height in feet divided by 100', '9 times the square root of height'], c: 0, why: 'About 1.25 times the square root of the height in feet: roughly 40 NM at 1000 ft, 125 NM at 10,000 ft.', ref: 'RTF theory' },
{ q: '"Unable" means:', a: ['Say again', 'I cannot comply with your request or instruction', 'Stand by', 'Message received'], c: 1, why: 'I cannot comply. Use it rather than silently failing to comply.', ref: 'CAP413' }
],

cards: [
{ f: 'Pronunciation of 3, 4, 5, 9', b: 'Tree, fower, fife, niner. Decimal for the point.', ref: 'CAP413' },
{ f: 'How are headings transmitted?', b: 'Three digits, individually. "Heading zero seven zero".', ref: 'CAP413' },
{ f: 'How are frequencies transmitted?', b: 'Digit by digit with "decimal". 118.325 = one one eight decimal three two five.', ref: 'CAP413' },
{ f: 'How are altitudes transmitted?', b: 'As whole thousands and hundreds. 2500 ft = "two thousand five hundred feet".', ref: 'CAP413' },
{ f: 'How are flight levels transmitted?', b: 'Digit by digit. FL 65 = "flight level six five".', ref: 'CAP413' },
{ f: 'What does Roger mean?', b: 'I have received all of your last transmission. Not yes, not wilco.', ref: 'CAP413' },
{ f: 'What does Wilco mean?', b: 'Understood and will comply.', ref: 'CAP413' },
{ f: 'The word for yes', b: 'Affirm. Never "affirmative".', ref: 'CAP413' },
{ f: 'What does Standby mean?', b: 'Wait, I will call you. Not a clearance.', ref: 'CAP413' },
{ f: 'Readability scale', b: '1 unreadable, 2 readable now and then, 3 readable with difficulty, 4 readable, 5 perfectly readable.', ref: 'CAP413' },
{ f: 'Who may abbreviate a callsign?', b: 'Only the ground station may initiate it; the pilot may then follow.', ref: 'CAP413' },
{ f: 'What must always be read back?', b: 'Levels, altimeter settings, headings, speeds, SSR codes, frequency changes, and all runway entry, crossing, holding, take-off and landing clearances — with your callsign.', ref: 'CAP413' },
{ f: 'Control / Information / Radio — what do they provide?', b: 'Control: ATC instructions and clearances. Information: AFIS — information to aircraft airborne, but it does instruct traffic on the manoeuvring area; no landing clearance. Radio: air-ground, information only.', ref: 'CAP413' },
{ f: 'Who can clear you to land?', b: 'Only an ATC unit (Tower). "Land at your discretion" is not a clearance.', ref: 'CAP413' },
{ f: 'VHF comms band', b: '118.000 to 136.975 MHz. VOR is 108 to 117.95.', ref: 'CAP413' },
{ f: 'UK VHF channel spacing', b: '8.33 kHz.', ref: 'CAP413' },
{ f: 'Rough VHF range formula', b: 'About 1.25 x square root of height in feet, in NM.', ref: 'RTF' },
{ f: 'MAYDAY versus PAN PAN', b: 'MAYDAY: grave and imminent danger, immediate assistance. PAN PAN: safety concerned, immediate assistance NOT required. Each said three times.', ref: 'CAP413' },
{ f: 'Distress message order', b: 'Mayday x3, station addressed, callsign and type, nature, intentions, position/level/heading, other useful information.', ref: 'CAP413' },
{ f: 'Which frequency for an emergency call?', b: 'The one you are already using. 121.500 if you have no other.', ref: 'CAP413' },
{ f: 'Imposing and lifting radio silence', b: 'STOP TRANSMITTING - MAYDAY. Lifted with SILENCE FINI. Distress cancelled with DISTRESS TRAFFIC ENDED.', ref: 'CAP413' },
{ f: 'Radio failure squawk', b: '7600.', ref: 'CAP413' },
{ f: 'Suspected receiver failure — what do you do?', b: 'Transmit blind at intervals, saying that you are, with callsign, position and intentions.', ref: 'CAP413' },
{ f: 'QDM', b: 'The magnetic heading to steer to the station in nil wind.', ref: 'CAP413' },
{ f: 'What does Unable mean?', b: 'I cannot comply with your request or instruction.', ref: 'CAP413' },
{ f: 'When phraseology does not cover the situation', b: 'Use plain, concise English.', ref: 'CAP413' }
]
};
