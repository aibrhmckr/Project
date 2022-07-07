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

    logging: (state) => {
      /*
      Users.forEach((element) => {
        if (
          state.value.epost === element.epost &&
          state.value.password === element.password
        ) {
          console.log("Giriş yapıldı");
          state.value.auth = true;
          element.logged = true;

          const LogUser = {
            epost: state.value.epost,
            password: state.value.password,
            name: state.value.name,
            surname: state.value.surname,
          }; //silincek


          // burada giriş yaptığında giriş veri tabanına kaydetsin ve kullancı girili kaslın
        } else {
          console.log("Kullanıcı adı veya parola hatalı");
        }
      });*/


    },
    save: (state) => {
      /*
      if (
        state.value.epost !== "" &&
        state.value.password !== "" &&
        state.value.name !== "" &&
        state.value.surname !== ""
      ) {
        ////////////////

        let find = false;
        Users.forEach((element) => {
          if (state.value.epost === element.epost) {
            find = true;
            console.log("E posta kullanılıyor");
          }
          
        });
        if(find===false){
          const newUser = {
            epost: state.value.epost,
            password: state.value.password,
            name: state.value.name,
            surname: state.value.surname,
            logged:true
          };
          Users.push(newUser)
        }
        ////////////////////////////
        console.log("Kaydedildi");
        //Burada kullanıcıyı genel veri tabanına kaydetsin ve giriş veri tabanına da kaydetsin
        //ardından kullanıcı girili kalsın
        
      } else {
        console.log("Lütfen tüm alanları doldurun");
      }*/
    
    },
    logout: (state) => {
      Users.forEach((element) => {
        if (state.value.epost === element.epost) {
          //çıkış yap

        }
        
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { logging, epost, password, name, surname, save, logout } = logSlice.actions;

export default logSlice.reducer;
