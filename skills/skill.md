---
description: A detailed design and implementation skill for recreating
  the visual language, layout system, component structure, responsive
  behavior, and interaction patterns of the provided premium
  wellness/supplement landing-page reference.
name: premium-wellness-landing-page
---

# Premium Wellness Landing Page --- Design & Structure Skill

## 1. Purpose

Use this skill when building a premium wellness, supplement, nutrition,
skincare, lifestyle, or health-product landing page inspired by the
supplied visual reference.

The reference uses a **cinematic editorial-commerce aesthetic** rather
than a conventional ecommerce layout. The page feels like a product
campaign displayed inside a large desktop monitor:

-   muted sage/olive-green environment
-   oversized editorial typography
-   central 3D product hero
-   atmospheric clouds and rolling hills
-   floating product capsules
-   layered glass/solid information cards
-   restrained navigation
-   strong negative space
-   premium wellness branding
-   asymmetrical composition
-   subtle motion and depth

The goal is to reproduce the **design system and composition
principles**, not blindly copy every pixel.

------------------------------------------------------------------------

# 2. Core Visual Direction

## Design keywords

The implementation should consistently communicate:

**Premium + Natural + Scientific + Calm + Modern + Editorial +
Cinematic + Minimal**

Avoid making the page look like:

-   a generic Shopify product page
-   a medical dashboard
-   a crowded supplement store
-   a generic SaaS landing page
-   an overly colorful health website
-   a template with repeated rectangular sections

The page should feel closer to a **luxury wellness campaign** than a
standard product catalog.

------------------------------------------------------------------------

# 3. Visual Hierarchy

The reference has a very clear hierarchy.

### Priority 1 --- Product

The central product bottle is the visual anchor.

The viewer should immediately understand:

> There is a premium wellness product at the center of the experience.

### Priority 2 --- Brand/message

Large headline typography establishes the brand atmosphere.

Example structure:

``` text
DAILY HEALTH
        Simple
```

The exact wording can change for another product, but the typography
should remain oversized and editorial.

### Priority 3 --- Supporting proof

Small cards communicate:

-   product benefit
-   formula/science
-   brand story
-   product discovery
-   clinical/scientific support

### Priority 4 --- Navigation and CTA

Navigation is deliberately quiet.

Primary CTA:

``` text
Discover More
```

Secondary commerce action:

``` text
Cart
```

Do not allow navigation to compete with the product.

------------------------------------------------------------------------

# 4. Overall Page Composition

The reference is based on a large hero viewport.

Recommended structure:

``` text
BODY
└── Main
    └── Hero Section
        ├── Background atmosphere
        │   ├── Sage gradient
        │   ├── Clouds
        │   ├── Rolling hills
        │   └── Soft glow
        │
        ├── Navigation
        │   ├── Logo
        │   ├── Home
        │   ├── Ingredients
        │   ├── Products
        │   ├── Science
        │   ├── Reviews
        │   ├── Discover More
        │   └── Cart
        │
        ├── Editorial headline
        │   ├── Large primary line
        │   └── Large secondary line
        │
        ├── Product composition
        │   ├── Main bottle
        │   ├── Floating capsules
        │   └── Grass/foreground
        │
        ├── Floating information cards
        │   ├── Latest Blend
        │   ├── Product support card
        │   ├── About card
        │   └── Clinical/science card
        │
        └── Bottom benefit statement
```

------------------------------------------------------------------------

# 5. Hero Section

## 5.1 Hero dimensions

Desktop:

``` css
min-height: 100svh;
height: 100vh;
position: relative;
overflow: hidden;
```

For a product campaign, the hero should occupy almost the entire initial
viewport.

Use:

``` css
overflow: hidden;
```

because the visual composition intentionally extends beyond normal
document boundaries.

Do not constrain the hero to a narrow centered container.

------------------------------------------------------------------------

# 6. Background

The background is one of the most important parts of the design.

## 6.1 Base color

Use a muted natural green.

Suggested palette:

``` text
Primary sage:
#789187

Dark green:
#163C31

Deep forest:
#0D2A22

Soft sage:
#AFC5B8

Pale green:
#DCE9DF

Warm white:
#F4F5EF

Copper accent:
#A66F5B
```

These values are starting points, not strict requirements.

------------------------------------------------------------------------

## 6.2 Background gradient

