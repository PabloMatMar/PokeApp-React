import React from 'react';

//añadir boton para mostrar forma shyny/normal (normal por defecto)

const AllPokemons = ({data, i}) => {

  const pokemon = data.data
  // eslint-disable-next-line
  {
    return <div>
      {pokemon !== undefined ?
        <span>
          <p>Name of pokemon: <br />
            {pokemon.name}</p>
          <p>Normal Form: </p>
          <img src={pokemon.sprites.other["official-artwork"].front_default} alt="frontd of pokemon" />
          <p>Shiny Form: </p>
          <img src={pokemon.sprites.other["official-artwork"].front_shiny} alt="back of pokemon" />
          <p>{i}</p>
        </span> :
        <p>No pokemon search.</p>
      }
    </div>;
  }

};

export default AllPokemons;
