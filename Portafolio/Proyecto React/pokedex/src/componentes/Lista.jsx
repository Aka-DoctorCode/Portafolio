import axios from "axios";
import { useEffect, useState } from "react";
import "../TypeColor.css"

const ListaPokeDex = () => {
    const [pokemon, setPokemon] = useState([]);
    const [nombres, setNombres] = useState([]);

    async function obtenerDatos() {
        try {
            const res = await axios.get(
            "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=183"
            );
        setPokemon(res.data.results);
        } catch (err) {
            console.log(`Ocurrio un error: ${err}`);
        }
    }

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
    }, [pokemon]);

    return (
        <main>
            <div className="">
                {nombres.slice(0, 183).map((element) => (
                <div className="" key={element.id}>
                    <p>{element.id}</p>
                    <p>{element.name}</p>
                    <img src={element.sprites.front_default} alt="SPRITE" />
                    <div>
                    {element.types.map((type) => (
                        <p className={`${type.type.name}`} key={type.slot}>{`${type.type.name}`}</p>
                    ))}
                    </div>
                </div>
                ))}
            </div>
        </main>
    );
};

export default ListaPokeDex;