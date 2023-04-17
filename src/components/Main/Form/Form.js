import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { newPokemonContext } from "../../../context/newPokemonContext";
import { v4 as uuidv4 } from 'uuid';
import { Navigate } from "react-router-dom";
import Types from './types.json';


const Form = () => {

  const { setSavePokemon } = useContext(newPokemonContext);
  const { register, handleSubmit } = useForm();
  const [hasBeenCreated, setHasBeenCreated] = useState(false);

  const onSubmit = data => {
    setHasBeenCreated(false);
    const newPokemon = {
      id: '-' + data.id,
      name: data.name.toLowerCase(),
      image: data.image,
      typeOne: data.typeOne,
      typeTwo: data.typeTwo,
      stats: [{ base_stat: data.life }, { base_stat: data.attack }, { base_stat: data.defense }, { base_stat: data.special_attack }, { base_stat: data.special_defense }, { base_stat: data.speed }],
      moves: [{ move: { name: data.nameMove } }],
      weight: data.weight,
      height: data.height
    };
    
    if (data.typeOne !== data.typeTwo) {
      setSavePokemon(pokemon => pokemon.concat(newPokemon));
      alert('Pokemon added!');
      setHasBeenCreated(true);

    }
    else alert('Pokemon cannot is the same type twice');
  };
  //PENDIENTE DE REFACTORIZACION
  //!!Encontrar solucion a porque react-hook-form da error al intentar mapear los inputs debido al metodo register..

  return hasBeenCreated ? <Navigate to='/' /> : <section>
    <h2>Create a pokemon!</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="formCreate">
      <div>
        <input className="requiredInput" type='number' placeholder='Id' {...register("id", { required: true, message: "error message" })} />
        <input className="requiredInput" placeholder='Name of Pokemon' {...register("name", { required: true, minLength: 3, message: "error message" })} />
        <input className="requiredInput" type='url' placeholder='Url Image' {...register("image", { required: true })} />
        <input type='number' placeholder='Points of Life' {...register("life", { message: "error message" })} />
        <input type='number' placeholder=' Points of attack' {...register("attack", { message: "error message" })} />
        <input type='number' placeholder='Points of defense' {...register("defense", { message: "error message" })} />
      </div>
      <div>
        <input type='number' placeholder='Points of special-attack' {...register("special_attack", { message: "error message" })} />
        <input type='number' placeholder='Points of special-defense' {...register("special_defense", { message: "error message" })} />
        <input type='number' placeholder='Points of speed' {...register("speed", { message: "error message" })} />
        <input type='number' placeholder='Weight' {...register("weight", { message: "error message" })} />
        <input type='number' placeholder='Height' min="10"{...register("height", { message: "error message" })} />
        <input placeholder='Name of Move' {...register("nameMove", { minLength: 3, message: "error message" })} />
      </div>
      <select className="requiredSelect" placeholder="TypeOne" {...register("typeOne", { required: true, message: "error message" })}>
        <option className="requiredSelect" defaultValue="Select TypeOne">Select TypeOne</option>
        {Types.map((type) => <option value={type} key={uuidv4()}>{type}</option>)}
      </select>
      <select placeholder="TypeTwo" {...register("typeTwo")}>
        <option defaultValue="Select TypeOne">Select TypeTwo</option>
        {Types.map((type) => <option value={type} key={uuidv4()}>{type}</option>)}
      </select>

      <input type="submit" />
    </form>


  </section>;
};

export default Form;