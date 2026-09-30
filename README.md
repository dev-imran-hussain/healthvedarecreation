# Health Veda Organics — Production-Ready Luxury Redesign & Recreation

A high-performance, modular, and production-ready editorial redesign of [Health Veda Organics](https://healthvedaorganics.com) inspired by modern luxury wellness and clinical precision.

## 🌿 Overview
This project completely reimagines the digital presence of Health Veda Organics, blending botanical purity with clinical science, organic earth-tone palettes, and modular production architecture.

### Key Highlights:
- **Modular Code Architecture:** Clean separation of concerns with modular CSS (`css/`) and modern ES modules (`js/`).
- **Production Bundling:** Configured with [Vite](https://vitejs.dev/) for instant HMR development and production minification/optimization (`npm run build`).
- **Editorial Brand Storytelling:** Fully custom-built Homepage (`index.html`) and About Us Manifesto (`about.html`).
- **Founder Spotlight:** Dedicated showcase for Founder & MD **Mr. Abhishek Sharma**, highlighting the brand's Indore roots and mission for 100% plant-based wellness.
- **Interactive Supplement Ingredients Facts:** Clean, responsive clinical table featuring all 13 active ingredients with %RDA, botanical sources, and usage protocol.
- **Integrated Shopping Cart Drawer:** Fully synchronized cart with free express shipping progress bar (`₹499` threshold) and `localStorage` persistence across all pages.
- **PWA & Production SEO:** Rich OpenGraph, Twitter cards, `sitemap.xml`, `robots.txt`, and `site.webmanifest`.
- **Mobile-First Experience:** Custom touch-scrolling goal filters, animated hamburger navigation drawer, and fluid typography.

---

## 📁 Modular Project Structure
```text
├── index.html           # Main editorial storefront & interactive showcase
├── about.html           # Brand manifesto, Indore roots & Founder spotlight
├── style.css            # Master CSS entry point (imports modular stylesheets)
├── script.js            # Master JS entry point (orchestrates ES modules)
│
├── css/                 # Modular Component Styles
│   ├── variables.css    # Design tokens, palette, typography, border-radius
│   ├── base.css         # CSS reset, containers, announcement bar
│   ├── header.css       # Sticky header, desktop nav, mobile drawer
│   ├── hero.css         # Atmospheric hero, rolling hills, bottle composition
│   ├── metrics.css      # Trust metrics & performance statistics
│   ├── categories.css   # Shop Goals cards & hover states
│   ├── products.css     # Filter controls, catalog cards, price rows
│   ├── science.css      # Science depth & clinical Supplement Facts table
│   ├── founder.css      # Founder Spotlight, Manifesto, Pillars, Timeline
│   ├── certifications.css # Gold standard assurance certificates
│   ├── social-proof.css # Customer reviews, press marquee, journal cards
│   ├── cart.css         # Slide-over cart drawer & shipping meter
│   ├── modal.css        # Quick Look product modal popup
│   ├── footer.css       # Pre-footer CTA, footer links, floating WhatsApp
│   └── responsive.css   # Comprehensive media queries (1200px, 992px, 768px, 480px)
│
├── js/                  # Modular JavaScript (ES Modules)
│   ├── cart.js          # Cart state, localStorage sync, shipping meter, drawer UI
│   ├── products.js      # Goal filtering & Quick Look modal system
│   ├── navigation.js    # Sticky nav scroll, mobile drawer toggle, accessibility
│   └── animations.js    # Desktop subtle pointer parallax & reduced motion
│
├── site.webmanifest     # PWA Progressive Web App manifest
├── sitemap.xml          # Search engine sitemap
├── robots.txt           # Search crawler directives
├── favicon.svg          # Botanical luxury favicon
├── package.json         # Development scripts and Vite configuration
├── vite.config.js       # Multi-page build configuration
└── health-veda-organics-vegan-products-be-vegan.assets/ # High-res photography & assets
```

---

## 🚀 Getting Started

### Development Mode (with Live HMR):
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

### Production Build:
To bundle, minify, and optimize all assets into `dist/`:
```bash
npm run build
```

### Preview Production Build:
```bash
npm run preview
```

### Direct Static Hosting:
The project is also completely functional as static HTML/CSS/JS without build tools and can be hosted directly on **GitHub Pages**, **Vercel**, or **Netlify**.
