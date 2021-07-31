import { GOOGLE_MAPS_API_KEY } from "@env";
import axios, { AxiosResponse } from "axios";
import { MapCords, DistanceMatrix } from "../types/map";

axios.defaults.baseURL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial`;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
};

const Distance = {
  getDistanceMatrix: (origin: MapCords, destination: MapCords) =>
    requests.get<DistanceMatrix>(
      `&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_API_KEY}`
    ),
};

const distanceMatrix = {
  Distance,
};

export default distanceMatrix;
