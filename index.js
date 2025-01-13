import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { CreateSearchBar } from "./components/SearchBar/SearchBar.js";
import { CreateNav } from "./components/NavPagination/NavPagination.js";

// Initializing SearchBar and Navigation
CreateSearchBar();
CreateNav();

// Selecting created Elements
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const pagination = document.querySelector('[data-js="pagination"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const searchInput = document.querySelector(".search-bar__input");

// Intializing States
let url = "https://rickandmortyapi.com/api/character";
let maxPage = 1;
let page = 1;
let searchQuery = "";

// Initial Fetch and Render - Characters from API
async function fetchCharacters(apiUrl) {

  const response = await fetch(apiUrl);
  const data = await response.json();
  if (data) {
    console.log("Data:", data);
    maxPage = data.info.pages;
    console.log(maxPage)

    pagination.textContent = `${page} / ${maxPage}`;

    data.results.forEach((character) => {
      createCharacterCard(character);
    });
  }
}

// Initial execution of fetch function
fetchCharacters(url);

// Handle Search Event
searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = searchInput.value;
  page = 1;

  let searchUrl = url + `/?name=${searchQuery}`;
  console.log("Search URL:", searchUrl);

  cardContainer.replaceChildren();
  pagination.innerText = `${page} / ${maxPage}`;
  fetchCharacters(searchUrl);
  searchBar.reset();
});

// Handle Next Page Event
nextButton.addEventListener("click", () => {
  if (page == maxPage) {
    return false;
  }
  page += 1;
  let paginationUrl = url + `?page=${page}`;
  if (searchQuery != "") {
    paginationUrl = url + `/?name=${searchQuery}` + `&page=${page}`;
  }
  cardContainer.replaceChildren();
  pagination.innerText = `${page} / ${maxPage}`;
  fetchCharacters(paginationUrl);
});

// Handle Next Previous Page Event
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
  pagination.innerText = `${page} / ${maxPage}`;
  fetchCharacters(paginationUrl);
});