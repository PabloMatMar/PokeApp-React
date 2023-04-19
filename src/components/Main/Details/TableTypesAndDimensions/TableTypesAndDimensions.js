import React from "react";
import Type from './types.json';

const TableTypes = ({data}) => {

  return <>
    <table className="smallTables">
      <thead>
        <tr>
          <td><h4>Type One</h4></td>
          {data.types.length > 1 ?
            <td><h4>Type Two</h4></td> :
            <></>}
          <td><h4>Height</h4></td>
          <td><h4>Weight</h4></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h4>{data.types[0].type.name}</h4>
            <img src={Type[data.types[0].type.name]} alt={data.types[0].type.name} className="imagenType" />
          </td>
          {data.types.length > 1 ?
            <td>
              <h4>{data.types[1].type.name}</h4>
              <img src={Type[data.types[1].type.name]} alt={data.types[1].type.name} className="imagenType2" />
            </td> :
            <></>}
          <td>
            {data.height}"
          </td>
          <td>
            {data.weight}"
          </td>
        </tr>
      </tbody>
    </table>
  </>;
};

export default TableTypes;
