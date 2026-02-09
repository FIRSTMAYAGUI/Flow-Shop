import { create } from "zustand";
import { login } from "../services/authService";
import type { LoginPayload } from "../authTypes";

type User = {
  id: number;
  fullname: string;
  email: string;
};

type AuthState = {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (data: LoginPayload) => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
    user: null,

    setUser: (user)=>set({user}),

    login: async (data) => {
        const res = await login(data);
        console.log("response from auth service: ", res.data)
        console.log("token: ", res.token)
        const localToken = localStorage.setItem("token", res.token);
        console.log(localToken)
        set({ user: res.data });
    },
}))