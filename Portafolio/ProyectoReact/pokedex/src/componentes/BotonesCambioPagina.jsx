import React, { useState } from 'react';

const BotonesCambioPagina = (props) => {
	// nuevo	
	// const [nuevosDatos, setNuevosDatos] = useState('');
	// 	const handleChange = (event) => {
	//     setNuevosDatos(event.target.value);
	//     props.onChangeDatos(event.target.value);
	//   };

	// return viejo de botones funcionales en coponente original
	// 	return ( 
	// 		<section id="Botones Laterales" className={estilos.botonesCambio}>
	// 			<button id="botonPrevious" className={estilos.botonesCambioPagina}>
	// 				<p className="rotate-[-90deg]" onClick={()=> (rangoAlto === 101) ? setRangoAlto(1010) : setRangoAlto(rangoAlto - 101)}>PREVIOUS</p>
	// 			</button>
	// 			<button id="botonNext" className={estilos.botonesCambioPagina}>
	// 				<p className="rotate-[90deg]" onClick={()=> (rangoAlto < 1010) ? setRangoAlto(rangoAlto + 101) : setRangoAlto(101)}>NEXT</p>
	// 			</button>
	// 		</section>
	// 	);
	const estilos = {
		botonesCambio: "flex justify-between fixed w-full ",
		botonesCambioPagina: "w-8 h-[92vh] mt-12",
	}
	const [rangoAlto, setRangoAlto] = useState(101)
	const rangoBajo = rangoAlto - 101;
	const handleButtonClick = () => {
		if (rangoAlto === 101) {
			setRangoAlto(1010);
		} else {
			setRangoAlto(rangoAlto - 101);
		}
		setNuevosDatos('new data'); // example of updating nuevosDatos
		props.onChangeDatos('new data'); // example of calling props.onChangeDatos with new data
	};
	return (
		<section id="Botones Laterales" className={estilos.botonesCambio}>
			<button id="botonPrevious" className={estilos.botonesCambioPagina} onClick={handleButtonClick}>
				<p className="rotate-[-90deg]">PREVIOUS</p>
			</button>
			<button id="botonNext" className={estilos.botonesCambioPagina} onClick={handleButtonClick}>
				<p className="rotate-[90deg]">NEXT</p>
			</button>
		</section>
	);
}

export default BotonesCambioPagina;