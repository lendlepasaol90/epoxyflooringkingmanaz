/* Epoxy Flooring Kingman AZ — site interactions */
(function () {
  'use strict';
  var doc = document.documentElement;
  doc.classList.remove('no-js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Header: scrolled state ---- */
  var header = document.querySelector('[data-header]');
  var lastY = window.scrollY;
  var onScroll = function () {
    if (!header) return;
    var y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 8);
    // collapse the desktop quote bar while scrolling down, restore on scroll up / near top
    var focusedInBar = header.querySelector('.quote-bar') && header.querySelector('.quote-bar').contains(document.activeElement);
    if (y > 420 && y > lastY + 4 && !focusedInBar) header.classList.add('is-compact');
    else if (y < lastY - 4 || y < 420) header.classList.remove('is-compact');
    lastY = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var menuBtn = document.querySelector('[data-menu]');
  var panel = document.querySelector('[data-mobile-panel]');
  if (menuBtn && panel) {
    menuBtn.addEventListener('click', function () {
      var open = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!open));
      panel.hidden = open;
    });
  }

  /* ---- Services dropdown (keyboard / touch) ---- */
  document.querySelectorAll('[data-drop]').forEach(function (btn) {
    var li = btn.closest('.has-drop');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = li.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', function (e) {
      if (!li.contains(e.target)) { li.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); }
    });
    li.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { li.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); btn.focus(); }
    });
  });

  /* ---- Header quote bar toggle (mobile) ---- */
  var qToggle = document.querySelector('[data-quote-toggle]');
  var qBar = document.querySelector('[data-quotebar]');
  if (qToggle && qBar) {
    qToggle.addEventListener('click', function () {
      var open = qBar.classList.toggle('is-open');
      qToggle.setAttribute('aria-expanded', String(open));
      if (open) { var f = qBar.querySelector('input'); if (f) f.focus(); }
    });
  }

  /* ---- Lead forms: validation + submission ---- */
  var rules = {
    name: function (v) { return v.trim().length >= 2 || 'Please enter your name.'; },
    phone: function (v) { return v.replace(/\D/g, '').length >= 10 || 'Please enter a valid phone number.'; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Please enter a valid email address.'; },
    project: function (v) { return !!v || 'Please choose a project type.'; }
  };
  function check(input) {
    var rule = rules[input.name];
    if (!rule) return true;
    var res = rule(input.value || '');
    var field = input.closest('.field');
    var err = field && field.querySelector('.field__error');
    if (res === true) { field && field.classList.remove('is-invalid'); input.removeAttribute('aria-invalid'); if (err) err.textContent = ''; return true; }
    field && field.classList.add('is-invalid'); input.setAttribute('aria-invalid', 'true'); if (err) err.textContent = res; return false;
  }
  document.querySelectorAll('[data-lead-form]').forEach(function (form) {
    var status = form.querySelector('.lead-form__status');
    form.querySelectorAll('input, select').forEach(function (el) {
      el.addEventListener('blur', function () { if (el.value) check(el); });
      el.addEventListener('input', function () { if (el.closest('.field') && el.closest('.field').classList.contains('is-invalid')) check(el); });
    });
    var phone = form.querySelector('input[name="phone"]');
    if (phone) phone.addEventListener('input', function () {
      var d = phone.value.replace(/\D/g, '').slice(0, 11);
      if (d.length === 11 && d[0] === '1') d = d.slice(1);
      if (d.length >= 7) phone.value = '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6, 10);
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true, first = null;
      form.querySelectorAll('input[name], select[name]').forEach(function (el) { if (!check(el)) { ok = false; first = first || el; } });
      if (!ok) { status.className = 'lead-form__status is-err'; status.textContent = 'Please fix the highlighted fields.'; first.focus(); return; }
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      data.page = location.pathname;
      form.classList.add('is-sending');
      status.className = 'lead-form__status'; status.textContent = 'Sending…';
      fetch(form.action, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (res) {
          form.classList.remove('is-sending');
          if (res.ok && res.j.ok) {
            form.classList.add('is-sent');
            status.className = 'lead-form__status is-ok';
            status.textContent = 'Thanks, ' + (data.name || '').split(' ')[0] + '! Your request is in. We will reach out within one business day.';
            if (window.dataLayer) window.dataLayer.push({ event: 'lead_submit', form: form.id });
          } else {
            status.className = 'lead-form__status is-err';
            status.textContent = (res.j && res.j.error) || 'Something went wrong. Please call us or try again.';
          }
        })
        .catch(function () {
          form.classList.remove('is-sending');
          status.className = 'lead-form__status is-err';
          status.textContent = 'We could not send your request. Please check your connection or call us directly.';
        });
    });
  });

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll('.reveal, .img-reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) {
      // stagger siblings
      var sibs = el.parentElement ? Array.prototype.filter.call(el.parentElement.children, function (c) { return c.classList.contains('reveal'); }) : [];
      var idx = sibs.indexOf(el);
      if (idx > 0) el.style.setProperty('--d', Math.min(idx * 0.08, 0.4) + 's');
      io.observe(el);
    });
  }

  /* ---- Subtle parallax on hero / banners ---- */
  var px = document.querySelectorAll('.hero, .banner');
  if (!reduce && px.length) {
    var ticking = false;
    var update = function () {
      px.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        var offset = (r.top + r.height / 2 - window.innerHeight / 2) * -0.12;
        el.style.setProperty('--py', offset.toFixed(1) + 'px');
      });
      ticking = false;
    };
    window.addEventListener('scroll', function () { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
    update();
  }

  /* ---- Animated counters ---- */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window && !reduce) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, end = +el.getAttribute('data-count'), t0 = null;
        var step = function (t) { t0 = t0 || t; var p = Math.min((t - t0) / 1200, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); };
        el.textContent = '0'; requestAnimationFrame(step); cio.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { cio.observe(c); });
  }

  /* ---- TOC active state ---- */
  var tocLinks = document.querySelectorAll('.toc a');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    var map = {};
    tocLinks.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var tio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { tocLinks.forEach(function (a) { a.classList.remove('is-active'); }); var a = map[en.target.id]; if (a) a.classList.add('is-active'); }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) tio.observe(s); });
  }

  /* ---- Gallery lightbox ---- */
  document.querySelectorAll('[data-lightbox] figure').forEach(function (fig) {
    fig.setAttribute('tabindex', '0');
    fig.setAttribute('role', 'button');
    var open = function () {
      var im = fig.querySelector('img');
      var big = (im.getAttribute('srcset') || '').split(',').map(function (s) { return s.trim().split(' ')[0]; }).pop() || im.src;
      var box = document.createElement('div');
      box.className = 'lightbox';
      box.setAttribute('role', 'dialog');
      box.setAttribute('aria-label', im.alt);
      box.innerHTML = '<img src="' + big + '" alt="' + im.alt.replace(/"/g, '&quot;') + '"><button type="button" aria-label="Close">×</button>';
      document.body.appendChild(box);
      requestAnimationFrame(function () { box.classList.add('is-open'); });
      var close = function () { box.remove(); document.removeEventListener('keydown', esc); fig.focus(); };
      var esc = function (e) { if (e.key === 'Escape') close(); };
      box.addEventListener('click', function (e) { if (e.target === box || e.target.tagName === 'BUTTON') close(); });
      document.addEventListener('keydown', esc);
      box.querySelector('button').focus();
    };
    fig.addEventListener('click', open);
    fig.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
})();
