import { business } from '../data/business.mjs';
import { services } from '../data/services.mjs';
import { esc } from './layout.mjs';

// Accent per service, resolved to a CSS custom property the components read.
const accentVar = (key) => `style="--svc: var(--c-${key})"`;

const ICONS = {
  roller: '<path d="M4 6h11a2 2 0 0 1 2 2v2H4z"/><path d="M17 8h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-6"/><rect x="11" y="13" width="3" height="8" rx="1"/>',
  spray:
    '<path d="M9 8h6a2 2 0 0 1 2 2v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V10a2 2 0 0 1 2-2Z"/><path d="M10 8V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3"/><path d="M19 5h2M19 9h3M19 13h2"/>',
  sparkle:
    '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M18.5 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
  shield:
    '<path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6z"/><path d="M9 12l2 2 4-4"/>',
};

export const svgIcon = (name, size = 24) =>
  `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;

// ────────────────────────────────────────────────────────────────── hero ──

export function hero({ kicker, h1, lede, primary, secondary, facts = [], compact = false }) {
  return `
<section class="hero${compact ? ' hero-compact' : ''}">
  <div class="hero-art" aria-hidden="true">
    <div class="hero-blob b1"></div>
    <div class="hero-blob b2"></div>
    <div class="hero-blob b3"></div>
    <div class="hero-grid"></div>
  </div>
  <div class="wrap hero-inner">
    ${kicker ? `<p class="kicker reveal">${esc(kicker)}</p>` : ''}
    <h1 class="reveal" data-delay="1">${h1}</h1>
    <p class="lede reveal" data-delay="2">${lede}</p>
    <div class="hero-actions reveal" data-delay="3">
      <a class="btn btn-primary" href="${primary.href}">${esc(primary.label)}</a>
      <a class="btn btn-outline" href="${secondary.href}">${esc(secondary.label)}</a>
    </div>
    ${
      facts.length
        ? `<dl class="hero-facts reveal" data-delay="4">${facts
            .map((f) => `<div><dt>${esc(f.k)}</dt><dd>${f.v}</dd></div>`)
            .join('')}</dl>`
        : ''
    }
  </div>
</section>`;
}

// ──────────────────────────────────────────────────────────── breadcrumbs ──

export function breadcrumbs(trail) {
  return `
<nav class="crumbs" aria-label="Breadcrumb">
  <div class="wrap"><ol>${trail
    .map((t, i) =>
      i === trail.length - 1
        ? `<li aria-current="page">${esc(t.name)}</li>`
        : `<li><a href="${t.path}">${esc(t.name)}</a></li>`
    )
    .join('')}</ol></div>
</nav>`;
}

// ────────────────────────────────────────────────────────────── section ──

export function section({ id, tone = '', body, tight = false }) {
  return `<section class="section ${tone}"${id ? ` id="${id}"` : ''}${tight ? ' data-tight' : ''}>
  <div class="wrap">${body}</div>
</section>`;
}

export function sectionHead({ h2, sub, align = 'left' }) {
  return `<div class="sec-head ${align === 'center' ? 'center' : ''} reveal">
  <h2>${h2}</h2>
  ${sub ? `<p class="sec-sub">${sub}</p>` : ''}
</div>`;
}

// ────────────────────────────────────────────────────── service cards ──

export function serviceCards({ exclude = [] } = {}) {
  return `<div class="svc-grid">
  ${services
    .filter((s) => !exclude.includes(s.key))
    .map(
      (s, i) => `<a class="svc-card reveal" href="/${s.slug}.html" ${accentVar(s.key)} data-delay="${i}">
    <span class="svc-ico">${svgIcon(s.icon)}</span>
    <h3>${esc(s.shortName)}</h3>
    <p>${esc(s.lede.replace(/<[^>]+>/g, '').split('. ')[0])}.</p>
    <span class="svc-more">See rates &amp; details
      <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
    </span>
  </a>`
    )
    .join('')}
</div>`;
}

// ─────────────────────────────────────────────────────────── price table ──

export function priceTable({ caption, rows, note }) {
  return `<div class="rate-block reveal">
  ${
    caption
      ? `<div class="rate-head"><h3>Rate card</h3><p>${esc(caption)}</p></div>`
      : ''
  }
  <div class="rate-scroll">
    <table class="rate-card">
      <thead><tr><th scope="col">Item</th><th scope="col">Unit</th><th scope="col">Rate</th><th scope="col">Notes</th></tr></thead>
      <tbody>
        ${rows
          .map(
            (r) => `<tr>
          <th scope="row">${esc(r.item)}</th>
          <td data-label="Unit">${esc(r.unit)}</td>
          <td data-label="Rate" class="rate-price">${esc(r.price)}</td>
          <td data-label="Notes" class="rate-note">${esc(r.note || '—')}</td>
        </tr>`
          )
          .join('')}
      </tbody>
    </table>
  </div>
  ${note ? `<p class="rate-foot">${note}</p>` : ''}
