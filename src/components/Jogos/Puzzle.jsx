
import './Puzzle.css'

function PuzzleContainers({ posicao, equacao, disabled, value, onChange, onClick }) {


    return (
        <div className='puzzle'>
            <section class={posicao}>
                <div id={`box${posicao[0].toUpperCase() + posicao.substring(1)}`}>
                    <h2>{equacao}</h2>
                    <input type="text" id={`response${posicao[0].toUpperCase() + posicao.substring(1)}`}
                        placeholder="Digite sua resposta"
                        value={value}
                        onChange={onChange} />
                    <button onClick={onClick}
                        disabled={disabled}>Enviar</button>
                </div>
            </section>
        </div>
    )
}

export default PuzzleContainers