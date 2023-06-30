import { NavLink } from "react-router-dom";
import "../Style/Botones.css"
const Botones = () => {
    // let Activo = ({isActive})=>({
    //     backgroudColor: isActive ? "blue" : "green",
    //     boxShadow: isActive ? "0px 0px black" : "2px 4px black",
    //     textDecoration: "none",
    //     color: "White",
    // })
    return (
        <header id="Menu">
            <NavLink className="link" 
            // style={Activo} 
            to="/Lista">
                <button id="boton">
                    List View
                </button>
            </NavLink>
            <NavLink className="link" 
            // style={Activo} 
            to="/Busqueda">
                <button id="boton">
                    Search
                </button>
            </NavLink>
            <NavLink className="link" 
            // style={Activo} 
            to="/Generaciones">
                <button id="boton">
                    Gens
                </button>
            </NavLink>
            <NavLink className="link" to="/">
                <button id="botonClose">
                    CLOSE
                </button>
            </NavLink>
        </header>
    );
}

export default Botones;