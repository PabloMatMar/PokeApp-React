import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { pokemonContext } from './context/pokemonContext';



function App() {

  const [namePokemon, setNamePokemon] = useState(""); // Para guardar el nombre del pokemon
  const [objectPokemon, setObjectPokemon] = useState([]); // Para guardar todos los objetos con cada pokemon
  const [arrayNamePokemons, setArrayNamePokemons] = useState([]) //para filtrar
  const [status, setStatus] = useState(0);  //Para llamar a los componentes que renderizan en caso de que la respuesta de la api sea correcta

  const pokemonsDatas = {
    namePokemon,
    setNamePokemon,
    objectPokemon,
    setObjectPokemon,
    arrayNamePokemons,
    setArrayNamePokemons,
    status,
    setStatus

  }
  return (
    <div className="App">
      <pokemonContext.Provider value = {pokemonsDatas}>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      </pokemonContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
