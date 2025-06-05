import { useEffect, useState } from "react";
import { usePokemonContext } from "~/contexts/pokemon/PokemonContext";

export default function PokemonList() {
  const { pokemons, fetchPokemons } = usePokemonContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await fetchPokemons();
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) return <p>Chargement des Pokémons...</p>;

  if (!pokemons.length) return <p>Aucun Pokémon trouvé.</p>;

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
