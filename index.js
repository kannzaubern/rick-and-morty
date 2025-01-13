import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
const searchInput = document.querySelector(".search-bar__input");

let url = "https://rickandmortyapi.com/api/character";

// Intializing States
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
  page = 1;

  let searchUrl = url + `/?name=${searchQuery}`;
  console.log("Search URL:", searchUrl);

  cardContainer.replaceChildren();
  // Render search results
  pagination.innerText = `${page} / ${maxPage}`;
  fetchCharacters(searchUrl);
  searchBar.reset();
});

nextButton.addEventListener("click", () => {
  if (page == maxPage) {
    return false;
  }
  page += 1;
  let paginationUrl = url + `?page=${page}`; // Assuming search query is empty; we don't just want the base URL, we want to filter
  if (searchQuery != "") {
    paginationUrl = url + `/?name=${searchQuery}` + `&page=${page}`; // Assuming it's not empty (i.e. user searched for Rick), we only add the page parameter on top
  }
  console.log("Pagination URL:", paginationUrl);
  cardContainer.replaceChildren();
  pagination.innerText = `${page} / ${maxPage}`;
  fetchCharacters(paginationUrl);
});

prevButton.addEventListener("click", () => {
  if (page == 1) {
    return false; // Everything below in this function won't be considered
  }
  page -= 1;
  let paginationUrl = url + `?page=${page}`;
  if (searchQuery != "") {
    paginationUrl = url + `/?name=${searchQuery}` + `&page=${page}`;
  }
  console.log("Pagination URL:", paginationUrl);
  cardContainer.replaceChildren();
  pagination.innerText = `${page} / ${maxPage}`;
  fetchCharacters(paginationUrl);
});

// Fetch Characters from API
async function fetchCharacters(apiUrl) {
  const response = await fetch(apiUrl); // HTTP request
  const data = await response.json(); // Fetching and storing required data – the json method returns the data from that request

  // verify if data is existent
  if (data) {
    console.log("Data:", data);
    maxPage = data.info.pages;
    pagination.innerText = `${page} / ${maxPage}`;

    data.results.forEach((character) => {
      createCharacterCard(character);
    });
  }
}
