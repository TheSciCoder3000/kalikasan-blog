import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import activityReducer from './activitySlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        activities: activityReducer
        // task: 
    }
})

export default store;