import React, { useContext } from "react";
import { render, screen } from '@testing-library/react';;
import Search from "./Search";
import { pokemonContext } from '../../../context/pokemonContext';




describe("Search", () => {
  test("matches snapshot", () => {
    const simulatedContext = {
      namePokemon: "",
      objectPokemon: [],
      arrayNamePokemons: [],
      status: 0
    }

    render(
      <pokemonContext.Provider value={simulatedContext}>
        <Search />
      </pokemonContext.Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
