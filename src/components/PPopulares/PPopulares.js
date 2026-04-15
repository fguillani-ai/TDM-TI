import Peli from "../Peli/Peli";
import "./PPopulares.css"
import { Component } from "react";
import { Link } from "react-router-dom";

class PPopulares extends Component {
    constructor(props) {
        super(props);
        this.state={
            datos:[],
            textoABuscar:'',
            pagina: 1,
            cantidad: 4,
        } 
    }
    enviar(evento){
        evento.preventDefault();
    }
    busqueda(evento){
        this.setState({
            textoABuscar: evento.target.value
        });
    }
    filtroP(textoAFiltrar){
      return this.state.datos.filter(pelicula =>
          pelicula.title.toLowerCase().includes(textoAFiltrar.toLowerCase())
      );
  }
    componentDidMount(){
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bbc2b643eedd50b8f9a23d74f10b0d9e&language=es-ES&page=1`)
            .then (response=> response.json())
            .then (data => this.setState({
                datos:data.results.slice(0,this.state.cantidad),
                pagina: 1,
                }
            ))
            .catch(error => console.log(error));
    }
    botonB(nombre){
        this.setState({
            datos: this.state.datos.filter(p => p.id !== nombre)
        });
    }

    render(){
        return(
            <>
                <section className="row cards all-movies">
                    {this.state.datos.length === 0 ?
                    <h3>Cargando...</h3> : 
                    this.filtroP(this.state.textoABuscar).map((dato,idx) => 
                    <Peli key={dato + idx} 
                        imagen={dato.poster_path} 
                        title={dato.title} 
                        description={dato.overview} 
                        puntuacion={dato.vote_average}
                        estreno={dato.release_date}
                        id={dato.id}
                        borrar={()=>this.botonB(dato.id)}/>
                )
            }
                </section>
                <button className= 'btn btn-info'><Link to={`/vermaspp`}>Ver todas las peliculas populares</Link></button>
            </>
        )
    }
}
export default PPopulares