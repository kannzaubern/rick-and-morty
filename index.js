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

// Initial Create and render cards
fetchCharacters(url);

// Handle search
searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = searchInput.value;
  page = 1;

  let searchUrl = url + `/?name=${searchQuery}`;
  console.log("Search URL:", searchUrl);

  cardContainer.replaceChildren();
  // Render search results
  fetchCharacters(searchUrl);
  pagination.innerText = `${page} / ${maxPage}`;
  searchBar.reset();
});

// Handle next page
nextButton.addEventListener("click", () => {
  if (page == maxPage) {
    return false;
  }
  page += 1;
  let paginationUrl = url + `?page=${page}`;
  if (searchQuery != "") {
    paginationUrl = url + `/?name=${searchQuery}` + `&page=${page}`;
  }
  console.log("Pagination URL:", paginationUrl);
  cardContainer.replaceChildren();
  fetchCharacters(paginationUrl);
  pagination.innerText = `${page} / ${maxPage}`;
});

// Handle prev page
prevButton.addEventListener("click", () => {
  if (page == 1) {
    return false;
  }
  page -= 1;
  let paginationUrl = url + `?page=${page}`;
  if (searchQuery != "") {
    paginationUrl = url + `/?name=${searchQuery}` + `&page=${page}`;
  }
  console.log("Pagination URL:", paginationUrl);
  cardContainer.replaceChildren();
  fetchCharacters(paginationUrl);
  pagination.innerText = `${page} / ${maxPage}`;
});

// Fetch Characters from API
async function fetchCharacters(apiUrl) {
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!data.error) {
    console.log("Data:", data);
    maxPage = data.info.pages;
    pagination.innerText = `${page} / ${maxPage}`;

    data.results.forEach((character) => {
      createCharacterCard(character);
    });
  } else {
    pagination.innerText = `1 / 1`;
    return false;
  }
}
