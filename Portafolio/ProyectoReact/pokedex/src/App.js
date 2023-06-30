import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Style/App.css';
import Alo from './Images/7.png'

function App() {
  // Cambio de velocidad del Alo
  const [AloSpeed,setAloSpeed] = useState("Alo");
  // Cambio de estilo boton central
  const [Centro, setCentro] = useState("Centro")
  // Cambio de texto Principal boton central
  const [Pokedex,setPokedex] = useState("CLICK TO ACTIVATE POKEDEX")
  // Cambio de texto secundario boton central
  const [punto, setPunto] = useState();
  // funcion de animacion de carga
  const [Carga,setCarga] = useState("Cargar")
  // hook para cambiar de componenete
  const navigate = useNavigate();



  // función activadora de cambios
  function activate() {
    // setTimeout para activar el Alo
    setTimeout(()=>{setAloSpeed("Alo2");},200)
    // cambios durante la animacion
    setCentro("Centro2")
    setPokedex("LOADING")
    setPunto(".")
    setCarga("Cargar2")
    // setTimeout para cambios finales
    setTimeout(()=>{
      setPokedex("DATA LOADED")
      setPunto("")
      setCarga("Cargar3")
    ;},9200)
    // setTimeout para retardar el tiempo de carga
    setTimeout(()=>{navigate("/Lista");},10000)
    };
  
  return (
    <div className='Main'>
      <img className={AloSpeed} src={Alo} alt='Alo'/>
      <button className={Centro} onClick={activate}>
        <span id='principal' className={Carga}>{Pokedex}</span>
        {/* <p id='secundario' className={Carga}>{Puntos}</p> */}
        <div id='secundario'>
          <span id='punto1'>{punto}</span>
          <span id='punto2'>{punto}</span>
          <span id='punto3'>{punto}</span>
          <span id='punto4'>{punto}</span>
          <span id='punto5'>{punto}</span>
        </div>
      </button>
    </div>
  );
}

export default App;