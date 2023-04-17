import React from "react";
import Card from './Card/Card';
import { v4 as uuidv4 } from 'uuid';

const PokemonList = (props) => {

  return <>
    {props.data !== undefined ?
        <article className="pokeList-container">
          {props.data.map((pokemon, i) => <Card data={pokemon} length={props.data.length} i={i} key={uuidv4()} />)}
        </article> :
        <>
        </>
    }
  </>;
};

export default PokemonList;
