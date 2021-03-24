import React, {  useContext } from "react";
import { Link } from "react-router-dom";
import { FavouritesContext } from "../../store/favourites.context";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const favouritesCtx = useContext(FavouritesContext);
  
    return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">My Favourites
            <span className={styles.badge}>{favouritesCtx.totalFavourites}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
