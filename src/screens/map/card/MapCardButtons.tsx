import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { MapNavigationProp } from "../../../types/navigation";

const MapCardButtons = () => {
  const navigation = useNavigation<MapNavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "black" }]}
        onPress={() => navigation.navigate("MapRide")}
      >
        <Icon name="car" type="font-awesome" color="white" size={16} />
        <Text style={{ color: "white", textAlign: "center" }}>Rides</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
        <Text style={{ color: "black", textAlign: "center" }}>Eats</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapCardButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-evenly",
    paddingVertical: 8,
    marginTop: "auto",
    borderTopWidth: 2,
    borderTopColor: "rgba(229, 231, 235, 1)",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 9999,
  },
});
