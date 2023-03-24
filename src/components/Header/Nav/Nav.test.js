import React from "react";
import { render, screen } from '@testing-library/react';
import Nav from "./Nav";

describe("Nav", () => {
  test("matches snapshot", () => {
    render(<Nav />);
    expect(screen).toMatchSnapshot();
  });
});
