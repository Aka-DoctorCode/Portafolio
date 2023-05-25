const AreaDetalles = (props) => {
    return (
        <div id={props.idcss} className={props.clases} >
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.species}</p>
            <p>{props.types}</p>
        </div>
    );
}

export default AreaDetalles;