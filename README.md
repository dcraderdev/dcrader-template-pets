# dcrader-template-pets

**5 market-ready pet services landing page templates** built with Astro 4 + Tailwind CSS. Each template targets a different segment of the pet services industry with a fully distinct visual identity, real copy, and all 8 required sections.

## Live Preview

| Variant | Business | URL |
|---|---|---|
| V1 — Cozy Boutique | Paws & Pine (SF) | [/v1-cozy-boutique](https://dcrader-template-pets.vercel.app/v1-cozy-boutique) |
| V2 — Active Outdoor | Trail Tails Adventure Co. (Boulder) | [/v2-active-outdoor](https://dcrader-template-pets.vercel.app/v2-active-outdoor) |
| V3 — Clinical Trust | Calm Coat Veterinary Grooming (Seattle) | [/v3-clinical-trust](https://dcrader-template-pets.vercel.app/v3-clinical-trust) |
| V4 — Fun & Bright | Sniff & Snuggle Daycare (Austin) | [/v4-fun-bright](https://dcrader-template-pets.vercel.app/v4-fun-bright) |
| V5 — Luxury Resort | The Hollow Pet Hotel & Spa (Beverly Hills) | [/v5-luxury-resort](https://dcrader-template-pets.vercel.app/v5-luxury-resort) |

---

## The 5 Templates

| # | Name | Location | Target Market | Palette | Typography |
|---|---|---|---|---|---|
| V1 | Paws & Pine | San Francisco, CA | Boutique boarding, upscale local clientele | Cream/sage/terracotta/dark brown | Playfair Display + Lato |
| V2 | Trail Tails Adventure Co. | Boulder, CO | Adventure dogs, high-drive breeds, active owners | Deep forest green/sun yellow/trail orange | Oswald + Open Sans |
| V3 | Calm Coat Vet Grooming | Seattle, WA | Anxious/medically complex dogs, clinical trust | Teal/white, max whitespace | Inter throughout |
| V4 | Sniff & Snuggle Daycare | Austin, TX | Daycare, puppy classes, young families | Coral/turquoise/yellow, playful | Fredoka One + Nunito |
| V5 | The Hollow Pet Hotel & Spa | Beverly Hills, CA | Ultra-premium boarding, high-net-worth clientele | Deep navy/gold | Cormorant Garamond + Montserrat |

---

## Stack

- **[Astro 4](https://astro.build)** — zero-JS-by-default static site generator
- **[Tailwind CSS 3](https://tailwindcss.com)** — utility-first styling (JIT, arbitrary values)
- **[Vercel](https://vercel.com)** — hosting and deployment
- **TypeScript** — data files typed throughout
- **Google Fonts** — Playfair Display, Lato, Oswald, Fredoka One, Nunito, Cormorant Garamond, Montserrat, Inter

---

## Quick Start

```bash
git clone https://github.com/dcraderdev/dcrader-template-pets
cd dcrader-template-pets
npm install
npm run dev
```

Then visit:
- `http://localhost:4321/` — template index
- `http://localhost:4321/v1-cozy-boutique` — V1
- `http://localhost:4321/v2-active-outdoor` — V2
- `http://localhost:4321/v3-clinical-trust` — V3
- `http://localhost:4321/v4-fun-bright` — V4
- `http://localhost:4321/v5-luxury-resort` — V5

---

## Customization Guide

Customizing any template takes about 5 minutes. The entire content layer lives in 3 data files per variant:

### 1. Edit business details

```ts
// src/data/v1/business.ts
export const business = {
  name: 'Your Business Name',
  tagline: 'Your tagline',
  phone: '(555) 000-0000',
  email: 'you@yourbusiness.com',
  address: '123 Main St, Your City, ST 00000',
  // ...
};
```

### 2. Edit services

```ts
// src/data/v1/services.ts
export const services = [
  {
    name: 'Your Service Name',
    description: 'What you offer',
    icon: '🐾',
    price: 'From $XX',
    highlights: ['Feature 1', 'Feature 2'],
  },
  // ...
];
```

### 3. Edit gallery

```ts
// src/data/v1/gallery.ts
export const gallery = [
  { url: 'https://your-image-url.com/photo.jpg', alt: 'Descriptive alt text', caption: 'Caption' },
  // ...
];
```

That's it. The page layouts, fonts, colors, and structure are handled automatically by the variant page templates.

---

## Every Template Includes

All 8 sections are present in every variant:

1. **Navigation** — sticky, mobile hamburger menu
2. **Hero** — full-screen with background image and overlay
3. **Services** — 4-card grid with highlights
4. **Pricing** — 3 package tiers with featured card
5. **Gallery** — 8-image responsive layout
6. **Team** — bios, photos, certifications
7. **Testimonials** — 3 star reviews
8. **Booking Form** — owner name, email, phone, pet name, breed, service dropdown, date picker, notes textarea, JS success state
9. **Contact** — hours table, address, phone, emergency, Google Maps embed

---

## Deployment

### Vercel (recommended)

```bash
npx vercel --yes --prod
```

Or connect the GitHub repo to Vercel at [vercel.com/new](https://vercel.com/new) for auto-deploy on push.

### Build manually

```bash
npm run build
# Output in ./dist/
```

---

## Photo Credits

All photos are from [Unsplash](https://unsplash.com) and used under the [Unsplash License](https://unsplash.com/license).

Key photographers:
- Photos by various contributors via `images.unsplash.com`
- Photo IDs used: `1587300003388`, `1537151608828`, `1548199973`, `1601758125946`, `1583512603806`, `1560743641`, `1518717758536`, `1530143584537`, `1494790108377`, `1472099645785`, `1438761681033`, `1559839734`, `1500648767791`, `1580489944761`, `1507003211169`

To use your own photos, replace the Unsplash URLs in each variant's `gallery.ts` file with your own hosted images.

---

## License

MIT — free to use for personal and commercial projects. Attribution appreciated but not required.

---

Built by [dcrader.dev](https://dcrader.dev) · [github.com/dcraderdev](https://github.com/dcraderdev)
