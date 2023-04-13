import React from "react";
import { render, screen } from '@testing-library/react';
import { pokemonContext } from "../../../context/pokemonContext";
import { BrowserRouter } from "react-router-dom";
import MovesDescription from "./MovesDescription";


describe("MovesDescription", () => {

  test("matches snapshot", () => {
    const simulatedDataOfContext = {
      data: {
        accuracy: 80,
        damage_class: {
          name: "Pyshical"
        },
        flavor_text_entries: [
          {
            flavor_text: "Description of special move.",
          }
        ],
        effect_entries: [
          {
            effect: "Im a testing Move!",
            short_effect: "Im a testing Move!"
          }
        ]
      }
    }
    render(
      <pokemonContext.Provider value={simulatedDataOfContext}>
        <BrowserRouter>
          <MovesDescription />
        </BrowserRouter>
      </pokemonContext.Provider>
    );
    expect(screen).toMatchSnapshot();
  });

});

