import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { newPokemonContext } from '../../../context/newPokemonContext';
import { chartContext } from '../../../context/chartContext';
import Graphic from '../Details/Graphic/Graphic';
import TableDimensionsAndTypes from './TableDimensionsAndTypes/TableDimensionsAndTypes';

const DetailsPokemonLocal = () => {
  const { limitOfLive, limitOfAttack, limitOfDefense, limitOfSpecialAttack, limitOfSpecialDefense, limitOfSpeed } = useContext(chartContext);
  const { savePokemon } = useContext(newPokemonContext);

  const [stats, setStats] = useState();
  const { id } = useParams();

  const data = savePokemon[savePokemon.length - 1]
  let check = false;

  for (let i = 0; i < savePokemon.length; i++) {
    savePokemon[0].id === id ? check = true : check = false;
    if (check === true) break;
  };



  useEffect(() => {
    setStats(savePokemon[0].stats.filter(e => e !== ""))
    // eslint-disable-next-line
  }, [])


  return <section className='container-Details-Local'>
    {check !== false ?
      <article>
        <img src={data.image} alt="View fronted of pokemon" />
        <h4>
          {data.name
            .charAt(0)
            .toUpperCase()
            .concat(data.name.slice(1))}
        </h4>
        <p>Nº {data.id} in pokedex</p>
        <TableDimensionsAndTypes data={data} />
        {stats !== undefined && stats.length > 0 ?
          <Graphic data={[{
            data: {
              Special_attack: data.stats[3] / limitOfSpecialAttack,
              Attack: data.stats[1] / limitOfAttack,
              Defense: data.stats[2] / limitOfDefense,
              Special_defense: data.stats[4] / limitOfSpecialDefense,
              Life: data.stats[0] / limitOfLive,
              Speed: data.stats[5] / limitOfSpeed
            },
            meta: {
              color: 'green'
            }
          }]} /> :
          <></>}
        {data.move !== '' ? <><h5>Move of the pokemon</h5>
          <p>{data.move}</p></> : <></>}
      </article> :
      <></>
    }
  </section>;
};

export default DetailsPokemonLocal;
