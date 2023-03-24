import React from "react";
import { render, screen } from '@testing-library/react';
import AllPokemons from "./AllPokemons";

describe("AllPokemons", () => {
  test("matches snapshot", () => {
    render(<AllPokemons />);
    expect(screen).toMatchSnapshot();
  });
});
