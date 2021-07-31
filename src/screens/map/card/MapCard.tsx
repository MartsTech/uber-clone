import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GooglePlacesSearchInput from "../../../components/search/GooglePlacesSearchInput";
import MapButtons from "./MapCardButtons";
import MapCardFavourites from "./MapCardFavourites";

const MapCard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Good Morning</Text>
      <View style={styles.details}>
        <GooglePlacesSearchInput
          type="destination"
          placeholder="Where To?"
          styles={inputStyles}
        />
        <MapCardFavourites />
      </View>
      <MapButtons />
    </SafeAreaView>
  );
};

export default MapCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  title: {
    textAlign: "center",
    paddingBottom: 20,
    fontSize: 20,
    lineHeight: 20,
  },
  details: {
    borderTopWidth: 1,
    borderColor: "rgba(229, 231, 235, 1)",
    flexShrink: 1,
  },
});

const inputStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
  },
});
