import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

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

  const handleFindRoute = () => {
    // Ici, vous pouvez utiliser les valeurs d'origin et de destination
    // pour trouver un itinéraire
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
          <Typography key={index} variant="body2" onClick={() => setOrigin(address)}>
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
          <Typography key={index} variant="body2" onClick={() => setDestination(address)}>
            {address}
          </Typography>
        ))}
        <Button variant="contained" onClick={handleFindRoute}>Trouver l'itinéraire</Button>
      </Box>
    </Box>
  );
};

export default MapAddresses;
