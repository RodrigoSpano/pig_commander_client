import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//* CREATE THE SAVING
export const createSaving = createAsyncThunk(
  "saving/create",
  async (saving, token) => {
    try {
      const { data } = await axios.post("/savings", saving, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

//* GET ALL SAVING
export const getAllSavings = createAsyncThunk(
  "savings/getAll",
  async (token) => {
    try {
      const { data } = await axios("/savings", {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

//* UPDATE SAVING
export const updateSaving = createAsyncThunk(
  "saving/update",
  async (id, newData, token) => {
    try {
      const { data } = await axios.put(`/savings/${id}`, newData, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

//* DELETE SAVING
export const deleteSaving = createAsyncThunk(
  "saving/delete",
  async (id, token) => {
    try {
      const { data } = await axios.delete(`/savings/${id}`, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
