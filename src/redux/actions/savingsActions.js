import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//* CREATE THE SAVING
export const createSaving = createAsyncThunk(
  "saving/create",
  async (payload) => {
    try {
      const {token, ...datas} = payload;
      const { data } = await axios.post("/savings", datas, {
        headers: { 'Authorization': token },
      });
      return data;
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  }
);

//* GET ALL SAVING
export const getAllSavings = createAsyncThunk(
  "savings/getAll",
  async (token) => {
    try {
      const { data } = await axios("/savings", {
        headers: { 'Authorization': token },
      });
      console.log(data)
      return data;
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  }
);

//* UPDATE SAVING
export const updateSaving = createAsyncThunk(
  "saving/update",
  async (id, newData, token) => {
    try {
      const { data } = await axios.put(`/savings/${id}`, newData, {
        headers: { 'Authorization': token },
      });
      return data;
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  }
);

//* DELETE SAVING
export const deleteSaving = createAsyncThunk(
  "saving/delete",
  async (id, token) => {
    try {
      const { data } = await axios.delete(`/savings/${id}`, {
        headers: { 'Authorization': token },
      });
      return data;
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  }
);
