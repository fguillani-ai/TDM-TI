import React, { Component } from 'react';
import Peli from '../../components/Peli/Peli';

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculasFavoritas: [],
      seriesFavoritas: []
    };
  }

  componentDidMount() {
    let haySesion = localStorage.getItem('sesion');
    
    if (haySesion === null) {
      this.props.history.push('/');
      return;
    }

    let favoritosStorage = localStorage.getItem('favoritos');
    
    if (favoritosStorage !== null) {
      let favoritosArray = JSON.parse(favoritosStorage);
      
      favoritosArray.forEach(id => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bbc2b643eedd50b8f9a23d74f10b0d9e&language=es-ES`)
          .then(response => response.json())
          .then(data => {
            this.setState({
              peliculasFavoritas: this.state.peliculasFavoritas.concat(data)
            });
          })
          .catch(error => console.log(error));
      });
    }
  }

  borrarFavorito(id) {
    let favoritosStorage = localStorage.getItem('favoritos');
    let favoritosArray = JSON.parse(favoritosStorage);
    
    let nuevosFavoritos = favoritosArray.filter(favId => favId !== id);
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));

    let peliculasActualizadas = this.state.peliculasFavoritas.filter(pelicula => pelicula.id !== id);
    
    this.setState({
      peliculasFavoritas: peliculasActualizadas
    });
  }

  render() {
    return (
      <>
        <h2>Películas Favoritas</h2>
        <section className="contenedor-peliculas">
          {this.state.peliculasFavoritas.length > 0 ? (
            this.state.peliculasFavoritas.map((pelicula, idx) => (
              <Peli 
                key={pelicula.title + idx}
                id={pelicula.id}
                title={pelicula.title}
                imagen={pelicula.poster_path}
                puntuacion={pelicula.vote_average}
                estreno={pelicula.release_date}
                description={pelicula.overview}
                borrar={() => this.borrarFavorito(pelicula.id)}
              />
            ))
          ) : (
            <p> No tienes películas en favoritos. </p>
          )}
        </section>

        <h2>Series Favoritas</h2>
        <section className="contenedor-peliculas">
        <p> No tienes series en favoritos.</p>
        </section>
      </>
    );
  }
}

export default Favoritos;