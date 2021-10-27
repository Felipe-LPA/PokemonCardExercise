const createArticleCardEl = (name) => {
  const articleEL = document.createElement("article");
  articleEL.classList.add("card", name);
  articleEL.setAttribute("name", name);
  return articleEL;
};

const createDivImg = (name) => {
  const divEl = document.createElement("div");
  divEl.classList.add("imgBox");
  const imgEl = document.createElement("img");
  imgEl.src = `./assets/img/${name}.png`;
  imgEl.setAttribute("alt", name);
  divEl.append(imgEl);
  return divEl;
};

const createDivInfo = (pokemonObj) => {
  const attritutes = Object.keys(pokemonObj);
  const divEl = document.createElement("div");

  attritutes.forEach((attr) => {
    if (attr == "name") return;
    divEl.classList.add("info");
    const divAttr = createInnerDivInfo(attr.toUpperCase(), pokemonObj[attr]);
    divEl.append(divAttr);
  });
  return divEl;
};
const createInnerDivInfo = (attr, value) => {
  const divEl = document.createElement("div");
  divEl.classList.add(attr);
  divEl.append(createInnerDivInfoP(attr), createInnerDivInfoP(value));
  return divEl;
};
const createInnerDivInfoP = (value) => {
  const pEl = document.createElement("p");
  pEl.innerText = value;
  return pEl;
};
export const createCards = async (arrPokemons, section) => {
  const awaitedArrPokemon = await arrPokemons;
  const sectionEl = document.querySelector(section);
  sectionEl.innerHTML = "";
  awaitedArrPokemon.forEach((pokemonObj) => {
    const { name, hp, attack, defence, speed } = pokemonObj;
    const articleCardEL = createArticleCardEl(name);
    const divImgEl = createDivImg(name);
    const divInfoEl = createDivInfo(pokemonObj);
    articleCardEL.append(divImgEl, divInfoEl);
    sectionEl.append(articleCardEL);
  });
};

export const getbuttonEl = () => document.querySelector("button");

export const getSelectValue = () => document.querySelector("select").value;

export function setWinner(arrNames) {
  const cardsEl = document.querySelectorAll("#result article");

  cardsEl.forEach((card) => {
    const pokemonName = card.getAttribute("name");
    if (!arrNames.includes(pokemonName)) {
      card.classList.remove(pokemonName);
      card.classList.add("grey");
    }
  });
}
