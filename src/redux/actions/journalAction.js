import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getJournal = createAsyncThunk("journalName", async () => {
  const response = await axios.get("https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=dem"); /* ruta api */

  console.log(response.data.feed)
  return response.data.feed;
});

export { getJournal };
