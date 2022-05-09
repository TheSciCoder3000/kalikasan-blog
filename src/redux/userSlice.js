import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDb } from "../firebase";

export const fetchUser = createAsyncThunk('User/fetchUser', 
    async (userId) => {
        try {
            console.log('user request', userId)
            let snapshot = await getDb('Users', userId)
            return snapshot.data()
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
            console.log('fetch user payload', payload)
            state.loading = false
            state.data = payload
            state.error = ''
        },
        [fetchUser.rejected]: (state, { error }) => {
            state.loading = false
            state.data = null
            state.error = error
        }
    }
});

export default userSlice.reducer