import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDb, setDb } from "../firebase";

export const fetchUser = createAsyncThunk('User/fetchUser', 
    async (userId) => {
        try {
            let snapshot = await getDb('Users', userId)
            return snapshot.data()
        } catch (e) {
            throw e
        }
    }
)

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

const initialState = {
    loading: true,
    data: null,
    error: ''
}

const userSlice = createSlice({
    name: 'User',
    initialState,
    extraReducers: {
        [fetchUser.pending]: (state) => {
            state.loading = true
        },
        [fetchUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.data = payload
            state.error = ''
        },
        [fetchUser.rejected]: (state, { error }) => {
            state.loading = false
            state.data = null
            state.error = error
        },

        [updateTask.fulfilled]: (state, { payload }) => {
            let i = state.data.tasks.findIndex(task => task.lessonId === payload.lessonId)
            console.log('payload', payload)
            if (i > -1) state.data.tasks[i] = payload
            else state.data.tasks.push(payload)
        }
    }
});

// Actions
const setTask = (dispatch, uid, taskValue) => {
    dispatch(updateTask({ userId: uid, newTask: taskValue }))
}

export { setTask }
export default userSlice.reducer