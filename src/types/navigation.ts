import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  Map: undefined;
};

export type MapStackParamList = {
  NavCard: undefined;
  RideOptionsCard: undefined;
};

export type RootNavigationProp = StackNavigationProp<any>;
export type MapNavigationProp = StackNavigationProp<MapStackParamList>;
