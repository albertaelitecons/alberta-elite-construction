/**
 * Page-specific Service details for JSON-LD, keyed by page path.
 * Read by buildPageGraph() in schema.ts and breadcrumbsForPath() in seo.ts.
 * Keep each entry in line with what the page visibly says (services, prices, areas).
 */
export type ServiceSchemaEntry = {
  name: string;
  serviceType: string;
  description: string;
  catalogName: string;
  catalog: string[];
  offer?: {
    name: string;
    minPrice: number;
    maxPrice?: number;
  };
};

/** Communities listed in the Locations section shown on every service page. */
export const serviceAreaServed = [
  { '@type': 'City', name: 'Calgary' },
  { '@type': 'City', name: 'Chestermere' },
  { '@type': 'Place', name: 'Langdon' },
  { '@type': 'Place', name: 'Shepard' },
  { '@type': 'Place', name: 'De Winton' },
  { '@type': 'Place', name: 'Conrich' },
  { '@type': 'Place', name: 'Indus' },
  { '@type': 'AdministrativeArea', name: 'Rocky View County' },
];

export const serviceSchemas: Record<string, ServiceSchemaEntry> = {
  '/construction-company-in-calgary/': {
    name: 'Construction Company in Calgary',
    serviceType: 'Residential Construction',
    description:
      'Residential construction company in Calgary building custom garages, basement developments and renovations, legal secondary suites, decks, fences, kitchen and bathroom remodels, roof repairs, and video surveillance systems. Permits handled, fixed written pricing, and a 2-year workmanship warranty.',
    catalogName: 'Construction Services',
    catalog: [
      'Custom Garage Construction',
      'Basement Development and Renovation',
      'Legal Secondary Suites',
      'Deck Installation',
      'Fence Installation',
      'Kitchen, Bathroom, and Home Remodeling',
      'Roof Repair',
      'Video Surveillance Installation',
    ],
  },
  '/basement-renovation-contractor-in-calgary/': {
    name: 'Basement Renovation Contractor in Calgary',
    serviceType: 'Basement Renovation',
    description:
      'Basement renovation in Calgary for finished basements: layout changes and wall removal, bathroom renovations, egress window upgrades, flooring, ceilings and lighting, water damage repair, fixing unpermitted work, and legal suite conversions. Fixed written pricing and a 2-year workmanship warranty.',
    catalogName: 'Basement Renovation Services',
    catalog: [
      'Layout Changes and Wall Removal',
      'Basement Bathroom Renovation',
      'Egress Window Upgrades for Existing Bedrooms',
      'Flooring, Ceilings, and Lighting Updates',
      'Water Damage Repair and Moisture Fixes',
      'Fixing Unpermitted Basement Work',
      'Converting a Finished Basement to a Legal Suite',
      'Wet Bars and Entertainment Spaces',
    ],
  },
  '/basement-development-in-calgary/': {
    name: 'Basement Development in Calgary',
    serviceType: 'Basement Development',
    description:
      'Full-service basement development and renovation in Calgary, from City of Calgary permits and layout planning to framing, insulation, drywall, electrical and plumbing coordination, bathrooms, wet bars, and legal suites.',
    catalogName: 'Basement Renovation Services',
    catalog: [
      'Planning and Layout',
      'Permits',
      'Framing and Drywall',
      'Mechanical Trades',
      'Baths and Wet Bars',
      'Legal Suites',
    ],
  },
  '/legal-suite-in-calgary/': {
    name: 'Legal Suites in Calgary',
    serviceType: 'Legal Secondary Suite Construction',
    description:
      'Design, permitting, and construction of code-compliant legal secondary suites in Calgary, including basement suites and garage suites, with egress windows, fire separation, ventilation, and code-compliant electrical and plumbing.',
    catalogName: 'Legal Suite Services',
    catalog: ['Basement Suites', 'Garage Suites'],
    offer: { name: 'Legal secondary suite', minPrice: 60000, maxPrice: 130000 },
  },
  '/deck-installation-in-calgary/': {
    name: 'Deck Installation in Calgary',
    serviceType: 'Deck Installation',
    description:
      'Licensed and insured deck installation in Calgary in composite, pressure-treated wood, cedar, and larch, with footings, framing, decking, and railings built for frost, snow load, and drainage. Permit assistance, fixed written quotes, and a 2-year workmanship warranty.',
    catalogName: 'Deck Materials',
    catalog: ['Pressure-Treated Wood Decking', 'Cedar Decking', 'Composite Decking', 'Larch Decking'],
  },
  '/fence-installation-in-calgary/': {
    name: 'Fence Installation in Calgary',
    serviceType: 'Fence Installation',
    description:
      'Fence installation in Calgary in wood, PVC vinyl, chain link, and wildlife fencing, with posts set to frost depth and gates hung to stay straight through freeze and thaw. Fixed written quotes and a 2-year workmanship warranty.',
    catalogName: 'Fence Styles',
    catalog: ['Wooden Fences', 'PVC Vinyl Fences', 'Chain Link Fences', 'Wildlife Fencing'],
  },
  '/kitchen-remodeling-in-calgary/': {
    name: 'Kitchen Remodeling in Calgary',
    serviceType: 'Kitchen Remodeling',
    description:
      'Full kitchen remodeling in Calgary: layout design, custom and semi-custom cabinetry, islands with stone or quartz countertops, backsplash tile and lighting, and plumbing, gas, and electrical coordinated on one schedule. Fixed-scope written quotes and a 2-year workmanship warranty.',
    catalogName: 'Kitchen Renovation Services',
    catalog: [
      'Layout Design',
      'Custom Cabinetry',
      'Islands and Stone Countertops',
      'Lighting and Tile',
      'Trade Coordination',
      'Final Finishes',
    ],
    offer: { name: 'Mid-range kitchen renovation', minPrice: 35000 },
  },
  '/bathroom-remodeling-in-calgary/': {
    name: 'Bathroom Remodeling in Calgary',
    serviceType: 'Bathroom Remodeling',
    description:
      'Bathroom remodeling in Calgary for powder rooms, full bathrooms, and primary ensuites, with waterproofing, ventilation, tile and stone, custom showers, vanities, plumbing upgrades, and heated flooring. Fixed-price written quotes and a 2-year workmanship warranty.',
    catalogName: 'Bathroom Remodeling Services',
    catalog: [
      'Layout Redesign',
      'Custom Showers',
      'Tile and Stone',
      'Vanities and Storage',
      'Plumbing Upgrades',
      'Heated Flooring and Accessibility Updates',
    ],
  },
  '/home-remodeling-in-calgary/': {
    name: 'Home Remodeling in Calgary',
    serviceType: 'Home Remodeling',
    description:
      'Whole-home remodeling in Calgary under one general contractor: kitchens and bathrooms, basements, flooring, trim, lighting, feature walls, finish carpentry, and City of Calgary permits and trade coordination. One written scope and a 2-year workmanship warranty.',
    catalogName: 'Home Renovation Services',
    catalog: [
      'Kitchens and Baths',
      'Basements',
      'Interior Finishes',
      'Feature Walls',
      'Finish Carpentry',
      'Permits and Trades',
    ],
  },
  '/video-surveillance-installation-in-calgary/': {
    name: 'Video Surveillance Installation in Calgary',
    serviceType: 'Security Camera Installation',
    description:
      'Video surveillance installation for Calgary homes and properties: camera layout planned around entries, yards, and driveways, clean cable runs, weather-ready exterior and interior mounts, and recorder setup with viewing access. Fixed written quotes and a 2-year workmanship warranty.',
    catalogName: 'Surveillance Installation Services',
    catalog: ['Site Layout', 'Wiring', 'Camera Mounting', 'Recording Setup'],
  },
  '/roof-repair-in-calgary/': {
    name: 'Roof Repair in Calgary',
    serviceType: 'Roof Repair',
    description:
      'Roof repair for Calgary homes: leak tracing from the attic and the slope, shingle repair matched to the existing roof, chimney, wall, and valley flashing, and repairs for freeze-thaw, ice, and wind damage. Fixed written quotes and a 2-year workmanship warranty.',
    catalogName: 'Roof Repair Services',
    catalog: ['Leak Tracing', 'Shingle Repair', 'Flashing Repair', 'Ice and Wind Damage Repair'],
  },
};
