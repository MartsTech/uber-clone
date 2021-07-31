import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { MapStackParamList } from "../../types/navigation";
import Map from "./Map";
import NavCard from "./NavCard";
import RideOptionsCard from "./RideOptionsCard";

const MapScreen = () => {
  const Stack = createStackNavigator<MapStackParamList>();

  return (
    <View>
      <View style={styles.half}>
        <Map />
      </View>
      <View style={styles.half}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="NavCard" component={NavCard} />
          <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  half: {
    height: "50%",
  },
});
