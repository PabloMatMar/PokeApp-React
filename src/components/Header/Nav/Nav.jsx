import React from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper } from "../Styled-Components/styled";

const Nav = ({ open }) => {
  return (
    <NavbarWrapper open={open} className="nav">
      <button>
        <Link to="/."> Home </Link>
      </button>
      <button>
        <Link to="/new"> add a new Pokemon </Link>
      </button>
      <button>
        <Link to="/search"> Search a pokemon </Link>
      </button>

    </NavbarWrapper>
  );

};

export default Nav;
