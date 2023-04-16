import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { newPokemonContext } from '../../../context/newPokemonContext';
import { chartContext } from '../../../context/chartContext';
import Type from './types.json';
import Graphic from '../Details/Graphic/Graphic';

const DetailsPokemonLocal = () => {
  const { limitOfLive, limitOfAttack, limitOfDefense, limitOfSpecialAttack, limitOfSpecialDefense, limitOfSpeed } = useContext(chartContext);
  const [stats, setStats] = useState();
  const { savePokemon } = useContext(newPokemonContext);
  const { id } = useParams();
  const data = savePokemon.filter(pokemon => pokemon.id === id)[0];

  useEffect(() => {
    setStats(data.stats.filter(e => e.base_stat !== ""))
  }, [data.stats])


  return <section className='container-Details-Local'>
    <article className='container-Details-Local'>
      {!(data // 👈 null and undefined check
        && Object.keys(data).length === 0) && data !== undefined ?

        <article>
          <h3>Image of pokemon:</h3>
          <img src={data.image} alt="View fronted of pokemon" />
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
          {stats !== undefined && stats.length > 0 ?
            <Graphic data={[{
              data: {
                Special_attack: data.stats[3].base_stat / limitOfSpecialAttack,
                Attack: data.stats[1].base_stat / limitOfAttack,
                Defense: data.stats[2].base_stat / limitOfDefense,
                Special_defense: data.stats[4].base_stat / limitOfSpecialDefense,
                Life: data.stats[0].base_stat / limitOfLive,
                Speed: data.stats[5].base_stat / limitOfSpeed
              },
              meta: {
                color: 'green'
              }
            }]} /> :
            <></>}

          <h3>Moves of this pokemon</h3>
          <p>{data.moves[0].move.name}</p>
        </article> :
        <></>
      }
    </article>

  </section>;
};

export default DetailsPokemonLocal;
