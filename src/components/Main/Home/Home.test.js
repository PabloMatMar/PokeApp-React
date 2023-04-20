import React from "react";
import { render, screen } from '@testing-library/react';
import Home from "./Home";
import { newPokemonContext } from '../../../context/newPokemonContext';
import { chartContext } from "../../../context/chartContext";
import { BrowserRouter } from "react-router-dom";

describe("Home", () => {
  test("matches snapshot", () => {

    let simulatedContext = {
      savePokemon: [{
        id: 5,
        name: "charmeleon",
        sprites:
        {
          other:
          {
            "official-artwork":
              { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png" }
          }
        }

      },
      {
        id: 6,
        name: "charizard",
        sprites:
        {
          other:
          {
            "official-artwork":
              { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" }
          }
        }

      }]
    }

    let simulatedChartContex = {
      limitOfLive: 250,

      limitOfAttack: 130,

      limitOfDefense: 125,

      limitOfSpecialAttack: 190,

      limitOfSpecialDefense: 87,

      limitOfSpeed: 180
    }

    render(
      <BrowserRouter>
        <newPokemonContext.Provider value={simulatedContext}>
          <chartContext.Provider value={simulatedChartContex}>
            <Home />
          </chartContext.Provider>
        </newPokemonContext.Provider>
      </BrowserRouter>

    );
    expect(screen).toMatchSnapshot();
  });
});
