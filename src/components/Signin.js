import { useState } from "react";
//import { useSelector } from "react-redux";

import { logging,epost,password} from "./stores/Log";
import { useDispatch } from "react-redux";

import "./Signin.css";
import {Users} from "../api/gecici"
import { Link } from "@mui/material";

const Signin = ({setIsLog}) => {
  //const epost = useSelector((state) => state.Log.value.epost);
  //const password = useSelector((state) => state.Log.value.password);

    const [Epost ,setEpost]=useState("");
    const [Password,setPassword]=useState("");
    const dispatch = useDispatch()

    const LoginHandler=()=>{
      dispatch(epost(Epost))
      dispatch(password(Password))
        const user = Users.find(user=>user.epost===Epost && user.password===Password)
        if(user){
          setIsLog("true")
          dispatch(logging())
        }
    }
  return (
    <div className="user_info">
      <div>
        <b>E-Posta</b>
        <input className="e-post__field" onChange={(e) => {
          setEpost(e.target.value)
        }} />
      </div>

      <div>
        <b>Şifre</b>
        <input className="password__field" type="password" onChange={(e) => {
          setPassword(e.target.value)
        }} />
      </div>
      <button
        className="login_button"
        onClick={
          LoginHandler
        }>
        <b>Giriş Yap</b>
      </button>

    </div>
  );
};
export default Signin;
