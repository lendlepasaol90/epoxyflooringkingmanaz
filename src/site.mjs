// Site-wide configuration for Kingman Epoxy Flooring.
export const site = {
  name: 'Kingman Epoxy Flooring',
  shortName: 'Kingman Epoxy Flooring',
  owner: 'Trisha Goetz',
  category: 'Flooring Contractor',
  description: "Make your concrete floors one of the best features of your property with Kingman Epoxy Flooring. Serving Kingman, AZ, and surrounding Mohave County communities, we help homeowners and business owners replace the look of bare, stained, and aging concrete with attractive, long-lasting floor coatings. From residential garages and backyard patios to automotive shops, warehouses, and retail spaces, we offer epoxy flooring solutions tailored to how each space is used. Explore decorative flake finishes, metallic epoxy designs, solid-color coatings, and polyaspartic flooring options. Our goal is to deliver floors that look exceptional, are easier to maintain, and stand up to everyday demands. Contact Kingman Epoxy Flooring to discuss your project and request a free estimate!",
  email: 'info@epoxyflooringkingmanaz.com',
  address: { street: '2534 Hualapai Mountain Rd #163', city: 'Kingman', state: 'AZ', zip: '86401' },
  addressLine: '2534 Hualapai Mountain Rd #163, Kingman, AZ 86401',
  domain: 'https://epoxyflooringkingmanaz.com',
  city: 'Kingman',
  state: 'AZ',
  stateFull: 'Arizona',
  county: 'Mohave County',
  phone: { display: '(928) 754-8748', tel: '+19287548748', placeholder: false },
  geo: { lat: 35.1830, lng: -114.0360 },
  mapQuery: 'Kingman Epoxy Flooring, 2534 Hualapai Mountain Rd #163, Kingman, AZ 86401',
  hours: 'Mon – Sat: 7:00 AM – 6:00 PM · Sun: Closed',
  hoursTable: [['Monday – Saturday', '7:00 AM – 6:00 PM'], ['Sunday', 'Closed']],
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
