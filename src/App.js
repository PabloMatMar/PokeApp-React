import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { pokemonContext } from './context/pokemonContext';
import { newPokemonContext } from './context/newPokemonContext';
import { chartContext } from './context/chartContext';



function App() {

  //HOOKS USADOS EN CONTEXT PARA EVITAR QUE EL RENDERIZADO LOS VUELVA A INICIALIZAR
  const [namePokemon, setNamePokemon] = useState(""); // Para guardar el nombre del pokemon
  const [objectPokemon] = useState([]); // Para guardar todos los objetos con cada pokemon
  const [arrayNamePokemons, setArrayNamePokemons] = useState([]); //para evitar guardar pokemons repetidos


  //HOOKS USADOS PARA TRANSMITIR DATOS ENTRE COMPONENTES QUE NO SON PADRE-HIJO ***
  //***(Posiblemente se actualizaran algunos de ellos a comunicacion sibling-sibling)
  const [savePokemon, setSavePokemon] = useState([]); //Para guardar los pokemons que se crean.
  //Todos estos hooks son para definir los limites de la grafica.
  const [limitOfLive, setLimitOfLive] = useState();
  const [limitOfAttack, setLimitOfAttack] = useState();
  const [limitOfDefense, setLimitOfDefense] = useState();
  const [limitOfSpecialAttack, setLimitOfSpecialAttack] = useState();
  const [limitOfSpecialDefense, setLimitOfSpecialDefense] = useState();
  const [limitOfSpeed, setLimitOfSpeed] = useState();

  const pokemonsDatas = {
    namePokemon,
    setNamePokemon,
    objectPokemon,
    arrayNamePokemons,
    setArrayNamePokemons
  }

  const newPokemonsList = {
    savePokemon,
    setSavePokemon
  }

  const chartsData = {
    limitOfLive,
    setLimitOfLive,
    limitOfAttack,
    setLimitOfAttack,
    limitOfDefense,
    setLimitOfDefense,
    limitOfSpecialAttack,
    setLimitOfSpecialAttack,
    limitOfSpecialDefense,
    setLimitOfSpecialDefense,
    limitOfSpeed,
    setLimitOfSpeed
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <pokemonContext.Provider value={pokemonsDatas}>
          <newPokemonContext.Provider value={newPokemonsList}>
            <chartContext.Provider value={chartsData}>
              <Main />
            </chartContext.Provider>
          </newPokemonContext.Provider>
        </pokemonContext.Provider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
