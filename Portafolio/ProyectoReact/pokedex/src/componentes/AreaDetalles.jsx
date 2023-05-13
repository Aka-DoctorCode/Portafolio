const AreaDetalles = (props) => {
    return (
        <div className={props.clases} id={props.idcss}>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.species}</p>
        </div>
    );
}

export default AreaDetalles;