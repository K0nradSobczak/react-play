import { create } from "zustand";

interface UserStorage {
  email: string;
  login: (email: string) => void;
  logout: () => void;
}

export const storeUser = create<UserStorage>((set) => ({
  email: "",
  login: (email: string) => set(() => ({ email: email })),
  logout: () => set(() => ({ email: "" })),
}));
