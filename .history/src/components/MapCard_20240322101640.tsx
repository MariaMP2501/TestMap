import { Card, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect } from 'react';
import mapboxgl, { LngLatLike } from 'mapbox-gl';


const StyledMapCard = styled('div')({
  position: 'absolute',
  left: '50%',
  width: '30rem',
  height: '28rem',
  borderRadius: '0.5rem',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
});

const MapCard: React.FC = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibW1lbmRlenBhZXoiLCJhIjoiY2x0enVscms1MDQ0aDJrazF4dzU5N2ltaSJ9.QJh_5No8kXfyKWbMmSrLfw';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-77.04, 38.907] as LngLatLike,
      zoom: 11.15,
    });

    map.on('load', () => {
      map.addSource('places', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {
                description: '<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
                icon: 'theatre',
              },
              geometry: {
                type: 'Point',
                coordinates: [-77.038659, 38.931567] as LngLatLike,
              },
            },
            // Add more features here...
          ],
        },
      });

      map.addLayer({
        id: 'places',
        type: 'symbol',
        source: 'places',
        layout: {
          'icon-image': ['get', 'icon'],
          'icon-allow-overlap': true,
        },
      });

      map.on('click', 'places', (e) => {
        const coordinates = (e.features[0].geometry as any).coordinates.slice() as LngLatLike;
        const description = e.features[0].properties.description;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });

      map.on('mouseenter', 'places', () => {
        map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
      });
    });

    return () => map.remove();
  }, []);

  return (

    <StyledMapCard>
      <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} />
    </StyledMapCard>);
};

export default MapCard;
