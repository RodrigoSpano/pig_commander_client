import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//* CREATE THE INVERSION
export const createInversion = createAsyncThunk(
  "inversion/create",
  async (inversion, token) => {
    try {
      const { data } = await axios.post("/inversions", inversion, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

//* GET ALL INVERSIONS
export const getAllInversions = createAsyncThunk(
  "inversions/getAll",
  async (token) => {
    try {
      const { data } = await axios("/inversions", {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

//* UPDATE INVERSION
export const updateInversion = createAsyncThunk(
  "inversion/update",
  async (id, newData, token) => {
    try {
      const { data } = await axios.put(`/inversions/${id}`, newData, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

//* DELETE INVERSION
export const deleteInversion = createAsyncThunk(
  "inversion/delete",
  async (id, token) => {
    try {
      const { data } = await axios.delete(`/inversions/${id}`, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
