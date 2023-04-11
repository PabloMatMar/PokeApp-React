import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Type from './types.json';
import { Link } from 'react-router-dom';


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

  return <section className='details'>

    {!(data // 👈 null and undefined check
      && Object.keys(data).length === 0
      && Object.getPrototypeOf(data) === Object.prototype) ?

      <article className='details-container'>
        <h4><i>{data.name}</i></h4>
        {category !== "" && shiny !== "" /*|| category === "dream_world" && shiny === "front_default"*/ ?
          <img className="imgStylePokemon" src={data.sprites.other[category][shiny]} alt="View fronted of pokemon" /> :
          <></>
        }
        {category === "" || shiny === "" ? <label htmlFor="category">To see imagen choose the drawing style and normal or shiny:</label> : <></>}
        <div>
          <select onChange={(e) => onChange(e)}>
            <option value={""}></option>
            <option value={"home"}>3D</option>
            <option value={"official-artwork"}>Original</option>
            <option value={"dream_world"}>Anime</option>
          </select>
          <select onChange={(e) => onChangeShiny(e)}>
            <option value={""}></option>
            <option value={"front_shiny"}>Shiny!</option>
            <option value={"front_default"}>Normal</option>
          </select>
        </div>

        <h3>Dimensions</h3>

        <p>Height: {data.height}" Weight: {data.weight}lbs</p>

        <h3>Type of this pokemon:</h3>

        <p>{data.types[0].type.name}</p>
        <img src={Type[data.types[0].type.name]} alt={data.types[0].type.name} className="imagenType" />
        {data.types.length > 1 ?
          <div>
            <p>{data.types[1].type.name}</p>
            <img src={Type[data.types[1].type.name]} alt={data.types[1].type.name} className="imagenType2" />

          </div> :
          <></>}
        <h3>Base Stats</h3>

        <p><strong>Life :</strong> {data.stats[0].base_stat} <strong>Attack :</strong>{data.stats[1].base_stat} <strong>Defense :</strong> {data.stats[2].base_stat} <strong>Special_attack :</strong>{data.stats[3].base_stat} <strong>Special_defense :</strong>{data.stats[4].base_stat} <strong>Speed :</strong>{data.stats[5].base_stat}</p>

        <h3>Moves of this pokemon</h3>
        <article className='details-container'>
          {/* <table>
            <tbody>
              {data.moves.map((move, i) => {
                if (i % 4 === 0) return <tr key={uuidv4()}></tr>
                else return <td key={uuidv4()}><Link to={`/movesDescription/:${move.move.url}`}>{move.move.name}</Link></td>
              })};
            </tbody>
          </table> */}
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Level to Learn</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {data.moves.map((move, i) => (
                <tr key={uuidv4()}>
                  <td>{move.move.name}</td>
                  <td>{move.version_group_details[0].level_learned_at === 0 ? Math.trunc(Math.random() * 99) : move.version_group_details[0].level_learned_at}</td>
                  <td><Link to={`/movesDescription/:${move.move.url}`}>Click Me</Link></td>
                </tr>
              ))
              }
            </tbody>
          </table>
        </article>
      </article> :
      <></>
    }

  </section>;

}

export default Details;

