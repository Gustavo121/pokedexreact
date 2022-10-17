import React from "react";
const FavoriteContext = React.createContext({
  favoritePokemons: [],
  updadeFavoritePokemons: (id) => null,
});

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;
