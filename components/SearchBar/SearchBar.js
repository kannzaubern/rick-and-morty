import { renderSearchBar } from "../../utils.js";
const searchBarButton = document.querySelector("search-bar__button");

// searchBarButton.addEventListermer("click", () => {
//   // handle data to render only requested search
// });

export function CreateSearchBar() {
  // create elements
  const searchBarContainer = document.createElement("div");
  const searchBar = document.createElement("form");
  const searchBarInput = document.createElement("input");
  const button = document.createElement("button");
  const img = document.createElement("img");

  // add classes
  searchBarContainer.className = "search-bar-container";
  searchBar.className = "search-bar";
  searchBarInput.className = "search-bar__input";
  button.className = "search-bar__button"
  img.className = "search-bar__icon"

  // set attributes
  searchBarContainer.setAttribute("data-js", "search-bar-container")
  searchBar.setAttribute("data-js", "search-bar")
  searchBarInput.setAttribute("data-js", "pagination")
  searchBarInput.setAttribute("name", "query")
  searchBarInput.setAttribute("type", "text")
  searchBarInput.setAttribute("placeholder", "search characters")
  searchBarInput.setAttribute("aria-label", "search name")
  button.setAttribute("aria-label", "search for character")
  img.setAttribute("src", "assets/magnifying-glass.png")

  // append elements
  searchBarContainer.append(searchBar);
  button.append(img);
  searchBar.append(searchBarInput, button);

  // render nav on the screen
  renderSearchBar(searchBarContainer);
}