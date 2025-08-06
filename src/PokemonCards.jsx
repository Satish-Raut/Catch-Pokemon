export const PokemonCards = ({ pokemonData }) => {
  return (
    <li className="pokemon-card">
      {/* Pokemon Image */}
      <figure>
        <img
          src={pokemonData?.sprites?.other?.dream_world?.front_default}
          alt={pokemonData.name}
          className="pokemon-image"
        />
      </figure>

      {/* Pokemon Name */}
      <h1 className="pokemon-name">{pokemonData.name}</h1>

      {/* Pokemon Skills */}
      <div className="pokemon-info pokemon-highlight">
        <p>
          {pokemonData.types.map((skills) => skills?.type?.name).join(", ")}
        </p>
      </div>

      {/* Pokemon Properties part-1 */}
      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span>Height: </span> {pokemonData.height}
        </p>
        <p className="pokemon-info">
          <span>Weight: </span> {pokemonData.weight}
        </p>
        <p className="pokemon-info">
          <span>Speed: </span> {pokemonData.stats[5].base_stat}
        </p>
      </div>

      {/* Pokemon Properties part-2 */}
      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{pokemonData.height}</p>
          <span>Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>{pokemonData.stats[1].base_stat}</p>
          <span>Attack:</span>
        </div>
        <div className="pokemon-info">
          <p>
            {pokemonData.abilities
              .map((abilityInfo) => abilityInfo?.ability?.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span>Abilities: </span>
        </div>
      </div>
    </li>
  );
};
