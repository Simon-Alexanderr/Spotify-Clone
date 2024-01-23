import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

export default function App(){
   <Router>
       <Routes>
                <Route index element={<Home />} />
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Login" element={<Login />} />
        </Routes>
    </Router>
}