import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../TypeColor.css"
import "../botones.css"

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

    const estilos = {
        body: "grid items-start justify-center",
        header: "flex justify-between fixed w-full",
        main: "w-[99%] justify-self-center p-1 bg-[#b13241e6] z-10",
        Grid: "grid grid-cols-3 justify-stretch m-1",
        nombre: "flex h-full text-left items-center mx-4",
        tipos: "flex flex-col my-2",
        botonesCambioPagina: "w-8 h-screen",
        componentes: "w-[93vw] my-1 flex z-10",
        botonesComponentes: "w-full h-8 mx-2",
    }

    return (
        <body className={estilos.body}>
            <header className={estilos.header}>
                <button id="botonPrevious" className={estilos.botonesCambioPagina}>
                    <p className="rotate-[-90deg]">PREVIOUS</p>
                </button>
                <button id="botonNext" className={estilos.botonesCambioPagina}>
                    <p className="rotate-[90deg]">NEXT</p>
                </button>
            </header>
            <div className={estilos.componentes}>
                <button id="boton" className={estilos.botonesComponentes}>List View</button>
                <button id="boton" className={estilos.botonesComponentes}>
                    <NavLink to="Detalle">Details</NavLink>
                </button>
                <button id="boton" className={estilos.botonesComponentes}>
                    <NavLink to="Busqueda">Search</NavLink>
                </button>
                <button id="botonClose" className={estilos.botonesComponentes}>
                    <NavLink to="/">Close</NavLink>
                </button>
            </div>
            <main className={estilos.main}>
                <div className={estilos.Grid}>
                {/* función de mapeo del grid */}
                {nombres.slice(0, 183).map((element) => (
                    <div id={`${element.types[0].type.name}`} key={element.id}>
                        {/* texto de número y nombre */}
                        <p className={estilos.nombre}>{element.id.toString().padStart(4, '0')}.<br></br> {element.name}</p>
                        {/* sprite */}
                        <img src={element.sprites.front_default} alt="SPRITE" />
                        {/* div de tipos */}
                        <div className={estilos.tipos}>
                            {/* función de mapeo de tipos */}
                            {element.types.map((type, index) => (
                                <p className={`${type.type.name}`} key={index}>
                                {`${type.type.name}`}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
                </div>
            </main>
            <div className={estilos.componentes}>
                <button id="boton" className={estilos.botonesComponentes}>List View</button>
                <button id="boton" className={estilos.botonesComponentes}>
                    <NavLink to="Detalle">Details</NavLink>
                </button>
                <button id="boton" className={estilos.botonesComponentes}>
                    <NavLink to="Busqueda">Search</NavLink>
                </button>
                <button id="botonClose" className={estilos.botonesComponentes}>
                    <NavLink to="/">Close</NavLink>
                </button>
            </div>
        </body>
        );

};

export default ListaPokeDex;
// "flex flex-col m-1 border-2 rounded-lg border-black justify-evenly content-evenly"