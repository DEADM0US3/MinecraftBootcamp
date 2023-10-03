import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importa Routes y Route
import Home from './pages/Home/Home.js'
import Divisas from './pages/Divisas/Divisas.js';
import Noticias from './pages/Noticias/Noticias.js';
import Criptomonedas from './pages/Criptomonedas/Criptomonedas.js';
import Curso from './pages/Curso/Curso.js'
import Login from './pages/Login/Login.js';

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/noticias" element={<Noticias/>}/>
        <Route path="/divisas" element={<Divisas/>}/>
        <Route path="/criptomonedas" element={<Criptomonedas/>}/>
        <Route path="/curso" element={<Curso/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default AppRouter;