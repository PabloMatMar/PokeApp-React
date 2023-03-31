import React from "react";
import { render, screen } from '@testing-library/react';
import PokemonList from "./Pokelist";
import { v4 as uuidv4 } from 'uuid';
import { pokeListContext } from "../../../context/pokeListContext";
import { BrowserRouter } from "react-router-dom";

describe("PokemonList", () => {
  test("matches snapshot", () => {
    const data = [{
      name: "pikachu",
      sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },

    }]

    render(
      <BrowserRouter>
        <pokeListContext.Provider value={data}>
          <PokemonList />

        </pokeListContext.Provider>
      </BrowserRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});
