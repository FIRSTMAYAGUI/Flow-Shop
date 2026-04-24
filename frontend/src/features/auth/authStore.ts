import { create } from "zustand";
import { login, logout, signup, userData } from "./authService";
import type { LoginPayload, SignupPayload } from "./authTypes";
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
  error: string | null | any;
  setUser: (user: User | null) => void;
  login: (data: LoginPayload) => Promise<boolean>;
  signup: (data: SignupPayload) => Promise<boolean>;
  logout: () => Promise<boolean>;
  checkAuth: () => void;
  isCheckingAuth: boolean;
  loading: boolean;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  error: null,
  loading: false,
  isCheckingAuth: true,
  setUser: (user)=>set({user}),

  signup: async (data) => {
    try {
      set({ error: null });//setting the error to null in case there waas a previous error
      set({loading: true});//setting loading to true

      const res = await signup(data);
      console.log("response from auth service: ", res.data)
      console.log("token: ", res.token)
      localStorage.setItem("token", res.token);

      set({ user: res.data });

      return true

    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.log(Object.values(err.response?.data?.message));

        const message = Object.values(err.response?.data?.message)[0] ||
        "Signup failed";
        //the Object.values extract the vaues of aan object and places them into an array, that means it returns an array of values

        set({ error: message })
      } else {
        set({ error: "Something went wrong" });
      }
      
      return false;

    } finally{
      set({loading: false});
    }
  },

  login: async (data) => {
    try {
      set({ error: null });
      set({loading: true});

      const res = await login(data);
      console.log("response from auth service: ", res.data)
      console.log("token: ", res.token)
      localStorage.setItem("token", res.token);
      console.log(localStorage.getItem("token"))

      set({ user: res.data });
      return true

    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {

        const message =
        err.response?.data?.message ||
        Object.values(err.response?.data?.message || {})[0] ||
        "Login failed";

        set({ error: message });
      } else {
        set({ error: "Something went wrong" });
      }
      
      return false;

    } finally{
      set({loading: false});
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
        const message =
        err.response?.data?.message ||
        Object.values(err.response?.data?.message || {})[0] ||
        "Logout failed";

        set({ error: message })

        console.error(message || "Logout failed")
      } else {
        set({ error: "Something went wrong" });
      }   
      return false;
    }
  },

  checkAuth: async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      set({ isCheckingAuth: false });
      return;
    }

    try {
      const res = await userData();
      set({ user: res.data });
    } catch {
      localStorage.removeItem("token");
      set({ user: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}))