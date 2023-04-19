import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { chartContext } from '../../../context/chartContext';
import Description from './Description/Description';
import Graphic from './Graphic/Graphic';
import TableTypesAndDimensions from './TableTypesAndDimensions/TableTypesAndDimensions';
import TableMoves from './TableMoves/TableMoves';
import SelectImage from './SelectImage/SelectImage';


const Details = () => {

  let { id } = useParams();

  const { limitOfLive, limitOfAttack, limitOfDefense, limitOfSpecialAttack, limitOfSpecialDefense, limitOfSpeed } = useContext(chartContext);
  const [data, setData] = useState({})

  useEffect(() => {

    async function fetchData() {
      if ((data // 👈 comprobando que data esta vacio
        && Object.keys(data).length === 0
        && Object.getPrototypeOf(data) === Object.prototype)) {
        try {
          await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => setData(res.data))
        } catch (e) {
          alert("Oh, We have a problem, recharged to solution")
        }
      }

    }
    fetchData();
    // eslint-disable-next-line
  }, []);


  return <section className='details'>

    {!(data // 👈Compruebo que el objeto data no sea undefined y no este vacio
      && Object.keys(data).length === 0
      && Object.getPrototypeOf(data) === Object.prototype) ?

      <article className='details-container'>
        <SelectImage data={data} />
        <Description data={data.species} />
        <TableTypesAndDimensions data={data} />
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
            color: 'purple'
          }
        }]} />
        <TableMoves data={data} id={id} />
      </article> :
      <></>
    }

  </section>;

}

export default Details;

