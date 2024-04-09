import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import MapCard from './MapCard';

const MapAddresses: React.FC = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleFindRoute = () => {
    const geocoder = new window.google.maps.Geocoder();
    
    // Géocoder l'adresse de départ
    geocoder.geocode({ address: origin }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const originLatLng = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };
        console.log('Coordonnées de l\'adresse de départ :', originLatLng);

        // Géocoder l'adresse de destination
        geocoder.geocode({ address: destination }, (results, status) => {
          if (status === 'OK' && results[0]) {
            const destinationLatLng = {
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            };
            console.log('Coordonnées de l\'adresse de destination :', destinationLatLng);

            // Mettre à jour les coordonnées dans l'état ou appeler une fonction pour les utiliser
            // Par exemple : setRoute({ origin: originLatLng, destination: destinationLatLng });
          } else {
            console.error('Adresse de destination introuvable');
          }
        });
      } else {
        console.error('Adresse de départ introuvable');
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
      {/* Affichez ici la carte avec l'itinéraire */}
    </Box>
  );
};

export default MapAddresses;
