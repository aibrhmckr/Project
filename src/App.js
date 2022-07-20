import Login from "./views/Login";
import React, { useEffect, useState } from "react";
import Home from "./views/Home";
//import { useSelector } from "react-redux";

import { Route, Routes} from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import ProtectedLogin from "./ProtectedLogin";

function App() {
  //const appin = useSelector((state) => state.Log.value);
  //const Epost = useSelector((state) => state.Log.Epost);

  const [isLog, setIsLog] = useState(localStorage.getItem("loggd"));
  useEffect(() => {
    setIsLog(localStorage.getItem("loggd"));
  }, []);
  return (
    <div>
      <Routes>
        <Route element={<ProtectedRoutes isLog={isLog} setIsLog={setIsLog} />}>
        <Route path="/login" element={<Login setIsLog={setIsLog} />} />

        </Route>

        <Route element={<ProtectedLogin isLog={isLog} setIsLog={setIsLog} />}>
          <Route path="/" element={<Home setIsLog={setIsLog} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
