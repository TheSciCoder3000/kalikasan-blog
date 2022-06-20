import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDb } from "../firebase";

// Fetch data async action
export const fetchTasks = createAsyncThunk('Task/fetchTasks',
    async () => {
        try {
            let snapshot = await getDb('Tasks')
            return snapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } }).sort((a, b) => a.lessonIndx - b.lessonIndx)
        } catch (e) {
            throw e
        }
    }
)

const initialState = {
    loading: false,
    data: [],
    error: ''
}

// Task slice creation
const taskSlice = createSlice({
    name: 'Tasks',
    initialState,
    extraReducers: {
        [fetchTasks.pending]: (state) => {
            state.loading = true
        },
        [fetchTasks.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.data = payload.filter(task => task.lessonId !== 'Seminar')
            state.error = ''
        },
        [fetchTasks.rejected]: (state, { error }) => {
            state.loading = false
            state.data = []
            state.error = error
        }
    }
})

export default taskSlice.reducer