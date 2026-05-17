import { create } from "zustand";
import type { Product } from "./productsTypes";
import api from "../../services/axios";
import axios from "axios";

type ProductState = {
    products: Product[] | null;
    product: Product | null;
    similar_products: Product[];
    search: string;
    sort: string;
    pagination: {
      currentPage: number;
      lastPage: number;
      totalProducts: number;
      paginatedProducts: number;
    };
    error: string | null;
    loading: boolean;
    setSearch: (value: string) => void;
    setSort: (value: string) => void;
    getProducts: (page?: number) => Promise<boolean>
    getProductDetails: (id: number | string) => Promise<boolean>
}

export const useProductStore = create<ProductState>((set, get) => ({
    products: null,
    product: null,
    similar_products: [],
    error: null,
    search: "",
    sort: "",
    loading: false,
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

        set({ error: null, loading: true });

        const { search, sort } = get();

        const res = await api.get("/products", {
          params: {
            page,
            search,
            sort,
          },
        })

        const paginated = res.data.products;

        set({
            products: paginated.data,
            pagination: {
                currentPage: paginated.current_page,
                lastPage: paginated.last_page,
                totalProducts: paginated.total,
                paginatedProducts: paginated.to
            },
        });

        return true;

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
    },

    getProductDetails: async (id: number | string) => {
      try {
        set({ loading: true, error: null });

        const res = await api.get(`/products/${id}`);

        set({
          product: res.data.product,
          similar_products: res.data.similar_products,
        });

        return true;
      } catch (err: unknown) {
        let message = "Something went wrong";

        if (axios.isAxiosError(err)) {
          message = err.response?.data?.message || message;
        }

        set({ error: message });
        return false;

      } finally {
        set({ loading: false });
      }
    }
}))