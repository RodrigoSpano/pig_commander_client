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
    // ! ADD THE SAVING CREATE IN THE STATES
    builder.addCase(createSaving.fulfilled, (state, action) => {
      state.transactions.unshift(action.payload);
      state.backup_savings.unshift(action.payload);
    });
    // ! UPDATE THE SAVINGS
    builder.addCase(updateSaving.fulfilled, (state, action) => {
      let savingUpdate = state.allSavings.filter(
        (saving) => saving.id !== action.payload.id
      );
      savingUpdate.unshift(action.payload);
      state.allSavings = savingUpdate;
      state.backup_savings = savingUpdate;
    });
    // ! DELETE ONE SAVING
    builder.addCase(deleteSaving, (state, action) => {
      let savingFilterDeleted = state.backup_savings.filter(
        (el) => el.id !== action.payload.id
      );
      state.allSavings = savingFilterDeleted;
      state.backup_savings = savingFilterDeleted;
    });
  },
});

export default savingSlice.reducer;
