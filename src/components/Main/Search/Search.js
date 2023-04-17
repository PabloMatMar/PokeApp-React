import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import PokeList from '../Pokelist/Pokelist';
import { pokemonContext } from '../../../context/pokemonContext';
import { pokeListContext } from '../../../context/pokeListContext';

const Search = () => {
  //OBJECT POKEMON ES UN ARRAY DE OBJETOS
  const { namePokemon, setNamePokemon, objectPokemon, setObjectPokemon, arrayNamePokemons, setArrayNamePokemons, status, setStatus, empty, setEmpty, write, setWrite } = useContext(pokemonContext)
  const [input, setInput] = useState('');

  useEffect(() => {
    const getPokemon = setTimeout(() => {

      async function fetchData() {
        try {
          if (!arrayNamePokemons.includes(namePokemon)) {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
            const dataPokemon = res.data;
            const status = res.status;
            setStatus(status);
            if (status === undefined) setStatus(res.response.status);
            setInput("");
            if (status === 200) {
              setNamePokemon(dataPokemon.name);
              setArrayNamePokemons([...arrayNamePokemons, dataPokemon.name]);
              setObjectPokemon([...objectPokemon, dataPokemon]);
              setWrite(false);
            }


          } else if (write) {
            setInput("");
            alert("you catch this pokemon before");
            setWrite(false);
          }


        } catch (e) {
          alert("This isnt a pokemon");
          setInput("");
        }
      }
      if (namePokemon !== "") fetchData();
    }, 2000);
    return () => clearTimeout(getPokemon);
    // eslint-disable-next-line
  }, [namePokemon]);

  const takeChangeInput = (e) => {
    setWrite(true);
    setInput(e.target.value);
    e.preventDefault();
    setNamePokemon(e.target.value.toLowerCase());
    const valueIsEnter = setTimeout(() => {
      setEmpty('whitPokemons')
    }, 2000);
    return () => clearTimeout(valueIsEnter);
  };


  return <section className='searchSection'>
    <h1>Catch a pokemon:</h1>
    <article className={empty}>
      <form className='formSearch'>
        <input name="input" type="text" value={input} onChange={takeChangeInput} />
      </form>
    </article>
    {status === 200 ?
      <pokeListContext.Provider value={objectPokemon}>
        <PokeList />
      </pokeListContext.Provider>
      :
      <></>
    }
  </section>
};

export default Search;