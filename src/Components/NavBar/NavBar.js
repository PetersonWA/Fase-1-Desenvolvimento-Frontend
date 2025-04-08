import React from "react";
import { Link } from 'react-router-dom';
//import './NavBar.css';

function NavBar(props){

    return(
        
        <nav>
            <ul>
                <li><Link to="/">Página Inicial</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/lista-de-livros">Lista de Livros</Link></li>
                <li><Link to="/cadastro-de-livros">Cadastro de Livros</Link></li>
            </ul>
        </nav>
        
        
        
    )
}

export default NavBar