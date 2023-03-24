import React, { useState } from "react";
import { render, screen } from '@testing-library/react';
import Home from "./Home";
import { newPokemonContext } from '../../../context/newPokemonContext';

describe("Home", () => {
  test("matches snapshot", () => {
    const dataPokemons = [{
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

    const savePokemon = [{
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
    render(<Home dataPokemons={dataPokemons} savePokemon={savePokemon} />);
    expect(screen).toMatchSnapshot();
  });
});
