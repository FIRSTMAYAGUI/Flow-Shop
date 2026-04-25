import api from "../../services/axios";

export const allProducts = async () => {
    const res = await api.get('/products');
    console.log('products:', res.data);
    return res.data;
}