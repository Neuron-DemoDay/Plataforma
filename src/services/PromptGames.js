export const promptGames = (quantidade,tema,estruturaResposta) => 
    `Busque aleatoriamente por ${quantidade} ${tema}. 
    Coloque o elemento em 'element' e a resposta em 'answer' mantendo o seguinte formato JSON, 
    sem adicionar nenhum outro texto, explicação ou comentário na resposta.
{
    ${estruturaResposta}
}`