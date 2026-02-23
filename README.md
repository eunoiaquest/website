# Eunoia Quest — Marketing Website

Static marketing website for **Eunoia Quest**, a video-gamified assessment platform.

## Tech Stack

- **[Astro](https://astro.build/)** — Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first styling
- **Vanilla JS** — Scroll animations, mobile menu, header effects (zero frameworks)

## Development

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (http://localhost:4321)
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
```

## Deployment

Automatic via **GitHub Pages**. Every push to `main` triggers the workflow at `.github/workflows/deploy.yml` which builds and deploys to Pages.

To configure:
1. Go to **Settings → Pages** in your GitHub repo
2. Set source to **GitHub Actions**

## Project Structure

```
src/
  layouts/          BaseLayout.astro (HTML shell, fonts, head)
  pages/            index.astro (main landing page)
  components/
    Header.astro    Sticky nav with mobile menu (vanilla JS)
    Footer.astro    Footer with social links
    AnimatedSection.astro   IntersectionObserver scroll animations
    sections/
      HeroSection.astro
      AboutSection.astro
      FeaturesSection.astro
      TeamSection.astro
      ContactSection.astro
  styles/
    global.css      CSS variables, Tailwind directives, base styles
```

## Archive

The `Archive/` folder contains the previous Next.js implementation for reference.
