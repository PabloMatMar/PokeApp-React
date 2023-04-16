import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { newPokemonContext } from '../../../context/newPokemonContext';
import Type from './types.json';

const DetailsPokemonLocal = () => {
  const { savePokemon } = useContext(newPokemonContext);
  const { id } = useParams();
  const arrFilt = savePokemon.filter(pokemon => pokemon.id === id);
  const data = arrFilt[0]

  return <section className='container-Details-Local'>
    <article className='container-Details-Local'>
      {!(data // 👈 null and undefined check
        && Object.keys(data).length === 0) && data !== undefined ?

        <article>
          <h3>Image of pokemon:</h3>
          <img src={data.sprites.other.dream_world.front_default} alt="View fronted of pokemon" />
          <h4><i>{data.name}</i></h4>
          <p>Nº {data.id} in the pokedex</p>

          <h3>Dimensions</h3>
          <p>{data.height}"</p>
          <p>{data.weight}lbs</p>

          <h3>Type of this pokemon:</h3>

          <p>{data.typeOne}</p>
          <img src={Type[data.typeOne]} alt={Type[data.typeOne]} className="imagenType" />
          {data.typeTwo !== undefined ?
            <div>
              <p>{data.typeTwo}</p>
              <img src={Type[data.typeTwo]} alt={Type[data.typeTwo]} className="imagenType2" />

            </div> :
            <></>}

          <h3>Base Stats</h3>
          <p>Life : {data.stats[0].base_stat}</p>
          <p>Attack : {data.stats[1].base_stat}</p>
          <p>Defense : {data.stats[2].base_stat}</p>
          <p>Special-attack : {data.stats[3].base_stat}</p>
          <p>Special-defense : {data.stats[4].base_stat}</p>
          <p>Speed : {data.stats[5].base_stat}</p>

          <h3>Moves of this pokemon</h3>
          <p>{data.moves[0].move.name}</p>
        </article> :
        <></>
      }
    </article>

  </section>;
};

export default DetailsPokemonLocal;
