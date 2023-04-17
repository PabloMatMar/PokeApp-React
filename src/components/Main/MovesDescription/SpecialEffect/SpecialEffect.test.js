import React from "react";
import { render, screen } from '@testing-library/react';
import SpecialEffect from "./SpecialEffect";

describe("SpecialEffect", () => {
  test("matches snapshot", () => {

    const simulatedProps = {
      data: {
        url: 'https://pokeapi.co/api/v2/contest-effect/32/'
      }
    };


    render(
      <SpecialEffect data={simulatedProps} />
    );
    expect(screen).toMatchSnapshot();
  });
});