Create atmospheric depth rather than using one flat green.

Example:

``` css
background:
  radial-gradient(
    circle at 72% 35%,
    rgba(220, 239, 226, 0.38),
    transparent 28%
  ),
  linear-gradient(
    180deg,
    #789187 0%,
    #829E8F 48%,
    #6D8778 100%
  );
```

The center-right area should have a subtle light source.

The background must remain quiet enough for the white typography and
dark bottle to remain readable.

------------------------------------------------------------------------

# 7. Landscape Layer

The lower section contains rolling green hills.

The hills should not look photorealistic unless the product artwork
demands it.

Recommended options:

1.  SVG layered hills
2.  CSS curved shapes
3.  AI-generated landscape image
4.  transparent PNG landscape
5.  WebP background asset

Layer the landscape.

Example:

``` text
Background
    ↓
Distant hills
    ↓
Mid hills
    ↓
Foreground hill
    ↓
Grass around bottle
    ↓
Product
```

Each layer should have a slightly different contrast.

------------------------------------------------------------------------

# 8. Clouds

Clouds provide softness and depth.

Position several cloud groups:

``` text
Top-left
Middle-left
Top-right
Bottom-left
```

Clouds should be:

-   soft
-   slightly desaturated
-   partially transparent
-   behind the typography/product
-   visually subtle

Do not use highly detailed cartoon clouds.

Suggested CSS treatment:

``` css
opacity: 0.55;
filter: blur(0.3px);
```

For a premium look, use realistic or softly illustrated clouds rather
than obvious stock-cloud icons.

------------------------------------------------------------------------

# 9. Navigation

The navigation sits at the top.

## Layout

``` text
[Logo]                [Links]                    [CTA] [Cart]
```

Desktop example:

``` text
Logo
    Home
    Ingredients
    Products
    Science
    Reviews
                    Discover More
                    Cart
```

Use CSS Grid:

``` css
grid-template-columns: auto 1fr auto;
```

The center navigation can be aligned independently from the logo.

------------------------------------------------------------------------

# 10. Logo

The logo consists of:

-   compact geometric symbol
-   wordmark
-   uppercase or small-cap typography

The mark should be simple.

Example conceptual structure:

``` html
<a class="brand">
  <span class="brand-mark"></span>
  <span class="brand-name">NUTRIVIA</span>
</a>
```

Recommended styling:

``` css
font-size: 0.9rem;
letter-spacing: 0.04em;
font-weight: 500;
```

Keep the logo relatively small.

The product is more important than the logo.

------------------------------------------------------------------------

# 11. Navigation Typography

Use a clean modern sans-serif.

Good font categories:

-   Inter
-   Manrope
-   Geist
-   DM Sans
-   Helvetica Neue
-   Satoshi
-   Neue Montreal-like alternatives

Navigation should feel lightweight.

Suggested:

``` css
font-size: 13px;
font-weight: 400;
letter-spacing: -0.01em;
```

Avoid bold navigation.

------------------------------------------------------------------------

# 12. Navigation Buttons

The reference uses restrained rectangular controls.

### Discover button

Dark translucent/green-gray button.

``` text
Discover More
```

Characteristics:

-   medium height
-   modest horizontal padding
-   no pill shape
-   subtle transparency
-   minimal radius

Example:

``` css
padding: 0.75rem 1rem;
background: rgba(31, 65, 55, 0.5);
color: white;
```

### Cart button

The cart is stronger and greener.

Use:

``` css
background: #087C2E;
color: white;
```

The exact color can be adjusted to match the brand.

Do not make buttons excessively rounded.

The reference is more editorial than SaaS.

------------------------------------------------------------------------

# 13. Hero Typography

Typography is a defining characteristic.

## Primary heading

Use extremely large text.

Approximate desktop size:

``` css
font-size: clamp(5rem, 10vw, 11rem);
```

Possible font weight:

``` css
font-weight: 300;
```

or:

``` css
font-weight: 400;
```

The typography should be light and spacious.

------------------------------------------------------------------------

# 14. Editorial Headline Composition

Do not treat the headline as a conventional centered heading.

Instead, create an intentionally oversized composition.

Example:

``` html
<h1>
  <span>DAILY HEALTH</span>
  <span>Simple</span>
</h1>
```

Use independent positioning when necessary:

