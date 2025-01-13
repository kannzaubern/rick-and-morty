const root = document.querySelector(".root");

export function renderSearchBar(searchBar) {
  root.append(searchBar);
}

export function renderCards(cards) {
  root.append(cards);
}
export function renderNav(nav) {
  root.after(nav)
}