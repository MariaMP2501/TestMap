import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const MapAddresses: React.FC = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleFindRoute = () => {
    // Géocodage de l'adresse de départ
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: origin }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const originCoords = results[0].geometry.location;
        console.log('Coordonnées de départ:', originCoords);

        // Géocodage de l'adresse de destination
        geocoder.geocode({ address: destination }, (results, status) => {
          if (status === 'OK' && results[0]) {
            const destinationCoords = results[0].geometry.location;
            console.log('Coordonnées de destination:', destinationCoords);

            // Création de l'itinéraire
            const directionsService = new window.google.maps.DirectionsService();
            directionsService.route(
              {
                origin: originCoords,
                destination: destinationCoords,
                travelMode: 'DRIVING' // Mode de déplacement (DRIVING, WALKING, etc.)
              },
              (response, status) => {
                if (status === 'OK') {
                  console.log('Itinéraire:', response);
                  // Ici, vous pouvez utiliser la réponse pour afficher l'itinéraire sur la carte ou effectuer d'autres actions
                } else {
                  console.error('Erreur lors de la création de l\'itinéraire:', status);
                }
              }
            );
          } else {
            console.error('Impossible de géocoder l\'adresse de destination:', status);
          }
        });
      } else {
        console.error('Impossible de géocoder l\'adresse de départ:', status);
      }
    });
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
    </Box>
  );
};

export default MapAddresses;
