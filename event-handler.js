import { getbuttonEl, getSelectValue, setWinner } from "./html-handler.js";
import { getWinner } from "./functions-aux.js";
import { getPokemonStats } from "./pokemonStats.js";

const buttonEl = getbuttonEl();

buttonEl.addEventListener("click", async (e) => {
  e.preventDefault();
  const attributeSelected = getSelectValue();
  const pokemonStats = await getPokemonStats();
  const winner = getWinner(attributeSelected, pokemonStats);
  setWinner(winner);
});
