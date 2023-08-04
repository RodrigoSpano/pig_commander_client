import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'



export const authorizeUser = async (token) => {
  try {
    const { data } = await axios(`/auth/secret`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
}
export const loginUser = createAsyncThunk('user/login', async (userData) => {
  try {
    const { data } = await axios.post(`/auth/login`, userData)
    if (data.token) {
      const auth = await authorizeUser(data.token)
      if (auth.logged) {
        alert('logeado perri')
        return { user: data.user, logged: true }
      }
    }
  } catch (error) {
    alert('error')
    console.log(error)
  }
})