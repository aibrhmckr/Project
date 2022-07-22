import { useState } from "react";
//import { useSelector } from "react-redux";

import { logging, epost, password } from "./stores/Log";
import { useDispatch } from "react-redux";

import "./Signin.css";
import { Users } from "../api/gecici";
import { I18nProvider } from "./i18n";
import { LOCALES } from "./i18n";
import translate from "./i18n/translate";
const Signin = ({ setIsLog }) => {
  //const epost = useSelector((state) => state.Log.value.epost);
  //const password = useSelector((state) => state.Log.value.password);

  const [Epost, setEpost] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();

  const LoginHandler = () => {
    dispatch(epost(Epost));
    dispatch(password(Password));
    const user = Users.find(
      (user) =>
        user.epost === Epost &&
        user.password === Password &&
        (Epost !== "") && (Password !== "")
    );
    if (user) {
      setIsLog("true");
      dispatch(logging());
    }
  };
  //22.07.2022
  const [locale,setLocale]=useState(localStorage.getItem("locale"))

  return (
    <I18nProvider locale={locale}>
    <div className="user_info">
      
      <div>
        <b>{translate("email")}</b>
        <input
          className="e-post__field"
          onChange={(e) => {
            setEpost(e.target.value);
          }}
        />
      </div>

      <div>
        <b>{translate("password")}</b>
        <input
          className="password__field"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button className="login_button" onClick={LoginHandler}>
        <b>{translate("signin-button")}</b>
      </button>
    </div>
    </I18nProvider>
  );
};
export default Signin;
