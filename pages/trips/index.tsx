import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import TripSetData from '../api/trips.json';
import { Trip } from '../../types/trip';

import { Button } from '../../components/Button';
import { TripCard } from '../../components/TripCard';

import styles from './trips.module.scss';

const Trips: NextPage = () => {
  const [tripData, setTripData] = useState<Trip[]>(TripSetData.tripSet);
  const [checkInDateOrder, setCheckInDateOrder] = useState(false);
  const [unitStyle, setUnitStyle] = useState('');

  const toggleDateOrder = () => {
    const newToggle = !checkInDateOrder;    
    setCheckInDateOrder(newToggle);
    setTripData((previousState) =>
      previousState.sort((date1, date2) => {
        return newToggle
          ? Date.parse(date2.checkInDate) - Date.parse(date1.checkInDate) // need to parse since date is a string
          : Date.parse(date1.checkInDate) - Date.parse(date2.checkInDate);
      })
    );
  };

  useEffect(() => {
    if (unitStyle === 'all') {
      setTripData(TripSetData.tripSet);
    } else if (unitStyle === 'beach') {
      const results = TripSetData.tripSet.filter((trip) => trip.unitStyleName.toLowerCase() === unitStyle);
      setTripData(results);
    } else if (unitStyle === 'lifestyle') {
      const results = TripSetData.tripSet.filter((trip) => trip.unitStyleName.toLowerCase() === unitStyle);
      setTripData(results);
    } else if (unitStyle === 'metropolitan') {
      const results = TripSetData.tripSet.filter((trip) => trip.unitStyleName.toLowerCase() === unitStyle);
      setTripData(results);  
    } else if (unitStyle === 'mountain') {
      const results = TripSetData.tripSet.filter((trip) => trip.unitStyleName.toLowerCase() === unitStyle);
      setTripData(results);
    } else {
      setTripData(tripData);
    }
  }, [unitStyle]);

  return (
    <div>
      <Head>
        <title>Inspirato: Trips List</title>
        <meta name="description" content="Inspirato list of booked trips" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.trips}>
        <div className={styles['trips__filters--bar']}>
          <h1>Trips <span>({tripData.length} total)</span></h1>
          <div className={styles['trips__filters']}>
            <div className={styles['trips__filters--select-unit-styles']}>
              <label htmlFor="unit-style-select">Sort by Unit Style:</label>
              <select id="unit-style-select" name="unit style" onChange={(event) => setUnitStyle(event.target.value)} value={unitStyle}> 
                <option value="all">All</option>
                <option value="beach">Beach</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="metropolitan">Metropolitan</option>
                <option value="mountain">Mountain</option>
              </select>
            </div>
            <Button
              label={`${checkInDateOrder ? 'Sort by Closest Trip Date' : 'Sort by Farthest Trip Date'}`}
              onClick={(): void => toggleDateOrder()}
              size="small"
              styleClass={styles['trips__filters--button']}
            />
          </div>
        </div>
        <ul className={styles['trips__list']}>
          {tripData.map((trip, index) => {
            return (
              <TripCard
                key={index}
                checkInDate={trip.checkInDate}
                heroImage={trip.heroImage}
                locationName={trip.locationName}
                unitName={trip.unitName}
                unitStyleName={trip.unitStyleName}
              />
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      TripSetData
    }
  };
};

export default Trips;


