export const getWinner = (att, arrPokemons) => {
  const highestValue = arrPokemons.reduce((acc, item) => {
    return { [att]: Math.max(acc[att], item[att]) };
  });
  return arrPokemons
    .filter((item) => item[att] === highestValue[att])
    .map((item) => item.name);
};
