import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';

// Componentes
// import Botones from './componentes/Botones';
// Vista
import Lista from './componentes/Lista';
import Detalles from './componentes/Detalles';
import Busqueda from './componentes/Busqueda';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    {/* <Botones/> */}
    <Routes>
    <Route path='/' element={<App/>} />
      <Route path='/Lista' element={<Lista/>} />
      <Route path='/Detalle' element={<Detalles/>}/>
      <Route path='/Busqueda' element={<Busqueda/>}/>
    </Routes>
    {/* <Botones/> */}
  </BrowserRouter>
);