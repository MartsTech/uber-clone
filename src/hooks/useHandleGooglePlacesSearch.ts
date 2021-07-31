import { useNavigation } from "@react-navigation/native";
import {
  GooglePlaceData,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";
import { useStore } from "../stores/store";
import { MapNavigationProp } from "../types/navigation";

export default () => {
  const { setOrigin, setDestination } = useStore().navStore;
  const navigation = useNavigation<MapNavigationProp>();

  const handleOriginSearch = (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null = null
  ) => {
    setOrigin({
      location: details!.geometry.location,
      description: data.description,
    });
    setDestination(null);
  };

  const handleDestinationSearch = (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null = null
  ) => {
    setDestination({
      location: details!.geometry.location,
      description: data.description,
    });
    navigation.navigate("RideOptionsCard");
  };

  return [handleOriginSearch, handleDestinationSearch] as const;
};
