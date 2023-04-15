import React from "react";
import { render, screen } from '@testing-library/react';
import Description from "./Description";
import { pokemonContext } from "../../../../context/pokemonContext";


describe("Description", () => {
  test("matches snapshot", () => {
    const simulatedProps = {
      data: {
        species: {
          "name": "bulbasaur",
          "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
        }
      }
    }

    const simulatedDataOfContext = {
      "flavor_text_entries": [
        {
          "flavor_text": "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.",
          "language": {
            "name": "en"
          }
        },
        {
          "flavor_text": "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.",
          "language": {
            "name": "en"
          }
        }
      ]
    }


    render(
      <pokemonContext.Provider value={simulatedDataOfContext}>
        <Description data={simulatedProps} />

      </pokemonContext.Provider>

    );
    expect(screen).toMatchSnapshot();
  });
});
