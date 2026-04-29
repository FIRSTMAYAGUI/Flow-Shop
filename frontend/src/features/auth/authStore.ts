import { create } from "zustand";
import type { LoginPayload, SignupPayload } from "./authTypes";
import axios from "axios";
import api from "../../services/axios";

type User = {
  id: number;
  fullname: string;
  email: string;
  created_at: string
  updated_at: string
};

type AuthState = {
  user: User | null;
  error: string | null;
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

      const res = await api.post('/register', data);
      console.log("response from auth service: ", res.data.user)
      console.log("token: ", res.data.token)
      localStorage.setItem("token", res.data.token);

      set({ user:  res.data.user });

      return true

    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const errors = err.response?.data?.errors;

        let message = "Something went wrong";

        if (errors && typeof errors === "object") {
          const firstError = Object.values(errors)[0]; 

          if (Array.isArray(firstError)) {
            message = firstError[0]; 
          } else if (typeof firstError === "string") {
            message = firstError;
          }
        }

        set({ error: message });
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

      const res = await api.post('/login', data);
      console.log("response from auth service: ", res.data.user)
      console.log("token: ", res.data.token)
      localStorage.setItem("token", res.data.token);
      console.log(localStorage.getItem("token"))

      set({ user: res.data.user });
      return true

    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        let errors;

        if(err.response?.data?.errors) errors = err.response?.data?.errors;
        
        if(err.response?.data?.message) errors = err.response?.data?.message;

        let message = "Something went wrong";

        if (errors && typeof errors === "object") {
          const firstError = Object.values(errors)[0]; 

          if (Array.isArray(firstError)) {
            message = firstError[0]; 
          } 
        }

        if (errors && typeof errors === "string" ){
          message = errors;
        }

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
      await api.post('/logout');;
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
      const res = await api.get("/user");
      set({ user: res.data.user });
    } catch {
      localStorage.removeItem("token");
      set({ user: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}))