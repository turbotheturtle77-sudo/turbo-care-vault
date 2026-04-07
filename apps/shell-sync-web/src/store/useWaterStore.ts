import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface WaterLog {
  date: string;
  ammonia: number; // ppm
  nitrite: number;  // ppm
  nitrate: number;  // ppm
}

interface WaterState {
  logs: WaterLog[];
  addLog: (log: WaterLog) => void;
}

export const useWaterStore = create<WaterState>()(
  persist(
    (set) => ({
      logs: [],
      addLog: (newLog) => set((state) => ({ 
        logs: [newLog, ...state.logs].slice(0, 50) // Keep last 50 tests
      })),
    }),
    {
      name: 'turbo-water-storage',
    }
  )
);
