import { createSlice } from "@reduxjs/toolkit";
import { getJournal } from "../actions/journalAction";

const initialState = {
  arrayJournals: [],
};

const journalSlice = createSlice({
  name: "journalAPI",
  initialState,
  reducer: {},

  extraReducers: (builder) => {
    builder.addCase(getJournal.fulfilled, (state, action) => {
      state.arrayJournals = action.payload;
    });
  },
});

export const { updateState } = journalSlice.actions;

export default journalSlice.reducer;
