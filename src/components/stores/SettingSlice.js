
import {createSlice} from "@reduxjs/toolkit";
import { Language } from "../Language";
import useLocalStorage from "use-local-storage";

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        language: Language["en"],
        settings: JSON.parse(localStorage.getItem("settings")),
        theme:localStorage.getItem('theme')
    },
    reducers:{
        changeLanguage(state,action){
            state.language = action.payload
            localStorage.setItem("settings",JSON.stringify({...state.settings,language:action.payload}))
        },
        changeTheme(state,action){
            state.theme=action.payload
            localStorage.setItem('theme'==='light'?'dark':'light')
        }

    }
})

export const settingsActions = settingsSlice.actions

export default settingsSlice