import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getJournal = createAsyncThunk("journalName", async (token) => {
  const { data } = await axios.get("/news", {
    headers: { Authorization: token },
  });
  console.log(data);
  return data;
});

export { getJournal };
