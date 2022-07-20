import { configureStore } from '@reduxjs/toolkit'
import logReducer from "./components/stores/Log";
import SettingsSlice from './components/stores/SettingSlice';
export default configureStore({
  reducer: {
    Log:logReducer,
    Settings:SettingsSlice
  },
})