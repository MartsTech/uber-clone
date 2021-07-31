import { observer } from "mobx-react-lite";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useStore } from "../../stores/store";

const Map = () => {
  const { origin } = useStore().navStore;

  if (!origin) {
    return null;
  }

  return (
    <MapView
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      style={{ flex: 1 }}
    >
      <Marker
        title="Origin"
        identifier="origin"
        description={origin.description}
        coordinate={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
        }}
      />
    </MapView>
  );
};

export default observer(Map);
