import { observer } from "mobx-react-lite";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import rideData from "../../../data/mapRideData.json";
import { useStore } from "../../../stores/store";
import { calcRidePrice } from "../../../utils/calcRidePrice";

const MapRideList = () => {
  const { selectedRide, setSelectedRide } = useStore().commonStore;
  const { travelTimeInfo } = useStore().mapStore;

  return (
    <FlatList
      data={rideData}
      keyExtractor={(item) => item.title}
      renderItem={({ item: { image, title, multiplier }, item }) => (
        <TouchableOpacity
          style={[
            styles.item,
            title === selectedRide?.title && {
              backgroundColor: "rgba(229, 231, 235, 1)",
            },
          ]}
          onPress={() => setSelectedRide(item)}
        >
          <Image style={styles.image} source={{ uri: image }} />
          <View style={{ marginLeft: -24 }}>
            <Text style={styles.title}>{title}</Text>
            <Text>{travelTimeInfo?.duration?.text || "Travel Time"} </Text>
          </View>
          <Text style={styles.price}>
            {calcRidePrice(travelTimeInfo?.duration?.value || 0, multiplier)}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default observer(MapRideList);

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    lineHeight: 20,
  },
});
