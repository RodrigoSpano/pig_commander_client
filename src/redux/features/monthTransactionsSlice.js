import { createSlice } from "@reduxjs/toolkit";
import { getAllTransactions } from "../actions/monthTransactionsActions";

const initialState = {
  transactions: [],
  backup_transactions: [],
  sortOrder: "asc",
};

const transactionsTypes = {
  expense: 'expense',
  income: 'income'
}

export const monthlyTransactionsSlice = createSlice({
  name: "monthTransactions",
  initialState,
  reducers: {
    clearFilters: (state) => {
      state.transactions = [...state.backup_transactions]
    },
    filterByType: (state, action) => {
      if (action.payload === transactionsTypes.expense) {
        state.transactions = state.backup_transactions.filter(t => t.type === transactionsTypes.expense)
      } else if (action.payload === transactionsTypes.income) {
        state.transactions = state.backup_transactions.filter(t => t.type === transactionsTypes.income)
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload.transactions;
      state.backup_transactions = action.payload.transactions;
    });
  },
});

export const { sortMonthlyTransactions } = monthlyTransactionsSlice.actions;

export default monthlyTransactionsSlice.reducer;