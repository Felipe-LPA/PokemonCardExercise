import { getPokemonStats } from "./pokemonStats.js";

export async function setProperties() {
  const pokemons = await getPokemonStats();
  pokemons.forEach((pokemon) => {
    const infoField = document.querySelectorAll(`.${pokemon.name} .info div`);
    infoField.forEach((info) => {
      const {
        classList: { value: attribute },
      } = info;
      const paragraphEl = document.createElement("p");
      paragraphEl.innerText = pokemon[attribute];
      info.append(paragraphEl);
    });
  });
}

export const getbuttonEl = () => document.querySelector("button");

export const getSelectValue = () => document.querySelector("select").value;

export function setWinner(arrNames) {
  const cardsEl = document.querySelectorAll("#cardsSection article");
  const resultEl = document.querySelector("#result");
  resultEl.innerHTML = "";
  cardsEl.forEach((card) => {
    const newCard = card.cloneNode(true);
    const pokemonName = card.getAttribute("name");
    if (!arrNames.includes(pokemonName)) {
      newCard.classList.remove(pokemonName);
      newCard.classList.add("grey");
    }
    resultEl.append(newCard);
  });
}
