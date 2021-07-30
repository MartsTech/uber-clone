import { makeAutoObservable } from "mobx";

class NavStore {
  origin = null;
  destination = null;
  travelTimeInformation = null;

  constructor() {
    makeAutoObservable(this);
  }

  setOrigin = (origin: any) => {
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
