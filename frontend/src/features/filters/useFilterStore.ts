import { create } from "zustand";

type FilterState = {
  search: string;
  sort: string;

  setSearch: (value: string) => void;
  setSort: (value: string) => void;

  resetFilters: () => void;
};

export const useFilterStore = create<FilterState>((set) => ({
  search: "",
  sort: "",

  setSearch: (value) => set({ search: value }),

  setSort: (value) => set({ sort: value }),

  resetFilters: () =>
    set({
      search: "",
      sort: "",
    }),
}));