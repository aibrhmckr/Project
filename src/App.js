import Login from "./views/Login";
//import { routes } from "./routes";
import React from "react";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import { useSelector } from "react-redux";
import {Users} from "./api/gecici"

function App() {
  const appin = useSelector((state)=>state.Log.value)
  const Epost = useSelector((state)=>state.Log.Epost)
  return (
    <div>
      {/* {Users.some((eleman)=>(eleman.logged===true))?<Home/>:<Login/>} */}
      <Login/>
    </div>
  );
}

export default App;
/*
        <Router>
          <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/" element={<Home/>}></Route>

          </Routes>
        </Router>

*/
//const epost = useSelector((state) => state.Log.value.epost);