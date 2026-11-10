import { site, services, areas } from '../site.mjs';
import { head, header, footer, leadForm, businessSchema, crumbs, crumbSchema } from '../layout.mjs';
import { img, bg, md, paras, esc } from '../lib.mjs';

function pageHero({ eyebrow, h1, lead, image, trail }) {
  return `<section class="page-hero" style="--page-bg:url('${bg(image, 1600)}')">
    <div class="wrap">
      ${crumbs(trail)}
      <p class="eyebrow reveal">${eyebrow}</p>
      <h1 class="reveal">${h1}</h1>
      <p class="page-hero__lead reveal">${lead}</p>
    </div>
  </section>`;
}

// ---------------- ABOUT ----------------
export function renderAbout() {
  const trail = [{ name: 'Home', url: '/' }, { name: 'About Us', url: '/about-us/' }];
  const body = `<main id="main">
  ${pageHero({ eyebrow: 'About us', h1: 'Concrete coating, done the slow way where it counts.', lead: 'We are a Kingman-area flooring crew focused on one thing: coated concrete floors that stay bonded and look right for years.', image: 'grinder', trail })}
  <section class="section">
    <div class="wrap about__grid">
      <div class="prose">
        <h2 class="reveal">How we think about floors</h2>
        <p class="reveal">Every coated floor is a stack of decisions. How deep to grind. Whether a crack is stable or still moving. Which primer to use on a slab that tested a little damp. How thick to build the base so it survives a floor jack. None of those decisions are visible once the topcoat goes on, which is exactly why they are easy to skip and why we take our time with them.</p>
        <p class="reveal">Our customers range from homeowners with a single-car garage to shop owners and facility managers with thousands of square feet. The scale changes, but the approach does not. We look at the concrete first, explain what we see, and recommend a system that fits the way the space is used — not just the system that is easiest to sell.</p>
        <h2 class="reveal">What you can expect from us</h2>
        <ul class="tick-list reveal">
          <li>A real on-site visit before any price is given, including moisture and adhesion checks where needed.</li>
          <li>A written scope that lists the prep, repairs and every coating layer, so you can compare quotes fairly.</li>
          <li>Diamond grinding with dust collection instead of acid etching.</li>
          <li>Honest advice when a different product — or no coating at all — is the better answer.</li>
          <li>A clean job site, a clear schedule and straightforward care instructions when we leave.</li>
        </ul>
        <h2 class="reveal">Built around high-desert conditions</h2>
        <p class="reveal">Working in and around Kingman has shaped how we choose materials. Intense sun means UV-stable topcoats on anything that sees daylight. Temperature swings mean paying attention to joints and flexible base coats in uninsulated buildings. Wind and dust mean colors and textures that look clean between sweeps. These are not theoretical concerns; they are the reasons coatings fail here, and planning for them is most of the job.</p>
        <p class="reveal">If you want to understand the options before talking to anyone, the service pages are a good place to start. Each one covers how the system works, where it fits, and what to ask any installer you are considering — including us.</p>
      </div>
      <aside class="about__aside">
        <figure class="img-reveal">${img('crewMetallic', { sizes: '(max-width: 900px) 92vw, 36vw' })}</figure>
        <div class="about__card reveal">
          <h3>Services</h3>
          <ul>${services.map((s) => `<li><a href="/${s.slug}/">${s.name}</a></li>`).join('')}</ul>
        </div>
      </aside>
    </div>
  </section>
  <section class="banner banner--compact" style="--banner-bg:url('${bg('heroDesert', 2200)}')">
    <div class="banner__inner wrap"><h2 class="reveal">Let’s look at your floor together.</h2><p class="reveal">Free estimates in Kingman and nearby Mohave County communities.</p><div class="banner__actions reveal"><a class="btn btn--clay" href="/contact-us/">Request an estimate</a></div></div>
  </section>
</main>`;
  return head({ title: 'About Us | Epoxy Flooring Kingman AZ', description: 'Meet the Kingman-area concrete coating crew behind Epoxy Flooring Kingman AZ — diamond-ground prep, honest recommendations and coatings chosen for high-desert conditions.', canonical: '/about-us/', schema: [businessSchema(), crumbSchema(trail)] }) + header('about') + body + footer();
}

