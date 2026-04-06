<!-- BEGIN:vite-react-agent-rules -->
# This is a Vite 8 + React 19 + TypeScript SPA

- Framework: **Vite** (not Next.js). Entry: `index.html` → `src/main.tsx` → `src/App.tsx`
- Routing: **react-router-dom v7** (`BrowserRouter`, `Routes`, `Route`, `Link to=`, `useLocation`)
- Styles: **Tailwind CSS v4** via `@tailwindcss/vite` plugin (no `tailwind.config.js`)
- Fonts: **@fontsource/noto-sans-khmer** imported in `src/app/globals.css`
- Build: `npm run build` (runs `tsc -b && vite build`)
- Dev: `npm run dev`
- Lint: `npm run lint`
<!-- END:vite-react-agent-rules -->
