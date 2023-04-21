import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';

// Componentes
import Botones from './componentes/Botones';
// Vista
import Lista from './componentes/Lista';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>} />
      <Route path='/Lista' element={<Lista/>} />
    </Routes>
    <Botones/>
  </BrowserRouter>
);