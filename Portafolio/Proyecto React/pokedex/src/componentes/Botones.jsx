import { NavLink } from "react-router-dom";

const Botones = () => {

    const Estilos = {
        Main: 'flex justify-evenly content-end h-1/5 my-12',
        Button: 'relative w-full h-full overflow-hidden bg-[#1b6102] rounded-lg border-8 border-[#2da202] border-double my-1 font-[system-ui] font-semibold text-5xl text-white ',
    }

    return ( 
        <div className={Estilos.Main}>
            <button className={Estilos.Button}>
            <NavLink to="/">List View</NavLink>
            </button>
            <button className={Estilos.Button}>
                <NavLink to="/">Details</NavLink>
            </button>
            <button className={Estilos.Button}>
            <NavLink to="/">Search</NavLink>
            </button>
            <button className={Estilos.Button}>
            <NavLink to="/">Close</NavLink>
            </button>
        </div>
    );
}

export default Botones;