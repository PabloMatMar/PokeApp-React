import React from "react";
import { render, screen } from '@testing-library/react';
import Graphic from "./Graphic";

const simulatedProps = [{
  data: {
    Special_attack: 24 /  125,
    Attack: 35 / 134,
    Defense: 48 / 180,
    Special_defense: 40 /  154,
    Life: 82 / 160,
    Speed: 17 /  150
  },
  meta: {
    color: 'green'
  }
}]


describe("Graphic", () => {
  test("matches snapshot", () => {
    render(<Graphic data={simulatedProps}/>);
    expect(screen).toMatchSnapshot();
  });
});
