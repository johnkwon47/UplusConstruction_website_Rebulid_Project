# UPLUS Construction — Design System & Section Guide

## 1. Design System Summary

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `warm-white` | `#FAF9F7` | Primary background |
| `off-white` | `#F5F3EF` | Alternate section backgrounds, form containers |
| `soft-stone` | `#E8E4DD` | Dividers, borders, decorative elements |
| `light-gray` | `#D4D0C8` | Secondary borders, decorative numbers |
| `warm-gray` | `#9B9590` | Muted text, micro labels, captions |
| `medium-gray` | `#6B6560` | Body text, secondary content |
| `charcoal` | `#3A3632` | Strong body text, active UI elements |
| `deep-charcoal` | `#2A2622` | Headlines, primary text |
| `near-black` | `#1A1816` | Dark section backgrounds (credentials, hero) |
| `accent-olive` | `#5C6B54` | Primary accent — section labels, tags, highlights |
| `accent-bronze` | `#8C7B6B` | Secondary accent (reserved for special moments) |
| `accent-steel` | `#4A5568` | Tertiary accent (reserved) |

### Typography Scale

| Class | Size | Weight | Use Case |
|-------|------|--------|----------|
| `heading-display` | clamp(2.5rem–4.5rem) | 300 | Hero main headline |
| `heading-xl` | clamp(2rem–3.5rem) | 300 | Section headlines |
| `heading-lg` | clamp(1.5rem–2.5rem) | 400 | Sub-section titles, mobile nav |
| `heading-md` | clamp(1.25rem–1.75rem) | 400 | Card titles, sub-headings |
| `text-body-lg` | clamp(1rem–1.125rem) | 400 | Lead paragraphs |
| `text-body` | clamp(0.875rem–1rem) | 400 | Standard body text |
| `micro-label` | 0.6875rem | 500 | Section labels, tags (uppercase, letter-spaced) |

**Key Typography Rules:**
- Korean headlines use font-weight 300 for elegance
- English micro-labels are always uppercase with 0.15em letter-spacing
- Line-height: 1.1–1.3 for headlines, 1.7 for body
- Maximum paragraph width: ~600px for readability

### Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `spacing-section` | 160px | Top/bottom padding for desktop sections |
| `spacing-section-sm` | 100px | Compact section spacing |
| Container max-width | 1400px | Maximum content width |
| Container padding | 24px–80px | Responsive horizontal padding |

### Buttons

| Variant | Style | Usage |
|---------|-------|-------|
| `primary` | Solid deep-charcoal, warm-white text | Main CTAs |
| `secondary` | Transparent with charcoal border | Secondary actions |
| `outline` | Transparent with white border | CTAs over dark backgrounds |

All buttons: `px-8 py-4`, 500ms ease transitions, no border-radius (sharp/architectural).

### Motion

- **Reveal**: Fade + slide (40px), 700ms, cubic-bezier(0.25, 0.1, 0.25, 1)
- **Stagger**: Children animate sequentially with 60–100ms delay
- **Image hover**: scale(1.02–1.03), 600–700ms ease
- **Navigation**: 800ms entry, 400ms mobile menu, 500ms color transitions
- **Scroll-triggered**: IntersectionObserver with -80px margin, fire once

---

## 2. Section-by-Section Rationale

### Header
**Rationale:** Minimal transparent header over the hero creates an immersive first impression. The sticky behavior with a subtle background transition (transparent → frosted white) maintains navigation access without visual weight. Logo uses lightweight typography with a secondary color for "Construction" to establish brand hierarchy.

**Responsive:** Hamburger menu on mobile with full-screen overlay and staggered link animations for a premium mobile experience.

### Hero
**Rationale:** Full-screen dark hero with bold Korean typography creates an immediate emotional impact. The gradient overlay ensures text readability over any future imagery. The micro-label "PRECISION ENGINEERING & CONSTRUCTION" positions the brand in English for bilingual audiences. Two CTAs with different visual weights guide action priority.

**Copy strategy:** The headline "정밀한 설계와 시공으로, 산업 공간의 기준을 다시 만듭니다" conveys precision, authority, and innovation without generic buzzwords.

### Brand Introduction (About)
**Rationale:** Asymmetric two-column layout with image on the right creates editorial rhythm. The copy balances technical credibility (HACCP, GMP, cleanroom, turnkey) with an elevated brand voice. Metrics strip below the divider provides quantifiable trust indicators at a glance.

**Design choice:** The 4/5 aspect ratio portrait image placeholder breaks the typical corporate landscape-image convention, adding architectural portfolio energy.

### Services (What We Do)
**Rationale:** Three service pillars presented as alternating text-image compositions rather than equal cards. This editorial approach gives each service category breathing room and visual hierarchy. The alternating direction (left/right) creates visual rhythm that keeps the reader engaged through a long section.

**Capability lists** use minimal dot indicators instead of icons, maintaining the restrained aesthetic.

### Industry Expertise
**Rationale:** Row-based layout with horizontal segmentation communicates breadth and structure. Each industry gets equal treatment with a tag, bilingual title, description, and image — communicating strategic coverage without visual hierarchy that might alienate certain sectors.

**Border-based** dividers replace cards, maintaining the editorial feel and avoiding a "grid of boxes" template look.

### Portfolio (Featured Projects)
**Rationale:** This is the site's premium showcase. Large image-first cards with varied aspect ratios (21/9 for "large" projects, 4/3 for standard) create a masonry-like editorial layout. The hover interactions (subtle zoom + overlay) invite exploration without being flashy.

**Information architecture:** Sector tag → Title → Type → Summary creates a clear scanning hierarchy for B2B decision-makers evaluating relevant experience.

