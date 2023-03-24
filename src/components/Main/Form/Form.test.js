import React from "react";
import { render, screen } from '@testing-library/react';
import Form from "./Form";

describe("Form", () => {
  test("matches snapshot", () => {
    render(<Form />);
    expect(screen).toMatchSnapshot();
  });
});
