import React from "react";
import { render, screen } from '@testing-library/react';
import NotFound from "./NotFound";

describe("NotFound", () => {
  test("matches snapshot", () => {
    render(<NotFound />);
    expect(screen).toMatchSnapshot();
  });
});