``` css
.headline-main {
  position: absolute;
  top: 20%;
  left: 3%;
}

.headline-secondary {
  position: absolute;
  top: 55%;
  right: 7%;
}
```

The product should overlap the typography.

This overlap is essential.

------------------------------------------------------------------------

# 15. Text Behind the Product

The bottle partially obscures the headline.

This creates depth:

``` text
Headline
     ↓
Product
     ↓
Floating objects
```

Do not place all content into a simple vertical stack.

The visual target relies heavily on **layering**.

------------------------------------------------------------------------

# 16. Product Bottle

The bottle is the main hero object.

## Position

Desktop:

``` css
position: absolute;
left: 50%;
bottom: 3%;
transform: translateX(-50%);
```

Adjust according to product proportions.

The bottle should be large enough to dominate the composition.

------------------------------------------------------------------------

# 17. Product Scale

Recommended desktop width:

``` css
width: clamp(250px, 25vw, 430px);
```

If using a transparent PNG/WebP:

``` css
object-fit: contain;
```

Do not stretch the image.

Maintain original aspect ratio.

------------------------------------------------------------------------

# 18. Product Depth

The bottle should have visual depth.

If the source product image is flat, add subtle effects:

``` css
filter:
  drop-shadow(0 30px 35px rgba(0,0,0,0.22));
```

Avoid excessive glow.

The reference uses natural cinematic lighting rather than neon effects.

------------------------------------------------------------------------

# 19. Product Cap

The cap has a contrasting warm metallic/copper tone.

This creates an important color balance:

``` text
Green environment
+
Dark green bottle
+
Warm copper cap
+
White typography
```

The warm accent should be limited to the product.

Do not repeat copper everywhere.

------------------------------------------------------------------------

# 20. Floating Capsules

Capsules are used as visual storytelling elements.

They appear to float around the bottle.

Example positions:

``` text
Capsule 1 → upper-right
Capsule 2 → left-middle
Capsule 3 → lower-right
```

Use absolute positioning.

Example:

``` css
.capsule {
  position: absolute;
  width: 50px;
  transform: rotate(-25deg);
}
```

Each capsule should have a different:

-   rotation
-   scale
-   position
-   depth
-   animation delay

------------------------------------------------------------------------

# 21. Capsule Animation

If implementing motion:

``` text
float
rotate
slight parallax
```

Use slow animation.

Example:

``` css
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(-20deg);
  }

  50% {
    transform: translateY(-12px) rotate(-16deg);
  }
}
```

Duration:

``` css
5s – 8s
```

Use different delays.

Avoid fast movement.

The experience should feel calm.

------------------------------------------------------------------------

# 22. Grass / Foreground Product Integration

The bottom of the bottle blends into natural grass.

This prevents the product from looking like it was simply placed on top
of the background.

Possible implementation:

``` text
Landscape
    +
foreground grass PNG/SVG
    +
product bottle
```

Layer ordering:

``` css
.landscape {
  z-index: 1;
}

.grass {
  z-index: 3;
}

.product {
  z-index: 4;
}

.capsules {
  z-index: 5;
}
```

Some grass can overlap the lower bottle edge.

This creates realistic integration.

------------------------------------------------------------------------

# 23. Floating Information Cards

The reference uses multiple small cards.

These are not normal content sections.

They are part of the hero composition.

Cards should feel like floating editorial annotations.

------------------------------------------------------------------------

# 24. Latest Blend Card

Bottom-left card.

Structure:

``` text
Latest Blend                         ↗

Core Nutrients Your Body
Needs, Every Single Day.

[Product image]
```

Characteristics:

-   pale green background
-   dark text
-   compact dimensions
-   subtle image
-   arrow icon
-   minimal border/radius

Suggested:

``` css
background: #DCE9DF;
color: #18231F;
```

------------------------------------------------------------------------

# 25. Clinical / Science Card

Position near the lower center.

Structure:

``` text
Clinically Backed                    ↗

Formulated with trusted
ingredients...
```

The card should communicate scientific credibility.

Use short copy.

Do not fill the card with paragraphs.

------------------------------------------------------------------------

# 26. Product Benefit Card

Near the bottle, use a small horizontal card:

``` text
[mini product image]

Daily Wellness Support
Energy & Focus Formula
```

This acts as an annotation pointing to the product.

