import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import MovesDescription from "./MovesDescription";


describe("MovesDescription", () => {

  test("matches snapshot", () => {

    render(

      <BrowserRouter>
        <MovesDescription />
      </BrowserRouter>

    );
    expect(screen).toMatchSnapshot();
  });
});
