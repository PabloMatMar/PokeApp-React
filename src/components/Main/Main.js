import React from 'react';
import Search from './Search/Search';
import Form from './Form/Form';
import Details from './Details/Details';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import DetailsPokemonLocal from './DetailsPokemonLocal/DetailsPokemonLocal';
import MovesDescription from './MovesDescription/MovesDescription';
import '../../styles/styles.scss';
import { Routes, Route } from 'react-router-dom';


const Main = () => {
  return <main>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<Details />} />
        <Route path="/pokemon/local/:id" element={<DetailsPokemonLocal />} />
        <Route path="/new" element={<Form />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movesDescription/:url" element={<MovesDescription />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>

  </main>
}


export default Main;
