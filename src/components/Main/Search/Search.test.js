import React, { useContext } from "react";
import { render, screen } from '@testing-library/react';;
import Search from "./Search";
import axios from 'axios'
import PokemonList from '../Pokelist/Pokelist';
import { pokemonContext } from '../../../context/pokemonContext';
import { pokeListContext } from '../../../context/pokeListContext';



describe("Search", () => {
  test("matches snapshot", () => {
    const [namePokemon, setNamePokemon] = useState("");
    const [objectPokemon, setObjectPokemon] = useState([]);
    const [arrayNamePokemons, setArrayNamePokemons] = useState([]);
    const [status, setStatus] = useState(0); 
    const [savePokemon, setSavePokemon] = useState([]);
    render(<Search />);
    expect(screen).toMatchSnapshot();
  });
});
