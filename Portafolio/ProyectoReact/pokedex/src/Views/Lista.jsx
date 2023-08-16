import { useEffect, useState } from "react";
import axios from "axios";
import AreaDetalles from "../Components/AreaDetalles"
import "../Style/TypeColor.css"
import "../Style/Lista.css"
import pokeball from "../Images/pokeball1.png"

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
	const [title, setTitle] = useState(<span id="Cargar">Click on any Pokemon to get more information</span>);

	async function clearData() {
		setPokeId("");
		setPokeName("");
		setPokeType("");
		setPokeType2("");
		setPokeAbility("");
		setPokeHiddenAbility("");
		setPokeHeight("");
		setPokeWeight("");
		setPokeSprite("");
		setPokeShinySprite("");
		setPokeHp("");
		setPokeAtk("");
		setPokeDef("");
		setPokeSpAtk("");
		setPokeSpDef("");
		setPokeSpeed("");
		setTitle(<span id="Cargar">Click on any Pokemon to get more information</span>);
	}

	const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=101`);
	const [next1, setNext1] = useState("");
	const [previus1, setPrevius1] = useState("");

	async function listaDeNombres() {
		const res = await axios.get(url);
		// console.log(res.data.results);
		setPokemon(res.data.results);
		setNext1(res.data.next);
		// console.log("next:" + next1);
		setPrevius1(res.data.previous);
		// console.log("previus:" + previus1);
		// console.log("url es:" + url);
	}

	async function datosPokemon() {
		try {
			const results = await Promise.all(
				pokemon.map(async pokemon => {
					try {
						const res = await axios.get(`
						https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
						// console.log(res.data);
						return res.data;
					} catch (error) {
						console.error('Error fetching data for', pokemon.name, error);
					}
				})
			);
			// console.log(results);
			setNombres(results);
		} catch (error) {
			console.error('Error fetching pokemon names:', error);
		}
	}
	useEffect(() => {
		listaDeNombres();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url, next1]);
	useEffect(() => {
		datosPokemon();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url, next1]);

	return (
		<main id="Body">
			<section id="BotonesCambioPagina">
				<button className="botonCambio"
					onClick={() => {
						switch (previus1) {
							case null:
								setUrl('https://pokeapi.co/api/v2/pokemon/?offset=1212&limit=61');
								break;
							case "https://pokeapi.co/api/v2/pokemon/?offset=1151&limit=61":
								setUrl("https://pokeapi.co/api/v2/pokemon/?offset=1111&limit=101");
								break;
							default: setUrl(previus1);
						}
					}}
				>PREVIOUS</button>
				<button className="botonCambio"
					onClick={() => { 
						switch (next1) {
							case null:
								setUrl('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=101');
								break;
							case "https://pokeapi.co/api/v2/pokemon/?offset=1212&limit=69":
								setUrl("https://pokeapi.co/api/v2/pokemon/?offset=1212&limit=61");
								break;
							case "https://pokeapi.co/api/v2/pokemon/?offset=1273&limit=8":
								setUrl("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=101");
								break;
							default: setUrl(next1);
						}
					}}
				>NEXT</button>
			</section>
			{/* Delimitar el componente lista */}
			<section id="Principal">
				<section id="AreaDetalles">
					<div id="detalles">
						{pokeId && pokeName && pokeType && pokeAbility  && pokeHeight && pokeWeight && pokeSprite && pokeShinySprite && pokeHp && pokeAtk && pokeDef && pokeSpAtk && pokeSpDef && pokeSpeed ? (
							<AreaDetalles
								id={pokeId}
								name={pokeName}
								types={pokeType}
								type2={pokeType2}
								ability={pokeAbility}
								hiddenAbility={pokeHiddenAbility}
								height={(pokeHeight / 10) + " meters"}
								weight={(pokeWeight / 10) + " kg"}
								sprite={pokeSprite}
								shinySprite={pokeShinySprite}
								hp={pokeHp}
								atk={pokeAtk}
								def={pokeDef}
								spAtk={pokeSpAtk}
								spDef={pokeSpDef}
								speed={pokeSpeed}
								Title= {null}
								clearData={clearData}
							/>
						) :	title
						}
					</div>
				</section>
				<section id="Lista">
					{/* función de mapeo del grid */}
					{nombres.map((element) => (
						<div id={element.name} key={element.id}>
							{/* boton detalles */}
							<button className={`${element.types[0].type.name}Boton`}
								// función onClick para mostrar detalles
								onClick={() => {
									clearData();
									setTitle("");
									// Images
									setPokeSprite(element.sprites.other['official-artwork'].front_default 
										? element.sprites.other['official-artwork'].front_default 
										: pokeball);
									setPokeShinySprite(element.sprites.other['official-artwork'].front_shiny 
										? element.sprites.other['official-artwork'].front_shiny 
										: pokeball);
									async function detalles () {
									// Basic info
										setPokeId(element.id);
										setPokeName(element.name);
										setPokeType(element.types[0].type.name);
										setPokeType2(element.types.length > 1 
											? element.types[1].type.name 
											: null);
										setPokeHeight(element.height);
										setPokeWeight(element.weight ? `${element.weight}` : "0");
										// ABILITIES
										const ability = element.abilities.map(ability => ability.ability.name);
										const isHidden = element.abilities.map(ability => ability.is_hidden);
										setPokeAbility(ability);
										setPokeHiddenAbility(isHidden);
										// STATS
										setPokeHp(element.stats[0].base_stat);
										setPokeAtk(element.stats[1].base_stat);
										setPokeDef(element.stats[2].base_stat);
										setPokeSpAtk(element.stats[3].base_stat);
										setPokeSpDef(element.stats[4].base_stat);
										setPokeSpeed(element.stats[5].base_stat);
									} setTimeout(detalles, 100);
								}}>
								{/* texto de número y nombre */}
								<p className="NombreYNumero" >
									{element.id.toString().padStart(4, '0')}.
									<br></br> 
									{element.name}
								</p>
								{/* sprite */}
								<img className="Sprite" src={(element.sprites.front_default) ? element.sprites.front_default : pokeball} alt="sprite" />
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
				</section>
			</section>
		</main>
	);
};

export default ListaPokeDex;