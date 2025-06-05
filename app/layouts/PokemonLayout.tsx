import {PokemonProvider} from "~/contexts/pokemon/PokemonContext";
import { Outlet } from "react-router";


export default function PokemonLayout({children}: { children: React.ReactNode }) {
    return (
        <PokemonProvider>
            <Outlet/>
        </PokemonProvider>
    );
}