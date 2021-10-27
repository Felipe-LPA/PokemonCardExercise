import { pokemonObj } from "./api-requests.js";

export const getPokemonStats = async (arrPokemonNames) => {
  const obj = await pokemonObj(arrPokemonNames);
  return obj.map((data) => {
    const {
      name,
      stats: [
        { base_stat: hp },
        { base_stat: attack },
        { base_stat: defence },
        ,
        ,
        { base_stat: speed },
      ],
    } = data;
    return { name, hp, attack, defence, speed };
  });
};


export const getWinner = (att, arrPokemons) => {
  const highestValue = arrPokemons.reduce((acc, item) => {
    return { [att]: Math.max(acc[att], item[att]) };
  });
  return arrPokemons
    .filter((item) => item[att] === highestValue[att])
    .map((item) => item.name);
};
