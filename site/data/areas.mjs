// Service areas.
//
// ⚠️ These pages are only legitimate because each one says something true and
// specific about that place. A page that swaps the city name into the same
// paragraph is a doorway page, and it is the classic local-SEO penalty.
// If you add an area, add a real reason it is different — housing stock, water,
// rainfall, travel time, what people there actually book.

export const areas = [
  {
    slug: 'jalandhar',
    name: 'Jalandhar',
    region: 'Punjab',
    isHub: true,
    title: 'Painting, Cleaning & Waterproofing in Jalandhar City',
    description:
      'Painting, deep cleaning and waterproofing across Jalandhar city. Free site visit, fixed written quotes, own crew and equipment. Call +91 99147 72275.',
    h1: 'Painting, cleaning and waterproofing in Jalandhar',
    lede:
      'We work across Jalandhar city — from Model Town and Urban Estate to the colonies off Nakodar Road, Kapurthala Road and Hoshiarpur Road. Painting, deep cleaning and waterproofing, one crew, a free site visit and a fixed written quote before any work starts.',
    travel: 'Same-day site visits across the city',
    facts: [
      { k: 'Housing stock', v: 'Mix of independent kothis, builder floors and mid-rise flats' },
      { k: 'Water', v: 'Hard in most sectors — scale builds on fittings fast' },
      { k: 'Best painting window', v: 'October to April' },
      { k: 'Best waterproofing window', v: 'February to May, before the monsoon' },
    ],
    sections: [
      {
        h2: 'What Jalandhar homes actually book',
        body:
          '<p>Three jobs dominate our Jalandhar bookings, and they are seasonal in a predictable way.</p>' +
          '<p><strong>Kitchen and bathroom deep cleaning</strong> runs all year but peaks before Diwali and around the end of the school year. The driver is hard water: Jalandhar supply is mineral-heavy in most sectors, so scale bonds to taps, tiles, shower screens and grout within months of a clean. A bathroom that is mopped weekly still looks chalky, and the fix is descaling with proper dwell time rather than more scrubbing.</p>' +
          '<p><strong>Interior painting</strong> clusters between October and April. This is not arbitrary — Punjab humidity from late June makes paint applied to a damp wall blister, so the window matters more here than the paint brand does.</p>' +
          '<p><strong>Terrace waterproofing</strong> books February to May. Most Jalandhar terraces fail at the parapet junction rather than the middle of the slab, which is why a quote covering only the flat area usually does not solve the leak.</p>',
      },
      {
        h2: 'Independent kothis versus builder floors',
        body:
          '<p>The two need different approaches and it is worth knowing which you have before you get quotes.</p>' +
          '<p><strong>Independent kothis</strong> have their own terrace, their own boundary walls and usually a larger exterior elevation. That means waterproofing and exterior painting are both in scope, and the terrace is often the source of any damp patch on the top floor. Exteriors here are large and access matters — scaffolding is a real line item.</p>' +
          '<p><strong>Builder floors and flats</strong> share a slab, so a leak in your ceiling is often a neighbour’s terrace or a shared plumbing shaft. Waterproofing a flat you do not own the terrace of needs the society or landlord involved, and it is better to know that before paying for an inspection. Interior painting and deep cleaning are the common bookings here, and neither needs anyone’s permission.</p>',
      },
    ],
    faqs: [
      { q: 'Do you charge for a site visit in Jalandhar?', a: 'No. The site visit and the written quote are free anywhere in Jalandhar city. We measure the actual paintable wall area or the actual scope, and if the honest answer is that you do not need the work yet, we will say that.' },
      { q: 'Which parts of Jalandhar do you cover?', a: 'The whole city — Model Town, Urban Estate, Guru Teg Bahadur Nagar, Green Model Town, Wadala, Basti Bawa Khel, Preet Nagar, Lamba Pind, Dakoha, Chogitti, Kishanpura, and the colonies along Nakodar Road, Kapurthala Road and Hoshiarpur Road. If you are unsure whether you are in range, call and ask.' },
      { q: 'How quickly can you come?', a: 'Site visits are usually same-day or next-day. Cleaning bookings are typically two to three days out. Painting and waterproofing depend on the season — in the pre-monsoon and pre-Diwali peaks, book a week or more ahead.' },
      { q: 'Do you work in flats where the society has rules?', a: 'Yes. Tell us the society’s working hours and any restrictions when you book and we will schedule around them. For work on a shared terrace or a slab you do not own, you will need the society or landlord’s approval — we will flag that at the inspection rather than after starting.' },
    ],
    localities: [
      'Model Town', 'Urban Estate', 'Guru Teg Bahadur Nagar', 'Green Model Town', 'Wadala',
      'Basti Bawa Khel', 'Preet Nagar', 'Lamba Pind', 'Dakoha', 'Chogitti', 'Kishanpura',
      'Sodal Road', 'Nakodar Road', 'Kapurthala Road', 'Hoshiarpur Road', 'Jamsher',
      'Raipur', 'Rasoolpur', 'Bootan Mandi', 'Patel Chowk', 'BMC Chowk', 'Jalandhar Cantt',
      'Adarsh Nagar', 'New Jawahar Nagar', 'Kot Kishan Chand',
    ],
  },
  {
    slug: 'model-town-jalandhar',
    name: 'Model Town',
    region: 'Jalandhar',
    title: 'Painting, Cleaning & Waterproofing in Model Town, Jalandhar',
    description:
      'Painting, deep cleaning and waterproofing in Model Town, Jalandhar. Kothis and bungalows, larger terraces and elevations. Free site visit — +91 99147 72275.',
    h1: 'Painting, cleaning and waterproofing in Model Town, Jalandhar',
    lede:
      'Model Town is mostly independent kothis and older bungalows with large terraces, generous wall areas and mature trees. That combination makes exterior painting, terrace waterproofing and full-house deep cleaning the three jobs we do most here.',
    travel: 'Site visits same day, we are minutes away',
    facts: [
      { k: 'Typical property', v: 'Independent kothis and older bungalows on wide plots' },
      { k: 'What that means', v: 'Larger wall area, larger terraces, more exterior elevation' },
      { k: 'Common problem', v: 'Terrace parapet leaks showing as top-floor ceiling stains' },
      { k: 'Common booking', v: 'Full kothi deep clean and exterior repaint' },
    ],
    sections: [
      {
        h2: 'Why Model Town kothis need a different quote',
        body:
          '<p>A Model Town kothi has more surface area than its floor plan suggests. Wide plots mean long boundary walls and a large exterior elevation, and older bungalows usually have high ceilings, which adds wall area to every room. An interior painting quote built from carpet area will be badly wrong here — we measure the actual wall surface.</p>' +
          '<p>The terraces are also larger and older. A 40-year-old slab has been through four decades of Punjab temperature cycling, and the parapet junction has almost certainly opened at some point. If you have a damp patch on the top-floor ceiling, the terrace above it is the first place to look, not the last.</p>',
      },
      {
        h2: 'Mature trees, shade and damp',
        body:
          '<p>Model Town has real tree cover, which is most of why the area is pleasant and also why the north and east walls of many houses stay damp. Shade keeps a wall cool and slows evaporation, so a wall that gets wet in the monsoon stays wet far longer than a sun-facing one. The result is algae staining, green or black, and eventually paint failure on those specific elevations.</p>' +
          '<p>The fix is not just an anti-algal paint. The wall needs pressure washing, treatment, and enough drying time before coating — and if a boundary wall has soil banked against it, lowering that soil line does more than any paint. On the deep cleaning side, shaded rooms and older construction are where we find the most mildew on curtains, mattresses and upholstery, so those are worth a steam clean.</p>',
      },
    ],
    faqs: [
      { q: 'Do you cover all of Model Town?', a: 'Yes, all of it, including the lanes off the main roads and the older blocks. We are close enough that site visits are usually same-day.' },
      { q: 'My top-floor ceiling has a damp patch. Is it the terrace?', a: 'Usually, yes — and almost always the parapet junction rather than the middle of the slab. Water enters at the wall, gets under the surface and tracks sideways, so the stain appears well away from where the leak is. The inspection is free and we will confirm it with moisture readings.' },
      { q: 'Can you paint a kothi exterior with the trees in the way?', a: 'Yes, though it affects access and time. Where branches prevent ladders we use scaffolding, which is quoted as a separate line item rather than buried in the rate. If a branch genuinely blocks a wall, we will tell you and you can decide whether to have it cut back first — it is usually cheaper.' },
      { q: 'What does a full kothi deep clean cost?', a: 'It is priced from the room count on the full-house rate card — one bathroom per bedroom and one kitchen included in the package, with extra rooms at the per-unit rates. A large kothi with five or six bathrooms almost always exceeds the included count, so we price the real layout rather than the BHK label.' },
    ],
  },
  {
    slug: 'kapurthala',
    name: 'Kapurthala',
    region: 'Punjab',
    title: 'Painting, Cleaning & Waterproofing in Kapurthala',
    description:
      'Painting, deep cleaning and waterproofing in Kapurthala. Around 20 km from Jalandhar, same crew and fixed written quotes. Free site visit — +91 99147 72275.',
    h1: 'Painting, cleaning and waterproofing in Kapurthala',
    lede:
      'We cover Kapurthala and the surrounding villages, roughly 20 km from Jalandhar on the Kapurthala Road. Painting, deep cleaning and waterproofing, with the same crew and the same published rates as our Jalandhar work.',
    travel: 'About 30–40 minutes from our base',
    facts: [
      { k: 'Distance', v: '~20 km from Jalandhar via Kapurthala Road' },
      { k: 'Typical property', v: 'Older independent houses, many with large open terraces' },
      { k: 'Common booking', v: 'Terrace waterproofing and full-house deep cleaning' },
      { k: 'Note', v: 'Larger jobs are scheduled as a full day to avoid split visits' },
    ],
    sections: [
      {
        h2: 'Working in Kapurthala',
        body:
          '<p>Kapurthala is close enough that we treat it as part of our normal area, with one practical difference: because the drive is 30–40 minutes each way, we schedule Kapurthala jobs as full days rather than partial ones. A crew that arrives, works three hours and drives back has spent more time travelling than working, and that costs you more than it saves.</p>' +
          '<p>In practice that means we group work — a painting job runs its days consecutively, and cleaning bookings are given a full morning or afternoon slot. It also means Kapurthala is a good place to combine jobs if you have more than one property.</p>',
      },
      {
        h2: 'Older housing and open terraces',
        body:
          '<p>Much of the housing stock in and around Kapurthala is older independent construction with large, open, flat terraces. Those terraces are the single most common source of problems we are called about: an unprotected slab built decades ago, no slope to speak of, and a drain outlet that has silted up over years.</p>' +
          '<p>Two things follow. First, waterproofing here is more often a drainage and slope correction job than a pure membrane job — laying membrane on a slab that ponds in the middle just moves the failure. Second, the parapet lines on old construction are usually the weak point, and they need proper fillets and treatment, not just a coating over the top.</p>',
      },
    ],
    faqs: [
      { q: 'Do you charge extra to travel to Kapurthala?', a: 'The published rates are the same. For large jobs there is no travel charge. For very small jobs — a single appliance clean, for example — we will be honest that the travel makes it poor value and suggest you book it alongside other work.' },
      { q: 'How soon can you come to Kapurthala?', a: 'Site visits are usually within a day or two rather than same-day, because we batch the trip. Cleaning bookings are typically three to five days out. Painting and waterproofing follow the same seasonal windows as Jalandhar.' },
      { q: 'My Kapurthala terrace has no slope. Can that be fixed?', a: 'Yes, and it usually should be. A slab that ponds in the middle will fail a membrane early no matter how good the membrane is. The options are to build up a slope with a screed or brickbat coba, or to re-set the drain outlet as a low point. We will tell you which is right for your slab after inspecting it.' },
      { q: 'Do you cover villages around Kapurthala?', a: 'Generally yes, within about 40 km of Jalandhar. Tell us the village and we will confirm. For outlying locations we batch the visit, so booking slightly further ahead helps.' },
    ],
  },
  {
    slug: 'phagwara',
    name: 'Phagwara',
    region: 'Punjab',
    title: 'Painting, Cleaning & Waterproofing in Phagwara',
    description:
      'Painting, deep cleaning and waterproofing in Phagwara and along GT Road. Rental and hostel turnovers, commercial floors, terrace waterproofing. Call +91 99147 72275.',
    h1: 'Painting, cleaning and waterproofing in Phagwara',
    lede:
      'Phagwara and the GT Road corridor, about 20 km from Jalandhar. Alongside the usual residential work, Phagwara has a steady turnover of rental flats and hostel accommodation, which makes fast turnaround painting and move-out deep cleaning our most common bookings here.',
    travel: 'About 30 minutes from our base',
    facts: [
      { k: 'Distance', v: '~20 km from Jalandhar on GT Road' },
      { k: 'Typical property', v: 'Rental flats, hostel accommodation, commercial units' },
      { k: 'Common booking', v: 'Turnover painting and move-out deep cleaning' },
      { k: 'Also', v: 'Commercial floor buffing for shops and offices' },
    ],
    sections: [
      {
        h2: 'Turnover work: the Phagwara pattern',
        body:
          '<p>Phagwara has a large rental and hostel population, and rental property turns over on a schedule. That creates a specific kind of job: a flat or room needs to go from vacated to re-lettable in a few days, which usually means a fast repaint, a deep clean and sometimes a mattress or upholstery clean.</p>' +
          '<p>These jobs are priced differently from a full repaint because the scope is smaller. A turnover repaint is typically walls only, one or two coats, in a neutral shade — ceilings and woodwork are usually sound and skipping them cuts both cost and time. The deep clean is the full move-out standard, because landlords inspect bathrooms and kitchens first and that is where the deposit argument happens.</p>',
      },
      {
        h2: 'Commercial floors and shops',
        body:
          '<p>Along GT Road and in the town centre there is a good amount of small commercial space — shops, offices, clinics, coaching centres. Floor areas here are machine-buffed at ₹6–₹10 per sq ft, which is cheaper per square foot than residential tile cleaning because there is less furniture to work around and the surfaces are more uniform.</p>' +
          '<p>We schedule commercial work outside your opening hours, evenings or early mornings, so it does not cost you trading time. Tell us your hours when you book and we will fit around them rather than the other way round.</p>',
      },
    ],
    faqs: [
      { q: 'Can you turn a rental flat around in a few days?', a: 'Usually yes. A walls-only repaint on a 1 or 2 BHK takes two to three days including drying, and a move-out deep clean takes one day. If we can start the cleaning while the paint dries in another room, we do — tell us your deadline when you book.' },
      { q: 'Do you do commercial floor cleaning in Phagwara?', a: 'Yes, at ₹6–₹10 per sq ft for machine buffing, and we work outside your opening hours. Post-construction cleanup for a newly fitted-out shop is ₹12 per sq ft and is a different job — tell us which one you need.' },
      { q: 'Do you charge extra for Phagwara?', a: 'No, the published rates apply. As with Kapurthala, we batch the trip, so very small jobs are poor value for you and we will say so rather than take the booking.' },
      { q: 'Can you handle hostel or PG accommodation?', a: 'Yes, and it is a good fit for block booking — multiple rooms cleaned and repainted in one visit works out cheaper per room than doing them separately. Give us the room count and we will quote for the block.' },
    ],
  },
  {
    slug: 'nakodar',
    name: 'Nakodar',
    region: 'Punjab',
    title: 'Painting, Cleaning & Waterproofing in Nakodar',
    description:
      'Painting, deep cleaning and waterproofing in Nakodar and the villages around it. Agricultural and residential property, terrace waterproofing. Call +91 99147 72275.',
    h1: 'Painting, cleaning and waterproofing in Nakodar',
    lede:
      'Nakodar and the villages around it, about 25 km south of Jalandhar on the Nakodar Road. Mostly independent houses with large open terraces and a good number of farm properties, which is why exterior painting and roof waterproofing lead our work here.',
    travel: 'About 40 minutes from our base',
    facts: [
      { k: 'Distance', v: '~25 km from Jalandhar via Nakodar Road' },
      { k: 'Typical property', v: 'Independent houses, farmhouses, agricultural buildings' },
      { k: 'Common booking', v: 'Exterior painting and roof waterproofing' },
      { k: 'Note', v: 'Farm and outbuilding scopes are quoted after inspection' },
    ],
    sections: [
      {
        h2: 'Farm property and outbuildings',
        body:
          '<p>Nakodar has a lot of agricultural property alongside residential, and outbuildings — tubewell rooms, stores, cattle sheds, boundary walls — get painted far less often than the house does. They are also built to a different standard, often with exposed brick or rough plaster that takes significantly more paint per square foot than a smooth interior wall.</p>' +
          '<p>We quote these after inspection rather than at the residential per-sq-ft rate, because rough plaster absorption is the real variable and guessing it means either an inflated quote or a job that runs at a loss. Photographs of the walls are usually enough to give you a working figure before we visit.</p>',
      },
      {
        h2: 'Open terraces and monsoon exposure',
        body:
          '<p>Out here plots are larger and terraces are more exposed, with fewer neighbouring buildings to break the wind and rain. A terrace that drains properly survives the monsoon; one with a silted drain and a flat slab does not. After a few seasons, water that ponds on the roof finds its way into the top-floor ceiling.</p>' +
          '<p>If you have had a damp patch appear on an upper ceiling after a monsoon, that is the pattern to act on before the next one. The pre-monsoon window for waterproofing in Punjab is <strong>February to May</strong>, and it is worth booking the inspection early because it fills up.</p>',
      },
    ],
    faqs: [
      { q: 'Do you cover villages around Nakodar?', a: 'Generally yes within about 40 km of Jalandhar. Tell us the village name and we will confirm — for outlying locations we batch the visit so booking a little further ahead helps.' },
      { q: 'Can you quote a farm building or shed?', a: 'Yes, after inspection or from photographs. Rough plaster and exposed brick absorb much more paint than finished interior walls, so the residential per-sq-ft rate does not apply. Send photos on WhatsApp and we will give you a working range before visiting.' },
      { q: 'Is waterproofing worth it on an older roof?', a: 'Yes, and it is usually the cheapest way to protect the structure. Water entering a slab corrodes the reinforcement inside it, which is a structural problem rather than a cosmetic one. Stopping the water is far cheaper than repairing the concrete later.' },
      { q: 'How far ahead should I book before the monsoon?', a: 'For waterproofing, get the inspection done in February or March. Application slots from April onwards fill quickly and the work is weather-dependent, so a late start can push you into the rains. If you are reading this in June, book the inspection anyway — better to plan now than to deal with a leak in August.' },
    ],
  },
  {
    slug: 'hoshiarpur',
    name: 'Hoshiarpur',
    region: 'Punjab',
    title: 'Painting, Cleaning & Waterproofing in Hoshiarpur',
    description:
      'Painting, deep cleaning and waterproofing in Hoshiarpur. Higher rainfall near the Shivaliks means more damp and seepage work. Free damp inspection — +91 99147 72275.',
    h1: 'Painting, cleaning and waterproofing in Hoshiarpur',
    lede:
      'Hoshiarpur sits at the foot of the Shivaliks and gets meaningfully more rain than Jalandhar. That single fact shapes the work here: <strong>damp treatment and waterproofing are a larger share of our Hoshiarpur bookings</strong> than anywhere else we cover, and the damp season starts earlier and ends later.',
    travel: 'About 40 km, roughly an hour from our base',
    facts: [
      { k: 'Distance', v: '~40 km east of Jalandhar, towards the Shivaliks' },
      { k: 'Rainfall', v: 'Higher than Jalandhar — damp season starts earlier, ends later' },
      { k: 'Common booking', v: 'Damp and seepage treatment, terrace waterproofing' },
      { k: 'Typical property', v: 'Independent houses on sloped plots, many with basements' },
    ],
    sections: [
      {
        h2: 'Why Hoshiarpur has more damp problems',
        body:
          '<p>Hoshiarpur is closer to the hills, so it gets more monsoon rain and more of it arrives in intense spells. Two consequences follow for buildings.</p>' +
          '<p>First, walls stay wet for longer. A wall that gets soaked and then has several dry weeks recovers; one that is soaked repeatedly through a long damp season does not, and moisture works deeper into the masonry each year. The result is more rising damp, more efflorescence — the white salt powder that appears when water evaporates through a wall — and more paint failure on external elevations.</p>' +
          '<p>Second, <strong>sloped plots</strong> are common here, and that changes how water behaves. A house cut into a slope has a retaining wall or a partially below-grade face, and surface water running down the hill finds that wall. Basements and lower floors are therefore much more common here than in Jalandhar, and they need proper tanking rather than a coating.</p>',
      },
      {
        h2: 'Basements and retaining walls',
        body:
          '<p>A basement is not waterproofed the way a terrace is. It is either tanked from the outside before backfilling, or treated from the inside with crystalline systems and injection grouting — and the second is a repair, not a substitute for the first.</p>' +
          '<p>If you have a basement that gets damp in the monsoon, the useful first question is whether the water is coming through the wall or through the floor slab. Crystalline treatment suits a wall; a floor slab that is being pushed up by a rising water table needs a different answer and sometimes a sump and pump. We will tell you which one you have rather than selling you a coating. Basement and retaining wall work is quoted at ₹80–₹180 per sq ft after inspection.</p>',
      },
    ],
    faqs: [
      { q: 'Do you come out to Hoshiarpur for a site visit?', a: 'Yes, though we batch the trip so it is usually within a few days rather than same-day. Because the drive is about an hour, Hoshiarpur jobs are scheduled as full days and combining work on one property into a single visit saves you money.' },
      { q: 'Why does my Hoshiarpur wall get white powder on it?', a: 'That is efflorescence — water is moving through the wall and evaporating at the surface, leaving dissolved salts behind. It means there is an active water path, not just a stain. Brushing it off does not help; the source has to be found and stopped, then the wall dried and treated.' },
      { q: 'Can a damp basement be fixed from the inside?', a: 'Sometimes, with crystalline treatment and injection grouting, if the water is coming through the walls. If it is coming up through the floor slab from a rising water table, an internal coating will not hold it and you need drainage or a sump. We check which one it is before quoting, because the two fixes are completely different.' },
      { q: 'Is waterproofing more important here than in Jalandhar?', a: 'For most properties, yes. More rain and a longer damp season mean a failed detail that would survive a Jalandhar year can fail here in one season. If you are choosing what to prioritise, the terrace and any below-grade wall come first.' },
      { q: 'Do you cover the villages towards the hills?', a: 'Within about 40 km of Jalandhar generally. Tell us the location and we will confirm. For the further villages we batch visits, so a little extra notice helps.' },
    ],
  },
];

export const areaBySlug = Object.fromEntries(areas.map((a) => [a.slug, a]));
