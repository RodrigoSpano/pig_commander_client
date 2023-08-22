import { createSlice } from "@reduxjs/toolkit";
import {
  getAllInversions,
  createInversion,
  updateInversion,
  deleteInversion,
} from "../actions/inversionsActions";

// * Initial state with required inversions
const initialState = {
  allInversions: [],
  backup_inversions: [],
};

export const inversionSlice = createSlice({
  name: "inversions",
  initialState,
  reducers: {},

  // * Asynchronous calls
  extraReducers: (builder) => {
    // ! SAVES ALL INVERSION IN allInversions AND IN backup_inversions
    builder.addCase(getAllInversions.fulfilled, (state, action) => {
      state.allInversions = action.payload;
      state.backup_inversions = action.payload;
    });
    // ! ADD THE INVERSION CREATE IN THE STATES
    builder.addCase(createInversion.fulfilled, (state, action) => {
      state.allInversions.unshift(action.payload);
      state.backup_inversions.unshift(action.payload);
    });
    // ! UPDATE ONE INVERSION
    builder.addCase(updateInversion.fulfilled, (state, action) => {
      let inversionUpdate = state.allInversions.filter(
        (inversion) => inversion.id !== action.payload.id
      );
      inversionUpdate.unshift(action.payload);
      state.allInversions = inversionUpdate;
      state.backup_inversions = inversionUpdate;
    });
    // ! DELETE ONE INVERSION
    builder.addCase(deleteInversion.fulfilled, (state, action) => {
      let inversionFilterDeleted = state.backup_inversions.filter(
        (inversion) => inversion.id !== action.payload
      );
      state.allInversions = inversionFilterDeleted;
      state.backup_inversions = inversionFilterDeleted;
    });
  },
});

export default inversionSlice.reducer;
