import React from "react";
import { render, screen } from '@testing-library/react';
import DetailsPokemonLocal from "./DetailsPokemonLocal";
import { newPokemonContext } from '../../../context/newPokemonContext';
import { chartContext } from "../../../context/chartContext";

describe("DetailsPokemonLocal", () => {
  test("matches snapshot", () => {

    const simulatedContext = {
      savePokemon: [{
        id: undefined,
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy6zXnsMduLNmdH8uDGFrjFJGu-K-J2yxXg8iwFF66XA&s"
      }]

    };
    const simulatedChartContex = {
      limitOfLive: 160,
    
      limitOfAttack: 134,
    
      limitOfDefense: 180,
    
      limitOfSpecialAttack: 154,
    
      limitOfSpecialDefense: 125,
    
      limitOfSpeed: 150
    };


    render(
      <chartContext.Provider value={simulatedChartContex}>
      <newPokemonContext.Provider value={simulatedContext}>
        <DetailsPokemonLocal />
      </newPokemonContext.Provider>
      </chartContext.Provider>

    );
    expect(screen).toMatchSnapshot();
  });
});
