import React, { useState } from "react";
import { render, screen } from '@testing-library/react';
import Home from "./Home";
import { newPokemonContext } from '../../../context/newPokemonContext';

describe("Home", () => {
  test("matches snapshot", () => {

    let savePokemon = [{
      id: 5,
      name: "charmeleon",
      pokemonCreated: {
        sprites:
        {
          other:
          {
            "official-artwork":
              { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png" }
          }
        }
      }
    },
    {
      id: 6,
      name: "charizard",
      pokemonCreated: {
        sprites:
        {
          other:
          {
            "official-artwork":
              { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" }
          }
        }
      }
    }
    ]
    let dataPokemons = []
    render(
      <newPokemonContext.Provider value={savePokemon}>
        <Home />
      </newPokemonContext.Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
