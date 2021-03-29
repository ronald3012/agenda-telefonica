import { useState } from 'react';
import './inicio.css';
import logo from '../../logo.svg';
import Listado from '../listado/listado';
import Formulario from '../formulario/formulario';



function Inicio() {
let registros;
  if (localStorage.getItem('listado')) {
      registros = JSON.parse(localStorage.getItem('listado'));
  }else{
      registros = [{id:'1',nombre:'Ronald De Leon', celular:'809 000 0000'}];
  }

  const [listado, setListado] = useState(registros);
  const [nombre, setNombre] = useState('');
  const [celular, setCelular] = useState('');
  const [editando, setEditando] = useState(false);
  const [idEdicion, setIdEdicion] = useState('');


  return (
    <div className="contenedor">
        <header>
            <h1>Agenda con React</h1>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Formulario 
          idEdicion={idEdicion} 
          setIdEdicion={setIdEdicion} 
          setNombre={setNombre} 
          setCelular={setCelular} 
          nombre={nombre} 
          celular={celular} 
          editando={editando} 
          setEditando={setEditando} 
          listado={listado} 
          setListado={setListado} 
        />
        <Listado 
          idEdicion={idEdicion} 
          setIdEdicion={setIdEdicion}  
          setNombre={setNombre} 
          setCelular={setCelular} 
          nombre={nombre} celular={celular} 
          editando={editando} 
          setEditando={setEditando} 
          listado={listado} 
          setListado={setListado} 
        />
        <footer>By <a href="https://www.linkedin.com/in/ronald-de-le%C3%B3n-780489197/" target="_bank">Ronald De Leon</a></footer>
    </div>
  )
}

export default Inicio;
