import Peli from "../Peli/Peli";
import "./PPopulares.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PPopulares (){

    const [datos, setDatos] = useState([]);
    const [textoABuscar, setTextoABuscar] = useState('');
    const [pagina, setPagina] = useState(1);

    function enviar(evento){
        evento.preventDefault();
    }

    function busqueda(evento){
        setTextoABuscar(evento.target.value);
    }

    function filtroP(textoAFiltrar){
        return datos.filter(pelicula =>
            pelicula.title.toLowerCase().includes(textoAFiltrar.toLowerCase())
        );
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bbc2b643eedd50b8f9a23d74f10b0d9e&language=es-ES&page=1`)
            .then(response => response.json())
            .then(data => {
                setDatos(data.results.slice(0, 4));
                setPagina(1);
            })
            .catch(error => console.log(error));
    }, []);

    function botonB(nombre){
        setDatos(datos.filter(p => p.id !== nombre));
    }

    return(
        <>
            <section className="row cards all-movies">
                {datos.length === 0 ?
                    <h3>Cargando...</h3> : 
                    filtroP(textoABuscar).map((dato, idx) => 
                        <Peli 
                            key={dato.id + idx} 
                            imagen={dato.poster_path} 
                            title={dato.title} 
                            description={dato.overview} 
                            puntuacion={dato.vote_average}
                            estreno={dato.release_date}
                            id={dato.id}
                            borrar={() => botonB(dato.id)}
                        />
                    )
                }
            </section>

            <button className='btn btn-info'>
                <Link to={`/vermaspp`}>Ver todas las peliculas populares</Link>
            </button>
        </>
    )
}

export default PPopulares;