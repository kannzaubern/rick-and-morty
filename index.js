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

let url = "https://rickandmortyapi.com/api/character";

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

fetchCharacters(url);

// Creating and rendering cards
// use this to clean the DOM .replaceChildren()
//// handle search and pagination event listeners

searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = searchInput.value;

  if (searchQuery) {
    url += `/?name=${searchQuery}`;
  }

  cardContainer.replaceChildren();
  // render search
  fetchCharacters(url);
  searchBar.reset();
});

nextButton.addEventListener("click", () => {
  page += 1;
  let paginationUrl = url + `?page=${page}`;
  if (searchQuery != "") {
    paginationUrl = url + `&page=${page}`;
  }
  cardContainer.replaceChildren();
  fetchCharacters(paginationUrl);
});

prevButton.addEventListener("click", () => {
  if (page == 1) {
    return false;
  }
  page -= 1;
  let paginationUrl = url + `?page=${page}`;
  if (searchQuery != "") {
    paginationUrl = url + `&page=${page}`;
  }
  cardContainer.replaceChildren();
  fetchCharacters(paginationUrl);
});

// Fetch Characters from API
async function fetchCharacters(apiUrl) {
  const response = await fetch(apiUrl); // HTTP request
  const data = await response.json(); // Fetching and storing required data – the json method returns the data from that request
  console.log(apiUrl);
  // verify if data is existent
  if (data) {
    data.results.forEach((character) => {
      maxPage = data.info.pages;
      pagination.innerText = `${page} / ${maxPage}`;
      createCharacterCard(character);
    });
  }
}
