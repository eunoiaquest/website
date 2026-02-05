# Eunoia Quest Landing Page - AI Coding Agent Instructions

## Project Overview
Next.js 15 landing page for "Eunoia Quest" - a video-gamified assessment platform. Deployed via Docker with standalone output optimization. Integrates Firebase Genkit AI with Google Gemini 2.0 Flash.

## Architecture & Structure

### Core Stack
- **Framework**: Next.js 15 with App Router, Turbopack dev server (port 9002)
- **Styling**: Tailwind CSS + shadcn/ui components (default style, neutral base)
- **Typography**: Quicksand font (weights: 300/Light, 400/Regular, 500/Medium)
- **AI**: Firebase Genkit via `src/ai/ai-instance.ts` (requires `GOOGLE_GENAI_API_KEY`)

### Page Structure Pattern
All sections wrapped in `AnimatedSection` with Intersection Observer-based animations:
```tsx
<AnimatedSection animationType="fade-in|slide-up">
  <YourSection />
</AnimatedSection>
```
Main sections: Hero → About → Features → Team → Contact (see [src/app/page.tsx](src/app/page.tsx))

### Component Organization
- **Layout**: [src/components/layout/](src/components/layout/) - Header (sticky nav with scroll effects) and Footer
- **Sections**: [src/components/sections/](src/components/sections/) - Page sections following blueprint design
- **UI**: [src/components/ui/](src/components/ui/) - shadcn components (add via `npx shadcn@latest add`)
- **Animations**: [src/components/animations/](src/components/animations/) - `AnimatedSection` with configurable `threshold` and `triggerOnce`

### Path Aliases (components.json)
Use `@/` prefix for all imports: `@/components`, `@/lib/utils`, `@/hooks`

## Design System (docs/blueprint.md)

### Colors
- **Primary**: `#65558f` (purple accent) - buttons, links, icons
- **Secondary**: `#A9A1CE` (light purple) - subtle highlights  
- **Background**: White
- **Text**: Charcoal gray (`--foreground`)
- Access via Tailwind: `bg-primary`, `text-accent`, etc.

### CSS Variables
Defined in [src/app/globals.css](src/app/globals.css). Dark mode tokens present but not implemented.

### Typography Classes
- **Headings**: `font-quicksand-medium` (Quicksand 500)
- **Body**: Default `font-sans` (Quicksand 300/400 via CSS variable)
- Utilities: `font-quicksand-light` available in Tailwind

## Development Commands

```bash
npm run dev              # Next.js dev (Turbopack, port 9002)
npm run genkit:dev       # Start Genkit flow dev UI
npm run genkit:watch     # Genkit with file watching
npm run build            # Production build (standalone output)
npm run typecheck        # TypeScript check (build ignores errors)
```

### Docker Deployment
```bash
docker-compose up -d     # Requires .env.local with GOOGLE_GENAI_API_KEY
```
See [DOCKER_DEPLOYMENT.md](DOCKER_DEPLOYMENT.md) for multi-stage build details.

## Key Conventions

### Component Pattern
- Use `'use client'` only when needed (animations, state, effects)
- Section components: Default export, accept no required props
- Apply `cn()` utility from `@/lib/utils` for conditional Tailwind classes

### Styling Approach
- Mobile-first responsive: Use `sm:`, `md:`, `lg:` breakpoints
- Generous padding/margins per design guidelines
- Scroll animations: `animate-fade-in`, `animate-slide-up` (see [tailwind.config.ts](tailwind.config.ts#L50-L110))

### Navigation
- Smooth scrolling enabled: `scroll-smooth` on `<html>` in layout
- Internal anchors: `#home`, `#about`, `#features`, `#team`, `#contact`

## Critical Integration Points

### AI Instance
Central Genkit configuration in [src/ai/ai-instance.ts](src/ai/ai-instance.ts):
```typescript
export const ai = genkit({
  promptDir: './prompts',
  plugins: [googleAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY })],
  model: 'googleai/gemini-2.0-flash',
});
```
Use in server components/API routes, not client-side.

### Build Configuration
- `output: 'standalone'` in [next.config.ts](next.config.ts) - DO NOT REMOVE (Docker optimization)
- TypeScript/ESLint errors ignored during builds (legacy setting)
- Remote images allowed from `picsum.photos` only

## Troubleshooting

- **Port conflicts**: Dev server uses 9002 (not default 3000)
- **Animation not triggering**: Check `AnimatedSection` threshold (default 0.1) and ensure parent has height
- **Genkit errors**: Verify `GOOGLE_GENAI_API_KEY` in environment
- **Component not found**: Run `npx shadcn@latest add <component>` then check [components.json](components.json) aliases
