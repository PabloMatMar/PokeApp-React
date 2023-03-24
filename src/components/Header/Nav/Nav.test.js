import React from "react";
import { render, screen } from '@testing-library/react';
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";

describe("Nav", () => {
  test("matches snapshot", () => {
    render(
      <BrowserRouter>
          <Nav />
      </BrowserRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});
