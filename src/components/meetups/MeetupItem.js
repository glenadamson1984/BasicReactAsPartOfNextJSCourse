import React from "react";
import Card from "../ui/Card";
import styles from "./MeetupItem.module.css";

const MeetupItem = ({ image, title, address, description }) => {
  return (
    <li className={styles.item}>
      <Card>
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
      </Card>
    </li>
  );
};
export default MeetupItem;
