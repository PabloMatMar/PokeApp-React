import React from "react";
import { render, screen } from '@testing-library/react';
import Main from '../Main/Main';
import { BrowserRouter } from 'react-router-dom';
import { pokemonContext } from '../../context/pokemonContext';
import { newPokemonContext } from '../../context/newPokemonContext';
import { chartContext } from '../../context/chartContext';

describe("Main", () => {

  const pokemonsDatas = {
    namePokemon: "",
    objectPokemon: [],
    arrayNamePokemons: []

  }

  const newPokemonsList = {
    savePokemon: []
  }

  const simulatedChartContex = {
    limitOfLive: 250,

    limitOfAttack: 130,

    limitOfDefense: 125,

    limitOfSpecialAttack: 190,

    limitOfSpecialDefense: 87,

    limitOfSpeed: 180

  }
  test("matches snapshot", () => {
    render(
      <pokemonContext.Provider value={pokemonsDatas}>
        <newPokemonContext.Provider value={newPokemonsList}>
          <chartContext.Provider value={simulatedChartContex}>
            <BrowserRouter>
              <Main />
            </BrowserRouter>
          </chartContext.Provider>
        </newPokemonContext.Provider>
      </pokemonContext.Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
