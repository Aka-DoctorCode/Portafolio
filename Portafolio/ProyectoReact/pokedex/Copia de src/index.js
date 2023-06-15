import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";

// Vista
import Lista from './componentes/Lista';
import Busqueda from './componentes/Busqueda';
import Botones from './componentes/Botones';


const root = ReactDOM.createRoot(document.getElementById('root'));

function AppWithBotones() {
  const botones = useLocation();

  return (
    <>
      {botones.pathname !== '/' && <Botones />}
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