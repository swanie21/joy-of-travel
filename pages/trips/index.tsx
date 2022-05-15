import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import Head from 'next/head';
import tripSetData from '../api/trips.json';
import { TripCard } from '../../components/TripCard';

import styles from './trips.module.scss';

const Trips: NextPage = () => {
  const tripData = tripSetData.tripSet;

  return (
    <div>
      <Head>
        <title>Inspirato: Trips List</title>
        <meta name="description" content="Inspirato list of booked trips" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.trips}>
        <ul>
          {/* documentation about Object.keys key type: https://fettblog.eu/typescript-iterating-over-objects/   */}
          {Object.keys(tripData).map((key: any) => (
            <TripCard
              key={`${tripData[key].unitID} - ${tripData[key].rid}`}
              checkInDate={tripData[key].checkInDate}
              heroImage={tripData[key].heroImage}
              unitName={tripData[key].unitName}
              unitStyleName={tripData[key].unitStyleName}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      tripSetData
    }
  };
};

export default Trips;


