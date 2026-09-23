#!/usr/bin/env node
/**
 * Post-build audit. Run after `npm run build`.
 *
 * This is deliberately a *failing* check, not a report: it exits non-zero so a
 * broken link, a duplicate H1 or malformed schema can never be deployed by
 * accident. Everything it tests is something that has actually gone wrong on a
 * live site at some point.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');

const errors = [];
const warnings = [];
const fail = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const all = walk(DIST);
const htmlFiles = all.filter((f) => f.endsWith('.html'));
const rel = (f) => '/' + path.relative(DIST, f);
// A public URL is extensionless (`/pricing`) and maps to `dist/pricing.html`.
// Resolve all three shapes so a link is only "broken" if nothing serves it.
const exists = (urlPath) => {
  const clean = urlPath.split('#')[0].split('?')[0];
  if (clean === '/') return fs.existsSync(path.join(DIST, 'index.html'));
  const direct = path.join(DIST, clean);
  if (fs.existsSync(direct) && fs.statSync(direct).isFile()) return true;
  if (fs.existsSync(direct + '.html')) return true;
  if (fs.existsSync(path.join(DIST, clean.replace(/^\//, ''), 'index.html'))) return true;
  return false;
};

const titles = new Map();
const descs = new Map();
let noindexCount = 0;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const url = rel(file);

  // ── structural basics ────────────────────────────────────────────────
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)];
  if (h1s.length !== 1) {
    if (h1s.length === 0) fail(`${url}: no <h1>`);
    else fail(`${url}: ${h1s.length} <h1> elements — must be exactly one`);
  }

  // ── meta ─────────────────────────────────────────────────────────────
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const noindex = /<meta name="robots" content="noindex/.test(html);
  if (noindex) noindexCount++;

  if (!title) fail(`${url}: no <title>`);
  if (!desc) fail(`${url}: no meta description`);
  if (!canonical) fail(`${url}: no canonical`);

  if (title) {
    if (title.length > 65) warn(`${url}: title is ${title.length} chars (>65) — will truncate in results`);
    if (!noindex) {
      if (titles.has(title)) fail(`${url}: duplicate title, also on ${titles.get(title)}`);
      else titles.set(title, url);
    }
  }
  if (desc) {
    if (desc.length > 165) warn(`${url}: description is ${desc.length} chars (>165)`);
    if (desc.length < 70) warn(`${url}: description is only ${desc.length} chars — thin for a snippet`);
    if (!noindex) {
      if (descs.has(desc)) fail(`${url}: duplicate description, also on ${descs.get(desc)}`);
      else descs.set(desc, url);
    }
  }

  // canonical must be the live absolute URL, not a relative or a .pages.dev one
  if (canonical) {
    if (!canonical.startsWith('https://jalandharservices.in')) {
      fail(`${url}: canonical is not on the production host — ${canonical}`);
    }
    // Canonicals must name the extensionless URL — Cloudflare Pages 308s the
    // `.html` form, and a canonical pointing at a redirect is not indexed.
    const want =
      'https://jalandharservices.in' +
      (url === '/index.html' ? '/' : url.replace(/\.html$/, ''));
    if (canonical !== want) fail(`${url}: canonical mismatch — expected ${want}, got ${canonical}`);
    if (/\.html$/.test(canonical)) fail(`${url}: canonical ends in .html and will 308`);
  }

  // ── no emitted URL may name a .html file ─────────────────────────────
  // This is the regression guard for the Pages clean-URL behaviour. It caught
  // a live deploy where all 32 sitemap URLs 308'd instead of returning 200.
  for (const [, href] of html.matchAll(/(?:href|content)="(https:\/\/jalandharservices\.in[^"]*\.html)"/g)) {
    fail(`${url}: emitted URL ends in .html and will 308 — ${href}`);
  }
  for (const [, href] of html.matchAll(/href="(\/[^"]*\.html)"/g)) {
    fail(`${url}: internal link ends in .html and will 308 — ${href}`);
  }

  // ── JSON-LD ──────────────────────────────────────────────────────────
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!blocks.length) fail(`${url}: no JSON-LD`);
  for (const [, body] of blocks) {
    try {
      const data = JSON.parse(body);
      const nodes = data['@graph'] || [data];
      for (const n of nodes) {
        if (!n['@type']) fail(`${url}: a JSON-LD node has no @type`);
      }
      // Self-serving review markup is a policy violation and is actively
      // penalised. It must never reappear.
      if (/aggregateRating|"@type"\s*:\s*"Review"/.test(body)) {
        fail(`${url}: self-published review markup — remove it`);
      }
    } catch (e) {
      fail(`${url}: JSON-LD does not parse — ${e.message}`);
    }
  }

  // ── links ────────────────────────────────────────────────────────────
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|#)/.test(href)) continue;
    if (href.startsWith('//')) continue;
    if (!exists(href)) fail(`${url}: broken internal link → ${href}`);
  }
  for (const [, src] of html.matchAll(/src="([^"]+)"/g)) {
    if (/^(https?:|data:)/.test(src)) continue;
    if (!exists(src)) fail(`${url}: broken asset reference → ${src}`);
  }

  // ── accessibility basics ─────────────────────────────────────────────
  for (const [tag] of html.matchAll(/<img[^>]*>/g)) {
    if (!/\balt=/.test(tag)) fail(`${url}: <img> without alt — ${tag.slice(0, 70)}`);
  }
  if (!/<html lang=/.test(html)) fail(`${url}: <html> has no lang`);
}

// ── sitemap ──────────────────────────────────────────────────────────────
const sitemapPath = path.join(DIST, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) fail('sitemap.xml missing');
else {
  const sm = fs.readFileSync(sitemapPath, 'utf8');
  const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (!locs.length) fail('sitemap.xml has no URLs');
  const noindexUrls = new Set(
    htmlFiles
      .filter((f) => /<meta name="robots" content="noindex/.test(fs.readFileSync(f, 'utf8')))
      .map(rel)
      .map((u) => 'https://jalandharservices.in' + (u === '/index.html' ? '/' : u.replace(/\.html$/, '')))
  );
  for (const loc of locs) {
    if (/\.html$/.test(loc)) fail(`sitemap.xml entry ends in .html and will 308: ${loc}`);
    if (noindexUrls.has(loc)) fail(`sitemap.xml lists a noindex page: ${loc}`);
    const p = loc.replace('https://jalandharservices.in', '') || '/';
    if (!exists(p)) fail(`sitemap.xml entry 404s: ${loc}`);
  }
  const indexed = htmlFiles.length - noindexCount;
  if (locs.length < indexed - 2) {
    warn(`sitemap has ${locs.length} URLs but ${indexed} indexable pages exist — some are missing`);
  }
}

// ── robots + headers ─────────────────────────────────────────────────────
for (const f of ['robots.txt', '_headers', 'llms.txt', '404.html']) {
  if (!fs.existsSync(path.join(DIST, f))) fail(`${f} missing from the build`);
}

// ── report ───────────────────────────────────────────────────────────────
console.log(`\nAudited ${htmlFiles.length} pages (${noindexCount} noindex).\n`);
if (warnings.length) {
  console.log(`⚠  ${warnings.length} warning(s):`);
  warnings.forEach((w) => console.log('   • ' + w));
  console.log('');
}
if (errors.length) {
  console.error(`✗ ${errors.length} error(s):`);
  errors.forEach((e) => console.error('   • ' + e));
  process.exit(1);
}
console.log('✓ All checks passed.\n');
