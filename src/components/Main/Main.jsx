import React from 'react';
import Search from './Search/Search';
import Form from './Form/Form';
import Details from './Details/Details';
import Card from './Pokelist/Card';
import NotFound from './NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';


const Main = () => {
  return <main className='main'>
    <section>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/pokemon/:id" element={<Details />} />
        <Route path="/new" element={<Form />} />
        <Route path="/search" element={<Search />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </section>

  </main >
}


export default Main;