// The service catalog. Four hub pages, each with its own sub-services.
//
// Pricing note: cleaning rates are the operator's own published rate card.
// Painting and waterproofing rates are the prevailing Jalandhar/Punjab market
// bands for 2026 — they are presented as ranges with an explicit "confirmed
// after a free site visit" caveat, because quoting a flat per-sq-ft number
// without seeing the wall is how contractors end up eating a loss.

export const services = [
  // ─────────────────────────────────────────────────────────────── PAINTING ──
  {
    key: 'painting',
    slug: 'painting-services-jalandhar',
    name: 'Painting Services',
    shortName: 'Painting',
    accent: 'painting',
    icon: 'roller',
    title: 'Painting Services in Jalandhar — From ₹12/sq ft',
    description:
      'Interior and exterior painting in Jalandhar from ₹12/sq ft. Putty, primer and two coats included. Free site visit, written quote, dust sheets down before we start.',
    h1: 'Painting services in Jalandhar',
    lede:
      'Interior wall painting in Jalandhar costs <strong>₹12–₹22 per sq ft</strong> for standard emulsion and <strong>₹22–₹40 per sq ft</strong> for premium and luxury emulsions, with putty, primer and two finish coats included. Exterior weatherproof painting runs <strong>₹18–₹35 per sq ft</strong>. A 2 BHK flat is typically ₹18,000–₹32,000 of wall area work. The final figure is confirmed after a free site visit, because the honest variable is how much repair the old surface needs.',
    priceCaption: 'Indicative Jalandhar rates, 2026. All rates include labour, putty, primer and two coats.',
    priceTable: [
      { item: 'Interior emulsion — 2 coats', unit: 'per sq ft', price: '₹12 – ₹22', note: 'Most 2/3 BHK flats' },
      { item: 'Interior luxury emulsion', unit: 'per sq ft', price: '₹22 – ₹40', note: 'Washable, low-VOC' },
      { item: 'Exterior weatherproof paint', unit: 'per sq ft', price: '₹18 – ₹35', note: 'Primer + 2 coats' },
      { item: 'Texture / designer finish', unit: 'per sq ft', price: '₹40 – ₹120', note: 'Depends on pattern' },
      { item: 'Wood polish / varnish', unit: 'per sq ft', price: '₹15 – ₹50', note: 'Doors, wardrobes' },
      { item: 'Wall putty only', unit: 'per sq ft', price: '₹10 – ₹20', note: 'Levelling before paint' },
      { item: 'Primer coat only', unit: 'per sq ft', price: '₹5 – ₹12', note: 'Per coat' },
    ],
    includes: [
      'Free site visit and a written, itemised quote before any work starts',
      'Furniture moved to the centre of the room and covered with plastic sheeting',
      'Floor and fittings masked — we clean up as part of the job, not as a favour',
      'Scraping of flaking paint, crack filling and putty levelling',
      'Primer coat plus two finish coats as standard',
      'Branded paint from Asian Paints, Berger or Nerolac — you pick the shade and the tier',
      'Touch-up walkthrough with you before we pack up',
    ],
    process: [
      { t: 'Site visit', d: 'We measure the actual paintable wall area — not the carpet area — and check what the old surface needs. This is free.' },
      { t: 'Written quote', d: 'You get a per-sq-ft rate, the brand and tier of paint, and the number of coats in writing. No verbal estimates that change later.' },
      { t: 'Surface prep', d: 'Scraping, crack filling, putty and sanding. This is the stage cheap quotes skip, and it is why their paint peels within a year.' },
      { t: 'Masking', d: 'Furniture to the middle, sheets down, switches and fittings taped. Nothing gets painted that should not be.' },
      { t: 'Primer and coats', d: 'Primer, then two finish coats with drying time between. We do not rush coats into a single long day.' },
      { t: 'Handover', d: 'We walk the rooms with you, fix anything you flag, and only then take the balance payment.' },
    ],
    sections: [
      {
        h2: 'What actually drives your painting quote',
        body:
          '<p>Two flats of the same size can differ by 40% in price, and it is almost never the paint. The variables that matter, in order:</p>' +
          '<ul><li><strong>Wall area, not floor area.</strong> A 1,000 sq ft flat has roughly 2,800–3,200 sq ft of paintable wall and ceiling. We measure it.</li>' +
          '<li><strong>Condition of the existing surface.</strong> Paint over sound paint is cheap. Paint over flaking distemper with hairline cracks and damp patches is not, because it needs scraping, putty and sometimes a damp treatment first.</li>' +
          '<li><strong>Paint tier.</strong> Economy emulsion and luxury washable emulsion differ by roughly 3× per litre. Both are honest choices for different rooms.</li>' +
          '<li><strong>Ceiling height and access.</strong> Double-height lobbies and stairwells need scaffolding, which is real time.</li>' +
          '<li><strong>Colour change depth.</strong> Going from dark to white needs an extra coat or a tinted primer. Light to light does not.</li></ul>',
      },
      {
        h2: 'The monsoon problem, and why Punjab painting has a season',
        body:
          '<p>Punjab humidity sits high from late June through September. Paint applied to a wall holding moisture will blister and flake, usually within one season, and no paint brand prevents that. If a contractor is willing to paint your exterior in July without checking wall moisture, that is the single clearest sign to walk away.</p>' +
          '<p>The practical window is <strong>October to April</strong>. Interior work can run year-round in an air-conditioned or well-ventilated flat, but exterior and any freshly plastered wall needs to be genuinely dry. We carry a moisture meter on site visits and will tell you to wait if the wall is not ready — even though it delays our own payment.</p>',
      },
      {
        h2: 'Interior, exterior and texture — which do you actually need?',
        body:
          '<p><strong>Interior emulsion</strong> is the default for bedrooms and living rooms: matt or silk finish, washable in the better tiers. <strong>Exterior paint</strong> is a different product entirely — it is elastomeric and UV-stable, and using interior paint outside is a false economy that fails in one monsoon. <strong>Texture and designer finishes</strong> are decorative overlays for one feature wall, typically the TV wall or the master bedroom headboard wall. They cost three to six times a plain coat, and they are extremely hard to patch later, so put them where furniture will not scuff them.</p>',
      },
    ],
    faqs: [
      { q: 'How much does painting a 2 BHK cost in Jalandhar?', a: 'A typical 2 BHK has about 2,600–3,000 sq ft of paintable wall and ceiling. At the standard interior rate of ₹12–₹22 per sq ft that is roughly ₹31,000–₹66,000 for the full flat, and nearer ₹18,000–₹32,000 if you paint walls only and leave ceilings. The spread is driven almost entirely by the condition of the existing surface and the paint tier you choose.' },
      { q: 'How many days does it take to paint a flat?', a: 'A 2 BHK with sound walls takes 4–5 working days: one day of prep and masking, one for primer, and two to three for the finish coats with drying gaps. If the walls need scraping and full putty, add two days. We do not compress this into two days by skipping dry time.' },
      { q: 'Do you supply the paint or do I buy it?', a: 'Either works. Most customers prefer we supply, because we buy at contractor rates and you still get the billed brand and tier in writing. If you would rather buy your own, we will tell you exactly how many litres each room needs and quote labour and material separately.' },
      { q: 'Is painting possible during the monsoon in Jalandhar?', a: 'Interior work is fine in a ventilated flat. Exterior painting and any freshly plastered wall should wait until the wall moisture reads dry — realistically October onwards. We check with a moisture meter on the site visit and will tell you to wait rather than paint a wall that will blister.' },
      { q: 'What is the difference between putty and primer, and do I need both?', a: 'Putty is the filler that levels the wall and hides minor undulations. Primer is the sealing coat that stops the paint from being absorbed unevenly and helps it bond. They do different jobs and skipping either shows up as patchy finish or early flaking. Both are included in our per-sq-ft rate.' },
      { q: 'Can you paint only one room or one wall?', a: 'Yes. We take single-room and single-wall jobs, though there is a minimum job value because mobilising a crew and material for one wall costs nearly the same as for three. A feature wall with texture is a common single-wall job.' },
    ],
    related: ['deep-cleaning-services-jalandhar', 'waterproofing-services-jalandhar', 'interior-wall-painting-jalandhar'],
    subSlugs: ['interior-wall-painting-jalandhar', 'exterior-weatherproof-painting-jalandhar'],
  },

  // ─────────────────────────────────────────────────────────────── CLEANING ──
  {
    key: 'cleaning',
    slug: 'cleaning-services-jalandhar',
    name: 'Cleaning Services',
    shortName: 'Cleaning',
    accent: 'cleaning',
    icon: 'spray',
    title: 'Cleaning Services in Jalandhar — Home & Office',
    description:
      'Home and office cleaning in Jalandhar. Bathrooms from ₹890, kitchens from ₹2,490, sofa from ₹199 a seat, AC from ₹490. Trained crew, own equipment, own machines.',
    h1: 'Cleaning services in Jalandhar',
    lede:
      'Regular home and office cleaning in Jalandhar starts at <strong>₹290 for a single appliance</strong> and <strong>₹890 for a bathroom</strong>, with full-flat deep cleaning from <strong>₹4,500</strong>. We bring the machines, the chemicals and the crew. Every rate below is per unit, so you can see exactly what you are paying for before you book.',
    priceCaption: 'Published rate card. Per-unit rates, so you can build the exact job you need.',
    priceTable: [
      { item: 'Bathroom', unit: 'each', price: '₹890 – ₹1,190', note: 'Premium tier includes hard-water descaling' },
      { item: 'Kitchen', unit: 'each', price: '₹2,490 – ₹4,490', note: 'Large kitchen at the upper rate' },
      { item: 'Balcony', unit: 'each', price: '₹490 – ₹990', note: '' },
      { item: 'Chimney', unit: 'each', price: '₹690', note: 'Degreasing, filter clean' },
      { item: 'Gas stove / cooktop', unit: 'each', price: '₹290', note: '' },
      { item: 'Air conditioner', unit: 'each', price: '₹490 – ₹690', note: 'Snow-foam jet clean at the upper rate' },
      { item: 'Refrigerator', unit: 'each', price: '₹899 – ₹1,299', note: 'Steam and sanitise at the upper rate' },
      { item: 'Sofa', unit: 'per seat', price: '₹199 – ₹349', note: 'Premium plus steam at the upper rate' },
      { item: 'Mattress', unit: 'each', price: '₹1,199', note: 'Steam extraction' },
      { item: 'Carpet', unit: 'per sq ft', price: '₹25', note: '' },
      { item: 'Curtains', unit: 'per panel', price: '₹190 – ₹270', note: 'Lined panels at the upper rate' },
      { item: 'Ceiling fan', unit: 'each', price: '₹70', note: '' },
      { item: 'Marble floor', unit: 'per sq ft', price: '₹12 – ₹30', note: 'High-gloss buffing at the upper rate' },
      { item: 'Tile floor', unit: 'per sq ft', price: '₹8', note: '' },
      { item: 'Office / commercial floor', unit: 'per sq ft', price: '₹6 – ₹10', note: 'Machine buffing' },
      { item: 'Post-construction cleanup', unit: 'per sq ft', price: '₹12', note: 'Paint spots, cement film, debris' },
      { item: 'Jet washing', unit: 'per sq ft', price: '₹3', note: 'Driveways, boundary walls, façades' },
    ],
    includes: [
      'A trained crew that arrives on time with its own machines, extension boards and chemicals',
      'Wet and dry vacuum extraction, not just a mop and a cloth',
      'Safe, non-acidic chemicals on marble, granite and chrome — the surfaces cheap cleaning ruins',
      'Before-and-after photographs so you can see what changed without inspecting every corner',
      'Work done in front of you — nothing outsourced to a different crew after you book',
      'Same-week scheduling, including Sundays, and a fixed price confirmed before we start',
    ],
    process: [
      { t: 'Tell us the scope', d: 'Send us the room count and what is bothering you on WhatsApp. A photo is worth more than a paragraph.' },
      { t: 'Fixed price back', d: 'You get a per-unit price from this rate card, not a "we will see after inspecting" answer. It does not change on the day.' },
      { t: 'Pick a slot', d: 'Morning or afternoon, any day of the week. Most jobs are finished within a single working day.' },
      { t: 'The clean', d: 'The crew arrives with equipment, works through your list room by room, and shows you each area as it is finished.' },
      { t: 'Walkthrough', d: 'We go round with you at the end. If a spot is not right, it gets redone before we leave — not rescheduled for another visit.' },
    ],
    sections: [
      {
        h2: 'What a cleaning crew should bring, and what it should not',
        body:
          '<p>The difference between a ₹890 bathroom clean and a ₹300 one is nearly all equipment. A crew that turns up with only a bucket, a mop and a bottle of phenyl can remove visible dirt and cannot remove hard-water scale, soap scum or grout staining — those need a machine and the right chemistry. We bring a wet-and-dry vacuum, a steam unit, a floor machine and a controlled set of chemicals.</p>' +
          '<p>The other half is what we do <em>not</em> use. Acid on marble etches the surface permanently and the damage appears over weeks, not minutes. Acid on chrome strips the plating. A crew that pours acid on everything is cheaper for a reason, and the bill arrives later.</p>',
      },
      {
        h2: 'Regular cleaning versus a one-off clean',
        body:
          '<p>Most Jalandhar homes fall into one of two patterns. If your flat is generally maintained and you need it kept that way, a <strong>regular fortnightly or monthly visit</strong> covering bathrooms, kitchen and floors is the cheapest way to keep it there — the work per visit is smaller and the price reflects that.</p>' +
          '<p>A <strong>one-off clean</strong> is for when the flat has drifted: tenants moving out, a season of neglect, or guests arriving. That visit costs more because everything is at the hard end at once, but it resets the baseline. Moving-out and moving-in cleans are the most common single bookings we take.</p>',
      },
    ],
    faqs: [
      { q: 'How much does home cleaning cost in Jalandhar?', a: 'Per-unit, a bathroom is ₹890–₹1,190, a kitchen ₹2,490–₹4,490, sofa cleaning ₹199–₹349 a seat, and an AC ₹490–₹690. A full 2 BHK deep clean is ₹9,500–₹11,900. Regular maintenance cleaning of bathrooms, kitchen and floors costs less per visit than a deep clean because less work is needed each time.' },
      { q: 'Do I need to buy any cleaning material?', a: 'No. The crew brings machines, chemicals, cloths and mops. If you would rather they used your own products — common where someone has a sensitivity or a preferred brand — say so when booking and they will use yours.' },
      { q: 'Is the crew insured and background-checked?', a: 'Crews are our own and work under supervision, not subcontracted to whoever is available. Ask on the call if you want to know who is coming and we will tell you before the visit.' },
      { q: 'Do you clean offices and shops as well as homes?', a: 'Yes. Commercial floors are machine buffed at ₹6–₹10 per sq ft, and we take scheduled after-hours contracts so cleaning does not interrupt your working day. Tell us the floor area and preferred days.' },
      { q: 'How far in advance do I need to book?', a: 'Usually two to three days. Weekends and the days around Diwali and Holi fill up a week or more ahead, so book early for those. We will always tell you honestly if we cannot make your date rather than take the booking and arrive late.' },
      { q: 'What if I am not happy with the clean?', a: 'Tell us during the walkthrough and the crew redoes it before leaving. That is why we do the walkthrough rather than sending you photos and an invoice. Post-visit complaints are rare and we would rather spend twenty minutes fixing it than lose the repeat booking.' },
    ],
    related: ['deep-cleaning-services-jalandhar', 'painting-services-jalandhar', 'bathroom-deep-cleaning-jalandhar'],
    subSlugs: ['bathroom-deep-cleaning-jalandhar', 'kitchen-deep-cleaning-jalandhar', 'sofa-carpet-cleaning-jalandhar'],
  },

  // ────────────────────────────────────────────────────────── DEEP CLEANING ──
  {
    key: 'deepCleaning',
    slug: 'deep-cleaning-services-jalandhar',
    name: 'Deep Cleaning Services',
    shortName: 'Deep Cleaning',
    accent: 'deepCleaning',
    icon: 'sparkle',
    title: 'Deep Cleaning Services in Jalandhar — Full Flat From ₹4,500',
    description:
      'Full-flat deep cleaning in Jalandhar from ₹4,500 for 1 BHK. One bathroom per bedroom and one kitchen included. Machine scrubbing, hard-water descaling and steam.',
    h1: 'Deep cleaning services in Jalandhar',
    lede:
      'A full-flat deep clean in Jalandhar costs <strong>₹4,500–₹5,900 for a 1 BHK</strong>, <strong>₹9,500–₹11,900 for 2 BHK</strong>, <strong>₹12,500–₹14,900 for 3 BHK</strong> and <strong>₹15,900–₹17,900 for 4 BHK</strong>. Each package includes <strong>one bathroom per bedroom and exactly one kitchen</strong>; anything beyond that is charged at the per-room rates below rather than quietly discounted.',
    priceCaption: 'Full-flat packages. One bathroom per bedroom and one kitchen included in every package.',
    priceTable: [
      { item: '1 BHK full flat', unit: 'package', price: '₹4,500 – ₹5,900', note: 'Includes 1 bathroom, 1 kitchen' },
      { item: '2 BHK full flat', unit: 'package', price: '₹9,500 – ₹11,900', note: 'Includes 2 bathrooms, 1 kitchen' },
      { item: '3 BHK full flat', unit: 'package', price: '₹12,500 – ₹14,900', note: 'Includes 3 bathrooms, 1 kitchen' },
      { item: '4 BHK full flat', unit: 'package', price: '₹15,900 – ₹17,900', note: 'Includes 4 bathrooms, 1 kitchen' },
      { item: 'Extra bathroom', unit: 'each', price: '₹890 – ₹1,190', note: 'Above the included count' },
      { item: 'Extra kitchen', unit: 'each', price: '₹2,490 – ₹4,490', note: 'Above the included count' },
      { item: 'Villa / duplex / farmhouse', unit: 'quote', price: 'After inspection', note: 'Size and access vary too much to price blind' },
    ],
    includes: [
      'Every bathroom scrubbed, descaled and disinfected — walls, floor, fittings, exhaust and grout lines',
      'Kitchen degreasing: chimney, hob, backsplash, cabinet exteriors, platform and sink',
      'Wet vacuuming and machine scrubbing of all floors, including skirting and corners',
      'Interior windows, grilles, tracks and sills',
      'Balconies swept, washed and drained',
      'Ceiling fans, light fittings and switchboards wiped down',
      'Wardrobe and cabinet interiors emptied, vacuumed and wiped on request',
    ],
    process: [
      { t: 'Confirm the layout', d: 'Tell us the BHK and the actual number of bathrooms and kitchens. A 3 BHK almost always has something that is not a standard 3 BHK, and we price the real thing.' },
      { t: 'Book a slot', d: 'A full flat takes one to two working days depending on size and how long it has been since the last clean.' },
      { t: 'Top-down clean', d: 'Ceilings, fans and fittings first, then walls and cabinets, then floors last. Working in any other order means redoing work.' },
      { t: 'Descale and steam', d: 'Hard-water scale on taps, tiles and shower screens gets a dedicated treatment, and upholstery gets steam extraction.' },
      { t: 'Walkthrough and touch-up', d: 'You inspect room by room while the crew is still on site. Anything flagged gets redone then.' },
    ],
    sections: [
      {
        h2: 'How a deep clean differs from a regular clean',
        body:
          '<p>A regular clean maintains a surface. A deep clean removes what has bonded to it. In practice that means the difference is chemistry and dwell time rather than effort: hard-water scale needs a mild acid held on the surface long enough to dissolve, grease on a chimney needs an alkaline degreaser and heat, and grout lines need a brush and a machine rather than a cloth.</p>' +
          '<p>It also means a deep clean is measured in hours, not minutes. A 2 BHK that has not been deep cleaned in two years takes two people most of a full day. A flat deep cleaned six months ago takes considerably less. That is why the package price is a range rather than a single number.</p>',
      },
      {
        h2: 'The included-room rule, stated plainly',
        body:
          '<p>Each full-flat package includes <strong>one bathroom per bedroom</strong> and <strong>exactly one kitchen</strong>, regardless of how many bedrooms there are. A 2 BHK includes two bathrooms and one kitchen. A 4 BHK includes four bathrooms and one kitchen.</p>' +
          '<p>If your flat has more than that — a guest bathroom, a second kitchen, a servant quarter — those are added at the published per-room rates (₹890–₹1,190 per bathroom, ₹2,490–₹4,490 per kitchen). The package price itself does not change. We state this up front because the alternative, discovering the extra rooms on the day, is how cleaning quotes get argued about at the door.</p>',
      },
    ],
    faqs: [
      { q: 'What does deep cleaning cost for a 2 BHK in Jalandhar?', a: '₹9,500–₹11,900 for the full flat, which includes two bathrooms and one kitchen. If your 2 BHK has three bathrooms, the third is charged at ₹890–₹1,190. The exact figure within the range depends on how much scale and grease has built up and whether you want interiors of wardrobes and cabinets done.' },
      { q: 'How long does a full-flat deep clean take?', a: 'A 1 BHK takes most of one day. A 2 BHK takes one full day with a two-person crew. A 3 or 4 BHK takes one to two days. We will tell you the expected duration when you book so you can plan around it rather than being surprised at 9pm.' },
      { q: 'Do I need to empty the flat first?', a: 'No. We work around your furniture and belongings, moving what is needed and putting it back. Emptying wardrobe and cabinet interiors is optional — say so when booking if you want it included, because it adds time.' },
      { q: 'Is deep cleaning worth it before moving in?', a: 'It is the single best time to do it. An empty flat is faster to clean, we can reach every surface without moving anything, and you start in a flat that has no previous occupant left in it. Post-construction and move-in cleans are among our most common bookings.' },
      { q: 'Do you clean after construction or renovation?', a: 'Yes, at ₹12 per sq ft. Post-construction cleaning is a different job from a normal deep clean — paint spots on tiles, cement film on floors, fine dust in every crevice and usually debris to clear. We bring the right chemicals for the paint and cement, which normal cleaning products will not shift.' },
      { q: 'Can you clean only the kitchen and bathrooms?', a: 'Yes, that is a common booking and it is priced per unit: kitchen ₹2,490–₹4,490, bathroom ₹890–₹1,190 each. Many customers do the wet areas properly every few months and the rest of the flat lightly in between.' },
    ],
    related: ['cleaning-services-jalandhar', 'painting-services-jalandhar', 'full-house-deep-cleaning-jalandhar'],
    subSlugs: ['full-house-deep-cleaning-jalandhar'],
  },

  // ─────────────────────────────────────────────────────────── WATERPROOFING ──
  {
    key: 'waterproofing',
    slug: 'waterproofing-services-jalandhar',
    name: 'Waterproofing Services',
    shortName: 'Waterproofing',
    accent: 'waterproofing',
    icon: 'shield',
    title: 'Waterproofing Services in Jalandhar — Terrace, Roof & Seepage',
    description:
      'Terrace, roof, bathroom and basement waterproofing in Jalandhar from ₹40/sq ft. APP membrane, PU liquid and crystalline systems. Free pre-monsoon damp inspection.',
    h1: 'Waterproofing services in Jalandhar',
    lede:
      'Terrace and roof waterproofing in Jalandhar costs <strong>₹40–₹100 per sq ft</strong> depending on the system, with large flat areas from about <strong>₹25 per sq ft</strong>. Wall seepage and damp treatment is priced per affected area after inspection, because the cause — a leaking terrace joint, a cracked drainpipe, rising damp from the plinth — determines the fix, and treating the wrong one guarantees it comes back.',
    priceCaption: 'Indicative Punjab rates, 2026. System choice drives the spread far more than area does.',
    priceTable: [
      { item: 'Terrace — APP membrane (3 mm)', unit: 'per sq ft', price: '₹45 – ₹75', note: 'Torch-applied, proven, cost-effective' },
      { item: 'Terrace — PU liquid membrane', unit: 'per sq ft', price: '₹70 – ₹120', note: 'Seamless, best for chajja, parapets, cornices' },
      { item: 'Terrace — cementitious coating', unit: 'per sq ft', price: '₹40 – ₹60', note: 'Budget option, needs a sound slab' },
      { item: 'Large flat area (2,000+ sq ft)', unit: 'per sq ft', price: 'from ₹25', note: 'Volume rate' },
      { item: 'Bathroom / toilet waterproofing', unit: 'per bathroom', price: '₹6,000 – ₹15,000', note: 'Depends on whether tiles are lifted' },
      { item: 'Basement / retaining wall', unit: 'per sq ft', price: '₹80 – ₹180', note: 'Crystalline or injection grouting' },
      { item: 'Wall seepage / damp patch', unit: 'quote', price: 'After inspection', note: 'Cause must be identified first' },
      { item: 'Crack injection grouting', unit: 'per running ft', price: '₹150 – ₹400', note: 'PU injection for live cracks' },
    ],
    includes: [
      'A free damp inspection that identifies the actual source before anything is quoted',
      'Moisture-meter readings and photographs of what we found, so the diagnosis is checkable',
      'Slope correction so water runs to the drain instead of standing on the slab',
      'Surface preparation — cleaning, crack filling and, where needed, screed repair',
      'System applied to manufacturer specification, including the number of coats and curing time',
      'Post-monsoon follow-up inspection',
    ],
    process: [
      { t: 'Damp inspection', d: 'Free. We look at the terrace, the drain outlets, the parapet joints, the plumbing shafts and the inside face of the affected wall. The inside stain is almost never where the water enters.' },
      { t: 'Diagnosis in writing', d: 'You get told what is causing it and what would stop it. Sometimes the answer is a ₹3,000 drain repair, not a ₹90,000 terrace membrane — and we will say so.' },
      { t: 'System and quote', d: 'The system is chosen for your slab and your budget, with the brand, thickness and coat count named in the quote.' },
      { t: 'Preparation', d: 'The slab is cleaned, loose material removed, cracks cut open and filled, and ponding tested where the design allows.' },
      { t: 'Application', d: 'Applied to specification with proper curing between coats. Weather-dependent — we do not apply membrane onto a wet slab or before rain.' },
      { t: 'Cure and check', d: 'Curing period, then a water ponding test where feasible, then handover with photographs of every stage.' },
    ],
    sections: [
      {
        h2: 'Why waterproofing quotes vary so wildly',
        body:
          '<p>You will get quotes from ₹25 to ₹150 per sq ft for what sounds like the same terrace. They are not the same job. The variables are:</p>' +
          '<ul><li><strong>System.</strong> A cementitious coating is cheap and lasts a few seasons. A 3 mm APP torch-applied membrane is a different product with a different lifespan. A seamless PU liquid membrane costs roughly 40% more per square metre than APP sheet and is the right answer on complex shapes.</li>' +
          '<li><strong>Preparation.</strong> If the slab is sound and slopes correctly, preparation is a day. If it is cracked, holds water in the middle, and the parapet joint has failed, preparation is most of the job — and it is the part that decides whether the waterproofing lasts.</li>' +
          '<li><strong>Whether they fix the drainage.</strong> Waterproofing a terrace whose drain outlet is blocked is pointless. The membrane will be under standing water every monsoon.</li>' +
          '<li><strong>Whether they come back.</strong> A quote with no warranty and no follow-up inspection is priced for one visit.</li></ul>',
      },
      {
        h2: 'Damp walls: find the source, not the stain',
        body:
          '<p>The damp patch on your bedroom wall is usually the last place the water arrived, not the first. Common sources in Jalandhar homes, roughly in order of frequency:</p>' +
          '<ul><li><strong>A failed terrace joint or parapet.</strong> Water gets under the membrane edge at the wall and travels sideways through the slab before showing inside, often several feet from where you see it.</li>' +
          '<li><strong>A leaking drainpipe or plumbing shaft.</strong> Especially common in bathrooms that share a wall with a bedroom.</li>' +
          '<li><strong>Rising damp from the plinth.</strong> Shows as a horizontal band along the bottom of a ground-floor wall. Treating the wall face will not stop it — the damp is coming up through the masonry.</li>' +
          '<li><strong>Condensation.</strong> Not a leak at all, and the most common misdiagnosis. It appears on the coldest surface, usually an exterior-facing wall, and is worst in winter and monsoon. Waterproofing the outside will not fix it — ventilation and insulation will.</li></ul>' +
          '<p>This is why we inspect before quoting. Painting a damp wall with waterproof paint over a live leak traps the moisture and the paint fails within months, having cost you the paint job as well.</p>',
      },
      {
        h2: 'When to waterproof in Punjab',
        body:
          '<p>The window is <strong>February to May</strong>, before the monsoon. Membrane needs a dry slab, dry weather and correct curing, and none of those are reliable between July and September. A job done properly in April is tested by the monsoon it was built for.</p>' +
          '<p>Pre-monsoon bookings fill up first, and rightly so. If you are reading this in June, get the inspection done anyway — finding the leak now means the repair is planned and priced rather than an emergency in August.</p>',
      },
    ],
    faqs: [
      { q: 'How much does terrace waterproofing cost in Jalandhar?', a: '₹40–₹100 per sq ft for most systems, with large flat areas from about ₹25 per sq ft. A 1,000 sq ft terrace is therefore roughly ₹40,000–₹1,00,000. The spread is driven by the system chosen and, more than most people expect, by how much preparation the slab needs.' },
      { q: 'How long does waterproofing last?', a: 'A correctly applied 3 mm APP membrane over a properly prepared slab typically performs for 8–10 years. Cementitious coatings are shorter, around 3–5 years. PU liquid membranes are at the longer end but are more sensitive to surface preparation being done right. We name the expected life in the quote rather than implying it is permanent.' },
      { q: 'Can I paint over a damp wall?', a: 'Not while the source is active. Waterproof paint over a live leak traps moisture behind the film; the film blisters and peels, usually within one season, and you have paid for a paint job and still have a leak. The leak is treated first, the wall is allowed to dry, and then it is painted.' },
      { q: 'Is waterproofing only needed before the monsoon?', a: 'The application season is February to May in Punjab, because the membrane and coating systems need dry weather and proper curing. Diagnosis can be done any time — and if you find a leak in July, it is better to inspect and plan now and repair in the pre-monsoon window than to apply a system that will not cure.' },
      { q: 'What is the difference between APP membrane and PU liquid?', a: 'APP is a bituminous sheet torch-bonded onto the slab — it is the established, cost-effective option and works well on large simple terraces. PU liquid is a seamless liquid-applied membrane that cures into a rubbery layer; it costs roughly 40% more per square metre but is the better answer on complex shapes like chajja, parapets and cornices, and it has no laps to fail.' },
      { q: 'Do you give a warranty?', a: 'The warranty is stated in the written quote for the specific system and is honoured against the application, provided the slab was prepared to specification and drainage was addressed. A warranty given without a documented system and preparation is not worth much, so we name both in writing.' },
    ],
    related: ['painting-services-jalandhar', 'deep-cleaning-services-jalandhar', 'terrace-roof-waterproofing-jalandhar'],
    subSlugs: ['terrace-roof-waterproofing-jalandhar', 'wall-seepage-damp-treatment-jalandhar'],
  },
];

