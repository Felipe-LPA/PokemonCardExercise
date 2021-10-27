import {
  getbuttonEl,
  getSelectValue,
  setWinner,
  createCards,
} from "./html-handler.js";
import { getWinner } from "./functions-aux.js";
import { pokemonStats } from "./index.js";

const buttonEl = getbuttonEl();

buttonEl.addEventListener("click", async (e) => {
  e.preventDefault();
  const attributeSelected = getSelectValue();
  createCards(await pokemonStats, "#result");
  const winner = getWinner(attributeSelected, await pokemonStats);
  setWinner(winner);
});
