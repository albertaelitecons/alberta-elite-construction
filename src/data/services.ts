export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: 'basement' | 'kitchen' | 'bath' | 'build' | 'home' | 'contract';
};

export const services: Service[] = [
  {
    slug: 'basement-development',
    title: 'Basement Development',
    short: 'Legal suites, media rooms, and full basement finishing in Calgary.',
    description:
      'From framing and insulation to mechanical rough-ins and final finishes, we develop basements that add livable square footage and long-term value to your home.',
    icon: 'basement',
  },
  {
    slug: 'kitchen-remodeling',
    title: 'Kitchen Remodeling',
    short: 'Custom cabinetry, islands, and premium surfaces tailored to how you cook and entertain.',
    description:
      'We coordinate layout, trades, and finishes so your kitchen renovation stays on schedule - with clean lines, durable materials, and details you will notice every day.',
    icon: 'kitchen',
  },
  {
    slug: 'bathroom-remodeling',
    title: 'Bathroom Remodeling',
    short: 'Spa-inspired updates, ensuite refreshes, and powder room transformations.',
    description:
      'Waterproofing, tile, fixtures, and ventilation handled by one general contractor team - so your bathroom remodel is built to Alberta standards.',
    icon: 'bath',
  },
  {
    slug: 'general-contracting',
    title: 'General Contractor',
    short: 'Single point of contact for multi-trade renovations across Calgary.',
    description:
      'Permits, scheduling, and quality control under one roof. We manage subcontractors and keep your project organized from demo to final walkthrough.',
    icon: 'contract',
  },
  {
    slug: 'home-remodeling',
    title: 'Home Remodeling',
    short: 'Whole-home updates that improve flow, light, and resale appeal.',
    description:
      'Open concepts, flooring, trim, and structural changes - planned as a cohesive remodel rather than a patchwork of small projects.',
    icon: 'home',
  },
  {
    slug: 'construction',
    title: 'Construction & Carpentry',
    short: 'Decks, stairs, feature walls, and precision finish carpentry.',
    description:
      'Exterior builds and interior millwork with the same craftsmanship we bring to major renovations - straight lines, tight joints, and clean job sites.',
    icon: 'build',
  },
];
