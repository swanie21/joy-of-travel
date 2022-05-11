import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import { mapboxClient } from '../../services/mapbox';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { markers } from '../api/Markers';
import styles from './map.module.scss';

const Map: NextPage = () => {
  // used any for now because setting <string | HTMLElement>(null) throws error
  // solution found here with setting state: https://stackoverflow.com/questions/66271302/reactjs-mapbox-gl-invalid-type-container-must-be-a-string-or-htmlelement
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | any>(null);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('(max-width: 450px)');
    const tabletMediaQuery = window.matchMedia('(max-width: 1025px)');

    mapboxgl.accessToken = mapboxClient;

    if (map.current) return; // initialize map only once

    if (mobileMediaQuery.matches) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [90.0000, -1.0000], // center on southeast Asia
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
        zoom: 1.8
      });
    }

    const geojson = {
      type: 'Feature',
      features: markers.map((marker) => ({
        properties: {
          city: marker.city,
          country: marker.country,
          iconSize: [30, 42],
        },
        geometry: {
          type: 'Point',
          coordinates: {
            lat: marker.latCoord,
            lng: marker.longCoord
          }
        }
      }))
    };

    map.current.on('load', () => {
      geojson.features.forEach((marker) => {
        // create a DOM element for the marker
        const markerIcon = document.createElement('div');
        markerIcon.className = 'location-marker';
        markerIcon.style.backgroundImage = 'url(/location-marker.png)';
        markerIcon.style.width = marker.properties.iconSize[0] + 'px';
        markerIcon.style.height = marker.properties.iconSize[1] + 'px';

        new mapboxgl.Marker(markerIcon)
          .setLngLat(marker.geometry.coordinates) // add marker to map
          .setPopup( // add popup to map
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<p>${marker.properties.city}, ${marker.properties.country}</p>`
            )
          )
          .addTo(map.current);
      });
    });

    // disable map zoom when scrolling
    map.current.scrollZoom.disable();

    // Add zoom and rotation controls to the map
    map.current.addControl(new mapboxgl.NavigationControl());

  }, []);

  return (
    <div className={styles.map} id="map">
      <Head>
        <title>Map of World Adventurer</title>
        <meta name="description" content="World map with location markers of all the countries I have traveled to." />
      </Head>

      <main>
        <div className={styles['map__title']}>
          <h1>World Adventurer</h1>
          <p>Traveling is my ultimate joy in life. <Link href="/destinations/photo-gallery"><a>Check out</a></Link> photos from my adventures.</p>
        </div>
        <div className={styles['map__container']} ref={mapContainer} />
        <div className={styles['map__home-back-link']}>
          <div className="link-arrow">
            <Link href="/">
              <a>
                <Image
                  src="/left-arrow-blue.svg"
                  alt="left arrow blue icon"
                  width={18}
                  height={12}
                />
                Go back
              </a>
            </Link>
            <span>to home page</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Map;