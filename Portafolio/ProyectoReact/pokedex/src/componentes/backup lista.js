async function obtenerDatos() {
    try {
        const res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/?offset=${rangoBajo}&limit=${rangoAlto}`
        );
        setPokemon(res.data.results);
    } catch (err) {
        console.log(`Ocurrio un error: ${err}`);
    }
};
useEffect(() => {
    async function obtenerNombres() {
        const results = await Promise.all(
            pokemon.map(async (pokemon) => {
                try {
                    const res = await axios.get(
                        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
                    );
                    return res.data;
                } catch (err) {
                    console.log(`Ocurrio un error: ${err}`);
                }
            })
        );
        setNombres(results);
    }
    obtenerDatos();
    obtenerNombres();
},[]);

    async function obtenerDatos() {
		const res = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/?offset=${rangoBajo}&limit=${rangoAlto}`
		);
		console.table(res.data.results);
		setPokemon(res.data.results);
	}
	async function obtenerNombres() {
		const results = await Promise.all(
			pokemon.map(async (pokemon) => {
				const res = await axios.get(
					`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
				);
				console.log(res.data);
				return res.data;
			})
		);
		setNombres(results);
	}
	useEffect(() => {
		obtenerDatos();
		console.log(obtenerDatos)
		obtenerNombres();
		console.log(obtenerNombres)
	},);

    const estilos = {
		nombre: "flex h-full text-left items-center mx-4 w-[15%]",
		tipos: "flex flex-col my-2 w-8% md:w-[15%]",
		botonesCambio: "flex justify-between fixed w-full ",
		botonesCambioPagina: "w-8 h-screen mt-12",
		detalles: "flex h-[300px]"
	}