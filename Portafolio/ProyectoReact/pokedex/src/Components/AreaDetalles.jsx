import React, {useState } from "react";
import '../Style/AreaDetalles.css'

const AreaDetalles = (props) => {
    const [Normal, setNormal] = useState(true);
    const [botonPress, setBotonPress] = useState('press');
    const [shinyPress, setShinyPress] = useState('');
        const hadleClickNormal = () => {
        setNormal(true);
        setBotonPress('press');
        setShinyPress('');
    };
    const hadleClickShiny = () => {
        setNormal(false);
        setShinyPress('press');
        setBotonPress('');
    }
    return (
        <div className={`${props.types}detalles`}>
            <div id="AreaSuperior">
                <div id="cabecera">
                    <p>#&nbsp;&nbsp;{props.id}.</p>
                    <p>{props.name}</p>
                </div>
                <div id="imagenes">
                    <div>
                        <button className="SpriteSelector" id={botonPress} onClick={hadleClickNormal}>Normal</button>
                        <button className="SpriteSelector" id={shinyPress} onClick={hadleClickShiny}>Shiny</button>
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
            <h3>characteristics</h3>
            <div id="AreaIntermedia">
                <div id="Col1">
                    <span>Height:</span>
                    <span>Weight:</span>
                </div>
                <div id="Col2">
                    <span>{props.height}</span>
                    <span>{props.weight}</span>
                </div>
            </div>
            <h3>Abilities</h3>
            <div id="AreaIntermedia">
                    <div id="Col1">
                        {props.ability.map((ability, index) => (
                            <span key={index}>{ability}</span>
                        ))}
                    </div>
                    <div id="Col2">
                        {props.hiddenAbility.map((hiddenAbility, index) => (
                            <span key={index}>
                                {hiddenAbility ? 'is hidden' : 'is not hidden'}
                            </span>
                        ))}
                    </div>
                </div>
            <div id="Stats">
                <h3>Pokemon's Stats</h3>
                <div className="StatsDiv">
                    <span>HP: {props.hp}/255</span>
                    <div className="Statsbar" style={{ "--percent":props.hp}}></div>
                </div>
                <div className="StatsDiv">
                    <span>ATK: {props.atk}/255</span>
                    <div className="Statsbar" style={{ "--percent": props.atk}}></div>
                </div>
                <div className="StatsDiv">
                    <span>Def: {props.def}/255</span>
                    <div className="Statsbar" style={{ "--percent": props.def}}></div>
                </div>
                <div className="StatsDiv">
                    <span>SPATK:{props.spAtk}/255</span>
                    <div className="Statsbar" style={{ "--percent": props.spAtk}}></div>
                </div>
                <div className="StatsDiv">
                    <span>SPDEF: {props.spDef}/255</span>
                    <div className="Statsbar" style={{ "--percent": props.spDef}}></div>
                </div>
                <div className="StatsDiv">
                    <span>Speed: {props.speed}/255</span>
                    <div className="Statsbar" style={{ "--percent": props.speed}}></div>
                </div>
            </div>
            <button id="Close" onClick={() => props.clearData()}>Close</button>
        </div>
    );
}

export default AreaDetalles;