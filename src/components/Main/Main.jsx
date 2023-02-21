import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Card from './Card'

const Main = () => {

  const [namePokemon, setNamePokemon] = useState(""); // Para guardar el nombre del pokemon
  const [objectPokemon, setObjectPokemon] = useState({}); // Para guardar el objeto

  // equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      try {
        // Petición HTTP
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
        const dataPokemon = res.data

        setNamePokemon(dataPokemon.name)
        setObjectPokemon(dataPokemon)
        console.log("Este es el objectPokemon:", objectPokemon)
        console.log("Este es el namePokemon:", namePokemon)
      } catch (e) {
        console.log(e)
        setNamePokemon("")
        setObjectPokemon({})
      }
    }
    if (namePokemon !== "") {
      fetchData();
    }
  }, [namePokemon]); // componentDidUpdate


  const handleSubmit = e => {
    e.preventDefault();
    setNamePokemon(e.target.input.value)
  };


  return <section>
    <h1>Catch a pokemon:</h1>
    <form onSubmit={handleSubmit}>
      <input name="input" />
      <button type="submit"> Search </button>
    </form>
    <Card data={objectPokemon} />
  </section>
};

export default Main;
