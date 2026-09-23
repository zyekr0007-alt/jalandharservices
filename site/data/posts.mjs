// Journal posts.
//
// These exist to answer the questions people type before they are ready to
// book — the "how much", "when", "how do I choose" queries. They are written
// to be genuinely useful and citable rather than to hit a word count, because
// the same pages are what AI answer engines quote when someone asks about
// painting or waterproofing in Jalandhar.

export const posts = [
  {
    slug: 'house-painting-cost-jalandhar',
    date: '2026-09-22',
    title: 'What Painting a House in Jalandhar Actually Costs in 2026',
    description:
      'Real 2026 painting rates for Jalandhar — per sq ft, per room and per BHK — plus the five variables that move a quote by 40% and the questions to ask before you pay.',
    h1: 'What painting a house in Jalandhar actually costs in 2026',
    lede:
      'Interior painting in Jalandhar runs <strong>₹12–₹22 per sq ft</strong> for standard emulsion and <strong>₹22–₹40</strong> for premium, exterior <strong>₹18–₹35</strong>. Applied to a real 2 BHK that is <strong>₹31,000–₹66,000</strong>. This is what sits behind those numbers, and why two quotes for the same flat can differ by 40% without either being dishonest.',
    sections: [
      {
        h2: 'The rates, and what they include',
        body:
          '<p>These are the prevailing Jalandhar bands for 2026. The ranges include labour, putty, primer and two finish coats — a rate that excludes any of those is not comparable.</p>' +
          '<table class="rate-card"><thead><tr><th>Work</th><th>Unit</th><th>Rate</th></tr></thead><tbody>' +
          '<tr><td>Interior emulsion, 2 coats</td><td>per sq ft</td><td>₹12 – ₹22</td></tr>' +
          '<tr><td>Premium washable emulsion</td><td>per sq ft</td><td>₹18 – ₹30</td></tr>' +
          '<tr><td>Luxury / designer emulsion</td><td>per sq ft</td><td>₹22 – ₹40</td></tr>' +
          '<tr><td>Exterior weatherproof</td><td>per sq ft</td><td>₹18 – ₹35</td></tr>' +
          '<tr><td>Texture / designer finish</td><td>per sq ft</td><td>₹40 – ₹120</td></tr>' +
          '<tr><td>Wood polish / varnish</td><td>per sq ft</td><td>₹15 – ₹50</td></tr>' +
          '<tr><td>Putty only</td><td>per sq ft</td><td>₹10 – ₹20</td></tr>' +
          '<tr><td>Primer, per coat</td><td>per sq ft</td><td>₹5 – ₹12</td></tr>' +
          '</tbody></table>' +
          '<p>A caution on these numbers: a per-sq-ft rate is only meaningful if you agree what is being measured. Painter A quoting ₹15 per sq ft on floor area and painter B quoting ₹15 per sq ft on wall area are quoting roughly three times apart.</p>',
      },
      {
        h2: 'What it costs for a real flat',
        body:
          '<p>Painted wall area is roughly 2.8 to 3.2 times the carpet area. A 1,000 sq ft carpet flat has around 3,000 sq ft of wall and ceiling. On that basis:</p>' +
          '<table class="rate-card"><thead><tr><th>Flat</th><th>Wall + ceiling</th><th>Standard</th><th>Premium</th></tr></thead><tbody>' +
          '<tr><td>1 BHK (~600 sq ft)</td><td>~1,900 sq ft</td><td>₹23,000 – ₹42,000</td><td>₹42,000 – ₹76,000</td></tr>' +
          '<tr><td>2 BHK (~1,000 sq ft)</td><td>~3,000 sq ft</td><td>₹36,000 – ₹66,000</td><td>₹66,000 – ₹1,20,000</td></tr>' +
          '<tr><td>3 BHK (~1,400 sq ft)</td><td>~4,300 sq ft</td><td>₹52,000 – ₹95,000</td><td>₹95,000 – ₹1,72,000</td></tr>' +
          '</tbody></table>' +
          '<p>Those are walls and ceilings together. Painting walls only removes about 30% of the surface and about 30% of the cost. It is a legitimate way to cut the bill — ceilings do get dirty, but less than people expect, and many flats genuinely do not need them.</p>',
      },
      {
        h2: 'The five things that actually move your quote',
        body:
          '<p>None of them is the paint brand, which is where most people focus.</p>' +
          '<ol>' +
          '<li><strong>The condition of the existing surface.</strong> Painting over sound paint is cheap. Painting over flaking distemper with hairline cracks means washing off the distemper, scraping, crack filling, putty and sanding before a single coat goes on. This is the single largest variable and the one cheap quotes quietly omit.</li>' +
          '<li><strong>Wall area measured properly.</strong> High ceilings and long corridors add real surface. A quote built from your floor plan rather than a tape measure will be wrong.</li>' +
          '<li><strong>Paint tier.</strong> Economy and luxury emulsion differ by roughly 3× per litre. Both are honest choices for different rooms.</li>' +
          '<li><strong>Access.</strong> Double-height lobbies and stairwells need scaffolding, which is time and equipment.</li>' +
          '<li><strong>Colour change depth.</strong> Going dark to white needs an extra coat or a tinted primer. Light to light does not.</li>' +
          '</ol>',
      },
      {
        h2: 'Where to spend, and where not to',
        body:
          '<p><strong>Spend on the rooms you scrub.</strong> The kitchen and living room earn premium washable emulsion — kitchen walls collect cooking aerosol and need to be wipeable, and the living room takes the most traffic. <strong>Save on bedrooms</strong>, where nothing touches the walls and standard emulsion looks identical.</p>' +
          '<p><strong>Do not use distemper</strong> in a flat you intend to keep. It is cheaper per litre, it cannot be wiped, it chalks onto everything below it, and repainting over it next time requires washing it all off first — so it costs more over two cycles than emulsion would have cost once.</p>' +
          '<p><strong>Do not skip putty and primer to save ₹15 per sq ft.</strong> They are the difference between a finish that lasts six years and one that flakes in eighteen months. It is the most expensive saving available.</p>',
      },
      {
        h2: 'Questions to ask before you pay a deposit',
        body:
          '<ol>' +
          '<li>Is the rate per sq ft of <em>wall</em> area or floor area, and what is the measured wall area?</li>' +
          '<li>Which paint brand and which tier, written on the quote?</li>' +
          '<li>How many coats, and is primer included or extra?</li>' +
          '<li>What happens if the old paint flakes — is scraping included, or will that be a mid-job extra?</li>' +
          '<li>How many days, and does that include drying gaps between coats?</li>' +
          '<li>Is there a walkthrough and touch-up at the end, and is final payment only after it?</li>' +
          '</ol>' +
          '<p>A contractor who cannot answer the first question with a number has not measured your flat.</p>',
      },
    ],
    faqs: [
      { q: 'Is it cheaper to paint in winter in Jalandhar?', a: 'It can be, because October to April is the workable window and contractors are less booked at the edges of it. But the real reason to paint in that window is not price — it is that paint applied to a damp wall in the monsoon will blister, and no discount compensates for repainting next year.' },
      { q: 'Should I buy the paint myself?', a: 'It rarely saves money. Contractors buy at trade rates, so the retail price you pay is usually higher than the material line on a contractor quote. Where buying it yourself does help is certainty — you know exactly what went on your walls. If you want that, ask for a labour-only quote and the litre count per room.' },
      { q: 'How much extra is texture painting?', a: '₹40–₹120 per sq ft, so three to six times a plain coat. Put it on one feature wall rather than a whole room. Texture is also very hard to patch cleanly later, so keep it away from where furniture and hands will scuff it.' },
      { q: 'Can I get just one room painted?', a: 'Yes, though most contractors apply a minimum job value, because mobilising a crew and materials for one room costs nearly what three rooms cost. A single bedroom is typically ₹7,500–₹15,000.' },
      { q: 'Do quotes include moving furniture?', a: 'They should. Ours does — furniture moved to the room centre and sheeted, floors masked, and everything put back. If a quote does not mention it, ask, because discovering on the day that you have to empty three rooms yourself is a bad surprise.' },
    ],
    related: ['painting-services-jalandhar', 'interior-wall-painting-jalandhar', 'exterior-weatherproof-painting-jalandhar'],
  },

  {
    slug: 'waterproofing-before-monsoon-punjab',
    date: '2026-09-20',
    title: 'Waterproofing Before the Monsoon: A Punjab Homeowner’s Checklist',
    description:
      'When to waterproof in Punjab, what a terrace job should include, the three details most leaks come from, and how to spot a waterproofing quote that will not hold.',
    h1: 'Waterproofing before the monsoon: a Punjab homeowner’s checklist',
    lede:
      'The waterproofing season in Punjab is <strong>February to May</strong>. Membrane and coating systems need a dry slab, dry weather and proper curing, and July to September gives none of those reliably. If you want a terrace that survives the next monsoon, the inspection needs to happen in February or March, not in June.',
    sections: [
      {
        h2: 'Why the season is not negotiable',
        body:
          '<p>Waterproofing products are not magic. Every system available — bituminous membrane, PU liquid, cementitious coating, crystalline — has a specified substrate moisture content and a specified curing time, and both assume dry weather.</p>' +
          '<p>Apply a membrane to a slab holding monsoon moisture and you trap that moisture underneath it. The sun heats the slab, the trapped water turns to vapour, and the vapour has nowhere to go except up — lifting the membrane from below. It looks perfect on handover and it has failed by the following September.</p>' +
          '<p>So the practical calendar for a Punjab terrace is: inspect in <strong>February to March</strong>, apply in <strong>April to May</strong>, and let the monsoon you built it for be the test. Post-monsoon, in October, is when you check the result and when any remedial work should be done.</p>',
      },
      {
        h2: 'The three details that cause almost every leak',
        body:
          '<p>Most leaking terraces in Punjab fail at one of three places, and only one is the middle of the slab. Check your quote covers all three:</p>' +
          '<ol>' +
          '<li><strong>The parapet junction.</strong> Where the slab meets the parapet wall, thermal movement opens a hairline gap. Water enters there, gets under the waterproofing and travels sideways through the slab, appearing as a ceiling stain several feet away. This is the most common cause by a wide margin. The fix is a fillet and a properly turned-up membrane edge, not just a coating across the flat area.</li>' +
          '<li><strong>Drain outlets and khurras.</strong> If the outlet sits higher than the surrounding slab, water stands around it permanently. A membrane under four months of standing water will fail early regardless of quality. Outlets get cleared, re-set as the low point, or rebuilt.</li>' +
          '<li><strong>Slope, or the lack of it.</strong> A slab that ponds in the middle will find the weakest point. Where there is no slope, building one up with a screed or brickbat coba is part of the waterproofing job — not a separate luxury.</li>' +
          '</ol>' +
          '<p>A quote that mentions only the flat area and the system, and says nothing about parapets, drains and slope, has priced the easy 80% and left out the part that leaks.</p>',
      },
      {
        h2: 'Pre-monsoon checklist',
        body:
          '<p>Walk your own terrace in February. These are the visible warning signs:</p>' +
          '<ul>' +
          '<li><strong>Blistered or lifted membrane.</strong> If it moves underfoot or has bubbles, water is already underneath.</li>' +
          '<li><strong>A visible gap or crack line where the slab meets the parapet.</strong> Even a hairline counts.</li>' +
          '<li><strong>Standing water an hour after rain.</strong> Slope or drain problem, and it will fail the membrane.</li>' +
          '<li><strong>Debris or silt in the drain outlet.</strong> Clear it now — it is a five-minute job that prevents most of the damage.</li>' +
          '<li><strong>Any ceiling stain on the floor below.</strong> The leak is already active, so this is a repair rather than prevention, and it moves up the priority list.</li>' +
          '<li><strong>Efflorescence — white powder on the underside or on walls.</strong> Water is moving through and evaporating, depositing salts. Active path.</li>' +
          '</ul>',
      },
      {
        h2: 'Reading a waterproofing quote',
        body:
          '<p>Waterproofing quotes for the same terrace range from ₹25 to ₹150 per sq ft, and they are not quoting the same work. Five things to insist on:</p>' +
          '<ul>' +
          '<li><strong>The system, named.</strong> "Waterproofing" is not a system. APP membrane at 3 mm, PU liquid, or cementitious coating — these have different lifespans and prices.</li>' +
          '<li><strong>The preparation, itemised.</strong> Crack cutting and filling, fillets at junctions, screed repair, drain work. This is most of the job and all of the durability.</li>' +
          '<li><strong>Coat count and thickness,</strong> where applicable.</li>' +
          '<li><strong>Expected life, in years.</strong> A contractor who will not put a number on it is not confident in it. APP over a prepared slab should give 8–10 years; a cementitious coating, 3–5.</li>' +
          '<li><strong>What the warranty actually covers.</strong> Against the application, conditional on the preparation being as specified — which is why the specification needs to be in writing.</li>' +
          '</ul>',
      },
    ],
    faqs: [
      { q: 'Can I waterproof my terrace in June?', a: 'Sometimes, in a dry spell, but it is a gamble. The slab needs to be dry and there needs to be an adequate curing window without rain. If you are reading this in June, get the inspection done now so the repair is planned and priced rather than an emergency in August — and plan the application for the next February–May window.' },
      { q: 'How much does terrace waterproofing cost in Punjab?', a: '₹40–₹100 per sq ft for most systems, with large flat areas from about ₹25 per sq ft. A 1,000 sq ft terrace is roughly ₹40,000–₹1,00,000. Preparation and drainage work, not the membrane brand, usually explain the difference between two quotes.' },
      { q: 'Does waterproofing stop damp patches on inside walls?', a: 'Only if the terrace above is the actual source — which it often is, but not always. A plumbing leak in a shaft, rising damp in a ground-floor plinth and plain condensation all produce similar-looking stains and need completely different fixes. Diagnose before quoting, always.' },
      { q: 'Is brickbat coba worth it?', a: 'Two genuine reasons to use it: it creates slope where the slab has none, which no membrane can do, and it adds a thermal layer that keeps the room below cooler in summer. On a slab that already drains correctly it is unnecessary cost, and a contractor should tell you so.' },
      { q: 'How long does a waterproofed terrace last?', a: 'A correctly applied 3 mm APP membrane over a properly prepared and drained slab typically performs 8–10 years in Punjab conditions. Cementitious coatings give 3–5. PU liquid is at the longer end but is more sensitive to preparation. Heat cycling and monsoon loading are hard on all of them.' },
    ],
    related: ['waterproofing-services-jalandhar', 'terrace-roof-waterproofing-jalandhar', 'wall-seepage-damp-treatment-jalandhar'],
  },

  {
    slug: 'damp-walls-punjab-homes',
    date: '2026-09-18',
    title: 'Damp Walls in Punjab Homes: Causes and Real Fixes',
    description:
      'How to tell rising damp, a terrace leak, a plumbing leak and condensation apart — four problems that look identical as a stain and need four different fixes.',
    h1: 'Damp walls in Punjab homes: what causes them and what actually fixes them',
    lede:
      'Four different problems produce what looks like the same damp patch on a wall, and they need four different fixes. Painting over any of them to hide it is the most expensive mistake available, because you pay for the paint and the problem comes back through it within a season.',
    sections: [
      {
        h2: 'Read the stain before you call anyone',
        body:
          '<p>The shape and position of the damage narrows the cause before any instrument is used:</p>' +
          '<table class="rate-card"><thead><tr><th>What you see</th><th>Most likely cause</th></tr></thead><tbody>' +
          '<tr><td>Horizontal band along the bottom of a ground-floor wall</td><td>Rising damp from the plinth</td></tr>' +
          '<tr><td>Ceiling stain on the top floor, worse near an outside wall</td><td>Terrace parapet junction or failed drain</td></tr>' +
          '<tr><td>Patch directly below a bathroom, kitchen or duct</td><td>Plumbing leak</td></tr>' +
          '<tr><td>Diffuse dampness on the coldest wall, worse in winter, no drip</td><td>Condensation — not a leak at all</td></tr>' +
          '<tr><td>Dark-edged tide mark with white powder</td><td>Active water path with efflorescence</td></tr>' +
          '</tbody></table>' +
          '<p>The white powder is worth understanding. It is efflorescence — dissolved salts carried through the masonry by water and left behind when it evaporates at the surface. It means water is actively moving through the wall. Brushing it off changes nothing.</p>',
      },
      {
        h2: 'The four causes, and why the fixes are not interchangeable',
        body:
          '<p><strong>Rising damp</strong> is groundwater drawn up through the masonry by capillary action, usually because the original damp-proof course has failed or the ground level outside has been raised above it. It shows as a band along the base of a ground-floor wall, often with a tide mark. Sealing the inside face does nothing — the water is below and behind it. The fixes are a chemical DPC injection, or lowering the external ground level and improving drainage, which is often cheaper and more effective.</p>' +
          '<p><strong>A terrace or parapet leak</strong> is the most common cause of upper-floor stains in Jalandhar. Water enters at the wall-to-slab junction, gets under the surface, and travels sideways through the slab — so the stain appears well away from the actual entry point. This is why inspecting only the stained room is useless.</p>' +
          '<p><strong>A plumbing leak</strong> shows as a defined patch below a bathroom or duct and is the most fixable of the four. It is also the most often misdiagnosed as generic "seepage", which is how people end up waterproofing a wall when a ₹3,000 pipe joint is the actual problem.</p>' +
          '<p><strong>Condensation</strong> is not a leak. Warm moist air from cooking, bathing and breathing meets a cold external wall in winter or monsoon and condenses on it. It is diffuse rather than a distinct patch, has no tide mark, and is worst on the coldest surface. Waterproofing the outside will not touch it — ventilation and insulation will. If the bathroom has no working exhaust fan, that is the fix.</p>',
      },
      {
        h2: 'The rule that saves the most money',
        body:
          '<p><strong>Stop the water, let the wall dry, then treat and redecorate.</strong> In that order, and the middle step is the one people skip.</p>' +
          '<p>Waterproof paint is a coating, not a structural repair. Applied over a wall with active moisture, it traps the water behind an impermeable film. The film then blisters and peels — usually within one season — and it takes the plaster surface with it, so you are now paying to repair plaster as well as the leak you did not fix.</p>' +
          '<p>Drying takes longer than anyone expects. A wall that has been wet for years can need two to three months of dry weather to return to a paintable moisture content. A contractor willing to repaint the same week they fixed the leak is selling you the same problem again. We measure wall moisture with a meter and tell you when it is ready, even though waiting delays our own payment.</p>',
      },
      {
        h2: 'What to do this week',
        body:
          '<ol>' +
          '<li><strong>Photograph the stain with something for scale</strong> and note when it gets worse — after rain, after using the bathroom, or in cold weather. That single observation often identifies the cause.</li>' +
          '<li><strong>Check the obvious.</strong> Look at the terrace above, clear any silt from the drain outlet, and check whether an external ground level has been raised against the wall.</li>' +
          '<li><strong>Get a moisture-meter reading, not an opinion.</strong> A visual inspection alone cannot tell rising damp from a terrace leak. A meter can, in about ten minutes.</li>' +
          '<li><strong>Do not let anyone paint it yet.</strong> Not until the source is identified and stopped and the wall has dried.</li>' +
          '</ol>',
      },
    ],
    faqs: [
      { q: 'Why is my wall damp when there is no visible leak?', a: 'Water usually travels before it shows. The most common pattern in Jalandhar is a failed parapet joint on the terrace — water enters at the roof edge, gets under the surface and tracks sideways through the slab, appearing on a ceiling some distance from the entry. A plumbing leak in a shared shaft behaves similarly. Finding it reliably needs a moisture meter.' },
      { q: 'Can I just paint over it with waterproof paint?', a: 'Not while the source is active. The coating traps moisture behind the film, and it blisters and peels within a season, taking plaster with it. The water is stopped first, the wall is allowed to dry, and only then treated and painted.' },
      { q: 'How do I tell condensation from a leak?', a: 'Condensation is diffuse rather than a defined patch, appears on the coldest surface, has no tide mark, and is worst in winter and monsoon. A leak gives a defined patch, often with a dark edge and white salt deposits, and gets worse when it rains.' },
      { q: 'How long does a wall need to dry before painting?', a: 'Weeks to months. A wall wet for years can need two to three months of dry weather to come back to a paintable moisture content. This is the step most often skipped and the most common reason a correctly diagnosed damp repair still appears to fail.' },
      { q: 'Is damp bad for my health?', a: 'Persistent damp and the mould that grows with it are associated with respiratory symptoms and worsened asthma, particularly in children. That is a good reason to treat it as a maintenance priority rather than a cosmetic one.' },
    ],
    related: ['wall-seepage-damp-treatment-jalandhar', 'waterproofing-services-jalandhar', 'terrace-roof-waterproofing-jalandhar'],
  },

  {
    slug: 'deep-cleaning-price-list-jalandhar',
    date: '2026-09-16',
    title: 'Deep Cleaning Price List for Jalandhar, Explained Line by Line',
    description:
      'What each line of a Jalandhar deep cleaning rate card covers — bathroom, kitchen, sofa, AC, marble — and how to build the exact quote you need, not a package.',
    h1: 'Deep cleaning price list for Jalandhar, explained line by line',
    lede:
      'Cleaning is priced per unit, not per flat, because a 2 BHK with two spotless bathrooms and a 2 BHK with three heavily scaled ones are not the same job. This is what each line covers, so you can build the exact scope you need instead of buying a package that includes work you did not want.',
    sections: [
      {
        h2: 'Wet areas — where the money usually goes',
        body:
          '<table class="rate-card"><thead><tr><th>Item</th><th>Rate</th><th>What it covers</th></tr></thead><tbody>' +
          '<tr><td>Bathroom, standard</td><td>₹890</td><td>Walls, floor, fittings, exhaust, drain</td></tr>' +
          '<tr><td>Bathroom, premium descaling</td><td>₹1,190</td><td>Adds bonded hard-water scale removal</td></tr>' +
          '<tr><td>Kitchen, standard</td><td>₹2,490</td><td>Chimney, hob, backsplash, cabinets, sink, floor</td></tr>' +
          '<tr><td>Kitchen, large</td><td>₹4,490</td><td>Extended platform and more cabinets</td></tr>' +
          '<tr><td>Balcony</td><td>₹490 – ₹990</td><td>Swept, washed, drain cleared</td></tr>' +
          '<tr><td>Chimney only</td><td>₹690</td><td>Hood, filters, motor housing, degreased</td></tr>' +
          '<tr><td>Gas stove / cooktop</td><td>₹290</td><td>Burners, grates, drip tray</td></tr>' +
          '</tbody></table>' +
          '<p>The kitchen costs more than the bathroom for a reason that is not size. Cooking aerosolises oil, which settles on every surface and slowly polymerises into a hard film that water and soap will not touch. Removing it needs an alkaline degreaser, heat and dwell time — three things a bathroom does not need.</p>' +
          '<p>On bathrooms, the premium tier exists almost entirely because of hard water. Jalandhar supply is mineral-heavy in most sectors, so scale bonds to taps, tiles and shower screens within months. It is white, it feels rough, and no amount of scrubbing removes it — it needs a mild acid and dwell time. If your bathroom looks chalky rather than dirty, that is the tier you want.</p>',
      },
      {
        h2: 'Appliances and upholstery',
        body:
          '<table class="rate-card"><thead><tr><th>Item</th><th>Rate</th><th>Notes</th></tr></thead><tbody>' +
          '<tr><td>Air conditioner</td><td>₹490 – ₹690</td><td>Snow-foam jet clean at the upper rate</td></tr>' +
          '<tr><td>Refrigerator</td><td>₹899 – ₹1,299</td><td>Steam and sanitise at the upper rate</td></tr>' +
          '<tr><td>Sofa</td><td>₹199 – ₹349 per seat</td><td>Premium plus steam at the upper rate</td></tr>' +
          '<tr><td>Mattress</td><td>₹1,199</td><td>Steam extraction</td></tr>' +
          '<tr><td>Carpet</td><td>₹25 per sq ft</td><td>Cleaned in place</td></tr>' +
          '<tr><td>Curtains</td><td>₹190 – ₹270 per panel</td><td>Lined panels at the upper rate</td></tr>' +
          '<tr><td>Dining chairs</td><td>₹150 each</td><td></td></tr>' +
          '<tr><td>Ceiling fan</td><td>₹70 each</td><td></td></tr>' +
          '</tbody></table>' +
          '<p>Two of these are worth more than they look. <strong>Mattress steam</strong> is one of the few cleaning services with a measurable health effect rather than a cosmetic one — it removes dust mites and their allergens, which matters if anyone in the house has allergic rhinitis or asthma. <strong>Sofa extraction</strong> matters because surface shampooing leaves detergent residue in the fabric, which is sticky, attracts dust, and makes the sofa get dirty faster than before it was cleaned. Hot-water extraction pulls the solution back out.</p>',
      },
      {
        h2: 'Floors and stone',
        body:
          '<table class="rate-card"><thead><tr><th>Surface</th><th>Rate</th></tr></thead><tbody>' +
          '<tr><td>Tile floor</td><td>₹8 per sq ft</td></tr>' +
          '<tr><td>Marble</td><td>₹12 per sq ft</td></tr>' +
          '<tr><td>Italian marble, multi-stage honing</td><td>₹18 per sq ft</td></tr>' +
          '<tr><td>Italian marble, buffing + high gloss</td><td>₹30 per sq ft</td></tr>' +
          '<tr><td>Granite</td><td>₹12 per sq ft</td></tr>' +
          '<tr><td>Office / commercial floor, machine buffing</td><td>₹6 per sq ft</td></tr>' +
          '<tr><td>Post-construction cleanup</td><td>₹12 per sq ft</td></tr>' +
          '<tr><td>Jet washing</td><td>₹3 per sq ft</td></tr>' +
          '</tbody></table>' +
          '<p>One warning that will save you a floor: <strong>never let anyone use acid on marble.</strong> It etches the surface permanently, and the damage appears over the following weeks as a dull, cloudy patch that no amount of polishing fixes. The same applies to chrome — acid strips the plating. A crew that reaches for acid on every surface is cheaper for exactly that reason, and the bill arrives later.</p>',
      },
      {
        h2: 'Full-flat packages, and the included-room rule',
        body:
          '<table class="rate-card"><thead><tr><th>Flat</th><th>Package</th><th>Included</th></tr></thead><tbody>' +
          '<tr><td>1 BHK</td><td>₹4,500 – ₹5,900</td><td>1 bathroom, 1 kitchen</td></tr>' +
          '<tr><td>2 BHK</td><td>₹9,500 – ₹11,900</td><td>2 bathrooms, 1 kitchen</td></tr>' +
          '<tr><td>3 BHK</td><td>₹12,500 – ₹14,900</td><td>3 bathrooms, 1 kitchen</td></tr>' +
          '<tr><td>4 BHK</td><td>₹15,900 – ₹17,900</td><td>4 bathrooms, 1 kitchen</td></tr>' +
          '</tbody></table>' +
          '<p>The rule is <strong>one bathroom per bedroom and exactly one kitchen</strong>, whatever the bedroom count. A guest bathroom or a second kitchen is a priced extra at the per-unit rates above — ₹890–₹1,190 per bathroom, ₹2,490–₹4,490 per kitchen. The package price does not change.</p>' +
          '<p>This is stated up front because the alternative is discovering the extra rooms at the door, which is how cleaning quotes turn into arguments. Tell us the real layout when you book and the figure you are quoted is the figure you pay.</p>',
      },
    ],
    faqs: [
      { q: 'Is it cheaper to book a package or individual items?', a: 'A package is better value if you want most of the flat done, because the per-unit rates are set for standalone bookings. If you only want the kitchen and bathrooms, book them as individual items — a package would charge you for rooms you did not need.' },
      { q: 'Why is premium descaling worth ₹300 more?', a: 'Because it addresses the problem that actually makes a Jalandhar bathroom look dirty. Hard-water scale does not respond to scrubbing at all; it needs a mild acid and dwell time. If your bathroom looks chalky rather than grimy, standard cleaning will disappoint you.' },
      { q: 'Do prices change on weekends or holidays?', a: 'No. The rates are the same any day. What changes is availability — weekends and the weeks around Diwali and Holi fill up a week or more ahead, so book early for those.' },
      { q: 'What is not included?', a: 'Water tanks, common areas, stairwells, building exteriors and anything outside the flat. Interior windows, grilles and balconies are included. If you need something not on this list, ask and we will tell you honestly whether we do it rather than book a job we cannot complete properly.' },
      { q: 'Can I get a fixed price before the crew arrives?', a: 'Yes, and you should insist on it. Give us the room count and the scope, and the price comes off this rate card. It should not change on the day unless you add work you did not originally ask for.' },
    ],
    related: ['deep-cleaning-services-jalandhar', 'cleaning-services-jalandhar', 'full-house-deep-cleaning-jalandhar'],
  },

  {
    slug: 'choosing-a-contractor-jalandhar',
    date: '2026-09-14',
    title: 'How to Choose a Painting or Waterproofing Contractor in Jalandhar',
    description:
      'The seven questions that separate a contractor who will be there in two years from one who will not, and the red flags that show up before you pay a rupee.',
    h1: 'How to choose a painting or waterproofing contractor in Jalandhar',
    lede:
      'Most contractor problems are visible before you pay anything. The warning signs are in how a quote is written and how the first conversation goes. These are the questions worth asking, and what a bad answer sounds like.',
    sections: [
      {
        h2: 'The seven questions',
        body:
          '<ol>' +
          '<li><strong>"What is the measured wall area?"</strong> A contractor who has visited your flat should have a number. One who quotes from your floor plan is guessing, and will either overcharge or discover a problem mid-job.</li>' +
          '<li><strong>"What is included in the rate?"</strong> Putty, primer, coats, masking, furniture moving, cleanup. A cheap rate that excludes primer is not a cheap rate.</li>' +
          '<li><strong>"What happens if the old surface is worse than it looks?"</strong> The honest answer is a rate for scraping and putty that is agreed in advance. The bad answer is "we will see" — that is how a quote grows by 40% on day two.</li>' +
          '<li><strong>"How many coats, and how long between them?"</strong> Two coats with proper drying gaps, or one rushed long day. The difference shows within a month.</li>' +
          '<li><strong>"Which product, and can I see the specification in writing?"</strong> For waterproofing especially: the system, thickness and coat count. "Waterproofing" is not a specification.</li>' +
          '<li><strong>"What is the warranty, and what does it exclude?"</strong> A number of years, in writing, against the specified application. A warranty with no specification behind it is decoration.</li>' +
          '<li><strong>"Is final payment after a walkthrough?"</strong> It should be. Full payment up front removes every incentive to fix what you flag.</li>' +
          '</ol>',
      },
      {
        h2: 'Red flags, in rough order of severity',
        body:
          '<ul>' +
          '<li><strong>A large advance before any material is bought.</strong> A materials advance is reasonable. A 70% advance before work starts is not — it is the single strongest predictor that the contractor will not return.</li>' +
          '<li><strong>A willingness to paint an exterior in July.</strong> Anyone who will apply paint or membrane to a wall in the middle of a Punjab monsoon either does not understand the products or does not care. Walk away from this one specifically.</li>' +
          '<li><strong>No measurement, no moisture reading.</strong> If they quoted your painting job without a tape measure or your damp problem without a moisture meter, the quote is a guess.</li>' +
          '<li><strong>A price far below everyone else.</strong> Somebody is paying for it — either in material tier, in skipped preparation, or in a crew paid badly and in a hurry. Preparation is what gets cut first and it is what determines how long the finish lasts.</li>' +
          '<li><strong>Acid as a universal cleaner.</strong> If a cleaning crew reaches for acid on taps, marble or grout, they will remove the finish along with the dirt. Ask what they use on marble. The right answer is a pH-neutral product.</li>' +
          '<li><strong>No willingness to put anything in writing.</strong> Verbal scopes are unfalsifiable, and disputes are unwinnable without a written one.</li>' +
          '</ul>',
      },
      {
        h2: 'What a good quote looks like',
        body:
          '<p>It names the surface area measured, the products by brand and tier, the number of coats, the preparation included, the timeline with drying gaps, the payment stages, and the warranty terms. It fits on one page and you can check every line.</p>' +
          '<p>It should also be willing to tell you not to buy something. If your terrace joint is the leak and a ₹3,000 drain repair solves it, a contractor who sells you a ₹90,000 membrane anyway is not one to use again. The willingness to talk you out of work is the single best signal available, and it is the one most people ignore.</p>',
      },
      {
        h2: 'A note on price shopping',
        body:
          '<p>Getting three quotes is right. Comparing them on the headline number is wrong, because they are rarely for the same scope. Before comparing, normalise all three: same measured area, same product tier, same coat count, same preparation included. Do that and the spread usually collapses — and where it does not, the cheapest one is cheapest because something is missing.</p>',
      },
    ],
    faqs: [
      { q: 'Should I pay a deposit?', a: 'Yes, for materials. A materials advance is normal and reasonable. What is not reasonable is a large advance before any work starts and before any material is bought — that is when customers get abandoned mid-job.' },
      { q: 'How do I check whether a contractor is genuine?', a: 'Ask for two recent local addresses you can look at, and actually go and look. In a city the size of Jalandhar, a contractor with real work will have it within a few kilometres. Also check whether the address on their listing matches where they actually operate — mismatched listings are a common warning sign.' },
      { q: 'Is the cheapest quote ever the right one?', a: 'Occasionally, for genuinely simple work on a sound surface. Usually not, and the gap is almost always preparation. If one quote is dramatically below the others, ask specifically what preparation is included — the answer is normally the explanation.' },
      { q: 'What should the payment schedule be?', a: 'A materials advance, then staged payments as work progresses, with the final payment after a walkthrough and touch-ups. Never pay the full amount up front, and never pay the balance before you have inspected the finished work.' },
      { q: 'Do I need a written contract for a small job?', a: 'A written quote is enough for a small job, provided it names the scope, the products and the price. What you need in writing is the things that could be disputed — what is included and what is not.' },
    ],
    related: ['painting-services-jalandhar', 'waterproofing-services-jalandhar', 'house-painting-cost-jalandhar'],
  },

  {
    slug: 'moving-out-cleaning-checklist-jalandhar',
    date: '2026-09-12',
    title: 'Moving Out of a Jalandhar Flat: Get Your Deposit Back',
    description:
      'What landlords actually inspect when you move out in Jalandhar, the order to clean in, and what to photograph before handing the keys over.',
    h1: 'Moving out of a Jalandhar flat: the checklist that gets your deposit back',
    lede:
      'Deposit disputes almost always come down to the same three rooms, and none of them is the bedroom. Landlords check the kitchen, the bathrooms and the walls — and they check them against a standard the flat was never held to while you lived in it. This is the order that works.',
    sections: [
      {
        h2: 'What actually gets inspected',
        body:
          '<p>In order of how often they cause a deduction:</p>' +
          '<ol>' +
          '<li><strong>Kitchen grease.</strong> The chimney hood, the tiles behind the hob and the cabinet fronts. A kitchen wiped daily still accumulates a polymerised oil film that needs a proper alkaline degreaser. This is the single most common deduction.</li>' +
          '<li><strong>Bathroom scale.</strong> Not dirt — mineral scale on taps, tiles, shower screens and the WC. A landlord sees white crust and concludes the bathroom was not maintained. It needs a descaling acid and dwell time, not scrubbing.</li>' +
          '<li><strong>Wall marks and nail holes.</strong> Bluetack marks, scuffs behind furniture, picture hooks and any patch where paint came away with tape.</li>' +
          '<li><strong>Floor condition.</strong> Usually scuffs and, in the case of marble, dullness from years of mopping with the wrong product.</li>' +
          '<li><strong>Fixtures and fittings.</strong> Geyser, exhaust fans, light fittings, window grilles and the balcony drain.</li>' +
          '</ol>',
      },
      {
        h2: 'The order to do it in',
        body:
          '<p>Order matters more than effort. Working in the wrong sequence means redoing work.</p>' +
          '<ol>' +
          '<li><strong>Empty and declutter first.</strong> Cleaning around belongings takes twice as long and misses everything behind them. Get the flat empty before anyone starts.</li>' +
          '<li><strong>Ceilings, fans and light fittings.</strong> Dust falls. Anything done below them first gets redone.</li>' +
          '<li><strong>Kitchen.</strong> Degrease the chimney, hob and backsplash. This takes the longest and is the highest-stakes room.</li>' +
          '<li><strong>Bathrooms.</strong> Descale and disinfect, including the exhaust grill and the floor drain.</li>' +
          '<li><strong>Wardrobes and cabinet interiors.</strong> Vacuum and wipe. Landlords open them.</li>' +
          '<li><strong>Walls.</strong> Wipe marks, fill nail holes, and touch up with the original paint if you have it. If you do not, a small tin matched at a paint shop is cheaper than a deduction.</li>' +
          '<li><strong>Floors last.</strong> Machine scrub and, if they are marble, get them buffed rather than mopped.</li>' +
          '<li><strong>Windows, grilles, tracks and balcony.</strong> Easy to forget, immediately visible.</li>' +
          '</ol>',
      },
      {
        h2: 'Photograph everything, before and after',
        body:
          '<p>This is the part that wins disputes. Photograph each room in daylight from the doorway before you clean, and again from the same position after. Date-stamped, on your phone.</p>' +
          '<p>Photograph anything already damaged when you moved in, and any pre-existing defect you reported in writing during your tenancy. A deposit deduction for damage that was there before you arrived is not defensible if you have the photograph, and it is unwinnable if you do not.</p>' +
          '<p>Then do the handover walkthrough in person, with the landlord or their agent, rather than posting the keys. Anything they raise gets discussed while you are standing in the room and while a cleaning crew can still fix it. Disputes that happen by phone three days later go worse for the tenant every time.</p>',
      },
      {
        h2: 'What it costs, and what it saves',
        body:
          '<p>A move-out clean for a 2 BHK is <strong>₹9,500–₹11,900</strong> on the full-flat rate card, which includes two bathrooms and one kitchen. If you want it targeted rather than whole-flat, the kitchen is ₹2,490–₹4,490 and each bathroom ₹890–₹1,190.</p>' +
          '<p>Against a typical Jalandhar 2 BHK deposit, that is usually well under the deduction it prevents — and a receipt from a professional clean is itself useful evidence that the flat was handed over in good condition.</p>',
      },
    ],
    faqs: [
      { q: 'How much does a move-out clean cost in Jalandhar?', a: '₹9,500–₹11,900 for a 2 BHK including two bathrooms and one kitchen. For a targeted clean, the kitchen is ₹2,490–₹4,490 and bathrooms ₹890–₹1,190 each. It is usually less than the deposit deduction it avoids.' },
      { q: 'Do I need to clean if the landlord is going to repaint anyway?', a: 'The kitchen and bathrooms still matter, because repainting does not address grease or scale and those are what get deducted. Skip the walls if a repaint is happening, but do not skip the wet areas.' },
      { q: 'How long does it take?', a: 'A 2 BHK move-out clean takes one full day with a two-person crew, and a 1 BHK most of a day. Book it for after the flat is empty — cleaning around furniture takes longer and misses things behind it.' },
      { q: 'Can you clean on the day I hand over the keys?', a: 'That is the ideal timing, and we try to accommodate it. Tell us your handover date when you book. Move-out season peaks at the end of the school year in April and May, so book a week or more ahead for those months.' },
      { q: 'What if the landlord still deducts after a professional clean?', a: 'Keep the invoice and your before-and-after photographs. A dated receipt from a professional clean is evidence that the flat was handed over in a cleaned condition, which is what deposit disputes turn on.' },
    ],
    related: ['full-house-deep-cleaning-jalandhar', 'deep-cleaning-services-jalandhar', 'kitchen-deep-cleaning-jalandhar'],
  },
];

export const postBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));
