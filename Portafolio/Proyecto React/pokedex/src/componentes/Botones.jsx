import { NavLink } from "react-router-dom";

const Botones = () => {
    const estilos = {
        Boton: "w-[100wv] h-8 border-2 border-black",
    }
    return (
        <main 
        // className="w-full flex h-16 mt-2"
        >
            <div className="w-full flex justify-around ">
                <button className={estilos.Boton}>
                <NavLink to="Lista">List View</NavLink>
                </button>
                <button className={estilos.Boton}>
                    <NavLink to="Detalle">Details</NavLink>
                </button>
                <button className={estilos.Boton}>
                <NavLink to="Busqueda">Search</NavLink>
                </button>
                <button className={estilos.Boton}>
                <NavLink to="/">Close</NavLink>
                </button>
            </div>
        </main>
    );
}

export default Botones;