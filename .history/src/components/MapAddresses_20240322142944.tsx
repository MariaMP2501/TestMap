import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import DirectionsService from '@mapbox/mapbox-sdk/services/directions';

// Fonction pour récupérer les adresses depuis l'API Adresse Data Gouv
const fetchAddresses = async (query) => {
  try {
    const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${query}&limit=5`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des adresses');
    }
    const data = await response.json();
    return data.features.map((feature) => feature.properties.label);
  } catch (error) {
    console.error('Erreur:', error.message);
    return []; // Retourner un tableau vide en cas d'erreur
  }
};

const MapAddresses: React.FC = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [suggestedOriginAddresses, setSuggestedOriginAddresses] = useState<string[]>([]);
  const [suggestedDestinationAddresses, setSuggestedDestinationAddresses] = useState<string[]>([]);
  const directionsService = DirectionsService({ accessToken: 'pk.eyJ1IjoibW1lbmRlenBhZXoiLCJhIjoiY2x0enVscms1MDQ0aDJrazF4dzU5N2ltaSJ9.QJh_5No8kXfyKWbMmSrLfw' });

  const handleOriginInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setOrigin(query);
    if (query.trim() !== '') {
      const addresses = await fetchAddresses(query);
      setSuggestedOriginAddresses(addresses);
    } else {
      setSuggestedOriginAddresses([]);
    }
  };

  const handleDestinationInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setDestination(query);
    if (query.trim() !== '') {
      const addresses = await fetchAddresses(query);
      setSuggestedDestinationAddresses(addresses);
    } else {
      setSuggestedDestinationAddresses([]);
    }
  };

  const handleFindRoute = async () => {
    try {
      const response = await directionsService.getDirections({
        profile: 'driving',
        waypoints: [
          { coordinates: [longitudeOrigine, latitudeOrigine] }, // Remplacez longitudeOrigine et latitudeOrigine par les coordonnées de l'origine
          { coordinates: [longitudeDestination, latitudeDestination] } // Remplacez longitudeDestination et latitudeDestination par les coordonnées de la destination
        ],
        geometries: 'geojson' // Pour récupérer la distance dans la réponse
      }).send();

      const distance = response.body.routes[0].distance; // Distance en mètres
      console.log('Distance:', distance);
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'itinéraire:', error);
    }
  };

  const handleOriginAddressClick = (address: string) => {
    setOrigin(address);
    setSuggestedOriginAddresses([]);
  };

  const handleDestinationAddressClick = (address: string) => {
    setDestination(address);
    setSuggestedDestinationAddresses([]);
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
          onChange={handleOriginInputChange}
        />
        {suggestedOriginAddresses.map((address, index) => (
          <Typography
            key={index}
            variant="body2"
            onClick={() => handleOriginAddressClick(address)}
            style={{ color: 'grey', cursor: 'pointer' }}
          >
            {address}
          </Typography>
        ))}
        <TextField
          label="Adresse de destination"
          variant="outlined"
          fullWidth
          margin="normal"
          value={destination}
          onChange={handleDestinationInputChange}
        />
        {suggestedDestinationAddresses.map((address, index) => (
          <Typography
            key={index}
            variant="body2"
            onClick={() => handleDestinationAddressClick(address)}
            style={{ color: 'grey', cursor: 'pointer' }}
          >
            {address}
          </Typography>
        ))}
        <TextField // Champ texte pour afficher la distance
          label="Distance (m)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={distance !== null ? distance.toString() : ''}
          InputProps={{
            readOnly: true, // Rendre le champ en lecture seule
          }}
        />
        <Button variant="contained" onClick={handleFindRoute}>Trouver l'itinéraire</Button>
      </Box>
    </Box>
  );
};

export default MapAddresses;
