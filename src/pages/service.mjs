import { site, services } from '../site.mjs';
import { head, header, footer, leadForm, businessSchema, serviceSchema, faqSchema, crumbSchema, crumbs } from '../layout.mjs';
import { img, bg, md, paras, esc } from '../lib.mjs';

// Content shape (see src/content/services/*.mjs):
// { slug, title, description, h1, eyebrow, lead, heroImg, sideImg, localImg,
//   intro: [p], benefits: {h2, lead, items:[{h,p}]}, applications: {h2, items:[str]},
//   finishes: {h2, lead, items:[{h,p}]}, process: {h2, lead, steps:[{h,p}]},
//   pro: {h2, paras:[p]}, local: {h2, paras:[p]}, faqs:[{q,a}], related:[slug] }

export function renderService(c) {
  const svc = services.find((s) => s.slug === c.slug);
  const url = `/${c.slug}/`;
  const trail = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/#services' },
    { name: svc.name, url },
  ];
  const toc = [
    ['overview', 'Overview'],
    ['benefits', 'Benefits'],
    ['finishes', 'Finishes & options'],
    ['process', 'Installation'],
    ['local', 'Local considerations'],
    ['faq', 'FAQ'],
  ];
  const related = c.related.map((slug) => services.find((s) => s.slug === slug));

  const body = `
<main id="main" class="svc">
  <section class="svc-hero">
    <div class="svc-hero__bg" style="--svc-bg:url('${bg(c.heroImg, 1600)}')" aria-hidden="true"></div>
    <div class="wrap svc-hero__grid">
      <div class="svc-hero__copy">
        ${crumbs(trail)}
        <p class="eyebrow reveal">${esc(c.eyebrow)}</p>
        <h1 class="reveal">${esc(c.h1)}</h1>
        <p class="svc-hero__lead reveal">${md(c.lead)}</p>
        <div class="hero__actions reveal">
          <a class="btn btn--clay" href="#svc-quote">Get a free estimate</a>
          <a class="btn btn--line" href="tel:${site.phone.tel}">${site.phone.display}</a>
        </div>
      </div>
      <figure class="svc-hero__frame img-reveal">${img(c.heroImg, { sizes: '(max-width: 900px) 92vw, 46vw', eager: true })}</figure>
    </div>
  </section>

  <div class="wrap svc-layout">
    <aside class="svc-aside">
      <nav class="toc" aria-label="On this page">
        <p class="toc__title">On this page</p>
        <ol>${toc.map(([id, label]) => `<li><a href="#${id}">${label}</a></li>`).join('')}</ol>
      </nav>
      <div class="aside-quote" id="svc-quote">${leadForm({ id: 'svc-' + c.slug.split('-')[0], variant: 'card', heading: 'Free estimate', button: 'Send request' })}</div>
    </aside>

    <article class="svc-body">
      <section id="overview" class="svc-sec">
        <h2 class="reveal">${esc(c.overviewH2)}</h2>
        <div class="prose reveal">${paras(c.intro)}</div>
        ${c.sideImg ? `<figure class="svc-figure img-reveal">${img(c.sideImg, { sizes: '(max-width: 900px) 92vw, 60vw' })}<figcaption>${esc(c.sideCaption || '')}</figcaption></figure>` : ''}
      </section>

      <section id="benefits" class="svc-sec">
        <h2 class="reveal">${esc(c.benefits.h2)}</h2>
        ${c.benefits.lead ? `<p class="sec-lead reveal">${md(c.benefits.lead)}</p>` : ''}
        <div class="benefit-cards">${c.benefits.items.map((b, i) => `<div class="b-card reveal"><span class="b-card__n">${String(i + 1).padStart(2, '0')}</span><h3>${esc(b.h)}</h3><p>${md(b.p)}</p></div>`).join('')}</div>
        ${c.applications ? `<div class="apps reveal"><h3>${esc(c.applications.h2)}</h3><ul>${c.applications.items.map((a) => `<li>${md(a)}</li>`).join('')}</ul></div>` : ''}
      </section>

      <section id="finishes" class="svc-sec">
        <h2 class="reveal">${esc(c.finishes.h2)}</h2>
        ${c.finishes.lead ? `<p class="sec-lead reveal">${md(c.finishes.lead)}</p>` : ''}
        <div class="finish-grid">${c.finishes.items.map((f) => `<div class="finish reveal"><h3>${esc(f.h)}</h3><p>${md(f.p)}</p></div>`).join('')}</div>
      </section>

      <section id="process" class="svc-sec">
        <h2 class="reveal">${esc(c.process.h2)}</h2>
        ${c.process.lead ? `<p class="sec-lead reveal">${md(c.process.lead)}</p>` : ''}
        <ol class="timeline">${c.process.steps.map((s, i) => `<li class="reveal"><span class="timeline__dot">${i + 1}</span><div><h3>${esc(s.h)}</h3><p>${md(s.p)}</p></div></li>`).join('')}</ol>
      </section>

      <section class="svc-sec svc-pro">
        <h2 class="reveal">${esc(c.pro.h2)}</h2>
        <div class="prose reveal">${paras(c.pro.paras)}</div>
      </section>

      ${(c.extra || [])
        .map((x) => `<section class="svc-sec svc-extra"><h2 class="reveal">${esc(x.h2)}</h2><div class="prose reveal">${paras(x.paras)}</div>${x.list ? `<ul class="tick-list reveal">${x.list.map((l) => `<li>${md(l)}</li>`).join('')}</ul>` : ''}</section>`)
        .join('')}

      <section id="local" class="svc-sec svc-local">
        <div class="svc-local__grid">
          <div>
            <h2 class="reveal">${esc(c.local.h2)}</h2>
            <div class="prose reveal">${paras(c.local.paras)}</div>
          </div>
          <figure class="img-reveal">${img(c.localImg, { sizes: '(max-width: 900px) 92vw, 30vw' })}</figure>
        </div>
      </section>

      <section id="faq" class="svc-sec">
        <h2 class="reveal">${esc(c.faqH2 || 'Frequently asked questions')}</h2>
        <div class="accordion">${c.faqs.map((f, i) => `<details class="acc reveal"${i === 0 ? ' open' : ''}><summary>${esc(f.q)}</summary><div class="acc__body"><p>${md(f.a)}</p></div></details>`).join('')}</div>
      </section>
    </article>
  </div>

  <section class="related section section--sand">
    <div class="wrap">
      <div class="section-head reveal"><p class="eyebrow">Related services</p><h2>Other systems worth comparing</h2></div>
      <div class="related__grid">${related
        .map((r) => `<a class="rel-card reveal" href="/${r.slug}/"><figure>${img(r.img, { sizes: '(max-width: 700px) 92vw, 30vw', alt: '' })}</figure><h3>${r.name}</h3><p>${esc(r.blurb)}</p><span class="link-arrow">Learn more</span></a>`)
        .join('')}</div>
    </div>
  </section>

  <section class="banner banner--compact" style="--banner-bg:url('${bg(c.ctaImg || 'desertRoad', 2200)}')">
    <div class="banner__inner wrap">
      <h2 class="reveal">${esc(c.ctaH2)}</h2>
      <p class="reveal">${md(c.ctaP)}</p>
      <div class="banner__actions reveal"><a class="btn btn--clay" href="/contact-us/">Request an estimate</a><a class="btn btn--ghost-light" href="tel:${site.phone.tel}">Call ${site.phone.display}</a></div>
    </div>
  </section>
</main>`;

  return head({
    title: c.title,
    description: c.description,
    canonical: url,
    preload: undefined,
    ogImage: `${(img(c.heroImg).match(/src="([^"]+)"/) || [])[1]}`,
    schema: [businessSchema(), serviceSchema(svc, c.description), faqSchema(c.faqs), crumbSchema(trail.filter((t) => !t.url.includes('#')))],
  }) + header(c.slug) + body + footer();
}
