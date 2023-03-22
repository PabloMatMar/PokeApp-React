import React, { useState } from "react";
import Nav from './Nav/Nav'
import { HeaderWrapper } from "./HeaderWrapper";
import MenuButton from "./MenuButton";
import '../../styles/styles.scss'



const Header = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return(
  <HeaderWrapper className="header">
    <img src='assets/icon.webp' className="iconNav" alt="icon" />
    <Nav open={open} />
    <MenuButton open={open} handleClick={handleClick} />
  </HeaderWrapper>);


};

export default Header;
