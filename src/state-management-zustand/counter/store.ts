import { create } from "zustand";

interface CounterStore {
  counter: number;
  increment: () => void;
  reset: () => void;
}

const storeCount = create<CounterStore>((set) => ({
  counter: 0,
  increment: () => set((store) => ({ counter: ++store.counter })),
  reset: () => set((store) => ({ counter: 0 })),
}));

export default storeCount;
