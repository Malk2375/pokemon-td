import {type RouteConfig, index, route, prefix, layout} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    layout("layouts/PokemonLayout.tsx", [
        ...prefix("pokemon", [
            index("pages/PokemonListView/PokemonListView.tsx"),
            route(":pokemonName", "pages/PokemonDetailView/PokemonDetailView.tsx")
        ]),
    ]),
    route("*", "routes/error.tsx")
] satisfies RouteConfig;