### Process
**Rationale:** Six-step grid with oversized decorative step numbers creates rhythm and visual interest. The grid layout (3×2 on desktop) with border-based separation feels more architectural than a typical horizontal timeline. Each step is concise — B2B buyers want to see systematic capability, not lengthy explanations.

**Numbering style:** `font-extralight` at 7xl in soft-stone color creates subtle background texture that reads as confident and established.

### Credentials & Trust
**Rationale:** Dark section background (deep-charcoal) creates visual contrast and signals gravity/authority. The three-column layout separates certifications, awards, and compliance into clear categories. Left-border accent on each item creates a clean vertical rhythm.

**Tone:** Restrained presentation of credentials speaks louder than flashy award displays. The dark background treatment is reserved for this section and the hero, creating visual bookends of trust.

### Contact
**Rationale:** Two-column layout with company information on the left and the form on the right. The form uses an off-white card background for subtle elevation. Bottom-border-only inputs maintain the minimal aesthetic while remaining fully functional.

**Form fields:** Strategically chosen to capture qualified B2B leads: name, company, email, phone, project type (dropdown), and open description. Not too many fields, not too few.

### Footer
**Rationale:** Dark complementary section (near-black) with organized sitemap links. The brand mark repeats at full size for visual anchoring. Contact information is easily scannable. Company registration details satisfy Korean business website requirements.

---

## 3. Recommended Image Direction

### Hero
- **Style:** Cinematic wide-angle architectural photography
- **Subject:** Industrial facility exterior at dusk or dawn, modern clean lines
- **Mood:** Dramatic lighting, calm industrial sophistication
- **Color:** Naturally muted — concrete, steel, glass, twilight sky
- **Resolution:** Minimum 2560×1440, landscape orientation

### About Section (Brand Intro)
- **Style:** Editorial interior architectural photography
- **Subject:** Completed facility interior — corridor, lobby, or controlled environment
- **Mood:** Clean, precise, well-lit, human-scale perspective
- **Color:** Neutral tones — white walls, soft lighting, minimal color
- **Aspect:** 4:5 portrait orientation

### Services — Engineering
- **Subject:** HVAC ductwork detail, mechanical room, system schematic overlaid
- **Mood:** Technical precision, visible complexity made elegant
- **Style:** Close-up to medium shot, shallow depth of field

### Services — Construction
- **Subject:** Workers installing cleanroom panels, mid-construction interior
- **Mood:** Active but controlled, professional team at work
- **Style:** Medium shot, natural site lighting

### Services — Architectural Design
- **Subject:** Architectural blueprint or 3D render of facility exterior
- **Mood:** Future-forward, planned, intentional
- **Style:** Overhead or isometric view, conceptual

### Industry — Pharmaceutical
- **Subject:** Sterile white cleanroom corridor, airlock entry, production line
- **Color:** White-dominant with stainless steel accents

### Industry — Food & Beverage
- **Subject:** HACCP-certified food processing interior, stainless equipment
- **Color:** Clean whites, stainless steel, subtle warm lighting

### Industry — Electronics
- **Subject:** Semiconductor cleanroom with yellow safe-lights
- **Color:** Yellow/amber tones in controlled environment

### Industry — Logistics
- **Subject:** Large-scale cold storage warehouse, automated racking
- **Color:** Cool blue-gray tones, industrial scale

### Industry — Medical
- **Subject:** Hospital operating room, laminar flow ceiling
- **Color:** Clinical whites with subtle blue tones

### Portfolio Projects
- **Style:** Professional project documentation photography
- **Subject:** Completed facilities — exteriors and key interiors
- **Mood:** Pride of completion, precision demonstrated
- **Rule:** Each image should clearly show the quality of construction and finishing
- **Large projects:** 21:9 cinematic crop for hero-level impact
- **Standard projects:** 4:3 crop for detail visibility

### Contact Section Map
- **Style:** Muted/desaturated interactive map (Mapbox/Google Maps with custom styling)
- **Color:** Match the warm-gray palette, no bright map colors

---

## 4. Component Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens + base styles
│   ├── layout.tsx           # Root layout with fonts + metadata
│   └── page.tsx             # Main homepage assembly
└── components/
    ├── motion.tsx           # Reveal, StaggerContainer, StaggerItem, ParallaxImage
    ├── ui.tsx               # SectionLabel, Container, Divider, PremiumButton
    ├── Header.tsx           # Sticky transparent header + mobile menu
    ├── Hero.tsx             # Full-screen hero with CTAs
    ├── About.tsx            # Brand introduction + metrics
    ├── Services.tsx         # Three service pillars, editorial layout
    ├── Industries.tsx       # Five industry sectors, row-based
    ├── Portfolio.tsx        # Featured projects, card grid
    ├── Process.tsx          # Six-step turnkey workflow
    ├── Credentials.tsx      # Certs, awards, compliance (dark section)
    ├── Contact.tsx          # Contact info + inquiry form
    └── Footer.tsx           # Sitemap, brand, legal
```

## 5. Next Steps for Production

1. **Replace image placeholders** with professional photography per the art direction notes above
2. **Add real company data** — phone numbers, addresses, registration numbers
3. **Implement form backend** — connect the contact form to an email service or CRM
4. **Add Naver/Kakao Map** integration with custom muted styling for the contact section
5. **SEO optimization** — structured data (JSON-LD), Open Graph tags, sitemap.xml
6. **Performance** — next/image optimization, lazy loading, font subsetting for Korean characters
7. **Analytics** — Google Analytics 4 or similar tracking
8. **Multilingual** — Implement KR/EN language switching with next-intl or similar
9. **Portfolio detail pages** — Expand from cards to individual project case study pages
10. **CMS integration** — Connect portfolio and news sections to a headless CMS (Sanity, Strapi, etc.)
