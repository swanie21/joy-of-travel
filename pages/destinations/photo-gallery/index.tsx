import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';

import { destinations } from '../../api/Destinations';
import { Destination } from '../../../types/destination';

import { Button } from '../../../components/Button';

import styles from './destinations.module.scss';

const Destinations: NextPage = () => {
  const [photos, setPhotos] = useState(destinations || []);
  const [photosVisible, setphotosVisible] = useState(7);

  useEffect(() => {
    setPhotos(destinations.slice(0, photosVisible));
  }, [photosVisible]);

  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    580: 1
  };

  return (
    <div className={styles['destinations']}>
      <Head>
        <title>Photo Gallery of World Adventurer</title>
        <meta name="description" content="Scenic photos of countries I have traveled to." />
      </Head>

      <main>
        <div className={styles['destinations__title']}>
          <h1>Photos from Around the World</h1>
          <p>From bustling cities to remote beaches, I love to explore it all!</p>
        </div>
        <div className={styles['destinations__photos-container']}>
          <Masonry breakpointCols={breakpointColumnsObj} className={styles['destinations__masonry-grid']} columnClassName={styles['destinations__masonry-grid-column']}>
            {photos.length > 0 && (
              photos.map((item: Destination, index) => (
                <div className={styles['destinations__photo']} key={index}>
                  <Image
                    src={item.photo}
                    alt={item.photoAlt}
                    width={500}
                    height={item.photoOrientation === 'vertical' ? 667 : 375}
                  />
                  <div className={styles['destinations__photo--description']}>
                    <p>{item.city}, {item.country}</p>
                  </div>
                </div>
              ))
            )}
          </Masonry>
          <div className={styles['destinations__actions-button']}>
            {photosVisible <= destinations.length ? (
              <Button label="Show more" onClick={(): void => setphotosVisible(photosVisible + 4)} />
            ) : (
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
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Destinations;