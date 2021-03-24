import React, { useContext } from "react";
import { FavouritesContext } from "../../store/favourites.context";
import Card from "../ui/Card";
import styles from "./MeetupItem.module.css";

const MeetupItem = ({id, image, title, address, description }) => {
  const favourtiesCtx = useContext(FavouritesContext);

  const itemIsFavourite = favourtiesCtx.itemIsFavourite(id);

  const toggleFavouriteStatusHandler = () => {
    if(itemIsFavourite) {
      favourtiesCtx.removeFavourite(id);
    } else {
      favourtiesCtx.addFavourite({
        id,
        title,
        description,
        image,
        address
      });
    }
  }

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
          <button onClick={toggleFavouriteStatusHandler}>{itemIsFavourite ? 'Remove from Fav' : 'Add To Fav'}</button>
        </div>
      </Card>
    </li>
  );
};
export default MeetupItem;
