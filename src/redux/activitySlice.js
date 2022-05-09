import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDb } from '../firebase'

export const fetchActivities = createAsyncThunk('Activity/fetchActivities',
    async () => {
        try {
            let snapshot = await getDb('Activities')
            return snapshot.docs.map(doc => doc.data())
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
const activitySlice = createSlice({
    name: 'Activity',
    initialState,
    extraReducers: {
        [fetchActivities.pending]: (state) => {
            state.loading = true
        },
        [fetchActivities.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.data = payload
            state.error = ''
        },
        [fetchActivities.rejected]: (state, { error }) => {
            state.loading = false
            state.data = []
            state.error = error
        }
    }
})

export default activitySlice.reducer