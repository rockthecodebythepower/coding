import './PokemonForm.css';

const PokemonForm = ({
  loadPokemonAndSetInState,
  pokemonId,
  setPokemonId,
}) => {
  return (
    <form
      className="pokemon-form"
      onSubmit={(event) => {
        // Tengo que evitar que la página se recargue
        event.preventDefault();
        loadPokemonAndSetInState();
      }}
    >
      <input
        type="number"
        value={pokemonId}
        onChange={(event) => {
          const valueOfInput = event.target.valueAsNumber;
          // En caso de que el valor del input sea un string vacío o el número e,
          // el input tendrá un valor NaN y tengo que asegurar que no lo guardo en el state
          if (valueOfInput || valueOfInput > 0) {
            setPokemonId(valueOfInput);
          }
        }}
      />

      <button type="submit">Buscar</button>
    </form>
  );
};

export default PokemonForm;
