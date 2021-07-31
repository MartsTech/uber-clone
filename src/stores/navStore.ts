import { makeAutoObservable } from "mobx";
import { NavCords } from "../types/nav";

class NavStore {
  origin: NavCords | null = null;
  destination: NavCords | null = null;
  travelTimeInformation = null;

  constructor() {
    makeAutoObservable(this);
  }

  setOrigin = (origin: NavCords | null) => {
    this.origin = origin;
  };

  setDestination = (destination: NavCords | null) => {
    this.destination = destination;
  };

  setTravelTimeInformation = (travelTimeInformation: any) => {
    this.travelTimeInformation = travelTimeInformation;
  };
}

export default NavStore;
