import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import TripSetData from '../api/trips.json';
import { Trip } from '../../types/trip';

import { Button } from '../../components/Button';
import { TripCard } from '../../components/TripCard';

import styles from './trips.module.scss';

const Trips: NextPage = () => {
  const [tripData, setTripData] = useState<Trip[]>(TripSetData.tripSet);
  const [checkInDateOrder, setCheckInDateOrder] = useState(false);

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

  return (
    <div>
      <Head>
        <title>Inspirato: Trips List</title>
        <meta name="description" content="Inspirato list of booked trips" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.trips}>
        <Button label="Sort by farthest trip date" onClick={(): void => toggleDateOrder()} />
        <ul className={styles['trips__list']}>
          {tripData.map((trip, index) => {
            return (
              <TripCard
                key={index}
                checkInDate={trip.checkInDate}
                heroImage={trip.heroImage}
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


