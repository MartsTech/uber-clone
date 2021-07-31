import { GOOGLE_MAPS_API_KEY } from "@env";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useStore } from "../../stores/store";

const GooglePlacesInput = () => {
  const { setOrigin, setDestination } = useStore().navStore;

  return (
    <GooglePlacesAutocomplete
      placeholder="Where From?"
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      minLength={2}
      enablePoweredByContainer={false}
      fetchDetails={true}
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: "en",
      }}
      onPress={(data, details = null) => {
        setOrigin({
          location: details?.geometry.location,
          description: data.description,
        });
        setDestination(null);
      }}
      styles={{
        container: {
          flex: 0,
        },
        textInput: {
          fontSize: 18,
        },
      }}
    />
  );
};

export default GooglePlacesInput;
