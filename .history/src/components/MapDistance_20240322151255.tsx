import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';

mapboxgl.accessToken = 'pk.eyJ1IjoibW1lbmRlenBhZXoiLCJhIjoiY2x0enVscms1MDQ0aDJrazF4dzU5N2ltaSJ9.QJh_5No8kXfyKWbMmSrLfw';

const MapDistance: React.FC = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [2.3399, 48.8555],
      zoom: 12
    });

    const distanceContainer = document.getElementById('distance');

    const geojson = {
      'type': 'FeatureCollection',
      'features': []
    };

    const linestring = {
      'type': 'Feature',
      'geometry': {
        'type': 'LineString',
        'coordinates': []
      }
    };

    map.on('load', () => {
      map.addSource('geojson', {
        'type': 'geojson',
        'data': geojson
      });

      map.addLayer({
        id: 'measure-points',
        type: 'circle',
        source: 'geojson',
        paint: {
          'circle-radius': 5,
          'circle-color': '#000'
        },
        filter: ['in', '$type', 'Point']
      });

      map.addLayer({
        id: 'measure-lines',
        type: 'line',
        source: 'geojson',
        layout: {
          'line-cap': 'round',
          'line-join': 'round'
        },
        paint: {
          'line-color': '#000',
          'line-width': 2.5
        },
        filter: ['in', '$type', 'LineString']
      });

      map.on('click', (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['measure-points']
        });

        if (geojson.features.length > 1) geojson.features.pop();

        distanceContainer.innerHTML = '';

        if (features.length) {
          const id = features[0].properties.id;
          geojson.features = geojson.features.filter(
            (point) => point.properties.id !== id
          );
        } else {
          const point = {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [e.lngLat.lng, e.lngLat.lat]
            },
            'properties': {
              'id': String(new Date().getTime())
            }
          };

          geojson.features.push(point);
        }

        if (geojson.features.length > 1) {
          linestring.geometry.coordinates = geojson.features.map(
            (point) => point.geometry.coordinates
          );

          geojson.features.push(linestring);

          const value = document.createElement('pre');
          const distance = turf.length(linestring);
          value.textContent = `Total distance: ${(distance / 1000).toLocaleString()}km`; // Conversion en kilomètres
          distanceContainer.appendChild(value);
        }

        map.getSource('geojson').setData(geojson);
      });
    });

    map.on('mousemove', (e) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ['measure-points']
      });
      map.getCanvas().style.cursor = features.length ? 'pointer' : 'crosshair';
    });

    return () => map.remove();
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
};

export default MapDistance;
