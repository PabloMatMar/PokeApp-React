import React, {useState} from "react";
import { render, screen } from '@testing-library/react';
import Home from "./Home";
import { newPokemonContext } from '../../../context/newPokemonContext';

describe("Home", () => {
  // const [dataPokemons, setDataPokemons] = useState()
  // const { savePokemon } = useContext(newPokemonContext);
  // console.log("Esto es lo que hay en context", savePokemon);
  test("matches snapshot", () => {
    render(<Home />);
    expect(screen).toMatchSnapshot();
  });
});
