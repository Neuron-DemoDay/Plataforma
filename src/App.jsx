import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './containers/Dashboard/Dashboard'
import Cronograma from './containers/Cronograma/Cronograma'
import AulasImersivas from './containers/Aulas/AulasImersivas'
import Intercambio from './containers/Intercâmbio/Intercambio'
import SideBar from './components/NavBar/SideBar'
import User from './components/User/User'
import Start from './containers/Aulas/Games/Quimica/TabelaPeriodica/Start'


function App() {
  return (
    <BrowserRouter>
      <div className="user">
        <User />
      </div>
      <div className="content">
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="routes">
          <Routes>
            <Route exact path='/' Component={Dashboard} />
            <Route path='/Cronograma' Component={Cronograma} />
            <Route path='/Aulas' Component={AulasImersivas} />
            <Route path='/Intercambios' Component={Intercambio} />
            <Route path='/Aulas/Games/Quimica' Component={Start}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
