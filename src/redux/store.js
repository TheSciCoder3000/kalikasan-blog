import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import activityReducer from './activitySlice'
import taskReducer from './taskSlice'
import participantsReducer from './participantSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        activities: activityReducer,
        task: taskReducer,
        participants: participantsReducer
    }
})

export default store;