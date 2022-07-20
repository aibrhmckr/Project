
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = ({ isLog, setIsLog }) => {
  return isLog === "false" ? (
    <Outlet setIsLog={setIsLog} />
  ) : (
    <Navigate to="/" setIsLog={setIsLog} />
  );
};
export default ProtectedRoutes;
