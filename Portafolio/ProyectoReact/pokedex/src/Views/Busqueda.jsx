import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../Style/Busqueda.css"
import pokeball from "../Images/pokeball1.png"

const Busqueda = () => {
    const [pokemon, setPokemon] = useState ("pikachu");
    const [info, setinfo] = useState ([]);

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
    const [pokeMoves, setPokeMoves] = useState("");
    async function datos() {
        try {
            const resultados = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            setinfo(resultados.data);
            console.log(resultados.data);
            return resultados.data;
        } catch (error) {
            console.error('Error fetching data for', pokemon, error);
        }
    }
    useEffect(()=>{
        datos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[setPokemon]);
    return ( 
        <main id="Busqueda">  
            <h1>Searching Pokemon Tool</h1>
            <h2>Wirte down the Pokemon's numbre or name to search it's information</h2>
            <input type="text" placeholder={pokemon} 
                onChange={(e) => {setPokemon(e.target.value);}}/>
            <button 
                onClick={datos}
            >Search</button>
                    
            
		<img src={pokeSprite} alt="" />
		<img src={pokeShinySprite} alt="" />
        <span>{pokeId}</span>
		<span>{pokeName}</span>
		<span>{pokeType}</span>
		<span>{pokeType2}</span>
		<span>{pokeAbility}</span>
		<span>{pokeHiddenAbility}</span>
		<span>{(pokeHeight / 10) + " meters"}</span>
		<span>{(pokeWeight / 10) + " kg"}</span>
		<span>{pokeHp}</span>
		<span>{pokeAtk}</span>
		<span>{pokeDef}</span>
		<span>{pokeSpAtk}</span>
		<span>{pokeSpDef}</span>
		<span>{pokeSpeed}</span>
        <span>{pokeMoves}</span>
        </main>
    );
} 

export default Busqueda;