import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { PokemonContext } from "~/contexts/pokemon/PokemonContext";
import "./PokemonListComponent.css";

export default function PokemonListComponent() {
    const { fetchPokemons } = useContext(PokemonContext);
    const [pokemons, setPokemons] = useState<any[] | null>(null);

    useEffect(() => {
        if (!pokemons) {
        (async () => {
            const list = await fetchPokemons();
            if (list) setPokemons(list);
        })();
        }
    }, [pokemons]);

    if (!pokemons) return <p>Chargement...</p>;

    return (
        <section>
        <h2>Liste des Pokémons</h2>
        <ul className="pokemon-list">
            {pokemons.map((pokemon) => (
            <li key={pokemon.name}>
                <NavLink to={`/pokemon/${pokemon.name}`}>{pokemon.name}</NavLink>
            </li>
            ))}
        </ul>
        </section>
    );
}
