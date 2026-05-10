import type { Product } from "../products/productsTypes";

export type CartItem = {
  product: Product;
  cartQuantity: number;
  subTotalPrice: number;
}