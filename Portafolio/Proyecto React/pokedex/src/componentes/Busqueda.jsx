import axios from "axios";
import { useEffect, useState } from "react";
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
            console.log(error)
          })
        }
        obtenerNombres();
      }, [nombrePokemon]);

    return ( 
        <main className="w-screen h-screen pt-12 flex flex-col justify-center content-center">
            <h1>Serach for a Pokemon</h1>
            <p>input pokemon's name or number</p>
            <div>
                <input
                id="nombre" placeholder="Write the Pokemon's name of Number" type="text" />
                <button onClick={
                    ()=>{
                        let nombrePokemon = document.getElementById("nombre").value;
                        console.log(nombrePokemon);
                        setNombrePokemon(nombrePokemon);
                        
                    }
                }>Buscar</button>
            </div>
            <p>{pokemon.name}</p>
        </main>
    );
}

export default Busqueda;