It should be visually quieter than the main CTA.

------------------------------------------------------------------------

# 27. About Us Card

Right side.

Structure:

``` text
[brand/story image]    ▶

Learn how we make wellness
easy and effective for everyone
```

The small play icon indicates video/story content.

This creates an editorial storytelling layer.

------------------------------------------------------------------------

# 28. Bottom Benefit Statement

Place a larger statement in the bottom-right region.

Example:

``` text
Smart supplements made with
natural ingredients to support
your everyday wellness.
```

Use:

-   white text
-   thin vertical divider
-   medium/large font
-   limited line length

Example structure:

``` html
<div class="benefit">
  <span class="benefit-line"></span>
  <p>Smart supplements made with natural ingredients...</p>
</div>
```

------------------------------------------------------------------------

# 29. Color System

Recommended semantic variables:

``` css
:root {
  --bg-sage: #789187;
  --bg-sage-light: #AFC5B8;
  --green-dark: #163C31;
  --green-deep: #0D2A22;
  --green-accent: #087C2E;

  --text-primary: #F4F5EF;
  --text-dark: #17201C;

  --surface-light: #DCE9DF;
  --surface-dark: rgba(26, 55, 46, 0.58);

  --accent-copper: #A66F5B;

  --border-light: rgba(255,255,255,0.18);
}
```

------------------------------------------------------------------------

# 30. Spacing System

Use a consistent spacing scale.

``` text
4px
8px
12px
16px
24px
32px
48px
64px
96px
128px
```

Hero padding:

``` css
padding-inline: clamp(20px, 3vw, 48px);
```

Navigation:

``` css
padding-top: clamp(20px, 3vw, 36px);
```

Do not use random spacing values throughout the implementation.

------------------------------------------------------------------------

# 31. Border Radius

The reference uses mostly sharp or lightly rounded rectangles.

Recommended:

``` text
Small cards: 0–4px
Buttons: 0–2px
Images: 0–4px
```

Avoid:

``` css
border-radius: 9999px;
```

for everything.

The visual language is editorial, not a modern SaaS pill system.

------------------------------------------------------------------------

# 32. Shadows

Use shadows sparingly.

Product:

``` css
filter: drop-shadow(
  0 28px 30px rgba(0,0,0,0.25)
);
```

Cards:

``` css
box-shadow:
  0 12px 30px rgba(20,40,32,0.08);
```

Do not use heavy black shadows.

------------------------------------------------------------------------

# 33. Z-Index Architecture

Use a deliberate layer system.

``` text
0  → base background
1  → clouds
2  → distant landscape
3  → headline
4  → foreground landscape
5  → cards
6  → product
7  → capsules
8  → navigation
9  → interactive overlays
```

Adjust where required by the composition.

The important point is to intentionally control depth.

------------------------------------------------------------------------

# 34. Recommended Component Architecture

For React/Next.js:

``` text
app/
├── page.tsx
├── layout.tsx
├── globals.css
│
components/
├── landing/
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── HeroHeadline.tsx
│   ├── ProductBottle.tsx
│   ├── FloatingCapsule.tsx
│   ├── BenefitCard.tsx
│   ├── BlendCard.tsx
│   ├── ScienceCard.tsx
│   ├── AboutCard.tsx
│   ├── Landscape.tsx
│   ├── Clouds.tsx
│   └── HeroBenefit.tsx
│
public/
├── products/
├── backgrounds/
├── clouds/
├── capsules/
└── icons/
```

Keep each visual layer independently controllable.

------------------------------------------------------------------------

# 35. Next.js Implementation Guidance

For Next.js App Router:

``` tsx
export default function HomePage() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

Use Server Components by default.

Only make components Client Components if they require:

-   animation state
-   pointer interaction
-   scroll state
-   browser APIs
-   event handlers

Example:

``` tsx
"use client";

import { motion } from "framer-motion";
```

Do not add `"use client"` to the entire page unnecessarily.

------------------------------------------------------------------------

# 36. Hero Component Structure

Recommended JSX:

``` tsx
<section className="relative min-h-[100svh] overflow-hidden bg-sage">

  <Landscape />

  <Clouds />

  <Navbar />

  <HeroHeadline />

  <ProductBottle />

  <FloatingCapsule className="capsule-one" />
  <FloatingCapsule className="capsule-two" />
  <FloatingCapsule className="capsule-three" />

  <BlendCard />

  <ScienceCard />

  <AboutCard />

  <BenefitCard />

  <HeroBenefit />

