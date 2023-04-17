import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import PokeList from '../Search/Pokelist/Pokelist';
import { pokemonContext } from '../../../context/pokemonContext';

const Search = () => {
  //OBJECT POKEMON ES UN ARRAY DE OBJETOS
  const { namePokemon, setNamePokemon, objectPokemon, setObjectPokemon, arrayNamePokemons, setArrayNamePokemons} = useContext(pokemonContext);

  const [empty, setEmpty] = useState('empty');
  const [write, setWrite] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    const getPokemon = setTimeout(() => {

      async function fetchData() {
        if(objectPokemon.length > 0) setEmpty('whitPokemons')
        try {
          if (!arrayNamePokemons.includes(namePokemon)) {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
            const dataPokemon = res.data;
            const status = res.status;
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
    {objectPokemon.length > 0 ?
        <PokeList data={objectPokemon}/>
      :
      <></>
    }
  </section>
};

export default Search;