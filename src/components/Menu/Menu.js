import { Link } from "react-router-dom";

function Menu(props){
    return(
        <li><Link to={props.ruta}>{props.elemento}</Link></li>
    )
}
export default Menu;