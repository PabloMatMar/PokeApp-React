import React from "react";
import { render, screen } from '@testing-library/react';
import TableTypesAndDimensions from "./TableTypesAndDimensions";

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
    render(<TableTypesAndDimensions data={simulatedProps} />);
    expect(screen).toMatchSnapshot();
  });
});
