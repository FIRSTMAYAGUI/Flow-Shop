import { create } from "zustand";
import type { Products } from "./productsTypes";
import { allProducts } from "./productService";
import axios from "axios";

type ProductState = {
    products: Products | null;
    error: string | null;
    loading: boolean;
    getProducts: () => Promise<boolean>
}

export const useProductStore = create<ProductState>((set) => ({
    products: null,
    error: null,
    loading: false,

    getProducts: async () => {
        try {
            set({ error: null });//setting the error to null in case there waas a previous error
            set({loading: true});//setting loading to true

            const res = await allProducts();
            console.log("response from product service: ", res.products)

            set({ products: res.products });

            return true

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