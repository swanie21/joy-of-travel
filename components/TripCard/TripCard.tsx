import { Trip } from '../../types/trip';

import styles from './TripCard.module.scss';

export const TripCard: React.FunctionComponent<Trip> = ({ checkInDate, heroImage, unitName, unitStyleName }) => {
  return (
    <li>
      <img alt="" src={`https://cms.inspirato.com/${heroImage}?width=400`} />
      <p>{unitName}</p>
      <p>{unitStyleName}</p>
      <p>{checkInDate}</p>
    </li>
  );
};