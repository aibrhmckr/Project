import Home from "./views/Home";
import Login from "./views/Login";
import React, { useState } from "react";
import {Navigate,Outlet} from "react-router-dom"
const ProtectedRoutes = ()=>{
    const [isLog, setIsLog] = useState(localStorage.getItem("loggd"));

    const isAuth =()=>{
        
    }
    return isLog ? <Home setIsLog={setIsLog}/>:<Login setIsLog={setIsLog}/>
}
export default ProtectedRoutes