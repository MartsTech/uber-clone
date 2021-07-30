import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavOptions from "../../components/options/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/logo.svg")}
        />
        <NavOptions />
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
