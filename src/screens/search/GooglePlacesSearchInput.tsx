import { GOOGLE_MAPS_API_KEY } from "@env";
import React from "react";
import {
  GooglePlacesAutocomplete,
  Styles,
} from "react-native-google-places-autocomplete";
import useHandleGooglePlacesSearch from "../../hooks/useHandleGooglePlacesSearch";

interface GooglePlacesSearchInputProps {
  type: "origin" | "destination";
  placeholder: string;
  styles?: Partial<Styles>;
}

const GooglePlacesSearchInput: React.FC<GooglePlacesSearchInputProps> = ({
  type,
  placeholder,
  styles,
}) => {
  const [handleOriginSearch, handleDestinationSearch] =
    useHandleGooglePlacesSearch();

  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      minLength={2}
      enablePoweredByContainer={false}
      fetchDetails={true}
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: "en",
      }}
      onPress={type === "origin" ? handleOriginSearch : handleDestinationSearch}
      styles={styles}
    />
  );
};

export default GooglePlacesSearchInput;
