import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper } from "../Styled-Components/styled";
import useScreenSize from '../../../hook/useScreenSize';
import Songs from '../songs.json';
import { v4 as uuidv4 } from 'uuid';


const Nav = ({ open }) => {
  const { width } = useScreenSize();
  const [mobile, setMobile] = useState(false);
  const [track, setTrack] = useState("");

  useEffect(() => {
    if (width > 680) setMobile(true);
    else setMobile(false);
    if (mobile) setTrack("");

  }, [width, mobile])

  const onChange = (e) => {
    const trackSelected = e.target.value
    setTrack(trackSelected)
  }
  return (
    <NavbarWrapper open={open} className="nav">
      <button>
        <Link to="/new"> Create a Pokemon </Link>
      </button>
      <button>
        <Link to="/."> Home </Link>
      </button>
      <button>
        <Link to="/search"> Search a Pokemons </Link>
      </button>
      {width < 680 ? <button hidden={mobile}>
        <div className="div-Header">
          <label hidden={mobile} htmlFor={track}>🎵Music🎵</label>
          <select value={track} hidden={mobile} onChange={(e) => onChange(e)}>
            {Songs.map((song) => <option key={uuidv4()} value={song}>{song}</option>)}
          </select>
        </div>
      </button> : <></>}
      <audio src={`../../assets/audio/${track}.mp3`} preload="none" controls className="audio" hidden={true} autoPlay={true}></audio>


    </NavbarWrapper>
  );

};

export default Nav;
