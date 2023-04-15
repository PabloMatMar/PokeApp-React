import React from "react";
import { render, screen } from '@testing-library/react';
import Graphic from "./Graphic";

describe("Graphic", () => {
  test("matches snapshot", () => {
    render(<Graphic />);
    expect(screen).toMatchSnapshot();
  });
});
