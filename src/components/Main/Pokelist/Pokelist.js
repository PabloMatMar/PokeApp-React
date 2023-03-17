import React from "react";
import Card from './Card/Card';
import { v4 as uuidv4 } from 'uuid';
import { pokeListContext } from "../../../context/pokeListContext";

const PokemonList = () => {

  return <section>
    <pokeListContext.Consumer>
      {(value) =>
        value !== undefined ?
          <article>
            {value.map((pokemon) => <Card data={pokemon} key={uuidv4()} />)}
          </article> :
          <article>
            {console.log("Error al procesar objectPokemon en pokeList")}
          </article>
      }
    </pokeListContext.Consumer>
  </section>;
};

export default PokemonList;
