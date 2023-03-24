import React from "react";

const Card = ({ data }) => {
  return <div>
    {data !== undefined ?
      <>
        <p>Name of pokemon: <br />
          {data.name}
        </p>
        <p>Nº {data.id} in the pokedex</p>
        <img src={data.sprites.front_default} alt="frontd of pokemon" />
        {/* <p>Back view pokemon image: </p>
      <img src={data.sprites.back_default} alt="back of pokemon" /> */}
        <br />
        <a href={`http://localhost:3000/pokemon/${data.id}`}>Details of this pokemon</a>
      </> :
      <p>No pokemon search.</p>
    }
  </div>;
}


export default Card;
