import Menu from "../Menu/Menu"
import Usuario from "../Usuario/Usuario"
import { Link } from "react-router-dom"
import React from "react"

function Navbar() {
    let Sesion = localStorage.getItem('sesion') !== null;

    return(
        <nav>
        <ul className="main-nav">
            <Menu elemento='Home' ruta="/"/>
            
            {Sesion ? (
                <Menu elemento='Favoritos' ruta="/favoritos"/>) : 
             (
                <React.Fragment>
                    <Menu elemento='Login' ruta="/login"/>
                    <Menu elemento='Crear Cuenta' ruta="/crearcuenta"/>
                </React.Fragment>
            )}
        </ul>
        <ul className="user">
            <Usuario nombre='Cinepolis' foto="logo.png"/>
        </ul>
        </nav>
    )
}
export default Navbar