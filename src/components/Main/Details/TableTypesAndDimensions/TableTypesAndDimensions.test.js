import React from "react";
import { render, screen } from '@testing-library/react';
import TableTypes from "./TableTypesAndDimensions";

describe("TableTypes", () => {
  test("matches snapshot", () => {
    const simulatedProps = {
      weigth: 53,
      heigth: 35,
      types: [
        {
          type: {
            name: "fire",
          }
        },
        {
          type: {
            name: "flying",
          }
        }
      ]

    };
    render(<TableTypes data={simulatedProps} />);
    expect(screen).toMatchSnapshot();
  });
});
