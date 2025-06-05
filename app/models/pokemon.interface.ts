export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonDetails {
    name: string;
    types: string[];
    abilities: string[];
    sprite: string;
}

export interface PokemonContextType {
    pokemons: Pokemon[];
    selectedPokemon: PokemonDetails | null;
    fetchPokemons: () => Promise<void>;
    fetchPokemonDetails: (name: string) => Promise<void>;
}
