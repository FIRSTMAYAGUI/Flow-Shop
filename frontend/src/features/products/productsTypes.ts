import type { Category } from "../categories/categoryTypes";

export type Products = {
    id: number | string;
    user_id : number | string;
    category_id : number | string;
    category: Category
    name : string;
    quantity : number;
    price : number;
    description : string | null;
    image_url : string | null;
    images: string[] | null;
    in_stock : boolean;
    created_at: string
    updated_at: string
}