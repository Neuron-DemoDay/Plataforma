export const promptTabelaPeriodica = `Busque aleatoriamente por 5 elementos da tabela periódica e seus respectivos nomes. Coloque o elemento em 'element' e o nome em 'answer' mantendo o seguinte formato JSON, sem adicionar nenhum outro texto, explicação ou comentário na resposta.
{
    "correspondence": [
        {
            "symbol": "symbol",
            "answer": {
                "name": "name"
            }
        }
    ]
}`