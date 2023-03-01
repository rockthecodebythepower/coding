export const loadPokemon = async (id) => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.log('Error cargando pokemon con id:', id);
    console.log(err);
  }
};
