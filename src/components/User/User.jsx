import config from '../../assets/config.png'
import notifications from '../../assets/notifications.png'
import Jaja from '../../assets/Jaja.png'
import more from '../../assets/more.png'
import mode from '../../assets/mode.png'
import '../../styles/User.css'


function User() {
    return (
        <div className="barraUser">
            <img src={config.png} alt="" />
            <img src={notifications.png} alt="" />
            <div className="profile">
                <img src={Jaja.png} alt="" />
                <div className="info">
                    <p>Joilson da Silva</p>
                    <p>Major 26</p>
                </div>
            </div>
            <img src={mode.png} alt="" />
        </div>
    )
}

export default User;