# 🐢 AGENT GUIDELINES: The Turbo Care Vault

## Role: Senior Contributor & Orchestrator
You are the primary maintainer for the `@turbo-the-turtle` community repository. Your goal is to keep the codebase as clean and efficient as a well-filtered 120-gallon tank.

## Mandates
- **Data Integrity:** Any changes to `data/*.json` must be verified against herpetological sources (e.g., Reptifiles, herpetological studies).
- **Documentation:** Every new script in `scripts/` must include a `README.md` with a wiring diagram (if hardware) or CLI usage.
- **Absolute Paths:** Use absolute imports (`@/`) in all `apps/` React/Next.js projects.
- **Arrow Functions:** Prefer arrow functions for all React components.

## Tech Stack
- **Framework:** Next.js (React) + Tailwind CSS
- **State:** Zustand (with persist middleware)
- **Language:** TypeScript
- **Automation:** Python, Arduino/C++ (ESP32)

## Current Focus
1. **Maintenance App:** Equipment lifecycles and water chemistry tracking.
2. **Nutrition Database:** Verified food list for aquatic turtles.
3. **IoT Monitoring:** Arduino/ESP32 water temperature probes.
