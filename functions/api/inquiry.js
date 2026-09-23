/**
 * POST /api/inquiry — the quote form endpoint.
 *
 * ⚠️ READ THIS BEFORE DEPLOYING
 *
 * This function has NO delivery credentials by default. When they are absent it
 * returns 503 on purpose, because the quote form is written to fall back to a
 * pre-filled WhatsApp message on any non-2xx response. A function that returned
 * 200 while silently dropping the lead would lose real customers — failing
 * loudly is the safe behaviour here.
 *
 * To switch delivery on, set these in the Cloudflare Pages project
 * (Settings → Environment variables, or `wrangler pages secret put <NAME>`):
 *
 *   TELEGRAM_BOT_TOKEN   from @BotFather
 *   TELEGRAM_CHAT_ID     the chat the leads should land in
 *
 * Optional:
 *   ALLOWED_ORIGIN       defaults to https://jalandharservices.in
 */

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });

// Strip anything that would let a submission inject newlines into the
// Telegram message, and cap length so a huge body cannot be used to spam.
const clean = (v, max = 400) =>
  String(v == null ? '' : v)
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .trim()
    .slice(0, max);

const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get('Origin') || '';
  const allowed = env.ALLOWED_ORIGIN || 'https://jalandharservices.in';
  const isLocal = /^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/.test(origin);

  if (origin && origin !== allowed && !isLocal) {
    return json({ ok: false, error: 'origin not allowed' }, 403);
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid json' }, 400);
  }

  const lead = {
    name: clean(data.name, 120),
    phone: clean(data.phone, 24),
    area: clean(data.area, 120),
    service: clean(data.service, 120),
    details: clean(data.details, 1500),
    page: clean(data.page, 200),
    submittedAt: clean(data.submittedAt, 40) || new Date().toISOString(),
  };

  if (!lead.name || !lead.phone) {
    return json({ ok: false, error: 'name and phone are required' }, 400);
  }
  if (!/^(\+?91[\s-]?)?[6-9]\d{9}$/.test(lead.phone.replace(/[\s-]/g, ''))) {
    return json({ ok: false, error: 'phone number looks invalid' }, 400);
  }

  const token = env.TELEGRAM_BOT_TOKEN;
  const chatId = env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    // Loud failure → the browser falls back to WhatsApp and the lead survives.
    return json(
      { ok: false, error: 'lead delivery is not configured on the server' },
      503
    );
  }

  const text = [
    '<b>New quote request — jalandharservices.in</b>',
    '',
    `<b>Name</b>  ${escapeHtml(lead.name)}`,
    `<b>Phone</b>  ${escapeHtml(lead.phone)}`,
    lead.area ? `<b>Area</b>  ${escapeHtml(lead.area)}` : '',
    lead.service ? `<b>Service</b>  ${escapeHtml(lead.service)}` : '',
    lead.details ? `\n<b>Details</b>\n${escapeHtml(lead.details)}` : '',
    lead.page ? `\n<i>from ${escapeHtml(lead.page)}</i>` : '',
  ]
    .filter(Boolean)
    .join('\n');

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML', disable_web_page_preview: true }),
    });
    if (!res.ok) {
      return json({ ok: false, error: 'delivery failed' }, 502);
    }
  } catch {
    return json({ ok: false, error: 'delivery failed' }, 502);
  }

  return json({ ok: true });
}

export async function onRequestGet() {
  return json({ ok: false, error: 'POST only' }, 405);
}
