import Home from "./views/Home";
import Login from "./views/Login";
import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ISLog } from "./components/stores/Log";
const ProtectedLogin = ({ isLog, setIsLog }) => {
  //let IsLog=localStorage.getItem("loggd")
  return isLog==="true" ? <Outlet setIsLog={setIsLog} /> : <Navigate to="/login" setIsLog={setIsLog} />;
};
export default ProtectedLogin;
