import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../../api/gecici";

export const logSlice = createSlice({
  name: "counter",
  initialState: {
    value: {
      epost: "",
      password: "",
      name: "",
      surname: "",
      auth: false,
      ISLog: localStorage.getItem("loggd")
    },
  },
  reducers: {
    epost: (state, action) => {
      state.value.epost = action.payload;
      //console.log(state.value.epost);
    },
    password: (state, action) => {
      state.value.password = action.payload;
      //console.log(state.value.password);
    },
    name: (state, action) => {
      state.value.name = action.payload;
    },
    surname: (state, action) => {
      state.value.surname = action.payload;
    },

    logging: (state,action) => {

      localStorage.setItem("loggd","true")
      localStorage.setItem("epost",state.value.epost)
    },
    save: (state) => {
      const user = Users.find(user=>user.epost===state.value.epost && user.password===state.value.password)

      localStorage.setItem("loggd","true")
      localStorage.setItem("epost",state.value.epost)
    
    },
    logout: (state) => {
      localStorage.setItem("loggd","false")
      localStorage.removeItem("epost")
    },
    ISLog:(state)=>{

    }
  },
});

// Action creators are generated for each case reducer function
export const { logging, epost, password, name, surname, save, logout,ISLog } = logSlice.actions;

export default logSlice.reducer;
