import React, { useState, useEffect } from "react";
import Nav from './Nav/Nav'
import MenuButton from "./Styled-Components/MenuButton";
import useScreenSize from '../../hook/useScreenSize';
import Songs from './songs.json';
import { v4 as uuidv4 } from 'uuid';



const Header = () => {

  const { width } = useScreenSize();
  const [mobile, setMobile] = useState(false);
  const [track, setTrack] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (width < 680) setMobile(true);
    else setMobile(false);
    if (mobile) setTrack("");

  }, [width, mobile])

  const onChange = (e) => {
    const trackSelected = e.target.value
    setTrack(trackSelected)
  }

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header>
      <img src='../assets/icon.webp' className="iconNav" alt="icon" />
      <Nav open={open} />
      <div className="div-Header">
        <label hidden={mobile} htmlFor={track}>🎵Music🎵</label>
        <select value={track} hidden={mobile} onChange={(e) => onChange(e)}>
          {Songs.map((song) => <option value={song} key={uuidv4()}> {song} </option>)}
        </select>
      </div>
      <audio src={`../assets/audio/${track}.mp3`} preload="none" controls className="audio" hidden={true} autoPlay={true}></audio>
      <MenuButton open={open} handleClick={handleClick} />
    </header>);

};

export default Header;
