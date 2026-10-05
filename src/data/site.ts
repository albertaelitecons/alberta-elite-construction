export const site = {
  name: 'Alberta Elite Construction',
  tagline: 'Built to Last, Crafted to Impress',
  title: 'Alberta Elite Construction - Home Remodeling Calgary',
  description:
    'Calgary construction company for garage development, basement development, legal suites, decks, and fences. Licensed general contractor serving Calgary and surrounding areas.',
  url: 'https://albertaec.ca',
  phone: '+1 (587) 332-2255',
  phoneDisplay: '(587) 332-2255',
  phoneHref: 'tel:+15873322255',
  email: 'Sales@albertaec.ca',
  geo: {
    latitude: 51.0126481,
    longitude: -113.9833733,
  },
  address: {
    street: '3536 46 Ave SE',
    city: 'Calgary',
    region: 'AB',
    postal: 'T2B 3J2',
    country: 'CA',
    full: '3536 46 Ave SE, Calgary, AB, T2B 3J2',
  },
  mapUrl: 'https://maps.app.goo.gl/heADdaJM12KuJB7BA',
  reviewsUrl: 'https://maps.app.goo.gl/vVMoMr2XrGZu9CNM6',
  /** Google Business Profile map embed used for every on-site Google Maps iframe. */
  mapEmbedBusiness:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1778.050887453656!2d-113.9833733!3d51.01264809999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2688c2b9fb67b215%3A0x323243fec9bc18a0!2sAlberta%20Elite%20Construction%20-%20Home%20Remodeling%20Calgary!5e1!3m2!1sen!2s!4v1791220119443!5m2!1sen!2s',
  serviceAreas:
    'Calgary, Airdrie, Black Diamond, Chestermere, Cochrane, Crossfield, Foothills County, High River, Langdon, Okotoks, Rocky View County, Strathmore, Turner Valley.',
  serviceRadiusMiles: 20,
  nearbyLocations: [
    'Southeast Calgary',
    'Southwest Calgary',
    'Northeast Calgary',
    'Northwest Calgary',
    'Downtown Calgary',
    'Chestermere',
    'Langdon',
    'Rocky View County',
    'Conrich',
    'Indus',
    'Shepard',
    'De Winton',
  ],
  hours: {
    display: '6:00 AM - 11:00 PM',
    opens: '06:00',
    closes: '23:00',
  },
  keywords: [
    'Basement development',
    'basement renovation contractor',
    'bathroom remodeling',
    'Construction company',
    'General contractor',
    'home remodeling contractors',
    'kitchen remodeling',
    'Calgary renovation',
    'garage development Calgary',
    'legal suite Calgary',
    'deck installation Calgary',
    'fence installation Calgary',
    'roof repair Calgary',
    'video surveillance installation Calgary',
  ],
} as const;

export const serviceLinks = [
  {
    href: '/construction-company-in-calgary/',
    label: 'Construction Company',
    desc: 'Residential construction in Calgary: garages, basements, suites, decks, fences, and remodels.',
  },
  {
    href: '/garage-developments-in-calgary/',
    label: 'Garage Development',
    desc: 'Custom detached garages, packages, and full-service builds.',
  },
  {
    href: '/basement-development-in-calgary/',
    label: 'Basement Development',
    desc: 'Basement finishing, permits, framing, and complete development.',
  },
  {
    href: '/basement-renovation-contractor-in-calgary/',
    label: 'Basement Renovation Contractor',
    desc: 'Renovations for finished basements: new layouts, bathrooms, egress windows, and permit fixes.',
  },
  {
    href: '/legal-suite-in-calgary/',
    label: 'Legal Suites',
    desc: 'Code-compliant basement and garage secondary suites in Calgary.',
  },
  {
    href: '/deck-installation-in-calgary/',
    label: 'Deck Installation',
    desc: 'Wood, cedar, and composite decks built for Calgary weather.',
  },
  {
    href: '/fence-installation-in-calgary/',
    label: 'Fence Installation',
    desc: 'Wood, PVC, chain link, and wildlife fencing.',
  },
  {
    href: '/kitchen-remodeling-in-calgary/',
    label: 'Kitchen Remodeling',
    desc: 'Custom cabinetry, islands, stone surfaces, and full kitchen renovations.',
  },
  {
    href: '/bathroom-remodeling-in-calgary/',
    label: 'Bathroom Remodeling',
    desc: 'Ensuite upgrades, tile, fixtures, and waterproof assemblies.',
  },
  {
    href: '/home-remodeling-in-calgary/',
    label: 'Home Remodeling',
    desc: 'Whole-home renovations, open concepts, and finish carpentry.',
  },
  {
    href: '/video-surveillance-installation-in-calgary/',
    label: 'Video Surveillance Installation',
    desc: 'Security camera systems planned and installed for Calgary homes.',
  },
  {
    href: '/roof-repair-in-calgary/',
    label: 'Roof Repair',
    desc: 'Leak repair, shingles, and flashing work built for Alberta weather.',
  },
] as const;

export const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/locations/', label: 'Locations' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
] as const;

export const blogCategories = [
  { slug: 'garage-development', href: '/blog/garage-development/', label: 'Garage Development' },
  { slug: 'basement-development', href: '/blog/basement-development/', label: 'Basement Development' },
  { slug: 'legal-suites', href: '/blog/legal-suites/', label: 'Legal Suites' },
  { slug: 'deck-installation', href: '/blog/deck-installation/', label: 'Deck Installation' },
  { slug: 'fence-installation', href: '/blog/fence-installation/', label: 'Fence Installation' },
] as const;
