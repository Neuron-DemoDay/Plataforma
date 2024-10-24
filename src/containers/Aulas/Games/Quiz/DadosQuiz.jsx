

function DadosQuiz(){
    return(
        <div className="containerQuiz">

            <h1>Que comecem os jogos!</h1>
            <div class="quiz">
                <h2 id="question">As questões vão ficar aqui</h2>
                <h2 id="aproved"></h2>
                <div id="answer-buttons">
                    <button class="btn">Resposta 1</button>
                    <button class="btn">Resposta 2</button>
                    <button class="btn">Resposta 3</button>
                    <button class="btn">Resposta 4</button>
                </div>
                <button id="next-btn">Próxima</button>
            </div>
            <footer>
                <div class="total-questions">
                    <span id="currentQuestionIndex"></span>
                </div>
            </footer>
        </div>
    )
}

export default DadosQuiz;