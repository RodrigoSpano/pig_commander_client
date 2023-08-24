import axios from "axios";
import Swal from "sweetalert2";
const { createAsyncThunk } = require("@reduxjs/toolkit");

export const getAllReviews = createAsyncThunk(
  "get all reviews",
  async (token) => {
    try {
      const { data } = await axios.get("/getReview", {
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
      Swal.fire({
        toast: true,
        icon: "success",
        title: "You have successfully reviewed",
        animation: false,
        position: "top-right",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
      });
      return data;
    } catch (error) {
      Swal.fire({
        animation: true,
        title: "You already have a review",
      });
    }
  }
);

export const deleteReview = createAsyncThunk(
  "delete-review",
  async ({ token, id }) => {
    try {
      const { data } = await axios.delete(`/reviews/${id}`, {
        headers: { Authorization: token },
      });
      return data;
    } catch (error) {
      alert("An error occurred");
    }
  }
);
