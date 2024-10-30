import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import './index.css'

import ErrorPage from "./error-page";
import Dashboard from './containers/Dashboard/Dashboard'
import Cronograma from './containers/Cronograma/Cronograma'
import Aulas from './containers/Aulas/Aulas'
import Intercambio from './containers/Intercâmbio/Intercambio'
import SideBar from './components/SideBar/SideBar'

import Quimica from './containers/Aulas/Materias/Quimica/Quimica'
import QuimicaQuiz from './containers/Aulas/Materias/Quimica/Game/QuizQuimica/QuimicaQuiz'
import Start from './containers/Aulas/Materias/Quimica/Game/Tabela Periodica/Start';

import Fisica from './containers/Aulas/Materias/Fisica/Fisica'
import QuizFisica from './containers/Aulas/Materias/Fisica/Games/QuizFisica'

import Biologia from './containers/Aulas/Materias/Biologia/Biologia'
import QuizBiologia from './containers/Aulas/Materias/Biologia/Games/QuizBiologia'
import JogoDePalavras from './containers/Aulas/Materias/Biologia/Games/PalavrasBiologia'

import Matematica from './containers/Aulas/Materias/Matematica/Matematica'
import QuizMatematica from './containers/Aulas/Materias/Matematica/Games/QuizMatematica'
import Puzzle from './containers/Aulas/Materias/Matematica/Games/PuzzleMatematica'

import Historia from './containers/Aulas/Materias/Historia/Historia'
import QuizHistoria from './containers/Aulas/Materias/Historia/Games/QuizHistoria'

import Geografia from './containers/Aulas/Materias/Geografia/Geografia'
import QuizGeografia from './containers/Aulas/Materias/Geografia/Games/QuizGeografia'

import Filosofia from './containers/Aulas/Materias/Filosofia/Filosofia'
import QuizFilosofia from './containers/Aulas/Materias/Filosofia/Games/QuizFilosofia'

import Portugues from './containers/Aulas/Materias/Portugues/Portugues'
import QuizPortugues from './containers/Aulas/Materias/Portugues/Games/PortuguesQuiz/QuizPortugues'

import Ingles from './containers/Aulas/Materias/Ingles/Ingles'
import QuizIngles from './containers/Aulas/Materias/Ingles/Games/QuizIngles'

import Redacao from './containers/Aulas/Materias/Redacao/Redacao'
import QuizRedacao from './containers/Aulas/Materias/Redacao/Games/QuizRedação'


const router = createBrowserRouter([
  {
    path: "/",
    element: <SideBar />,
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
        path: "/Aulas",
        element: <Aulas />,
      },
      {
        path: "/Intercambios",
        element: <Intercambio />,
      },
      // QUIMICA
      {
        path: '/Aulas/Materias/Quimica',
        element: <Quimica />,
      },
      {
        path: "/Aulas/Quimica/Game/Dados",
        element: <Start />,
      },
      {
        path: "/Aulas/Quimica/Game/QuizQuimica",
        element: <QuimicaQuiz />,
      },
      // FISICA
      {
        path: "/Aulas/Materias/Fisica",
        element: <Fisica />,
      },
      {
        path: "/Aulas/Fisica/Games/QuizFisica",
        element: <QuizFisica />,
      },
      // BIOLOGIA
      {
        path: "/Aulas/Materias/Biologia",
        element: <Biologia />,
      },
      {
        path: "/Aulas/Fisica/Games/QuizBiologia",
        element: <QuizBiologia />,
      },
      {
        path: "/Aulas/Biologia/Games/PalavrasBiologia",
        element: <JogoDePalavras />,
      },
      // MATEMATICA
      {
        path: "/Aulas/Materias/Matematica",
        element: <Matematica />,
      },
      {
        path: "/Aulas/Matematica/Games/QuizMatematica",
        element: <QuizMatematica />,
      },
      {
        path: "/Aulas/Matematica/Games/Puzzle",
        element: <Puzzle />,
      },
      // HISTORIA
      {
        path: "/Aulas/Materias/Historia",
        element: <Historia />,
      },
      {
        path: "/Aulas/Historia/Games/QuizHistoria",
        element: <QuizHistoria />,
      },
      // GEOGRAFIA
      {
        path: "/Aulas/Materias/Geografia",
        element: <Geografia />,
      },
      {
        path: "/Aulas/Geografia/Games/QuizGeografia",
        element: <QuizGeografia />,
      },
      // FILOSOFIA
      {
        path: "/Aulas/Materias/Filosofia",
        element: <Filosofia />,
      },
      {
        path: "/Aulas/Fisica/Games/QuizFilosofia",
        element: <QuizFilosofia />,
      },
      // PORTUGUES
      {
        path: "/Aulas/Materias/Portugues",
        element: <Portugues />,
      },
      {
        path: "/Aulas/Portugues/Games/QuizPortugues",
        element: <QuizPortugues />,
      },
      // INGLES
      {
        path: "/Aulas/Materias/Ingles",
        element: <Ingles />,
      },
      {
        path: "/Aulas/Ingles/Games/QuizIngles",
        element: <QuizIngles />,
      },
      // REDACAO
      {
        path: "/Aulas/Materias/Redacao",
        element: <Redacao />,
      },
      {
        path: "/Aulas/Fisica/Games/QuizRedacao",
        element: <QuizRedacao />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
