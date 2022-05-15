import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import Head from 'next/head';
import TripSetData from '../api/trips.json';
import { TripCard } from '../../components/TripCard';

import styles from './trips.module.scss';

const Trips: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Inspirato: Trips List</title>
        <meta name="description" content="Inspirato list of booked trips" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.trips}>
        <ul className={styles['trips__list']}>
          {TripSetData.tripSet.map((trip) => {
            return (
              <TripCard
                key={trip.curatedTripMasterInventoryId}
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


