import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import mapboxgl from 'mapbox-gl';
import MapCard from './MapCard';

const MapWithDirections: React.FC = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleFindRoute = () => {
    console.log('Adresse d\'origine:', origin);
    console.log('Adresse de destination:', destination);
  };

  const handleOriginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h6">Trouver un itinéraire</Typography>
      <Box>
        <TextField
          label="Adresse d'origine"
          variant="outlined"
          fullWidth
          margin="normal"
          value={origin}
          onChange={handleOriginChange}
        />
        <TextField
          label="Adresse de destination"
          variant="outlined"
          fullWidth
          margin="normal"
          value={destination}
          onChange={handleDestinationChange}
        />
        <Button variant="contained" onClick={handleFindRoute}>Trouver l'itinéraire</Button>
      </Box>
      {<MapCard origin={origin} destination={destination} />}
    </Box>
  );
};

export default MapWithDirections;
