import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';
import Alo from './Fondos/1.png'

function App() {
  // Cambio de velocidad del Alo
  const [AloF,setAloF] = useState("Alo");
  // funcione modificadoras de estilo
  const [Pokedex,setPokedex] = useState("CLICK TO ACTIVATE POKEDEX")
  const [Puntos,setPuntos] = useState("")
  // funcion de animacion de carga
  const [Carga,setCarga] = useState("Carga")
  // funcion para cambiar de componenete
  const navigate = useNavigate();
  //  Cambia estilos de Alo a Alo2
  function cambiarVelocidad() {
    setAloF("Alo2")
    setPokedex("LOADING POKEDEX")
    setPuntos(". . .")
    setCarga("setCarga")
    // Funcion para retardar el tiempo de carga
    setTimeout(
      ()=>{
        navigate("/Lista");
      },10000 
    )
  };

  return (
    <div className='Main'>
      <img className={AloF} src={Alo} alt='Alo'/>
      <button className="Centro" onClick={cambiarVelocidad}>{Pokedex}
      <p className={Carga}>{Puntos}</p>
      </button>
    </div>
  );
}

export default App;