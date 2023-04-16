import React, { useContext, useEffect } from "react";
import axios from "axios";
import { pokemonContext } from "../../../../context/pokemonContext";


const Description = (props) => {

  const { description, setDescription } = useContext(pokemonContext);

  useEffect(() => {

    async function fetchData() {
      try {
        //Pese a que props.data.url ya es un string se requiere recoger la variable como template string
        //pues si no el test dara el fallo "Cannot read properties of undefined (reading 'protocol')
        //at isURLSameOrigin" pese a que la peticion se reciba y el componente funcione bien aparentemente.
        await axios.get(`${props.data.url}`)
          .then(res => setDescription(res.data));
      } catch (e) {
        console.log(e);
      };
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  const filt = () => {

    let pokemonName = props.data.name
    pokemonName = pokemonName
      .charAt(0)
      .toUpperCase()
      .concat(pokemonName.slice(1));

    return description.flavor_text_entries.filter(e => e.language.name === "en")
      .map(e => e.flavor_text
        .replaceAll(/\n/g, ' ')
        // eslint-disable-next-line
        .replaceAll(//g, '')
        .replaceAll(/[[:print:]]he/gi, ` ${pokemonName}`)
        .replaceAll(/she/gi, `${pokemonName}`)
        .replaceAll(/this Pokémon/gi, `${pokemonName}`)
        .replaceAll(/they/gi, `${pokemonName}`)
        .replaceAll(`${pokemonName.toUpperCase()}`, `${pokemonName}`)
        .replaceAll(/POKéMON/g, 'Pokémon')
      )
      .filter((e, i, arr) => arr.indexOf(e) === i)
      .join(' ');
  };

  return <>
    <h2>
      description
    </h2>
    {description !== undefined ? <>
      <p>{filt()}</p>
    </> : <>
    </>
    }
  </>
};

export default Description;
