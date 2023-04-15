import React from "react";
import { render, screen } from '@testing-library/react';
import Details from "./Details";
import { chartContext } from "../../../context/chartContext";

let simulatedChartContex = {
  limitOfLive: 250,

  limitOfAttack: 130,

  limitOfDefense: 125,

  limitOfSpecialAttack: 190,

  limitOfSpecialDefense: 87,

  limitOfSpeed: 180
}

describe("Details", () => {
  test("matches snapshot", () => {
    render(
      <chartContext.Provider value={simulatedChartContex}>
        <Details />
      </chartContext.Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
