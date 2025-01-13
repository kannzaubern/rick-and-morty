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

const url = "https://rickandmortyapi.com/api/character";

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

fetchCharacters();

// Fetch Characters from API

async function fetchCharacters() {
  const response = await fetch(url); // HTTP request
  const data = await response.json(); // Fetching and storing required data – the json method returns the data from that request
  console.log("Response:", response);
  console.log("Data:", data);

  console.log("tests", data.results[0].episode.length);

  // Creating and rendering cards
  data.results.forEach((character) => {
    createCharacterCard(character);
  });
}
