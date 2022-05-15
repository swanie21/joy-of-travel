import type { NextPage } from 'next';
import Head from 'next/head';

import { LinkButton } from '../components/LinkButton';

import styles from '../styles/pages/home.module.scss';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>World Adventurer</title>
        <meta name="description" content="The joy of traveling as a world adventurer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.home}>
        <div className={styles['home__container']}>
          <div className={styles['home__content']}>
            <h1 className={styles['home__content--title']}>Travel the World</h1>
            <p className={styles['home__content--subtitle']}>And discover new adventures</p>
            <div className={styles['home__buttons']}>
              <LinkButton href="/map" link="Map" />
              <LinkButton href="/destinations/photo-gallery" link="Photos" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
