import { Component } from "react";
import  Menu  from "../Menu/Menu";
import Cookies from "universal-cookie";

let cookie = new Cookies ()

class Usuario extends Component {
    constructor (){
        super ()
        this.state={
            sesion: ""
        }
    }
    componentDidMount (){
        this.setState({
            sesion:cookie.get('sesion')
        })
    }
    render(){
        return(
            <>
                {this.state.sesion  ? (
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
}
export default Usuario