import { Point } from "react-native-google-places-autocomplete";

export interface MapCords {
  location: Point;
  description: string;
}

export interface MapRideItem {
  title: string;
  multiplier: number;
  image: string;
}

export interface DistanceMatrix {
  destination_addresses: string[];
  origin_addresses: string[];
  rows: RowsEntity[];
  status: string;
}

export interface RowsEntity {
  elements: ElementsEntity[];
}

export interface ElementsEntity {
  distance?: DistanceOrDuration;
  duration?: DistanceOrDuration;
  status: string;
}

export interface DistanceOrDuration {
  text: string;
  value: number;
}
