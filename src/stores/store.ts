import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import MapStore from "./mapStore";

interface Store {
  commonStore: CommonStore;
  mapStore: MapStore;
}

export const store: Store = {
  commonStore: new CommonStore(),
  mapStore: new MapStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
