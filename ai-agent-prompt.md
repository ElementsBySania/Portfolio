You are a senior full-stack developer and UI/UX designer. Your task is to build a complete,
production-ready personal portfolio website for a Graphic Designer using Next.js (App Router),
Sass for styling, and a strict component/content architecture described below.

---

## 🎯 PROJECT OVERVIEW

Build a multi-page, responsive, animated, and visually stunning portfolio website for a
Graphic Designer. The site must feel premium, creative, and memorable — it IS the designer's
first impression. Avoid generic "template" aesthetics. Use bold typography, purposeful
animation, and a cohesive visual identity.

---

## 🗂️ PAGES

Create the following pages using Next.js App Router (each as app/[page]/page.jsx):

1. `/` → Home
2. `/about` → About
3. `/services` → Services
4. `/portfolio` → Portfolio
5. `/contact` → Contact

Each page file (page.jsx) should ONLY import and render its corresponding page component.
No layout logic, no content, no styling inside page.jsx files.

---

## 🏗️ FOLDER STRUCTURE

Strictly follow this structure:

/app
layout.jsx ← Root layout: imports global scss, renders <Header> + {children} + <Footer>
page.jsx ← Renders <HomePage />
/about/page.jsx ← Renders <AboutPage />
/services/page.jsx ← Renders <ServicesPage />
/portfolio/page.jsx ← Renders <PortfolioPage />
/contact/page.jsx ← Renders <ContactPage />

/components
/common
Button/
Button.jsx
Button.module.scss
Card/
Card.jsx
Card.module.scss
Input/
Input.jsx
Input.module.scss
Select/
Select.jsx
Select.module.scss

/layout
Header/
Header.jsx
Header.module.scss
Footer/
Footer.jsx
Footer.module.scss

/home
HomePage/
HomePage.jsx
HomePage.module.scss
HeroSection/
HeroSection.jsx
HeroSection.module.scss
FeaturedWork/
FeaturedWork.jsx
FeaturedWork.module.scss
ClientLogos/
ClientLogos.jsx
ClientLogos.module.scss
Testimonials/
Testimonials.jsx
Testimonials.module.scss

/about
AboutPage/
AboutPage.jsx
AboutPage.module.scss
AboutHero/
AboutHero.jsx
AboutHero.module.scss
Skills/
Skills.jsx
Skills.module.scss
Experience/
Experience.jsx
Experience.module.scss

/services
ServicesPage/
ServicesPage.jsx
ServicesPage.module.scss
ServicesHero/
ServicesHero.jsx
ServicesHero.module.scss
ServicesList/
ServicesList.jsx
ServicesList.module.scss
Pricing/
Pricing.jsx
Pricing.module.scss

/portfolio
PortfolioPage/
PortfolioPage.jsx
PortfolioPage.module.scss
PortfolioHero/
PortfolioHero.jsx
PortfolioHero.module.scss
PortfolioGrid/
PortfolioGrid.jsx
PortfolioGrid.module.scss
PortfolioFilter/
PortfolioFilter.jsx
PortfolioFilter.module.scss

/contact
ContactPage/
ContactPage.jsx
ContactPage.module.scss
ContactHero/
ContactHero.jsx
ContactHero.module.scss
ContactForm/
ContactForm.jsx
ContactForm.module.scss
ContactInfo/
ContactInfo.jsx
ContactInfo.module.scss

/constants
index.js ← Single export file
navigation.js
home.js
about.js
services.js
portfolio.js
contact.js

/styles
globals.scss ← ONLY color variables, typography scale, breakpoints, resets
\_variables.scss ← All SCSS variables (colors, spacing, fonts, transitions)
\_mixins.scss ← Responsive mixins, flex/grid helpers
\_typography.scss ← Font imports and base type styles

---

## 🎨 STYLING RULES

1. **globals.scss** defines ONLY:
   - CSS custom properties (--color-primary, --color-secondary, etc.)
   - SCSS variables ($primary, $secondary, $accent, $dark, $light, $gray)
   - Base reset and body font
   - Typography scale variables

