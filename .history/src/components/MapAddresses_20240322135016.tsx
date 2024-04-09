import { useRef, useState } from 'react'
import { Box, Button, Skeleton, TextField, Typography } from '@mui/material';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { SkeletonText } from '@chakra-ui/react';


function MapAddresses(){

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })
  if (isLoaded){
    return <SkeletonText />
  }
const MapAddresses: React.FC = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleFindRoute = () => {
    // Utiliser l'API Google Maps pour géocoder les adresses
    'AIzaSyCPJMoSMzedIoOFXaVbcF0DPo5Twp1pvxE'
    const geocoder = new window.google.maps.Geocoder();
    
    // Géocoder l'adresse de départ
    geocoder.geocode({ address: origin }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const originLatLng = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };
        console.log('Coordonnées de l\'adresse de départ :', originLatLng);
      } else {
        console.error('Adresse de départ introuvable');
      }
    });

    // Géocoder l'adresse de destination
    geocoder.geocode({ address: destination }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const destinationLatLng = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };
        console.log('Coordonnées de l\'adresse de destination :', destinationLatLng);
      } else {
        console.error('Adresse de destination introuvable');
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
}
export default MapAddresses;