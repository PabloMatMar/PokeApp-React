import React from "react";
import { render, screen } from '@testing-library/react';
import Header from "./Header";

describe("Header", () => {
  test("matches snapshot", () => {
    render(<Header />);
    expect(screen).toMatchSnapshot();
  });
});
