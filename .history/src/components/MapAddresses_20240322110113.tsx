import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import MapCard from './MapCard';

const MapAddresses: React.FC = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  useEffect(() => {
    const initAutocomplete = () => {
      const originInput = document.getElementById('origin');
      const destinationInput = document.getElementById('destination');

      if (originInput && destinationInput) {
        const autocompleteOrigin = new window.google.maps.places.Autocomplete(originInput);
        const autocompleteDestination = new window.google.maps.places.Autocomplete(destinationInput);
      }
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      script.onload = () => initAutocomplete();
      document.body.appendChild(script);
    } else {
      initAutocomplete();
    }
  }, []);

  const handleFindRoute = () => {
    console.log('Adresse d\'origine:', origin);
    console.log('Adresse de destination:', destination);
    // Vous pouvez également ici appeler une fonction pour trouver l'itinéraire avec les adresses saisies.
  };

  return (
    <Box>
      <Typography variant="h6">Trouver un itinéraire</Typography>
      <Box>
        <TextField
          id="origin"
          label="Adresse de départ"
          variant="outlined"
          fullWidth
          margin="normal"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <TextField
          id="destination"
          label="Adresse de destination"
          variant="outlined"
          fullWidth
          margin="normal"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <Button variant="contained" onClick={handleFindRoute}>Trouver l'itinéraire</Button>
      </Box>
    </Box>
  );
};

export default MapAddresses;
