import React from "react";
import { render, screen } from '@testing-library/react';
import Details from "./Details";

describe("Details", () => {
  test("matches snapshot", () => {
    render(<Details />);
    expect(screen).toMatchSnapshot();
  });
});
