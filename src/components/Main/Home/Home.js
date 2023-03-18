import React, { useEffect, useState } from 'react';
import AllPokemons from "./AllPokemons/AllPokemons";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {


  //Paginar mas adelante

  const [dataPokemons, setDataPokemons] = useState([])


  useEffect(() => {

    async function fetchData() {
      if (dataPokemons.length <= 1) {
        try {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`); //Cambiar 151 por 902 para obtenerlos todos

          const pokemons = res.data.results

          const urls = pokemons.map(pokemon => pokemon.url)

          axios.all(urls.map((url) => axios.get(url))).then(
            (dataOfEachPokemon) => setDataPokemons(dataOfEachPokemon),
          );
        } catch (e) {
          alert("Oh, We have a problem, recharged to solution")
        }
      }

    };
    fetchData()
    // eslint-disable-next-line
  },[]);
  console.log(dataPokemons)

  return <section>

    {dataPokemons.map((pokemon, i) => <AllPokemons data={pokemon} key={uuidv4()} i={i}/>)}

  </section>;
};

export default Home;
