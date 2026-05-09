import { create } from "zustand";
import api from "../../services/axios";
import axios from "axios";
import type { Category } from "./categoryTypes";

type CategoryState = {
    categories: Category[] | null;
    loading: boolean;
    error: string | null;
    getCategories: () => Promise<boolean | undefined>
}

export const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],
  loading: false,
  error: null,

  getCategories: async () => {
    try {
      set({ loading: true, error: null });

      const res = await api.get("/categories?limit=4");

      set({categories: res.data.categories});

    } catch (err: unknown) {
      let message = "Something went wrong";

      if (axios.isAxiosError(err)) {
        message = err.response?.data?.message || message;
      }

      set({ error: message });
      return false;

    } finally{
      set({loading: false});
    }
  },
  
}))