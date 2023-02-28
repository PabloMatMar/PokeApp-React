import React, { useEffect, useState } from 'react';
import axios from 'axios'
import PokemonList from './PokemonList/PokemonList';

const Main = () => {
  //OBJECT POKEMON ES UN ARRAY DE OBJETOS
  const [namePokemon, setNamePokemon] = useState(""); // Para guardar el nombre del pokemon
  const [objectPokemon, setObjectPokemon] = useState([]); // Para guardar el objeto
  const [input, setInput] = useState(''); // Para vaciar el input una vez se envia
  const [status, setStatus] = useState(0)
  const [arrayNamePokemons, setArrayNamePokemons] = useState([])
  useEffect(() => {
    const getPokemon = setTimeout(() => {
      async function fetchData() {
        try {
          if(!arrayNamePokemons.includes(namePokemon)) {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
            const dataPokemon = res.data
            const status = res.status
            setStatus(status)
            if (status === undefined) {
              setStatus(res.response.status)
            }
            setInput("")
            if (status === 200) {
              setNamePokemon(dataPokemon.name)
              setArrayNamePokemons([...arrayNamePokemons,dataPokemon.name])
              setObjectPokemon([...objectPokemon, dataPokemon])
              console.log("***ddsa****")
              console.log(arrayNamePokemons)
              console.log("***dsadas****")
              console.log("-----------------------")
              console.log("******")
              console.log(objectPokemon)
              console.log("******")
            }
          }


        } catch (e) {
          alert("This isnt a pokemon")
        }
      }
      if (namePokemon !== "") {
        fetchData();
      }
    }, 2000)
    return () => clearTimeout(getPokemon)
  }, [namePokemon]); // componentDidUpdate

  const takeChangeInput = (e) => {
    setInput(e.target.value);
    e.preventDefault();
    setNamePokemon(e.target.value.toLowerCase())
  };


  return <section>
    <h1>Catch a pokemon:</h1>
    <form>
      <input name="input" type="text" value={input} onChange={takeChangeInput} />
    </form>
    { status === 200 ?
      <PokemonList data={objectPokemon} status={status} /> :
      <></>
    }

  </section>
};

export default Main;

