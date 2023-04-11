import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const MovesDescription = () => {

  let { url } = useParams();

  const [data, setData] = useState({});


  useEffect(() => {

    async function fetchData() {
      if ((data // 👈 null and undefined check
        && Object.keys(data).length === 0
        && Object.getPrototypeOf(data) === Object.prototype)) {
        try {
          await axios.get(`${url}`)
            .then((res) => setData(res.data))
        } catch (e) {
          alert("Error")
        }
      }

    }
    fetchData();
    console.log(data)
    // eslint-disable-next-line
  }, []);



  return <>
  HOLAHOLAHOLAHOLAHOLAHOLAHOLA
  </>;
};

export default MovesDescription;
