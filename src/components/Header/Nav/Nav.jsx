import React from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper } from "../Styled-Components/styled";
import '../../../styles/styles.scss';
//TUTORIAL PARA CREAR MENU HAMBURGUESA USANDO STYLED
// https://devxdev.net/react/menu-hamburguesa-reactjs/
// https://www.escuelafrontend.com/styled-components-en-react

const Nav = ({ open }) => {
  return (
    // eslint-disable-next-line
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
      {/* <button>
      <Link to="/pokemon/:id"> </Link>
      </button> */}

    </NavbarWrapper>
  );

};

export default Nav;
