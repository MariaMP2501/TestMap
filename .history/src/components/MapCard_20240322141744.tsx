import { styled } from "@mui/system";
import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import mapboxgl, { LngLatLike } from 'mapbox-gl';

const StyledMapCard = styled('div')({
  position: 'absolute',
  left: '50%',
  width: '30rem',
  height: '28rem',
  borderRadius: '0.5rem',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
});

const MapCard = forwardRef((props, ref) => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

    const initializeMap = () => {
      const mapInstance = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [2.3522, 48.8566] as LngLatLike,
        zoom: 11.15,
      });

      mapInstance.on('load', () => {
        setMap(mapInstance);
      });

      return mapInstance;
    };

    const map = initializeMap();

    return () => map.remove();
  }, []);

  useEffect(() => {
    if (map) {
      // Ajoutez votre logique pour afficher l'itinéraire sur la carte ici
    }
  }, [map]);

  // Fonction pour afficher l'itinéraire, accessible depuis MapAddresses
  useImperativeHandle(ref, () => ({
    displayRoute(origin: string, destination: string) {
      // Utilisez origin et destination pour afficher l'itinéraire sur la carte
      console.log('Affichage de l\'itinéraire depuis', origin, 'vers', destination);
    }
  }));

  return (
    <StyledMapCard>
      <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} />
    </StyledMapCard>
  );
});

export default MapCard;