</section>
```

The hero should remain compositionally simple.

------------------------------------------------------------------------

# 37. Responsive Strategy

The desktop screenshot is the primary reference, but the implementation
must work on smaller screens.

## Desktop ≥ 1200px

Use the full composition:

-   huge typography
-   large bottle
-   multiple capsules
-   3--4 cards
-   full navigation
-   landscape
-   floating annotations

------------------------------------------------------------------------

## Tablet 768--1199px

Reduce:

-   heading size
-   bottle size
-   card count
-   capsule size
-   navigation spacing

Potentially hide less-important cards.

------------------------------------------------------------------------

## Mobile \< 768px

Do not simply shrink the desktop composition.

Recompose it.

Suggested structure:

``` text
Logo + Cart
      ↓
Headline
      ↓
Product
      ↓
Primary CTA
      ↓
One or two benefit cards
```

Hide or move decorative elements.

For example:

``` css
@media (max-width: 767px) {
  .desktop-only-card {
    display: none;
  }
}
```

------------------------------------------------------------------------

# 38. Mobile Hero

Recommended mobile order:

``` text
Navbar
Headline
Product
Primary CTA
Short benefit
```

The product should remain immediately visible.

Avoid making the user scroll several screens before seeing the product.

------------------------------------------------------------------------

# 39. Responsive Typography

Use `clamp()`.

Example:

``` css
.hero-title {
  font-size: clamp(
    4rem,
    11vw,
    10rem
  );
}
```

Mobile:

``` css
.hero-title {
  font-size: clamp(
    3rem,
    16vw,
    5rem
  );
}
```

Typography should remain dominant without causing horizontal overflow.

------------------------------------------------------------------------

# 40. Interaction Design

Recommended interactions:

### Navigation hover

``` text
opacity
underline/line reveal
```

Keep transitions around:

``` text
200–300ms
```

### CTA hover

Slight brightness/translation:

``` css
transform: translateY(-1px);
```

### Product

Very subtle scale:

``` text
1 → 1.015
```

### Capsules

Slow floating animation.

### Cards

Subtle:

``` text
translateY(-3px)
```

Do not use aggressive bounce animations.

------------------------------------------------------------------------

# 41. Scroll Animation

Optional.

On first load:

``` text
Background fades in
Headline moves upward slightly
Bottle scales from 0.94 → 1
Cards fade upward
Capsules float into place
```

Example sequence:

``` text
0ms       background
150ms     headline
300ms     product
500ms     capsules
650ms     cards
```

Keep animation short and cinematic.

------------------------------------------------------------------------

# 42. Accessibility

Do not sacrifice accessibility for visual composition.

Every product image:

``` html
alt="Aurelia wellness supplement bottle"
```

Decorative clouds:

``` html
alt=""
aria-hidden="true"
```

Buttons must have readable labels.

Maintain keyboard focus states.

Example:

``` css
:focus-visible {
  outline: 2px solid white;
  outline-offset: 4px;
}
```

Do not depend only on color to communicate interaction.

------------------------------------------------------------------------

# 43. Reduced Motion

Support:

``` css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

The design must still look complete without animation.

------------------------------------------------------------------------

# 44. Image Optimization

For Next.js, use:

``` tsx
import Image from "next/image";
```

Prefer:

``` text
WebP
AVIF
SVG
```

for appropriate assets.

Product PNGs should have transparent backgrounds.

Use:

``` tsx
<Image
  src="/products/bottle.webp"
  alt="Wellness supplement bottle"
  fill
  priority
  sizes="(max-width: 768px) 70vw, 30vw"
/>
```

The hero product should normally use `priority`.

------------------------------------------------------------------------

# 45. Asset Requirements

Ideal assets:

``` text
/product-bottle.webp
/capsule-dark.webp
/cloud-01.webp
/cloud-02.webp
/hills.webp
/grass.webp
/about-wellness.webp
```

Prefer transparent product assets.

Do not embed the entire hero screenshot as one background image if the
goal is a real website.

The composition should be built from separate layers.

------------------------------------------------------------------------

# 46. Do Not Use Screenshot-as-UI

Incorrect implementation:

