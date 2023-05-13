import React from 'react';
const AreaDetalles = (props) => {
  return ( 
      <section id="Detalles" className="bg-[#0000009a] fixed w-[40%] h-[92%] mt-[4%] ml-[56%] rounded-md -z-10">
        <h2>Datos recibidos:</h2>
        <p>{props.datos}</p>
      </section>
  );
}

export default AreaDetalles;