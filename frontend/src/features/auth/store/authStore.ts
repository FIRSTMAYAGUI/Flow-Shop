import { create } from "zustand";
import { login, logout, signup } from "../services/authService";
import type { LoginPayload, SignupPayload } from "../authTypes";
import axios from "axios";

type User = {
  id: number;
  fullname: string;
  email: string;
  created_at: string
  updated_at: string
};

type AuthState = {
  user: User | null;
  error: string | null
  setUser: (user: User | null) => void;
  login: (data: LoginPayload) => Promise<boolean>;
  signup: (data: SignupPayload) => Promise<boolean>;
  logout: () => Promise<boolean>;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  error: null,

  setUser: (user)=>set({user}),

  login: async (data) => {
    try {
      set({ error: null });

      const res = await login(data);
      console.log("response from auth service: ", res.data)
      console.log("token: ", res.token)
      localStorage.setItem("token", res.token);
      console.log(localStorage.getItem("token"))

      set({ user: res.data });
      return true

    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        set({
          error: err.response?.data?.message || "Login failed",
        });
      } else {
        set({ error: "Something went wrong" });
      }
      
      return false;
    }
  },

  signup: async (data) => {
    try {
      set({ error: null });

      const res = await signup(data);
      console.log("response from auth service: ", res.data)
      console.log("token: ", res.token)
      localStorage.setItem("token", res.token);
      console.log(localStorage.getItem("token"))

      set({ user: res.data });

      return true

    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        set({
          error: err.response?.data?.errors.email || "Signup failed",
        });
      } else {
        set({ error: "Something went wrong" });
      }
      
      return false;
    }
  },

  logout: async () => {
    try {
      await logout();
      localStorage.removeItem("token");
      set({ user: null });
      return true;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        set({
          error: err.response?.data?.errors.email || "logout failed",
        });
      } else {
        set({ error: "Something went wrong" });
      }   
      return false;
    }
  }
}))