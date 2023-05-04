import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import './Styles/index.css';

// Vista
import Lista from './componentes/Lista';
import Busqueda from './componentes/Busqueda';
import Botones from './componentes/Botones';

const root = ReactDOM.createRoot(document.getElementById('root'));

function AppWithBotones() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/' && <Botones />}
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