</div>`;
}

// ────────────────────────────────────────────────────────────── steps ──

export function steps(items, title = 'How it works') {
  return `<div class="steps reveal">
  <h2 class="steps-title">${esc(title)}</h2>
  <ol class="step-list">
    ${items
      .map(
        (s, i) => `<li class="step">
      <span class="step-n" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
      <div><strong>${esc(s.t)}</strong><p>${esc(s.d)}</p></div>
    </li>`
      )
      .join('')}
  </ol>
</div>`;
}

// ───────────────────────────────────────────────────────────── include ──

export function includes(items, title = 'What’s included') {
  return `<div class="incl reveal">
  <h2>${esc(title)}</h2>
  <ul class="tick-list">
    ${items
      .map(
        (i) => `<li><svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10.5l4 4 8-9"/></svg><span>${esc(i)}</span></li>`
      )
      .join('')}
  </ul>
</div>`;
}

// ───────────────────────────────────────────────────────────────── faqs ──

export function faqs(items, title = 'Frequently asked questions') {
  return `<div class="faq-block">
  <h2 class="reveal">${esc(title)}</h2>
  <div class="faq-list">
    ${items
      .map(
        (f, i) => `<details class="faq reveal" data-delay="${i % 4}">
      <summary><span>${esc(f.q)}</span>
        <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 8l5 5 5-5" class="chev"/></svg>
      </summary>
      <div class="faq-body"><p>${f.a}</p></div>
    </details>`
      )
      .join('')}
  </div>
</div>`;
}

// ────────────────────────────────────────────────────────────────── cta ──

export function ctaBand({
  h2 = 'Get a fixed quote for your home',
  p = `Tell us what you need and where you are. We visit, measure and put a fixed written price in front of you — free, anywhere in ${business.address.locality} and around 40 km of it.`,
} = {}) {
  return `<section class="cta-band">
  <div class="wrap cta-inner reveal">
    <div>
      <h2>${esc(h2)}</h2>
      <p>${esc(p)}</p>
    </div>
    <div class="cta-actions">
      <a class="btn btn-light" href="tel:${business.phoneTel}">Call ${esc(business.phoneDisplay)}</a>
      <a class="btn btn-whatsapp" href="https://wa.me/${business.whatsapp}?text=${encodeURIComponent('Hi, I would like a quote for ')}" rel="noopener">WhatsApp us</a>
      <a class="btn btn-outline-light" href="/quote.html">Request a quote</a>
    </div>
  </div>
</section>`;
}

// ─────────────────────────────────────────────────────── journal cards ──

export function postCards(posts, limit) {
  const list = limit ? posts.slice(0, limit) : posts;
  return `<div class="post-grid">
  ${list
    .map(
      (p, i) => `<a class="post-card reveal" href="/journal/${p.slug}.html" data-delay="${i % 3}">
    <h3>${esc(p.h1)}</h3>
    <p>${esc(p.description)}</p>
    <span class="post-more">Read
      <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
    </span>
  </a>`
    )
    .join('')}
</div>`;
}

// ────────────────────────────────────────────────── prose (from data) ──

export function prose(sections, { startIndex = 0 } = {}) {
  return sections
    .map(
      (s, i) => `<div class="prose-block reveal" data-delay="${(i + startIndex) % 4}">
    <h2>${esc(s.h2)}</h2>
    ${s.body}
  </div>`
    )
    .join('');
}

// ────────────────────────────────────────────────────────── area strip ──

export function areaMarquee() {
  const names = ['Jalandhar', 'Model Town', 'Urban Estate', 'Kapurthala', 'Phagwara', 'Nakodar', 'Hoshiarpur', 'Adampur', 'Kartarpur', 'Banga', 'Phillaur', 'Sultanpur Lodhi', 'Nawanshahr', 'Goraya', 'Shahkot', 'Jamsher'];
  const row = names.map((n) => `<span>${esc(n)}</span>`).join('<i aria-hidden="true">·</i>');
  return `<div class="marquee" aria-hidden="true"><div class="marquee-track">${row}<i>·</i>${row}<i>·</i></div></div>`;
}
