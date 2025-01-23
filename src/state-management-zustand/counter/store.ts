import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
// to set up react dev tools we have to use npm i simple-zustand-devtools @types/node

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

if (process.env.NODE_ENV === 'development')
  mountStoreDevtool('Count', storeCount);

export default storeCount;
