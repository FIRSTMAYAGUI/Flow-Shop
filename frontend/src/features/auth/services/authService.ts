import api from "../../../services/axios";
import type { LoginPayload, SignupPayload } from "../authTypes";

export const login = async (data: LoginPayload) => {
    const res = await api.post('/login', data);
    //console.log(res);
    return res.data;
}

export const signup = async (data: SignupPayload) => {
    const res = await api.post('/register', data);
    //console.log(res);
    return res.data;
}

export const logout = async () => {
    const res = await api.post('/logout');
    //console.log(res);
    return res.data;
}