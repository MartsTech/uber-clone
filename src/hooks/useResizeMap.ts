import { useEffect, useRef } from "react";
import MapView from "react-native-maps";
import { MapCords } from "src/types/map";

export default (origin: MapCords | null, destination: MapCords | null) => {
  const mapRef = useRef<MapView | null>(null);

  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current?.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, bottom: 50, left: 50, right: 50 },
    });
  }, [origin, destination]);

  return [mapRef] as const;
};
