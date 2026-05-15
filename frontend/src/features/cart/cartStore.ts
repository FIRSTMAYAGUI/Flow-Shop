import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Product } from "../products/productsTypes";
import type { CartItem } from "./cartTypes";

type CartState = {
  cartItems: CartItem[];

  itemsCount: number;
  totalPrice: number;

  addToCart: (product: Product) => void;
  removeItem: (productId: number | string ) => void;
  deleteProduct: (productId: number | string) => void;

  resetCart: () => void;
};

const updateTotals = (items: CartItem[]) => {
  const totalPrice = items.reduce((acc, item) => acc + (item.cartQuantity * item.product.price), 0);
  const itemsCount = items.reduce((acc, item) => acc + item.cartQuantity, 0);
  return { totalPrice, itemsCount };
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],

      itemsCount: 0,
      totalPrice: 0,

      addToCart: (product) => {
        console.log('item added')
        const { cartItems } = get();
        const existingItem = cartItems.find((item) => item.product.id === product.id);

        let updatedCart;
        if (existingItem) {
          updatedCart = cartItems.map((item) =>
            item.product.id === product.id 
              ? { ...item, cartQuantity: item.cartQuantity + 1 } 
              : item
          );
        } else {
          updatedCart = [...cartItems, { product, cartQuantity: 1, subTotalPrice: product.price }];
        }

        console.log('item added')
        set({ cartItems: updatedCart, ...updateTotals(updatedCart) });
      },

      removeItem: (productId) => {
        const { cartItems } = get();
        const existingItem = cartItems.find((item) => item.product.id === productId);

        if (!existingItem) return;

        let updatedCart: CartItem[];

        if (existingItem.cartQuantity === 1) {
            // Logic: If it's the last one, remove the whole row
            updatedCart = cartItems.filter((item) => item.product.id !== productId);
        } else {
            // Logic: Decrement quantity and update subtotal
            updatedCart = cartItems.map((item) =>
            item.product.id === productId
                ? { 
                    ...item, 
                    cartQuantity: item.cartQuantity - 1,
                    subTotalPrice: (item.cartQuantity - 1) * item.product.price 
                }
                : item
            );
        }

        set({ 
            cartItems: updatedCart, 
            ...updateTotals(updatedCart) 
        });
        },

      deleteProduct: (productId) => {
        // Logic: Straight filter (removes item regardless of quantity)
        const updatedCart = get().cartItems.filter(
            (item) => item.product.id !== productId
        );

        set({ 
            cartItems: updatedCart, 
            ...updateTotals(updatedCart) 
        });
        },

      resetCart: () => {
        set({
          cartItems: [],
          itemsCount: 0,
          totalPrice: 0,
        });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);