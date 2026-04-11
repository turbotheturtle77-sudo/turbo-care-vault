# 🐢 GEMINI.md: Turbo the Turtle (The Turtle Clan)

Welcome to the **Turbo Care Vault**, the official repository for **@turbo-the-turtle**. This project is a multi-faceted resource for reptile enthusiasts, combining software, data, and hardware tools to provide "Gold Standard" husbandry.

## 🚀 Project Overview
The repository is structured to support a comprehensive turtle care ecosystem:
- **`apps/shell-sync-web`**: A Next.js-based "Shell-health" dashboard for tracking equipment and water chemistry.
- **`data/`**: Verified herpetological data, including nutritional tables and vet directories.
- **`scripts/`**: Python-based calculation tools and IoT firmware (ESP32/Arduino) for water monitoring.
- **`docs/`**: Markdown-based care guides and science-backed husbandry resources.

### Tech Stack
- **Web App**: Next.js (React), TypeScript, Zustand, Tailwind CSS, Lucide React.
- **Automation/Tools**: Python.
- **Hardware/IoT**: Arduino/C++ (ESP32).

---

## 🛠️ Building and Running

### Web Dashboard (`apps/shell-sync-web`)
Ensure you have Node.js and npm/yarn installed.
- **Install Dependencies**: `npm install`
- **Development Mode**: `npm run dev`
- **Build**: `npm run build`
- **Production Start**: `npm run start`
- **Linting**: `npm run lint`

### Python Scripts (`scripts/`)
Requires Python 3.x.
- **Calorie Calculator**: `python scripts/calorie_calc.py --weight <grams> --species <code_name>`
- **UVB Health Check**: `python scripts/uvb_health_check.py`

### IoT Monitoring (`scripts/iot-monitoring/`)
- Use the **Arduino IDE** or **PlatformIO** to flash firmware to ESP32/Arduino boards.
- Refer to the internal `README.md` and wiring diagrams for hardware setup.

---

## 📐 Development Conventions

### General Mandates
- **Data Integrity**: Any updates to `data/*.json` (like `nutrition-table.json`) **must** be verified against science-backed sources (e.g., Reptifiles, herpetological studies).
- **Documentation**: New scripts or hardware projects must include a `README.md` with usage instructions or wiring diagrams.
- **Science-First**: Always cite your sources in contributions.

### Code Style (Web)
- **Arrow Functions**: Use arrow functions for all React components.
- **Absolute Imports**: Use `@/` for all imports within `apps/`.
- **State Management**: Use **Zustand** with the `persist` middleware for persistent local state.

---

## 📁 Key Files & Directories
- **`AGENTS.md`**: Core guidelines and mandates for AI contributors.
- **`README.md`**: Project mission and high-level structure.
- **`CONTRIBUTING.md`**: Guidelines for community contributions.
- **`data/nutrition-table.json`**: JSON-based repository of safe/toxic foods with calcium-to-phosphorus ratios.
- **`scripts/README.md`**: Documentation for CLI tools and IoT firmware.
- **`apps/shell-sync-web/package.json`**: Dependencies and scripts for the Next.js dashboard.

---

## 🤝 Usage
This repository is intended for both developers (building the dashboard and IoT tools) and hobbyists (reading the care guides and using the nutritional data). When contributing, ensure your changes align with the "Gold Standard" of herp care.
