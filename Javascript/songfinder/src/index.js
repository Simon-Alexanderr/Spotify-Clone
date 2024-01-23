import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Login from './pages/Login';
import Search from './pages/Search';
import Signup from './pages/Signup';
import './CSS/style.css'

const router = createBrowserRouter([
  {path:"/",
  element:<App/>
},
{path:"/Home",
element:<Home/>
},
{path:"/Login",
element:<Login/>
},
{path:"/Search",
element:<Search/>},
{path:"/Signup",
element:<Signup/>}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
