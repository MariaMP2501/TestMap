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
  const [distance, setDistance] = useState<number | null>(null); // Initialisation de distance à null

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
      // Géocoder les adresses d'origine et de destination pour obtenir les coordonnées
      const originCoordinates = await geocodeAddress(origin);
      const destinationCoordinates = await geocodeAddress(destination);

      // Calculer la distance entre les deux points
      const calculatedDistance = calculateDistance(originCoordinates, destinationCoordinates);
      setDistance(calculatedDistance);
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'itinéraire:', error);
    }
  };

  const geocodeAddress = async (address: string): Promise<[number, number]> => {
    try {
      const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${address}&limit=1`);
      if (!response.ok) {
        throw new Error('Adresse introuvable');
      }
      const data = await response.json();
      if (data.features.length === 0) {
        throw new Error('Adresse introuvable');
      }
      const coordinates = data.features[0].geometry.coordinates;
      return [coordinates[1], coordinates[0]]; // Retourner les coordonnées [lat, lon]
    } catch (error) {
      console.error('Erreur lors de la géocodage de l\'adresse:', error);
      throw error;
    }
  };

  const calculateDistance = ([lat1, lon1]: [number, number], [lat2, lon2]: [number, number]): number => {
    const R = 6371e3; // Rayon de la Terre en mètres
    const φ1 = lat1 * Math.PI / 180; // Latitude en radians
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance en mètres
  };

  const handleOriginAddressClick = async (address: string) => {
    setOrigin(address);
    setSuggestedOriginAddresses([]);
    try {
      const coordinates = await geocodeAddress(address);
      console.log('Coordonnées de l\'adresse de départ:', coordinates);
    } catch (error) {
      console.error('Erreur lors de la géocodage de l\'adresse:', error);
    }
  };

  const handleDestinationAddressClick = async (address: string) => {
    setDestination(address);
    setSuggestedDestinationAddresses([]);
    try {
      const coordinates = await geocodeAddress(address);
      console.log('Coordonnées de l\'adresse de destination:', coordinates);
    } catch (error) {
      console.error('Erreur lors de la géocodage de l\'adresse:', error);
    }
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
        <TextField
          label="Distance (km)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={distance !== null ? (distance / 1000).toFixed(2) : ''}
          InputProps={{
            readOnly: true,
          }}
        />
        <Button variant="contained" onClick={handleFindRoute}>Trouver l'itinéraire</Button>
      </Box>
    </Box>
  );
};

export default MapAddresses;

