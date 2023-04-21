

// Define the search button and add an event listener to trigger the search
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', searchPokemon);

// Define the searchPokemon function to fetch data for a given Pokemon and display it
async function searchPokemon() {
  const searchBar = document.getElementById('search-bar');
  const pokemonName = searchBar.value.toLowerCase();
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const response = await fetch(apiUrl);
  if (response.ok) {
    const pokemonData = await response.json();
    displayPokemon(pokemonData);
  } else {
    alert('Pokemon not found');
  }
}

// Define the displayPokemon function to display the results in the results section
function displayPokemon(pokemonData) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <div class= "container">
    <h2 class= "pokenavn">${pokemonData.name.toUpperCase()}</h2>
    <img class= "bilde" src="${pokemonData.sprites.front_default}">
    <p class= "hehe">Type: ${pokemonData.types[0].type.name}</p>
    <p class= "hehe">Height: ${pokemonData.height}</p>
    <p class= "hehe">Weight: ${pokemonData.weight}</p>
    </div>
  `;
}



