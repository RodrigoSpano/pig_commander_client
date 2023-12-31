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
  async (payload) => {
    try {
      const {token, id, amount } = payload;
      const { data } = await axios.put(`/savings/${id}`, {amount:amount}, {
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
  async (payload) => {
    try {
      const {token, id} = payload;
      await axios.delete(`/savings/${id}`, {
        headers: { 'Authorization': token },
      });
      return id;
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
