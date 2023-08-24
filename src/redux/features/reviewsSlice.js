import { createSlice } from "@reduxjs/toolkit";
import {
  deleteReview,
  getAllReviews,
  postReview,
} from "../actions/reviewsAction";

const initialState = {
  allReviews: [],
  oneReview: [null],
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.oneReview = state.allReviews.filter((r) => r.id === action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllReviews.fulfilled, (state, action) => {
      state.allReviews = action.payload;
    });
    builder.addCase(postReview.fulfilled, (state, action) => {
      state.allReviews = action.payload;
    });
    builder.addCase(deleteReview.fulfilled, (state, action) => {
      state.allReviews = state.allReviews.filter(
        (rev) => rev.id !== Number(action.payload)
      );
      state.oneReview = [null];
    });
  },
});

export const { setReviews } = reviewSlice.actions;

export default reviewSlice.reducer;
