
import '../../../../../styles/Dados.css'

import { useState } from 'react';

function Dados(props) {
    const [name, setName] = useState("");
    const [erro, setErro] = useState(false);

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {  //Manipulando o envio
        event.preventDefault(); //Mantem os dados na tela
        { name === '' ? setErro(true) : setErro(false) }
        console.log(name)
    }
    return (
        <div className='father'>
            <div class={`container ${props.position}`}>
                <div class="circle">
                    <div class="elementQuestion">
                        <p>Elemento</p>
                    </div>
                </div>
                    <div class={`${props.space} response`}>
                        <div class="text">
                            <h3>Escreva somente o nome do elemento.</h3>
                            <h3>Por exemplo: "Alumínio"</h3>
                        </div>
                        <form class="input" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="text"
                                value={name}
                                onChange={handleChange} />
                            {erro && <p id="alertErro">Por favor, preencha o campo.</p>}
                            {/* O && está renderizando o erro somente quando é TRUE */}
                            <div class="button">
                                <button
                                    type="submit"
                                    value="Submit"
                                    disabled={name.trim() === ''}
                                >Conferir</button>
                            </div>
                        </form>
                    </div>
            </div >
        </div>
    )
}

export default Dados;