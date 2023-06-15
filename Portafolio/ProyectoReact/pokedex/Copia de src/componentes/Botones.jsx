import { NavLink } from "react-router-dom";
import "../Style/botones.css"
const Botones = () => {
    return (
        <header id="Menu">
            <button id="boton">
                <NavLink className="link" to="/Lista">
                    <div>List View</div>
                </NavLink>
            </button>
            <button id="boton">
                <NavLink className="link" to="/Busqueda">
                    <div>Search</div>
                </NavLink>
            </button>
            <button id="botonClose">
                <NavLink className="link" to="/">
                    <div>CLOSE</div>
                </NavLink>
            </button>
        </header>
    );
}

export default Botones;