import React from "react";
import {Link} from "react-router-dom"

const Nav = () => {
  return <nav className="nav">
    <Link to="/."> Home </Link>
    <Link to="/new"> add a new Pokemon </Link>
    <Link to="/pokemon/:id"> Look details of a pokemon </Link>
    <Link to="/pokemon/local/:id"> Look details of a created pokemon </Link>
    <Link to="/search"> Search a pokemon </Link>
  </nav>
};

export default Nav;
