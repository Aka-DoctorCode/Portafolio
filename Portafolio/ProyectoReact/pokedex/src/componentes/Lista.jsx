import { useEffect, useState } from "react";
import axios from "axios";
import AreaDetalles from "./AreaDetalles"
import "../Style/TypeColor.css"
import "../Style/Lista.css"

const ListaPokeDex = () => {
	const [pokemon, setPokemon] = useState([]);
	const [nombres, setNombres] = useState([]);

	// Datos props
	const [pokeId, setPokeId] = useState("");
	const [pokeName, setPokeName] = useState("");
	const [pokeType, setPokeType] = useState("");
	const [pokeType2, setPokeType2] = useState("");
	const [pokeAbility, setPokeAbility] = useState("");
	const [pokeHiddenAbility, setPokeHiddenAbility] = useState("");
	const [pokeBaseEXP, setPokeBaseEXP] = useState("");
	const [pokeHeight, setPokeHeight] = useState("");
	const [pokeWeight, setPokeWeight] = useState("");
	const [pokeSprite, setPokeSprite] = useState("");
	const [pokeShinySprite, setPokeShinySprite] = useState("");
	const [pokeHp, setPokeHp] = useState("");
	const [pokeAtk, setPokeAtk] = useState("");
	const [pokeDef, setPokeDef] = useState("");
	const [pokeSpAtk, setPokeSpAtk] = useState("");
	const [pokeSpDef, setPokeSpDef] = useState("");
	const [pokeSpeed, setPokeSpeed] = useState("");
	const [title, setTitle] = useState(<h1 className="Cargar">Click on any Pokémon to get more information</h1>);


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
									setPokeName(element.name);
									setPokeId(element.id);
									setPokeType(element.types[0].type.name);
									const pokeType2 = element.types.length > 1 ? element.types[1].type.name : null;
									setPokeType2(pokeType2);
									setPokeAbility(element.abilities[0].ability.name);
									const pokeHiddenAbility = element.abilities.length > 1 ? element.abilities[1].ability.name : null;
									setPokeHiddenAbility(pokeHiddenAbility);
									setPokeBaseEXP(element.base_experience);
									setPokeHeight(element.height);
									setPokeWeight(element.weight);
									setPokeSprite(element.sprites.other['official-artwork'].front_default);
									setPokeShinySprite(element.sprites.other['official-artwork'].front_shiny);
									setPokeHp(element.stats[0].base_stat);
									setPokeAtk(element.stats[1].base_stat);
									setPokeDef(element.stats[2].base_stat);
									setPokeSpAtk(element.stats[3].base_stat);
									setPokeSpDef(element.stats[4].base_stat);
									setPokeSpeed(element.stats[5].base_stat);
									setTitle("");
								}}>
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
					{pokeId && pokeName && pokeType && pokeAbility && pokeBaseEXP && pokeHeight && pokeWeight && pokeSprite && pokeShinySprite && pokeHp && pokeAtk && pokeDef && pokeSpAtk && pokeSpDef && pokeSpeed ? (
						<AreaDetalles
							id={pokeId}
							name={pokeName}
							types={pokeType}
							type2={pokeType2}
							ability={pokeAbility}
							hiddenAbility={(pokeHiddenAbility) 
								? (pokeHiddenAbility) 
								: "No Hidden Ability"
							}
							height={(pokeHeight / 10) + " meters"}
							weight={(pokeWeight / 10) + " kg"}
							baseEXP={pokeBaseEXP}
							sprite={pokeSprite}
							shinySprite={pokeShinySprite}
							hp={pokeHp}
							atk={pokeAtk}
							def={pokeDef}
							spAtk={pokeSpAtk}
							spDef={pokeSpDef}
							speed={pokeSpeed}
							Title= {null}
						/>
					) :	title
					}
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