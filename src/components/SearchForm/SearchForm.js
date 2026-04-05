import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoBuscado: ''
        };
    }

    controlarInput = (evento) => {
        this.setState({
            textoBuscado: evento.target.value
        });
    }

    enviarFormulario = (evento) => {
        evento.preventDefault();
        this.props.history.push(`/resultadodebusqueda/${this.state.textoBuscado}`);
    }

    render() {
        return (
            <form onSubmit={this.enviarFormulario}>
                <input
                    type="text"
                    placeholder="Buscar personaje"
                    value={this.state.textoBuscado}
                    onChange={this.controlarInput}
                />
                <button type="submit">Buscar</button>
            </form>
        );
    }
}

export default withRouter(SearchForm);