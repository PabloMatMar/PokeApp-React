import React from "react";
import { render, screen } from '@testing-library/react';
import SelectImage from "./SelectImage";

describe("SelectImage", () => {
  test("matches snapshot", () => {
    const simulatedProps = {
      other: {
        dream_world: {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          front_female: null
        },
        home: {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
          front_shiny_female: null
        },
        "official-artwork": {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
        }
      }
    }


    render(
      <SelectImage data={simulatedProps} />
    );
    expect(screen).toMatchSnapshot();
  });
});
