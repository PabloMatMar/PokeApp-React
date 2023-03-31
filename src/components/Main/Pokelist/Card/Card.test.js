import React from "react";
import { render, screen } from '@testing-library/react';
import Card from "./Card";
import { BrowserRouter } from "react-router-dom";

describe("Card", () => {
  const data = {
    name: "pikachu",
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    }

  }

  test("matches snapshot", () => {
    render(
      <BrowserRouter>
        <Card data={data} />
      </BrowserRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});
