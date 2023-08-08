import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const loginUser = createAsyncThunk("user/login", async (userData) => {
  try {
    const { data } = await axios.post(`/auth/login`, userData);
    if (data.success === true) {
      localStorage.setItem("token", data.token);
      Swal.fire({
        icon: "success",
        title: "Logged successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      return { user: data.user, logged: true };
    }
  } catch (error) {
    if (error.response) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: error.message,
        text: "Try again later!",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }
});

export const getUserData = createAsyncThunk("getUserData", async (token) => {
  try {
    const { data } = await axios("/profile", {
      headers: { Authorization: token },
    });
    return data;
  } catch (error) {
    if (error.response) {
      Swal.fire({
        icon: "error",
        title: error.response.data.error,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid token or user not found",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }
});