``` text
background-image: url(full-screenshot.png)
```

This makes:

-   navigation inaccessible
-   text unselectable
-   buttons non-functional
-   responsive behavior poor
-   SEO poor
-   animations impossible

Instead reconstruct:

``` text
background
+
text
+
product
+
cards
+
buttons
```

as actual DOM elements.

------------------------------------------------------------------------

# 47. Typography Rules

Use no more than 2 font families.

Recommended:

``` text
Primary:
Geist / Inter / Manrope

Optional display:
a refined geometric/editorial sans
```

The main headline should use the primary display family.

Avoid decorative serif fonts unless the brand specifically needs them.

------------------------------------------------------------------------

# 48. Content Rules

Copy should be short.

Hero:

``` text
2–5 words
```

Benefit:

``` text
1 short sentence
```

Cards:

``` text
1 heading
+
1–2 short lines
```

The reference is visual-first.

Do not place large paragraphs inside the hero.

------------------------------------------------------------------------

# 49. Product Messaging Pattern

A reusable wellness product messaging system:

### Hero

``` text
[Primary promise]
[Secondary emotional benefit]
```

### Product card

``` text
[Product category]
[Functional benefit]
```

### Science card

``` text
[Proof point]
[Short supporting sentence]
```

### Brand card

``` text
[Brand story]
[Short explanation]
```

### Bottom statement

``` text
[Overall product philosophy]
```

------------------------------------------------------------------------

# 50. Design Tokens

Recommended CSS:

``` css
:root {
  --color-bg: #789187;
  --color-bg-deep: #5E7669;

  --color-green-900: #0D2A22;
  --color-green-800: #163C31;
  --color-green-600: #087C2E;

  --color-white: #F4F5EF;
  --color-white-soft: rgba(244,245,239,.78);

  --color-card: #DCE9DF;
  --color-copper: #A66F5B;

  --radius-card: 3px;
  --radius-button: 2px;

  --shadow-product:
    0 30px 45px rgba(0,0,0,.24);

  --ease-premium:
    cubic-bezier(.22,1,.36,1);
}
```

------------------------------------------------------------------------

# 51. Layout Grid

Use a 12-column conceptual grid.

``` text
1  2  3  4  5  6  7  8  9  10 11 12
```

Possible placement:

``` text
Logo:             1–3
Navigation:       5–9
CTA:              10–12

Headline:         1–8
Product:          5–8
About card:       10–12
Blend card:       1–4
Science card:     4–7
Benefit:          8–12
```

Absolute positioning is acceptable for decorative hero composition, but
maintain an underlying grid.

------------------------------------------------------------------------

# 52. Layered Composition Rule

Every major visual should belong to a depth layer.

Think in terms of:

``` text
DEPTH 0 — Background
DEPTH 1 — Atmosphere
DEPTH 2 — Typography
DEPTH 3 — Landscape
DEPTH 4 — Product
DEPTH 5 — Floating objects
DEPTH 6 — Information cards
DEPTH 7 — Navigation
```

This creates the 3D editorial feel.

------------------------------------------------------------------------

# 53. Visual Balance

The center of the page should contain the strongest visual weight.

The bottle is the center of gravity.

Left side:

-   large typography
-   blend card
-   cloud

Right side:

-   secondary typography
-   about card
-   benefit text

Bottom:

-   landscape
-   cards
-   product grounding

This produces asymmetry without visual instability.

------------------------------------------------------------------------

# 54. Negative Space

Do not fill every area.

Important empty regions should exist around:

-   logo
-   headline
-   bottle
-   capsules
-   cards

Negative space makes the product look expensive.

If the page feels crowded, remove elements before reducing typography.

------------------------------------------------------------------------

# 55. Card Design Rules

Every floating card should have:

``` text
clear hierarchy
short copy
small footprint
one visual cue
one interaction cue if interactive
```

Avoid:

``` text
large shadows
large rounded corners
multiple buttons
long paragraphs
excessive icons
```

------------------------------------------------------------------------

# 56. Icons

Use simple line or geometric icons.

Recommended:

-   arrow ↗
-   play ▶
-   cart
-   menu
-   plus/brand symbol

Icons should be small.

Avoid mixing icon styles.

Use one icon library if possible:

``` text
Lucide
```

or custom SVG.

------------------------------------------------------------------------

# 57. SEO Structure

