import { NavLink } from "react-router-dom";
import "../Styles/botones.css";


const Botones = () => {
    const estilos = {
        section: "w-full py-2 flex fixed justify-self-center z-20 bg-[#D42C3F]",
        botonesComponentes: "w-full h-8 mx-2",
    }
    return (
        <section className={estilos.section}>
                <button id="boton" className={estilos.botonesComponentes}>
                    <NavLink to="/Lista">List View</NavLink>
                </button>
                <button id="boton" className={estilos.botonesComponentes}>
                    <NavLink to="/Busqueda">Search</NavLink>
                </button>
                <button id="botonClose" className={estilos.botonesComponentes}>
                    <NavLink to="/">Close</NavLink>
                </button>
            </section>
    );
}

export default Botones;