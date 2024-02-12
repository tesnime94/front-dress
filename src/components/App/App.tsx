import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../login/Login'
import Accueil from '../home/Accueil'
import Inscription from '../inscription/Inscription'
import Dress from '../dress/Dress'
import User from '../user/user'
import AddDress from '../dress/addDress'
import Modify from '../modify/Modify'

import 'bootstrap/dist/css/bootstrap.min.css';
import Purchase from '../purchase/Purchase'
import MainLayout from '../../layouts/MainLayout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Accueil/>
      },
      {
        path: "/inscription",
        element: <Inscription/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/user",
        element: <User/>
      },
      {
        path: "/purchase",
        element: <Purchase/>
      },
      {
        path: "/dress",
        element: <Dress/>
      },
      {
        path: "/addDress",
        element: <AddDress/>
      },
      {
        path: "/modify",
        element: <Modify/>
      },

    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;