Even though the visual design is highly artistic, semantic HTML must
remain correct.

Use:

``` html
<header>
<nav />
</header>

<main>
<section aria-labelledby="hero-title">
  <h1 id="hero-title">...</h1>
</section>
</main>
```

Product name can be:

``` html
<h2>
```

for supporting sections.

Use metadata:

``` tsx
export const metadata = {
  title: "Daily Wellness | Premium Supplements",
  description:
    "Premium daily wellness supplements made with carefully selected ingredients."
};
```

------------------------------------------------------------------------

# 58. Performance Rules

Avoid excessive JavaScript.

Prefer:

-   CSS animation
-   static layered images
-   optimized WebP/AVIF
-   Server Components
-   lazy loading for below-fold assets
-   minimal client-side state

Do not use a heavy 3D engine unless the product actually requires
interactive 3D.

The visual can be achieved with layered 2D assets.

------------------------------------------------------------------------

# 59. Optional Advanced Parallax

For premium interactions, add subtle pointer parallax.

Example conceptual layers:

``` text
Clouds      → 0.02x
Landscape   → 0.01x
Headline    → 0.005x
Product     → 0.015x
Capsules    → 0.025x
Cards       → 0.02x
```

Movement should be almost imperceptible.

The user should feel depth rather than notice an animation.

------------------------------------------------------------------------

# 60. Scroll-to-Section Architecture

If the page continues below the hero:

``` text
Hero
↓
Benefits
↓
Ingredients
↓
Product collection
↓
Science
↓
Reviews
↓
CTA
↓
Footer
```

The hero establishes the visual language for all following sections.

Do not switch to an unrelated design system below the fold.

------------------------------------------------------------------------

# 61. Below-the-Fold Design Continuity

Use the same:

-   sage/green palette
-   typography
-   spacing
-   card language
-   copper accent
-   thin borders
-   editorial imagery

Possible sections:

## Benefits

Large statement + 3 benefits.

## Ingredients

Ingredient cards with botanical/scientific visuals.

## Products

Premium product cards.

## Science

Ingredient efficacy/proof layout.

## Reviews

Minimal testimonial cards.

## Final CTA

Large clean green section with product image.

------------------------------------------------------------------------

# 62. Final CTA

Keep the final CTA visually simple.

Example:

``` text
Better daily wellness.

Thoughtfully formulated.
Made for everyday life.

[Explore Products]
```

Use a large product visual.

Do not turn it into a dense ecommerce grid.

------------------------------------------------------------------------

# 63. Design QA Checklist

Before considering the implementation complete, verify:

### Hero

-   [ ] Hero fills the viewport.
-   [ ] Product is immediately visible.
-   [ ] Product is the primary visual anchor.
-   [ ] Headline is oversized.
-   [ ] Headline overlaps/layers with product.
-   [ ] Landscape creates depth.
-   [ ] Clouds are subtle.
-   [ ] Capsules are visible but secondary.

### Navigation

-   [ ] Logo is small.
-   [ ] Navigation is lightweight.
-   [ ] CTA is visible.
-   [ ] Cart is visually distinct.
-   [ ] Navigation does not compete with product.

### Cards

-   [ ] Cards are compact.
-   [ ] Cards have short copy.
-   [ ] Cards use the same visual system.
-   [ ] Cards appear to float in the composition.
-   [ ] Cards do not cover important product details.

### Product

-   [ ] Product image has correct aspect ratio.
-   [ ] Product shadow is subtle.
-   [ ] Product integrates with landscape.
-   [ ] Floating capsules have varied positions.
-   [ ] Product remains the strongest focal point.

### Typography

-   [ ] Hero typography is oversized.
-   [ ] Font weight is light/medium.
-   [ ] Text contrast is sufficient.
-   [ ] No unnecessary text blocks.
-   [ ] Mobile typography does not overflow.

### Responsive

-   [ ] Desktop composition works at 1440px.
-   [ ] Tablet composition remains balanced.
-   [ ] Mobile is intentionally recomposed.
-   [ ] No horizontal scrollbar.
-   [ ] Cards do not overlap unpredictably.
-   [ ] Product remains visible on mobile.

### Accessibility

-   [ ] Images have appropriate alt text.
-   [ ] Decorative elements are hidden from screen readers.
-   [ ] Buttons are keyboard accessible.
-   [ ] Focus states are visible.
-   [ ] Reduced-motion behavior exists.

