import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupID) => {},
  itemIsFavourite: (meetupID) => {}
});

const FavouritesContextProvider = ({ children }) => {
  const [userFavourites, setUserFavourites] = useState([]);

  const addFavouriteHandler = (favouriteMeetup) => {
    setUserFavourites((previousFavs) => {
      return previousFavs.concat(favouriteMeetup);
    });
  };

  const removeFavouriteHandler = (meetupID) => {
    setUserFavourites((previousFavs) => {
        return previousFavs.filter(meetup => meetup.id !== meetupID);
      });
  };

  const itemIsFavouriteHandler = (meetupID) => {
      return userFavourites.some((meetup) => {
          return meetup.id === meetupID;
      })
  };

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler
  };

  return (
    <FavouritesContext.Provider value={context}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
