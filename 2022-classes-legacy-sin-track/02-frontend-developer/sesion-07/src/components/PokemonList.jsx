import './PokemonList.css';

const PokemonList = ({ list }) => {
  return (
    <div className="pokemon-list">
      {list.map((pokemon) => {
        return (
          <div key={pokemon.id} className="pokemon-card">
            <h3>{pokemon.name}</h3>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList;
