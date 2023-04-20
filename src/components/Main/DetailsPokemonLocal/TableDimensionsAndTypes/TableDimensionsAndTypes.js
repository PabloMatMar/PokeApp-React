import React from "react";
import Type from './types.json';

const TableTypes = ({ data }) => {


  return <>
    <table className="smallTables">
      <thead>
        <tr>
          <td><h4>Type One</h4></td>
          <td><h4>Type Two</h4></td>
          <td><h4>Height</h4></td>
          <td><h4>Weigth</h4></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h4>{data.typeOne}</h4>
            <img src={Type[data.typeOne]} alt={Type[data.typeOne]} className="imagenType" />
          </td>
          {data.typeTwo !== "Select TypeTwo" ?
            <td>
              <h4>{data.typeTwo}</h4>
              <img src={Type[data.typeTwo]} alt={Type[data.typeTwo]} className="imagenType2" />
            </td> :
            <td>data not entered</td>}
          {data.height !== "" ?
            <td>{data.heigth} "</td> :
            <td>data not entered</td>}
          {data.weight !== "" ?
            <td>{data.weight} lbs</td> :
            <td>data not entered</td>}
        </tr>
      </tbody>
    </table>
  </>;
};

export default TableTypes;