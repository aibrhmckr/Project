import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = ({ isLog, setIsLog, theme, setTheme }) => {
  return isLog === "false" ? (
    <Outlet setIsLog={setIsLog} theme={theme} setTheme={setTheme} />
  ) : (
    <Navigate to="/" setIsLog={setIsLog} theme={theme} setTheme={setTheme} />
  );
};
export default ProtectedRoutes;
