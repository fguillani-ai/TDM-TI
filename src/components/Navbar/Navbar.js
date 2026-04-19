import Menu from "../Menu/Menu"
import Usuario from "../Usuario/Usuario"
import { Link } from "react-router-dom"
import React from "react"

function Navbar() {
   
    return(
        <nav>
        <ul className="main-nav">
            <Menu className='nav-item' elemento='Home' ruta="/"/>
            <Menu className='nav-item' elemento='Peliculas Populares' ruta="/vermaspp"/>
            <Menu className='nav-item' elemento='Peliculas en Cartel' ruta="/vermaspc"/>

        </ul>
        <ul className="user">
            <Usuario/>
        </ul>
        </nav>
    )
}
export default Navbar