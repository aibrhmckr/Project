
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedLogin = ({ isLog, setIsLog }) => {
  return isLog==="true" ? <Outlet setIsLog={setIsLog} /> : <Navigate to="/login" setIsLog={setIsLog} />;
};
export default ProtectedLogin;
