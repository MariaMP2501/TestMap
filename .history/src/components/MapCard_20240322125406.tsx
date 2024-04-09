import { Card, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect } from 'react';
import mapboxgl, { LngLatLike } from 'mapbox-gl';

interface MapCardProps {
  origin: string;
  destination: string;
}

const StyledMapCard = styled('div')({
  position: 'absolute',
  left: '50%',
  width: '30rem',
  height: '28rem',
  borderRadius: '0.5rem',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
});

const MapCard: React.FC<MapCardProps> = ({ origin, destination }) => {
  useEffect(() => {
    // Ici, vous pouvez utiliser les coordonnées d'origine et de destination pour afficher l'itinéraire sur la carte
  }, [origin, destination]);

  return (
    <StyledMapCard>
      <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} />
    </StyledMapCard>
  );
};

export default MapCard;
