import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDb } from "../firebase";

export const fetchUser = createAsyncThunk('User/fetchUser', 
    async (userId) => {
        try {
            let snapshot = await getDb('Users', userId)
            return snapshot.data()
        } catch (e) {
            return e
        }
    }
)

const initialState = {
    loading: false,
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
        [fetchUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.data = null
            state.error = payload
        }
    }
});

export default userSlice.reducer