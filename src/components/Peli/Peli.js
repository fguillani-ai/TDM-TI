import "./Peli.css";
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useState, useEffect } from 'react';

let cookie = new Cookies();

function Peli(props){

    const [logueado, setLogueado] = useState(false);
    const [esFavorito, setEsFavorito] = useState(false);
    const [mostrar, setMostrar] = useState(false);

    useEffect(() => {
        let usuario = cookie.get('sesion');
        let id = props.id;

        let favoritosStorage = localStorage.getItem('favoritos');
        let favoritosArray = favoritosStorage !== null ? JSON.parse(favoritosStorage) : [];

        setEsFavorito(favoritosArray.includes(id) ? true : false);
        setLogueado(usuario ? true : false);
    }, []);

    function agregarQuitarFavoritos(id) {
        let favoritosStorage = localStorage.getItem('favoritos');
        let favoritosArray = [];

        if (favoritosStorage !== null) {
            favoritosArray = JSON.parse(favoritosStorage);
        }

        let estaEnFavoritos = favoritosArray.filter(favId => favId === id);

        if (estaEnFavoritos.length > 0) {
            let nuevosFavoritos = favoritosArray.filter(favId => favId !== id);
            localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
            setEsFavorito(false);
        } else {
            favoritosArray.push(id);
            localStorage.setItem('favoritos', JSON.stringify(favoritosArray));
            setEsFavorito(true);
        }
    }

    return (
        <div className="single-card-movie">
            <img 
                className='card-img-top' 
                src={`https://image.tmdb.org/t/p/w342${props.imagen}`} 
                alt={props.title} 
            />

            <div className="cardBody">
                <h2 className='card-title'>{props.title}</h2>
                <p>{props.puntuacion}</p>
                <p>{props.estreno}</p>

                {mostrar ? <p>{props.description}</p> : null}

                <p className='btn btn-primary'>
                    <Link to={`/detalle/${props.id}`}>Ver detalle</Link>
                </p>

                {logueado ? 
                    <button 
                        className='btn alert-info' 
                        onClick={() => agregarQuitarFavoritos(props.id)}
                    >
                        {esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos ♥️'}
                    </button> 
                : ''}
            </div>
        </div>
    )
}

export default Peli;