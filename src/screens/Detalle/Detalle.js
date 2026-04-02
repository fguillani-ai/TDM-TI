import React, { Component } from "react";

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: null
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bbc2b643eedd50b8f9a23d74f10b0d9e&language=es-ES`)
            .then(response => response.json())
            .then(data => this.setState({ pelicula: data }))
            .catch(error => console.log(error));
    }

    render() {
        if (this.state.pelicula === null) {
            return <h2>Cargando detalle...</h2>;
        }

        return (
            <>
                <h1>CINE HUB</h1>
                <img src={`https://image.tmdb.org/t/p/w342${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title} />
                <h2>{this.state.pelicula.title}</h2>
                <h4>Puntuación: {this.state.pelicula.vote_average} estrellas</h4>
                <h4>Estreno: {this.state.pelicula.release_date}</h4>
                <p>{this.state.pelicula.overview}</p>
                <p>Espero que te haya interesado este peliculón!!</p>
            </>
        );
    }
}

export default Detalle;