import { useContext, useEffect, useState } from "react";
import { usePokemonContext } from "~/contexts/pokemon/PokemonContext";
import "./PokemonDetailComponent.css";

interface Props {
  name: string;
}

interface PokemonDetails {
  name: string;
  sprite: string;
  types: string[];
  abilities: string[];
}

export default function PokemonDetailComponent({ name }: Props) {
  const { fetchPokemonDetails } = usePokemonContext();
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    if (!pokemon) {
      (async function fetchDetails() {
        const details = await fetchPokemonDetails(name);
        if (details !== undefined && details !== null) {
          setPokemon(details);
        }
      })();
    }
  }, [pokemon]);

  if (!pokemon) return <p>Chargement des détails du Pokémon...</p>;

  return (
    <section>
      <article>
        <h2>Détails de {pokemon.name}</h2>
        <img src={pokemon.sprite} alt={pokemon.name} />
        <table>
          <thead>
            <tr>
              <th>Types</th>
              <th>Capacités</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{pokemon.types.join(", ")}</td>
              <td>{pokemon.abilities.join(", ")}</td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  );
}
