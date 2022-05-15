import Image from 'next/image';
import classnames from 'classnames';

import { Trip } from '../../types/trip';

import styles from './TripCard.module.scss';

export const TripCard: React.FunctionComponent<Trip> = ({ checkInDate, heroImage, locationName, unitName, unitStyleName }) => {
  const formattedDate = new Date(checkInDate).toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) ;

  return (
    <li className={styles['trip-card']}>
      <Image
        alt={`trip thumbnail in ${locationName}`}
        className={styles['trip-card__thumbnail']}
        height={225}
        layout="responsive"
        src={`https://cms.inspirato.com/${heroImage}?width=400&height=225`}
        width={400}
      />
      <div className={styles['trip-card__details']}>
        <span
          className={classnames(
            styles['trip-card__unit-style-pill'],
            { [styles.beach]: unitStyleName === 'Beach' },
            { [styles.lifestyle]: unitStyleName === 'Lifestyle' },
            { [styles.metropolitan]: unitStyleName === 'Metropolitan' },
            { [styles.mountain]: unitStyleName === 'Mountain' },
          )}
        >
          {unitStyleName}
        </span>
        <p className={styles['trip-card__details--unit-name']}>{unitName}</p>
        <p className={styles['trip-card__details--checkin-date']}>Check in date: <span>{formattedDate}</span></p>
      </div>
    </li>
  );
};