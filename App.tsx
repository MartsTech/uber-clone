import "react-native-gesture-handler";
import "intl";
import "intl/locale-data/jsonp/en-US";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation/RootNavigation";
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
