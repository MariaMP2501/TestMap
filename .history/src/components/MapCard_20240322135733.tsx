import { Card, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from 'react';
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
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [coordinates, setCoordinates] = useState<LngLatLike | null>(null);
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
    const mapInstance = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [2.3522, 48.8566] as LngLatLike,
      zoom: 11.15,
    });
    setMap(mapInstance);

    // Add event listener to get the coordinates on click
    mapInstance.on('click', (e) => {
      setCoordinates(e.lngLat);
    });

    return () => mapInstance.remove();
  }, []);

  useEffect(() => {
    if (map && coordinates) {
      getAddressFromCoordinates(coordinates);
    }
  }, [map, coordinates]);

  const getAddressFromCoordinates = async (coords: LngLatLike) => {
    try {
      const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coords.lng},${coords.lat}.json?access_token=${mapboxgl.accessToken}`);
      const data = await response.json();
      const firstFeature = data.features[0];
      if (firstFeature) {
        setAddress(firstFeature.place_name);
      }
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  return (
    <StyledMapCard>
      <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} />
      {address && <Typography variant="body1">{address}</Typography>}
    </StyledMapCard>
  );
};

export default MapCard;
