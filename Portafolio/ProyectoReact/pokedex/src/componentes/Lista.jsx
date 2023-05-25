import { useEffect, useState } from "react";
import axios from "axios";
import AreaDetalles from "./AreaDetalles"
import "../Style/TypeColor.css"
import "../Style/Lista.css"

const ListaPokeDex = () => {
	const [pokemon, setPokemon] = useState([]);
	const [nombres, setNombres] = useState([]);

	const [pokeid, setPokeid] = useState("");
	const [pokename, setPokename] = useState("");
	const [pokeEspecie, setPokeEspecie] = useState("");
	const [poketipo, setPoketipo] = useState(""); 

	// Copiado en BotonesCambioPagina
	const [rangoAlto, setRangoAlto] = useState(101)
	console.log(rangoAlto)
	const rangoBajo = rangoAlto - 101;
	console.log(rangoBajo) 

	async function obtenerDatos() {
		const res = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/?offset=${rangoBajo}&limit=${rangoAlto}`
		);
		console.log(res.data.results);
		setPokemon(res.data.results);
	}
	async function obtenerNombres() {
		try {
			const results = await Promise.all(
				pokemon.map(async pokemon => {
					try {
						const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
						console.log(res.data);
						return res.data;
					} catch (error) {
						console.error('Error fetching data for', pokemon.name, error);
						throw error;
					}
				})
			);
			console.log(results);
			setNombres(results);
		} catch (error) {
			console.error('Error fetching pokemon names:', error);
		}
	}
	useEffect(() => {
		obtenerDatos();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rangoAlto]);
	useEffect(() => {
		if (pokemon.length > 0) {
			obtenerNombres();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pokemon.length]);

	return (
		<main id="Body">
			{/* Delimitar el componente lista */}
			<section id="Principal">
				<div id="Lista">
					{/* función de mapeo del grid */}
					{nombres.slice(0, 101).map((element) => (
						<div id={element.name} key={element.id}>
							{/* boton detalles */}
							<button className={`${element.types[0].type.name}Boton`}
								// función onClick para mostrar detalles
								onClick={() => {
										setPokename(element.name);
										setPokeid(element.id);
										setPoketipo(element.types[0].type.name);
										setPokeEspecie(element.species.name);
									}}
								>
								{/* texto de número y nombre */}
								<p className="NombreYNumero" >
									{element.id.toString().padStart(4, '0')}.
									<br></br> 
									{element.name}
								</p>
								{/* sprite */}
								<img className="Sprite" src={element.sprites.front_default} alt={`${element.name}'s Sprite`} />
								{/* div de tipos */}
								<div className="DivTipos">
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
				</div>
				<div id="detalles">
					<AreaDetalles
						clases=""
						idcss={pokename}
						id={pokeid}
						name={pokename}
						species={pokeEspecie}
						types={poketipo}
					/>
				</div>
			</section>
			<section id="BotonesCambioPagina">
				<button id="botonPrevious">
					<p onClick={() => {
						const nuevoRangoAlto = rangoAlto === 101 ? 1010 : rangoAlto - 101;
						setRangoAlto(nuevoRangoAlto);
						obtenerDatos();
					}}
					>PREVIOUS</p>
				</button>
				<button id="botonNext">
					<p onClick={() => {
						setRangoAlto((rangoAlto < 1010) ? rangoAlto + 101 : 101);
						obtenerDatos();
					}}
					>NEXT</p>
				</button>
			</section>
		</main>
	);
};

export default ListaPokeDex;