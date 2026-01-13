# Landing Page - Web Design + Vibe Coding

A modern, responsive landing page built with Next.js 14, React, and Tailwind CSS for web design and vibe coding services in NYC.

## Features

- ✅ Fully responsive design (mobile-first)
- ✅ Professional, minimal, clean layout
- ✅ Bright accent colors (cyan/teal theme)
- ✅ SEO optimized with metadata and structured data
- ✅ Smooth scroll navigation
- ✅ Interactive FAQ accordion
- ✅ All sections from structure.md implemented

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles
├── components/         # All section components
├── ui/                 # Reusable UI components (Button, Card)
└── structure.md        # Content structure reference
```

## Customization

### Update Contact Email

Edit `components/FinalCTA.tsx` and replace `you@yourdomain.com` with your email.

### Change Accent Colors

Edit `tailwind.config.ts` to modify the accent color scheme.

## Sections Included

1. Hero section with H1 and CTAs
2. Social proof strip
3. Problem/Stakes section
4. Value proposition (3 pillars)
5. Services grid
6. Why You (differentiation)
7. Industry-specific sections (Real Estate, Legal, Finance)
8. Proof/Outcomes
9. Process (5-step timeline)
10. Pricing (3 tiers + add-ons + support)
11. FAQ accordion
12. Final CTA
13. Footer with SEO links
