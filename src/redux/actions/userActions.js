import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import Swal from "sweetalert2"



export const loginUser = createAsyncThunk('user/login', async (userData) => {
  try {
    const { data } = await axios.post(`/auth/login`, userData)
    if (data.success === true) {
      sessionStorage.setItem('token', data.token)
      Swal.fire({
        icon: 'success',
        title: 'Logged successfully',
        showConfirmButton: false,
        timer: 1000
      })
      return { user: data.user, logged: true }

    }
  } catch (error) {
    console.log(error)
    if (error.response) {
      Swal.fire({
        icon: 'error',
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: error.message,
        text: 'Try again later!',
        showConfirmButton: false,
        timer: 2000
      })
    }
  }
})