import React from "react";
import Card from './Card/Card';
import { v4 as uuidv4 } from 'uuid';
import { pokeListContext } from "../../../context/pokeListContext";

const PokemonList = () => {

  return <>
    <pokeListContext.Consumer>
      {(value) =>
        value !== undefined ?
          <article>
            {value.map((pokemon) => <Card data={pokemon} key={uuidv4()} />)}
          </article> :
          <>
            {console.log("Error al procesar objectPokemon en pokeList")}
          </>
      }
    </pokeListContext.Consumer>
  </>;
};

export default PokemonList;
