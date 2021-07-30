import { createContext, useContext } from "react";

interface Store {}

export const store: Store = {};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
