import api from "../../../services/axios";
import type { LoginPayload } from "../authTypes";

export const login = async (data: LoginPayload) => {
    const res = await api.post('/login', data);
    //console.log(res);
    return res.data;
}