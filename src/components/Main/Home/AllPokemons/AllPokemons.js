import React from 'react';
import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';


const AllPokemons = ({ data, i, created }) => {

  const pokemon = data
  const pokemonCreated = created
  //En el primer caso usamos link en vez de ancor para evitar que se recarge la pagina y perdamos a los pokemons guardados en context
  // eslint-disable-next-line
  {
    return <article className='article-of-AllPokemons'>
      {pokemonCreated !== undefined ?
        <span>
          <p>Name of pokemon: <br />
            {pokemonCreated.name}</p>
          <img src={pokemonCreated.sprites.other["official-artwork"].front_default} alt="frontd of pokemon" />
          <p>Position number in poxedex: {pokemonCreated.id}</p>
          <button className='button-in-main'>
          <Link to={`/pokemon/local/${pokemonCreated.id}`}>Look Details</Link>
          </button>
        </span> :
        <></>
      }

      {pokemon !== undefined ?
        <span>
          <p>Name of pokemon: <br />
            {pokemon.name}</p>
          <img src={pokemon.sprites.other["official-artwork"].front_default} alt="frontd of pokemon" />
          <p>Position number in poxedex: {i + 1}</p>
          <button className='button-in-main'>
          <Link to={`/pokemon/${pokemon.id}`}>Look Details</Link>
          </button>
        </span> :
        <></>
      }
    </article>;
  }

};

export default AllPokemons;
