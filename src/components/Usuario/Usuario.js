import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

let cookie = new Cookies ()

function Usuario() {
    const [sesion, setSesion] = useState("");
    useEffect(()=> {setSesion(cookie.get('sesion'))}, [])
    return(
        <>
            {sesion  ? (
                <>
                    <Menu className='nav-item' elemento='Favoritos' ruta="/favoritos"/> 
                </> ) : 
                (
                    <>
                        <Menu className='nav-item' elemento='Login' ruta="/login"/>
                        <Menu className='nav-item ml-auto' elemento='Crear Cuenta' ruta="/crearcuenta"/>
                    </>
                )}
        </>
    )
}

export default Usuario