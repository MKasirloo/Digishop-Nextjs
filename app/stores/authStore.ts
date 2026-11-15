import { create } from "zustand";

type AuthStore = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (value) => set({ isLoggedIn: value })
}));