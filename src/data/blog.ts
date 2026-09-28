export type BlogCategory =
  | 'garage-development'
  | 'basement-development'
  | 'legal-suites'
  | 'deck-installation'
  | 'fence-installation';

export type BlogPost = {
  title: string;
  slug: string;
  category: BlogCategory;
  categoryLabel: string;
  date: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: 'Workshop Layout Ideas: Setting Up Electrical and Lighting for Tools',
    slug: 'garage-workshop-layout-electrical-lighting',
    category: 'garage-development',
    categoryLabel: 'Garage Development',
    date: '2026-09-19',
    excerpt:
      "Picture this. You're halfway through a cut on the table saw, the extension cord is snaking across the floor, and the only light in the garage throws a shadow right where the blade meets the wood.",
  },
  {
    title: 'Garage Door Opener Guide: How to Choose the Right Opener in Calgary',
    slug: 'garage-door-opener-guide-how-to-choose-the-right-opener-in-calgary',
    category: 'garage-development',
    categoryLabel: 'Garage Development',
    date: '2026-09-10',
    excerpt:
      "A garage door opener is one of those things you don't think much about until it stops working.",
  },
  {
    title: 'Beyond Parking: Creative Ways to Reinvent Your Calgary Garage',
    slug: 'beyond-parking-creative-ways-to-reinvent-your-calgary-garage',
    category: 'garage-development',
    categoryLabel: 'Garage Development',
    date: '2026-08-30',
    excerpt:
      "If you're like most Calgary homeowners, your garage probably serves one main purpose: parking the car.",
  },
  {
    title: '10 Smart Storage Ideas for a Small Calgary Garage',
    slug: '10-smart-storage-ideas-for-a-small-calgary-garage',
    category: 'garage-development',
    categoryLabel: 'Garage Development',
    date: '2026-08-28',
    excerpt:
      'A small garage can fill up surprisingly fast. There is the car, of course, but then come the bicycles, tools, gardening equipment, sports gear, winter tires and all those seasonal items.',
  },
  {
    title: 'Improving Curb Appeal: Modern Garage Door Designs for Calgary Homes',
    slug: 'improving-curb-appeal-modern-garage-door-designs-for-calgary-homes',
    category: 'garage-development',
    categoryLabel: 'Garage Development',
    date: '2026-08-27',
    excerpt:
      'A garage door can take up a surprisingly large part of the front of a Calgary home.',
  },
  {
    title: 'How to Secure Your Garage: Smart Locks and Security Systems',
    slug: 'how-to-secure-your-garage-smart-locks-and-security-systems',
    category: 'garage-development',
    categoryLabel: 'Garage Development',
    date: '2026-08-26',
    excerpt:
      "If you're thinking about how to secure your garage, you're already ahead of most homeowners.",
  },
  {
    title: 'RV and Truck Enthusiasts: How to Build an Extra-Tall Garage Door',
    slug: 'rv-and-truck-enthusiasts-how-to-build-an-extra-tall-garage-door',
    category: 'garage-development',
    categoryLabel: 'Garage Development',
    date: '2026-08-04',
    excerpt:
      "If you own an RV, a lifted pickup or a full-size work truck, you've probably already run into this problem.",
  },
  {
    title: 'Garage Building Permits Calgary: What You Need to Build a New Garage',
    slug: 'garage-building-permits-calgary-what-you-need-to-build-a-new-garage',
    category: 'garage-development',
    categoryLabel: 'Garage Development',
    date: '2026-04-25',
    excerpt:
      "If you're a homeowner in Calgary thinking about adding a garage, you've probably heard the word \"permits\" come up.",
  },
  {
    title: 'Garage Construction vs Renovation in Calgary: What Actually Makes Sense for Your Money',
    slug: 'garage-construction-vs-renovation-in-calgary-what-actually-makes-sense-for-your-money',
    category: 'garage-development',
    categoryLabel: 'Garage Development',
    date: '2026-04-24',
    excerpt:
      'Most homeowners I talk to have already made up their mind before they call me.',
  },
  {
    title: 'How to Build a Heated Garage: A Complete Guide for Calgary Homeowners',
    slug: 'how-to-build-a-heated-garage-a-complete-guide-for-calgary-homeowners',
    category: 'garage-development',
    categoryLabel: 'Garage Development',
    date: '2026-04-11',
    excerpt:
      "If you've spent a Calgary winter trying to warm up a car in a garage that feels like the inside of a freezer, you already know the problem.",
  },
  {
    title: 'Detached vs. Attached Garage Development: Pros and Cons for Calgary Homes',
    slug: 'detached-vs-attached-garage-development-pros-and-cons-for-calgary-homes',
    category: 'garage-development',
    categoryLabel: 'Garage Development',
    date: '2026-03-22',
    excerpt:
      'Choosing between a detached or attached garage is one of those decisions that seems straightforward until you actually start thinking it through.',
  },
  {
    title: 'Open Concept vs. Separate Rooms: Designing Your Calgary Basement Layout',
    slug: 'open-concept-vs-separate-rooms-designing-your-calgary-basement-layout',
    category: 'basement-development',
    categoryLabel: 'Basement Development',
    date: '2026-08-08',
    excerpt:
      'Just about every basement project we take on starts the same way. The homeowner meets us at the bottom of the stairs and says "we\'re just not sure how to lay it out."',
  },
  {
    title: 'The True Cost of Finishing a Basement in Calgary: A 2026 Breakdown',
    slug: 'the-true-cost-of-finishing-a-basement-in-calgary-a-2026-breakdown',
    category: 'basement-development',
    categoryLabel: 'Basement Development',
    date: '2026-05-19',
    excerpt:
      "You're standing at the bottom of your basement stairs with a coffee in hand, looking at bare concrete walls and wondering what it could become.",
  },
  {
    title: 'Navigating Secondary Suite Zoning Laws in Calgary Neighbourhoods',
    slug: 'navigating-secondary-suite-zoning-laws-in-calgary-neighbourhoods',
    category: 'basement-development',
    categoryLabel: 'Basement Development',
    date: '2026-05-16',
    excerpt:
      'Adding a secondary suite sounds fairly simple when you first look into it.',
  },
  {
    title: 'How to Prevent Moisture and Mold Issues During Your Basement Renovation',
    slug: 'how-to-prevent-moisture-and-mold-issues-during-your-basement-renovation',
    category: 'basement-development',
    categoryLabel: 'Basement Development',
    date: '2026-04-02',
    excerpt:
      "If you've ever walked into a finished basement and caught that earthy, musty smell, you already know what moisture damage can do.",
  },
  {
    title: 'The Ultimate Guide to Basement Development in Calgary: Permits and Planning',
    slug: 'the-ultimate-guide-to-basement-development-in-calgary-permits-and-planning',
    category: 'basement-development',
    categoryLabel: 'Basement Development',
    date: '2026-03-16',
    excerpt:
      "There's a running joke among Calgary homeowners: the most expensive room in your house is the one you're not using.",
  },
  {
    title: 'The Complete Guide to Financing a Legal Suite in Alberta (2026 Update)',
    slug: 'the-complete-guide-to-financing-a-legal-suite-in-alberta-2026-update',
    category: 'legal-suites',
    categoryLabel: 'Legal Suites',
    date: '2026-07-25',
    excerpt:
      "Building a legal secondary suite is one of the few home renovations that can increase your property's value while generating monthly income.",
  },
  {
    title: "The Landlord's Guide to Maintaining a Secondary Suite",
    slug: 'the-landlord-s-guide-to-maintaining-a-secondary-suite',
    category: 'legal-suites',
    categoryLabel: 'Legal Suites',
    date: '2026-07-24',
    excerpt:
      'Owning a secondary suite can be one of the smartest long-term investments for Calgary homeowners.',
  },
  {
    title: 'The Cost vs. Reward: Is a Legal Suite a Good Investment in Calgary?',
    slug: 'the-cost-vs-reward-is-a-legal-suite-a-good-investment-in-calgary',
    category: 'legal-suites',
    categoryLabel: 'Legal Suites',
    date: '2026-07-21',
    excerpt:
      'Calgary basements have stopped being just storage space with a furnace in the corner.',
  },
  {
    title: 'What Makes a Basement Suite "Legal" in Calgary? The Complete Checklist',
    slug: 'what-makes-a-basement-suite-legal-in-calgary-the-complete-checklist',
    category: 'legal-suites',
    categoryLabel: 'Legal Suites',
    date: '2026-03-23',
    excerpt:
      "You've probably heard the term thrown around: \"Is it a legal suite?\"",
  },
  {
    title: 'Low-Maintenance Decking Materials That Can Handle Alberta Snow',
    slug: 'low-maintenance-decking-materials-that-can-handle-alberta-snow',
    category: 'deck-installation',
    categoryLabel: 'Deck Installation',
    date: '2026-06-18',
    excerpt:
      'Alberta homeowners know that winter does not go easy on a deck.',
  },
  {
    title: 'When to Repair vs. Replace Your Old, Rotting Deck',
    slug: 'when-to-repair-vs-replace-your-old-rotting-deck',
    category: 'deck-installation',
    categoryLabel: 'Deck Installation',
    date: '2026-06-15',
    excerpt:
      "Should you repair your deck or replace it entirely? It's one of the most common questions Alberta homeowners face.",
  },
  {
    title: 'Do You Need a Permit to Build a Deck in Calgary?',
    slug: 'do-you-need-a-permit-to-build-a-deck-in-calgary',
    category: 'deck-installation',
    categoryLabel: 'Deck Installation',
    date: '2026-06-04',
    excerpt:
      "If you're planning to add a new deck to your backyard, one of the first questions is whether a permit is required.",
  },
  {
    title: 'Pressure-Treated Wood vs. Composite Decking: Which is Better for Calgary Weather?',
    slug: 'pressure-treated-wood-vs-composite-decking-which-is-better-for-calgary-weather',
    category: 'deck-installation',
    categoryLabel: 'Deck Installation',
    date: '2026-03-24',
    excerpt:
      "If you've spent any amount of time in Calgary, you already know the weather doesn't play by the rules.",
  },
  {
    title: 'Modern Fence Ideas: Horizontal Slats and Mixed Materials',
    slug: 'modern-fence-ideas-horizontal-slats-and-mixed-materials',
    category: 'fence-installation',
    categoryLabel: 'Fence Installation',
    date: '2026-07-15',
    excerpt:
      'Traditional vertical wood fences have been the go-to choice for Calgary backyards for decades.',
  },
  {
    title: 'The Cost of Fencing in Calgary: Price Per Linear Foot by Material',
    slug: 'the-cost-of-fencing-in-calgary-price-per-linear-foot-by-material',
    category: 'fence-installation',
    categoryLabel: 'Fence Installation',
    date: '2026-07-13',
    excerpt:
      "If you're planning a new fence in Calgary, one of the first questions is always the same: how much does a fence cost per foot?",
  },
  {
    title: 'Calgary Fence Bylaws: Height Restrictions for Front and Back Yards',
    slug: 'calgary-fence-bylaws-height-restrictions-for-front-and-back-yards',
    category: 'fence-installation',
    categoryLabel: 'Fence Installation',
    date: '2026-06-26',
    excerpt:
      'Putting up a new fence seems straightforward until questions about height limits and local rules start coming up.',
  },
  {
    title: 'Wood, Vinyl, or Chain Link? Choosing the Right Fence Material for Calgary',
    slug: 'wood-vinyl-or-chain-link-choosing-the-right-fence-material-for-calgary',
    category: 'fence-installation',
    categoryLabel: 'Fence Installation',
    date: '2026-03-26',
    excerpt:
      "Picking a fence sounds simple enough - until you start thinking about everything Calgary's climate can throw at it.",
  },
];

export function postsByCategory(category?: BlogCategory) {
  if (!category) return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}

export function blogPostHref(slug: string) {
  return `/blog/detail/${slug}/`;
}

export function formatBlogDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-CA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
