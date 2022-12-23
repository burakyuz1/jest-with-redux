import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUser = createAsyncThunk('user/fetchUser', async (id) => {
  const response = await axios.get(`${USERS_URL}/${id}`)
  debugger
  return response
})

const initialState = {
  user: { name: 'no user' },
  status: 'idle'
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = 'complete'
      state.user = action.payload.data
    })
    builder.addCase(fetchUser.rejected, (state) => {
      state.status = 'error'
    })
  }
})

export const { } = userSlice.actions
export default userSlice.reducer