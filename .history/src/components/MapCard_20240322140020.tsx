import { Card, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect } from 'react';
import mapboxgl, { LngLatLike } from 'mapbox-gl';


const StyledMapCard = styled('div')({
  position: 'absolute',
  left: '50%',
  width: '30rem',
  height: '28rem',
  borderRadius: '0.5rem',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
});

const MapCard: React.FC = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibW1lbmRlenBhZXoiLCJhIjoiY2x0enVscms1MDQ0aDJrazF4dzU5N2ltaSJ9.QJh_5No8kXfyKWbMmSrLfw';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [2.3522, 48.8566] as LngLatLike,
      zoom: 11.15,
    });

    setMap(mapInstance);

    // Add event listener to get the coordinates on click
    mapInstance.on('click', (e) => {
      getAddressFromCoordinates(e.lngLat);
    });

    return () => mapInstance.remove();
  }, []);

  const getAddressFromCoordinates = async (coords: LngLatLike) => {
    try {
      const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coords.lng},${coords.lat}.json?access_token=${mapboxgl.accessToken}`);
      const data = await response.json();
      const firstFeature = data.features[0];
      if (firstFeature) {
        const description = `<strong>${firstFeature.text}</strong>`;
        new mapboxgl.Popup()
          .setLngLat(coords)
          .setHTML(description)
          .addTo(map!);
      }
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  return (
    <StyledMapCard>
      <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} />
    </StyledMapCard>
  );
};

export default MapCard;