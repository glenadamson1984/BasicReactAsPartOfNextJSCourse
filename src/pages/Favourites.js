import React, { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { FavouritesContext } from "../store/favourites.context";

const Favourites = () => {
  const favouriteCtx = useContext(FavouritesContext);

  if(favouriteCtx.favourites.length === 0) {
      return <p>no favs</p>
  }

  return <section>
      <h1>My Favourtites</h1>
      <MeetupList meetups={favouriteCtx.favourites} />
  </section>;
};

export default Favourites;
