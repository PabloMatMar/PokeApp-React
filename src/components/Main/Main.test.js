import React from "react";
import { render, screen } from '@testing-library/react';
import Main from '../Main/Main';
import { BrowserRouter } from 'react-router-dom';
import { pokemonContext } from '../../context/pokemonContext';
import { newPokemonContext } from '../../context/newPokemonContext';

describe("Main", () => {

  const pokemonsDatas = {
    namePokemon: "",
    objectPokemon: [],
    arrayNamePokemons: [],
    status: 0

  }

  const newPokemonsList = {
    savePokemon: []
  }
  test("matches snapshot", () => {
    render(
      <pokemonContext.Provider value={pokemonsDatas}>
        <newPokemonContext.Provider value={newPokemonsList}>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </newPokemonContext.Provider>
      </pokemonContext.Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
