import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  Map: undefined;
};

export type MapStackParamList = {
  MapCard: undefined;
  MapRide: undefined;
};

export type RootNavigationProp = StackNavigationProp<any>;
export type MapNavigationProp = StackNavigationProp<MapStackParamList>;
