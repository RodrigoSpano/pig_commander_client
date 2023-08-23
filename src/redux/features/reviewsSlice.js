import { createSlice } from "@reduxjs/toolkit";
import {
  deleteReview,
  getAllReviews,
  postReview,
} from "../actions/reviewsAction";

const initialState = {
  allReviews: [],
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllReviews.fulfilled, (state, action) => {
      state.allReviews = action.payload;
    });
    builder.addCase(postReview.fulfilled, (state, action) => {
      state.allReviews = action.payload;
    });
    builder.addCase(deleteReview.fulfilled, (state, action) => {
      state.allReviews = state.allReviews.filter(
        (rev) => rev.id !== action.payload
      );
    });
  },
});

export const { updateState } = reviewSlice.actions;

export default reviewSlice.reducer;
