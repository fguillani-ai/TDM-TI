import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoBuscado: '',
            tipo: 'movie',
        };
    }

    controlarInput = (evento) => {
        this.setState({
            textoBuscado: evento.target.value
        });
    }

    controlarRadio = (evento) => {
        this.setState({
            tipo: evento.target.value
        });
    }

    enviarFormulario = (evento) => {
        evento.preventDefault();
        this.props.history.push(`/resultadodebusqueda/${this.state.tipo}/${this.state.textoBuscado}`);    }

    render() {
        return (
            <form className='search-form' onSubmit={this.enviarFormulario}>
                <input
                    type="text"
                    placeholder="Buscar personaje"
                    value={this.state.textoBuscado}
                    onChange={this.controlarInput}
                />
                <div className = 'radiob'>
                    <label>
                        <input type="radio" name="tipo" value="movie" checked={this.state.tipo === "movie"} onChange={this.controlarRadio}/>
                        Películas
                    </label>

                    <label>
                        <input type="radio" name="tipo" value="tv" checked={this.state.tipo === "tv"} onChange={this.controlarRadio}/>
                        Series
                    </label>
                </div>
                <button className='btn-success btn-sm' type="submit">Buscar</button>
            </form>
        );
    }
}

export default withRouter(SearchForm);