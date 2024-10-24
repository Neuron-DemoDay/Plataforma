import './Regras.css'
import { Link } from 'react-router-dom'

function Regras(props) {
    return (
        <div className="containerRegras">
            <div class="info-title"><span>Algumas regras do Jogo!</span></div>
            <div class="info-list">
                <div class="info">1. {props.regra1}</div>
                <div class="info">2. {props.regra2}</div>
                <div class="info">3. {props.regra3}</div>
            </div>
            <div class="buttons-info">
                <button class="quit"><Link to="/Aulas" className='link-buttons quit'>Sair do Jogo</Link></button>
                <button class="restart"><Link to="/Quiz" className='link-buttons'>Continuar</Link></button>
            </div>
        </div>
    )
}

export default Regras