import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import './index.css'

import ErrorPage from "./error-page";
import Dashboard from './containers/Dashboard/Dashboard'
import Cronograma from './containers/Cronograma/Cronograma'
import AulasImersivas from './containers/Aulas/AulasImersivas'
import Intercambio from './containers/Intercâmbio/Intercambio'
import SideBar from './components/SideBar/SideBar'
import Start from './containers/Aulas/Games/Quimica/TabelaPeriodica/Start'
import Quiz from './containers/Aulas/Games/Quiz/Quiz'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideBar/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/cronograma",
        element: <Cronograma />,
      },
      {
        path: "/aulas",
        element: <AulasImersivas />,
      },
      {
        path: "/intercambios",
        element: <Intercambio />,
      },
      {
        path: "/aulas/games/quimica",
        element: <Start />,
      },
      {
        path: "/aulas/games/quiz",
        element: <Quiz />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
