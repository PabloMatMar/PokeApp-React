import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { pokemonContext } from './context/pokemonContext';
import { newPokemonContext } from './context/newPokemonContext';



function App() {

  const [namePokemon, setNamePokemon] = useState(""); // Para guardar el nombre del pokemon
  const [objectPokemon, setObjectPokemon] = useState([]); // Para guardar todos los objetos con cada pokemon
  const [arrayNamePokemons, setArrayNamePokemons] = useState([]) //para filtrar
  const [status, setStatus] = useState(0);  //Para llamar a los componentes que renderizan en caso de que la respuesta de la api sea correcta
  const [savePokemon, setSavePokemon] = useState([]); //Para guardar los pokemons que se crean en un array que luego se pasará por context a home para mostrarse en un listado distinto al de pokemons originales.
  const [empty, setEmpty] = useState('empty'); //Para rellenar search cuando esta vacio se pone aqui para evitar que al renderizar la vista se vuelva a setear
  const [write, setWrite] = useState(false); //Para evitar que al volver a search te salte el alert debido al nombre del ultimo pokemon en el state.
  const [data, setData] = useState(); //Para setear la respuesta a la api de los efectos de un moviento seleccionado.
  const [specialEffect, setSpecialEffect] = useState(); //Para setear la respuesta de la api para con los efectos especiales de un moviento.
  const [description, setDescription] = useState();


  const pokemonsDatas = {
    namePokemon,
    setNamePokemon,
    objectPokemon,
    setObjectPokemon,
    arrayNamePokemons,
    setArrayNamePokemons,
    status,
    setStatus,
    empty,
    setEmpty,
    write,
    setWrite,
    data,
    setData,
    specialEffect,
    setSpecialEffect,
    description,
    setDescription

  }

  const newPokemonsList = {
    savePokemon,
    setSavePokemon
  }

  return (
    <>

      <BrowserRouter>
        <Header />
        <pokemonContext.Provider value={pokemonsDatas}>
          <newPokemonContext.Provider value={newPokemonsList}>
            <Main />
          </newPokemonContext.Provider>
        </pokemonContext.Provider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
