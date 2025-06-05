import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Pokemon, PokemonDetails, PokemonContextType } from "~/models/pokemon.interface";

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(null);

  const fetchPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await response.json();
    setPokemons(data.results);
  };

  const fetchPokemonDetails = async (name: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) throw new Error("Pokémon non trouvé");
    const data = await response.json();
    setSelectedPokemon({
      name: data.name,
      types: data.types.map((type: any) => type.type.name),
      abilities: data.abilities.map((ability: any) => ability.ability.name),
      sprite: data.sprites.front_default,
    });
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemons, selectedPokemon, fetchPokemons, fetchPokemonDetails }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = (): PokemonContextType => {
  const context = useContext(PokemonContext);
  if (!context) throw new Error("usePokemonContext must be used within a PokemonProvider");
  return context;
};
