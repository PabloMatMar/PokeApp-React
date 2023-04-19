import React from "react";
import { render, screen } from '@testing-library/react';
import TableDimensionsAndTypes from "./TableDimensionsAndTypes";

describe("TableTypes", () => {
  test("matches snapshot", () => {
    const simulatedProps = {
      weigth: 53,
      heigth: 35,
      typeOne: "fire",
      typeTwo: "flying"

    };
    render(<TableDimensionsAndTypes data={simulatedProps} />);
    expect(screen).toMatchSnapshot();
  });
});

