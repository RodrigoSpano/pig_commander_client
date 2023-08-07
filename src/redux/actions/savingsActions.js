import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//* CREATE THE SAVING
export const createSaving = createAsyncThunk(
  "saving/create",
  async (saving) => {
    try {
      const { data } = await axios.post("/savings", saving);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

//* GET ALL SAVING
export const getAllSavings = createAsyncThunk("savings/getAll", async () => {
  try {
    const { data } = await axios("/savings");
    const allSavings = data.map((saving) => {
      return {
        id: saving.id,
        name: saving.name,
        mount: saving.mount,
        goal: saving.goal,
        createdAt: saving.createdAt,
        updatedAt: saving.updatedAt,
        user_id: saving.user_id,
      };
    });
    return allSavings;
  } catch (error) {
    console.log(error);
  }
});

//* UPDATE SAVING
export const updateSaving = createAsyncThunk(
  "saving/update",
  async (id, newData) => {
    try {
      const { data } = await axios.put(`/savings/${id}`, newData);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

//* DELETE SAVING
export const deleteSaving = createAsyncThunk("saving/delete", async (id) => {
  try {
    const { data } = await axios.delete(`/savings/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});
