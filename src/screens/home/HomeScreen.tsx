import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapCardFavourites from "../map/card/MapCardFavourites";
import GooglePlacesSearchInput from "../../components/search/GooglePlacesSearchInput";
import HomeOptions from "./HomeOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/logo.svg")}
        />
        <GooglePlacesSearchInput
          type="origin"
          placeholder="Where From?"
          styles={inputStyles}
        />
        <HomeOptions />
        <MapCardFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    height: "100%",
  },
  container: {
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

const inputStyles = StyleSheet.create({
  container: {
    flex: 0,
    zIndex: 50,
  },
  textInput: {
    fontSize: 18,
  },
});
