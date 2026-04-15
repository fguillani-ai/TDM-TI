import { Link } from "react-router-dom";

function Menu(props){
    return(
        <li className={props.className}><Link to={props.ruta}>{props.elemento}</Link></li>
    )
}
export default Menu;