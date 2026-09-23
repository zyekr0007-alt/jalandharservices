/* Jalandhar Services — front-end behaviour.
   No framework, no dependencies. Everything degrades to a working page if this
   file never loads: the nav is a normal list, the FAQs are native <details>,
   and the quote form falls back to a WhatsApp deep link. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── scroll reveal ───────────────────────────────────────────────────── */
  var reveals = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ── sticky header + scroll progress ─────────────────────────────────── */
  var header = document.getElementById('siteHeader');
  var bar = document.getElementById('scrollBar');
  var ticking = false;

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle('is-stuck', y > 8);
    if (bar) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + '%';
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* ── mobile navigation ───────────────────────────────────────────────── */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    // Inside the mobile panel the Services group becomes a disclosure.
    nav.querySelectorAll('.nav-trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        if (window.innerWidth > 1080) return;
        var item = trigger.closest('.nav-item');
        var expanded = item.classList.toggle('is-expanded');
        trigger.setAttribute('aria-expanded', String(expanded));
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* ── before/after sliders ────────────────────────────────────────────── */
  // The <input type="range"> is the real control — it already handles click,
  // drag, arrow keys and assistive tech. This only mirrors its value into the
  // `--p` custom property that drives the clip-path. Nothing to go wrong.
  document.querySelectorAll('.ba').forEach(function (ba) {
    var range = ba.querySelector('.ba-range');
    if (!range) return;
    var sync = function () { ba.style.setProperty('--p', range.value + '%'); };
    range.addEventListener('input', sync);
    sync();
  });

  /* ── quote form ──────────────────────────────────────────────────────── */
  var form = document.getElementById('quoteForm');
  if (!form) return;

  var status = document.getElementById('quoteStatus');
  var submit = form.querySelector('button[type="submit"]');

  function say(msg, kind) {
    if (!status) return;
    status.textContent = msg;
    status.className = 'form-status' + (kind ? ' is-' + kind : '');
    status.hidden = false;
  }

  function collect() {
    var data = {};
    new FormData(form).forEach(function (v, k) {
      data[k] = typeof v === 'string' ? v.trim() : v;
    });
    return data;
  }

  // Build the same message for the WhatsApp fallback, so a failed POST still
  // turns into a lead rather than a dead end.
  function waLink(d) {
    var phone = form.dataset.wa;
    var lines = [
      'Hi, I would like a quote.',
      '',
      'Name: ' + (d.name || '-'),
      'Phone: ' + (d.phone || '-'),
      'Area: ' + (d.area || '-'),
      'Service: ' + (d.service || '-'),
      d.details ? 'Details: ' + d.details : ''
    ].filter(Boolean);
    return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(lines.join('\n'));
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = collect();

    if (!d.name || !d.phone) {
      say('Please add your name and phone number so we can call you back.', 'error');
      return;
    }
    // Indian mobile numbers are 10 digits, optionally with a +91 prefix.
    if (!/^(\+?91[\s-]?)?[6-9]\d{9}$/.test(d.phone.replace(/[\s-]/g, ''))) {
      say('That phone number looks incomplete — please check it.', 'error');
      return;
    }

    if (submit) { submit.disabled = true; submit.dataset.label = submit.textContent; submit.textContent = 'Sending…'; }
    say('Sending your request…');

    fetch(form.dataset.endpoint || '/api/inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.assign({}, d, {
        source: 'jalandharservices.in',
        page: location.pathname,
        submittedAt: new Date().toISOString()
      }))
    })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        say('Thank you — we have your request and will call you back today.', 'ok');
        form.reset();
      })
      .catch(function () {
        // Never lose the lead to a network error. Hand it to WhatsApp instead.
        say('We could not send that automatically. Opening WhatsApp so you can send it directly…', 'error');
        window.open(waLink(d), '_blank', 'noopener');
      })
      .finally(function () {
        if (submit) { submit.disabled = false; submit.textContent = submit.dataset.label || 'Send my request'; }
      });
  });
})();
