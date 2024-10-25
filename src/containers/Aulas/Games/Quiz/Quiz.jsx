import DadosQuiz from "./DadosQuiz";    
import Regras from "../../../../components/RegrasJogos/Regras";    
import './Quiz.css'


function Quiz(){
    return(
    <>
    {/* <Regras
    regra1='Uma vez  que você seleciona a sua resposta, não poderá alterar.' 
    regra2='Se você sair do Quiz após o Start sem o finalizar, perderá todo o progresso.' 
    regra3='Você irá desbloquear o próximo jogo somente se acertar 7 das 10 perguntas.'
    link = ''/> */}
    <DadosQuiz/>
    </>
    )
}

export default Quiz;