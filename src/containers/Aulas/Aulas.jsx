import './Aulas.css'
import { GiChemicalDrop } from "react-icons/gi";
import { LiaMicroscopeSolid } from "react-icons/lia";
import { GiAtom } from "react-icons/gi";
import { TbMathSymbols } from "react-icons/tb";
import { BsHourglassSplit } from "react-icons/bs";
import { BsGlobeAmericas } from "react-icons/bs";
import { TfiThought } from "react-icons/tfi";
import { TbTextGrammar } from "react-icons/tb";
import { RiEnglishInput } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";
import Disciplina from '../../components/Buttons/ButtonDisciplina/Disciplina';


function Aulas() {
    return (
        <div className="tela">
            <div className="cienciasExatas">
                <div className="titulo"><span>Ciências Exatas</span></div>
                <div className="materias">
                    <Disciplina
                        classe={"biologia"}
                        link={'/Aulas/Materias/Biologia'}
                        styleComp={'#29CC39'}
                        icon={<LiaMicroscopeSolid />}
                        disciplina={'Biologia'}
                    />
                    <Disciplina
                        classe={"quimica"}
                        link={'/Aulas/Materias/Quimica'}
                        styleComp={'#E9488C'}
                        icon={<GiChemicalDrop />}
                        disciplina={'Quimica'}
                    />
                    <Disciplina
                        classe={"fisica"}
                        link={'/Aulas/Matérias/Fisica'}
                        styleIcon={'#2EE6CA'}
                        icon={<GiAtom />}
                        disciplina={'Fisica'}
                    />
                    <Disciplina
                        classe={"matematica"}
                        link={'/Aulas/Matérias/Matematica'}
                        styleComp={'#FE5F55'}
                        icon={<TbMathSymbols />}
                        disciplina={'Matematica'}
                    />
                </div>
            </div>
            <div className="cienciasHumanas">
                <div className="titulo"><span>Ciências Humanas</span></div>
                <div className="materias">
                    <Disciplina
                        classe={"historia"}
                        link={'/Aulas/Matérias/Historia'}
                        styleComp={'#B40FE7'}
                        icon={<BsHourglassSplit />}
                        disciplina={'Historia'}
                    />
                    <Disciplina
                        classe={"geografia"}
                        link={'/Aulas/Matérias/Geografia'}
                        styleComp={'#33BFFF'}
                        icon={<BsGlobeAmericas />}
                        disciplina={'Geografia'}
                    />
                    <Disciplina
                        classe={"filosofia"}
                        link={'/Aulas/Matérias/Filosofia'}
                        styleComp={'#FFCB33'}
                        icon={<TfiThought />}
                        disciplina={'Filosofia'}
                    />
                </div>
            </div>
            <div className="linguagens">
                <div className="titulo"><span>Linguagens</span></div>
                <div className="materias">
                    <Disciplina
                        classe={"portugues"}
                        link={'/Aulas/Matérias/Portugues'}
                        styleComp={'#CC7429'}
                        icon={<TbTextGrammar />}
                        disciplina={'Portugues'}
                    />
                    <Disciplina
                        classe={"ingles"}
                        link={'/Aulas/Matérias/Ingles'}
                        styleComp={'#0F6DE7'}
                        icon={<RiEnglishInput />}
                        disciplina={'Ingles'}
                    />
                    <Disciplina
                        classe={"redacao"}
                        link={'/Aulas/Matérias/Redacao'}
                        styleComp={'#FF00D0'}
                        icon={<FaRegPenToSquare />}
                        disciplina={'Redação'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Aulas