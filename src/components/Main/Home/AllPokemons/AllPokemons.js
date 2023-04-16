import React from 'react';
import { Link } from 'react-router-dom';
import PokeFly from './flyPokemons.json';


const AllPokemons = ({ data, i, created }) => {

  const pokemon = data
  const pokemonCreated = created

  const changeClass = () => {
    if (PokeFly.includes(pokemon.name)) return pokemon.types[1].type.name;
    else return pokemon.types[0].type.name;
  }

  return <article className='article-of-AllPokemons'>
    {pokemonCreated !== undefined ?
      <span>
        <h2>
          {pokemonCreated.name}
        </h2>
        <img src={pokemonCreated.image} alt="frontd of pokemon" />
        <p>Position in Pokedex: {pokemonCreated.id}</p>
        <button className='button-in-main'>
          <Link to={`/pokemon/local/${pokemonCreated.id}`}>Look Details</Link>
        </button>
      </span> :
      <></>
    }
    {pokemon !== undefined ?
      <span className={`backGroundImage-${changeClass()}`}>
        <p>Position in Pokedex: {i + 1}</p>
        <button className='button-in-main'>
          <Link to={`/pokemon/${pokemon.id}`}>Look Details</Link>
        </button>
        <h2>
          {pokemon.name}
        </h2>
        <br />
        <img src={pokemon.sprites.other["official-artwork"].front_default} alt="frontd of pokemon" />
      </span>

      : <></>}
  </article>;


};

export default AllPokemons;
