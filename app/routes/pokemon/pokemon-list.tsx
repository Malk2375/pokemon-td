import { useEffect, useState, useContext } from "react";
import { PokemonContext } from "~/contexts/pokemon/PokemonContext";

export default function PokemonList() {
  const { pokemons, fetchPokemons } = useContext(PokemonContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await fetchPokemons();
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) return <p>Chargement des Pokémons...</p>;

  if (!pokemons || pokemons.length === 0) return <p>Aucun Pokémon trouvé.</p>;

  return (
    <section>
      <h2>Liste des Pokémons</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </section>
  );
}
