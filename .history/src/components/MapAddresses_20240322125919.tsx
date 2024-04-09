import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import MapCard from './MapCard';

const MapAddresses: React.FC = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleFindRoute = () => {
    // Utiliser l'API Google Maps pour géocoder les adresses
    const geocoder = new window.google.maps.Geocoder();
    
    // Géocoder l'adresse de départ
    geocoder.geocode({ address: origin }, (resultsOrigin, statusOrigin) => {
      if (statusOrigin === 'OK' && resultsOrigin[0]) {
        // Géocoder l'adresse de destination
        geocoder.geocode({ address: destination }, (resultsDest, statusDest) => {
          if (statusDest === 'OK' && resultsDest[0]) {
            // Récupérer les coordonnées des adresses d'origine et de destination
            const originLatLng = {
              lat: resultsOrigin[0].geometry.location.lat(),
              lng: resultsOrigin[0].geometry.location.lng()
            };
            const destLatLng = {
              lat: resultsDest[0].geometry.location.lat(),
              lng: resultsDest[0].geometry.location.lng()
            };
            console.log('Coordonnées de l\'adresse de départ :', originLatLng);
            console.log('Coordonnées de l\'adresse de destination :', destLatLng);
            
            // Maintenant, vous pouvez utiliser ces coordonnées pour créer l'itinéraire sur la carte
            // Vous pouvez passer ces coordonnées à MapCard comme props
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
      {/* Passer les coordonnées des adresses d'origine et de destination à MapCard */}
      <MapCard origin={origin} destination={destination} />
    </Box>
  );
};

export default MapAddresses;
