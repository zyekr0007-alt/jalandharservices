import { business, abs } from '../data/business.mjs';
import { services } from '../data/services.mjs';
import { areas } from '../data/areas.mjs';

// ─────────────────────────────────────────────────────────────── utilities ──

export const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// JSON-LD must not be allowed to close its own script tag.
const jsonld = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

const dateLong = (iso) =>
  new Date(iso + 'T00:00:00Z').toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

export { dateLong };

// ────────────────────────────────────────────────────────────── schema.org ──
//
// Business node is emitted once per page with a stable @id so every other node
// can reference it rather than restate it. This is what lets an answer engine
// resolve "who provides this service" without guessing.

export function businessSchema() {
  const node = {
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': abs('/#business'),
    name: business.name,
    url: abs('/'),
    description: business.tagline,
    telephone: business.phoneTel,
    image: abs('/assets/img/og-default.png'),
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Bank transfer',
    // Service-area business: locality and region only. Publishing a street
    // address that is not a real walk-in premises is a guidelines violation.
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    areaServed: areas.map((a) => ({ '@type': 'City', name: a.name })),
    knowsAbout: [
      'Interior wall painting',
      'Exterior weatherproof painting',
      'House deep cleaning',
      'Bathroom and kitchen deep cleaning',
      'Sofa and carpet cleaning',
      'Terrace and roof waterproofing',
      'Wall seepage and damp treatment',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, url: abs('/' + s.slug + '.html') },
      })),
    },
  };
  if (business.legalName) node.legalName = business.legalName;
  if (business.email) node.email = business.email;
  if (business.geo) node.geo = { '@type': 'GeoCoordinates', latitude: business.geo.lat, longitude: business.geo.lng };
  if (business.warranty) node.slogan = business.tagline;

  const sameAs = Object.values(business.social).filter(Boolean);
  if (sameAs.length) node.sameAs = sameAs;

  // Deliberately NO aggregateRating. Self-published star ratings on your own
  // site are against Google's structured-data policy and cost rich results.
  return node;
}

export function breadcrumbSchema(trail) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: abs(t.path),
    })),
  };
}

export function faqSchema(faqs) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
    })),
  };
}

export function serviceSchema(s, areaNames) {
  return {
    '@type': 'Service',
    '@id': abs('/' + s.slug + '.html#service'),
    name: s.name,
    serviceType: s.name,
    description: s.description,
    url: abs('/' + s.slug + '.html'),
    provider: { '@id': abs('/#business') },
    areaServed: areaNames.map((n) => ({ '@type': 'City', name: n })),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: abs('/' + s.slug + '.html'),
      servicePhone: { '@type': 'ContactPoint', telephone: business.phoneTel, contactType: 'customer service' },
    },
  };
}

// ─────────────────────────────────────────────────────────────── head/nav ──

const NAV_SERVICES = services.map((s) => ({ href: '/' + s.slug + '.html', label: s.name }));

function header(current) {
  const navLink = (href, label) =>
    `<a class="nav-link${current === href ? ' is-current' : ''}" href="${href}">${esc(label)}</a>`;

  return `
<a class="skip" href="#main">Skip to content</a>
<div class="scroll-progress" aria-hidden="true"><span id="scrollBar"></span></div>
<header class="site-header" id="siteHeader">
  <div class="wrap header-inner">
    <a class="brand" href="/" aria-label="${esc(business.name)} home">
      <span class="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
          <rect width="32" height="32" rx="9" fill="url(#bg)"/>
          <path d="M16 6.5 7.5 13v11.5a1.5 1.5 0 0 0 1.5 1.5h14a1.5 1.5 0 0 0 1.5-1.5V13L16 6.5Z" stroke="#fff" stroke-width="1.9" stroke-linejoin="round"/>
          <path d="M12.5 20.5c1.8-2.2 5.2-2.2 7 0" stroke="#fff" stroke-width="1.9" stroke-linecap="round"/>
          <defs><linearGradient id="bg" x1="0" y1="0" x2="32" y2="32">
            <stop stop-color="#1F5AF6"/><stop offset="1" stop-color="#0EA5B7"/>
          </linearGradient></defs>
        </svg>
      </span>
      <span class="brand-text">
        <strong>${esc(business.name)}</strong>
        <small>Jalandhar &amp; nearby</small>
      </span>
    </a>

    <nav class="nav" id="siteNav" aria-label="Main">
      <div class="nav-item has-menu">
        <button class="nav-link nav-trigger" aria-expanded="false" aria-controls="svcMenu">
          Services
          <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="nav-menu" id="svcMenu" role="group" aria-label="Services">
          ${NAV_SERVICES.map(
            (s) => `<a href="${s.href}"><span>${esc(s.label)}</span></a>`
          ).join('\n          ')}
        </div>
      </div>
      ${navLink('/pricing.html', 'Pricing')}
      ${navLink('/our-work.html', 'Our work')}
      ${navLink('/service-areas.html', 'Areas')}
      ${navLink('/journal.html', 'Advice')}
      ${navLink('/faqs.html', 'FAQs')}
      ${navLink('/contact.html', 'Contact')}
    </nav>

    <div class="header-cta">
      <a class="btn btn-ghost btn-sm hide-sm" href="tel:${business.phoneTel}">
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>
        ${esc(business.phoneDisplay)}
      </a>
      <a class="btn btn-primary btn-sm" href="/quote.html">Get a quote</a>
      <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="siteNav" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>`;
}

