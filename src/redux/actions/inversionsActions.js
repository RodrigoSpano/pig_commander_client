import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//* CREATE THE INVERSION
export const createInversion = createAsyncThunk(
  "inversion/create",
  async ( payload) => {
    try {
      const {token, ...datas} = payload;
      const { data } = await axios.post("/inversions",  datas  , {
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

//* GET ALL INVERSIONS
export const getAllInversions = createAsyncThunk(
  "inversions/getAll",
  async (token) => {
    try {
      const { data } = await axios("/inversions", {
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

//* UPDATE INVERSION
export const updateInversion = createAsyncThunk(
  "inversion/update",
  async (id, newData, token) => {
    try {
      const { data } = await axios.put(`/inversions/${id}`, newData, {
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

//* DELETE INVERSION
export const deleteInversion = createAsyncThunk(
  "inversion/delete",
  async (payload) => {
    try {
      const {token, id} = payload;
      const { data } = await axios.delete(`/inversions/${id}`, {
        headers: { Authorization: token },
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
