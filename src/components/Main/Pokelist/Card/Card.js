import React from "react";

const Card = ({ data }) => {
  return <div className="divCard">
    {data !== undefined ?
      <>
        <p>Name of pokemon: <br />
          {data.name}
        </p>
        <p>Nº {data.id} in the pokedex</p>
        <img src={data.sprites.front_default} alt="frontd of pokemon" />
        <br />
        <button>
          <a href={`http://localhost:3000/pokemon/${data.id}`}>Details of this pokemon</a>

        </button>
      </> :
      <p>No pokemon search.</p>
    }
  </div>;
}


export default Card;