function footer() {
  return `
<footer class="site-footer">
  <div class="wrap footer-grid">
    <div class="footer-col footer-brand">
      <strong class="footer-name">${esc(business.name)}</strong>
      <p>${esc(business.tagline)}. ${esc(business.coverageLine)}.</p>
      <a class="footer-phone" href="tel:${business.phoneTel}">${esc(business.phoneDisplay)}</a>
      ${business.email ? `<a class="footer-mail" href="mailto:${esc(business.email)}">${esc(business.email)}</a>` : ''}
    </div>
    <nav class="footer-col" aria-label="Services">
      <h2>Services</h2>
      <ul>${services.map((s) => `<li><a href="/${s.slug}.html">${esc(s.name)}</a></li>`).join('')}</ul>
    </nav>
    <nav class="footer-col" aria-label="Service areas">
      <h2>Areas</h2>
      <ul>${areas.map((a) => `<li><a href="/${a.slug}.html">${esc(a.name)}</a></li>`).join('')}</ul>
    </nav>
    <nav class="footer-col" aria-label="Company">
      <h2>Company</h2>
      <ul>
        <li><a href="/about.html">About us</a></li>
        <li><a href="/pricing.html">Pricing</a></li>
        <li><a href="/our-work.html">Our work</a></li>
        <li><a href="/journal.html">Advice &amp; guides</a></li>
        <li><a href="/faqs.html">FAQs</a></li>
        <li><a href="/contact.html">Contact us</a></li>
        <li><a href="/quote.html">Get a quote</a></li>
      </ul>
    </nav>
  </div>
  <div class="wrap footer-bottom">
    <p>&copy; ${new Date().getFullYear()} ${esc(business.name)}. Serving ${esc(business.coverageLine)}.</p>
    <p class="footer-meta"><a href="/privacy.html">Privacy</a> · <a href="/terms.html">Terms</a></p>
  </div>
</footer>

<div class="call-bar" aria-label="Quick contact">
  <a class="call-bar-btn call" href="tel:${business.phoneTel}">
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>
    Call now
  </a>
  <a class="call-bar-btn wa" href="https://wa.me/${business.whatsapp}?text=${encodeURIComponent('Hi, I would like a quote for ')}" rel="noopener">
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1a12 12 0 0 1-5.5-4.8c-.4-.6-.9-1.5-.9-2.4 0-.9.5-1.4.7-1.6.2-.2.4-.3.6-.3h.4c.4 0 .5 0 .7.5l.8 1.8c.1.2 0 .4-.1.5l-.4.5c-.1.1-.2.3-.1.5.4.7.9 1.3 1.5 1.8.5.4 1 .7 1.4.8.2.1.4 0 .5-.1l.6-.7c.2-.2.3-.2.5-.1l1.7.8c.2.1.4.2.4.3v.6Z"/></svg>
    WhatsApp
  </a>
</div>`;
}

// ───────────────────────────────────────────────────────────── page shell ──

/**
 * @param {object} o
 * @param {string} o.title        <title>
 * @param {string} o.description  meta description
 * @param {string} o.path         site-absolute path, e.g. '/pricing.html'
 * @param {string} o.body         page markup
 * @param {object[]} [o.schema]   extra JSON-LD nodes
 * @param {string} [o.css]        hashed stylesheet href
 * @param {string} [o.js]         hashed script href
 * @param {boolean} [o.noindex]
 * @param {string} [o.ogImage]
 */
export function renderPage(o) {
  const canonical = abs(o.path);
  const graph = [businessSchema(), ...(o.schema || [])];

  return `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(o.title)}</title>
<meta name="description" content="${esc(o.description)}">
<link rel="canonical" href="${canonical}">
${o.noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">'}
<meta name="theme-color" content="#0C1524">
<meta name="geo.region" content="IN-PB">
<meta name="geo.placename" content="Jalandhar">
<meta property="og:type" content="${o.ogType || 'website'}">
<meta property="og:site_name" content="${esc(business.name)}">
<meta property="og:title" content="${esc(o.title)}">
<meta property="og:description" content="${esc(o.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${abs(o.ogImage || '/assets/img/og-default.png')}">
<meta property="og:locale" content="en_IN">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(o.title)}">
<meta name="twitter:description" content="${esc(o.description)}">
<meta name="twitter:image" content="${abs(o.ogImage || '/assets/img/og-default.png')}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap">
<link rel="stylesheet" href="${o.css}">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/img/favicon.svg">
<link rel="sitemap" href="/sitemap.xml">
${o.preload ? `<link rel="preload" as="image" href="${o.preload}">` : ''}
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>
</head>
<body>
${header(o.path)}
<main id="main">
${o.body}
</main>
${footer()}
<script src="${o.js}" defer></script>
</body>
</html>
`;
}
