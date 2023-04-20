import React from "react";
import { render, screen } from '@testing-library/react';
import Description from "./Description";



describe("Description", () => {
  test("matches snapshot", () => {
    const simulatedProps = {
      data: {
        species: {
          "name": "bulbasaur",
          "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
        }
      }
    };


    render(
      <Description data={simulatedProps} />
    );
    expect(screen).toMatchSnapshot();
  });
});
