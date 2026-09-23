#!/usr/bin/env node
/**
 * Generates the 1200×630 Open Graph cards into assets/img/og/.
 *
 * Run with:  node scripts/make-og.mjs
 * Then commit the PNGs — Cloudflare's builder has no Chrome, so these are
 * build inputs, not build outputs.
 *
 * The default card (og-default.png) is generated from scripts/og-card.html;
 * this script renders one card per service hub, which are the pages most
 * likely to be shared or cited by an answer engine.
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'assets/img/og');
const TMP = path.join(ROOT, '.og-tmp');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const CARDS = [
  { slug: 'painting', accent: '#FF7A18', kicker: 'Painting', h1: 'Painting services in <em>Jalandhar</em>', foot: 'Interior from ₹12/sq ft · Exterior from ₹18/sq ft' },
  { slug: 'cleaning', accent: '#12B886', kicker: 'Cleaning', h1: 'Cleaning services in <em>Jalandhar</em>', foot: 'Bathrooms from ₹890 · Kitchens from ₹2,490' },
  { slug: 'deep-cleaning', accent: '#1F5AF6', kicker: 'Deep cleaning', h1: 'Deep cleaning in <em>Jalandhar</em>', foot: '1 BHK ₹4,500 · 2 BHK ₹9,500 · 3 BHK ₹12,500' },
  { slug: 'waterproofing', accent: '#0EA5B7', kicker: 'Waterproofing', h1: 'Waterproofing in <em>Jalandhar</em>', foot: 'Terrace from ₹40/sq ft · Free damp inspection' },
];

const page = (c) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap">
<style>
  *{box-sizing:border-box;margin:0}
  body{width:1200px;height:630px;overflow:hidden;position:relative;background:#0C1524;color:#fff;
       font-family:'Plus Jakarta Sans',system-ui,sans-serif;display:flex;flex-direction:column;
       justify-content:space-between;padding:68px 76px}
  .glow{position:absolute;border-radius:50%;filter:blur(90px)}
  .g1{width:640px;height:640px;right:-200px;top:-280px;
      background:radial-gradient(circle,${c.accent}bb,transparent 70%)}
  .g2{width:420px;height:420px;left:-150px;bottom:-220px;
      background:radial-gradient(circle,rgba(31,90,246,.55),transparent 70%)}
  .grid{position:absolute;inset:0;
    background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),
                     linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);
    background-size:60px 60px;
    mask-image:radial-gradient(ellipse 85% 65% at 50% 40%,#000 25%,transparent 80%);
    -webkit-mask-image:radial-gradient(ellipse 85% 65% at 50% 40%,#000 25%,transparent 80%)}
  .row{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between}
  .brand{display:flex;align-items:center;gap:15px}
  .mark{width:52px;height:52px;border-radius:15px;box-shadow:0 10px 30px ${c.accent}66}
  .bname{font-size:25px;font-weight:800;letter-spacing:-.02em}
  .bname small{display:block;font-size:14px;font-weight:500;color:rgba(255,255,255,.6);letter-spacing:0;margin-top:2px}
  .kick{padding:9px 19px;border-radius:999px;font-size:16px;font-weight:800;letter-spacing:.1em;
        text-transform:uppercase;color:${c.accent};background:${c.accent}22;border:1px solid ${c.accent}55}
  h1{position:relative;z-index:2;font-size:76px;line-height:1.06;letter-spacing:-.04em;font-weight:800;max-width:960px}
  h1 em{font-style:normal;color:${c.accent}}
  .foot{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;
        border-top:1px solid rgba(255,255,255,.14);padding-top:24px}
  .foot span{font-size:21px;font-weight:700;color:rgba(255,255,255,.86)}
  .phone{font-size:23px;font-weight:800}
</style></head><body>
  <div class="glow g1"></div><div class="glow g2"></div><div class="grid"></div>
  <div class="row">
    <div class="brand">
      <svg class="mark" viewBox="0 0 32 32" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="bg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stop-color="${c.accent}"/><stop offset="1" stop-color="#0C1524"/></linearGradient></defs>
        <rect width="32" height="32" rx="9" fill="url(#bg)"/>
        <path d="M16 6.5 7.5 13v11.5A1.5 1.5 0 0 0 9 26h14a1.5 1.5 0 0 0 1.5-1.5V13L16 6.5Z" stroke="#fff" stroke-width="1.9" stroke-linejoin="round"/>
        <path d="M12.5 20.5c1.8-2.2 5.2-2.2 7 0" stroke="#fff" stroke-width="1.9" stroke-linecap="round"/>
      </svg>
      <div class="bname">Jalandhar Services<small>Painting · Cleaning · Waterproofing</small></div>
    </div>
    <span class="kick">${c.kicker}</span>
  </div>
  <h1>${c.h1}</h1>
  <div class="foot">
    <span>${c.foot}</span>
    <span class="phone">+91 99147 72275</span>
  </div>
</body></html>`;

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(TMP, { recursive: true });

for (const c of CARDS) {
  const html = path.join(TMP, `${c.slug}.html`);
  fs.writeFileSync(html, page(c));
  execFileSync(CHROME, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars',
    '--force-device-scale-factor=1', '--window-size=1200,630',
    '--default-background-color=0C1524', '--virtual-time-budget=4000',
    `--screenshot=${path.join(OUT, `${c.slug}.png`)}`,
    `file://${html}`,
  ], { stdio: 'ignore' });
  console.log(`  ${c.slug}.png`);
}

fs.rmSync(TMP, { recursive: true, force: true });
console.log(`\nWrote ${CARDS.length} cards to assets/img/og/`);
