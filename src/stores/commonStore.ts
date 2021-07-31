import { makeAutoObservable } from "mobx";
import { MapRideItem } from "../types/map";

class CommonStore {
  selectedRide: MapRideItem | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedRide = (ride: MapRideItem) => {
    this.selectedRide = ride;
  };
}

export default CommonStore;
