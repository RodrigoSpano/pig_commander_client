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
        for(let i=0; i<10; i++){
            state.arrayJournals = [...state.arrayJournals, action.payload[i]]
        }
    })
  }
});

export const { updateState } = journalSlice.actions;

export default journalSlice.reducer;
