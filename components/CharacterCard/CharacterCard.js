import { renderCards } from "../../utils.js";
const cardContainer = document.querySelector(".card-container");

export function createCharacterCard(character) {
  // create elements
  const card = document.createElement("li");
  const cardImageContainer = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardImageGradient = document.createElement("div");
  const cardContent = document.createElement("div");
  const cardTitle = document.createElement("h2");
  const cardInfo = document.createElement("dl");
  const cardStatusTitle = document.createElement("dt");
  const cardStatusContent = document.createElement("dd");
  const cardTypeTitle = document.createElement("dt");
  const cardTypeContent = document.createElement("dd");
  const cardOccurenceTitle = document.createElement("dt");
  const cardOccurenceContent = document.createElement("dd");

  // add classes
  card.classList.add("card");
  cardImageContainer.classList.add("card__image-container");
  cardImage.classList.add("card__image");
  cardImageGradient.classList.add("card__image-gradient");
  cardContent.classList.add("card__content");
  cardTitle.classList.add("card__title");
  cardStatusTitle.classList.add("card__info-title");
  cardTypeTitle.classList.add("card__info-title");
  cardStatusContent.classList.add("card__info-description");
  cardTypeContent.classList.add("card__info-description");
  cardInfo.classList.add("card__info");
  cardOccurenceTitle.classList.add("card__info-title");
  cardOccurenceContent.classList.add("card__info-description");

  // append elements
  cardImageContainer.append(cardImage, cardImageGradient);
  card.append(cardImageContainer);
  card.append(cardContent);
  cardContent.append(cardTitle, cardInfo);
  cardInfo.append(
    cardStatusTitle,
    cardStatusContent,
    cardTypeTitle,
    cardTypeContent,
    cardOccurenceTitle,
    cardOccurenceContent
  );
  cardContainer.append(card);

  // Filling the card with data
  cardImage.setAttribute("src", character.image);
  cardTitle.innerText = character.name;
  cardStatusTitle.innerText = "Status";
  cardStatusContent.innerText = character.status;
  cardTypeTitle.innerText = "Type";
  cardTypeContent.innerText = character.type;
  cardOccurenceTitle.innerText = "Occurence";
  cardOccurenceContent.innerText = character.episode.length;

  // render cards on the screen
  renderCards(cardContainer);
}
