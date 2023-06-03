import React, { useState } from "react";
import '../Style/AreaDetalles.css'
// import "../Style/TypeColor.css"


const AreaDetalles = (props) => {
    const [Normal, setNormal] = useState(true);
    const hadleClickNormal = () => {setNormal(true);};
    const hadleClickShiny = () => {setNormal(false);};
    return (
        <div>
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
                    <div id="tipo">
                        <p className={props.types}>{props.types}</p>
                        <p className={props.type2}>{props.type2}</p>
                    </div>
                </div>
                <div id="AreaIntermedia">
                    <span>Ability:</span>
                    <span>{props.ability}</span>
                    <span>Hidden Ability:</span>
                    <span>{props.hiddenAbility}</span>
                    <span>Height:</span>
                    <span>{props.height}</span>
                    <span>Weight:</span>
                    <span>{props.weight}</span>
                    <span>Base EXP:</span>
                    <span>{props.baseEXP}</span>
                </div>
                <div id="Stats">
                    <h3>Pokemon's Stats</h3>
                    <span>HP: {props.hp}</span>
                    <span>ATK: {props.atk}</span>
                    <span>Def: {props.def}</span>
                    <span>SPATK:{props.spAtk}</span>
                    <span>SPDEF: {props.spDef}</span>
                    <span>Speed: {props.speed}</span>
                </div>
            </div>
        </div>
    );
}

export default AreaDetalles;