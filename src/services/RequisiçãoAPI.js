import axios from "axios";
import { promptTabelaPeriodica } from "../containers/Aulas/Games/Quimica/TabelaPeriodica/PromptTabelaPeriodica";

export const fetchTalkingGemini = async () =>{
    try{
        const response = await axios.post('http://localhost:3000/TalkingWithGemini', {
            prompt: promptTabelaPeriodica
            
        })

        return response.data.correspondence
       
    }
    catch (error) {
        console.error("Erro ao buscar os elementos da API", error)
        throw error
    }
}