// ---------------- SERVICE AREAS ----------------
const areaCopy = {
  Kingman: 'Most of our work is right here in town, from older homes near downtown to newer neighborhoods along Stockton Hill Road and the north side. Kingman garages range from tidy single-car spaces to oversized bays built for trucks and toys, and many commercial floors sit along Andy Devine Avenue, Beverly Avenue and the industrial areas near the airport.',
  Butler: 'Just outside city limits, Butler properties tend to have bigger lots, detached workshops and RV garages. Those slabs are often large and sometimes older, so moisture testing and a heavier-duty system are common recommendations. Many owners pair a coated shop floor with a separate flake system in the attached garage.',
  'Golden Valley': 'Golden Valley’s open parcels and long driveways bring a lot of wind-blown dust into garages and shops. Textured, mid-tone flake floors are popular here because they hide grit and stay grippy. We also coat a fair number of steel-building slabs where flexible polyurea base coats make sense.',
  'Valle Vista': 'Homes around the Valle Vista golf course often have extended garages for golf carts as well as vehicles. Clean, light flake blends and polyaspartic topcoats keep those floors bright and resistant to tire marks, and covered patios are frequent add-on projects.',
  'Hualapai Mountain area': 'At higher elevation, cooler nights and occasional snow mean freeze-thaw cycles matter more for patios, entries and garage aprons. We pay extra attention to drainage, joints and cure temperatures on projects up the mountain.',
  Chloride: 'North along US 93, Chloride has historic homes, shops and outbuildings with character — and slabs with a long history. Older concrete may carry old paint or sealers that need to be ground off before a new system can bond.',
  'Dolan Springs': 'Properties around Dolan Springs often combine a home with a detached garage or workshop. We coordinate travel and scheduling so larger projects can be completed efficiently.',
  'Hackberry & Valentine': 'Along old Route 66, ranch properties often have equipment sheds, barns and shop floors that see heavy use. Sealers and dust-proofing are sometimes a better fit than full coatings for these spaces, and we will help you choose.',
};

export function renderAreas() {
  const trail = [{ name: 'Home', url: '/' }, { name: 'Service Areas', url: '/service-areas/' }];
  const body = `<main id="main">
  ${pageHero({ eyebrow: 'Service areas', h1: 'Coating floors across Kingman and northern Mohave County.', lead: 'Our crews work throughout the Kingman area and surrounding communities. If you are not sure whether we reach your property, just ask.', image: 'desertScrub', trail })}
  <section class="section">
    <div class="wrap">
      <div class="area-cards">
        ${areas.map((a) => `<article class="area-card reveal"><h2>${a.name}</h2><p>${esc(areaCopy[a.name] || a.note)}</p></article>`).join('')}
      </div>
      <div class="prose areas__more reveal">
        <h2>Outside these communities?</h2>
        <p>We occasionally take on projects farther afield, especially larger garages, shops and commercial floors where the travel is worthwhile. Send us the location and a short description of the project. We will tell you plainly whether we can schedule it and what that might look like.</p>
        <p>Every service we offer is available throughout our area, including <a href="/garage-floor-coatings/">garage floor coatings</a>, <a href="/decorative-flake-flooring/">decorative flake floors</a>, <a href="/patio-concrete-coatings/">patio coatings</a> and <a href="/commercial-epoxy-flooring/">commercial flooring</a>.</p>
      </div>
    </div>
  </section>
  <section class="section section--sand">
    <div class="wrap map-band">
      <div class="map-band__copy"><h2 class="reveal">Centered on Kingman</h2><p class="reveal">We schedule projects across the surrounding valleys and foothills. Use the map to get a sense of the area we cover.</p><a class="btn btn--clay reveal" href="/contact-us/">Check availability</a></div>
      <div class="map-frame map-frame--lg"><iframe title="Map of the Kingman, Arizona service area" src="https://www.google.com/maps?q=${encodeURIComponent('Kingman, AZ')}&z=10&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </div>
  </section>
</main>`;
  return head({ title: 'Service Areas | Epoxy Flooring Kingman AZ', description: 'Epoxy and concrete coating services in Kingman, Butler, Golden Valley, Valle Vista, the Hualapai Mountain area, Chloride, Dolan Springs and nearby communities.', canonical: '/service-areas/', schema: [businessSchema(), crumbSchema(trail)] }) + header('areas') + body + footer();
}

