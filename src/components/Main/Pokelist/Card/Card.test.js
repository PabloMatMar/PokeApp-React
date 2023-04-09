import React from "react";
import { render, screen } from '@testing-library/react';
import Card from "./Card";
import { BrowserRouter } from "react-router-dom";

describe("Card", () => {
  const data = {
    name: "pikachu",
    id: 25,
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    }

  }

  const length = 1
  const i = 0

  test("matches snapshot", () => {
    render(
      <BrowserRouter>
        <Card data={data} length={1} i={0}/>
      </BrowserRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});
