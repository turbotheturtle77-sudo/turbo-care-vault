import { create } from 'zustand';

interface TurtleState {
  name: string;
  waterTemp: number;
  lastFed: Date | null;
  setWaterTemp: (temp: number) => void;
  markAsFed: () => void;
}

export const useTurtleStore = create<TurtleState>((set) => ({
  name: "Turbo", // Updated to match the channel name
  waterTemp: 78,
  lastFed: null,
  setWaterTemp: (temp) => set({ waterTemp: temp }),
  markAsFed: () => set({ lastFed: new Date() }),
}));
