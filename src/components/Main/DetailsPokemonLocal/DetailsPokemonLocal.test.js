import React from "react";
import { render, screen } from '@testing-library/react';
import DetailsPokemonLocal from "./DetailsPokemonLocal";

describe("DetailsPokemonLocal", () => {
  test("matches snapshot", () => {
    render(<DetailsPokemonLocal />);
    expect(screen).toMatchSnapshot();
  });
});
