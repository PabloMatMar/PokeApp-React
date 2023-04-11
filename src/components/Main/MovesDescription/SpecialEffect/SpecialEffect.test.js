import React from "react";
import { render, screen } from '@testing-library/react';
import SpecialEffect from "./SpecialEffect";
import { pokemonContext } from "../../../../context/pokemonContext";

describe("SpecialEffect", () => {
  test("matches snapshot", () => {

    const simulatedProps = {
      data: {
        url: 'https://pokeapi.co/api/v2/contest-effect/32/'
      }
    }

    const simulatedDataOfContext = {
      specialEffect: {

        effect_entries: [
          {
            effect: "User gains one star."
          }

        ],
        flavor_text_entries: [
          {
            flavor_text: "Ups the user's condition.  Helps prevent nervousness."
          }
        ]
      }
    }


    render(
      <pokemonContext.Provider value={simulatedDataOfContext}>
        <SpecialEffect data={simulatedProps} />

      </pokemonContext.Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
