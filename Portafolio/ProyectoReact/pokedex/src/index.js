import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";

// Vista
import Lista from './Views/Lista';
import Busqueda from './Views/Busqueda';
import Botones from './Components/Botones';
import Generaciones from './Views/Generaciones';


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
        <Route path='/Generaciones' element={<Generaciones/>}/>
      </Routes>
    </>
  );
}

root.render(
  <BrowserRouter>
    <AppWithBotones />
  </BrowserRouter>,
);