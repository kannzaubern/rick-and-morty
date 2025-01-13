import { renderNav } from "../../utils.js";

export function CreateNav() {
    // create elements
    const nextButton = document.createElement("button");
    const previousButton = document.createElement("button");
    const pagination = document.createElement("span");
    const navigation = document.createElement("nav");

    // add classes
    nextButton.className = "button button--next";
    previousButton.className = "button button--prev";
    pagination.className = "navigation__pagination";
    navigation.className = "navigation"

    // set attributes

    nextButton.setAttribute("data-js", "button-next")
    previousButton.setAttribute("data-js", "button-prev")
    pagination.setAttribute("data-js", "pagination")
    navigation.setAttribute("data-js", "navigation")
    // append elements
    navigation.append(previousButton, pagination, nextButton);

    // filling the elements
    nextButton.innerText = "Next";
    previousButton.innerText = "Prev";
    pagination.textContent = "1 / 1";

    // render nav on the screen
    renderNav(navigation);
}
