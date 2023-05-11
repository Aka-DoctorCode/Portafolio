import axios from "axios";
import { useEffect, useState } from "react";
import "../TypeColor.css"
// import BotonesCambioPagina from "./componentes/BotonesCambioPagina.jsx";


const ListaPokeDex = () => {
  const [pokemon, setPokemon] = useState([]);
  const [nombres, setNombres] = useState([]);
  const [rangoAlto, setRangoAlto] = useState(101)
  const rangoBajo = rangoAlto - 101;
  // const [detalles, setDetalles] = useState([]);
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
    body: "flex items-start justify-center",
    main: "grid grid-cols-9 gap w-[85vw] justify-self-center mt-12 bg-[#b13241e6] z-10 md:w-[92vw]",
    section: "col-span-5",
    nombre: "flex h-full text-left items-center mx-4 w-[15%]",
    tipos: "flex flex-col my-2 w-8% md:w-[15%]",
    botonesCambio: "flex justify-between fixed w-full ",
    botonesCambioPagina: "w-8 h-screen mt-12",
  }



  return (
    <body className={estilos.body}>
      
    </body>
  );
};

export default ListaPokeDex;