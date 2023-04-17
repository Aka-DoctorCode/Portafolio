import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import './App.css';
import Alo from './Fondos/1.png'

function App() {
  // Cambio de velocidad del Alo
  const [AloF,setAloF] = useState("Alo");
  // const navigate = useNavigate();
  //  Cambia estilos de Alo a Alo2
  function cambiarVelocidad() {
    setAloF("Alo2")
    // Funcion para retardar el tiempo de carga
    // setTimeout(
    //   ()=>{
    //     // navigate("/Lista");
    //   },1000 
    // )
  };

  return (
    <div className='Main'>
      <img className={AloF} src={Alo} alt='Alo'/>
      <button className="Centro" onClick={cambiarVelocidad}></button>
    </div>
  );
}

export default App;



  
      
