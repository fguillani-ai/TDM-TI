function Usuario(props){
    return(
        <li>{props.nombre} <img src={props.foto} alt=""/></li>
    )
}
export default Usuario