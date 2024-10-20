import { Link } from "react-router-dom"
import logoBranca from '../../assets/logoBranca.png'
import '../../styles/SideBar.css'

function SideBar(){
    return(
        <div className="side-bar">
        <aside>
            <img src={logoBranca} alt="" />
        <nav>
            <ul>
                <li>
                    <Link to="/" className="link-name">Dashboard</Link>
                </li>
                <li>
                    <Link to="/Cronograma" className="link-name">Cronograma</Link>
                </li>
                <li>
                    <Link to="/Aulas" className="link-name">Aulas Imersivas</Link>
                </li>
                <li>
                    <Link to="/Intercambios" className="link-name">Intercambio</Link>
                </li>
            </ul>
        </nav>
        </aside>
        </div>
    )
}

export default SideBar;