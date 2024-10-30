
import Cronograma from "./containers/Cronograma/Cronograma"
import Dashboard from "./containers/Dashboard/Dashboard"
import Aulas from "./containers/Aulas/Aulas"
import Intercambio from "./containers/Intercâmbio/Intercambio"
import './index.css'


function App() {
  return (
<body>
<div className="container">
        <div className="user-Header">
          <User />
        </div>
       <div className="main-Content">
         <div className="side-Bar">
          <SideBar />
        </div>
        <div className="content">
          <Dashboard/>
          <Cronograma/>
          <Aulas/>
          <Intercambio/>
        </div>
       </div>
      </div>
</body>
  )
}

export default App
