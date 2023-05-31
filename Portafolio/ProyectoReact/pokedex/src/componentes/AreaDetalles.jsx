import React, { useState } from "react";
import '../Style/AreaDetalles.css'
// import "../Style/TypeColor.css"


const AreaDetalles = (props) => {
    const [Normal, setNormal] = useState(true);
    const hadleClickNormal = () => {setNormal(true);};
    const hadleClickShiny = () => {setNormal(false);};
    return (
        <div className={`${props.types}detalles`}>
            <div id="AreaSuperior">
                <div id="cabecera">
                    <p>#&nbsp;&nbsp;{props.id}.</p>
                    <p>{props.name}</p>
                </div>
                <div id="imagenes">
                    <div>
                        <button onClick={hadleClickNormal}>Normal</button>
                        <button onClick={hadleClickShiny}>Shiny</button>
                    </div>
                    {Normal 
                        ? (<img id='Normal' src={props.sprite} className="Sprites" alt="" srcset="" />)
                        : (<img id='Shiny' src={props.shinySprite} className="Sprites" alt="" srcset="" />)
                    }
                </div>
            </div>
            <div>
                <p className={props.types}>{props.types}</p>
                <p className={props.type2}>{props.type2}</p>
            </div>
            <p>Ability: {props.ability}</p>
            <p>Hidden Ability: {props.hiddenAbility}</p>
            <p>Base Exp: {props.baseEXP}</p>
            <p>Height: {props.height}</p>
            <p>Weiht:{props.weight}</p>
            <div>
                <p>HP: {props.hp}</p>
                <p>ATK: {props.atk}</p>
                <p>Def: {props.def}</p>
                <p>SPATK:{props.spAtk}</p>
                <p>SPDEF: {props.spDef}</p>
                <p>Speed: {props.speed}</p>
            </div>
        </div>
    );
}

export default AreaDetalles;