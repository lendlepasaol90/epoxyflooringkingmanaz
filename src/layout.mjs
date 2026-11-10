import { site, services, projectTypes, areas } from './site.mjs';
import { esc } from './lib.mjs';

const year = new Date().getFullYear();

export function leadForm({ id, variant = 'card', heading = '', message = false, button = 'Request my estimate' }) {
  const opts = projectTypes.map((t) => `<option value="${esc(t)}">${esc(t)}</option>`).join('');
  return `<form class="lead-form lead-form--${variant}" id="${id}" action="/api/lead" method="post" novalidate data-lead-form>
  ${heading ? `<p class="lead-form__title">${heading}</p>` : ''}
  <div class="lead-form__fields">
    <div class="field">
      <label for="${id}-name">Name</label>
      <input id="${id}-name" name="name" type="text" autocomplete="name" required minlength="2" maxlength="80" placeholder="Full name">
      <span class="field__error" aria-live="polite"></span>
    </div>
    <div class="field">
      <label for="${id}-phone">Phone</label>
      <input id="${id}-phone" name="phone" type="tel" autocomplete="tel" required inputmode="tel" placeholder="(928) 555-1234">
      <span class="field__error" aria-live="polite"></span>
    </div>
    <div class="field">
      <label for="${id}-email">Email</label>
      <input id="${id}-email" name="email" type="email" autocomplete="email" required maxlength="120" placeholder="you@email.com">
      <span class="field__error" aria-live="polite"></span>
    </div>
    <div class="field">
      <label for="${id}-type">Project type</label>
      <select id="${id}-type" name="project" required>
        <option value="">Choose one…</option>${opts}
      </select>
      <span class="field__error" aria-live="polite"></span>
    </div>
    ${message ? `<div class="field field--wide">
      <label for="${id}-msg">Project details <span class="opt">(optional)</span></label>
      <textarea id="${id}-msg" name="message" rows="4" maxlength="1500" placeholder="Approximate size, current condition, timing…"></textarea>
    </div>` : ''}
    <div class="hp" aria-hidden="true"><label for="${id}-web">Leave blank</label><input id="${id}-web" name="company_website" type="text" tabindex="-1" autocomplete="off"></div>
    <button class="btn btn--clay lead-form__submit" type="submit"><span>${button}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
  </div>
  <p class="lead-form__status" role="status" aria-live="polite"></p>
</form>`;
}

export function head({ title, description, canonical, schema = [], ogImage = site.ogImage, preload }) {
  const url = site.domain + canonical;
  return `<!doctype html>
<html lang="en-US" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#f6efe4">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${site.domain}${ogImage}">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${site.domain}${ogImage}">
<meta name="geo.region" content="US-AZ">
<meta name="geo.placename" content="${site.city}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Manrope:wght@400;500;600;700&display=swap">
${preload ? `<link rel="preload" as="image" href="${preload}">` : ''}
<link rel="stylesheet" href="/assets/css/styles.css?v=1">
${schema.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')}
</head>`;
}

export function header(current = '') {
  const svcLinks = services
    .map((s) => `<li><a href="/${s.slug}/"${current === s.slug ? ' aria-current="page"' : ''}>${s.nav}</a></li>`)
    .join('');
  const is = (p) => (current === p ? ' aria-current="page"' : '');
  return `<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header" data-header>
  <div class="nav-row wrap">
    <a class="logo" href="/" aria-label="${esc(site.name)} home">
      <span class="logo__mark" aria-hidden="true"></span>
      <span class="logo__text">Epoxy Flooring<small>Kingman, Arizona</small></span>
    </a>
    <nav class="main-nav" aria-label="Primary" data-nav>
      <ul>
        <li><a href="/"${is('home')}>Home</a></li>
        <li class="has-drop">
          <button class="drop-toggle" aria-expanded="false" aria-controls="svc-menu" data-drop>Services<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button>
          <ul class="drop" id="svc-menu">${svcLinks}</ul>
        </li>
        <li><a href="/about-us/"${is('about')}>About Us</a></li>
        <li><a href="/service-areas/"${is('areas')}>Service Areas</a></li>
        <li><a href="/contact-us/"${is('contact')}>Contact</a></li>
      </ul>
    </nav>
    <a class="phone-cta" href="tel:${site.phone.tel}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg><span>${site.phone.display}</span></a>
    <button class="menu-btn" aria-expanded="false" aria-controls="mobile-panel" data-menu><span></span><span></span><span></span><b class="sr">Menu</b></button>
  </div>
  <div class="quote-bar" data-quotebar>
    <div class="wrap quote-bar__inner">
      <button class="quote-bar__toggle" aria-expanded="false" aria-controls="hdr-form-wrap" data-quote-toggle>
        <span>Free on-site estimate</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <p class="quote-bar__label">Free on-site estimate<em>Tell us about the slab — we reply within one business day.</em></p>
      <div class="quote-bar__form" id="hdr-form-wrap">${leadForm({ id: 'hdr', variant: 'bar', button: 'Get my quote' })}</div>
    </div>
  </div>
  <div class="mobile-panel" id="mobile-panel" data-mobile-panel hidden>
    <ul>
      <li><a href="/">Home</a></li>
      <li><details><summary>Services</summary><ul>${svcLinks}</ul></details></li>
      <li><a href="/about-us/">About Us</a></li>
      <li><a href="/service-areas/">Service Areas</a></li>
      <li><a href="/contact-us/">Contact</a></li>
    </ul>
    <a class="btn btn--clay" href="tel:${site.phone.tel}">Call ${site.phone.display}</a>
  </div>
</header>`;
}

