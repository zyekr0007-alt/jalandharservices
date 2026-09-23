/**
 * Runs in front of every request.
 *
 * One job: 301 www → apex.
 *
 * The canonical host for this site is https://jalandharservices.in (every page's
 * <link rel="canonical"> and the sitemap say so). If www is also served by the
 * Pages project it would return the same HTML on a second hostname, and Google
 * would have to guess which one is real. A permanent redirect settles it, which
 * is what the apex canonical already implies.
 *
 * The reverse (apex → www) would work too; what matters is that exactly one of
 * them serves content. This matches the canonical that is already built.
 */

const CANONICAL_HOST = 'jalandharservices.in';

export function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();

  // Leave the pages.dev preview hostname alone — it is useful for testing a
  // deployment before DNS is switched over.
  if (host === 'www.' + CANONICAL_HOST) {
    url.hostname = CANONICAL_HOST;
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
