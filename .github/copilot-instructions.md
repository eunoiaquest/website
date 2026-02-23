# Eunoia Quest Landing Page - AI Coding Agent Instructions

## Project Overview
Static marketing landing page for "Eunoia Quest" - a video-gamified assessment platform. Built with Astro and Tailwind CSS. Deployed automatically to GitHub Pages.

## Architecture & Structure

### Core Stack
- **Framework**: Astro (static site generator, zero JS by default)
- **Styling**: Tailwind CSS with custom CSS variables (no component library)
- **Typography**: Quicksand font (Google Fonts, weights: 300/Light, 400/Regular, 500/Medium)
- **Interactivity**: Vanilla JS only (scroll animations, mobile menu, header scroll effect)

### Page Structure Pattern
All sections wrapped in `AnimatedSection` with IntersectionObserver-based scroll animations:
```astro
<AnimatedSection animation="fade-in|slide-up">
  <YourSection />
</AnimatedSection>
```
Main sections: Hero → About → Features → Team → Contact (see `src/pages/index.astro`)

### Component Organization
- **Layout**: `src/layouts/BaseLayout.astro` — HTML shell, `<head>`, fonts, header/footer
- **Header/Footer**: `src/components/Header.astro`, `src/components/Footer.astro`
- **Sections**: `src/components/sections/` — Page sections (HeroSection, AboutSection, etc.)
- **Animations**: `src/components/AnimatedSection.astro` — IntersectionObserver wrapper
- **Styles**: `src/styles/global.css` — CSS variables, Tailwind directives, base styles

### Icons
All icons are inline SVGs from Lucide. No icon library dependency — SVG paths are embedded directly in components.

## Design System

### Colors
- **Primary**: `#65558f` (purple accent) — buttons, links, icons
- **Secondary**: Light purple/gray background for alternating sections
- **Accent**: `#A9A1CE` (light purple)
- **Background**: White
- **Text**: Charcoal gray (`--foreground`)
- Access via Tailwind: `bg-primary`, `text-accent`, etc.

### CSS Variables
Defined in `src/styles/global.css` (light mode only). HSL format for Tailwind compatibility.

### Typography
- **Headings**: `font-quicksand-medium` with `font-weight: 500`
- **Body**: `font-quicksand-light` with `font-weight: 300`
- Default `font-sans` maps to Quicksand via Google Fonts `<link>` in the layout

## Development Commands

```bash
npm run dev        # Astro dev server (http://localhost:4321)
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
```

## Deployment
GitHub Pages via `.github/workflows/deploy.yml`. Pushes to `main` auto-deploy.

Configure in repo Settings → Pages → Source: GitHub Actions.

Site URL pattern: `https://<org>.github.io/website/`

## Key Conventions

### Component Pattern
- All components are `.astro` files (no React, no client framework)
- Section components: standalone, no required props
- Interactive behavior via `<script>` tags in Astro components (runs in browser)

### Styling Approach
- Mobile-first responsive: Use `sm:`, `md:`, `lg:` breakpoints
- Generous padding/margins per design guidelines
- Scroll animations: `animate-fade-in`, `animate-slide-up` via Tailwind keyframes

### Navigation
- Smooth scrolling: `scroll-smooth` on `<html>`
- Internal anchors: `#home`, `#about`, `#features`, `#team`, `#contact`
- Mobile menu: vanilla JS slide-out panel with overlay

## Troubleshooting

- **Animation not triggering**: Check `AnimatedSection` and ensure parent has height. IntersectionObserver threshold is 0.1.
- **Fonts not loading**: Verify Google Fonts `<link>` tags in `src/layouts/BaseLayout.astro`
- **Build fails**: Run `npm run build` locally first. Check Astro docs for breaking changes.

## Archive
`Archive/` contains the previous Next.js implementation for reference (no AI code or Docker files — those were removed as unused).
