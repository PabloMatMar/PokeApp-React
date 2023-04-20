import React from "react";
import { Link } from "react-router-dom";
import link from '../../../../imgsForImport/link.png';
import { v4 as uuidv4 } from 'uuid';


const TableMoves = ({data, id}) => {

  return <>
    <h3>Moves:</h3>
    <article className='details-container'>
      <table className="table">
        <thead className='theadEffects'>
          <tr>
            <th>Name</th>
            <th>way of learning</th>
            <th>Effects</th>
          </tr>
        </thead>
        <tbody>
          {data.moves.map(move => (
            <tr key={uuidv4()}>
              <td>{move.move.name}</td>
              <td>{move.version_group_details[0].level_learned_at === 0 ? 'Learning whit Machine' : `${move.version_group_details[0].level_learned_at} Lv`}</td>
              <td><Link to={`/movesDescription/${move.move.url.replace('https://pokeapi.co/api/v2/move/', '')}${id}`}><img src={link} alt="linkLogo" /></Link></td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </article>
  </>;
};

export default TableMoves;
