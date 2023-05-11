const CambioPagina = () => {
  
	const estilos = {
    botonesCambio: "flex justify-between fixed w-full ",
    botonesCambioPagina: "w-8 h-[92vh] mt-12",
  }

	return ( 
		<section className={estilos.botonesCambio}>
		<button id="botonPrevious" className={estilos.botonesCambioPagina}>
			<p className="rotate-[-90deg]" 
				// onClick={()=> (rangoAlto === 101) ? setRangoAlto(1010) : setRangoAlto(rangoAlto - 101)}
				>
					PREVIOUS
				</p>
		</button>
		<button id="botonNext" className={estilos.botonesCambioPagina}>
			<p className="rotate-[90deg]" 
				// onClick={()=> (rangoAlto < 1010) ? setRangoAlto(rangoAlto + 101) : setRangoAlto(101)}
				>
					NEXT
				</p>
		</button>
		</section>
	);
}

export default CambioPagina;