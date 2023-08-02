import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  lastname: '',
  email: '',
  premium: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.lastname = action.payload.lastnname
      state.email = action.payload.email
      state.premium = action.payload.premium
    },
    clearUser: (state) => { state = initialState }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer