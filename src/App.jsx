import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './containers/Dashboard/Dashboard'
import Cronograma from './containers/Cronograma/Cronograma'
import AulasImersivas from './containers/Aulas/AulasImersivas'
import Intercambio from './containers/Intercâmbio/Intercambio'
import SideBar from './components/SideBar/SideBar'
import User from './components/User/User'
import Start from './containers/Aulas/Games/Quimica/TabelaPeriodica/Start'
import Regras from './components/RegrasJogos/Regras'
import Quiz from './containers/Aulas/Games/Quiz/Quiz'


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
            <Route exact path='/' Component={Dashboard} />
            <Route path='/Cronograma' Component={Cronograma} />
            <Route path='/Aulas' Component={AulasImersivas} />
            <Route path='/Intercambios' Component={Intercambio} />
            <Route path='/Aulas/Games/Quimica' Component={Start} />
            <Route path='/Aulas/Games/Quiz' Component={Quiz}/>
          </Routes>
        </div>
       </div>
      </div>
    </BrowserRouter>
    </body>
  );
}

export default App
