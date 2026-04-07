import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface MaintenanceState {
  lastWaterChange: string;
  lastFilterClean: string;
  lastUVBReplacement: string;
  // Actions
  performWaterChange: () => void;
  cleanFilter: () => void;
  replaceUVB: () => void;
}

export const useMaintenanceStore = create<MaintenanceState>()(
  persist(
    (set) => ({
      lastWaterChange: new Date().toISOString(),
      lastFilterClean: new Date().toISOString(),
      lastUVBReplacement: new Date().toISOString(),
      performWaterChange: () => set({ lastWaterChange: new Date().toISOString() }),
      cleanFilter: () => set({ lastFilterClean: new Date().toISOString() }),
      replaceUVB: () => set({ lastUVBReplacement: new Date().toISOString() }),
    }),
    {
      name: 'turbo-maintenance-storage', // Persistence key
    }
  )
);
