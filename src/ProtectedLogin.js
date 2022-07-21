
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedLogin = ({ isLog, setIsLog,theme,setTheme }) => {
  return isLog==="true" ? <Outlet setIsLog={setIsLog} theme={theme} setTheme={setTheme}/> : <Navigate to="/login" setIsLog={setIsLog} theme={theme} setTheme={setTheme}/>;
};
export default ProtectedLogin;
