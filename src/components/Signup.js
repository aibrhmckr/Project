import { useDispatch } from "react-redux";
import "./Signup.css";
import { name, surname, epost, password, save } from "./stores/Log";
import { useState,useEffect } from "react";
import { Users } from "../api/gecici";
import { I18nProvider, LOCALES } from "./i18n";
import translate from "./i18n/translate";

const Signup = ({ setIsLog }) => {
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [SurName, setSurname] = useState("");
  const [Epost, setEpost] = useState("");
  const [Password, setPassword] = useState("");

  const [users, setUsers] = useState([]);
  useEffect(()=>{
fetchData()
  })

  const fetchData=async()=>{
    await fetch("http://localhost:3004/users")
    .then((response)=>response.json())
    .then((data)=>setUsers(data))
    .catch((error)=>console.log(error))
  }
  const onAdd = async (name,surname, email,password) => {
    await fetch("http://localhost:3004/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        surname:surname,
        email: email,
        password:password
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
        setUsers((users) => [...users, data]);
      })
      .catch((error) => console.log(error));
  };

  const clickHandler = () => {
   /* const newUser = {
      epost: Epost,
      password: Password,
      name: Name,
      surname: SurName,
    };*/
    dispatch(epost(Epost));
    dispatch(password(Password));
    dispatch(name(Name));
    dispatch(surname(SurName));

   /* 
    const user = users.find(
      (user) =>
        user.email !== Epost &&
        Epost !== "" &&
        Password !== "" &&
        Name !== "" &&
        SurName !== ""
    );*/
    let finder=false;
    users.forEach(user => {
      if(user.email===Epost)finder=true
    });
    if (!finder) {
      //console.log(user)
      setIsLog("true");
      dispatch(save());
      //Users.push(newUser);
      onAdd(Name,SurName,Epost,Password)
    }
  };
  //22.07.2022
  const [locale,setLocale]=useState(localStorage.getItem("locale"))
//
  return (
    <I18nProvider locale={locale}>
    <div className="user_info">
      <div>
        <b>{translate("name")}</b>
        <input
          className="text-field"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <b>{translate("surname")}</b>
        <input
          className="text-field"
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        />
      </div>
      <div>
        <b>{translate("email")}</b>
        <input
          className="text-field"
          onChange={(e) => {
            setEpost(e.target.value);
          }}
        />
      </div>

      <div>
        <b>{translate("password")}</b>
        <input
          className="text-field"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button className="signup_button" onClick={clickHandler}>
        <b>{translate("signup-button")}</b>
      </button>
    </div>
    </I18nProvider>
  );
};
export default Signup;
