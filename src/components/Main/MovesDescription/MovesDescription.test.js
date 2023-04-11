import React from "react";
import { render, screen } from '@testing-library/react';
import MovesDescription from "./MovesDescription";

describe("MovesDescription", () => {
  test("matches snapshot", () => {
    render(
    <MovesDescription />
    );
    expect(screen).toMatchSnapshot();
  });
});
