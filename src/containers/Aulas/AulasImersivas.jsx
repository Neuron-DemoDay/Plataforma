import { Link } from 'react-router-dom';
import '../../styles/AulasImersivas.css'

function AulasImersivas() {
    return (
        <div className="aulas">
            <h1>Aulas</h1>
            <div className="blocos">
                <div className="conteudo"></div>
                <div className="laterais">
                    <div className="conteudoAtual"></div>
                    <div className="conteudoAtual games">
                        <h2>Aprenda de forma Divertida!</h2>
                        <ul>
                            <li><Link to="/Aulas/Games/Quimica" className='game'>Jogo 1</Link></li>
                            <li><Link to="" className='game'>Jogo 2</Link></li>
                            <li><Link to="" className='game'>Jogo 3</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AulasImersivas;