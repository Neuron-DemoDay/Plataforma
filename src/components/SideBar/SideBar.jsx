import { Link } from "react-router-dom"
import logoBranca from '../../assets/logoBranca.png'
import { GoHomeFill } from "react-icons/go";
import '../../styles/SideBar.css'
import { MdOutlineCalendarViewMonth } from "react-icons/md";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";




function SideBar(){
    return(
        <div className="side-bar">
        <aside>
            <img src={logoBranca} alt="" />
        <nav>
            <ul>
                <li>
                    <Link to="/" className="link-name"><GoHomeFill style={{fontSize:'5vh'}}/></Link>
                </li>
                <li>
                    <Link to="/Cronograma" className="link-name"><MdOutlineCalendarViewMonth style={{fontSize:'5vh'}}/>
                    </Link>
                </li>
                <li>
                    <Link to="/Aulas" className="link-name"><BsJournalBookmarkFill style={{fontSize:'5vh'}}/>
                    </Link>
                </li>
                <li>
                    <Link to="/Intercambios" className="link-name"><BiWorld style={{fontSize:'5vh'}}/>
                    </Link>
                </li>
            </ul>
        </nav>
        </aside>
        </div>
    )
}

export default SideBar;