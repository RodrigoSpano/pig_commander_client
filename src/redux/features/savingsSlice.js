import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  savings: []
}

export const savingSlice = createReducer({
  name: 'savings',
  initialState,
  reducers: {}
})