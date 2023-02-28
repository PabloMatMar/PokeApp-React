import React from "react";
import { render, screen } from '@testing-library/react';
import Main from "./Main";

describe("Main", () => {
  test("matches snapshot", () => {
    render(<Main />);
    expect(screen).toMatchSnapshot();
  });
});
