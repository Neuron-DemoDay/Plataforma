import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './containers/Dashboard/Dashboard'
import Cronograma from './containers/Cronograma/Cronograma'
import Biologia from './containers/Aulas/Materias/Biologia/Biologia'
import SideBar from './components/SideBar/SideBar'
import User from './components/User/User'
import Aulas from './containers/Aulas/Aulas'
import Quimica from './containers/Aulas/Materias/Quimica/Quimica'
import Fisica from './containers/Aulas/Materias/Fisica/Fisica'
import Matematica from './containers/Aulas/Materias/Matematica/Matematica'
import Historia from './containers/Aulas/Materias/Historia/Historia'
import Geografia from './containers/Aulas/Materias/Geografia/Geografia'
import Filosofia from './containers/Aulas/Materias/Filosofia/Filosofia'
import Portugues from './containers/Aulas/Materias/Portugues/Portugues'
import Ingles from './containers/Aulas/Materias/Ingles/Ingles'
import Redacao from './containers/Aulas/Materias/Redacao/Redacao'
import Dados from './containers/Aulas/Materias/Quimica/Game/Tabela Periodica/Dados'
import QuizQuimica from './containers/Aulas/Materias/Quimica/Game/QuizQuimica/QuimicaQuiz'
import QuizPortugues from './containers/Aulas/Materias/Portugues/Games/PortuguesQuiz/QuizPortugues'
import QuizMatematica from './containers/Aulas/Materias/Matematica/Games/QuizMatematica'
import QuizIngles from './containers/Aulas/Materias/Ingles/Games/QuizIngles'
import QuizHistoria from './containers/Aulas/Materias/Historia/Games/QuizHistoria'
import QuizGeografia from './containers/Aulas/Materias/Geografia/Games/QuizGeografia'
import QuizFisica from './containers/Aulas/Materias/Fisica/Games/QuizFisica'
import QuizFilosofia from './containers/Aulas/Materias/Filosofia/Games/QuizFilosofia'
import QuizBiologia from './containers/Aulas/Materias/Biologia/Games/QuizBiologia'
import QuizRedacao from './containers/Aulas/Materias/Redacao/Games/QuizRedação'
import Puzzle from './containers/Aulas/Materias/Matematica/Games/PuzzleMatematica'
import JogoDePalavras from './containers/Aulas/Materias/Biologia/Games/PalavrasBiologia'


function App() {
  return (
    <body>
      
    <BrowserRouter>
      <div className="container">
        <div className="user-Header">
          <User />
        </div>
       <div className="main-Content">
         <div className="side-Bar">
          <SideBar />
        </div>
        <div className="content">
          <Routes>
            {/* Pages Side bar */}
            <Route exact path='/' Component={Dashboard} />
            <Route path='/Cronograma' Component={Cronograma} />
            <Route path='/Aulas' Component={Aulas} />
            {/* Materias */}
            <Route path='/Aulas/Materias/Quimica' Component={Quimica}/>
            <Route path='/Aulas/Materias/Biologia' Component={Biologia}/>
            <Route path='/Aulas/Materias/Fisica' Component={Fisica}/>
            <Route path='/Aulas/Materias/Matematica' Component={Matematica}/>
            <Route path='/Aulas/Materias/Historia' Component={Historia}/>
            <Route path='/Aulas/Materias/Geografia' Component={Geografia}/>
            <Route path='/Aulas/Materias/Filosofia' Component={Filosofia}/>
            <Route path='/Aulas/Materias/Portugues' Component={Portugues}/>
            <Route path='/Aulas/Materias/Ingles' Component={Ingles}/>
            <Route path='/Aulas/Materias/Redacao' Component={Redacao}/>
            {/* Quiz */}
            <Route path='/Aulas/Quimica/Game/QuizQuimica' Component={QuizQuimica}/>
            <Route path='/Aulas/Portugues/Games/QuizPortugues' Component={QuizPortugues}/>
            <Route path='/Aulas/Matematica/Games/QuizMatematica' Component={QuizMatematica}/>
            <Route path='/Aulas/Ingles/Games/QuizIngles' Component={QuizIngles}/>
            <Route path='/Aulas/Historia/Games/QuizHistoria' Component={QuizHistoria}/>
            <Route path='/Aulas/Geografia/Games/QuizGeografia' Component={QuizGeografia}/>
            <Route path='/Aulas/Fisica/Games/QuizFisica' Component={QuizFisica}/>
            <Route path='/Aulas/Filosofia/Games/QuizFilosofia' Component={QuizFilosofia}/>
            <Route path='/Aulas/Materias/Biologia/Games/QuizBiologia' Component={<QuizBiologia/>}/>
            <Route path='/Aulas/Redacao/Games/QuizRedacao' Component={QuizRedacao}/>
            {/* OutrosJogos */}
            <Route path='/Aulas/Quimica/Game/Dados' Component={Dados}/>
            <Route path='/Aulas/Matematica/Games/Puzzle' Component={Puzzle}/>
            <Route path='/Aulas/Biologia/Games/PalavrasBiologia' Component={JogoDePalavras}/>

          </Routes>
        </div>
       </div>
      </div>
    </BrowserRouter>
    </body>
  );
}

export default App
