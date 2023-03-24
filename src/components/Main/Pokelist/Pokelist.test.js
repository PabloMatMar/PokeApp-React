import React from "react";
import { render, screen } from '@testing-library/react';
import PokemonList from "./PokemonList";
import { v4 as uuidv4 } from 'uuid';

describe("PokemonList", () => {
  test("matches snapshot", () => {
    const data = [{
      name: "pikachu",
      sprites: {front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},

    }
  ]

    render(<PokemonList data={data} />);
    expect(screen).toMatchSnapshot();
  });
});
