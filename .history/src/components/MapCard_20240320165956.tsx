import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

const MapWithDirections = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibW1lbmRlenBhZXoiLCJhIjoiY2x0enVscms1MDQ0aDJrazF4dzU5N2ltaSJ9.QJh_5No8kXfyKWbMmSrLfw';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-79.4512, 43.6568],
      zoom: 13
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken
    });

    map.addControl(directions, 'top-left');

    return () => map.remove();
  }, []);

  return (
    <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }}></div>
  );
};

export default MapWithDirections;
