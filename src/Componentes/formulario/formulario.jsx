import './formulario.css';



function Formulario(props) {

    const { setListado, listado, setNombre, nombre, setCelular, celular, editando,setEditando, idEdicion, setIdEdicion } = props;

    const add = (e) => {
        e.preventDefault();

        if (editando) {

            let actualizado = listado.map(e=>e.id === idEdicion ? { id: idEdicion, nombre: nombre, celular: celular }:e);
            setListado(actualizado);
            localStorage.setItem('listado', JSON.stringify(actualizado));

            setNombre('');
            setCelular('');
            setIdEdicion('');
            setEditando(false);


        } else {
            let id = Math.floor(Math.random() * parseInt(celular));
            let actualizado = [...listado, { id: id, nombre: nombre, celular: celular }];
            setListado(actualizado);
            localStorage.setItem('listado', JSON.stringify(actualizado));

            setNombre('');
            setCelular('');
        }
    }

    return (
        <div className="col">
            <h2>Ingresa los datos</h2>
            <form onSubmit={(e) => add(e)}>
                <input 
                    type="text" 
                    placeholder="Ingresa el nombre" 
                    onInput={(e) => setNombre(e.target.value)} 
                    value={nombre} 
                    required 
                />
                <input 
                    type="number" 
                    placeholder="Ingresa el celular" 
                    onInput={(e) => setCelular(e.target.value)} 
                    value={celular} 
                    required 
                />
                {
                    editando === true ?
                        (
                            <input type="submit" value="guardar" />
                        )
                        :
                        (
                            <input type="submit" value="Agregar" />

                        )
                }
            </form>
        </div>
    )
}

export default Formulario;