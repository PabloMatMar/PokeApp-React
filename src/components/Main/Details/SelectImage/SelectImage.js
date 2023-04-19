import React, { useState } from "react";

const SelectImage = ({ data }) => {

  const [category, setCategory] = useState("")
  const [shiny, setShiny] = useState("")

  const onChange = (e) => {
    const categoryPrint = e.target.value
    setCategory(categoryPrint)
  }

  const onChangeShiny = (e) => {
    const categoryShiny = e.target.value
    if (category === "dream_world" && categoryShiny === "front_shiny") {
      setShiny("front_default")
      alert("Sorry, anime cant be shiny, enjoy look the normal version")
    }
    else setShiny(categoryShiny)
  }
  return <>
    <h4>
      {data.name
        .charAt(0)
        .toUpperCase()
        .concat(data.name.slice(1))}
    </h4>
    {category !== "" && shiny !== "" /*|| category === "dream_world" && shiny === "front_default"*/ ?
      <img className="imgStylePokemon" src={data.sprites.other[category][shiny]} alt="View fronted of pokemon" /> :
      <></>
    }
    {category === "" || shiny === "" ? <label htmlFor="category">TO SEE IMAGEN CHOOSE THE DRAWING STYLE AND EFFECT:</label> : <></>}
    <div>
      <select onChange={(e) => onChange(e)}>
        <option defaultValue="Select Style">Select Style</option>
        <option value={"home"}>3D</option>
        <option value={"official-artwork"}>Original</option>
        <option value={"dream_world"}>Anime</option>
      </select>
      <select onChange={(e) => onChangeShiny(e)}>
        <option defaultValue="Select Effect">Select Effect</option>
        <option value={"front_shiny"}>Shiny!</option>
        <option value={"front_default"}>Normal</option>
      </select>
    </div>
  </>;
};

export default SelectImage;
