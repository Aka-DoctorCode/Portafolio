import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";

// Vista
import Lista from './componentes/Lista';
import Busqueda from './componentes/Busqueda';
import Botones from './componentes/Botones';
import BotonesCambioPagina from './componentes/BotonesCambioPagina';
import AreaDetalles from './componentes/AreaDetalles';

const root = ReactDOM.createRoot(document.getElementById('root'));

function AppWithBotones() {
  const botones = useLocation();
  const cambioPaginaLista = useLocation();
  const Detalles = useLocation();

  return (
    <>
      {botones.pathname !== '/' && <Botones />}
      {cambioPaginaLista.pathname !== '/' && cambioPaginaLista.pathname !== '/Busqueda' && <BotonesCambioPagina />}
      {Detalles.pathname !== '/' && Detalles.pathname !== '/Busqueda' && <AreaDetalles />}
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/Lista' element={<Lista/>} />
        <Route path='/Busqueda' element={<Busqueda/>}/>
      </Routes>
    </>
  );
}

root.render(
  <BrowserRouter>
    <AppWithBotones />
  </BrowserRouter>,
);                          