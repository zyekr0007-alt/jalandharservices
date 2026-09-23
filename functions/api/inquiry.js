/**
 * POST /api/inquiry — the quote form endpoint.
 *
 * ⚠️ READ THIS BEFORE DEPLOYING
 *
 * This function has NO delivery configured by default and returns **503** when
 * it cannot deliver. That is deliberate: the quote form treats any non-2xx as a
 * failure and falls back to opening WhatsApp with the details already filled
 * in. A function that returned 200 while silently dropping the lead would lose
 * real customers. If you "fix" the 503, you break the only thing standing
 * between a customer and a lost enquiry.
 *
 * Two delivery paths, checked in this order:
 *
 * 1. EMAIL — a `send_email` binding named LEAD_EMAIL.
 *    Cloudflare Email Routing is already enabled on jalandharservices.in with
 *    zyekr0007@gmail.com as a verified destination, so this needs no external
 *    service, no bot, and no secret to paste. Add it in the dashboard:
 *      Workers & Pages → jalandharservices → Settings → Functions
 *      → Email bindings → Add → variable name `LEAD_EMAIL`,
 *        destination `zyekr0007@gmail.com`
 *    (The Pages API silently ignores send_email on PATCH, so it has to be the
 *    dashboard. Verified 2026-09-23.)
 *
 * 2. TELEGRAM — TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID environment variables.
 *    Kept as a fallback. Set them under Settings → Environment variables.
 *
 * Optional: ALLOWED_ORIGIN, defaults to https://jalandharservices.in
 */

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });

// Strip control characters so a submission cannot inject newlines into a
// message, and cap length so a huge body cannot be used to spam the inbox.
const clean = (v, max = 400) =>
  String(v == null ? '' : v)
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .trim()
    .slice(0, max);

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

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

  const rows = [
    ['Name', lead.name],
    ['Phone', lead.phone],
    ['Area', lead.area],
    ['Service', lead.service],
    ['Details', lead.details],
    ['Page', lead.page],
    ['Received', lead.submittedAt],
  ].filter(([, v]) => v);

  // ── 1. Email via the Email Routing send_email binding ──────────────────
  if (env.LEAD_EMAIL && typeof env.LEAD_EMAIL.send === 'function') {
    try {
      await env.LEAD_EMAIL.send({
        // `from` must be on a domain in this account with Email Routing on.
        from: 'leads@jalandharservices.in',
        to: 'zyekr0007@gmail.com',
        subject: `Quote request: ${lead.service || 'general'} — ${lead.name}`,
        text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
        html:
          '<h2>New quote request — jalandharservices.in</h2><table cellpadding="6">' +
          rows
            .map(
              ([k, v]) =>
                `<tr><td><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(v)}</td></tr>`
            )
            .join('') +
          '</table>',
      });
      return json({ ok: true, via: 'email' });
    } catch {
      // fall through to Telegram rather than losing the lead
    }
  }

  // ── 2. Telegram ────────────────────────────────────────────────────────
  const token = env.TELEGRAM_BOT_TOKEN;
  const chatId = env.TELEGRAM_CHAT_ID;

  if (token && chatId) {
    const text = [
      '<b>New quote request — jalandharservices.in</b>',
      '',
      ...rows.map(([k, v]) => `<b>${escapeHtml(k)}</b>  ${escapeHtml(v)}`),
    ].join('\n');

    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
      });
      if (res.ok) return json({ ok: true, via: 'telegram' });
    } catch {
      /* fall through */
    }
    return json({ ok: false, error: 'delivery failed' }, 502);
  }

  // ── Nothing configured — fail loudly so the WhatsApp fallback fires ────
  return json(
    {
      ok: false,
      error:
        'lead delivery is not configured: add a LEAD_EMAIL email binding, or TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID',
    },
    503
  );
}

export async function onRequestGet() {
  return json({ ok: false, error: 'POST only' }, 405);
}
