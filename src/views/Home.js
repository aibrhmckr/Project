import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../components/stores/Log";
import Tasks from "../components/Tasks";
import "./Home.css";
const Home = ({ setIsLog }) => {
  const dispatch = useDispatch();


  const [text,setText]=useState("");
const kullanici = localStorage.getItem("epost")+"#TR28"
    let task=[
    ]
  return (
    <div>
      <button
        onClick={() => {
          dispatch(logout());
          setIsLog("false");
        }}
      >
        Çıkış Yap
      </button>
      <div className="add-group">
        <TextField id="outlined-basic" label="Todo Header" variant="outlined" onChange={(e)=>{setText(e.target.value)}} />
        <button className="task-add" onClick={()=>{
            if(text!==""){
                //console.log(text)
                //console.log(kullanici)
                let list=localStorage.getItem(kullanici)
                task.push(list)
                task.push(text)
                localStorage.removeItem(kullanici)
                localStorage.setItem(kullanici,task)
                console.log(localStorage.getItem(kullanici))
            }
        }}> Add </button>
      </div>

      <div>
        <Tasks></Tasks>
      </div>
    </div>
  );
};
export default Home;
