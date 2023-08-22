import axios from "axios";
const { createAsyncThunk } = require("@reduxjs/toolkit");

export const getAllReviews = createAsyncThunk(
  "get all reviews",
  async (token) => {
    try {
      const { data } = await axios.get("/reviews", {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const postReview = createAsyncThunk(
  "post-review",
  async ({ token, rating, content }) => {
    try {
      const { data } = await axios.post(
        "/reviews",
        {
          rating,
          content,
        },
        {
          headers: { Authorization: token },
        }
      );
      return data;
    } catch (error) {
      alert("An error occurred");
    }
  }
);

export const deleteReview = createAsyncThunk("delete-review", async (token) => {
  try {
    const { data } = await axios.delete("/reviews", {
      headers: { Authorization: token },
    });
    return data;
  } catch (error) {
    alert("An error occurred");
  }
});
