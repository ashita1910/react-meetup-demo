import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  favoritesCount: 0,
  addFavoriteItem: (meetUpItem) => {},
  removeFavoriteItem: (meetUpId) => {},
  isItemFavorite: (meetUpId) => {},
});

export function FavoritesContextProvider(props) {
  const [favorites, setFavorites] = useState([]);

  function addFavoriteHandler(meetUpItem) {
    setFavorites((favorites) => {
      return favorites.concat(meetUpItem);
    });
  }

  function removeFavoriteHandler(meetUpId) {
    setFavorites((favorites) => {
      return favorites.filter((meetUpItem) => {
        return meetUpItem?.id !== meetUpId;
      });
    });
  }

  function isFavoriteItemHandler(meetUpId) {
    return favorites.some((meetUpItem) => {
      return meetUpItem?.id === meetUpId;
    });
  }

  const context = {
    favorites: favorites,
    favoritesCount: favorites.length,
    addFavoriteItem: addFavoriteHandler,
    removeFavoriteItem: removeFavoriteHandler,
    isItemFavorite: isFavoriteItemHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
