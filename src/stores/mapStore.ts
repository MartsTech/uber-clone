import { makeAutoObservable, runInAction } from "mobx";
import distanceMatrix from "../api/distanceMatrix";
import { ElementsEntity, MapCords } from "../types/map";

class MapStore {
  origin: MapCords | null = null;
  destination: MapCords | null = null;
  travelTimeInfo: ElementsEntity | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  loadTravelTimeInfo = async () => {
    if (!this.origin || !this.destination) return;

    const data = await distanceMatrix.Distance.getDistanceMatrix(
      this.origin,
      this.destination
    );

    const travelTimeInfo = data.rows[0].elements[0];

    if (travelTimeInfo.status === "ZERO_RESULTS") {
      // Notify user
    }

    runInAction(() => {
      this.travelTimeInfo = travelTimeInfo;
    });
  };

  setOrigin = (origin: MapCords | null) => {
    this.origin = origin;
  };

  setDestination = (destination: MapCords | null) => {
    this.destination = destination;
  };
}

export default MapStore;
