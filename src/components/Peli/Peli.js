import "./Peli.css"
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import React, { Component } from 'react';

let cookie = new Cookies()

class Peli extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: '',
            logueado: false,
            esFavorito: false,
        }
    }

    componentDidMount() {
        let usuario = cookie.get('sesion')
        let id = this.props.id
        let favoritosStorage = localStorage.getItem('favoritos');
        let favoritosArray = favoritosStorage !== null ? JSON.parse(favoritosStorage) : [];
        this.setState({esFavorito:favoritosArray.includes(id)? true : false})
        this.setState({ logueado: usuario ? true : false })
    }

    agregarQuitarFavoritos(id) {
        let favoritosStorage = localStorage.getItem('favoritos');
        let favoritosArray = [];

        if (favoritosStorage !== null) {
            favoritosArray = JSON.parse(favoritosStorage);
        }

        let estaEnFavoritos = favoritosArray.filter(favId => favId === id);

        if (estaEnFavoritos.length > 0) {
            let nuevosFavoritos = favoritosArray.filter(favId => favId !== id);
            localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
            this.setState({ esFavorito: false });
        } else {
            favoritosArray.push(id);
            localStorage.setItem('favoritos', JSON.stringify(favoritosArray));
            this.setState({ esFavorito: true });
        }
    }

    render() {
        return (
            <div className="single-card-movie">
                <img className='card-img-top' src={`https://image.tmdb.org/t/p/w342${this.props.imagen}`} alt={this.props.title} />
                <div className="cardBody">
                    <h2 className='card-title'>{this.props.title}</h2>
                    <p>{this.props.puntuacion}</p>
                    <p>{this.props.estreno}</p>
                    {this.state.mostrar ? <p>{this.props.description}</p> : null}
                    <p className='btn btn-primary'><Link to={`/detalle/${this.props.id}`}>Ver detalle</Link></p>
                    {this.state.logueado ? <button className='btn alert-info' onClick={() => this.agregarQuitarFavoritos(this.props.id)}>
                        {this.state.esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos ♥️'}
                    </button> : ''}
                </div>
            </div>
        )
    }
}
export default Peli