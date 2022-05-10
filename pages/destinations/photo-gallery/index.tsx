import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Masonry from 'react-masonry-css';

import styles from './destinations.module.scss';

import { destinations } from '../../api/Destinations';
import { Destination } from '../../../types/destination';

const Destinations: NextPage = () => {
  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    600: 1
  };

  return (
    <div className="destinations">
      <Head>
        <title>Photo Gallery of World Adventurer</title>
        <meta name="description" content="Scenic photos of countries I have traveled to." />
      </Head>

      <main>
        <Masonry breakpointCols={breakpointColumnsObj} className={styles['destinations__my-masonry-grid']} columnClassName={styles['destinations__my-masonry-grid-column']}>
          {destinations.map((item: Destination, index) => (
            <div key={index}>
              {item.photoOrientation === 'vertical' ? (
                <Image
                  src={item.photo}
                  alt={item.photoAlt}
                  width={500}
                  height={667}
                />
              ) : (
                <Image
                  src={item.photo}
                  alt={item.photoAlt}
                  width={500}
                  height={375}
                />
              )}
            </div>
          ))}
        </Masonry>
      </main>
    </div>
  );
};

export default Destinations;