### Performance

-   [ ] Hero product is optimized.
-   [ ] Images use modern formats.
-   [ ] No unnecessary client components.
-   [ ] Animations are lightweight.
-   [ ] No giant screenshot used as the entire UI.

------------------------------------------------------------------------

# 64. Common Mistakes to Avoid

## Mistake 1 --- Making everything centered

The reference depends on asymmetry.

Avoid:

``` text
Heading
Product
Cards
Button
```

all centered in one column.

Use intentional overlapping positions.

------------------------------------------------------------------------

## Mistake 2 --- Making cards too rounded

Do not turn every card into a pill.

Use subtle or almost-square corners.

------------------------------------------------------------------------

## Mistake 3 --- Using too many colors

Keep the palette restrained.

Primary:

``` text
sage
dark green
off-white
```

Accent:

``` text
copper
```

------------------------------------------------------------------------

## Mistake 4 --- Making animations too strong

No:

``` text
large zoom
fast floating
bouncing cards
rotating product
```

The reference is calm and premium.

------------------------------------------------------------------------

## Mistake 5 --- Making the background too detailed

The landscape is a supporting layer.

It should never compete with the product.

------------------------------------------------------------------------

## Mistake 6 --- Using generic stock assets

The visual quality depends heavily on:

-   product photography
-   clouds
-   landscape
-   capsule rendering
-   typography

Use high-quality assets.

------------------------------------------------------------------------

## Mistake 7 --- Ignoring the product silhouette

The bottle must remain recognizable.

Do not cover it with:

-   cards
-   excessive grass
-   text
-   capsules
-   effects

------------------------------------------------------------------------

# 65. Recommended Implementation Sequence

Build in this exact order.

### Step 1

Create the hero container.

### Step 2

Add the base sage gradient.

### Step 3

Add landscape.

### Step 4

Add clouds.

### Step 5

Add navigation.

### Step 6

Add oversized headline.

### Step 7

Add product bottle.

### Step 8

Add capsules.

### Step 9

Add foreground grass.

### Step 10

Add floating cards.

### Step 11

Add bottom benefit statement.

### Step 12

Add subtle animations.

### Step 13

Implement mobile composition.

### Step 14

Optimize assets.

### Step 15

Run accessibility and visual QA.

------------------------------------------------------------------------

# 66. Suggested CSS Architecture

Organize styles conceptually:

``` text
globals.css
│
├── reset
├── typography
├── tokens
├── layout
├── hero
├── navigation
├── product
├── atmosphere
├── cards
├── animations
├── responsive
└── accessibility
```

If using Tailwind, preserve the same conceptual structure through
reusable component classes.

------------------------------------------------------------------------

# 67. Suggested Tailwind Strategy

Example:

``` tsx
<section
  className="
    relative
    min-h-[100svh]
    overflow-hidden
    bg-[#789187]
  "
>
```

Do not place hundreds of unrelated utility classes into one component.

Extract repeated patterns.

Example:

``` tsx
const cardBase =
  "absolute bg-[#DCE9DF] text-[#17201C] shadow-sm";
```

For highly art-directed layouts, CSS modules or dedicated CSS can
sometimes be cleaner than enormous utility strings.

------------------------------------------------------------------------

# 68. Art Direction Rule

When there is a conflict between:

``` text
generic UI conventions
```

and:

``` text
the visual composition
```

prioritize the visual composition while preserving:

-   usability
-   accessibility
-   responsive behavior
-   semantic HTML
-   performance

This design should feel **art-directed**, not generated from a generic
component library.

------------------------------------------------------------------------

# 69. Final Design Principle

The most important rule is:

> **Build the page as a layered visual scene, not as a collection of
> stacked UI sections.**

The visual hierarchy should read approximately:

``` text
ATMOSPHERE
    ↓
EDITORIAL TYPOGRAPHY
    ↓
PRODUCT
    ↓
FLOATING OBJECTS
    ↓
EDITORIAL CARDS
    ↓
COMMERCE ACTION
```

The user should first experience the **brand world**, then understand
the **product**, then discover the **supporting information**, and
finally interact with the commerce/navigation controls.

The result should feel:

**natural, premium, calm, cinematic, editorial, modern, and
product-focused.**
