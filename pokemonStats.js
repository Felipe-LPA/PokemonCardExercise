import { pokemonObj } from "./api-requests.js";

export const getPokemonStats = async () => {
  const obj = await pokemonObj();
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