2. **Color theme** (dark, editorial aesthetic — adapt to a graphic designer's brand):
   - $primary: #0A0A0A (near black)
   - $secondary: #F5F0E8 (warm cream)
   - $accent: #FF4D1C (electric orange-red)
   - $accent-alt: #C8F542 (electric lime — use sparingly)
   - $gray-100: #1A1A1A
   - $gray-200: #2D2D2D
   - $gray-500: #888888
   - $gray-800: #CCCCCC
   - $white: #FFFFFF

3. Every component uses **CSS Modules** (_.module.scss) and imports variables via:
   @use '@/styles/variables' as _;
   @use '@/styles/mixins' as \*;

4. **NO inline styles**. No Tailwind. No CSS-in-JS.

5. Use **CSS custom properties** in globals.scss so color theme is themeable from root.

---

## 📦 CONSTANTS ARCHITECTURE

All site content lives in /constants — zero hardcoded strings in components.

Each constants file exports a named object. Example structure:

// constants/home.js
export const HOME = {
hero: {
greeting: "Hello, I'm",
name: "Sania Bahar",
title: "Graphic Designer",
subtitle: "I craft visual identities that make brands impossible to ignore.",
cta_primary: { label: "View My Work", href: "/portfolio" },
cta_secondary: { label: "Let's Talk", href: "/contact" },
stats: [
{ value: "8+", label: "Years Experience" },
{ value: "120+", label: "Projects Delivered" },
{ value: "40+", label: "Happy Clients" },
]
},
featured_work: { ... },
testimonials: [ ... ],
clients: [ ... ]
}

// constants/index.js — re-exports everything
export { NAVIGATION } from './navigation'
export { HOME } from './home'
export { ABOUT } from './about'
export { SERVICES } from './services'
export { PORTFOLIO } from './portfolio'
export { CONTACT } from './contact'

Populate ALL constants with realistic, professional content for a graphic designer
named "Sania Bahar" — branding, print design, UI/UX, illustration, motion graphics.

---

## ⚙️ COMMON COMPONENTS SPEC

### Button

Props: label, href, variant ('primary'|'secondary'|'ghost'|'icon'), size ('sm'|'md'|'lg'),
onClick, icon, disabled, type
Behavior: Renders <a> if href provided, else <button>.
Variants: primary (filled accent), secondary (outlined), ghost (text only)
Animation: Magnetic hover effect, smooth scale + color transition

### Card

Props: title, description, image, tag, href, variant ('default'|'featured'|'minimal')
Behavior: Clickable if href provided
Animation: Subtle lift on hover, image scale, overlay reveal

### Input

Props: label, name, type, placeholder, value, onChange, error, required, disabled
Behavior: Floating label animation on focus/fill
Style: Minimal underline style with animated border

### Select

Props: label, name, options ([{value, label}]), value, onChange, error, required
Behavior: Custom styled dropdown (not native), keyboard accessible
Animation: Smooth open/close with option stagger

---

## ✨ ANIMATION REQUIREMENTS

Use CSS animations and transitions throughout. No heavy libraries required (Framer Motion
optional if already in project). Implement:

1. **Page transitions**: Fade + slight translateY on page load for main content
2. **Scroll reveals**: Use Intersection Observer API in a custom hook (useInView.js) to
   add 'is-visible' class — animate with CSS transforms
3. **Hero section**:
   - Staggered text reveal (each word/line animates in sequence)
   - Floating/parallax background element
   - Animated cursor or decorative shape
4. **Portfolio grid**: Items stagger in on scroll, hover shows project details overlay
5. **Navigation**:
   - Smooth active state indicator
   - Mobile: Full-screen menu with staggered link reveal
   - Scroll behavior: transparent → solid background on scroll
6. **Buttons**: Magnetic hover (slight movement toward cursor using JS), fill animation
7. **Counter animation**: Stats numbers count up when scrolled into view
8. **Marquee**: Scrolling client logo strip or skills ticker
9. **Form inputs**: Focus animations, validation state transitions

---

## 📱 RESPONSIVE BREAKPOINTS

Define in \_variables.scss and use via mixins:

$bp-mobile: 480px
$bp-tablet: 768px  
$bp-laptop: 1024px
$bp-desktop: 1280px
$bp-wide: 1600px

// \_mixins.scss
@mixin mobile { @media (max-width: #{$bp-mobile}) { @content; } }
@mixin tablet { @media (max-width: #{$bp-tablet}) { @content; } }
@mixin laptop { @media (max-width: #{$bp-laptop}) { @content; } }
@mixin desktop { @media (min-width: #{$bp-desktop}) { @content; } }

Mobile-first approach. Every component must be fully functional on 320px width.

---

## 📄 PAGE-BY-PAGE REQUIREMENTS

### HOME PAGE

Sections (in order):

1. HeroSection — Full-viewport hero with designer name, title, animated tagline,
   dual CTA buttons, and a bold typographic/visual element (large outlined text,
   geometric shape, or split-layout with a stylized photo placeholder)
2. FeaturedWork — 3 highlighted portfolio pieces in an asymmetric grid layout
3. ClientLogos — Horizontal marquee of client/brand logos (use placeholder SVG shapes)
4. Testimonials — 2–3 client testimonials in a horizontal scroll or card layout

### ABOUT PAGE

Sections:

1. AboutHero — Personal intro with photo placeholder, headline, and 2-3 sentence bio
2. Skills — Visual skill display (progress bars or tag cloud) for: Brand Identity,
   Typography, Print Design, UI/UX, Illustration, Motion Graphics, Figma, Adobe Suite
3. Experience — Timeline of work experience and education

### SERVICES PAGE

Sections:

1. ServicesHero — Bold headline + subtext about design philosophy
2. ServicesList — 4–6 services as cards: Brand Identity, Print Design,
   Packaging Design, UI/UX Design, Motion Graphics, Art Direction
   Each card: icon (SVG), title, description, list of deliverables
3. Pricing — 3 pricing tiers (Starter, Studio, Enterprise) with feature lists
   and CTA buttons

### PORTFOLIO PAGE

Sections:

1. PortfolioHero — Category filter headline
2. PortfolioFilter — Filter buttons: All / Branding / Print / Digital / Motion
3. PortfolioGrid — Masonry or asymmetric grid of 9–12 portfolio items
   Each item: image placeholder, project name, category, hover overlay with
   "View Project" CTA

### CONTACT PAGE

Sections:

1. ContactHero — Headline ("Let's create something remarkable")
2. ContactForm — Full form with: Name (Input), Email (Input),
   Project Type (Select), Budget Range (Select), Message (textarea), Submit (Button)
   Client-side validation with error states
3. ContactInfo — Email, Phone, Location, Social links (Behance, Dribbble, LinkedIn, Instagram)

---

## 🔧 TECHNICAL REQUIREMENTS

1. **Next.js 14+** with App Router
2. **Sass** (sass package) — no styled-components, no Tailwind
3. All images use Next.js `<Image>` component with placeholder="blur" where applicable
4. Use `<Link>` from next/link for all internal navigation
5. Active nav link detection using `usePathname()` from next/navigation
6. Custom hooks in /hooks:
   - useInView.js — Intersection Observer for scroll animations
   - useScrollPosition.js — for header transparency effect
   - useMagneticEffect.js — for magnetic button hover
7. All font imports via next/font (Google Fonts) — suggested pairing:
   Display: "Syne" (bold, geometric) + Body: "DM Sans" (clean, modern)
   OR: "Bebas Neue" + "Manrope" — choose what fits the aesthetic
8. SEO: Each page exports metadata object with title, description
9. No TypeScript required — plain JSX throughout
10. package.json should include: next, react, react-dom, sass
    Optional: gsap (for advanced animations if needed)

---

## 🚀 DELIVERABLES

Generate ALL files completely — no placeholders, no "// add content here" comments.
Every component must be fully implemented with:

- Complete JSX structure
- Complete SCSS styles
- All content sourced from constants
- Animations wired up
- Responsive styles included

Start with this order:

1. package.json + next.config.js
2. /styles/ (globals.scss, \_variables.scss, \_mixins.scss, \_typography.scss)
3. /constants/ (all files)
4. /hooks/ (all custom hooks)
5. /components/common/ (Button, Card, Input, Select)
6. /components/layout/ (Header, Footer)
7. /components/home/ → /components/about/ → /components/services/
   → /components/portfolio/ → /components/contact/
8. /app/ (layout.jsx + all page.jsx files)

The final result must be a site that a professional graphic designer would be
PROUD to show clients — not a template, but a distinctive creative statement.
