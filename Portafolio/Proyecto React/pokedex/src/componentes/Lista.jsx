import axios from "axios";
import { useEffect, useState } from "react";
import "../TypeColor.css"


const ListaPokeDex = () => {
    const [pokemon, setPokemon] = useState([]);
    const [nombres, setNombres] = useState([]);
    const [rangoAlto, setRangoAlto] = useState(101)
    const rangoBajo = rangoAlto - 101;

    async function obtenerDatos() {
        try {
            const res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/?offset=${rangoBajo}&limit=${rangoAlto}`
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
        header: "flex justify-between fixed w-full ",
        botonesCambioPagina: "w-8 h-screen mt-12",
        main: "w-[85vw] justify-self-center mt-12 bg-[#b13241e6] z-10 md:w-[92vw]",
        Grid: "grid",
        nombre: "flex h-full text-left items-center mx-4 w-[15%]",
        tipos: "flex flex-col my-2 w-8% md:w-[15%]",
    }

    return (
        <body className={estilos.body}>
            <main className={estilos.main}>
                <div className={estilos.Grid}>
                {/* función de mapeo del grid */}
                {nombres.slice(0, 101).map((element) => (
                    
                    <div className="flex"><button id={`${element.types[0].type.name}`} key={element.order}
                    
                    onClick = {()=> {
                        let detalle = document.getElementById(element.order);
                        detalle.classList.remove("hidden");
                        detalle.classList.add("z-30", "bg-white" );
                    }}>
                        
                        {/* texto de número y nombre */}
                        <p className={estilos.nombre}>{element.order.toString().padStart(4, '0')}.<br></br> {element.name}</p>
                        
                        {/* sprite */}
                        <img className="Sprite" src={element.sprites.front_default} alt={`Sprite ${element.name}`} />
                        
                        {/* div de tipos */}
                        <div className={estilos.tipos}>
                            
                            {/* función de mapeo de tipos */}
                            {element.types.map((type, index) => (
                                <p className={`${type.type.name}`} key={index}>
                                
                                {`${type.type.name}`}
                                
                                </p>
                            ))}
                        </div>
                    </button> 
                    <div id={element.order} className="hidden">
                            <p>{element.name}</p>
                            <p>{element.order}</p>
                    </div>
                        <button className="z-40" onClick = {()=> {
                            let detalles = document.getElementById(element.id);
                            detalles.setAttribute("class","hidden")
                            console.log("Has dado click") 
                            }}>X
                        </button>
                    </div>))}
                </div>
            </main>
            <header className={estilos.header}>
                <button id="botonPrevious" className={estilos.botonesCambioPagina}>
                    <p className="rotate-[-90deg]"
                        onClick={()=> (rangoAlto === 101) ? setRangoAlto(1010) : setRangoAlto(rangoAlto - 101)}
                    >PREVIOUS</p>
                </button>
                <button id="botonNext" className={estilos.botonesCambioPagina}>
                    <p className="rotate-[90deg]"
                        onClick={()=> (rangoAlto < 1010) ? setRangoAlto(rangoAlto + 101) : setRangoAlto(101)}
                    >NEXT</p>
                </button>
            </header>
        </body>
        );

};

export default ListaPokeDex;
// "flex flex-col m-1 border-2 rounded-lg border-black justify-evenly content-evenly"