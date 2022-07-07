import { createSlice } from "@reduxjs/toolkit";

export const logSlice = createSlice({
  name: "counter",
  initialState: {
    value: {
      epost: "",
      password: "",
      name: "",
      surname: "",
    },
  },
  reducers: {
    epost: (state, action) => {
      state.value.epost = action.payload;
      console.log(state.value.epost);
    },
    password: (state, action) => {
      state.value.password = action.payload;
      console.log(state.value.password);
    },
    name: (state, action) => {
      state.value.name = action.payload;
    },
    surname: (state, action) => {
      state.value.surname = action.payload;
    },
    logging: (state) => {
      if (
        state.value.epost === "alicakir" &&
        state.value.password === "12345678"
      ) {
        console.log("Giriş yapıldı");
      } else {
        console.log("Kullanıcı adı veya parola hatalı");
      }
    },
    save: (state) => {
      if (
        state.value.epost !== "" &&
        state.value.password !== "" &&
        state.value.name !== "" &&
        state.value.surname !== ""
      ) {
        console.log("Kaydedildi");
      } else {
        console.log("Lütfen tüm alanları doldurun");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { logging, epost, password, name, surname, save } =
  logSlice.actions;

export default logSlice.reducer;
