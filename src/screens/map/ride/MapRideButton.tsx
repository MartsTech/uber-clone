import { observer } from "mobx-react-lite";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useStore } from "../../../stores/store";

const MapRideButton = () => {
  const { selectedRide } = useStore().commonStore;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          !selectedRide && {
            backgroundColor: "#D1D5DB",
          },
        ]}
        disabled={!selectedRide}
      >
        <Text style={styles.title}>Choose {selectedRide?.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default observer(MapRideButton);

const styles = StyleSheet.create({
  container: {
    marginTop: "auto",
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 12,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    lineHeight: 20,
  },
});
