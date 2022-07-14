import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../components/stores/Log";
import Tasks from "../components/Tasks";
import "./Home.css";
const Home = ({ setIsLog }) => {
  const dispatch = useDispatch();


  const [text,setText]=useState("");
const kullanici = localStorage.getItem("epost")+"#TR28"
    let task=[]

    const [departments,setDepartments] = useState([])
    useEffect(() => {
      fetchData();
    }, [])
    console.log(departments)

const fetchData=async()=>{
  await fetch("http://localhost:3004/departments")
  .then((response) => response.json())
  .then((data) => setDepartments(data))
  .catch((error) => console.log(error));
}
const onAdd = async (id, title) => {
  await fetch("http://localhost:3004/departments", {
    method: "POST",
    body: JSON.stringify({
      id: 10,
      title: "Okul"
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((response) => {
      if (response.status !== 201) {
        return;
      } else {
        return response.json();
      }
    })
    .then((data) => {
      fetchData()
    })
    .catch((error) => console.log(error));
};




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
                onAdd()
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