// ---------------- CONTACT ----------------
export function renderContact() {
  const trail = [{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact-us/' }];
  const body = `<main id="main">
  ${pageHero({ eyebrow: 'Contact', h1: 'Request a free floor estimate.', lead: 'Tell us a bit about the space and we will be in touch within one business day to set up a visit.', image: 'garageBright', trail })}
  <section class="section">
    <div class="wrap contact__grid">
      <div class="contact__form reveal">${leadForm({ id: 'contact', variant: 'card', heading: 'Project details', message: true, button: 'Send my request' })}</div>
      <div class="contact__info">
        <div class="info-card reveal">
          <h2>Talk to us</h2>
          <p class="info-card__big"><a href="tel:${site.phone.tel}">${site.phone.display}</a></p>
          <p>${site.hours}</p>
          <p>Serving Kingman and nearby Mohave County communities.</p>
        </div>
        <div class="info-card reveal">
          <h2>What happens next</h2>
          <ol class="mini-steps">
            <li><strong>We call or email</strong> to confirm details and pick a time.</li>
            <li><strong>On-site visit</strong> to measure, test and show samples.</li>
            <li><strong>Written estimate</strong> with every layer and repair listed.</li>
            <li><strong>Scheduling</strong> around your calendar and the forecast.</li>
          </ol>
        </div>
        <div class="info-card reveal">
          <h2>Helpful to include</h2>
          <p>Approximate square footage, how the space is used, any cracks or old coatings, and photos if you have them. We will ask for pictures by email after you submit.</p>
        </div>
      </div>
    </div>
  </section>
</main>`;
  return head({ title: 'Contact Us | Free Estimate | Epoxy Flooring Kingman AZ', description: 'Request a free on-site estimate for garage, residential, patio, commercial or warehouse floor coatings in Kingman, AZ. We respond within one business day.', canonical: '/contact-us/', schema: [businessSchema(), crumbSchema(trail)] }) + header('contact') + body + footer();
}

// ---------------- PRIVACY ----------------
export function renderPrivacy() {
  const trail = [{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy-policy/' }];
  const body = `<main id="main">
  <section class="section page-plain">
    <div class="wrap prose prose--narrow">
      ${crumbs(trail)}
      <h1>Privacy Policy</h1>
      <p>This policy explains how ${esc(site.name)} handles information submitted through this website.</p>
      <h2>Information we collect</h2>
      <p>When you submit an estimate request, we collect the details you provide: your name, phone number, email address, project type and any message. We also receive basic technical information such as the page you submitted from.</p>
      <h2>How we use it</h2>
      <p>We use your information only to respond to your request, schedule an estimate and communicate about your project. We do not sell or rent your personal information.</p>
      <h2>Third-party services</h2>
      <p>This site uses Google Maps embeds and Google Fonts, which may collect usage data under Google’s own privacy policy. Form submissions are processed through our hosting provider.</p>
      <h2>Contact</h2>
      <p>To ask about or remove your information, call ${site.phone.display} or use our <a href="/contact-us/">contact page</a>.</p>
    </div>
  </section>
</main>`;
  return head({ title: 'Privacy Policy | Epoxy Flooring Kingman AZ', description: 'How Epoxy Flooring Kingman AZ collects and uses information submitted through this website.', canonical: '/privacy-policy/', schema: [] }) + header('privacy') + body + footer();
}

// ---------------- 404 ----------------
export function render404() {
  const body = `<main id="main">
  <section class="section page-plain notfound">
    <div class="wrap">
      <p class="eyebrow">404</p>
      <h1>That page took a wrong turn off Route 66.</h1>
      <p>The page you are looking for does not exist or has moved. Try one of these instead:</p>
      <ul class="notfound__links">
        <li><a href="/">Home</a></li>
        <li><a href="/garage-floor-coatings/">Garage floor coatings</a></li>
        <li><a href="/contact-us/">Request an estimate</a></li>
      </ul>
    </div>
  </section>
</main>`;
  return head({ title: 'Page not found | Epoxy Flooring Kingman AZ', description: 'The requested page could not be found.', canonical: '/404.html', schema: [] }).replace('index, follow', 'noindex') + header('') + body + footer();
}
