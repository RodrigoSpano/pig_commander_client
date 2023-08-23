import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const loginUser = createAsyncThunk("user/login", async (userData) => {
  try {
    const { data } = await axios.post(`/auth/login`, userData);
    if (data.success === true) {
      document.cookie = `token=${data.token}; expires=${new Date(
        new Date().getTime() + 3 * 24 * 60 * 60 * 1000
      ).toUTCString()}; path=/`;
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
        title: error.response.data.message.replace(/^\w/, (c) =>
          c.toUpperCase()
        ),
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

export const updatePicture = createAsyncThunk(
  "post picture",
  async ({ formData, token }) => {
    try {
      const { data } = await axios.post("/profile", formData, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "Update user",
  async ({ token, name, lastname }) => {
    try {
      const URL = `/profile/updateuser?${name ? `name=${name}` : ""}${
        lastname ? `lastname=${lastname}` : ""
      }`;
      const { data } = await axios.put(URL, null, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const updatePassword = createAsyncThunk(
  "Update Password",
  async ({ Passwords, token }) => {
    try {
      const { data } = await axios.put("/profile/updatepassword", Passwords, {
        headers: { Authorization: token },
      });
      Swal.fire({
        icon: "success",
        title: "You have updated your password",
        timer: 1500,
      });
      return data;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.error,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
);

export const deleteUser = createAsyncThunk("Delete User", async (token) => {
  try {
    const { data } = await axios.delete("/profile", {
      headers: { Authorization: token },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
});
