import React from "react";
import Card from './Card/Card';
import { v4 as uuidv4 } from 'uuid';
import { pokeListContext } from "../../../context/pokeListContext";

const PokemonList = () => {

  return <>
    <pokeListContext.Consumer>
      {(value) =>
        value !== undefined ?
          <article className="pokeList-container">
            {value.map((pokemon, i) => <Card data={pokemon} length={value.length} i={i} key={uuidv4()} />)}
          </article> :
          <>
          </>
      }
    </pokeListContext.Consumer>
  </>;
};

export default PokemonList;
