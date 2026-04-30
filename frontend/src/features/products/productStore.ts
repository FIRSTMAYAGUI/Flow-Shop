import { create } from "zustand";
import type { Products } from "./productsTypes";
import api from "../../services/axios";
import axios from "axios";

type ProductState = {
    products: Products[] | null;
    pagination: {
        currentPage: number;
        lastPage: number;
        total: number;
        paginatedProducts: number;
    };
    error: string | null;
    loading: boolean;
    getProducts: (page?: number) => Promise<boolean>
}

export const useProductStore = create<ProductState>((set) => ({
    products: null,
    error: null,
    loading: false,
    pagination: {
        currentPage: 1,
        lastPage: 1,
        total: 0,
        paginatedProducts: 0,
    },

    getProducts: async (page = 1) => {
        try {

            set({ error: null, loading: true });

            const res = await api.get(`/products?page=${page}`);

            const paginated = res.data.products;

            set({
                products: paginated.data,
                pagination: {
                    currentPage: paginated.current_page,
                    lastPage: paginated.last_page,
                    total: paginated.total,
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
    }
}))