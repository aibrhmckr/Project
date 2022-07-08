import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../../api/gecici";
import { users } from "../../api/db.json";

export const logSlice = createSlice({
  name: "counter",
  initialState: {
    value: {
      epost: "",
      password: "",
      name: "",
      surname: "",
      auth: false,
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

    
    },
    logout: (state) => {
      localStorage.setItem("loggd","false")
      localStorage.removeItem("epost")
    },
  },
});

// Action creators are generated for each case reducer function
export const { logging, epost, password, name, surname, save, logout } = logSlice.actions;

export default logSlice.reducer;
