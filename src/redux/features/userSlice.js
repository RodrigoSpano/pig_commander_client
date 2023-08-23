import { createSlice } from "@reduxjs/toolkit";
import { getUserData, loginUser, updatePicture } from "../actions/userActions";

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
  },
});

// Action creators are generated for each case reducer function
export const { clearUser, setUserInfo } = userSlice.actions;

export default userSlice.reducer;
