import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { usePokemonContext } from "~/contexts/pokemon/PokemonContext";
import "./PokemonListComponent.css";

interface Pokemon {
    name: string;
    url: string;
}

export default function PokemonListComponent() {
    const { fetchPokemons } = usePokemonContext();
    const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);

    useEffect(() => {
        if (!pokemons) {
        (async function fetchList() {
            const result = await fetchPokemons();
            if (Array.isArray(result)) setPokemons(result);
        })();
        }
    }, [pokemons]);

    if (!pokemons) return <p>Chargement des Pokémons en cours...</p>;

    return (
        <section>
        <h2>Liste des Pokémons</h2>
        <ul className="pokemon-list">
            {pokemons.map((pokemon) => (
            <li key={pokemon.name}>
                <NavLink to={`/pokemon/${pokemon.name}`}>
                {pokemon.name}
                </NavLink>
            </li>
            ))}
        </ul>
        </section>
    );
}
