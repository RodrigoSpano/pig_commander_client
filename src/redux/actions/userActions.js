import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const API_URI = `${process.env.API_URI}`

export const loginUser = createAsyncThunk('user/login', async (userData) => {
  try {
    const { data } = await axios.post(`${API_URI}/auth/login`, userData)
    return data
  } catch (error) {
    console.log(error)
  }
})

export const authorizeUser = createAsyncThunk('user/secret', async (token) => {
  try {
    const { data } = await axios(`${API_URI}/auth/secret`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
})