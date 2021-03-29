import './listado.css';

function Listado(props) {

 const  {setListado, listado, setNombre, setCelular,setEditando, setIdEdicion} = props;

 const remove = (id)=>{

     let actualizado = listado.filter(e=> e.id !== id);
     setListado(actualizado);
     localStorage.setItem('listado', JSON.stringify(actualizado));
 }

 const editar = (id)=>{

     let registro = listado.filter(e=> e.id === id);
     setNombre(registro[0].nombre);
     setCelular(registro[0].celular);
     setEditando(true);
     setIdEdicion(id);
 }

  return (
        <div className="col listado">
            <h2>Listado de personas</h2>
            <ul>
                {
                    listado.map(item=>
                        <li key={item.id}> 
                                {item.nombre} - {item.celular}  
                                <div>
                                    <button 
                                        className="acciones" 
                                        onClick={e=>editar(item.id)}
                                    >Editar</button> 
                                    <button 
                                        className="acciones" 
                                        onClick={()=>remove(item.id)}
                                    >Borrar</button>
                                </div>
                        </li>
                    )
                }
            </ul>
        </div>
  )
}

export default Listado;