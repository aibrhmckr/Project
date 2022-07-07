import { configureStore } from '@reduxjs/toolkit'
import logReducer from "./components/stores/Log";

export default configureStore({
  reducer: {
    Log:logReducer
  },
})