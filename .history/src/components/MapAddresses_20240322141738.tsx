import React, { useState, useRef } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import MapCard from './MapCard';

const MapAddresses: React.FC = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const mapCardRef = useRef<any>(null); // Référence au composant MapCard

  const handleFindRoute = () => {
    // Appel de la fonction pour afficher l'itinéraire sur la carte
    mapCardRef.current?.displayRoute(origin, destination);
  };

  return (
    <Box>
      <Typography variant="h6">Trouver un itinéraire</Typography>
      <Box>
        <TextField
          label="Adresse de départ"
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
      <MapCard ref={mapCardRef} /> {/* Utilisation de la référence */}
    </Box>
  );
};

export default MapAddresses;
