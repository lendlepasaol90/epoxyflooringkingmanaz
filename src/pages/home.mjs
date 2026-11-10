import { site, services, areas } from '../site.mjs';
import { head, header, footer, leadForm, businessSchema, faqSchema } from '../layout.mjs';
import { img, bg, md, paras, esc } from '../lib.mjs';

const faqs = [
  { q: 'How long does a garage floor coating take in Kingman?', a: 'Most two- and three-car garages are a one- or two-day job. Polyaspartic and polyurea systems let us grind, coat, broadcast flake and topcoat in a single day, and you can walk on the floor the next morning. Plan on waiting a few more days before parking, longer if the forecast is cold.' },
  { q: 'Will the coating peel the way a store-bought kit did?', a: 'Kit failures almost always come down to prep. Acid etching and a quick rinse leave a smooth, weak surface, and hot tires eventually lift the film. We diamond-grind the slab to open it up, repair cracks and spalls, and use a primer built to bite into the concrete. That bond is what keeps a coating down.' },
  { q: 'Does the summer heat change how you install?', a: 'Yes. Resin cure speed roughly doubles as the slab warms, so in July and August we start early, keep material out of the sun and mix smaller batches. On very hot days we adjust which products we use rather than rushing the work. Winter brings the opposite problem, and some systems need the slab above a minimum temperature before they can go down.' },
  { q: 'Is an epoxy floor slippery?', a: 'A plain high-gloss coating can be slick when wet. Flake floors are naturally textured, and on any system we can add a fine aggregate to the topcoat. For patios, ramps and entries we usually recommend a heavier texture, since monsoon rain and tracked-in water are a fact of life here.' },
  { q: 'Can you coat a floor that already has paint or an old coating on it?', a: 'Usually, but the old material has to come off or be fully sound. We test adhesion, then grind away loose or failing film. Coating over a weak layer only means the new floor fails along with it.' },
  { q: 'Do you work outside Kingman city limits?', a: 'We regularly take on projects in Butler, Golden Valley, Valle Vista, the Hualapai Mountain area, Chloride, Dolan Springs and other nearby communities. If you are farther out, send us the details and we will tell you plainly whether the trip makes sense.' },
  { q: 'What does an estimate include?', a: 'We look at the slab in person, check for moisture and existing coatings, measure the space and talk through the systems that fit how you use it. You get a written price with the scope spelled out, including prep, repairs and the exact coating layers.' },
];

