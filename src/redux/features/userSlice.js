import { createSlice } from '@reduxjs/toolkit'
import { authorizeUser, loginUser } from '../actions/userActions'

const initialState = {
  name: '',
  lastname: '',
  email: '',
  image: '',
  premium: false,
  logged: false
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: (state) => { state = initialState }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.name = action.payload.user.name;
        state.lastname = action.payload.user.lastname
        state.email = action.payload.user.email
        state.image = action.payload.user.image
        state.premium = action.payload.user.premium
      }
    })
    builder.addCase(authorizeUser.fulfilled, (state, action) => {
      if (action.payload.logged) {
        state.logged = true
      }
    })
  }
})

// Action creators are generated for each case reducer function
export const { clearUser } = userSlice.actions

export default userSlice.reducer