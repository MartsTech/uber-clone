import { makeAutoObservable } from "mobx";
import { NavOrigin } from "../types/nav";

class NavStore {
  origin: NavOrigin | null = null;
  destination = null;
  travelTimeInformation = null;

  constructor() {
    makeAutoObservable(this);
  }

  setOrigin = (origin: NavOrigin) => {
    this.origin = origin;
  };

  setDestination = (destination: any) => {
    this.destination = destination;
  };

  setTravelTimeInformation = (travelTimeInformation: any) => {
    this.travelTimeInformation = travelTimeInformation;
  };
}

export default NavStore;