export function renderHome() {
  const title = 'Epoxy Flooring Kingman AZ | Garage, Home & Commercial Coatings';
  const description = 'Epoxy, flake, metallic, polyaspartic and polyurea floor coatings in Kingman, AZ. Ground-and-sealed garage floors, patios, shops and commercial spaces. Free estimates.';
  const svcRows = services
    .map(
      (s, i) => `<li class="svc-row reveal">
        <a href="/${s.slug}/">
          <span class="svc-row__num">${String(i + 1).padStart(2, '0')}</span>
          <span class="svc-row__name">${s.name}</span>
          <span class="svc-row__blurb">${esc(s.blurb)}</span>
          <span class="svc-row__thumb">${img(s.img, { sizes: '220px', alt: '' })}</span>
          <svg class="svc-row__arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </li>`
    )
    .join('');

  const body = `
<main id="main">
  <!-- 1. HERO -->
  <section class="hero" style="--hero-bg:url('${bg('heroDesert', 2200)}')">
    <div class="hero__wash" aria-hidden="true"></div>
    <div class="wrap hero__grid">
      <div class="hero__copy">
        <p class="eyebrow reveal">Concrete coatings · Kingman &amp; Mohave County</p>
        <h1 class="reveal">Floors built for high&#8209;desert heat, wind and hard work.</h1>
        <p class="hero__lead reveal">We grind, repair and coat concrete in garages, homes, shops and commercial buildings around Kingman — with systems chosen for 100-degree summers, freezing January mornings and the dust that blows in between.</p>
        <div class="hero__actions reveal">
          <a class="btn btn--clay" href="#estimate">Book a free estimate</a>
          <a class="btn btn--line" href="#services">Explore coating systems</a>
        </div>
        <ul class="hero__facts reveal">
          <li><strong>Diamond-ground</strong> prep on every slab</li>
          <li><strong>9</strong> coating systems</li>
          <li><strong>1-day</strong> garage options</li>
        </ul>
      </div>
      <div class="hero__stack" aria-hidden="false">
        <figure class="hero__main img-reveal">${img('garageClassics', { sizes: '(max-width: 900px) 92vw, 44vw', eager: true })}</figure>
        <figure class="hero__chip img-reveal">${img('flakeTan', { sizes: '220px', alt: 'Sandstone-toned decorative flake sample' })}</figure>
        <div class="hero__note">
          <span class="hero__note-k">Sample blend</span>
          <span class="hero__note-v">“Sandstone” flake over a charcoal base</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. INTRO -->
  <section class="intro section" id="about">
    <div class="wrap intro__grid">
      <div class="intro__lead reveal">
        <p class="eyebrow">Local epoxy flooring</p>
        <h2>A coating is only as good as the concrete under it.</h2>
      </div>
      <div class="intro__body reveal">
        <p>Kingman sits a little over 3,300 feet up, which gives us a climate that is harder on concrete than most people expect. Garages bake through the summer, then drop near freezing on winter nights. Slabs expand and contract with every swing. Dust works into the pores. Hot tires come off I-40 and sit on the same patch of floor every evening. A thin roll-on paint simply does not hold up to that for long.</p>
        <p>Our work starts with the slab itself. We grind the surface with diamond tooling, fill cracks and pitted areas, check for moisture and old sealers, and only then build a coating system matched to the room. Sometimes that means a classic epoxy base with a decorative flake broadcast. Sometimes it is a polyaspartic topcoat for UV resistance at the garage door line, or a flexible polyurea base for a detached shop that sees big temperature swings.</p>
        <p>Whatever the system, the goal is the same: a floor that is easier to clean, harder to stain, and still bonded tight years from now. If you want to see what that looks like in practice, start with our <a href="/garage-floor-coatings/">garage floor coatings</a> or browse the full list of services below.</p>
      </div>
    </div>
  </section>

  <!-- 3. SERVICES INDEX -->
  <section class="services section section--sand" id="services">
    <div class="wrap">
      <div class="section-head reveal">
        <p class="eyebrow">What we install</p>
        <h2>Nine coating systems, one standard of prep.</h2>
        <p>Every service below starts with mechanical surface preparation. What changes is the chemistry, the texture and the finish on top.</p>
      </div>
      <ol class="svc-list">${svcRows}</ol>
    </div>
  </section>

  <!-- 4. WHY CHOOSE -->
  <section class="why section">
    <div class="wrap why__grid">
      <div class="why__media img-reveal">${img('grinder', { sizes: '(max-width: 900px) 92vw, 40vw' })}</div>
      <div class="why__copy">
        <p class="eyebrow reveal">Why homeowners and businesses call us</p>
        <h2 class="reveal">The work you never see is the part we care about most.</h2>
        <div class="why__items">
          <article class="why__item reveal">
            <h3>Grinding, not etching</h3>
            <p>Acid etching leaves residue and an uneven profile. Diamond grinding opens the concrete evenly and removes the weak top layer, so the primer bonds to sound material.</p>
          </article>
          <article class="why__item reveal">
            <h3>Moisture checked before we quote</h3>
            <p>Older slabs without a vapor barrier can push moisture up through a coating. We test first and, when needed, specify a moisture-tolerant primer rather than hoping for the best.</p>
          </article>
          <article class="why__item reveal">
            <h3>Products picked for the conditions</h3>
            <p>A west-facing garage with the door open all afternoon needs a different topcoat than an interior laundry room. We explain the trade-offs in plain language.</p>
          </article>
          <article class="why__item reveal">
            <h3>Clean, scheduled job sites</h3>
            <p>We use dust-collecting grinders, protect walls and doors, and give you a realistic timeline for walking, parking and moving things back in.</p>
          </article>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. GARAGE FEATURE -->
  <section class="feature section section--ivory">
    <div class="wrap feature__grid">
      <div class="feature__copy">
        <p class="eyebrow reveal">Garage epoxy flooring</p>
        <h2 class="reveal">Garages here do more than park cars.</h2>
        <div class="reveal">
          <p>Around Kingman, the garage is often a workshop, a gym, overflow storage and the spot where the side-by-side gets hosed off after a weekend on the trails. Bare concrete takes a beating from all of it. Oil soaks in, tire marks never quite scrub out, and the fine gray dust that comes off an unsealed slab ends up on everything stored nearby.</p>
          <p>A full-broadcast flake system is our most requested garage floor for good reason. The flakes hide dust and small debris between cleanings, the texture gives your shoes something to grip, and a clear polyaspartic topcoat keeps the colors from fading where afternoon sun reaches through the open door. For shops with jacks and rolling toolboxes, we can build the system thicker and add more aggregate to the top.</p>
          <p>We also handle the details that make a garage feel finished: coating the stem walls a few inches up, cleaning up the expansion joints, and feathering the transition at the driveway edge so it does not catch.</p>
        </div>
        <a class="link-arrow reveal" href="/garage-floor-coatings/">How our garage systems are built</a>
      </div>
      <div class="feature__media">
        <figure class="feature__big img-reveal">${img('garageTruck', { sizes: '(max-width: 900px) 92vw, 48vw' })}</figure>
        <figure class="feature__small img-reveal">${img('garageSuv', { sizes: '(max-width: 900px) 50vw, 22vw' })}</figure>
      </div>
    </div>
  </section>

  <!-- 6. RESIDENTIAL + DECORATIVE -->
  <section class="duo section">
    <div class="wrap">
      <div class="section-head section-head--split reveal">
        <div>
          <p class="eyebrow">Inside the home</p>
          <h2>Residential, decorative and metallic floors.</h2>
        </div>
        <p>Coatings are not just for the garage. Many of our residential projects are laundry rooms, mudrooms, casitas, converted garages and open living areas where the owner wants a seamless surface that stands up to pets, kids and boots.</p>
      </div>
      <div class="duo__grid">
        <article class="duo__card reveal">
          <figure class="img-reveal">${img('openRoom', { sizes: '(max-width: 900px) 92vw, 30vw' })}</figure>
          <h3>Residential epoxy flooring</h3>
          <p>A coated interior floor has no grout lines to scrub and nothing to trap pet hair. We can keep it simple with a solid color and satin finish, or add subtle flake for texture. Interior work uses low-odor products where possible, and we plan the schedule around how you live in the house.</p>
          <a class="link-arrow" href="/residential-epoxy-flooring/">Residential floors</a>
        </article>
        <article class="duo__card reveal">
          <figure class="img-reveal">${img('flakeTerracotta', { sizes: '(max-width: 900px) 92vw, 30vw' })}</figure>
          <h3>Decorative flake flooring</h3>
          <p>Flake blends range from tight, granite-like mixes to bold chips in desert reds and creams. Coverage can be partial for a lighter speckle or full broadcast for maximum texture and hide. We bring physical samples so you can see them in your own light.</p>
          <a class="link-arrow" href="/decorative-flake-flooring/">Flake options</a>
        </article>
        <article class="duo__card reveal">
          <figure class="img-reveal">${img('metalCaramel', { sizes: '(max-width: 900px) 92vw, 30vw' })}</figure>
          <h3>Metallic epoxy flooring</h3>
          <p>Metallic floors are worked by hand while the resin is wet, so no two look alike. Caramel and bronze tones suit the desert palette well, while silver and charcoal read more modern. They are best suited to interiors and showrooms, where direct sun is limited.</p>
          <a class="link-arrow" href="/metallic-epoxy-flooring/">Metallic finishes</a>
        </article>
      </div>
    </div>
  </section>

  <!-- 6b. BEYOND EPOXY -->
  <section class="beyond section section--ivory">
    <div class="wrap beyond__grid">
      <div class="beyond__copy">
        <p class="eyebrow reveal">Beyond standard epoxy</p>
        <h2 class="reveal">Polyaspartic, polyurea and outdoor coatings.</h2>
        <div class="reveal">
          <p>“Epoxy” has become shorthand for any coated concrete floor, but epoxy is only one ingredient. It bonds and builds thickness beautifully, yet it is not the best choice for every layer. Where sunlight, speed or flexibility matter, other chemistries do the job better.</p>
          <p><a href="/polyaspartic-floor-coatings/">Polyaspartic coatings</a> cure in hours rather than days and stay clear under UV, which makes them our go-to topcoat for garages and doorways. <a href="/polyurea-floor-coatings/">Polyurea coatings</a> stretch and recover, so they suit slabs that move — think uninsulated metal shops or older garages with a few working cracks.</p>
          <p>Outside, a <a href="/patio-concrete-coatings/">patio and concrete coating</a> has to handle direct sun, pool water and bare feet. We use textured, light-reflective systems that stay comfortable and slip-resistant, and we steer people away from slick, glossy finishes on anything that gets wet.</p>
        </div>
      </div>
      <figure class="beyond__media img-reveal">${img('patioCovered', { sizes: '(max-width: 900px) 92vw, 42vw' })}</figure>
    </div>
  </section>

  <!-- 7. COMMERCIAL & INDUSTRIAL -->
  <section class="split-band">
    <div class="split-band__media img-reveal">${img('shopBays', { sizes: '(max-width: 900px) 100vw, 50vw' })}</div>
    <div class="split-band__copy section">
      <p class="eyebrow reveal">Commercial &amp; industrial flooring</p>
      <h2 class="reveal">Floors that keep a business running.</h2>
      <div class="reveal">
        <p>Kingman’s position on the I-40 and US 93 corridor brings a steady mix of trucking, distribution, automotive and light manufacturing work. Those floors deal with forklifts, pallet jacks, hydraulic fluid, and constant foot traffic. A coating has to resist chemicals, hold striping, and come back clean with a mop or scrubber.</p>
        <p>For <a href="/commercial-epoxy-flooring/">commercial epoxy flooring</a>, we build systems for service bays, restaurant kitchens, retail floors, clinics and offices, often working nights or weekends so you stay open. <a href="/warehouse-floor-coatings/">Warehouse floor coatings</a> focus on abrasion resistance, dust-proofing and clearly marked aisles, safety zones and loading areas.</p>
        <p>Larger spaces are usually done in phases. We map the floor with you before we start so racking, equipment and traffic can move around the work.</p>
      </div>
      <dl class="stat-row reveal">
        <div><dt><span data-count="9">9</span></dt><dd>coating systems for different loads and chemicals</dd></div>
        <div><dt><span data-count="2">2</span></dt><dd>shift-friendly options: night and weekend installs</dd></div>
      </dl>
    </div>
  </section>

  <!-- 8. FULL-WIDTH CTA -->
  <section class="banner" style="--banner-bg:url('${bg('desertRoad', 2200)}')">
    <div class="banner__inner wrap">
      <p class="eyebrow eyebrow--light reveal">Free on-site estimates</p>
      <h2 class="reveal">Ready when the slab is. Let’s look at yours.</h2>
      <p class="reveal">We measure, check moisture and existing coatings, and walk you through the options in person — no pressure, no guesswork.</p>
      <div class="banner__actions reveal">
        <a class="btn btn--clay" href="#estimate">Schedule a visit</a>
        <a class="btn btn--ghost-light" href="tel:${site.phone.tel}">Call ${site.phone.display}</a>
      </div>
    </div>
  </section>

  <!-- 9. PROCESS -->
  <section class="process section section--sand" id="process">
    <div class="wrap">
      <div class="section-head reveal">
        <p class="eyebrow">Installation process</p>
        <h2>How a coated floor goes in.</h2>
        <p>Timelines vary with the system and the season, but the sequence rarely changes.</p>
      </div>
      <ol class="steps">
        <li class="step reveal"><span class="step__n">01</span><h3>Walkthrough and testing</h3><p>We measure the space, look for cracks, spalling and old coatings, and run moisture checks. You get a written scope and price.</p></li>
        <li class="step reveal"><span class="step__n">02</span><h3>Diamond grinding</h3><p>The slab is ground to an open, even profile with dust collection running the whole time. Edges are handled with smaller tools.</p></li>
        <li class="step reveal"><span class="step__n">03</span><h3>Repairs</h3><p>Cracks are chased and filled, pitted areas patched, and control joints cleaned. Repairs are ground flush so they disappear under the coating.</p></li>
        <li class="step reveal"><span class="step__n">04</span><h3>Primer and base coat</h3><p>A penetrating primer or base coat goes down to lock into the concrete. This layer does most of the bonding work.</p></li>
        <li class="step reveal"><span class="step__n">05</span><h3>Broadcast or pigment</h3><p>Flake is broadcast into the wet base, metallic pigments are worked, or a solid color is built — depending on the system you chose.</p></li>
        <li class="step reveal"><span class="step__n">06</span><h3>Topcoat and cure</h3><p>Excess flake is scraped, the floor is vacuumed, and a clear topcoat seals everything. We leave you with walk, park and cleaning instructions.</p></li>
      </ol>
      <figure class="process__strip img-reveal">${img('rolling', { sizes: '100vw' })}</figure>
    </div>
  </section>

  <!-- 10. BENEFITS -->
  <section class="benefits section">
    <div class="wrap benefits__grid">
      <div class="benefits__intro">
        <p class="eyebrow reveal">Benefits of a professional install</p>
        <h2 class="reveal">What you actually get for the investment.</h2>
        <p class="reveal">A good coating changes how a space works day to day. These are the differences our customers mention most once the floor has been in use for a while.</p>
      </div>
      <ul class="benefit-list">
        <li class="reveal"><h3>Cleanup takes minutes</h3><p>Spills sit on the surface instead of soaking in. Most messes come up with a dust mop, a squeegee or a damp pad.</p></li>
        <li class="reveal"><h3>No more concrete dust</h3><p>Unsealed slabs shed fine powder that settles on shelves and gets tracked into the house. A sealed floor stops that at the source.</p></li>
        <li class="reveal"><h3>Stain and chemical resistance</h3><p>Motor oil, brake fluid, fertilizer and pool chemicals are far less likely to leave a permanent mark.</p></li>
        <li class="reveal"><h3>A brighter room</h3><p>Lighter colors and glossy finishes bounce light around, which helps in garages and shops with only a couple of fixtures.</p></li>
        <li class="reveal"><h3>Better traction</h3><p>Flake and aggregate textures give real grip, especially where water gets tracked in during monsoon season.</p></li>
        <li class="reveal"><h3>A finished look</h3><p>A coated floor makes the whole space feel deliberate — something buyers notice when a home goes on the market.</p></li>
      </ul>
    </div>
  </section>

  <!-- 11. LOCAL CONSIDERATIONS -->
  <section class="local section section--ivory">
    <div class="wrap local__grid">
      <figure class="local__media img-reveal">${img('monsoon', { sizes: '(max-width: 900px) 92vw, 46vw' })}<figcaption>Late-summer storms bring sudden rain, wind and blowing dust.</figcaption></figure>
      <div class="local__copy">
        <p class="eyebrow reveal">Local flooring considerations</p>
        <h2 class="reveal">What the Kingman climate asks of a floor.</h2>
        <div class="local__points">
          <div class="reveal"><h3>Heat and sun</h3><p>Garage slabs regularly climb well past what an indoor floor ever sees, and standard epoxy will amber where UV hits it. That is why we usually finish garages with a UV-stable polyaspartic or aliphatic topcoat instead of leaving epoxy exposed.</p></div>
          <div class="reveal"><h3>Temperature swings</h3><p>Winter nights can drop below freezing while afternoons warm up fast. Concrete moves with those cycles, and so do cracks. Flexible base coats and properly treated joints keep the coating from telegraphing every hairline.</p></div>
          <div class="reveal"><h3>Wind, dust and monsoon rain</h3><p>Dust storms and late-summer downpours push grit and water into garages and onto patios. Textured finishes stay safer underfoot, and a sealed surface makes cleanup a hose-down instead of a scrubbing session.</p></div>
          <div class="reveal"><h3>Large lots and detached shops</h3><p>Butler and Golden Valley properties often have detached garages, RV ports and metal shops. These slabs can be big, older or poured without a vapor barrier, so testing and the right primer matter even more.</p></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 12. GALLERY -->
  <section class="gallery section" id="gallery">
    <div class="wrap">
      <div class="section-head section-head--split reveal">
        <div><p class="eyebrow">Project gallery</p><h2>Finishes, textures and spaces.</h2></div>
        <p>A look at the kinds of floors, finishes and color directions we install. Tap any image to see it larger.</p>
      </div>
      <div class="masonry" data-lightbox>
        <figure class="m-tall img-reveal">${img('metalRoom', { sizes: '(max-width: 700px) 92vw, 33vw', attrs: 'data-full' })}<figcaption>Silver metallic living space</figcaption></figure>
        <figure class="img-reveal">${img('garageSuv', { sizes: '(max-width: 700px) 92vw, 33vw', attrs: 'data-full' })}<figcaption>Coated two-car garage</figcaption></figure>
        <figure class="img-reveal">${img('flakeTan', { sizes: '(max-width: 700px) 92vw, 33vw', attrs: 'data-full' })}<figcaption>Sandstone flake blend</figcaption></figure>
        <figure class="m-wide img-reveal">${img('warehouseGloss', { sizes: '(max-width: 700px) 92vw, 66vw', attrs: 'data-full' })}<figcaption>Warehouse gloss coating</figcaption></figure>
        <figure class="img-reveal">${img('patioCovered', { sizes: '(max-width: 700px) 92vw, 33vw', attrs: 'data-full' })}<figcaption>Covered patio slab</figcaption></figure>
        <figure class="img-reveal">${img('motoShop', { sizes: '(max-width: 700px) 92vw, 33vw', attrs: 'data-full' })}<figcaption>Home motorcycle shop</figcaption></figure>
        <figure class="img-reveal">${img('factoryLines', { sizes: '(max-width: 700px) 92vw, 33vw', attrs: 'data-full' })}<figcaption>Safety striping and walkways</figcaption></figure>
      </div>
    </div>
  </section>

  <!-- 13. SERVICE AREAS -->
  <section class="areas section section--sand">
    <div class="wrap areas__grid">
      <div>
        <p class="eyebrow reveal">Service areas</p>
        <h2 class="reveal">Kingman and the communities around it.</h2>
        <p class="reveal">We are based in the Kingman area and work throughout this part of Mohave County. Distance rarely changes how we work, but it can affect scheduling on larger jobs, so let us know where the project is when you reach out.</p>
        <a class="link-arrow reveal" href="/service-areas/">See all service areas</a>
      </div>
      <ul class="area-chips">${areas.map((a) => `<li class="reveal"><strong>${a.name}</strong><span>${esc(a.note)}</span></li>`).join('')}</ul>
    </div>
  </section>

  <!-- 14. FAQ -->
  <section class="faq section" id="faq">
    <div class="wrap faq__grid">
      <div class="faq__intro">
        <p class="eyebrow reveal">Questions we hear often</p>
        <h2 class="reveal">Epoxy flooring FAQ</h2>
        <p class="reveal">Straight answers about timing, durability and what to expect. Have something else on your mind? <a href="/contact-us/">Ask us directly.</a></p>
      </div>
      <div class="accordion">${faqs.map((f, i) => `<details class="acc reveal"${i === 0 ? ' open' : ''}><summary>${esc(f.q)}</summary><div class="acc__body"><p>${md(f.a)}</p></div></details>`).join('')}</div>
    </div>
  </section>

  <!-- 15. FINAL CTA + CONTACT -->
  <section class="estimate section" id="estimate" style="--est-bg:url('${bg('desertScrub', 1600)}')">
    <div class="wrap estimate__grid">
      <div class="estimate__copy">
        <p class="eyebrow reveal">Start your project</p>
        <h2 class="reveal">Tell us about the floor.</h2>
        <p class="reveal">Send a few details and we will set up a time to see the space. Estimates are free, and you will have a written scope in hand before anything is scheduled.</p>
        <ul class="check-list reveal">
          <li>On-site measurement and moisture check</li>
          <li>Physical flake and color samples</li>
          <li>Written price with every layer listed</li>
        </ul>
        <p class="estimate__call reveal">Prefer to talk? <a href="tel:${site.phone.tel}">${site.phone.display}</a></p>
      </div>
      <div class="estimate__form reveal">${leadForm({ id: 'home-est', variant: 'card', heading: 'Request a free estimate', message: true })}</div>
    </div>
  </section>
</main>`;

  return head({
    title,
    description,
    canonical: '/',
    preload: bg('heroDesert', 2200),
    schema: [businessSchema(), faqSchema(faqs), { '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: site.domain + '/' }],
  }) + header('home') + body + footer();
}
