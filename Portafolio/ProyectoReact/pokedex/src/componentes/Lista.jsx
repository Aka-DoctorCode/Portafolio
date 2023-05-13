import axios from "axios";
import { useEffect, useState } from "react";
import "../Style/TypeColor.css"
import AreaDetalles from "./AreaDetalles"

const ListaPokeDex = () => {
	const [pokemon, setPokemon] = useState([]);
	const [nombres, setNombres] = useState([]);
	const [poketipo, setPoketipo] = useState("");
	const [pokeid, setPokeid] = useState("");
	const [pokename, setPokename] = useState("");
	const [pokeEspecie, setPokeEspecie] = useState("");

	// Copiado en BotonesCambioPagina
	const [rangoAlto, setRangoAlto] = useState(101)
	const rangoBajo = rangoAlto - 101;

	async function obtenerDatos() {
		try {
			const res = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/?offset=${rangoBajo}&limit=${rangoAlto}`
			);
			setPokemon(res.data.results);
		} catch (err) {
			console.log(`Ocurrio un error: ${err}`);
		}
	};
	useEffect(() => {
		async function obtenerNombres() {
			const results = await Promise.all(
				pokemon.map(async (pokemon) => {
					try {
						const res = await axios.get(
							`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
						);
						return res.data;
					} catch (err) {
						console.log(`Ocurrio un error: ${err}`);
					}
				})
			);
			setNombres(results);
		}
		obtenerDatos();
		obtenerNombres();
	}, [obtenerDatos]);

	const estilos = {
		body: "flex items-start justify-center",
		main: "grid grid-cols-9 gap w-[85vw] justify-self-center mt-12 bg-[#b13241e6] z-10 md:w-[92vw]",
		section: "col-span-5",
		nombre: "flex h-full text-left items-center mx-4 w-[15%]",
		tipos: "flex flex-col my-2 w-8% md:w-[15%]",
		botonesCambio: "flex justify-between fixed w-full ",
		botonesCambioPagina: "w-8 h-screen mt-12",
		detalles: "flex h-[300px]"
	}

	return (
		<section id="Lista" className={estilos.body}>

			{/* Delimitar el componente lista */}
			<main className={estilos.main}>
				<section className={estilos.section}>
					{/* función de mapeo del grid */}
					{nombres.slice(0, 101).map((element) => (
						<div id={`pokemon-${element.id}`} key={element.id} className='w-full'>
							{/* boton detalles */}
							<button className={`Boton-${element.id}`} id={`${element.types[0].type.name}`}
								// función onClick para mostrar detalles
								onClick={
									() => {
										setPokename(element.name);
										setPokeid(element.id);
										setPoketipo(element.types[0].type.name);
										setPokeEspecie(element.species.name);
									}
								}>
								{/* texto de número y nombre */}
								<p className={estilos.nombre}>{element.id.toString().padStart(4, '0')}.<br></br> {element.name}</p>
								{/* sprite */}
								<img className="Sprite" src={element.sprites.front_default} alt={`Sprite ${element.name}`} />
								{/* div de tipos */}
								<div className={estilos.tipos}>
									{/* función de mapeo de tipos */}
									{element.types.map((type, index) => (
										<p className={`${type.type.name}`} key={index}>
											{`${type.type.name}`}
										</p>
									))}
								</div>
							</button>
						</div>
					))
					}
				</section>
				<section id="detalles" className="col-span-4 bg-[#0000009a] w-[40vw] fixed left-[55.5vw]">
					<AreaDetalles
						clases={estilos.detalles}
						idcss={poketipo}
						id={pokeid}
						name={pokename}
						species={pokeEspecie}
						types={poketipo}
					/>
				</section>
			</main>
			<section id="BotonesCambioPagina" className={estilos.botonesCambio}>
				<button id="botonPrevious" className={estilos.botonesCambioPagina}>
					<p className="rotate-[-90deg]" onClick={() => (rangoAlto === 101) ? setRangoAlto(1010) : setRangoAlto(rangoAlto - 101)}>PREVIOUS</p>
				</button>
				<button id="botonNext" className={estilos.botonesCambioPagina}>
					<p className="rotate-[90deg]" onClick={() => (rangoAlto < 1010) ? setRangoAlto(rangoAlto + 101) : setRangoAlto(101)}>NEXT</p>
				</button>
			</section>
		</section>
	);
};

export default ListaPokeDex;