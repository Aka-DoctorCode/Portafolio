import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles/Busqueda.css";
const Busqueda = () => {
	const [pokemon, setPokemon] = useState({});
  const [nombrePokemon, setNombrePokemon] = useState("pikachu");
  
  useEffect(() => {
    function obtenerNombres () {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`) 
      .then((res)=> {
        setPokemon(res.data)
        console.log(res.data)
      })
      .catch((error) => {  
        console.log(error + "No se pudo obtener los datos")
      })
    }
    obtenerNombres();
  }, [nombrePokemon]);

  const estilos = {
    main: "w-[99%] h-screen mx-2 pt-[10%] flex flex-col justify-top text-center color-white font-bold",
    h1: "text-5xl text-center",
    h2: "text-2xl text-center px-[8%] py-[3%]",
    input: "text-xl text-center w-[50%] h-[80%] border-2 border-black rounded-md text-slate-800",
    busqueda: "flex justify-center items-center gap-2",
}

  return ( 
      <main className={estilos.main}>
          <h1 className={estilos.h1}>Search for a Pokemon</h1>
          <h2 className={estilos.h2}>To search for a pokemon type down either the pokemon's or PokeDex number</h2>
        <div className={estilos.busqueda}>
          <input className={estilos.input}
            id="nombre"
            placeholder="Write the Pokemon's name or Number"
            type="text"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setTimeout(() => {
                  setNombrePokemon(event.target.value.toLowerCase());
                }, 2000);
            }}}/>
          <button className='buscar' 
            onClick={
                ()=>{
                  let nombrePokemon = document.getElementById("nombre").value;
                  console.log(nombrePokemon);
                  setTimeout(() => {
                    setNombrePokemon(nombrePokemon);
                  }, 2000);
                }
              }
          >
            Buscar
          </button>
        </div>
        <div className="flex flex-col w-4/5 self-center" id={`${pokemon.types[0].type.name}`} key={pokemon.order}>
				<img src={pokemon.sprites.other.dream_world.front_default} alt="sprite" srcset="" />
        <p>Name: {pokemon.name}</p>
        <p>Base Experience: {pokemon.base_experience}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>height: {pokemon.height}</p>
        <div>
				<p>Ability: {pokemon.abilities[0].ability.name}</p>
				<p>Hidden Ability: {pokemon.abilities[1] ? pokemon.abilities[1].ability.name : "none"}</p>
        </div>
				  <div>
            <p id={pokemon.types[0].type.name} >{pokemon.types[0].type.name}</p>
	  			  <p id={pokemon.types[1] ? pokemon.types[1].type.name : ""} >{pokemon.types[1] ? pokemon.types[1].type.name : ""}</p>
          </div>
          <div>
            <p>{pokemon.stats[0].stat.name}: {pokemon.stats[0].base_stat}</p>
            <p>{pokemon.stats[1].stat.name}: {pokemon.stats[1].base_stat}</p>
            <p>{pokemon.stats[2].stat.name}: {pokemon.stats[2].base_stat}</p>
            <p>{pokemon.stats[3].stat.name}: {pokemon.stats[3].base_stat}</p>
            <p>{pokemon.stats[4].stat.name}: {pokemon.stats[4].base_stat}</p>
            <p>{pokemon.stats[5].stat.name}: {pokemon.stats[5].base_stat}</p>
          </div>
        </div>
      </main>
  );
}

export default Busqueda;