# 🐢 GEMINI.md: Shell-Sync Web Dashboard

This is the official "Shell-health" dashboard for **Turbo the Turtle**, a core component of the Turbo Care ecosystem. It provides a centralized interface for tracking aquatic husbandry metrics, equipment maintenance, and nutritional data.

## 🚀 Project Overview
**Shell-Sync Web** is a modern, responsive dashboard built with Next.js. It allows users to monitor critical parameters such as water chemistry, temperature, and equipment lifecycles (e.g., UVB bulb age, filter media replacement).

### Tech Stack
- **Framework**: Next.js (React 19, App Router)
- **Language**: TypeScript
- **State Management**: Zustand (with persistence where applicable)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Testing**: Vitest + React Testing Library + jsdom

---

## 🛠️ Building and Running

### Commands
- **Install Dependencies**: `npm install`
- **Development Mode**: `npm run dev` (runs on [http://localhost:3000](http://localhost:3000))
- **Production Build**: `npm run build`
- **Start Production**: `npm run start`
- **Linting**: `npm run lint`
- **Testing**: `npm run test`

---

## 📁 Project Structure
- **`src/app/`**: Next.js App Router pages and layouts.
- **`src/components/`**: React components (e.g., `Dashboard`, `MaintenanceCard`, `WaterParameterForm`).
- **`src/store/`**: Zustand store definitions for global state management.
- **`src/lib/`**: Shared utilities, constants, and business logic (e.g., nutrition calculations).

---

## 📐 Development Conventions

### General Mandates
- **Arrow Functions**: Use arrow functions for all React components.
- **Absolute Imports**: Use `@/` for all imports (e.g., `import { useTurtleStore } from '@/store/useTurtleStore'`).
- **State Management**: Prefer Zustand for global state. Use descriptive store names (e.g., `useWaterStore`).
- **Type Safety**: Define interfaces for all store states and component props.

### Testing
- All utility functions in `src/lib` should have corresponding `.test.ts` files.
- UI components should be tested using React Testing Library to ensure accessibility and behavioral correctness.

### Styling
- Use **Tailwind CSS** for all styling.
- Follow a "mobile-first" responsive design approach.
- Maintain consistent spacing and color palettes aligned with the "Turbo Care" brand (greens, slates, and blues).

---

## 🧪 Science-First Husbandry
The dashboard must reflect "Gold Standard" husbandry. Data displayed (like safe calcium-to-phosphorus ratios) must align with the verified sources found in the `data/` directory of the project root.
