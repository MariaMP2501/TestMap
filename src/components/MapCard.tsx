import { styled } from "@mui/system";
import React, { useEffect, useState } from 'react';
import mapboxgl, { LngLatLike } from 'mapbox-gl';


const StyledMapCard = styled('div')({
  position: 'absolute',
  left: '60%',
  width: '30rem',
  height: '28rem',
  borderRadius: '0.5rem',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
});

const MapCard: React.FC = () => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibW1lbmRlenBhZXoiLCJhIjoiY2x0enVscms1MDQ0aDJrazF4dzU5N2ltaSJ9.QJh_5No8kXfyKWbMmSrLfw';

    const initializeMap = () => {
      const mapInstance = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [2.3522, 48.8566] as LngLatLike,
        zoom: 11.15,
      });

      mapInstance.on('load', () => {
        setMap(mapInstance);
      });

      return mapInstance;
    };

    const map = initializeMap();

    return () => map.remove();
  }, []);

  useEffect(() => {
    if (map) {
      map.on('click', 'places', (e) => {
        const coordinates = (e.features[0].geometry as any).coordinates.slice() as LngLatLike;
        const description = e.features[0].properties.description;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });

      map.on('mouseenter', 'places', () => {
        map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
      });
    }
  }, [map]);

  return (
    <StyledMapCard>
      <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} />
    </StyledMapCard>
  );
};

export default MapCard;
