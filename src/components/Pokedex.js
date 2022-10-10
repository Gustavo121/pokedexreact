import React from "react";

const Pokedex = (props) => {
  const { pokemons, loading } = props;
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <div>Paginação</div>
      </div>
      {loading ? (
        <div>Careegando, segura fera...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, index) => {
            return (
              <div>
                <div> #{pokemon.id}</div>
                <div> Nome: {pokemon.name}</div>
                <img alt={pokemon.name} src={pokemon.sprites.front_default} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;