import React from 'react';


const AllPokemons = ({data, i}) => {

  const pokemon = data.data
  // eslint-disable-next-line
  {
    return <article>
      {pokemon !== undefined ?
        <span>
          <p>Name of pokemon: <br />
            {pokemon.name}</p>
          <p>Normal Form: </p>
          <img src={pokemon.sprites.other["official-artwork"].front_default} alt="frontd of pokemon" />
          <p>Shiny Form: </p>
          <img src={pokemon.sprites.other["official-artwork"].front_shiny} alt="back of pokemon" />
          <p>Position number in poxedex: {i+1}</p>
          <a href={`http://localhost:3000/pokemon/${pokemon.id}`}>Details of this pokemon</a>
        </span> :
        <p>No pokemon search.</p>
      }
    </article>;
  }

};

export default AllPokemons;