export function footer() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=11&output=embed`;
  return `<footer class="site-footer">
  <div class="strata" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
  <div class="wrap footer-grid">
    <div class="footer-brand">
      <a class="logo logo--footer" href="/"><span class="logo__mark" aria-hidden="true"></span><span class="logo__text">Epoxy Flooring<small>Kingman, Arizona</small></span></a>
      <p>Concrete coatings for garages, homes, shops and commercial floors across Kingman and the surrounding Mohave County communities.</p>
      <a class="footer-phone" href="tel:${site.phone.tel}">${site.phone.display}</a>
      <p class="footer-hours">${site.hours}</p>
    </div>
    <nav class="footer-col" aria-label="Services">
      <h2>Services</h2>
      <ul>${services.map((s) => `<li><a href="/${s.slug}/">${s.name}</a></li>`).join('')}</ul>
    </nav>
    <nav class="footer-col" aria-label="Company">
      <h2>Company</h2>
      <ul>
        <li><a href="/about-us/">About Us</a></li>
        <li><a href="/service-areas/">Service Areas</a></li>
        <li><a href="/contact-us/">Contact</a></li>
        <li><a href="/privacy-policy/">Privacy Policy</a></li>
      </ul>
      <h2 class="mt">Nearby</h2>
      <p class="footer-areas">${areas.slice(0, 6).map((a) => a.name).join(' · ')}</p>
    </nav>
    <div class="footer-map">
      <h2>Serving the Kingman area</h2>
      <div class="map-frame"><iframe title="Map of Kingman, Arizona" src="${mapSrc}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
    </div>
  </div>
  <div class="wrap footer-base">
    <p>© ${year} ${esc(site.name)}. All rights reserved.</p>
    <p><a href="/privacy-policy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></p>
  </div>
</footer>
<a class="float-call" href="tel:${site.phone.tel}" aria-label="Call ${site.phone.display}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg></a>
<script src="/assets/js/main.js?v=1" defer></script>
</body>
</html>`;
}

// ---------- Structured data ----------
export const businessId = `${site.domain}/#business`;

export function businessSchema() {
  const s = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': businessId,
    name: site.name,
    url: site.domain + '/',
    image: site.domain + site.ogImage,
    description: 'Epoxy, polyaspartic and polyurea floor coatings for garages, homes, patios, commercial spaces and warehouses in Kingman, Arizona and nearby Mohave County communities.',
    areaServed: areas.map((a) => ({ '@type': 'Place', name: `${a.name}, AZ` })),
    address: { '@type': 'PostalAddress', addressLocality: site.city, addressRegion: site.state, addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    priceRange: '$$',
    makesOffer: services.map((sv) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: sv.name, url: `${site.domain}/${sv.slug}/` } })),
  };
  if (!site.phone.placeholder) s.telephone = site.phone.tel;
  return s;
}

export function serviceSchema(svc, description) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${svc.name} in ${site.city}, ${site.state}`,
    serviceType: svc.name,
    description,
    url: `${site.domain}/${svc.slug}/`,
    provider: { '@id': businessId },
    areaServed: [{ '@type': 'City', name: `${site.city}, ${site.state}` }, { '@type': 'AdministrativeArea', name: site.county }],
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '') } })),
  };
}

export function crumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: site.domain + it.url })),
  };
}

export function crumbs(items) {
  return `<nav class="crumbs" aria-label="Breadcrumb"><ol>${items
    .map((it, i) => (i === items.length - 1 ? `<li aria-current="page">${esc(it.name)}</li>` : `<li><a href="${it.url}">${esc(it.name)}</a></li>`))
    .join('')}</ol></nav>`;
}
