# Rehan Sanadi — Portfolio

A premium, award-worthy personal portfolio built with the App Store–winning
product-site aesthetic (Tiimo × Linear × Apple × Arc × Stripe).

## Tech stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** (custom design system)
- **Framer Motion** — reveals, parallax, staggered text, magnetic UI
- **GSAP + ScrollTrigger** — wired into the smooth-scroll timeline
- **Lenis** — smooth scrolling
- **Lucide** icons, shadcn-style `Button`/`Slot` primitives

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Project structure

```
app/
  layout.tsx        # fonts, SEO metadata, JSON-LD, Lenis + cursor providers
  page.tsx          # section composition
  globals.css       # design tokens, glass/noise/grain utilities
  sitemap.ts robots.ts manifest.ts
components/
  Background.tsx    # drifting blobs + mouse-follow glow + grain
  Navbar.tsx        # glass pill, hide-on-scroll-down
  Hero.tsx          # split layout, portrait, floating project cards, parallax
  TrustBar.tsx      # infinite achievement marquee
  Timeline.tsx      # scroll-driven progress line
  Skills.tsx        # magnetic floating pills
  CurrentBuilding.tsx
  Contact.tsx  Footer.tsx
  Cursor.tsx  Preloader.tsx  ScrollProgress.tsx
  showcases/        # Yumyoo, Hearly, Medic, SecureVault
  primitives/       # Reveal, AnimatedText, Magnetic, SectionHeading, Phone
  ui/               # Button, Slot
lib/
  data.ts           # ← single source of truth for ALL content
  utils.ts
public/
  rehan.png         # ← add your cut-out portrait (elegant fallback until then)
  Rehan_Resume.pdf
```

## Customizing

- **All text, links, projects, skills, timeline** live in `lib/data.ts`.
- **Colors / fonts / animations** live in `tailwind.config.ts` + `app/globals.css`.
- **Hero photo:** drop a transparent-background PNG at `public/rehan.png`.
- **Email note:** the site uses `rehansanadi0707@gmail.com` (your verified address). Change in `lib/data.ts`.

## Accessibility & performance

- Respects `prefers-reduced-motion` (disables Lenis, preloader, heavy motion).
- Skip-to-content link, semantic landmarks, ARIA labels on icon links.
- Custom cursor and mouse glow auto-disable on touch / coarse-pointer devices.
- Fully static export, fonts via `next/font`, AVIF/WebP image formats.
# Portfolio_Rehan
