import Login from "./views/Login";
//import { routes } from "./routes";
import React, {useEffect, useState } from "react";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import { useSelector } from "react-redux";
import {Users} from "./api/gecici"

function App() {
  const appin = useSelector((state)=>state.Log.value)
  const Epost = useSelector((state)=>state.Log.Epost)

  const [isLog,setIsLog]=useState(localStorage.getItem("loggd"));
  useEffect(() => {

    setIsLog(localStorage.getItem("loggd"))
    console.log(typeof localStorage.getItem("loggd"))
    
  }, [])
  console.log(localStorage.getItem("epost"))
  console.log(localStorage.getItem("loggd"))
  return (
    <div>
       {isLog==="true"?<Home setIsLog={setIsLog}/>:<Login setIsLog={setIsLog}/>} 
    </div>
  );
}

export default App;
