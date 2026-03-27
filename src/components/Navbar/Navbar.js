import Menu from "../Menu/Menu"
import Usuario from "../Usuario/Usuario"

function Navbar() {
    return(
        <nav>
        <ul className="main-nav">
            <Menu elemento='Admin'/>
            <Menu elemento= 'Pages'/>
            <Menu elemento= 'Charts'/>
            <Menu elemento= 'Tables'/>
        </ul>
        <ul className="user">
            <Usuario nombre= 'Walter White' foto="./img/user.jpg"/>
        </ul>
        </nav>
    )
}
export default Navbar