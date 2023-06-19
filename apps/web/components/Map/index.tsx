import { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
  });

  const center = {
    lat: -6.13612,
    lng: 106.72168,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "300px" }}
      zoom={17}
      center={center}
    />
  ) : (
    <></>
  );
};

export default Map;
