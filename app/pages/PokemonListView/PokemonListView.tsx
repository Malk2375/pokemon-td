// import { useContext, useEffect, useState } from "react";
// import { usePokemonContext, PokemonProvider } from "~/contexts/pokemon/PokemonContext";
// import type { Pokemon } from "~/models/pokemon.interface";
// import { useParams, NavLink } from "react-router";

// export default function PokemonListView() {
//   return (
//     <PokemonProvider>
//       <PokemonList />
//     </PokemonProvider>
//   );
// }

// function PokemonList() {
//   const { pokemons, fetchPokemons } = usePokemonContext();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     (async () => {
//       await fetchPokemons();
//       setIsLoading(false);
//     })();
//   }, []);

//   if (isLoading) return <p>Chargement des Pokémons en cours ...</p>;

//   if (!pokemons || pokemons.length === 0)
//     return <p>Aucun Pokémon trouvé.</p>;

//   return (
//     <section>
//       <NavLink to="/">← Page principale</NavLink>
//       <h2>Liste des Pokémons</h2>
//       <ul>
//         {pokemons.map((pokemon: Pokemon) => (
//           <li key={pokemon.name}>
//             <a href={`/pokemon/${pokemon.name}`}>{pokemon.name}</a>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }
import PokemonListComponent from "~/components/pokemon/PokemonListComponent/PokemonListComponent";

export default function PokemonListView() {
  return (
    <main>
      <PokemonListComponent />
    </main>
  );
}
