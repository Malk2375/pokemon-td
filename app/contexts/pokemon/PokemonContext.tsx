import { createContext, useContext, useState, type ReactNode } from "react";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetails {
  name: string;
  types: string[];
  abilities: string[];
  sprite: string;
}

interface PokemonContextType {
  pokemons: Pokemon[] | null;
  selectedPokemon: PokemonDetails | null;
  fetchPokemons: () => Promise<Pokemon[] | null>;
  fetchPokemonDetails: (name: string) => Promise<PokemonDetails | null>;
}

export const PokemonContext = createContext<PokemonContextType>(null!);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(null);

  const fetchPokemons = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      const data = await response.json();
      setPokemons(data.results);
      return data.results;
    } catch (err) {
      console.error("Erreur lors de la récupération des Pokémons :", err);
      return null;
    }
  };

  const fetchPokemonDetails = async (name: string) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      const details: PokemonDetails = {
        name: data.name,
        types: data.types.map((t: any) => t.type.name),
        abilities: data.abilities.map((a: any) => a.ability.name),
        sprite: data.sprites.front_default,
      };
      setSelectedPokemon(details);
      return details;
    } catch (err) {
      console.error("Erreur lors de la récupération du détail du Pokémon :", err);
      return null;
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        selectedPokemon,
        fetchPokemons,
        fetchPokemonDetails,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
