import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/TelaFinal.css'

export const TelaFinal = ({ score, totalQuestions }) => {
    const approved = score > 3;

    return (
        <div className="tela-final-container">
            <div className="tela-final">
                <h1>Resultado Final</h1>
                <p>Pontuação: {score} de {totalQuestions}</p>

                {approved ? (
                    <div className='approved'>
                        <h2>Parabéns! Você passou para o próximo jogo!</h2>
                        <button>
                            <Link to="/aulas">Voltar às Aulas</Link>
                        </button>
                    </div>
                ) : (
                    <div className='reproved'>
                        <h2>Não foi dessa vez, estude um pouco mais para tentarmos novamente!</h2>
                        <button>
                            <Link to="/aulas" className='link-aulas'>Quimica</Link>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
