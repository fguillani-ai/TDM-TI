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

    
    render(){
        return(
            <div className="single-card-movie">
                <img className='card-img-top' src={`https://image.tmdb.org/t/p/w342${this.props.imagen}`} alt="{this.props.title}" />
                <div className="cardBody">
                    <h2 className='card-title'>{this.props.title}</h2>
                    <p>{this.props.puntuacion}</p>
                    <p>{this.props.estreno}</p>
                    {this.state.mostrar ? <p>{this.props.description}</p> : null}
                    <button className= 'delete' onClick={this.props.borrar}>"Borrar pelicula"</button>
                    <p className='btn btn-primary'><Link to={`/detalle/${this.props.id}`}>Ver detalle</Link></p>
                    </div>
                </div>
        )
    }
}
export default Peli