import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GooglePlacesSearchInput from "../search/GooglePlacesSearchInput";
import HomeNavOptions from "./HomeNavOptions";

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
        <HomeNavOptions />
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
  },
  textInput: {
    fontSize: 18,
  },
});
