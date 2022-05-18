import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDb, setDb } from "../firebase";

// Data fetching async action
export const fetchUser = createAsyncThunk('User/fetchUser', 
    async (userId) => {
        try {
            let snapshot = await getDb('Users', userId)
            return snapshot.data()
        } catch (e) {
            console.error(e)
            throw e
        }
    }
)

// Data update async action
const updateTask = createAsyncThunk('User/updateTask',
    async ({ userId, newTask }, { getState }) => {
        try {
            let userTasks = getState().user.data.tasks.map(task => task)
            let i = userTasks.findIndex(task => task.lessonId === newTask.lessonId)
            if (i > -1) userTasks[i] = newTask
            else userTasks.push(newTask)

            await getDb('Users', userId).then(snapshot => {
                let userDoc = snapshot.data()
                return setDb('Users', userId, {
                    ...userDoc,
                    tasks: userTasks
                })
            })
            return newTask
        } catch (e) {
            throw e
        }
    }
)

// Update User Profile
export const updateUser = createAsyncThunk('User/UpdateProfile',
    async ({ userId, FirstName, LastName }, { getState }) => {
        try {
            let currUserData = getState().user.data
            await setDb('Users', userId, { ...currUserData,  FirstName, LastName})
            console.log('first name async', FirstName)
            return { FirstName, LastName }
        } catch (e) {
            console.error(e)
            throw e
        }
    }
)


const initialState = {
    loading: true,
    taskLoading: false,
    profileLoading: false,
    data: null,
    error: ''
}

// Create user slice
const userSlice = createSlice({
    name: 'User',
    initialState,
    extraReducers: {
        [fetchUser.pending]: (state) => {
            state.loading = true
        },
        [fetchUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.taskLoading = false
            state.data = payload
            state.error = ''
        },
        [fetchUser.rejected]: (state, { error }) => {
            state.loading = false
            state.taskLoading = false
            state.data = null
            state.error = error
        },

        [updateTask.pending]: (state) => {
            state.taskLoading = true
        },
        [updateTask.fulfilled]: (state, { payload }) => {
            state.taskLoading = false
            let i = state.data.tasks.findIndex(task => task.lessonId === payload.lessonId)
            if (i > -1) state.data.tasks[i] = payload
            else state.data.tasks.push(payload)
        },
        [updateTask.rejected]: (state, { error }) => {
            state.taskLoading = false
            state.error = error
        },

        [updateUser.pending]: (state) => {
            state.profileLoading = true
        },
        [updateUser.fulfilled]: (state, { payload: { FirstName, LastName } }) => {
            state.profileLoading = false
            state.data.FirstName = FirstName
            state.data.LastName = LastName
        },
        [updateUser.rejected]: (state, { error }) => {
            state.profileLoading = false
            console.log(error.message)
        }
    }
});

// Actions
const setTask = (dispatch, uid, taskValue) => {
    dispatch(updateTask({ userId: uid, newTask: taskValue }))
}

export { setTask }
export default userSlice.reducer