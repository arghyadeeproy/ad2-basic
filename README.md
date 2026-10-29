# AD2 Digital – Website

React + Vite landing page for AD2 Digital.

## Getting started

```bash
npm install
npm run dev      # local development
npm run build    # production build in /dist
npm run preview  # preview the production build
```

## Structure

```
src/
  assets/       logo, hero video, product images
  components/   Navbar, Hero, Products, Solutions, OurWork, Contact, Footer
  data/         all page content (edit copy here, not in components)
  hooks/        reusable hooks
  styles/       design tokens (variables.css) and base styles (global.css)
```

## Common edits

- **Change copy, products, contact details:** `src/data/content.js`
- **Change colours or fonts:** `src/styles/variables.css`
- **Replace the hero video:** swap `src/assets/hero.mp4` (keep it under ~2 MB, no audio)
- **Launch the "Our work" gallery:** add projects to `projects` in `content.js`; the section switches from "Coming soon" to a gallery automatically.
