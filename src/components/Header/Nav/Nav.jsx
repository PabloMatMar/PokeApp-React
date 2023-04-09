import React from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper } from "../Styled-Components/styled";

const Nav = ({ open }) => {
  return (
    <NavbarWrapper open={open} className="nav">
      <button>
        <Link to="/new"> Create Pokemon </Link>
      </button>
      <button>
        <Link to="/."> Home </Link>
      </button>
      <button>
        <Link to="/search"> Search Pokemon </Link>
      </button>

    </NavbarWrapper>
  );

};

export default Nav;
