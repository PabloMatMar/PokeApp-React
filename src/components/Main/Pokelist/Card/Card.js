import React from "react";
import { Link } from "react-router-dom";


const Card = ({ data, length, i }) => {
  return <div className="divCard">
    {data !== undefined ?
      <>
        {length === i + 1 ? <audio src="../assets/sauvagePokemon.mp3" autoPlay> </audio> : <></>}
        <p>Name of pokemon: <br />
          {data.name}
        </p>
        <p>Nº {data.id} in the pokedex</p>
        <img src={data.sprites.front_default} alt="frontd of pokemon" />
        <br />
        <button>
          <Link to={`/pokemon/${data.id}`}>Details of this pokemon</Link>
        </button>
      </> :
      <p>No pokemon search.</p>
    }
  </div>;
}


export default Card;
