import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import PokemonList from '../Pokelist/Pokelist';
import { pokemonContext } from '../../../context/pokemonContext';
import { pokeListContext } from '../../../context/pokeListContext';

const Search = () => {
  //OBJECT POKEMON ES UN ARRAY DE OBJETOS
  const { namePokemon, setNamePokemon, objectPokemon, setObjectPokemon, arrayNamePokemons, setArrayNamePokemons, status, setStatus } = useContext(pokemonContext)
  const [input, setInput] = useState(''); // Para vaciar el input una vez se envia

  useEffect(() => {

    const getPokemon = setTimeout(() => {
      
      async function fetchData() {
        try {
          if (!arrayNamePokemons.includes(namePokemon)) {
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
              setArrayNamePokemons([...arrayNamePokemons, dataPokemon.name])
              setObjectPokemon([...objectPokemon, dataPokemon])
            }
          } else {
            setInput("")
            alert("you catch this pokemon before")
          }


        } catch (e) {
          alert("This isnt a pokemon")
          setInput("")
        }
      }
      if (namePokemon !== "") {
        fetchData();
      }
    }, 2000)
    return () => clearTimeout(getPokemon)
    // eslint-disable-next-line
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
    {status === 200 ?
      <pokeListContext.Provider value={objectPokemon}>
        <PokemonList />
      </pokeListContext.Provider>
       :
      <></>
    }
  </section>
};

export default Search;