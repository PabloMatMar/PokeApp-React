import React from "react";
import { render, screen } from '@testing-library/react';
import PokemonList from "./Pokelist";
import { BrowserRouter } from "react-router-dom";

describe("PokemonList", () => {
  test("matches snapshot", () => {
    const data = [{
      name: "pikachu",
      id: 25,
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      },

    }]

    render(
      <BrowserRouter>
        <PokemonList data={data} />
      </BrowserRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});
