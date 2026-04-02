import "./Peli.css"
import { Link } from 'react-router-dom';

import React, {Component} from 'react';

class Peli extends Component {
    constructor(props) {
        super(props);
        this.state={
            datos:'',
        } 
    }
    boton(){
        this.setState({
            mostrar: !this.state.mostrar
        });
    }
    
    render(){
        return(
            <div className="character-card">
                <img src={`https://image.tmdb.org/t/p/w342${this.props.imagen}`} alt="{this.props.title}" />
                <h2>{this.props.title}</h2>
                <p>{this.props.puntuacion}</p>
                <p>{this.props.estreno}</p>
                {this.state.mostrar && <p>{this.props.description}</p>}
                <button className= 'delete' onClick={this.props.borrar}>"Borrar pelicula"</button>
                <p className='VerMas'><Link to={`/detalle/${this.props.id}`}>Ver detalle</Link></p>
            </div>
        )
    }
}
export default Peli