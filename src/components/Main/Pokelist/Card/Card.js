import React from "react";

const Card = ({data}) => {
  return <div>
      { data !== undefined ?
    <span>
      <p>Name of pokemon: <br />
      {data.name}</p>
      <p>front view pokemon image: </p>
      <img src={data.sprites.front_default} alt="frontd of pokemon" />
      <p>Back view pokemon image: </p>
      <img src={data.sprites.back_default} alt="back of pokemon" />
    </span> :
    <p>No pokemon search.</p>
  }
  </div>;
}


export default Card;
