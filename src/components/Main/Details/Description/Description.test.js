import React from "react";
import { render, screen } from '@testing-library/react';
import Description from "./Description";

describe("Description", () => {
  test("matches snapshot", () => {
    render(<Description />);
    expect(screen).toMatchSnapshot();
  });
});
