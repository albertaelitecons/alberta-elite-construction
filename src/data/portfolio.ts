export type PortfolioCategory =
  | 'all'
  | 'kitchen'
  | 'interior'
  | 'exterior'
  | 'construction';

export type PortfolioItem = {
  title: string;
  category: Exclude<PortfolioCategory, 'all'>;
  image: string;
  alt: string;
};

export const portfolioCategories: { id: PortfolioCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'interior', label: 'Interior' },
  { id: 'exterior', label: 'Exterior' },
  { id: 'construction', label: 'Construction' },
];

export const categoryLabel = (id: PortfolioItem['category']) =>
  portfolioCategories.find((cat) => cat.id === id)?.label ?? id;

export const portfolio: PortfolioItem[] = [
  {
    title: 'Waterfall Island Kitchen',
    category: 'kitchen',
    image: '/images/portfolio/WhatsApp_Image_2026-09-22_at_11.34.10__3_-f1635c3d-3da1-46a4-9eb0-0d9d3bed4fc7.jpg',
    alt: 'Kitchen island with stone waterfall countertop during renovation',
  },
  {
    title: 'Custom Pantry and Cabinetry',
    category: 'kitchen',
    image: '/images/portfolio/WhatsApp_Image_2026-09-22_at_11.34.10__5_-7d256bf3-d97d-4e8d-a89b-b5a15e550a4c.jpg',
    alt: 'Floor-to-ceiling kitchen cabinetry installation',
  },
  {
    title: 'Kitchen Island Installation',
    category: 'kitchen',
    image: '/images/portfolio/WhatsApp_Image_2026-09-22_at_11.34.12-db9b29bd-c283-4d50-b90e-5d0be76da1bf.jpg',
    alt: 'Kitchen remodel with island, cabinetry, and light hardwood flooring',
  },
  {
    title: 'Floor-to-Ceiling Cabinetry',
    category: 'kitchen',
    image: '/images/portfolio/WhatsApp_Image_2026-09-22_at_11.40.18-e0cb53a4-b87b-4daf-bfad-4f78e7bb9471.jpg',
    alt: 'Tall custom kitchen cabinet wall with appliance niche',
  },
  {
    title: 'Kitchen Flooring and Island',
    category: 'kitchen',
    image: '/images/portfolio/WhatsApp_Image_2026-09-22_at_11.40.19-2a568774-089b-4b65-bcdf-8aef27f81350.jpg',
    alt: 'Kitchen island and new hardwood flooring during installation',
  },
  {
    title: 'Kitchen Island Finish',
    category: 'kitchen',
    image: '/images/portfolio/WhatsApp_Image_2026-09-22_at_11.40.18__1_-3744dadb-f048-4269-a8d7-d6512708c107.jpg',
    alt: 'Kitchen island back panel and hardwood floor install',
  },
  {
    title: 'Living Room Feature Wall',
    category: 'interior',
    image: '/images/portfolio/WhatsApp_Image_2026-09-22_at_11.34.11__3_-3a5ab12e-bfeb-48da-8846-f93abb594d2b.jpg',
    alt: 'Wood slat accent wall and fireplace surround remodel',
  },
  {
    title: 'Feature Wall Installation',
    category: 'interior',
    image: '/images/portfolio/WhatsApp_Image_2026-09-22_at_11.34.11__1_-1c6edc24-4351-4270-a11e-c52f7a2c894f.jpg',
    alt: 'Wood slat feature wall with fireplace during finishing',
  },
  {
    title: 'Interior Renovation',
    category: 'interior',
    image: '/images/portfolio/WhatsApp_Image_2026-09-22_at_11.34.11-3431971d-4141-4f2f-8dc8-cbd6cd355ee3.jpg',
    alt: 'Home interior remodeling with modern lighting',
  },
  {
    title: 'Living Room During Renovation',
    category: 'interior',
    image: '/images/portfolio/WhatsApp_Image_2026-09-22_at_11.34.10__1_-3f7fc8b2-d848-495b-b2af-e626d5370c0b.jpg',
    alt: 'Living room renovation with fireplace, drywall, and finish carpentry',
  },
  {
    title: 'Open Living Space',
    category: 'interior',
    image: '/images/portfolio/WhatsApp_Image_2026-09-22_at_11.34.10__2_-ad087f2e-8fcf-4de9-8977-36cb9ee64312.jpg',
    alt: 'Open living room renovation with fireplace and hardwood floors',
  },
  {
    title: 'Hardwood Staircase',
    category: 'interior',
    image: '/images/portfolio/WhatsApp_Image_2026-09-22_at_11.34.10__4_-66310e99-bf28-4f4e-bd5d-1be0d94ec915.jpg',
    alt: 'Straight hardwood staircase with painted walls',
  },
  {
    title: 'Hardwood Stair Winders',
    category: 'interior',
    image: '/images/portfolio/IMG_3813-891c8087-fdeb-49a8-b127-7dfd1a319c8e.jpg',
    alt: 'Hardwood winder stairs and baseboard finish',
  },
  {
    title: 'Custom Staircase',
    category: 'interior',
    image: '/images/portfolio/IMG_6882-3639a2ee-877d-464c-9ebb-fa6c6ece1b85.jpg',
    alt: 'Hardwood staircase finish carpentry',
  },
  {
    title: 'Glass Entry Door',
    category: 'interior',
    image: '/images/portfolio/WhatsApp_Image_2026-09-22_at_11.40.19__1_-ecbb4313-2bfc-4e20-8cb4-53ae1f390f54.jpg',
    alt: 'Interior glass entry door and hardwood flooring',
  },
  {
    title: 'Marble Shower Tile',
    category: 'interior',
    image: '/images/portfolio/WhatsApp_Image_2026-09-22_at_11.40.19__2_-4557bd11-c83f-461d-b8a0-a57e6b731e5e.jpg',
    alt: 'Marble tile shower enclosure during bathroom remodel',
  },
  {
    title: 'Slat Wall Bedroom',
    category: 'interior',
    image: '/images/portfolio/WhatsApp_Image_2026-09-22_at_11.34.11__2_-e6b930a5-cee5-4421-94be-6a076831523d.jpg',
    alt: 'Bedroom wood slat accent wall and pendant lighting',
  },
  {
    title: 'Kitchen Rough-In',
    category: 'interior',
    image: '/images/portfolio/WhatsApp_Image_2026-09-22_at_11.34.10-ced5247f-e4b7-45ac-92f8-d7ba18233432.jpg',
    alt: 'Open kitchen space during lighting and flooring install',
  },
  {
    title: 'Raised Deck with Railings',
    category: 'exterior',
    image: '/images/portfolio/IMG-20260925-WA0095.jpg',
    alt: 'Raised wood deck with white aluminum railings',
  },
  {
    title: 'Deck Stairs and Railings',
    category: 'exterior',
    image: '/images/portfolio/IMG-20260925-WA0097.jpg',
    alt: 'Wood deck stairs with white railing and skirting',
  },
  {
    title: 'Rear Deck with Railings',
    category: 'exterior',
    image: '/images/portfolio/IMG-20260925-WA0094.jpg',
    alt: 'Rear wood deck with white railing on a Calgary home',
  },
  {
    title: 'Stained Cedar Deck',
    category: 'exterior',
    image: '/images/portfolio/deck-stained-fence.jpg',
    alt: 'Stained cedar deck enclosed by a wood privacy fence',
  },
  {
    title: 'Stained Deck with Steps',
    category: 'exterior',
    image: '/images/portfolio/deck-stained-steps.jpg',
    alt: 'Stained wood deck with wide steps in a backyard',
  },
  {
    title: 'Rear Deck Build',
    category: 'exterior',
    image: '/images/portfolio/IMG_8701-7266c2ba-cdfc-40ce-8ebd-ff6ec380545c.jpg',
    alt: 'New wooden deck attached to Calgary home',
  },
  {
    title: 'Front Entry Deck',
    category: 'exterior',
    image: '/images/portfolio/IMG_6825-c4e661fe-5d1a-467b-a2f5-e081527c1a24.jpg',
    alt: 'Front porch and stair deck construction',
  },
  {
    title: 'Cedar Entry Stairs',
    category: 'exterior',
    image: '/images/portfolio/IMG_3910-ef2d8266-04f7-4663-9759-87fdc5065512.jpg',
    alt: 'Cedar front landing and stairs at a Calgary home',
  },
  {
    title: 'Cedar Front Landing',
    category: 'exterior',
    image: '/images/portfolio/IMG_3908-1b82c45a-600e-4b35-8198-ef414b00d30c.jpg',
    alt: 'Cedar front landing, stairs, and house number 152',
  },
  {
    title: 'Basement Framing',
    category: 'construction',
    image: '/images/portfolio/20260925_173343.jpg',
    alt: 'Unfinished basement framing and concrete floor',
  },
  {
    title: 'Framing and Insulation',
    category: 'construction',
    image: '/images/portfolio/20260925_173256.jpg',
    alt: 'Basement framing, spray foam insulation, and stair opening',
  },
  {
    title: 'Framing and Ductwork',
    category: 'construction',
    image: '/images/portfolio/20260925_173321.jpg',
    alt: 'Basement wood framing with HVAC ducts in the ceiling',
  },
  {
    title: 'HVAC Ductwork',
    category: 'construction',
    image: '/images/portfolio/IMG_6841-e8f72999-fe90-4fbc-9209-59b54692100d.jpg',
    alt: 'Basement HVAC ducts and air handler installation',
  },
  {
    title: 'Framed Basement Suite',
    category: 'construction',
    image: '/images/portfolio/IMG_6878-dbb597fb-63d9-4911-9836-276bb8b354ed.jpg',
    alt: 'Framed basement room with insulation and vapor barrier',
  },
  {
    title: 'Mechanical Room Rough-In',
    category: 'construction',
    image: '/images/portfolio/IMG_6885-d9dcfbf7-749c-4748-b4cf-b9637cd4939b.jpg',
    alt: 'Mechanical room framing, wiring, and plumbing rough-in',
  },
  {
    title: 'Insulation and Electrical',
    category: 'construction',
    image: '/images/portfolio/IMG_6831-9194b645-8011-4d22-a122-92e425b6e075.jpg',
    alt: 'Ceiling insulation, electrical, and HVAC rough-in',
  },
  {
    title: 'Drywall and Ceiling Finish',
    category: 'construction',
    image: '/images/portfolio/IMG_7060-bc707a4a-70a8-4b3a-b2c5-2192dd9425d8.jpg',
    alt: 'Basement ceiling drywall and insulation work',
  },
];
