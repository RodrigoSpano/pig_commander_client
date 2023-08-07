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

// * Sort dates from newest to oldest
const sortSavings = (state) => {
  const sortedDateSavings = state.allSavings.sort(
    (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
  );
  state.allSavings = sortedDateSavings;
  state.backup_savings = sortedDateSavings;
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
      sortSavings(state)
    });
    // ! ADD THE SAVING CREATE IN THE STATES
    builder.addCase(createSaving.fulfilled, (state, action) => {
      state.allSavings.unshift(action.payload);
      state.backup_savings.unshift(action.payload);
      sortSavings(state)
    });
    // ! UPDATE ONE SAVING
    builder.addCase(updateSaving.fulfilled, (state, action) => {
      let savingUpdate = state.allSavings.filter(
        (saving) => saving.id !== action.payload.id
      );
      savingUpdate.unshift(action.payload);
      state.allSavings = savingUpdate;
      state.backup_savings = savingUpdate;
      sortSavings(state)
    });
    // ! DELETE ONE SAVING
    builder.addCase(deleteSaving, (state, action) => {
      let savingFilterDeleted = state.backup_savings.filter(
        (saving) => saving.id !== action.payload.id
      );
      state.allSavings = savingFilterDeleted;
      state.backup_savings = savingFilterDeleted;
      sortSavings(state)
    });
  },
});

export default savingSlice.reducer;
