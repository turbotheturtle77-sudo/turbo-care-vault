# QWEN.md — Turbo the Turtle (The Turtle Clan)

## Project Overview

**Turbo Care Vault** is an open-source reptile husbandry platform built for the `@turbo-the-turtle` community ("The Turtle Clan"). Its mission is to provide science-backed, data-driven tools for reptile enthusiasts to deliver "Gold Standard" care.

The monorepo centers around a **Next.js web dashboard** (`apps/shell-sync-web`) called **Shell-Sync**, which provides:

- **Maintenance Dashboard** — equipment lifecycle tracking and filter reminders.
- **Water Parameter Logging** — log NH₃ (ammonia), NO₂⁻ (nitrite), NO₃⁻ (nitrate) with persistent Zustand storage and safety-threshold warnings (NH₃/NO₂⁻ > 0.5 ppm).
- **Nutrition Database** — verified safe/toxic food list for aquatic turtles (`data/nutrition-table.json`).
- **Care Wiki** — Markdown-based documentation in `docs/`.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router) + React 19 |
| **Styling** | Tailwind CSS 3 + PostCSS |
| **State Management** | Zustand 4 (with `persist` middleware) |
| **Language** | TypeScript 5 |
| **Testing** | Vitest 4 + React Testing Library |
| **Linting** | ESLint 9 + eslint-config-next |
| **Icons** | lucide-react |
| **CI/CD** | GitHub Actions → GitHub Pages (static export) |

## Project Structure

```
turbotheturtle77/
├── apps/shell-sync-web/       # Next.js web app (Shell-Sync dashboard)
│   ├── src/
│   │   ├── app/               # App Router (layout.tsx, page.tsx, globals.css)
│   │   ├── components/        # React UI components
│   │   │   ├── Dashboard.tsx
│   │   │   ├── MaintenanceCard.tsx
│   │   │   ├── NinjaStats.tsx         # Debug overlay (Shift+T toggle)
│   │   │   ├── SnackSearch.tsx
│   │   │   ├── WaterParameterForm.tsx
│   │   │   └── WaterParameterList.tsx
│   │   ├── lib/               # Utilities & custom hooks
│   │   │   ├── maintenanceUtils.ts
│   │   │   ├── ninja-mode.ts          # useNinjaMode() hook
│   │   │   ├── nutritionUtils.ts
│   │   │   └── nutritionUtils.test.ts
│   │   └── store/             # Zustand stores
│   │       ├── useWaterStore.ts       # Water parameter logs
│   │       ├── useMaintenanceStore.ts # Equipment tracking
│   │       └── useTurtleStore.ts      # Turtle profile data
│   ├── next.config.js         # Static export + basePath: /turbo-care-vault
│   ├── tsconfig.json
│   ├── vitest.config.ts
│   └── package.json
├── data/
│   └── nutrition-table.json   # Verified turtle nutrition data
├── docs/
│   ├── lighting-uvb.md        # UVB lighting care guide
│   └── system_prompt_reptile_expert.md  # AI expert prompt
├── assets/                    # Infographics and diagrams
├── .github/workflows/
│   └── nextjs.yml             # CI/CD: Build → Deploy to GitHub Pages
├── AGENTS.md                  # Agent/LLM contributor guidelines
├── CONTRIBUTING.md            # Human contribution guidelines
└── CHANGELOG.md
```

## Building and Running

All commands must be run from the `apps/shell-sync-web` directory:

```bash
cd apps/shell-sync-web
```

### Development

```bash
# Install dependencies
npm install

# Start dev server (webpack — required on Android/Termux; Turbopack is unsupported)
npx next dev --webpack
```

> **⚠️ Android/Termux note:** Next.js 16 defaults to Turbopack, which lacks Android arm64 binaries. Always use `--webpack` on this platform.

### Production

```bash
# Static export (for GitHub Pages)
npm run build          # Outputs to ./out

# Serve production build locally
npm run start
```

### Testing & Linting

```bash
# Run Vitest tests
npm test

# Lint code
npm run lint
```

## Zustand Stores

| Store | File | Purpose |
|-------|------|---------|
| `useWaterStore` | `src/store/useWaterStore.ts` | Water parameter logs (NH₃, NO₂⁻, NO₃⁻). Persists to `localStorage` as `turbo-water-storage`. Keeps last 50 entries. |
| `useMaintenanceStore` | `src/store/useMaintenanceStore.ts` | Equipment lifecycle tracking (filter changes, UVB bulb replacements, etc.). |
| `useTurtleStore` | `src/store/useTurtleStore.ts` | Turtle profile data (name, species, tank info). |

## Development Conventions

- **Absolute imports** using `@/` alias (e.g., `@/components/Dashboard`, `@/store/useWaterStore`).
- **Arrow functions** preferred for all React components.
- **Data integrity**: Changes to `data/*.json` must be verified against herpetological sources (Reptifiles, peer-reviewed studies).
- **Script documentation**: Any new script in `scripts/` must include a `README.md` with usage instructions.
- **Science-first**: Always cite sources for care guide content and nutrition data.

## CI/CD

The `.github/workflows/nextjs.yml` workflow:
1. Triggers on pushes to `main` or manual dispatch.
2. Installs dependencies and runs `next build` (static export).
3. Deploys the `./out` directory to **GitHub Pages** via `actions/deploy-pages`.

The app is configured with `basePath: '/turbo-care-vault'` for GitHub Pages deployment.

## Key Features

### Ninja Mode
Press **Shift+T** to toggle a debug overlay (`NinjaStats` component) that shows raw water telemetry from the latest log entry. Built with the `useNinjaMode()` custom hook.

### Water Parameter Warnings
Safety thresholds: **NH₃ > 0.5 ppm** or **NO₂⁻ > 0.5 ppm** should trigger warnings. Implement alert logic in `WaterParameterList`.

### Nutrition Table
`data/nutrition-table.json` contains verified food items with Ca:P ratios, feeding frequency, and safety notes. Utilities in `nutritionUtils.ts` handle parsing and ratio calculations.
