import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation/RootNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store, StoreContext } from "./src/stores/store";

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    </StoreContext.Provider>
  );
};

export default App;
