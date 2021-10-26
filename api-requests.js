export async function pokemonObj() {
  const arrPokemonName = ["zapdos", "moltres", "articuno"];
  const arr = await Promise.all(
    arrPokemonName.map(async (name) => {
      const data = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return data.data;
    })
  );
  return arr;
}
