import React from "react";
import { render, screen } from '@testing-library/react';
import DetailsPokemonLocal from "./DetailsPokemonLocal";
import { newPokemonContext } from '../../../context/newPokemonContext';

describe("DetailsPokemonLocal", () => {
  test("matches snapshot", () => {

    const simulatedContext = {
      savePokemon: [{
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
      }]

    }
    let id = 5


    render(
      <newPokemonContext.Provider value={simulatedContext}>
        <DetailsPokemonLocal />

      </newPokemonContext.Provider>

    );
    expect(screen).toMatchSnapshot();
  });
});
