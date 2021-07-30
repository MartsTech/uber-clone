import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Navigation from "navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store, StoreContext } from "stores/store";

const App = () => {
  <StoreContext.Provider value={store}>
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  </StoreContext.Provider>;
};

export default App;
