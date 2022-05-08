import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store = configureStore({
    reducer: {
        user: userReducer
        // activities:
        // task: 
    }
})

export default store;