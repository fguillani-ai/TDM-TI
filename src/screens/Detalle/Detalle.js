import React, { Component } from "react";
import Navbar from '../../components/Navbar/Navbar';
import Cookies from 'universal-cookie';

let cookie = new Cookies()

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: null,
      esFavorito: false,
      logueado:false,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    let usuario = cookie.get('sesion')
    this.setState({ logueado: usuario ? true : false })

  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bbc2b643eedd50b8f9a23d74f10b0d9e&language=es-ES`)      
      .then(response => response.json())
      .then(data => this.setState({ pelicula: data }))
      .catch(error => console.log(error));

    let favoritosStorage = localStorage.getItem('favoritos');
    if (favoritosStorage !== null) {
      let favoritosArray = JSON.parse(favoritosStorage);
      let estaEnFavoritos = favoritosArray.filter(favId => favId === id);
      if (estaEnFavoritos.length > 0) {
        this.setState({ esFavorito: true });
      }
    }
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
    if (this.state.pelicula === null) {
      return <h2>Cargando detalle...</h2>;
    }

    return (
      <>
        <Navbar />
        <h1>UdeSA Movies</h1>
        <h2 className='alert alert-primary' >{this.state.pelicula.title}</h2>
        <section className='row'>
          <img className='col-md-6' src={ `https://image.tmdb.org/t/p/w342${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title} />
          <section className='col-md-6 info'>
            <h4 className='mt-0'>Puntuación: {this.state.pelicula.vote_average} estrellas</h4>
            <h4 className='mt-0 mb-0'>Estreno: {this.state.pelicula.release_date}</h4>
            <h4 className='mt-0 mb-0 length'>Duración: {this.state.pelicula.runtime} minutos</h4>
            <ul>
              Géneros:
              {this.state.pelicula.genres.map((genero, idx) => (
                <li key={genero.name + idx}>{genero.name}</li>
              ))}
            </ul>
            <p>{this.state.pelicula.overview}</p>
             {this.state.logueado ? <button className='btn alert-info' onClick={() => this.agregarQuitarFavoritos(this.state.pelicula.id)}>
                {this.state.esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos ♥️'}</button> : ''}
          </section>       
        </section>
      </>
    );
  }
}

export default Detalle;