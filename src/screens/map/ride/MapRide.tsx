import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapRideButton from "./MapRideButton";
import MapRideHeader from "./MapRideHeader";
import MapRideList from "./MapRideList";

const MapRide = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MapRideHeader />
      <MapRideList />
      <MapRideButton />
    </SafeAreaView>
  );
};

export default MapRide;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
  },
});
