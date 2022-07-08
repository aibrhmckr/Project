import Home from "./views/Home";
import Login from "./views/Login";
import React, { useState } from "react";
import {Navigate,Outlet} from "react-router-dom"
const ProtectedRoutes = ({isLog,setIsLog})=>{
    //let IsLog=localStorage.getItem("loggd")
    let bool=false;
        if(isLog==="true"){
            bool=true;
        }
    return bool ? <Home setIsLog={setIsLog}/>:<Login setIsLog={setIsLog}/>
}
export default ProtectedRoutes
{/* <Home setIsLog={setIsLog}/>:<Login setIsLog={setIsLog}/> */}