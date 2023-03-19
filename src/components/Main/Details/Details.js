import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const Details = () => {

  let { id } = useParams();

  const [data, setData] = useState({})


  useEffect(() => {

    async function fetchData() {
      if ((data // 👈 null and undefined check
        && Object.keys(data).length === 0
        && Object.getPrototypeOf(data) === Object.prototype)) {
        try {
          await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then((res) => setData(res.data))
        } catch (e) {
          alert("Oh, We have a problem, recharged to solution")
        }
      }

    }
    fetchData();
    // eslint-disable-next-line
  }, []);

  return <section>
    <article>
      {!(data // 👈 null and undefined check
        && Object.keys(data).length === 0
        && Object.getPrototypeOf(data) === Object.prototype) ?

        <article>
          <h3>Image of pokemon:</h3>
          <img src={data.sprites.other.dream_world.front_default} alt="View fronted of pokemon" />

          <h4><i>{data.name}</i></h4>


          <h3>Dimensions</h3>

          <p>{data.height}"</p>
          <p>{data.weight}lbs</p>

          <h3>Type of this pokemon:</h3>

          <p>{data.types[0].type.name}</p>
          {data.types.length > 1 ?
            <p>{data.types[1].type.name}</p> :
            <></>}
          {data.types.length > 2 ?
            <p>{data.types[2].type.name}</p> :
            <></>}
          {data.types.length > 3 ?
            <p>{data.types[3].type.name}</p> :
            <></>}
          <h3>Base Stats</h3>

          <p>Life : {data.stats[0].base_stat}</p>
          <p>Attack : {data.stats[1].base_stat}</p>
          <p>Defense : {data.stats[2].base_stat}</p>
          <p>Special-attack : {data.stats[3].base_stat}</p>
          <p>Special-defense : {data.stats[4].base_stat}</p>
          <p>Speed : {data.stats[5].base_stat}</p>

          <h3>Moves</h3>
          {data.moves.map((move) => <p key={uuidv4()} >{move.move.name}</p>)} </article> :
        <></>
      }
    </article>

  </section>;

}

export default Details;