import React from "react";
import { render, screen } from '@testing-library/react';
import Details from "./Details";
import { chartContext } from "../../../context/chartContext";

let simulatedChartContex = {
  limitOfLive: 160,

  limitOfAttack: 134,

  limitOfDefense: 180,

  limitOfSpecialAttack: 154,

  limitOfSpecialDefense: 125,

  limitOfSpeed: 150
};

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
