// import "../Style/Generaciones.css";
// import "../Style/Botones.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Generaciones = () => {
    const [genNumber, setGenNumber] = useState("1")
    async function generation () {
        try{
            const gen = await axios.get(`https://pokeapi.co/api/v2/generation/${genNumber}`);
            console.log(gen.data)
        }
        catch(error){
            console.log("generation",error);
        }
    }
    useEffect(() => {
        generation();
    })
    return ( 
        <main id="GenInfo">
            <section>
                <h1>generation.name</h1>
            </section>
            <section id="Generaciones">
                <button className="GenBoton"
                    // onClick={setGenNumber("1")}
                >GENERATION 1</button>
                <button className="GenBoton"
                    // onClick={setGenNumber("2")}
                >GENERATION 2</button>
                <button className="GenBoton"
                    // onClick={setGenNumber("3")}
                >GENERATION 3</button>
                <button className="GenBoton"
                    // onClick={setGenNumber("4")}
                >GENERATION 4</button>
                <button className="GenBoton"
                    // onClick={setGenNumber("5")}
                >GENERATION 5</button>
                <button className="GenBoton"
                    // onClick={setGenNumber("6")}
                >GENERATION 6</button>
                <button className="GenBoton"
                    // onClick={setGenNumber("7")}
                >GENERATION 7</button>
                <button className="GenBoton"
                    // onClick={setGenNumber("8")}
                >GENERATION 8</button>
                <button className="GenBoton"
                    // onClick={setGenNumber("9")}
                >GENERATION 9</button>
            </section>
        </main>
    );
}

export default Generaciones;