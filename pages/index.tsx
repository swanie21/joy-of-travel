import type { NextPage } from 'next';
import Head from 'next/head';

import { LinkButton } from '../components/LinkButton';

import styles from '../styles/pages/home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles['home']}>
      <Head>
        <title>World Adventurer</title>
        <meta charSet="utf-8" />
        <meta name="description" content="The joy of traveling as a world adventurer." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles['home__container']}>
          <div className={styles['home__content']}>
            <h1 className={styles['home__content--title']}>Travel the World <span>And discover new adventures</span></h1>
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
