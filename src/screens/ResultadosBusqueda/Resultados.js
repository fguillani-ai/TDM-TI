import React, { Component } from 'react';
import Peli from '../../components/Peli/Peli';

class ResultadosBusqueda extends Component {
  constructor(props){
    super(props);
    this.state = {
      resultados: []
    }
  }

  componentDidMount(){
    const textoBuscado = this.props.match.params.nombre;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=bbc2b643eedd50b8f9a23d74f10b0d9e&language=es-ES&query=${textoBuscado}`)
      .then(response => response.json())
      .then(data => this.setState({ resultados: data.results }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <>
        <h1>Resultados de búsqueda</h1>

        {this.state.resultados.length === 0 ?
          <p>Cargando...</p>
        :
          <section className="contenedor-peliculas">
            {this.state.resultados.map((pelicula, idx) => (
              <Peli
                key={pelicula.title + idx}
                id={pelicula.id}
                title={pelicula.title}
                imagen={pelicula.poster_path}
                puntuacion={pelicula.vote_average}
                estreno={pelicula.release_date}
                description={pelicula.overview}
              />
            ))}
          </section>
        }
      </>
    );
  }
}

export default ResultadosBusqueda;