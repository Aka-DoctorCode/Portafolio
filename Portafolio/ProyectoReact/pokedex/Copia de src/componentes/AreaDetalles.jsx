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
                    <div id="Col1">
                        <span>Ability:</span>
                        <span>Hidden Ability:</span>
                        <span>Height:</span>
                        <span>Weight:</span>
                    </div>
                    <div id="Col2">
                        <span>{props.ability}</span>
                        <span>{props.hiddenAbility}</span>
                        <span>{props.height}</span>
                        <span>{props.weight}</span>
                    </div>
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