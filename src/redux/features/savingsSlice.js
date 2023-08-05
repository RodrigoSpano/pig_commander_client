import { createSlice } from "@reduxjs/toolkit";
import {
  getAllSavings,
  createSaving,
  updateSaving,
  deleteSaving,
} from "../actions/savingsActions";

// * Initial state with required savings
const initialState = {
  allSavings: [],
  backup_savings: [],
};

export const savingSlice = createSlice({
  name: "savings",
  initialState,
  reducers: {},

  // * Asynchronous calls
  extraReducers: (builder) => {
  // ! SAVES ALL SAVINGS IN allSavings AND IN backup_savings
    builder.addCase(getAllSavings.fulfilled, (state, action) => {
      state.allSavings = action.payload;
      state.backup_savings = action.payload;
    });
  },
});


export default savingSlice.reducer;
