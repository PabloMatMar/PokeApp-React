import React, { useEffect, useContext } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import { pokemonContext } from '../../../context/pokemonContext';
import SpecialEffect from './SpecialEffect/SpecialEffect';
import status from '../../../imgsForImport/status.png';
import special from '../../../imgsForImport/special.png';
import fighting from '../../../imgsForImport/fighting.png';

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



  return <section className='movesDescription'>
    {data !== undefined ? <>
      <button className='button-in-main'>
        <Link to={`../pokemon/${idToLinkToBack}`}>Back to details</Link>
      </button>
      <table>
        <thead>
        <tr>
            <td colSpan="1">Property</td>
            <td colSpan="3">Description</td>
          </tr>

        </thead>
        <tbody>
          <tr>
            {data.accuracy !== null ? <td colSpan="1">Chance of impact: </td> : <td colSpan="1">Special Move </td>}
            {data.accuracy !== null ? <td colSpan="3">{data.accuracy}%</td> : <td colSpan="3">
              <SpecialEffect data={data.contest_effect} />
            </td>}
          </tr>
          <tr>
            <td colSpan="1">Type of Move:</td>
            <td colSpan="3">{data.damage_class.name === "special" ? <img src={special}
              alt="special logo" /> : <>{data.damage_class.name === "status" ? <img src={status} alt="status logo" /> :
                <img src={fighting} alt="figthting logo pokemon" />}</>
            }</td>
          </tr>
          <tr>
            <td colSpan="1">Effect:</td>
            <td colSpan="3">{data.effect_entries[0].effect}</td>
          </tr>
          <tr>
            {data.effect_entries[0].effect !== data.effect_entries[0].short_effect ? <td colSpan="1">Short Effect:</td> : <>
            </>}
            {data.effect_entries[0].effect !== data.effect_entries[0].short_effect ? <td colSpan="3">
              {data.effect_entries[0].short_effect}</td> : <></>}
          </tr>
          <tr>
            <td colSpan="1">Description:</td>
            <td colSpan="3">{data.flavor_text_entries[0].flavor_text}</td>

          </tr>
        </tbody>

      </table>
    </> :
      <></>}
  </section>;
};

export default MovesDescription;
