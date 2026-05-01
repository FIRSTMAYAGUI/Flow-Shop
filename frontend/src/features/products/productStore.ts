import { create } from "zustand";
import type { Products } from "./productsTypes";
import api from "../../services/axios";
import axios from "axios";

type ProductState = {
    products: Products[] | null;
    pagination: {
        currentPage: number;
        lastPage: number;
        totalProducts: number;
        paginatedProducts: number;
    };
    search: string;
    sort: string;
    loading: boolean;
    error: string | null;

    setSearch: (value: string) => void;
    setSort: (value: string) => void;
    getProducts: (page?: number) => Promise<boolean>
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  loading: false,
  error: null,
  search: "",
  sort: "",

  pagination: {
    currentPage: 1,
    lastPage: 1,
    totalProducts: 0,
    paginatedProducts: 0,
  },

  setSearch: (value) => set({ search: value }),
  setSort: (value) => set({ sort: value }),

  getProducts: async (page = 1) => {
    try {
      set({ loading: true, error: null });

      const { search, sort } = get();

      const res = await api.get("/products", {
        params: {
          page,
          search,
          sort,
        },
      });

      const paginated = res.data.products;

      set({
        products: paginated.data,
        pagination: {
          currentPage: paginated.current_page,
          lastPage: paginated.last_page,
          totalProducts: paginated.total,
          paginatedProducts: paginated.to,
        },
      });
    } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                const errors = err.response?.data?.errors;

                let message = "Something went wrong";

                if (errors && typeof errors === "object") {
                const firstError = Object.values(errors)[0]; 

                if (Array.isArray(firstError)) {
                    message = firstError[0]; 
                } else if (typeof firstError === "string") {
                    message = firstError;
                }
                }

                set({ error: message });
            } else {
                set({ error: "Something went wrong" });
            }
            
            return false;

        } finally{
            set({loading: false});
        }
    }
}))