import { NavLink } from "react-router-dom";
import "../Style/Botones.css"
const Botones = () => {
    return (
        <header id="Menu">
            <NavLink className="boton" to="/Lista">List View</NavLink>
            <NavLink className="boton" to="/Busqueda">Search</NavLink>
            <NavLink className="boton" to="/Generaciones">Gens</NavLink>
            <NavLink className="boton" to="/">CLOSE</NavLink>
        </header>
    );
};

export default Botones;