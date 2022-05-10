import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import activityReducer from './activitySlice'
import taskReducer from './taskSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        activities: activityReducer,
        task: taskReducer
    }
})

export default store;