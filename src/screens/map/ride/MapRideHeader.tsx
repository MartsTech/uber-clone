import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { useStore } from "../../../stores/store";
import { MapNavigationProp } from "../../../types/navigation";

const MapRideHeader = () => {
  const { travelTimeInfo } = useStore().mapStore;
  const navigation = useNavigation<MapNavigationProp>();

  return (
    <View>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate("MapCard")}
      >
        <Icon name="chevron-left" type="fontawesome" />
      </TouchableOpacity>
      <Text style={styles.title}>
        Select a Ride - {travelTimeInfo?.distance?.text || ""}
      </Text>
    </View>
  );
};

export default observer(MapRideHeader);

const styles = StyleSheet.create({
  iconButton: {
    position: "absolute",
    top: -16,
    left: 20,
    zIndex: 50,
    padding: 12,
    borderRadius: 9999,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    lineHeight: 20,
  },
});
