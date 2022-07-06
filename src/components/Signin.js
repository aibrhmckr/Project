import { useState } from "react";
import "./Signin.css";

const Signin = () => {

  const [epost,setEpost]=useState("");
  const[password,setPassword]=useState("");

  //console.log(epost," ",password)

  return (
    <div className="user_info">

        <div >
          <b>E-Posta</b>
          <input className="e-post__field" onChange={(event)=>{
            setEpost(event.target.value);
          }}/>
        </div>

        <div >
          <b>Şifre</b>
          <input className="password__field" type="password"onChange={(event)=>{
            setPassword(event.target.value);
          }}/>
        </div>
        <button className="login_button" onClick={()=>{

        }}><b>Giriş Yap</b></button>
    </div>
  );
};
export default Signin;
