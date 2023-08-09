import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import transactionsReducer from "./features/transactionsSlice";
import monthTransactionsReducer from "./features/monthTransactionsSlice";
import savingsReducer from "./features/savingsSlice";
import inversionsReducer from "./features/inversionsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    transactions: transactionsReducer,
    monthTransactions: monthTransactionsReducer,
    savings: savingsReducer,
    inversions: inversionsReducer,
  },
});
