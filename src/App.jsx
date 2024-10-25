import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './containers/Dashboard/Dashboard'
import Cronograma from './containers/Cronograma/Cronograma'
import Biologia from './containers/Aulas/Matérias/Biologia/Biologia'
import Intercambio from './containers/Intercâmbio/Intercambio'
import SideBar from './components/SideBar/SideBar'
import User from './components/User/User'
import Quiz from './containers/Aulas/Games/Quiz/Quiz'
import Aulas from './containers/Aulas/Aulas'
import Quimica from './containers/Aulas/Matérias/Quimica/Quimica'
import Fisica from './containers/Aulas/Matérias/Física/Fisica'
import Matematica from './containers/Aulas/Matérias/Matemática/Matematica'
import Historia from './containers/Aulas/Matérias/História/Historia'
import Geografia from './containers/Aulas/Matérias/Geografia/Geografia'
import Filosofia from './containers/Aulas/Matérias/Filosofia/Filosofia'
import Portugues from './containers/Aulas/Matérias/Português/Portugues'
import Ingles from './containers/Aulas/Matérias/Inglês/Ingles'
import Redacao from './containers/Aulas/Matérias/Redação/Redacao'
import Dados from './containers/Aulas/Matérias/Quimica/Game/Tabela Periodica/Dados'


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
            <Route path='/Intercambios' Component={Intercambio} />
            {/* Materias */}
            <Route path='/Aulas/Materias/Quimica' Component={Quimica}/>
            <Route path='/Aulas/Materias/Biologia' Component={Biologia}/>
            <Route path='/Aulas/Matérias/Fisica' Component={Fisica}/>
            <Route path='/Aulas/Matérias/Matematica' Component={Matematica}/>
            <Route path='/Aulas/Matérias/Historia' Component={Historia}/>
            <Route path='/Aulas/Matérias/Geografia' Component={Geografia}/>
            <Route path='/Aulas/Matérias/Filosofia' Component={Filosofia}/>
            <Route path='/Aulas/Matérias/Portugues' Component={Portugues}/>
            <Route path='/Aulas/Matérias/Ingles' Component={Ingles}/>
            <Route path='/Aulas/Matérias/Redacao' Component={Redacao}/>
            {/* Jogos */}
            <Route path='/Aulas/Games/Quiz/Quiz' Component={Quiz}/>
            <Route path='/Aulas/Quimica/Game/Dados' Component={Dados}/>
          </Routes>
        </div>
       </div>
      </div>
    </BrowserRouter>
    </body>
  );
}

export default App
