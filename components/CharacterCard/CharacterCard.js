import { renderCards } from "../../utils.js";

const cardContainer = document.querySelector(".card-container");

export function createCharacterCard(character) {
  let card = document.createElement("li");
  card.classList.add("card");
  let cardImageContainer = document.createElement("div");
  cardImageContainer.classList.add("card__image-container");

  card.append(cardImageContainer);

  let cardImage = document.createElement("img");
  cardImage.classList.add("card__image");
  let cardImageGradient = document.createElement("div");
  cardImageGradient.classList.add("card__image-gradient");

  cardImageContainer.append(cardImage, cardImageGradient);
  let cardContent = document.createElement("div");
  cardContent.classList.add("card__content");

  card.append(cardContent);

  let cardTitle = document.createElement("h2");
  cardTitle.classList.add("card__title");
  let cardInfo = document.createElement("dl");
  cardInfo.classList.add("card__info");

  cardContent.append(cardTitle, cardInfo);

  let cardStatusTitle = document.createElement("dt");
  cardStatusTitle.classList.add("card__info-title");
  let cardStatusContent = document.createElement("dd");
  cardStatusContent.classList.add("card__info-description");

  let cardTypeTitle = document.createElement("dt");
  cardTypeTitle.classList.add("card__info-title");
  let cardTypeContent = document.createElement("dd");
  cardTypeContent.classList.add("card__info-description");

  let cardOccurenceTitle = document.createElement("dt");
  cardOccurenceTitle.classList.add("card__info-title");
  let cardOccurenceContent = document.createElement("dd");
  cardOccurenceContent.classList.add("card__info-description");

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

  renderCards(cardContainer);
}
