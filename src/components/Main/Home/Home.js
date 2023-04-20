import React, { useEffect, useState, useContext } from 'react';
import AllPokemons from "./AllPokemons/AllPokemons";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { newPokemonContext } from '../../../context/newPokemonContext';
import { chartContext } from '../../../context/chartContext';



const Home = () => {

  const { setLimitOfLive, setLimitOfAttack, setLimitOfDefense, setLimitOfSpecialAttack, setLimitOfSpecialDefense, setLimitOfSpeed } = useContext(chartContext);
  const [dataPokemons, setDataPokemons] = useState([]);
  const { savePokemon } = useContext(newPokemonContext);

  useEffect(() => {
    async function fetchData() {
      if (dataPokemons.length < 1) {
        try {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=902`);
          const pokemons = res.data.results;

          const urls = pokemons.map(pokemon => pokemon.url);

          axios.all(urls.map((url) => axios.get(url)))
            .then(dataOfEachPokemon => setDataPokemons(dataOfEachPokemon));
        } catch (e) {
          alert("Oh, We have a problem, recharged to solution");
        };
      };

    };
    fetchData()
    // eslint-disable-next-line
  }, []);


  useEffect(() => {
    if (dataPokemons.length > 0) {
      let arrOfArrs = []
      for (let i = 0; i < 6; i++) {
        function getAllStatsOfAllPokemons() {
          arrOfArrs.push(dataPokemons
            .map((e) => e.data.stats[i].base_stat)
            .sort(((a, b) => b - a))
          );
        };
        getAllStatsOfAllPokemons()
      }
      setLimitOfLive(arrOfArrs[0][1]); //indice 0 = 260, indice 1 = 160, [0][0] estropea la congruencia del grafico
      setLimitOfAttack(arrOfArrs[1][0]);
      setLimitOfDefense(arrOfArrs[2][0]);
      setLimitOfSpecialAttack(arrOfArrs[3][0]);
      setLimitOfSpecialDefense(arrOfArrs[4][0]);
      setLimitOfSpeed(arrOfArrs[5][0]);
    };

  }, [dataPokemons, setLimitOfLive, setLimitOfAttack, setLimitOfDefense, setLimitOfSpecialAttack, setLimitOfSpecialDefense, setLimitOfSpeed]);


  return <section className='home-container'>

    {savePokemon.map(pokemon => <AllPokemons created={pokemon} key={uuidv4()} />)}
    {dataPokemons.map((pokemon, i) => <AllPokemons data={pokemon.data} key={uuidv4()} i={i} />)}

  </section >;
};

export default Home;
