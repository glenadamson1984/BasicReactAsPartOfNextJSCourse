import React from "react";
import styles from './MeetupItem.module.css'

const MeetupItem = ({image, title, address, description}) => {
  return (
    <li className={styles.item}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <address>{address}</address>
        <p>{description}</p>
      </div>
      <div className={styles.actions}>
        <button>To Favourites</button>
      </div>
    </li>
  );
};
export default MeetupItem;
