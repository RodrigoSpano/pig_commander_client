import { createSlice } from "@reduxjs/toolkit";
import {
  banUser,
  getAllUsersCount,
  getBannedUsers,
  getBasicUsers,
  getProUsers,
  getTableUsers,
  unbanUser,
} from "../actions/adminActions";

const initialState = {
  allUsers: [],
  basicUsers: [],
  proUsers: [],
  bannedUsers: [],
  tableUsers: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(banUser.fulfilled, (state, action) => {
      state.bannedUsers = state.bannedUsers + 1;
    });
    builder.addCase(unbanUser.fulfilled, (state, action) => {
      state.bannedUsers = state.bannedUsers - 1;
    });
    builder.addCase(getAllUsersCount.fulfilled, (state, action) => {
      state.allUsers = action.payload;
    });
    builder.addCase(getBasicUsers.fulfilled, (state, action) => {
      state.basicUsers = action.payload;
    });
    builder.addCase(getProUsers.fulfilled, (state, action) => {
      state.proUsers = action.payload;
    });
    builder.addCase(getBannedUsers.fulfilled, (state, action) => {
      state.bannedUsers = action.payload;
    });
    builder.addCase(getTableUsers.fulfilled, (state, action) => {
      state.tableUsers = action.payload;
    });
  },
});

export const { updateState } = adminSlice.actions;

export default adminSlice.reducer;
