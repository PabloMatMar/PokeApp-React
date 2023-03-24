import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const Details = () => {

  let { id } = useParams();

  const [data, setData] = useState({})
  const [category, setCategory] = useState("")
  const [shiny, setShiny] = useState("")


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

  const onChange = (e) => {
    const categoryPrint = e.target.value
    // console.log(category)
    setCategory(categoryPrint)
  }

  const onChangeShiny = (e) => {
    const categoryShiny = e.target.value
    if (category === "dream_world" && categoryShiny === "front_shiny") {
      setShiny("front_default")
      alert("Sorry, anime cant be shiny, enjoy look the normal version")
    } else {
      setShiny(categoryShiny)
    }
  }

  return <section>
    <article>
      {!(data // 👈 null and undefined check
        && Object.keys(data).length === 0
        && Object.getPrototypeOf(data) === Object.prototype) ?

        <article>
          <h3>Image of pokemon:</h3>
          <label htmlFor="category">Choose the drawing style to see the pokemon:</label>
          <select onChange={(e) => onChange(e)}>
            <option value={""}></option>
            <option value={"dream_world"}>Anime</option>
            <option value={"home"}>3D</option>
            <option value={"official-artwork"}>Original</option>
          </select>

          <label htmlFor="category"> Choose normal or shiny view of the pokemon</label>
          <select onChange={(e) => onChangeShiny(e)}>
            <option value={""}></option>
            <option value={"front_shiny"}>Shiny!</option>
            <option value={"front_default"}>Normal</option>
          </select>

          {category !== "" && shiny !== "" /*|| category === "dream_world" && shiny === "front_default"*/ ?
            <img src={data.sprites.other[category][shiny]} alt="View fronted of pokemon" /> :
            <></>
          }

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

          <h3>Moves of this pokemon</h3>
          <article>
          {data.moves.map((move) => <p key={uuidv4()} >{move.move.name}</p>)}
          </article>
        </article> :
        <></>
      }
    </article>

  </section>;

}

export default Details;