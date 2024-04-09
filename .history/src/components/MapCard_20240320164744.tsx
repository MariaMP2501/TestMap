import { Card } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

const MapStyledCard = styled(Card)`
  padding: 2px;
  display: flex;
  flex-direction: row;
  img {
    width: 30em;
    height: 20em;
    border-radius: 5%;
  }
`;

interface MapCardProps {
  formul: string;
  nbOfPassenger: number;
  price: string;
  timeEstimated: number;
  scheduledDropOff: string;
}

export const MapCard = ({
  formul,
  nbOfPassenger,
  price,
  timeEstimated,
  scheduledDropOff,
}: MapCardProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibW1lbmRlenBhZXoiLCJhIjoiY2x0enVscms1MDQ0aDJrazF4dzU5N2ltaSJ9.QJh_5No8kXfyKWbMmSrLfw";

    const map = new mapboxgl.Map({
      container: mapContainer.current!,
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-79.4512, 43.6568],
      zoom: 13,
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    });

    map.addControl(directions, "top-left");

    return () => map.remove();
  }, []);

  return (
    <MapStyledCard>
      <div ref={mapContainer} style={{ width: "100%", height: "400px" }} />
    </MapStyledCard>
  );
};
