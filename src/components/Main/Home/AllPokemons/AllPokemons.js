import React from 'react';
import { Link } from 'react-router-dom';


const AllPokemons = ({ data, i, created }) => {


  const pokemon = data
  const pokemonCreated = created
  //En el primer caso usamos link en vez de ancor para evitar que se recarge la pagina y perdamos a los pokemons guardados en context
  // eslint-disable-next-line
  {
    return <article>
      {pokemonCreated !== undefined ?
        <span>
          <p>Name of pokemon: <br />
            {pokemonCreated.name}</p>
          <img src={pokemonCreated.sprites.other["official-artwork"].front_default} alt="frontd of pokemon" />
          <Link to={`http://localhost:3000/pokemon/local/${pokemonCreated.id}`}>Details of this pokemon</Link>
        </span> :
        <></>
      }
      {pokemon !== undefined ?
        <span>
          <p>Name of pokemon: <br />
            {pokemon.name}</p>
          <img src={pokemon.sprites.other["official-artwork"].front_default} alt="frontd of pokemon" />
          <p>Position number in poxedex: {i + 1}</p>
          <a href={`http://localhost:3000/pokemon/${pokemon.id}`}>Details of this pokemon</a>
        </span> :
        <></>
      }
    </article>;
  }

};

export default AllPokemons;
