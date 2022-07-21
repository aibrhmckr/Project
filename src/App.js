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
  const [theme,setTheme]=useState(localStorage.getItem("theme"))
  useEffect(() => {
    setIsLog(localStorage.getItem("loggd"));
  }, []);

  return (
    <div>
      <Routes>
        <Route element={<ProtectedRoutes isLog={isLog} setIsLog={setIsLog} theme={theme} setTheme={setTheme}/>}>
        <Route path="/login" element={<Login setIsLog={setIsLog} theme={theme} setTheme={setTheme}/>} />

        </Route>

        <Route element={<ProtectedLogin isLog={isLog} setIsLog={setIsLog} theme={theme} setTheme={setTheme}/>}>
          <Route path="/" element={<Home setIsLog={setIsLog} theme={theme} setTheme={setTheme}/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
