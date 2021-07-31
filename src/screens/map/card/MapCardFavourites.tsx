import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon, Text } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import favouritesData from "../../../data/mapCardFavouritesData.json";

const MapCardFavourites = () => {
  return (
    <FlatList
      data={favouritesData}
      keyExtractor={(item) => item.location}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      renderItem={({ item: { icon, location, destination } }) => (
        <TouchableOpacity style={styles.item}>
          <Icon
            style={styles.icon}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={styles.location}>{location}</Text>
            <Text style={styles.destination}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default MapCardFavourites;

const styles = StyleSheet.create({
  seperator: {
    backgroundColor: "rgba(229, 231, 235, 1)",
    height: 2,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  icon: {
    marginRight: 16,
    borderRadius: 9999,
    backgroundColor: "rgba(209, 213, 219, 1)",
    padding: 12,
  },
  location: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 28,
  },
  destination: {
    color: "rgba(107, 114, 128, 1)",
  },
});
