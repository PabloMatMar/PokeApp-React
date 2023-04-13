import React from 'react';
import { Link } from 'react-router-dom';
import PokeFly from './flyPokemons.json';


const AllPokemons = ({ data, i, created }) => {

  const pokemon = data
  const pokemonCreated = created
  //Usamos link en vez de ancor para evitar que se recarge la pagina y perdamos a los pokemons guardados en context
  // eslint-disable-next-line

  return <article className='article-of-AllPokemons'>
    {pokemonCreated !== undefined ?
      <span>
        <h2>
          {pokemonCreated.name}
        </h2>
        <img src={pokemonCreated.sprites.other["official-artwork"].front_default} alt="frontd of pokemon" />
        <p>Position in poxedex: {pokemonCreated.id}</p>
        <button className='button-in-main'>
          <Link to={`/pokemon/local/${pokemonCreated.id}`}>Look Details</Link>
        </button>
      </span> :
      <></>
    }

    {/* anidacion triple Primero comprueba que no sea indefinido o tenga datos, si los tine entra en el segundo ternario que comprueba si tiene uno o dos tipos, si tiene uno los renderiza con la imagen de fondo del tipo uno, si dos entra a otro ternario, que renderiza con la imagen del fondo del tipo 2 para voladores y del tipo 1  para el resto de pokemon con dos tipos. (sustituir por switch o usar logica fuera del render) */}
    {pokemon !== undefined ? <>
      {pokemon.types.length === 1 ?
        <span className={`backGroundImage-${pokemon.types[0].type.name}`}>
          <p>Position in poxedex: {i + 1}</p>
          <button className='button-in-main'>
            <Link to={`/pokemon/${pokemon.id}`}>Look Details</Link>
          </button>
          <h2>
            {pokemon.name}
          </h2>
          <img src={pokemon.sprites.other["official-artwork"].front_default} alt="frontd of pokemon" />
        </span> :
        <> {pokemon.types[1].type.name === "flying" && PokeFly.includes(pokemon.name)?
          <span className={`backGroundImage-${pokemon.types[1].type.name}`}>
            <p>Position in poxedex: {i + 1}</p>
            <button className='button-in-main'>
              <Link to={`/pokemon/${pokemon.id}`}>Look Details</Link>
            </button>
            <h2>
              {pokemon.name}
            </h2>
            <img src={pokemon.sprites.other["official-artwork"].front_default} alt="frontd of pokemon" />
          </span> :
          <span className={`backGroundImage-${pokemon.types[0].type.name}`}>
            <p>Position in poxedex: {i + 1}</p>
            <button className='button-in-main'>
              <Link to={`/pokemon/${pokemon.id}`}>Look Details</Link>
            </button>
            <h2>
              {pokemon.name}
            </h2>
            <img src={pokemon.sprites.other["official-artwork"].front_default} alt="frontd of pokemon" />
          </span>
        }</>
      } </>
      : <></>}
  </article>;


};

export default AllPokemons;
