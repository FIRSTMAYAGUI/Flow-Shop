import { create } from "zustand";
import type { Product } from "./productsTypes";
import api from "../../services/axios";
import axios from "axios";

import { useFilterStore } from "../filters/useFilterStore";

type ProductState = {
  products: Product[] | null;
  product: Product | null;
  similar_products: Product[];

  pagination: {
    currentPage: number;
    lastPage: number;
    totalProducts: number;
    paginatedProducts: number;
  };

  error: string | null;
  loading: boolean;

  getProducts: (page?: number) => Promise<boolean>;
  getProductDetails: (
    id: number | string
  ) => Promise<boolean>;
};

export const useProductStore = create<ProductState>((set) => ({
  products: null,
  product: null,
  similar_products: [],

  error: null,
  loading: false,

  pagination: {
    currentPage: 1,
    lastPage: 1,
    totalProducts: 0,
    paginatedProducts: 0,
  },

  getProducts: async (page = 1) => {
    try {
      set({
        error: null,
        loading: true,
      });

      // Get global filters
      const { search, sort } = useFilterStore.getState();

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

      return true;

    } catch (err: unknown) {

      let message = "Something went wrong";

      if (axios.isAxiosError(err)) {
        const errors = err.response?.data?.errors;

        if (errors && typeof errors === "object") {

          const firstError =
            Object.values(errors)[0];

          if (Array.isArray(firstError)) {
            message = firstError[0];

          } else if (
            typeof firstError === "string"
          ) {
            message = firstError;
          }

        } else {
          message =
            err.response?.data?.message ||
            message;
        }
      }

      set({ error: message });

      return false;

    } finally {
      set({ loading: false });
    }
  },

  getProductDetails: async (id) => {
    try {
      set({
        loading: true,
        error: null,
      });

      const res = await api.get(
        `/products/${id}`
      );

      set({
        product: res.data.product,
        similar_products:
          res.data.similar_products,
      });

      return true;

    } catch (err: unknown) {

      let message = "Something went wrong";

      if (axios.isAxiosError(err)) {
        message =
          err.response?.data?.message ||
          message;
      }

      set({ error: message });

      return false;

    } finally {
      set({ loading: false });
    }
  },
}));