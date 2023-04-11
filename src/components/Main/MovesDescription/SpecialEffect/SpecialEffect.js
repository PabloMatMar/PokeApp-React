import React, { useEffect, useContext } from 'react';
import axios from "axios";
import { pokemonContext } from '../../../../context/pokemonContext';

const SpecialEffect = (props) => {


  const { specialEffect, setSpecialEffect } = useContext(pokemonContext);

  useEffect(() => {
    if (props.data.url === 'https://pokeapi.co/api/v2/contest-effect/32/') console.log("SIIIIII")

    async function fetchData() {
      try {
        await axios.get(`${props.data.url}`)
          .then(res => setSpecialEffect(res.data));
        console.log(specialEffect)

      } catch (e) {
        console.log(e)
      }

    }
    fetchData();
    // eslint-disable-next-line
  }, []);


  return <>
    {specialEffect !== undefined ? <>{specialEffect.effect_entries[0].effect}. <br />
      {specialEffect.flavor_text_entries[0].flavor_text}</> : <></>}

  </>;
};

export default SpecialEffect;


