import React, { Component } from "react";

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: null,
      esFavorito: false
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

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

    let haySesion = localStorage.getItem('sesion') !== null;

    return (
      <React.Fragment>
        <h1>CINE HUB</h1>
        <img src={`https://image.tmdb.org/t/p/w342${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title} />
        <h2>{this.state.pelicula.title}</h2>
        <h4>Puntuación: {this.state.pelicula.vote_average} estrellas</h4>
        <h4>Estreno: {this.state.pelicula.release_date}</h4>
        
        <h4>Duración: {this.state.pelicula.runtime} minutos</h4>
        <ul>
          Géneros:
          {this.state.pelicula.genres.map((genero, idx) => (
            <li key={genero.name + idx}>{genero.name}</li>
          ))}
        </ul>

        <p>{this.state.pelicula.overview}</p>

        {haySesion ? (
          <button onClick={() => this.agregarQuitarFavoritos(this.props.match.params.id)}>
            {this.state.esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          </button>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Detalle;