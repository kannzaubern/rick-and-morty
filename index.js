import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
const searchInput = document.querySelector(".search-bar__input");

const url = "https://rickandmortyapi.com/api/character";

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

fetchCharacters();

// Creating and rendering cards
// use this to clean the DOM .replaceChildren()
//// handle search and pagination event listeners

searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  // render search
  console.log(searchInput.value);
  searchBar.reset();
});

// Fetch Characters from API
async function fetchCharacters() {
  const response = await fetch(url); // HTTP request
  const data = await response.json(); // Fetching and storing required data – the json method returns the data from that request
  if (data) {
    data.results.forEach((character) => {
      createCharacterCard(character);
    });
  }
}
