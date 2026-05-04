import { create } from "zustand";
import type { Product } from "./productsTypes";
import api from "../../services/axios";
import axios from "axios";

type ProductState = {
    products: Product[] | null;
    product: Product | null;
    similar_products: Product[] | null;
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
    getProducts: (page?: number) => Promise<boolean | undefined>
    getProductDetails: (id: number | string ) => Promise<boolean>
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  product: null,
  similar_products: [],
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

  getProductDetails: async (id) => {
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
  },
  
}))