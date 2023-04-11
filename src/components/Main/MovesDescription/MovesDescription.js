import React, { useEffect, useContext } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { pokemonContext } from '../../../context/pokemonContext';
// import Types from './types.json';
import { v4 as uuidv4 } from 'uuid';

const MovesDescription = () => {

  let { url } = useParams();

  const { data, setData } = useContext(pokemonContext);


  useEffect(() => {

    async function fetchData() {
      try {
        await axios.get(`https://pokeapi.co/api/v2/move/${url}`)
          .then(res => setData(res.data));
      } catch (e) {
        console.log(e)
      }

    }
    fetchData();
    // eslint-disable-next-line
  }, []);



  return <>
    {data !== undefined  ?

      <table className="table">
        <thead>
          <tr>
            <th>Chance of impact: </th>
            <th>Type of Damage: </th>
            <th>Effect</th>
            <th>Shor Effect</th>
          </tr>
        </thead>
        <tbody>

          <tr key={uuidv4()}>
            <td>{data.accuracy}%</td>
            <td>{data.damage_class.name}</td>
            <td>{data.effect_entries[0].effect}</td>
            <td>{data.effect_entries[0].short_effect}</td>
          </tr>

        </tbody>
      </table> :
      <></>}
  </>;
};

export default MovesDescription;
