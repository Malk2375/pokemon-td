import React, { useEffect } from "react";
import { NavLink } from "react-router";
import { usePokemonContext } from "~/contexts/pokemon/PokemonContext";

export default function PokemonListView() {
    const { pokemons, fetchPokemons } = usePokemonContext();

    useEffect(() => {
        fetchPokemons();
    }, [fetchPokemons]);

    if (pokemons.length === 0) {
        return <div>Chargement...</div>;
    }

    return (
        <div>
        <h1>Liste des Pokémon</h1>
        <ul>
            {pokemons.map((pokemon) => (
            <li key={pokemon.name}>
                <NavLink to={`/pokemon/${pokemon.name}`}>{pokemon.name}</NavLink>
            </li>
            ))}
        </ul>
        </div>
    );
}
