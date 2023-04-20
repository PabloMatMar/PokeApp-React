import React, { useEffect, useState } from 'react';
import axios from "axios";

const SpecialEffect = (props) => {

  const [specialEffect, setSpecialEffect] = useState();

  useEffect(() => {

    async function fetchData() {
      try {
        //Pese a que props.data.url ya es un string se requiere transformar la variable en string
        // pues si no el test dara el fallo Cannot read properties of undefined (reading 'protocol')
        // at isURLSameOrigin pese a que la peticion se reciba y el componente funcione bien aparentemente.
        await axios.get(`${props.data.url}`)
          .then(res => setSpecialEffect(res.data));

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
