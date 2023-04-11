import React from "react";
import { render, screen } from '@testing-library/react';
import MovesDescription from "./MovesDescription";
import { pokemonContext } from "../../../context/pokemonContext";

describe("MovesDescription", () => {

  test("matches snapshot", () => {
    const simulatedDataOfContext = {
      data: {
        accuracy: 80,
        damage_class: {
          name: "Pyshical"
        },
        effect_entries: [
          {
            effect: "Im a testing Move!",
            short_effect: "Me to"
          }
        ]
      },
    }
    render(
      <pokemonContext.Provider value={simulatedDataOfContext}>
        <MovesDescription />
      </pokemonContext.Provider>
    );
    expect(screen).toMatchSnapshot();
  });

});

