const BotonesCambioPagina = () => {
	const estilos = {
		botonesCambio: "flex justify-between fixed w-full ",
		botonesCambioPagina: "w-8 h-[92vh] mt-12",
	}
	// return viejo de botones funcionales en coponente original
		return ( 
			<section id="Botones Laterales" className={estilos.botonesCambio}>
				<button id="botonPrevious" className={estilos.botonesCambioPagina}>
					<p>PREVIOUS</p>
				</button>
				<button id="botonNext" className={estilos.botonesCambioPagina}>
					<p>NEXT</p>
				</button>
			</section>
		);
	};

export default BotonesCambioPagina;