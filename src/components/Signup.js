import { useDispatch } from "react-redux";
import "./Signup.css"
import { name,surname,epost,password,save } from "./stores/Log";
import { useState } from "react";

const Signup = () => {
  const dispatch = useDispatch();
  const[Name,setName]=useState("");
  const[SurName,setSurname]=useState("");
  const [Epost ,setEpost]=useState("");
  const [Password,setPassword]=useState("");

  return (
    <div className="user_info">

        <div>
          <b>Ad</b>
          <input  className="text-field" onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div >
          <b>Soyad</b>
          <input className="text-field" onChange={(e)=>{setSurname(e.target.value)}}/>
        </div>
        <div >
          <b>E-Posta</b>
          <input className="text-field" onChange={(e) => {setEpost(e.target.value)}}/>
        </div>

        <div >
          <b>Şifre</b>
          <input className="text-field" onChange={(e) => {setPassword(e.target.value)}} />
        </div>
        <button className="signup_button" onClick={()=>{
          dispatch(name(Name))
          dispatch(surname(SurName))
          dispatch(epost(Epost))
          dispatch(password(Password))
          dispatch(save())
        }}>Kaydol</button>
    </div>
  );
};
export default Signup;
