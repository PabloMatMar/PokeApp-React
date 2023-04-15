import React, { useEffect, useState, useContext } from 'react';
import AllPokemons from "./AllPokemons/AllPokemons";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { newPokemonContext } from '../../../context/newPokemonContext';



const Home = () => {

  const [dataPokemons, setDataPokemons] = useState([])
  //traemos los pokemon creados que estan guardados en context
  const { savePokemon } = useContext(newPokemonContext);
  // console.log("Esto es lo que hay en context", savePokemon);




  useEffect(() => {

    async function fetchData() {
      if (dataPokemons.length <= 1) {
        try {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`);
          const pokemons = res.data.results

          const urls = pokemons.map(pokemon => pokemon.url)

          axios.all(urls.map((url) => axios.get(url))).then(
            (dataOfEachPokemon) => setDataPokemons(dataOfEachPokemon)
          );
        } catch (e) {
          alert("Oh, We have a problem, recharged to solution")
        }
      }

    };
    fetchData()
    // eslint-disable-next-line
  }, []);
  // console.log(dataPokemons)


  return <section className='home-container'>

    {savePokemon.map((pokemon) =>  <AllPokemons created={pokemon} key={uuidv4()}/>)}
    {dataPokemons.map((pokemon, i) => <AllPokemons data={pokemon.data} key={uuidv4()} i={i} />)}
    

  </section >;
};

export default Home;
