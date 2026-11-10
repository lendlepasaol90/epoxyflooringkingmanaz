// Site-wide configuration for Epoxy Flooring Kingman AZ.
// PHONE: replace the placeholder below once the business line is live.
export const site = {
  name: 'Epoxy Flooring Kingman AZ',
  shortName: 'Epoxy Flooring Kingman',
  domain: 'https://epoxyflooringkingmanaz.com',
  city: 'Kingman',
  state: 'AZ',
  stateFull: 'Arizona',
  county: 'Mohave County',
  phone: { display: '(928) 000-0000', tel: '+19280000000', placeholder: true },
  geo: { lat: 35.1894, lng: -114.053 },
  mapQuery: 'Kingman, AZ',
  hours: 'Mon–Sat, 7am–6pm',
  ogImage: '/images/hero/high-desert-mountains-at-sunset-1200.webp',
};

export const services = [
  { slug: 'garage-floor-coatings', name: 'Garage Floor Coatings', nav: 'Garage Floor Coatings', blurb: 'Full-broadcast flake and solid systems for daily drivers, shop work and everything parked in between.', img: 'garageClassics' },
  { slug: 'residential-epoxy-flooring', name: 'Residential Epoxy Flooring', nav: 'Residential Epoxy', blurb: 'Seamless coatings for living areas, laundry rooms, casitas and converted spaces inside the home.', img: 'openRoom' },
  { slug: 'decorative-flake-flooring', name: 'Decorative Flake Flooring', nav: 'Decorative Flake', blurb: 'Vinyl chip blends that hide dust, add grip and come in palettes that suit desert homes.', img: 'flakeTan' },
  { slug: 'metallic-epoxy-flooring', name: 'Metallic Epoxy Flooring', nav: 'Metallic Epoxy', blurb: 'Hand-worked pearlescent pigments that move like polished stone or poured copper.', img: 'metalCaramel' },
  { slug: 'polyaspartic-floor-coatings', name: 'Polyaspartic Floor Coatings', nav: 'Polyaspartic Coatings', blurb: 'Fast-cure, UV-stable topcoats that hold their color in sunlit garages and doorways.', img: 'garageSuv' },
  { slug: 'polyurea-floor-coatings', name: 'Polyurea Floor Coatings', nav: 'Polyurea Coatings', blurb: 'Flexible, high-elongation base coats for slabs that move with big temperature swings.', img: 'motoShop' },
  { slug: 'patio-concrete-coatings', name: 'Patio & Concrete Coatings', nav: 'Patio & Concrete', blurb: 'Textured, sun-tolerant coatings for patios, walkways and outdoor living slabs.', img: 'patioCovered' },
  { slug: 'commercial-epoxy-flooring', name: 'Commercial Epoxy Flooring', nav: 'Commercial Epoxy', blurb: 'Durable, cleanable floors for service bays, kitchens, showrooms and offices.', img: 'shopBays' },
  { slug: 'warehouse-floor-coatings', name: 'Warehouse Floor Coatings', nav: 'Warehouse Coatings', blurb: 'Forklift-rated systems, striping and dust-proofing for distribution and storage space.', img: 'warehouseGloss' },
];

export const areas = [
  { name: 'Kingman', note: 'Downtown, the east side and the newer subdivisions off Stockton Hill Road.' },
  { name: 'Butler', note: 'Larger lots just outside city limits where detached shops and RV garages are common.' },
  { name: 'Golden Valley', note: 'Wide-open parcels in the valley west of Kingman, with plenty of workshop slabs.' },
  { name: 'Valle Vista', note: 'Golf-course homes along Route 66 northeast of Kingman.' },
  { name: 'Hualapai Mountain area', note: 'Higher-elevation cabins and homes where freeze cycles matter more.' },
  { name: 'Chloride', note: 'Historic properties and outbuildings north along US 93.' },
  { name: 'Dolan Springs', note: 'Desert homes and shops on the way toward the Lake Mead side.' },
  { name: 'Hackberry & Valentine', note: 'Ranch properties, barns and equipment sheds along old Route 66.' },
];

export const projectTypes = [
  'Garage floor coating',
  'Residential interior floor',
  'Decorative flake floor',
  'Metallic epoxy floor',
  'Polyaspartic coating',
  'Polyurea coating',
  'Patio or outdoor concrete',
  'Commercial floor',
  'Warehouse or industrial floor',
  'Not sure yet',
];
