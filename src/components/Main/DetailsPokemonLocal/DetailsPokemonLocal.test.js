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
        height: 25,
        weigth: 33,
        stats: [
          {
            base_stat: 16
          },
          {
            base_stat: 23
          },
          {
            base_stat: 43
          },
          {
            base_stat: 32
          },
          {
            base_stat: 27
          },
          {
            base_stat: 45
          }
        ],
        moves: [{
          move: {

          }
        }
        ],
        pokemonCreated: {
          sprites: {
            other: {
              "official-artwork": {
                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
              }
            }
          }
        }
      }]

    };


    render(
      <newPokemonContext.Provider value={simulatedContext}>
        <DetailsPokemonLocal />
      </newPokemonContext.Provider>

    );
    expect(screen).toMatchSnapshot();
  });
});
