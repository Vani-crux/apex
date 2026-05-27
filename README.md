# ApexTrans Logistics — Static Website

A modern, responsive, single-page logistics & freight company website built with React. The design is inspired by the [ApexTrans Logistics Figma file](https://www.figma.com/design/0rj1fqHc2ny63qz5WEzUeP/ApexTrans-Logistics).

## Sections

1. **Header** — sticky navigation with scroll-aware styling, mobile hamburger menu, anchor links and a CTA button.
2. **Hero** — headline, sub-copy, dual CTAs, animated truck illustration, floating info cards and key stats.
3. **Services** — six-card grid (Road, Ocean, Air, Warehousing, Express, Supply Chain) with custom SVG icons and hover effects.
4. **About / Why Choose Us** — visual + feature checklist (Global Network, Real-Time Tracking, Certified & Secure, 24/7 Support).
5. **Tracking** — interactive shipment-tracking form with validation and a step-by-step timeline result.
6. **Stats** — animated counter strip (Years, Countries, Clients, On-Time Rate).
7. **Testimonials** — three customer reviews with star ratings.
8. **Contact Form** — full form with client-side validation:
   - Required fields: Name, Email, Service, Message
   - Optional fields: Phone, Origin, Destination
   - Live validation on blur, error messages with ARIA attributes
   - Simulated submit + success message
9. **Footer** — brand, link columns, social icons and legal links.

## Tech & Standards

- **React 19** (Create React App)
- **Component-per-folder** structure with co-located CSS
- **CSS Custom Properties** (design tokens for colors, fonts, spacing, radii, shadows)
- **Semantic HTML5** (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **Accessibility**: ARIA attributes on the form, screen-reader-only labels, keyboard-friendly nav, focus styles
- **Responsive**: CSS Grid + Flexbox, mobile breakpoints at 960px / 768px / 560px
- **No external UI library** — all icons are inline SVG

## Folder Structure

```
src/
├── App.js
├── App.css
├── index.js
├── index.css                       # global tokens + utilities
├── components/
│   ├── Header/        Header.js + Header.css
│   ├── Hero/          Hero.js + Hero.css
│   ├── Services/      Services.js + Services.css
│   ├── About/         About.js + About.css
│   ├── Tracking/      Tracking.js + Tracking.css
│   ├── Stats/         Stats.js + Stats.css
│   ├── Testimonials/  Testimonials.js + Testimonials.css
│   ├── ContactForm/   ContactForm.js + ContactForm.css
│   └── Footer/        Footer.js + Footer.css
└── data/
    ├── services.js
    └── testimonials.js
```

## Available Scripts

```bash
npm start     # dev server at http://localhost:3000
npm run build # production build
npm test      # run tests
```

## Customization

- **Colors / fonts / spacing**: edit the `:root` variables in `src/index.css`.
- **Services / testimonials**: edit `src/data/services.js` and `src/data/testimonials.js`.
- **Nav links**: edit `NAV_LINKS` in `src/components/Header/Header.js`.
