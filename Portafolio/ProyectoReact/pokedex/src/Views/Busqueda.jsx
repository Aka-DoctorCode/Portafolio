import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../Style/Busqueda.css"
const Busqueda = () => {
    const [pokemon, setPokemon] = useState ("pikachu");
    async function datos() {
        try {
            const resultados = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            return resultados.data;
        } catch (error) {
            console.error('Error fetching data for', pokemon, error);
        }
    }
    useEffect(()=>{
        datos()
    })
    return ( 
        <main id="Busqueda">  
            <h1>Searching Pokemon Tool</h1>
            
        </main>
    );
}

export default Busqueda;