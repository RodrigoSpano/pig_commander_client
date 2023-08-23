import { createSlice } from "@reduxjs/toolkit";
import {
  deleteUser,
  getUserData,
  loginUser,
  updatePassword,
  updatePicture,
  updateUser,
} from "../actions/userActions";

const initialState = {
  name: "",
  lastname: "",
  email: "",
  image: "",
  premium: false,
  logged: false,
  createdAt: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload?.logged) {
        state.name = action.payload.user.name;
        state.lastname = action.payload.user.lastname;
        state.email = action.payload.user.email;
        state.image = action.payload.user.image;
        state.premium = action.payload.user.premium;
        state.logged = true;
      }
    }),
      builder.addCase(getUserData.fulfilled, (state, action) => {
        state.name = action.payload.user.name;
        state.lastname = action.payload.user.lastname;
        state.email = action.payload.user.email;
        state.image = action.payload.user.image;
        state.premium = action.payload.user.premium;
        state.createdAt = action.payload.user.createdAt;
        state.logged = true;
      }),
      builder.addCase(updatePicture.fulfilled, (state, action) => {
        state.image = action.payload;
      });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      if (action.payload.name !== undefined) {
        state.name = action.payload.name;
      }
      if (action.payload.lastname !== undefined) {
        state.lastname = action.payload.lastname;
      }
    });
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      state.password = action.payload;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state = initialState;
    });
  },
});

// Action creators are generated for each case reducer function
export const { clearUser, setUserInfo } = userSlice.actions;

export default userSlice.reducer;