// ────────────────────────────────────────────────────────── SUB-SERVICES ──
// Each of these is a page of its own. They are deliberately NOT shorter versions
// of their parent hub: a page that repeats its parent with a different H1 is a
// doorway page, and Google treats it accordingly. Each one here answers a
// different question from its parent.

export const subServices = [
  {
    slug: 'interior-wall-painting-jalandhar',
    parent: 'painting',
    accent: 'painting',
    name: 'Interior Wall Painting',
    title: 'Interior Wall Painting in Jalandhar — ₹12–₹22/sq ft',
    description:
      'Interior painting in Jalandhar at ₹12–₹22/sq ft with putty, primer and two coats included. Room-by-room costs, paint tier comparison and a realistic timeline.',
    h1: 'Interior wall painting in Jalandhar',
    lede:
      'Interior painting runs <strong>₹12–₹22 per sq ft</strong> for standard emulsion and <strong>₹22–₹40 per sq ft</strong> for premium washable emulsion, with putty, primer and two finish coats included. For a typical 2 BHK that is <strong>₹31,000–₹66,000</strong>. The single biggest variable is not the paint — it is the condition of the wall underneath.',
    priceCaption: 'Interior rates. Ceilings are usually quoted at the same per-sq-ft rate; ask for walls-only if you want to reduce the scope.',
    priceTable: [
      { item: 'Standard emulsion, 2 coats', unit: 'per sq ft', price: '₹12 – ₹22', note: 'Bedrooms, rental flats' },
      { item: 'Premium washable emulsion', unit: 'per sq ft', price: '₹18 – ₹30', note: 'Living room, kids’ room' },
      { item: 'Luxury / designer emulsion', unit: 'per sq ft', price: '₹22 – ₹40', note: 'Low-VOC, high scrub resistance' },
      { item: 'Ceiling only', unit: 'per sq ft', price: '₹12 – ₹20', note: 'Usually white, 2 coats' },
      { item: 'Single accent wall', unit: 'per wall', price: 'from ₹2,500', note: 'Minimum job value applies' },
      { item: 'Putty levelling', unit: 'per sq ft', price: '₹10 – ₹20', note: 'Only if the wall needs it' },
      { item: 'Primer, per coat', unit: 'per sq ft', price: '₹5 – ₹12', note: 'Included in our rate' },
    ],
    includes: [
      'Wall-area measurement on site, not an estimate from your floor plan',
      'Furniture shifted to the room centre and fully sheeted',
      'Switches, sockets, fans and light fittings taped off',
      'Scraping of loose and flaking paint before anything goes on top',
      'Crack filling and putty levelling where the wall needs it',
      'Primer plus two finish coats, with real drying time between them',
      'Final walkthrough and touch-ups before the crew leaves',
    ],
    process: [
      { t: 'Measure', d: 'We measure actual paintable wall area. A 1,000 sq ft flat usually has 2,800–3,200 sq ft of wall and ceiling, which is why floor area is a bad way to estimate paint.' },
      { t: 'Assess', d: 'We check for flaking, hairline cracks, damp patches and previous distemper. Each of these changes the preparation needed.' },
      { t: 'Quote', d: 'Per-sq-ft rate, paint brand, tier and coat count in writing.' },
      { t: 'Prep and mask', d: 'Scrape, fill, putty, sand, then mask. This is the stage that decides whether the finish lasts.' },
      { t: 'Paint', d: 'Primer, then two coats. Drying gaps are respected — a rushed second coat looks fine on day one and patchy within a month.' },
      { t: 'Handover', d: 'Walkthrough with you, touch-ups done on the spot.' },
    ],
    sections: [
      {
        h2: 'Room-by-room cost for a typical Jalandhar flat',
        body:
          '<p>These are working figures for a standard 2 BHK of roughly 900–1,000 sq ft carpet area, at the standard ₹12–₹22 per sq ft band, walls and ceilings included:</p>' +
          '<ul><li><strong>Living and dining room</strong> (~1,000 sq ft of surface) — ₹12,000–₹22,000</li>' +
          '<li><strong>Two bedrooms</strong> (~1,400 sq ft) — ₹17,000–₹31,000</li>' +
          '<li><strong>Kitchen</strong> (~350 sq ft, usually a washable finish) — ₹5,000–₹9,000</li>' +
          '<li><strong>Two bathrooms</strong> (~300 sq ft, usually ceiling and upper walls only) — ₹3,500–₹6,000</li></ul>' +
          '<p>Walls only, skipping ceilings, removes roughly 30% of the surface area and therefore roughly 30% of the cost. It is a legitimate way to cut the bill, though ceilings show dirt more than people expect.</p>',
      },
      {
        h2: 'Choosing a paint tier without overspending',
        body:
          '<p>The honest advice is to spend on the rooms you use and scrub. <strong>Living room and kitchen</strong> earn premium washable emulsion — kitchen walls collect cooking aerosol and need to be wiped. <strong>Bedrooms</strong> are fine on standard emulsion; nothing touches those walls. <strong>Bathroom ceilings and upper walls</strong> should get a moisture-tolerant product, and no paint survives a bathroom with poor ventilation, so a working exhaust fan matters more than the paint brand.</p>' +
          '<p>Distemper is cheaper and we will say plainly that it is a false economy in a flat you intend to keep: it chalks, it cannot be wiped, and painting over it next time requires washing it all off first.</p>',
      },
    ],
    faqs: [
      { q: 'How much does it cost to paint one room in Jalandhar?', a: 'A standard 12×14 bedroom with roughly 600–700 sq ft of wall and ceiling costs ₹7,500–₹15,000 including putty, primer and two coats. A single accent wall starts around ₹2,500 but carries a minimum job value, because mobilising a crew for one wall costs nearly as much as for a room.' },
      { q: 'How long does interior painting take?', a: 'A bedroom is one to two days. A full 2 BHK is four to five working days, plus two more if the walls need scraping and full putty. Compressing that into two days means skipping drying time, and the finish shows it within weeks.' },
      { q: 'Do I need to move out while the flat is painted?', a: 'No, and most customers do not. Painting happens room by room, so you can live in the rooms that are not being worked on. The main discomfort is smell on coating days, which is why we recommend low-VOC paint if anyone in the house has asthma or a young child.' },
      { q: 'Should I paint the ceiling the same colour as the walls?', a: 'The convention is white or off-white ceilings, and it is the right default — a white ceiling bounces light and makes a room feel taller. Painting the ceiling the same colour as the walls visually lowers it, which suits a large room and hurts a small one.' },
      { q: 'Can you paint over distemper?', a: 'Not directly. Distemper is chalky and water-soluble; emulsion applied over it will not bond and will flake off in sheets. It has to be washed off first, which is a genuinely messy job. If your flat currently has distemper, say so on the call, because it changes both the price and the timeline.' },
      { q: 'Which paint brand do you use?', a: 'Asian Paints, Berger or Nerolac, whichever tier you choose. The brand and tier are written on your quote, and you can buy the material yourself if you prefer — we will give you the litre count per room.' },
    ],
    related: ['painting-services-jalandhar', 'exterior-weatherproof-painting-jalandhar', 'full-house-deep-cleaning-jalandhar'],
  },
  {
    slug: 'exterior-weatherproof-painting-jalandhar',
    parent: 'painting',
    accent: 'painting',
    name: 'Exterior & Weatherproof Painting',
    title: 'Exterior Painting in Jalandhar — Weatherproof, ₹18–₹35/sq ft',
    description:
      'Exterior and weatherproof painting in Jalandhar at ₹18–₹35/sq ft. Elastomeric coatings, crack bridging, monsoon-safe scheduling and why interior paint fails outside.',
    h1: 'Exterior & weatherproof painting in Jalandhar',
    lede:
      'Exterior painting costs <strong>₹18–₹35 per sq ft</strong> including primer, crack treatment and two coats of weatherproof exterior emulsion. A typical 1,500 sq ft house exterior is <strong>₹30,000–₹55,000</strong>. The work is genuinely different from interior painting: exterior coatings must bridge hairline cracks and tolerate a Punjab monsoon, and interior paint used outside fails within a single season.',
    priceCaption: 'Exterior rates. Height, access and the amount of crack treatment needed drive the spread.',
    priceTable: [
      { item: 'Exterior weatherproof emulsion', unit: 'per sq ft', price: '₹18 – ₹35', note: 'Primer + 2 coats' },
      { item: 'Elastomeric crack-bridging coating', unit: 'per sq ft', price: '₹28 – ₹45', note: 'For walls with hairline cracks' },
      { item: 'Exterior primer, per coat', unit: 'per sq ft', price: '₹6 – ₹14', note: '' },
      { item: 'Crack filling and plaster repair', unit: 'per running ft', price: '₹40 – ₹120', note: 'Width and depth dependent' },
      { item: 'Boundary wall / gate pillars', unit: 'per sq ft', price: '₹14 – ₹24', note: 'Lower access' },
      { item: 'Scaffolding', unit: 'per day', price: '₹800 – ₹2,000', note: 'Upper floors, stairwells' },
    ],
    includes: [
      'Wall-moisture check with a meter before we agree to start',
      'Crack treatment — cut open, filled and bridged rather than painted over',
      'Exterior-grade primer, not interior primer',
      'Two coats of weatherproof exterior emulsion',
      'Masking of windows, grilles, gates and the ground below',
      'Scaffolding arranged and included in the quote where needed',
    ],
    process: [
      { t: 'Moisture check', d: 'The single most important step. A wall holding moisture will blister any coating. If it reads wet, we tell you to wait rather than take the job.' },
      { t: 'Crack survey', d: 'Hairline cracks are bridged, structural cracks are repaired and, if the crack is live, investigated first. Painting over a live crack guarantees it reappears.' },
      { t: 'Clean and prep', d: 'Pressure washing to remove algae, chalk and loose paint, then drying time.' },
      { t: 'Primer', d: 'Exterior-grade primer, which is alkali-resistant — interior primer fails on exterior render.' },
      { t: 'Two coats', d: 'Weatherproof exterior emulsion, with proper drying windows and no application when rain is forecast within 24 hours.' },
      { t: 'Handover', d: 'Photographs of the completed elevation and a note of the products and batch used, so future touch-ups match.' },
    ],
    sections: [
      {
        h2: 'Why exterior paint fails in Punjab',
        body:
          '<p>Three failure modes account for almost every peeling exterior wall in Jalandhar:</p>' +
          '<ul><li><strong>Interior paint used outside.</strong> Interior emulsion has no UV or alkali resistance. On exterior render it chalks and washes away within a season or two.</li>' +
          '<li><strong>Painting over damp.</strong> Render holds water after the monsoon. A coating applied over it traps that moisture, and the failure appears as blistering from the inside out.</li>' +
          '<li><strong>No crack bridging.</strong> Exterior render moves with temperature. Cracks that are simply painted over reopen immediately, and each one becomes a water path into the wall.</li></ul>' +
          '<p>All three are preparation failures, not paint failures. This is why the cheapest exterior quote usually costs the most over five years.</p>',
      },
      {
        h2: 'When to paint an exterior in Jalandhar',
        body:
          '<p><strong>October to April.</strong> That window gives dry walls, manageable temperatures and enough curing time before the monsoon. Painting an exterior in June means racing the rain, and painting it in July or August means applying a coating to a saturated wall.</p>' +
          '<p>If you want the work done before next monsoon, the time to book the site visit is February or March. April and May bookings fill quickly, and exterior work is weather-dependent enough that a delayed start can push into the rains.</p>',
      },
    ],
    faqs: [
      { q: 'What does exterior painting cost for a house in Jalandhar?', a: '₹18–₹35 per sq ft for the wall surface area, including primer and two coats. A 1,500 sq ft exterior elevation is typically ₹30,000–₹55,000. If the walls have widespread hairline cracks needing an elastomeric bridging coat, expect ₹28–₹45 per sq ft instead.' },
      { q: 'How often should an exterior be repainted in Punjab?', a: 'A good weatherproof exterior emulsion with proper preparation should hold 6–8 years in Jalandhar conditions. The monsoon and the summer heat cycle are hard on coatings. Cheap exterior paint or poor preparation drops that to 3–4 years, at which point you have repainted twice for the price of doing it once properly.' },
      { q: 'Can you paint an exterior during the rainy season?', a: 'No, and you should be sceptical of anyone who says yes. Exterior coating needs a dry substrate and 24–48 hours without rain after application. Between July and September in Punjab that window cannot be relied on, so we schedule exterior work for the October–April period.' },
      { q: 'My exterior wall has green algae stains. Will paint cover it?', a: 'Paint alone will not hold. Algae means the wall stays damp, and coating over it traps the growth. We pressure wash, treat the surface, allow it to dry, and use an exterior product with anti-algal properties. If the algae keeps returning, the shade and drainage around the wall is the real problem and worth fixing.' },
      { q: 'Do you handle upper floors and scaffolding?', a: 'Yes. Scaffolding is quoted as a line item rather than hidden in the rate, because a ground-floor boundary wall and a third-floor elevation are not the same job. You will see the scaffolding cost separately on your quote.' },
    ],
    related: ['painting-services-jalandhar', 'interior-wall-painting-jalandhar', 'wall-seepage-damp-treatment-jalandhar'],
  },
  {
    slug: 'bathroom-deep-cleaning-jalandhar',
    parent: 'cleaning',
    accent: 'deepCleaning',
    name: 'Bathroom Deep Cleaning',
    title: 'Bathroom Deep Cleaning in Jalandhar — From ₹890',
    description:
      'Bathroom deep cleaning in Jalandhar from ₹890. Hard-water scale, grout lines, exhaust, fittings and floor. Premium descaling tier ₹1,190. Safe on chrome and marble.',
    h1: 'Bathroom deep cleaning in Jalandhar',
    lede:
      'Bathroom deep cleaning costs <strong>₹890</strong> for the standard tier and <strong>₹1,190</strong> for premium descaling. The premium tier exists because hard water is the real problem in Jalandhar bathrooms — the white crust on taps, tiles and shower screens is mineral scale, and it needs a dedicated acid treatment with dwell time, not more scrubbing.',
    priceCaption: 'Per bathroom. Premium descaling is worth it wherever the water is hard, which in Jalandhar is most places.',
    priceTable: [
      { item: 'Standard bathroom clean', unit: 'per bathroom', price: '₹890', note: 'Walls, floor, fittings, exhaust' },
      { item: 'Premium descaling', unit: 'per bathroom', price: '₹1,190', note: 'Removes bonded hard-water scale' },
      { item: 'Extra bathroom (in a package)', unit: 'per bathroom', price: '₹890 – ₹1,190', note: 'Above the included count' },
      { item: 'Shower screen / glass partition', unit: 'each', price: 'included', note: 'Scale removal included in premium' },
      { item: 'Exhaust fan', unit: 'each', price: '₹290', note: 'If booked as a standalone item' },
    ],
    includes: [
      'Wall tiles descaled and scrubbed, including grout lines',
      'Floor scrubbed, machine-cleaned and disinfected',
      'WC, basin, taps, shower and fittings descaled and polished',
      'Glass shower screens and mirrors cleared of mineral film',
      'Exhaust fan grill removed, cleaned and refitted',
      'Drain and floor trap cleared of hair and soap build-up',
      'Chrome polished — and never touched with acid, which strips the plating',
    ],
    process: [
      { t: 'Assess the water', d: 'We check whether the scale is mineral hardness or soap scum, because they need different chemistry and confusing them wastes everyone’s time.' },
      { t: 'Pre-treat', d: 'Descaling solution applied to taps, tiles, grout and screens and left to dwell. This is the step that actually dissolves the scale.' },
      { t: 'Mechanical clean', d: 'Brush and machine work on grout lines, corners and the floor, where scale and soap bond hardest.' },
      { t: 'Disinfect', d: 'Wet-area disinfectant on all touch surfaces, WC, basin and floor.' },
      { t: 'Polish and check', d: 'Chrome polished with a non-abrasive product, glass buffed clear, then you inspect.' },
    ],
    sections: [
      {
        h2: 'Hard water is the whole problem',
        body:
          '<p>Most of what makes a Jalandhar bathroom look dirty is not dirt. It is calcium and magnesium carbonate that has precipitated out of the water supply and bonded to every surface it touched. It is white or cream, it feels rough, and it does not respond to soap or general-purpose cleaner at all — which is why bathrooms that get mopped weekly still look chalky.</p>' +
          '<p>The fix is a mild acid held on the surface long enough to dissolve the mineral, then mechanical removal. Two things matter: the acid must be mild enough not to etch the tile glaze or strip chrome plating, and the dwell time must be respected. A crew that sprays acid and wipes immediately has done nothing except make the bathroom smell.</p>',
      },
      {
        h2: 'What we will not do',
        body:
          '<p>We do not use strong acid on chrome, on natural stone, or on coloured grout. It removes the scale and it also removes the finish, and the damage shows up over the following weeks as dull taps and permanently discoloured grout. If a bathroom has marble or travertine, it gets a pH-neutral treatment instead, even though that takes longer.</p>' +
          '<p>We also will not promise to remove staining that has penetrated the tile body or silicone sealant that has gone black with mould. Sealant is a consumable — the honest fix is to cut it out and redo it, and we will say so rather than charge for a clean that will not hold.</p>',
      },
    ],
    faqs: [
      { q: 'How much does bathroom cleaning cost in Jalandhar?', a: '₹890 for a standard deep clean and ₹1,190 for premium descaling, which is the tier that removes bonded hard-water scale from taps, tiles and shower screens. If your bathroom is part of a full-flat package, one bathroom per bedroom is already included.' },
      { q: 'Can you remove the white marks on my taps and tiles?', a: 'Yes, in almost all cases — that is mineral scale, and it dissolves with the right mild acid and enough dwell time. The exceptions are staining that has penetrated the tile body itself and permanently damaged chrome plating, and we will tell you which one you have before you pay.' },
      { q: 'How long does a bathroom deep clean take?', a: 'One bathroom takes about an hour to ninety minutes for a standard clean, and up to two hours for premium descaling where the build-up is heavy. If a crew claims to do a full bathroom properly in twenty minutes, they are wiping surfaces, not descaling them.' },
      { q: 'Is the acid safe for my plumbing and my family?', a: 'It is a mild, controlled descaling agent applied by the crew and fully rinsed, not a strong acid poured down the drain. The bathroom is usable as soon as we finish. Tell us if anyone in the house has a respiratory condition and we will use the lowest-strength product that will still do the job.' },
      { q: 'Do you clean the water tank or the pipes?', a: 'We clean bathrooms, not water systems. If scale is building up that fast on your fittings, the water itself is hard, and the durable answer is a water softener or an inline scale inhibitor rather than more frequent cleaning. That is a plumbing job, not a cleaning one.' },
    ],
    related: ['deep-cleaning-services-jalandhar', 'kitchen-deep-cleaning-jalandhar', 'cleaning-services-jalandhar'],
  },
  {
    slug: 'kitchen-deep-cleaning-jalandhar',
    parent: 'cleaning',
    accent: 'deepCleaning',
    name: 'Kitchen Deep Cleaning',
    title: 'Kitchen Deep Cleaning in Jalandhar — From ₹2,490',
    description:
      'Kitchen deep cleaning in Jalandhar from ₹2,490. Chimney degreasing, hob, backsplash and cabinets. Large kitchens ₹4,490. Food-safe degreasers, fully rinsed.',
    h1: 'Kitchen deep cleaning in Jalandhar',
    lede:
      'Kitchen deep cleaning costs <strong>₹2,490</strong> for a standard kitchen and <strong>₹4,490</strong> for a large one. Chimney degreasing is <strong>₹690</strong> and a gas stove or cooktop is <strong>₹290</strong> if booked separately. The work is almost entirely grease removal, which is why it takes longer than a bathroom and why the degreaser matters more than the scrubbing.',
    priceCaption: 'Per kitchen. Chimney and hob are included in the full kitchen clean; the separate rates apply when booked alone.',
    priceTable: [
      { item: 'Standard kitchen clean', unit: 'per kitchen', price: '₹2,490', note: 'Platform, cabinets, sink, walls' },
      { item: 'Large kitchen clean', unit: 'per kitchen', price: '₹4,490', note: 'Extended platform, more cabinets' },
      { item: 'Chimney degreasing', unit: 'each', price: '₹690', note: 'Filters, hood, motor housing' },
      { item: 'Gas stove / cooktop', unit: 'each', price: '₹290', note: 'Burners, grates, drip tray' },
      { item: 'Extra kitchen (in a package)', unit: 'per kitchen', price: '₹2,490 – ₹4,490', note: 'Above the one included' },
      { item: 'Refrigerator', unit: 'each', price: '₹899 – ₹1,299', note: 'Steam and sanitise at the upper rate' },
      { item: 'Storage cabinets', unit: 'per cabinet', price: '₹490 – ₹1,490', note: 'Interiors, wardrobe-sized at the top' },
    ],
    includes: [
      'Chimney hood, filters and motor housing degreased',
      'Hob, burners, grates and drip tray cleaned',
      'Backsplash and wall tiles degreased up to reachable height',
      'Platform, sink and drain cleared and disinfected',
      'Cabinet exteriors wiped; interiors on request',
      'Floor machine-scrubbed, including under and behind movable appliances',
      'Food-safe degreasers and full rinsing — no residue left on food-contact surfaces',
    ],
    process: [
      { t: 'Clear the platform', d: 'We move everything off the counters, clean, and put it back. You do not need to empty the kitchen first.' },
      { t: 'Degrease the chimney', d: 'The hood and filters get an alkaline degreaser and heat. This is the dirtiest single item in any kitchen and the one most often skipped.' },
      { t: 'Hob and backsplash', d: 'Burnt-on grease on the hob and the splash zone behind it, treated and scrubbed.' },
      { t: 'Cabinets and platform', d: 'Exteriors wiped, platform and sink scrubbed and disinfected, drain cleared.' },
      { t: 'Floor and rinse', d: 'Machine scrub, then a full clean-water rinse of every food-contact surface.' },
    ],
    sections: [
      {
        h2: 'Why kitchen cleaning takes longer than a bathroom',
        body:
          '<p>Cooking in an Indian kitchen aerosolises oil. Over months it settles on every vertical and horizontal surface in the room and then slowly polymerises — it stops being grease and becomes a hard, varnish-like film that water and soap will not touch. That is why a kitchen that is wiped daily still has sticky cabinets and a brown film on top of the chimney.</p>' +
          '<p>Removing it needs three things: an alkaline degreaser rather than an acidic one, heat, and dwell time. And because everything in a kitchen touches food, it also needs a thorough clean-water rinse afterwards. We use food-safe products and rinse properly — a kitchen that smells of chemical after cleaning has not been rinsed, and that is a real problem in the room where you prepare meals.</p>',
      },
      {
        h2: 'How often a kitchen actually needs this',
        body:
          '<p>For a household cooking twice a day, a full kitchen deep clean every <strong>six months</strong> keeps the chimney working and the cabinets from developing a permanent film. The chimney is the item to watch: a grease-loaded chimney loses extraction, which means more oil ends up on your cabinets, and in a bad case the grease in the hood becomes a fire risk.</p>' +
          '<p>Between deep cleans, wiping the backsplash and the cabinet fronts weekly with a warm degreaser keeps things manageable. That is a five-minute job and it roughly doubles the interval between professional cleans.</p>',
      },
    ],
    faqs: [
      { q: 'How much does kitchen deep cleaning cost in Jalandhar?', a: '₹2,490 for a standard kitchen and ₹4,490 for a large one, including the chimney and hob. If you want only the chimney done, that is ₹690, and a gas stove alone is ₹290.' },
      { q: 'Do you remove the chimney from the wall?', a: 'We clean the hood, filters and motor housing in place and degrease the accessible internal surfaces. We do not disconnect and remount the unit — that is an appliance technician’s job, and rehanging a chimney incorrectly is worse than a dirty one. If your chimney needs a service rather than a clean, we will say so.' },
      { q: 'How long does a kitchen take?', a: 'Two to three hours for a standard kitchen with the chimney. A large kitchen with heavy grease build-up takes four to five. Chimney degreasing alone is about an hour.' },
      { q: 'Is the degreaser safe around food?', a: 'Yes, with the caveat that any cleaning product must be rinsed off food-contact surfaces, and we do that as the final step. If you would prefer we use your own products, tell us when booking and the crew will use yours.' },
      { q: 'Can you clean inside the cabinets and the fridge?', a: 'Yes. Cabinet interiors are ₹490–₹1,490 depending on size, and the refrigerator is ₹899 for a standard clean or ₹1,299 for a steam and sanitise. Emptying the cabinet is faster — if you clear it before we arrive, the clean is quicker and we will tell you that when you book.' },
    ],
    related: ['deep-cleaning-services-jalandhar', 'bathroom-deep-cleaning-jalandhar', 'cleaning-services-jalandhar'],
  },
  {
    slug: 'sofa-carpet-cleaning-jalandhar',
    parent: 'cleaning',
    accent: 'cleaning',
    name: 'Sofa, Carpet & Upholstery Cleaning',
    title: 'Sofa & Carpet Cleaning in Jalandhar — Sofa From ₹199/Seat',
    description:
      'Sofa cleaning in Jalandhar from ₹199 per seat, carpet ₹25/sq ft, mattress steam ₹1,199. Hot-water extraction and steam, not surface shampooing. Dry in hours.',
    h1: 'Sofa, carpet & upholstery cleaning in Jalandhar',
    lede:
      'Sofa cleaning costs <strong>₹199 per seat</strong> for dry cleaning, <strong>₹279</strong> for premium and <strong>₹349</strong> for premium plus steam. Carpets are <strong>₹25 per sq ft</strong>, mattresses <strong>₹1,199</strong> and dining chairs <strong>₹150</strong> each. We use hot-water extraction and steam rather than surface shampooing, because shampoo that is not extracted leaves residue that makes upholstery get dirty faster next time.',
    priceCaption: 'Per unit. A standard 3-seater plus two chairs is usually 5–7 seats.',
    priceTable: [
      { item: 'Sofa — dry clean', unit: 'per seat', price: '₹199', note: 'Standard fabric sofa' },
      { item: 'Sofa — premium clean', unit: 'per seat', price: '₹279', note: 'Deeper extraction' },
      { item: 'Sofa — premium + steam', unit: 'per seat', price: '₹349', note: 'Sanitises as it cleans' },
      { item: 'Dining chairs', unit: 'per chair', price: '₹150', note: '' },
      { item: 'Cushions', unit: 'per piece', price: '₹50 – ₹90', note: 'By size' },
      { item: 'Mattress steam extraction', unit: 'each', price: '₹1,199', note: 'Dust mites, stains, odour' },
      { item: 'Carpet', unit: 'per sq ft', price: '₹25', note: 'Wall-to-wall or rugs' },
      { item: 'Curtains', unit: 'per panel', price: '₹190 – ₹270', note: 'Lined panels at the upper rate' },
      { item: 'Window blinds', unit: 'per sq ft', price: '₹25', note: '' },
    ],
    includes: [
      'Pre-vacuuming to lift loose dust before any liquid touches the fabric',
      'Fabric identification and a patch test on an inconspicuous area',
      'Hot-water extraction that pulls the cleaning solution back out',
      'Steam sanitising on the premium tier',
      'Targeted stain treatment for food, tea, ink and pet accidents',
      'Deodorising, and drying assistance so the sofa is usable the same day',
    ],
    process: [
      { t: 'Identify the fabric', d: 'Cotton, polyester blend, velvet, leather and suede each need a different approach. Velvet and suede in particular are easy to ruin with the wrong method.' },
      { t: 'Patch test', d: 'Always. On a hidden area, to check for colour bleed and fibre reaction before committing to the whole piece.' },
      { t: 'Pre-vacuum', d: 'Dry soil is removed first. Skipping this turns dust into mud the moment liquid is applied.' },
      { t: 'Extract', d: 'Hot-water extraction passes solution into the fabric and immediately pulls it back out along with the soil.' },
      { t: 'Treat and dry', d: 'Stains treated individually, then airflow and extraction to dry. Most sofas are dry within a few hours.' },
    ],
    sections: [
      {
        h2: 'Why extraction beats shampooing',
        body:
          '<p>Shampooing applies foam and wipes it off. The foam loosens soil and lifts some of it, but a meaningful amount of detergent stays behind in the fabric. That residue is slightly sticky, so it attracts dust, and the sofa gets visibly dirty again faster than before it was cleaned. It is the reason people say cleaning a sofa makes it worse.</p>' +
          '<p>Hot-water extraction applies the solution and then immediately vacuums it back out, carrying the suspended soil with it. It takes longer, uses more water and needs a proper machine, which is why it costs more. It also leaves far less behind, so the result holds.</p>',
      },
      {
        h2: 'Monsoon, dust and Punjab sofas',
        body:
          '<p>Two local factors drive upholstery cleaning here. The first is <strong>dust</strong> — Jalandhar summers carry a lot of it, and it works into weave and foam. The second is <strong>monsoon humidity</strong>, which is when a sofa that was merely dusty starts to smell musty, because trapped moisture and dust together grow mildew.</p>' +
          '<p>The practical answer is a clean in <strong>March or April</strong>, before humidity arrives, and a steam clean of mattresses around the same time. Steam is the effective answer for dust mites, which is worth knowing if anyone in the house has allergic rhinitis or asthma — mattress steam extraction is one of the few cleaning services with a measurable health benefit rather than just an appearance one.</p>',
      },
    ],
    faqs: [
      { q: 'How much does sofa cleaning cost in Jalandhar?', a: '₹199 per seat for a standard dry clean, ₹279 for premium and ₹349 for premium plus steam. A 3-seater sofa is three seats and a pair of chairs is two, so a typical living room set of five to seven seats costs ₹995–₹2,443.' },
      { q: 'How long does a sofa take to dry?', a: 'Generally two to four hours with good ventilation, and faster with a fan directed at it. Velvet and thick-pile fabrics take longer. We use extraction specifically because it removes most of the water, so you are not waiting a day for the sofa to be usable.' },
      { q: 'Can you remove old stains from my sofa?', a: 'Often, but not always, and we will not promise before seeing it. Fresh food and drink spills usually come out fully. Ink, dye transfer from clothing and stains that have been through a hot wash cycle may leave a shadow. We patch test and tell you honestly what to expect before starting.' },
      { q: 'Will cleaning damage my sofa fabric?', a: 'Not with a patch test and the right method. The risk cases are velvet, suede and some viscose blends, which can water-mark. We test on a hidden area first and will decline the job if the fabric reacts badly rather than risk the whole sofa.' },
      { q: 'Do you clean mattresses?', a: 'Yes, at ₹1,199 for steam extraction. It removes dust mites, their allergens and odour, and it is worth doing twice a year if anyone in the house has allergies or asthma. It is a cleaning service with a genuine health effect rather than just a cosmetic one.' },
      { q: 'Can you clean a carpet that is still on the floor?', a: 'Yes, wall-to-wall carpet at ₹25 per sq ft, cleaned in place with extraction and dried with airflow. We do not take carpets away — in-place cleaning avoids the shrinkage and re-laying problems that come with removing and refitting.' },
    ],
    related: ['cleaning-services-jalandhar', 'deep-cleaning-services-jalandhar', 'full-house-deep-cleaning-jalandhar'],
  },
  {
    slug: 'full-house-deep-cleaning-jalandhar',
    parent: 'deepCleaning',
    accent: 'deepCleaning',
    name: 'Full House Deep Cleaning',
    title: 'Full House Deep Cleaning in Jalandhar — 1 BHK From ₹4,500',
    description:
      'Full house deep cleaning in Jalandhar: 1 BHK ₹4,500, 2 BHK ₹9,500, 3 BHK ₹12,500, 4 BHK ₹15,900. One bathroom per bedroom and one kitchen included.',
    h1: 'Full house deep cleaning in Jalandhar',
    lede:
      'A full house deep clean is <strong>₹4,500–₹5,900 for 1 BHK</strong>, <strong>₹9,500–₹11,900 for 2 BHK</strong>, <strong>₹12,500–₹14,900 for 3 BHK</strong> and <strong>₹15,900–₹17,900 for 4 BHK</strong>. Every package includes one bathroom per bedroom and one kitchen. This is a whole-flat reset — bathrooms, kitchen, all floors, windows, balconies and fittings — not a scaled-up regular clean.',
    priceCaption: 'Full-flat packages. Villas, duplexes and farmhouses are quoted after inspection.',
    priceTable: [
      { item: '1 BHK', unit: 'package', price: '₹4,500 – ₹5,900', note: '1 bathroom, 1 kitchen included' },
      { item: '2 BHK', unit: 'package', price: '₹9,500 – ₹11,900', note: '2 bathrooms, 1 kitchen included' },
      { item: '3 BHK', unit: 'package', price: '₹12,500 – ₹14,900', note: '3 bathrooms, 1 kitchen included' },
      { item: '4 BHK', unit: 'package', price: '₹15,900 – ₹17,900', note: '4 bathrooms, 1 kitchen included' },
      { item: 'Villa / duplex / farmhouse', unit: 'quote', price: 'After inspection', note: '' },
      { item: 'Extra bathroom', unit: 'each', price: '₹890 – ₹1,190', note: 'Above the included count' },
      { item: 'Extra kitchen', unit: 'each', price: '₹2,490 – ₹4,490', note: 'Above the included count' },
      { item: 'Post-construction clean', unit: 'per sq ft', price: '₹12', note: 'Different job — see below' },
    ],
    includes: [
      'Every bathroom and the kitchen cleaned to the deep-clean standard, not the maintenance standard',
      'All floors machine-scrubbed, plus skirting, corners and behind movable furniture',
      'Interior windows, grilles, tracks and sills',
      'Balconies swept, washed and drains cleared',
      'Ceiling fans, light fittings and switchboards wiped',
      'Wardrobe and cabinet interiors on request',
      'A room-by-room walkthrough with you at the end, with rework on the spot',
    ],
    process: [
      { t: 'Confirm the real layout', d: 'Give us the BHK and the actual bathroom and kitchen count. We price what you have, not what the floor plan implies.' },
      { t: 'Choose the window', d: 'One to two working days for most flats. Move-in cleans are best done while the flat is still empty.' },
      { t: 'Work top-down', d: 'Ceilings and fans, then walls and cabinets, then floors. Any other order means redoing work.' },
      { t: 'Wet areas and glass', d: 'The bathrooms and kitchen get the full descaling and degreasing treatment, then the windows.' },
      { t: 'Walkthrough', d: 'You go round with the crew lead while everyone is still on site, so anything you flag is fixed immediately.' },
    ],
    sections: [
      {
        h2: 'Move-in and move-out cleans',
        body:
          '<p>These are the bookings where a full house clean pays for itself, for different reasons.</p>' +
          '<p>A <strong>move-out clean</strong> is usually a condition of getting your security deposit back, and landlords inspect bathrooms and kitchens first. Getting the descaling and the chimney done properly is what decides whether the deposit argument happens at all.</p>' +
          '<p>A <strong>move-in clean</strong> is about not living with the previous occupant. The flat may look clean and still have someone else’s kitchen grease, bathroom scale and dust in every wardrobe. It is also far cheaper to do while the flat is empty — a crew moves nothing, reaches every wall and finishes faster, so book it in the gap between possession and moving your furniture in.</p>',
      },
      {
        h2: 'Post-construction is a different job',
        body:
          '<p>If the flat has just been built, painted or renovated, book a post-construction clean rather than a standard deep clean. It is priced separately at ₹12 per sq ft and it is genuinely a different task: paint spatters on tiles need solvents, cement film on floors needs an acidic wash that would damage a finished marble floor, and fine construction dust settles back out of the air for days after you think you have finished.</p>' +
          '<p>Booking a normal deep clean for a post-construction flat leads to either a disappointing result or a crew improvising with the wrong chemicals on your new tiles. Tell us it is post-construction when you book.</p>',
      },
    ],
    faqs: [
      { q: 'What does full house deep cleaning cost in Jalandhar?', a: '₹4,500–₹5,900 for 1 BHK, ₹9,500–₹11,900 for 2 BHK, ₹12,500–₹14,900 for 3 BHK and ₹15,900–₹17,900 for 4 BHK. Each package includes one bathroom per bedroom and one kitchen, with extra rooms at the per-unit rates.' },
      { q: 'How long does a full house deep clean take?', a: 'A 1 BHK takes most of a day, a 2 BHK a full day with a two-person crew, and a 3 or 4 BHK one to two days. The upper end applies when the flat has not been deep cleaned for a long time, or when you want wardrobe and cabinet interiors done as well.' },
      { q: 'Do I need to move my furniture out?', a: 'No. The crew moves what needs moving and puts it back. That said, a move-in clean on an empty flat is faster and cheaper, because nothing has to be worked around. If you can schedule it before the furniture arrives, do.' },
      { q: 'Is it worth deep cleaning before moving in?', a: 'Yes, and it is the best value booking we offer. You are not living with the last occupant’s kitchen and bathroom, the flat is empty so the crew reaches everything, and it costs less in labour than cleaning the same flat full of furniture.' },
      { q: 'Do you clean the water tank, or outside the flat?', a: 'No. We clean inside the flat. Water tanks, common areas, stairwells and building exteriors are separate scopes — ask and we will tell you whether we cover what you need rather than book a job we cannot do properly.' },
      { q: 'How soon can you come?', a: 'Usually within two to three days, and often sooner. The busy periods are the weeks around Diwali, Holi and the end of the school year, when moving season peaks. Book a week ahead for those.' },
    ],
    related: ['deep-cleaning-services-jalandhar', 'bathroom-deep-cleaning-jalandhar', 'kitchen-deep-cleaning-jalandhar'],
  },
  {
    slug: 'terrace-roof-waterproofing-jalandhar',
    parent: 'waterproofing',
    accent: 'waterproofing',
    name: 'Terrace & Roof Waterproofing',
    title: 'Terrace Waterproofing in Jalandhar — ₹40–₹100/sq ft',
    description:
      'Terrace and roof waterproofing in Jalandhar at ₹40–₹100/sq ft. APP membrane, PU liquid and cementitious systems compared, plus drain and slope correction.',
    h1: 'Terrace & roof waterproofing in Jalandhar',
    lede:
      'Terrace waterproofing costs <strong>₹40–₹100 per sq ft</strong> depending on the system, with large flat areas from about <strong>₹25 per sq ft</strong>. An <strong>APP membrane at ₹45–₹75</strong> suits a large simple terrace; a <strong>PU liquid membrane at ₹70–₹120</strong> is the better answer where there is chajja, parapet or cornice detail, because it is seamless and has no laps to fail.',
    priceCaption: 'Indicative Punjab rates, 2026. A correctly applied APP membrane over a prepared slab should perform 8–10 years.',
    priceTable: [
      { item: 'APP membrane, 3 mm', unit: 'per sq ft', price: '₹45 – ₹75', note: 'Torch-applied sheet, established system' },
      { item: 'PU liquid membrane', unit: 'per sq ft', price: '₹70 – ₹120', note: 'Seamless, complex shapes' },
      { item: 'Cementitious coating', unit: 'per sq ft', price: '₹40 – ₹60', note: 'Budget, 3–5 year life' },
      { item: 'Large area, 2,000+ sq ft', unit: 'per sq ft', price: 'from ₹25', note: 'Volume rate' },
      { item: 'Brickbat coba (traditional)', unit: 'per sq ft', price: '₹90 – ₹160', note: 'Adds slope and insulation' },
      { item: 'Parapet and wall junction', unit: 'per running ft', price: '₹150 – ₹350', note: 'The most common failure point' },
      { item: 'Drain outlet and khurra', unit: 'each', price: '₹800 – ₹2,500', note: 'Including rebuilding where needed' },
    ],
    includes: [
      'Free inspection including moisture readings and photographs',
      'Slope correction so water reaches the drain instead of standing',
      'Drain outlets and khurras cleared, and rebuilt if they are the failure point',
      'Parapet and wall junctions — the detail where most terraces actually leak — treated and filleted',
      'Crack cutting and filling before the membrane goes down',
      'System applied to manufacturer specification, coat counts and curing stated in the quote',
      'Post-monsoon follow-up inspection',
    ],
    process: [
      { t: 'Inspect and diagnose', d: 'Free. We look at the slab, the slope, every drain outlet, the parapet line and the underside stains, and tell you where the water is actually getting in.' },
      { t: 'Deal with drainage first', d: 'A blocked or high-set drain means the membrane sits under standing water all monsoon and will fail early. This gets fixed before anything is applied.' },
      { t: 'Prepare the slab', d: 'Clean, remove loose material, cut and fill cracks, repair damaged screed, and form fillets at the wall junctions.' },
      { t: 'Prime and apply', d: 'Primer, then the chosen system to specification. Weather-dependent — never onto a wet slab and never with rain forecast inside the curing window.' },
      { t: 'Cure and test', d: 'Full curing period, then a ponding test where the drainage allows it.' },
      { t: 'Handover', d: 'Photographs of every stage, the product and batch used, the warranty terms and a post-monsoon check.' },
    ],
    sections: [
      {
        h2: 'The three things that actually cause terrace leaks',
        body:
          '<p>Almost every leaking terrace in Jalandhar fails at one of three points, and only one of them is the middle of the slab:</p>' +
          '<ul><li><strong>The parapet junction.</strong> Where the slab meets the parapet wall, thermal movement opens a hairline gap. Water runs in there, gets under the membrane, and travels sideways through the slab until it appears on a ceiling several feet away. This is the most common cause by a wide margin, and it is why a quote that only covers the flat area is incomplete.</li>' +
          '<li><strong>A blocked or badly set drain.</strong> If the khurra sits higher than the surrounding slab, water ponds permanently around it. No membrane enjoys being under water for four months a year.</li>' +
          '<li><strong>Cracks in the slab itself.</strong> Painted over rather than cut open and filled, they reopen with the first temperature cycle and become direct paths through.</li></ul>' +
          '<p>A quote that does not mention the parapet, the drains and the slope is pricing a membrane laid on a slab that will still leak.</p>',
      },
      {
        h2: 'Why traditional brickbat coba still gets specified',
        body:
          '<p>Brickbat coba is the older Punjab method — broken brick laid in a mortar bed to build up a slope, then finished with a waterproof coating. On paper it is obsolete next to modern membranes, and it is slower and heavier. It still gets used for two real reasons: it creates slope where the slab has none, which no membrane can do, and it adds a thermal layer that keeps the room below noticeably cooler in a Jalandhar summer.</p>' +
          '<p>On a flat roof with poor existing slope, coba plus a membrane on top is often the correct combination rather than overkill. On a slab that already drains properly, it is money you do not need to spend, and we will tell you so.</p>',
      },
    ],
    faqs: [
      { q: 'How much does terrace waterproofing cost in Jalandhar?', a: '₹40–₹100 per sq ft for most systems, with large flat areas from ₹25 per sq ft. A 1,000 sq ft terrace is roughly ₹40,000–₹1,00,000. System choice drives most of the spread, followed by how much slab preparation and drainage work is needed.' },
      { q: 'How long will it last?', a: 'A correctly applied 3 mm APP membrane over a properly prepared and drained slab typically performs 8–10 years. Cementitious coatings run 3–5 years. PU liquid is at the longer end but is more sensitive to preparation. We put the expected life in the written quote rather than implying it is permanent.' },
      { q: 'Can you waterproof over existing tiles or an old membrane?', a: 'Sometimes, and it depends on whether the existing layer is bonded. A membrane that has debonded or is holding water underneath has to come off — laying a new system over a failed one traps the water and fails within a season. We check by tapping and lifting a sample during the inspection.' },
      { q: 'When is the best time to waterproof in Jalandhar?', a: 'February to May, before the monsoon. The system needs a dry slab, dry weather and correct curing, and July to September gives none of those reliably. Pre-monsoon slots fill first, so book the inspection in February or March if you want the work done that season.' },
      { q: 'How long before I can walk on the terrace again?', a: 'APP membrane is walkable once it has cooled, usually the same day, though we ask you to avoid heavy traffic for a few days. PU liquid and cementitious systems need full curing, typically 48–72 hours, and longer in humid weather. We state the specific curing time in the quote.' },
      { q: 'Do you give a written warranty?', a: 'Yes, for the specific system, and it is honoured against the application provided the slab was prepared to specification and the drainage was addressed. If a quote offers a warranty without documenting the system, the thickness and the preparation, the warranty is not worth much.' },
    ],
    related: ['waterproofing-services-jalandhar', 'wall-seepage-damp-treatment-jalandhar', 'exterior-weatherproof-painting-jalandhar'],
  },
  {
    slug: 'wall-seepage-damp-treatment-jalandhar',
    parent: 'waterproofing',
    accent: 'waterproofing',
    name: 'Wall Seepage & Damp Treatment',
    title: 'Wall Seepage & Damp Treatment in Jalandhar',
    description:
      'Damp wall and seepage treatment in Jalandhar. A free inspection finds the real source — terrace joint, plumbing leak, rising damp or condensation — before we quote.',
    h1: 'Wall seepage & damp treatment in Jalandhar',
    lede:
      'Damp patches and wall seepage are quoted after inspection, because the treatment depends entirely on the cause — and the cause is usually not where the stain is. A leaking parapet joint, a failed plumbing shaft, rising damp in the plinth and plain condensation all look similar on the inside face and need four completely different fixes. <strong>The inspection is free</strong>, and we put the diagnosis in writing before you spend anything.',
    priceCaption: 'Treatment is quoted per job after diagnosis. These are the typical bands.',
    priceTable: [
      { item: 'Damp inspection and written diagnosis', unit: 'per property', price: 'Free', note: 'Moisture readings and photographs' },
      { item: 'Interior damp treatment (per wall)', unit: 'per sq ft', price: '₹60 – ₹140', note: 'After the source is stopped' },
      { item: 'External wall treatment', unit: 'per sq ft', price: '₹70 – ₹150', note: 'Elastomeric coating + crack bridging' },
      { item: 'Crack injection grouting', unit: 'per running ft', price: '₹150 – ₹400', note: 'PU injection for live cracks' },
      { item: 'Rising damp — DPC injection', unit: 'per running ft', price: '₹900 – ₹2,000', note: 'Chemical damp-proof course' },
      { item: 'Plumbing leak repair', unit: 'per point', price: '₹1,500 – ₹6,000', note: 'Excavation and reinstatement' },
      { item: 'Repainting after treatment', unit: 'per sq ft', price: '₹12 – ₹22', note: 'Only once the wall is dry' },
    ],
    includes: [
      'A free inspection with a moisture meter rather than a visual guess',
      'Photographs of what we found, including the inaccessible parts we opened up',
      'A written diagnosis naming the source and the evidence for it',
      'An honest recommendation — which sometimes is a ₹3,000 drain repair, not a ₹90,000 membrane',
      'Treatment of the source first, and the decorative repair only after the wall is dry',
      'A follow-up check after the next monsoon, which is the only real proof it worked',
    ],
    process: [
      { t: 'Inspect', d: 'Free. We read moisture at the stain, above it, below it and on the other side of the wall, and we go up to the terrace or the floor above.' },
      { t: 'Diagnose', d: 'The pattern of readings tells us whether the water is coming sideways through the slab, up through the masonry, or out of a pipe. Condensation is the one that is not a leak at all.' },
      { t: 'Report in writing', d: 'What is causing it, what the evidence is, what would fix it, and what it would cost. If the honest answer is "wait and see if it returns", we say that.' },
      { t: 'Fix the source', d: 'Terrace joint, drain, plumbing or DPC — addressed before any decorative work. Treating the wall face over a live leak is money thrown away.' },
      { t: 'Dry out', d: 'The wall is left to dry properly. This takes weeks, not days, and rushing it is why damp repairs fail.' },
      { t: 'Treat and redecorate', d: 'Damp-resistant treatment, then plaster repair and paint. Repainting before the wall is dry guarantees the stain returns through the new paint.' },
    ],
    sections: [
      {
        h2: 'Reading a damp patch like a diagnosis',
        body:
          '<p>The shape and position of the stain narrows the cause before any instrument is used:</p>' +
          '<ul><li><strong>A horizontal band along the bottom of a ground-floor wall</strong> — rising damp. Water is being drawn up through the masonry from the plinth. Painting or sealing the inside face does nothing; the moisture is below and behind it.</li>' +
          '<li><strong>A stain on an upper-floor ceiling, worst near an external wall</strong> — almost always the terrace parapet junction or a failed drain, with water tracking sideways through the slab.</li>' +
          '<li><strong>A patch that appears below a bathroom, kitchen or shaft</strong> — a plumbing leak. Usually the fastest to fix and the most often misdiagnosed as "seepage".</li>' +
          '<li><strong>A diffuse, even dampness on the coldest external wall, worst in winter and monsoon, with no visible drip</strong> — condensation. Not a leak. Ventilation and insulation are the fix, and waterproofing will not help at all.</li>' +
          '<li><strong>A tide-mark with a dark edge and efflorescence (white powder)</strong> — water is actively moving through and evaporating at the surface, and salts are being deposited. Active, needs the source found.</li></ul>',
      },
      {
        h2: 'Why painting over damp never works',
        body:
          '<p>Waterproof paint is a coating, not a structural fix. Applied over a wall that has water moving through it, the coating traps moisture behind an impermeable film. The film then blisters, peels or blows off, usually within one season — and it takes the plaster surface with it, so you are now repairing plaster as well as the leak.</p>' +
          '<p>The order is always the same: <strong>stop the water, let the wall dry, then treat and redecorate</strong>. The drying stage is the one people skip, and it is the reason a correctly diagnosed damp repair occasionally still fails. A wall that has been wet for years can take two to three months of dry weather to come back to a paintable moisture content. If a contractor will repaint the same week they fixed the leak, they are selling you the same problem again.</p>',
      },
    ],
    faqs: [
      { q: 'Why is my wall damp if there is no visible leak?', a: 'Water usually travels before it shows. The most common pattern in Jalandhar is a failed parapet joint on the terrace: water enters at the roof edge, gets under the surface, and tracks sideways through the slab, appearing as a stain on a ceiling or upper wall several feet away. A plumbing leak in a shared shaft behaves similarly. The inspection is free because finding this reliably needs a moisture meter, not an opinion.' },
      { q: 'Can I just paint over the damp patch?', a: 'Not while the source is active. The coating traps moisture, and it blisters and peels within a season — taking plaster with it, so the repair costs more than it would have. The water is stopped first, the wall is allowed to dry, and only then is it treated and painted.' },
      { q: 'How do I tell condensation from a leak?', a: 'Condensation appears on the coldest surface, is diffuse rather than a distinct patch, has no tide-mark, is worst in winter and monsoon, and there is no drip or dampness on the ceiling above. A leak gives a defined patch, often with a dark edge and white salt deposits, and it gets worse when it rains. The two need completely different fixes, which is why we check before quoting.' },
      { q: 'How much does damp treatment cost?', a: 'Interior damp treatment is ₹60–₹140 per sq ft and external wall treatment ₹70–₹150 per sq ft, but those numbers only apply once the source is fixed — and the source repair is often the larger line. Crack injection is ₹150–₹400 per running foot and a chemical DPC for rising damp is ₹900–₹2,000 per running foot. The free inspection gives you the actual figures.' },
      { q: 'How long does it take for the wall to dry?', a: 'Weeks to months, not days. A wall that has been wet for years can need two to three months of dry weather to return to a paintable moisture content. We measure it and tell you when it is ready. Redecorating early is the single most common reason damp repairs appear to fail.' },
      { q: 'Do you give a warranty on damp treatment?', a: 'On the treatment we applied to the source, yes, in writing for the specific system. What we cannot warrant is a wall where the customer declines the source repair and wants only the decorative fix — and in that case we will tell you before starting rather than after.' },
    ],
    related: ['waterproofing-services-jalandhar', 'terrace-roof-waterproofing-jalandhar', 'painting-services-jalandhar'],
  },
];

// Lookup helpers used by the build.
export const serviceByKey = Object.fromEntries(services.map((s) => [s.key, s]));
export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
export const subServiceBySlug = Object.fromEntries(subServices.map((s) => [s.slug, s]));

export const allServicePages = [
  ...services.map((s) => ({ ...s, kind: 'hub' })),
  ...subServices.map((s) => ({ ...s, kind: 'sub' })),
];
