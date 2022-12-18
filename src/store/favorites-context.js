import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  favoritesCount: 0,
});

function FavoritesContextProvider(props) {
  const [favorites, setFavorites] = useState([]);

  const context = {
    favorites: favorites,
    favoritesCount: favorites.length,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
