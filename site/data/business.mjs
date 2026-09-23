// Single source of truth for the business identity.
// Everything else (schema, footer, contact page, lead alerts) reads from here.
//
// ─────────────────────────────────────────────────────────────────────────────
//  FIELDS LEFT EMPTY ON PURPOSE — fill these in and the UI appears automatically.
//  Nothing invented is better than a claim you cannot back up: fabricated review
//  counts and stats are the fastest way to lose a Google spam update. Each field
//  below is null, and every component that would render it is hidden while null.
// ─────────────────────────────────────────────────────────────────────────────

export const business = {
  name: 'Jalandhar Services',
  legalName: null, // e.g. 'Jalandhar Services (Prop. <name>)'
  tagline: 'Painting, cleaning, deep cleaning & waterproofing across Jalandhar',
  url: 'https://jalandharservices.in',

  phoneDisplay: '+91 99147 72275',
  phoneTel: '+919914772275',
  whatsapp: '919914772275',

  email: null, // ← e.g. 'hello@jalandharservices.in'. Row hides until set.

  // Service-area business: no street address is published, and the schema below
  // says so honestly (addressLocality only, no streetAddress, no postalCode).
  address: {
    locality: 'Jalandhar',
    region: 'Punjab',
    country: 'IN',
  },
  // Human-readable coverage line used in prose and the footer.
  coverageLine: 'Jalandhar city and surrounding areas within about 40 km',

  geo: null, // ← { lat: 31.3260, lng: 75.5762 } if you want a map pin.

  // ── Social / profiles. These become sameAs in schema, which is one of the
  //    strongest entity signals available. Leave null until the profile is real.
  social: {
    facebook: null,
    instagram: null,
    google: null, // ← Google Business Profile URL, if one is ever created
    youtube: null,
  },

  // ── Trust numbers. ALL NULL = nothing rendered. Do not guess these.
  stats: {
    projectsCompleted: null, // e.g. 420
    yearsActive: null, // e.g. 6
    repeatShare: null, // e.g. '38%' — only if you actually track it
  },

  // ── Reviews. Leave null until reviews are genuinely collected somewhere
  //    public. Self-published star ratings are against Google's structured-data
  //    policy ("self-serving reviews") and can cost you rich results entirely.
  reviews: {
    ratingValue: null, // e.g. 4.8
    reviewCount: null, // e.g. 96
    source: null, // e.g. 'Google'
    quotes: [], // ← [{ text: '...', author: '...', area: 'Model Town' }]
  },

  // ── Commercial terms shown on the quote + pricing pages.
  paymentTerms: 'No advance for jobs under ₹10,000. Above that, 30% to book materials and 70% on completion.',
  responsePromise: 'We reply to every enquiry the same day, usually within a couple of hours.',
  warranty: null, // ← e.g. '5-year written warranty on terrace waterproofing'. Hides until set.

  // ── Where lead notifications go. See hosting/README.md before filling this in.
  inbox: null, // e.g. 'hello@jalandharservices.in'
};

export const brand = {
  // Design tokens. Kept here so both the CSS build and the SVG art agree.
  colors: {
    ink: '#0C1524',
    inkSoft: '#16233A',
    paper: '#F7F6F3',
    accent: '#1F5AF6',
    accent2: '#FF7A18',
    gold: '#F5A524',
  },
  // Per-service accent, used for the service cards, page heroes and section rules.
  serviceColors: {
    painting: '#FF7A18',
    cleaning: '#12B886',
    deepCleaning: '#1F5AF6',
    waterproofing: '#0EA5B7',
  },
};

export const abs = (path) => new URL(path.replace(/^\//, ''), business.url + '/').href;
