import React from "react";
import { render, screen } from '@testing-library/react';
import Form from "./Form";
import { newPokemonContext } from "../../../context/newPokemonContext";

describe("Form", () => {

  test("matches snapshot", () => {

    let savePokemon = []

    render(

      <newPokemonContext.Provider value={savePokemon}>
        <Form />
      </newPokemonContext.Provider>

    );
    
    expect(screen).toMatchSnapshot();
  });

});
