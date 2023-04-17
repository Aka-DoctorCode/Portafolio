import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useRef } from 'react';
// import './index.css';

// componentes
import Lista from './componentes/Lista';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>} />
      <Route path='/Lista' element={<Lista/>} />
    </Routes>
  </BrowserRouter>
);