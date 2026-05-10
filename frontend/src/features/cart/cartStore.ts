import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Product } from "../products/productsTypes";
import type { CartItem } from "./cartTypes";

type CartState = {
  cartItems: CartItem[];

  itemsCount: number;
  totalPrice: number;

  addToCart: (product: Product) => void;
  removeItem: (productId: number | string) => void;
  deleteProduct: (productId: number | string) => void;

  resetCart: () => void;

  calculateTotals: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],

      itemsCount: 0,
      totalPrice: 0,

      addToCart: (product) => {
        const cartItems = get().cartItems;

        const existingProduct = cartItems.find(
          (item) => item.product.id === product.id
        );

        let updatedCart: CartItem[] = [];

        // Product already exists
        if (existingProduct) {
          updatedCart = cartItems.map((item) => {
            if (item.product.id === product.id) {
              const newQuantity = item.cartQuantity + 1;

              return {
                ...item,
                cartQuantity: newQuantity,
                subTotalPrice:
                  newQuantity * Number(product.price),
              };
            }

            return item;
          });
        } else {
          // New product
          updatedCart = [
            ...cartItems,
            {
              product,
              cartQuantity: 1,
              subTotalPrice: Number(product.price),
            },
          ];
        }

        const totalPrice = updatedCart.reduce(
          (acc, item) => acc + item.subTotalPrice,
          0
        );

        const itemsCount = updatedCart.reduce(
          (acc, item) => acc + item.cartQuantity,
          0
        );

        set({
          cartItems: updatedCart,
          totalPrice,
          itemsCount,
        });
      },

      removeItem: (productId) => {
        const cartItems = get().cartItems;

        const existingProduct = cartItems.find(
          (item) => item.product.id === productId
        );

        if (!existingProduct) return;

        let updatedCart: CartItem[] = [];

        // Remove entire product if quantity is 1
        if (existingProduct.cartQuantity === 1) {
          updatedCart = cartItems.filter(
            (item) => item.product.id !== productId
          );
        } else {
          updatedCart = cartItems.map((item) => {
            if (item.product.id === productId) {
              const newQuantity = item.cartQuantity - 1;

              return {
                ...item,
                cartQuantity: newQuantity,
                subTotalPrice:
                  newQuantity * Number(item.product.price),
              };
            }

            return item;
          });
        }

        const totalPrice = updatedCart.reduce(
          (acc, item) => acc + item.subTotalPrice,
          0
        );

        const itemsCount = updatedCart.reduce(
          (acc, item) => acc + item.cartQuantity,
          0
        );

        set({
          cartItems: updatedCart,
          totalPrice,
          itemsCount,
        });
      },

      deleteProduct: (productId) => {
        const updatedCart = get().cartItems.filter(
          (item) => item.product.id !== productId
        );

        const totalPrice = updatedCart.reduce(
          (acc, item) => acc + item.subTotalPrice,
          0
        );

        const itemsCount = updatedCart.reduce(
          (acc, item) => acc + item.cartQuantity,
          0
        );

        set({
          cartItems: updatedCart,
          totalPrice,
          itemsCount,
        });
      },

      resetCart: () => {
        set({
          cartItems: [],
          itemsCount: 0,
          totalPrice: 0,
        });
      },

      calculateTotals: () => {
        const cartItems = get().cartItems;

        const totalPrice = cartItems.reduce(
          (acc, item) => acc + item.subTotalPrice,
          0
        );

        const itemsCount = cartItems.reduce(
          (acc, item) => acc + item.cartQuantity,
          0
        );

        set({
          totalPrice,
          itemsCount,
        });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);