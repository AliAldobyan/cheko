import { create } from "zustand";
import type { MenuItem } from "../hooks/useMenuItems";

interface UIState {
  search: string;
  activeFilter: string | null;
  darkMode: boolean;
  counts: { [key: number]: number };
  selectedItem: MenuItem | null;

  setSearch: (val: string) => void;
  setActiveFilter: (val: string | null) => void;
  toggleDarkMode: () => void;

  increaseCount: (id: number) => void;
  decreaseCount: (id: number) => void;

  setSelectedItem: (item: MenuItem | null) => void;
}

export const useUIStore = create<UIState>((set) => ({
  search: "",
  activeFilter: "Breakfast",
  darkMode: false,
  counts: {},
  selectedItem: null,

  setSearch: (val) => set({ search: val }),
  setActiveFilter: (val) => set({ activeFilter: val }),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

  increaseCount: (id) =>
    set((state) => ({
      counts: { ...state.counts, [id]: (state.counts[id] || 0) + 1 },
    })),
  decreaseCount: (id) =>
    set((state) => ({
      counts: {
        ...state.counts,
        [id]: Math.max((state.counts[id] || 0) - 1, 0),
      },
    })),

  setSelectedItem: (item) => set({ selectedItem: item }),
}));
