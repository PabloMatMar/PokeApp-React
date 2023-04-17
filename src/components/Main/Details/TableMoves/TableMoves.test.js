import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import TableMoves from "./TableMoves";

describe("TableMoves", () => {
  test("matches snapshot", () => {

    const simulatedPropsData = {
      moves: [
        {
          move: {
            name: "razor-wind",
            url: "https://pokeapi.co/api/v2/move/13/"
          },
          version_group_details: [
            {
              level_learned_at: 0

            }]
        },
        {
          move: {
            name: "swords-dance",
            url: "https://pokeapi.co/api/v2/move/14/"
          },
          version_group_details: [
            {
              level_learned_at: 14,

            }]
        }
      ]
    }

    const simulatedPropsId = {
      id: 1
    }


    render(
      <BrowserRouter>
        <TableMoves data={simulatedPropsData} id={simulatedPropsId} />
      </BrowserRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});
