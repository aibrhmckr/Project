import { createSlice } from '@reduxjs/toolkit'

export const logSlice = createSlice({
  name: 'counter',
  initialState: {
    value: {
        epost: "",
        password: "",
        name: "",
        surname: ""
    },
  },
  reducers: {
    epost:(state,action)=>{
      state.value.epost= action.payload
      console.log(state.value.epost)

    },
    password:(state,action)=>{
      state.value.password= action.payload
      console.log(state.value.password)

    },
    logging:(state)=>{
      if(state.value.epost=="alicakir" && state.value.password){
        console.log("Giriş yapıldı")
      }
      else{
        console.log("Kullanıcı adı veya parola hatalı")
      }
    }

    
  },
})

// Action creators are generated for each case reducer function
export const {logging,epost,password} = logSlice.actions

export default logSlice.reducer