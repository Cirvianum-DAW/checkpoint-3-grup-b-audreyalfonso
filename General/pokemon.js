// Afegeix aquí el codi de JS per a la pàgina pokemon.html

document.getElementById("pokemon");

const name = document.getElementById('name').ariaValueMax;

try {
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemonResponse = await Promise.all(fetch(pokemonUrl));
  const pokemonData = await Promise.all(pokemonResponse);

  console.log(pokemonData);

  // Informació necessària que recuperem de l'API
  const pokemon = {
    name: abilities.ability.name,
  }

  // Mostrem els resultats a la pàgina
  displayPokemonResults(pokemon);

} catch (error) {
  console.error(error);
}

function displayPokemonResults(pokemon) {
  // Mostrar la informació actual
  document.getElementById('name').textContent = `${pokemon.name}`;
  // Mostrar els resultats
  document.getElementById('pokemon').classList.remove('hidden');
}
