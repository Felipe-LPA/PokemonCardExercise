import { createCards } from "./html-handler.js";
import {} from "./event-handler.js";
import { getPokemonStats } from "./functions-aux.js";

const arrPokemonsNames = ["zapdos", "moltres", "articuno"];
export const pokemonStats = getPokemonStats(arrPokemonsNames);
createCards(pokemonStats, "#cardsSection");
