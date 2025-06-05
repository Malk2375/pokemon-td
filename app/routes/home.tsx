import React from "react";
import { Link, NavLink } from "react-router";

export default function HomeView() {
  return (
    <div>
      <h1>Bienvenue sur l'application Pokémon !</h1>
      <p>
        Cette application vous permet de consulter la liste des Pokémon et
        d'accéder aux détails de chaque Pokémon.
      </p>
      <p>
        Cliquez sur le lien ci-dessous pour voir la liste des Pokémon :
      </p>
      <NavLink to="/pokemon">Voir les Pokémon</NavLink>
    </div>
  );
}
