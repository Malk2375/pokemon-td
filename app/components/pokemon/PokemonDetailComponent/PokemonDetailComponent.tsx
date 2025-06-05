import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { PokemonContext } from "~/contexts/pokemon/PokemonContext";
import "./PokemonDetailComponent.css";

export default function PokemonDetailComponent() {
  const { name } = useParams();
  const { fetchPokemonDetails } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState<any | null>(null);

  useEffect(() => {
    if (!pokemon && name) {
      (async () => {
        const detail = await fetchPokemonDetails(name);
        if (detail) setPokemon(detail);
      })();
    }
  }, [name, pokemon]);

  if (!pokemon) return <p>Chargement des détails...</p>;

  return (
    <section>
      <article>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprite} alt={pokemon.name} />
        <p><strong>Types :</strong> {pokemon.types.join(", ")}</p>
        <p><strong>Capacités :</strong> {pokemon.abilities.join(", ")}</p>
      </article>
    </section>
  );
}
