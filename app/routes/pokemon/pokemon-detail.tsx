import { useEffect, useState, useContext } from "react";
import { useParams, NavLink } from "react-router";
import { PokemonContext } from "~/contexts/pokemon/PokemonContext";

export default function PokemonDetail() {
  const { pokemonName } = useParams<{ pokemonName: string }>();
  const { selectedPokemon, fetchPokemonDetails } = useContext(PokemonContext);

  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!pokemonName) return;

    (async () => {
      try {
        await fetchPokemonDetails(pokemonName);
        setNotFound(false);
      } catch {
        setNotFound(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [pokemonName]);

  if (isLoading) return <p>Chargement du Pokémon...</p>;
  if (notFound) return <p>Pokémon non trouvé.</p>;
  if (!selectedPokemon) return null;

  return (
    <section>
      <h2>Détails de {selectedPokemon.name}</h2>
      <img src={selectedPokemon.sprite} alt={selectedPokemon.name} />
      <h3>Types</h3>
      <ul>
        {selectedPokemon.types.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul>
      <h3>Capacités</h3>
      <ul>
        {selectedPokemon.abilities.map((ability) => (
          <li key={ability}>{ability}</li>
        ))}
      </ul>
      <NavLink to="/pokemon">← Retour à la liste</NavLink>
    </section>
  );
}
