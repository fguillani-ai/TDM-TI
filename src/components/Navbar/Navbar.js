import Menu from "../Menu/Menu"
import Usuario from "../Usuario/Usuario"
import {Link} from "react-router-dom"

function Navbar() {
    return(
        <nav>
        <ul className="main-nav">
            <Menu elemento='Home' ruta="/"/>
            <Menu elemento= 'Login' ruta="/login"/>
            <Menu elemento= 'Crear Cuenta' ruta="/crearcuenta"/>
            <Menu elemento= 'Favoritos' ruta="/favoritos"/>
        </ul>
        <ul className="user">
            <Usuario nombre= 'Cine HUB' foto="logo.png"/>
        </ul>
        </nav>
    )
}
export default Navbar