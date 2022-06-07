import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getQueryDb } from "../firebase";

export const fetchParticipants = createAsyncThunk('Participants/fetchParticipants',
    async () => {
        try {
            return getQueryDb('Users', { field: 'admin', eq: '==', value: false }).then(snapshot => {
                return snapshot.docs.map(rawDoc => {
                  const doc = rawDoc.data()
                  return {
                      ...doc,
                      id: rawDoc.id
                  }
                })
              })
        } catch (e) {
            throw e
        }
    }
)

const initialState = {
    pending: false,
    data: [],
    error: '',
    lastUpdated: null
}
const participantSlice = createSlice({
    name: 'Participants',
    initialState,
    extraReducers: {
        [fetchParticipants.pending]: (state) => {
            state.pending = true
            state.error = ''
            state.lastUpdated = null
        },
        [fetchParticipants.fulfilled]: (state, { payload }) => {
            state.pending = false
            state.error = ''
            state.data = payload
            state.lastUpdated = new Date().toString()
        },
        [fetchParticipants.rejected]: (state, { error }) => {
            state.pending = false
            state.error = error
            state.data = []
            state.lastUpdated = new Date().toString()
        }
    }
})

export default participantSlice.reducer