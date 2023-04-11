import React, { useEffect, useContext } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import { pokemonContext } from '../../../context/pokemonContext';
import SpecialEffect from './SpecialEffect/SpecialEffect';

const MovesDescription = () => {

  let { url, idToLinkToBack } = useParams();

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
    {data !== undefined ? <>
      <button className='button-in-main'>
        <Link to={`http://localhost:3000/pokemon/${idToLinkToBack}`}> Go to Details Of Back</Link>
      </button>

      <table className="table">
        <thead>
          <tr>
          {data.accuracy !== null ? <th>Chance of impact: </th> : <th>Special Move </th>}
            <th>Type of Damage</th>
            <th>Effect</th>
            {data.effect_entries[0].effect !== data.effect_entries[0].short_effect ? <th>Short Effect</th> : <></>}
            <th>Description</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            {data.accuracy !== null ? <td>{data.accuracy}%</td> : <td><SpecialEffect data={data.contest_effect}/></td> }
            <td>{data.damage_class.name}</td>
            <td>{data.effect_entries[0].effect}</td>
            {data.effect_entries[0].effect !== data.effect_entries[0].short_effect ? <td>{data.effect_entries[0].short_effect}</td> : <></>}
            <td>{data.flavor_text_entries[0].flavor_text}</td>
          </tr>

        </tbody>
      </table>
    </> :
      <></>}
  </>;
};

export default MovesDescription;
