import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import mapboxgl from 'mapbox-gl';

const MapWithDirections: React.FC = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleFindRoute = () => {
    // Ici, vous pouvez utiliser une API de routage comme Mapbox Directions API pour trouver un itinéraire entre les adresses d'origine et de destination.
    // Pour cet exemple, nous allons simplement afficher les adresses dans la console.
    console.log('Adresse d\'origine:', origin);
    console.log('Adresse de destination:', destination);
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
          onChange={(e) => setOrigin(e.target.value)}
        />
        <TextField
          label="Adresse de destination"
          variant="outlined"
          fullWidth
          margin="normal"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <Button variant="contained" onClick={handleFindRoute}>Trouver l'itinéraire</Button>
      </Box>
      {/* Vous pouvez ajouter ici votre carte avec les itinéraires */}
    </Box>
  );
};

export default MapWithDirections;
