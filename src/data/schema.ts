import { googleReviews, googleReviewStats } from './reviews';
import { locations } from './locations';
import { serviceLinks, site } from './site';
import type { Crumb } from './seo';

type PageSchemaInput = {
  canonical: string;
  title: string;
  description: string;
  path: string;
  ogImage: string;
  breadcrumbs: Crumb[];
  datePublished?: string;
  dateModified?: string;
  pageType?: 'website' | 'article';
};

const businessId = `${site.url}/#business`;
const websiteId = `${site.url}/#website`;
const telephone = site.phoneHref.replace('tel:', '');

const business = {
  '@type': 'GeneralContractor',
  '@id': businessId,
  name: site.name,
  alternateName: 'Alberta Elite',
  description: site.description,
  url: site.url,
  telephone,
  email: site.email,
  image: [`${site.url}/logo.png`, `${site.url}/images/hero/hero-living-room.jpg`],
  logo: `${site.url}/logo.png`,
  priceRange: '$$',
  currenciesAccepted: 'CAD',
  paymentAccepted: 'Cash, Credit Card, Debit Card, E-Transfer',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: site.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  hasMap: site.mapUrl,
  areaServed: [
    { '@type': 'City', name: 'Calgary' },
    ...site.nearbyLocations.map((name) => ({ '@type': 'Place', name })),
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone,
    email: site.email,
    contactType: 'sales',
    areaServed: 'CA',
    availableLanguage: ['English'],
  },
  sameAs: [site.mapUrl, site.reviewsUrl],
  knowsAbout: serviceLinks.map((service) => service.label),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Calgary construction and remodeling services',
    itemListElement: serviceLinks.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.label,
        description: service.desc,
        url: `${site.url}${service.href}`,
        provider: { '@id': businessId },
        areaServed: { '@type': 'City', name: 'Calgary' },
      },
    })),
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: googleReviewStats.rating.toFixed(1),
    reviewCount: String(googleReviewStats.count),
    bestRating: '5',
    worstRating: '1',
  },
  review: googleReviews.map((review) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: review.name },
    reviewBody: review.quote,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(review.stars),
      bestRating: '5',
      worstRating: '1',
    },
  })),
};

const website = {
  '@type': 'WebSite',
  '@id': websiteId,
  url: site.url,
  name: site.name,
  description: site.description,
  inLanguage: 'en-CA',
  publisher: { '@id': businessId },
};

export function buildPageGraph({
  canonical,
  title,
  description,
  path,
  ogImage,
  breadcrumbs,
  datePublished,
  dateModified,
  pageType = 'website',
}: PageSchemaInput) {
  const ogImageUrl = new URL(ogImage, site.url).href;
  const isArticle = pageType === 'article';
  const isContact = path === '/contact/';
  const isAbout = path === '/about/';

  const pageTypeName = isArticle
    ? 'BlogPosting'
    : isContact
      ? 'ContactPage'
      : isAbout
        ? 'AboutPage'
        : 'WebPage';

  const webPage: Record<string, unknown> = {
    '@type': pageTypeName,
    '@id': canonical,
    url: canonical,
    name: title,
    headline: title,
    description,
    inLanguage: 'en-CA',
    isPartOf: { '@id': websiteId },
    about: { '@id': businessId },
    primaryImageOfPage: ogImageUrl,
    image: ogImageUrl,
    breadcrumb: { '@id': `${canonical}#breadcrumb` },
    publisher: { '@id': businessId },
  };

  if (isArticle) {
    webPage.author = { '@id': businessId };
    webPage.mainEntityOfPage = canonical;
    if (datePublished) webPage.datePublished = datePublished;
    webPage.dateModified = dateModified ?? datePublished ?? undefined;
  }

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${canonical}#breadcrumb`,
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: new URL(crumb.href, site.url).href,
    })),
  };

  const graph: Record<string, unknown>[] = [website, business, webPage, breadcrumb];

  const service = serviceLinks.find((item) => item.href === path);
  if (service) {
    const serviceNode = {
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: service.label,
      description: service.desc,
      url: canonical,
      image: ogImageUrl,
      provider: { '@id': businessId },
      areaServed: { '@type': 'City', name: 'Calgary' },
      serviceType: service.label,
    };
    graph.push(serviceNode);
    webPage.mainEntity = { '@id': `${canonical}#service` };
  }

  const locationMatch = path.match(/^\/locations\/([^/]+)\/$/);
  if (locationMatch) {
    const location = locations.find((item) => item.slug === locationMatch[1]);
    if (location) {
      graph.push({
        '@type': 'Service',
        '@id': `${canonical}#service`,
        name: location.title,
        description: location.subtitle,
        url: canonical,
        provider: { '@id': businessId },
        areaServed: { '@type': 'Place', name: location.name },
        serviceType: 'Home renovation',
      });
      webPage.mainEntity = { '@id': `${canonical}#service` };
    }
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
