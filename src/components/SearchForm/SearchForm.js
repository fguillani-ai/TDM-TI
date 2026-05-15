import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

function SearchForm (props) {

    const [textoBuscado, setTextoBuscado] = useState("")
    const [tipo, setTipo] = useState('movie')

    function controlarInput(evento){
        setTextoBuscado(evento.target.value)
    }

    function controlarRadio(evento){
        setTipo(evento.target.value)
    }

    function enviarFormulario(evento){
        evento.preventDefault();

        props.history.push(
            `/resultadodebusqueda/${tipo}/${textoBuscado}`
        );
    }

    return (
        <form className='search-form' onSubmit={enviarFormulario}>
            <input type="text" placeholder="Buscar personaje" value={textoBuscado} onChange={controlarInput} />
            <div className='radiob'>
                <label>
                    <input type="radio" name="tipo" value="movie" checked={tipo === "movie"} onChange={controlarRadio} />
                    Películas
                </label>
                <label>
                    <input type="radio" name="tipo" value="tv" checked={tipo === "tv"} onChange={controlarRadio} />
                    Series
                </label>
            </div>
            <button className='btn-success btn-sm' type="submit">
                Buscar
            </button>
        </form>
    );
}

export default withRouter(SearchForm);