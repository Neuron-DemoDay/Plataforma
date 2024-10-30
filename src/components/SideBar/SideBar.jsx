import logoBranca from '../../assets/logoBranca.png'
import '../../styles/SideBar.css'
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { MdViewTimeline } from "react-icons/md";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { FaVideo } from "react-icons/fa";
import User from "../User/User";


function SideBar() {
  return (
    <>
      <User />
      <nav className="navbar">
        <div className="navbar-identidade">
          <img src={logoBranca} alt="Logo" aria-label="Logo da Neuron" />
          <span className='navbar-nome'>Neuron</span>
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink to="/">

              <i><GoHomeFill className="icon" /> </i><span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cronograma">
              <i><MdViewTimeline className="icon" /></i><span>Cronograma</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/aulas">
              <i><FaVideo className="icon" /></i> <span>Aulas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/intercambios">
              <i><PiPaperPlaneTiltFill className="icon" /></i> <span>Intercâmbios</span>
            </NavLink>
          </li>
          <li>
            {/* COLOCAR OUTLET AQUI */}
          </li>

        </ul>
      </nav>
    </>
  )
}

export default SideBar;