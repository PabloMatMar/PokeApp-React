import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Type from './types.json';
import { Link } from 'react-router-dom';
import { chartContext } from '../../../context/chartContext';
import link from '../../../imgsForImport/link.png'
import Description from './Description/Description';
import Graphic from './Graphic/Graphic';


const Details = () => {

  let { id } = useParams();


  const { limitOfLive, limitOfAttack, limitOfDefense, limitOfSpecialAttack, limitOfSpecialDefense, limitOfSpeed } = useContext(chartContext);
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
            <option defaultValue="Select Style">Select Style</option>
            <option value={"home"}>3D</option>
            <option value={"official-artwork"}>Original</option>
            <option value={"dream_world"}>Anime</option>
          </select>
          <select onChange={(e) => onChangeShiny(e)}>
            <option defaultValue="Select Effect">Select Effect</option>
            <option value={"front_shiny"}>Shiny!</option>
            <option value={"front_default"}>Normal</option>
          </select>
        </div>

        <Description data={data.species} />

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
        }]} />

        <h3>Moves of this pokemon</h3>
        <article className='details-container'>
          <table className="table">
            <thead className='theadEffects'>
              <tr>
                <th>Name</th>
                <th>Level <br /> to learning</th>
                <th>Effects</th>
              </tr>
            </thead>
            <tbody>
              {data.moves.map(move => (
                <tr key={uuidv4()}>
                  <td>{move.move.name}</td>
                  <td>{move.version_group_details[0].level_learned_at === 0 ? Math.trunc(Math.random() * 99) : move.version_group_details[0].level_learned_at}</td>
                  <td><Link to={`/movesDescription/${move.move.url.replace('https://pokeapi.co/api/v2/move/', '')}${id}`}><img src={link} alt="linkLogo" /></Link></td>
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

