# Alberta Elite Construction — Website

SEO-focused marketing site for [Alberta Elite Construction](https://albertaec.ca/) (Calgary home remodeling & general contractor).

## Stack

- [Astro](https://astro.build) (static HTML, fast loads, strong SEO)
- Tailwind CSS v4
- `@astrojs/sitemap` for search indexing

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to your host for `albertaec.ca`.

## Contact form

Forms use [FormSubmit](https://formsubmit.co) to deliver to `sales@albertaec.ca`. On first submission, FormSubmit sends a confirmation email to activate the address.

## Project structure

- `src/data/` — site copy, services, portfolio metadata
- `src/components/` — layout sections (Marize-inspired)
- `public/images/` — client portfolio photos and hero assets
