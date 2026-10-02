import { locationLinks } from './locations';
import { quickLinks, serviceLinks } from './site';
import { serviceSchemas } from './serviceSchema';

export type Crumb = {
  name: string;
  href: string;
};

const segmentLabels: Record<string, string> = {
  'our-guarantees': 'Guarantees',
  'thank-you': 'Thank you',
};

export function breadcrumbsForPath(path: string, pageTitle?: string): Crumb[] {
  const crumbs: Crumb[] = [{ name: 'Home', href: '/' }];
  if (path === '/' || path === '') return crumbs;

  // Service pages live at the root but belong under the Services hub.
  const servicePage = serviceLinks.find((item) => item.href === path);
  if (servicePage) {
    crumbs.push({ name: 'Services', href: '/services/' });
    crumbs.push({ name: serviceSchemas[path]?.name ?? servicePage.label, href: path });
    return crumbs;
  }

  const segments = path.replace(/^\/|\/$/g, '').split('/');
  let href = '';

  segments.forEach((segment, index) => {
    href += `/${segment}`;
    if (segment === 'detail') return;

    const full = `${href}/`;
    const isLast = index === segments.length - 1;
    const service = serviceLinks.find((item) => item.href === full);
    const location = locationLinks.find((item) => item.href === full);
    const quick = quickLinks.find((item) => item.href === full);

    let name =
      service?.label ??
      location?.name ??
      quick?.label ??
      segmentLabels[segment] ??
      segment.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());

    if (isLast && pageTitle && !service && !location && !quick) {
      name = pageTitle.split('|')[0]?.trim() || name;
    }

    crumbs.push({ name, href: full });
  });

  return crumbs;
}

export function webpSrc(src: string) {
  return src.replace(/\.(jpe?g|png)$/i, '.webp');
}
