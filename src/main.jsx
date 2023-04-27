import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Componants/Main/Main.jsx';
import Home from './Componants/Home/Home.jsx';
import Football from './Componants/Football/Football.jsx';
import Cricket from './Componants/Cricket/Cricket.jsx';
import Login from './Componants/Login/Login.jsx';
import Signup from './Componants/Signup/Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/football",
        element:<Football></Football>,
        loader:()=>fetch('/football.json')
      },
      {
        path:"/cricket",
        element:<Cricket></Cricket>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
