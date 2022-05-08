import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';

import { mapboxClient } from '../../services/mapbox';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import styles from './map.module.scss';

const Map: NextPage = () => {
  // used any for now because setting <string | HTMLElement>(null) throws error
  // solution found here with setting state: https://stackoverflow.com/questions/66271302/reactjs-mapbox-gl-invalid-type-container-must-be-a-string-or-htmlelement
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('(max-width: 450px)');
    const tabletMediaQuery = window.matchMedia('(max-width: 1025px)');

    mapboxgl.accessToken = mapboxClient;

    if (map.current) return; // initialize map only once

    if (mobileMediaQuery.matches) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [90.0000, 90.0000], // center map on Bangladesh
        zoom: 1
      });
    } else if (tabletMediaQuery.matches) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [14.4974, 14.4524], // center map on Senegal
        zoom: 1.1
      });
    } else {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [15.4542, 18.7322], // center map on Chad
        zoom: 2.1
      });
    }

    // Add zoom and rotation controls to the map
    map.current.addControl(new mapboxgl.NavigationControl());

  }, []);

  return (
    <>
      <div id="map">
        <div className={styles['map']} ref={mapContainer} />
      </div>
    </>  
  );
};

export default Map;